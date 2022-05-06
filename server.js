const express = require('express');
const Matter = require('matter-js');
const dotenv = require('dotenv');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + 'dist'));
dotenv.config();

const frameRate = 1000 / 60;
const canvas = { width: 700, height: 700 };
const boxes = 0;
const playered = 0;
const boxSize = 20;
const wallThickness = 20;
let online = 0;

const entities = {
  players: [],
  boxes: [...Array(boxes)].map(() =>
    Matter.Bodies.rectangle(
      Math.random() * canvas.width,
      boxSize,
      Math.random() * boxSize + boxSize,
      Math.random() * boxSize + boxSize
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
  //console.log('dt',dt, now, lastUpdate)
  //console.log('fps',1000/(now - lastUpdate))
  let fps = 1000 / (now - lastUpdate);
  lastUpdate = now;
  Matter.Engine.update(engine, frameRate);
  io.emit('update state', {
    //boxes: entities.boxes.map(toVertices),
    walls: entities.walls.map(toVertices),
    players: entities.players.map(player=> ({ position: player.transform.position,id:player.id})),
    online,
    fps,
  });

  entities.players.forEach((player) => {
    let force = 10 * dt;
    const deltaVector = Matter.Vector.sub(
      player.transform.position,
      player.mousePosition
    );
    const normalizedDelta = Matter.Vector.normalise(deltaVector);
    let forceVector = Matter.Vector.mult(normalizedDelta, force);
    const target = Matter.Vector.sub( player.transform.position, forceVector);
    if (getDistance(player.mousePosition,  player.transform.position) > 15) {
      // console.log('lala',Math.round(lerp( player.transform.position.x,target.x, dt)), player.transform.position.x,target.x, dt )
      player.transform.x = Math.round(lerp( player.transform.position.x,target.x, dt));
      player.transform.y = Math.round(lerp( player.transform.position.y,target.y, dt));
      Matter.Body.setPosition(player.transform, target);
    }
  });
}, frameRate);

//Each connection will manage his own data
io.on('connection', (socket) => {
  online++;
  //Here we create a Matter js circle transform
  let playerTransform = Matter.Bodies.circle(
    canvas.width/2,
    canvas.height/2,
    Math.random() * boxSize + boxSize
  )
  // Here we create the player for the client that is requesting conection to join the game
  const newPlayer = {
    socket,
    id: socket.id,
    mousePosition: { x: canvas.width/2, y: canvas.height/2 },
    transform: playerTransform,
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
});

server.listen(process.env.PORT, () =>
  console.log('server listening on ' + process.env.PORT)
);
