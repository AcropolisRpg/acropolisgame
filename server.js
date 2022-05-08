const express = require('express');
const Matter = require('matter-js');
const dotenv = require('dotenv');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static('dist'));
dotenv.config();

const frameRate = 1000 / 60;
const canvas = { width: 10000, height: 10000 };
const boxes = 0;
const playered = 0;
const playerSize = 64;
const wallThickness = 20;
let online = 0;

const entities = {
  players: [],
  boxes: [...Array(boxes)].map(() =>
    Matter.Bodies.rectangle(
      Math.random() * canvas.width,
      playerSize,
      Math.random() * playerSize + playerSize,
      Math.random() * playerSize + playerSize
    )
  ),
  walls: [
    Matter.Bodies.rectangle(canvas.width / 2, 0, canvas.width, wallThickness, {
      isStatic: true,
    }),
    Matter.Bodies.rectangle(
      0,
      canvas.height / 2,
      wallThickness,
      canvas.height,
      { isStatic: true }
    ),
    Matter.Bodies.rectangle(
      canvas.width,
      canvas.width / 2,
      wallThickness,
      canvas.width,
      { isStatic: true }
    ),
    Matter.Bodies.rectangle(
      canvas.width / 2,
      canvas.height,
      canvas.width,
      wallThickness,
      { isStatic: true }
    ),
  ],
};

const engine = Matter.Engine.create();
engine.gravity.y = 0;
engine.gravity.x = 0;
Matter.Composite.add(engine.world, Object.values(entities).flat());

const toVertices = (e) => e.vertices.map(({ x, y }) => ({ x, y }));
const player = entities.player;

let lastUpdate = Date.now();
let lastDelta= Date.now();
let dt;
let fuerzaX = 100;

function getDistance(Vector1, Vector2) {
  return Math.sqrt(
    Math.pow(Vector1.x - Vector2.x, 2) + Math.pow(Vector1.y - Vector2.y, 2)
  );
}

function lerp (start, end, amt){
  return (1-amt)*start+amt*end
}

setInterval(() => {
  let now = Date.now();
  dt = (now - lastUpdate) / frameRate;
  // console.log('correction', dt / lastDelta)
  let correction =  dt / lastDelta
  lastDelta = dt
  //console.log('dt',dt, now, lastUpdate)
  //console.log('fps',1000/(now - lastUpdate))
  let fps = 1000 / (now - lastUpdate);
  // console.log(now - lastUpdate, dt, frameRate, fps)
  lastUpdate = now;

  
  io.emit('update state', {
    //boxes: entities.boxes.map(toVertices),
    walls: entities.walls.map(toVertices),
    // players: entities.players.map(player=> ({ position: player.transform.position,id:player.id, target: player.mousePosition})),
    players:entities.players.map(player=> ({ position: player.transform.position,id:player.id, target: player.mousePosition, skills: player.skills?.qSkill?.transform.position})),
    online,
    fps,
  });

  entities.players.forEach((player) => {
    if(entities.players[player.id]?.skills?.qSkill?.transform) {
      console.log(entities.players[player.id].skills.qSkill.transform)
    }

    let force = 3 * dt;
    const deltaVector = Matter.Vector.sub(
      player.transform.position,
      player.mousePosition
    );
    const normalizedDelta = Matter.Vector.normalise(deltaVector);
    let forceVector = Matter.Vector.mult(normalizedDelta, force);
    const target = Matter.Vector.sub( player.transform.position, forceVector);
    if (getDistance(player.mousePosition,  player.transform.position) > 20) {
      // console.log('lala',Math.round(lerp( player.transform.position.x,target.x, dt)), player.transform.position.x,target.x, dt )
      player.transform.x = Math.round(lerp( player.transform.position.x,target.x, dt));
      player.transform.y = Math.round(lerp( player.transform.position.y,target.y, dt));
      Matter.Body.setPosition(player.transform, target);
    }
  });
  Matter.Engine.update(engine, dt, correction);
}, frameRate);

//Each connection will manage his own data
io.on('connection', (socket) => {
  online++;
  //Here we create a Matter js circle transform
  let playerTransform = Matter.Bodies.rectangle(
    canvas.width/2,
    canvas.height/2,
    playerSize,
    playerSize*1.25
  )
  // Here we create the player for the client that is requesting conection to join the game
  const newPlayer = {
    socket,
    id: socket.id,
    mousePosition: { x: canvas.width/2, y: canvas.height/2 },
    transform: playerTransform,
    skills: {
      qSkill: null
    }
  };
  //Entities will have the state of every object in the game
  entities.players.push(newPlayer);
  //Here we add the new player to the matter js world to interact with other objects
  Matter.Composite.add(engine.world, newPlayer.transform);
  //Here we listen/receive the connected player events.
  socket.on('disconnect', () => {
    --online;
    entities.players = entities.players.filter(
      (player) => player.id !== newPlayer.id
    );
  });
  socket.on('register', (cb) => cb( socket.id ));
  socket.on('player click', (coordinates) => {
    console.log(coordinates)
    newPlayer.mousePosition = coordinates;
  });
  socket.on('player q', () => {
    console.log('cvalior ', newPlayer.id ,entities.players)
    entities.players.forEach((player)=>{
      if(player.id === newPlayer.id) {
        player.skills.qSkill = {
          transform: Matter.Bodies.circle(
            newPlayer.transform.x + 150,
            newPlayer.transform.y + 150,
            40,
          )
        }
        Matter.Composite.add(engine.world, player.skills.qSkill.transform);
        console.log('lala',  player.skills.qSkill.transform)
      }
    })
  });
});

server.listen(process.env.PORT, () =>
  console.log('server listening on ' + process.env.PORT)
);
