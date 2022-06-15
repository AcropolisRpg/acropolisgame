import express from 'express';
import Matter from 'matter-js';
import dotenv from 'dotenv';
import Web3Token from 'web3-token';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { TargetPosition, Position, Velocity } from 
'./server/components/components.js'
import {
  createWorld,
  Types,
  defineComponent,
  defineQuery,
  addEntity,
  addComponent,
  pipe,
  entityExists
} from 
'bitecs';
import { createServer } from 'http'
import { Server } from 'socket.io'
import { createEntitiesSystem } from './server/systems/createEntitiesSystem.js';
import { createPlayerTransformSystem } from './server/systems/createPlayerTransformSystem.js';
import { createPlayerTargetMovementSystem } from './server/systems/createPlayerTargetMovementSystem.js';
import { createBroadcastNetworkSystem } from './server/systems/createNetworkBroadcastPlayerSystem.js';



global.entitiesByNetworkId = {};
global.entitiesByLocalId = {};
global.broadcastNetworkClient = {};
// this will track entities commands from clients while they are existing.
global.networkEntities = {}
//  [
  // {
  //   id: uuid(),
  //   components: {
  //     transform: Matter.Bodies.rectangle(
  //       canvas.width / 2,
  //       0,
  //       canvas.width,
  //       wallThickness,
  //       {
  //         isStatic: true
  //       }
  //     ),
  //     position:{
  //       x:0,
  //       y:0
  //     },
  //     target:{
  //       x:500,
  //       y:500
  //     },
  //     actions:'',
  //     type: 'player',
  //   }
  // }
// ];

//const frameRate = 1000 / 60;
const frameRate = 500 ;
//Query to retrieve entities matching components
const movementQuery = defineQuery([Position, TargetPosition]);

//System to execute behavior based on components query
const movementSystem = (world) => {
  const {
    time: { deltaTime }
  } = world;
  const ents = movementQuery(world);
  for (let i = 0; i < ents.length; i++) {
    const eid = ents[i];
    Position.x[eid] += Velocity.x[eid] * deltaTime;
    Position.y[eid] += Velocity.y[eid] * deltaTime;

    // let force = 2 * dt;
    // const deltaVector = Matter.Vector.sub(
    //   player.transform.position,
    //   player.mousePosition
    // );
    // const normalizedDelta = Matter.Vector.normalise(deltaVector);
    // let forceVector = Matter.Vector.mult(normalizedDelta, force);
    // const target = Matter.Vector.sub(player.transform.position, forceVector);
    // if (getDistance(player.mousePosition, player.transform.position) > 1) {
    //   // console.log('lala',Math.round(lerp( player.transform.position.x,target.x, dt)), player.transform.position.x,target.x, dt )
    //   player.transform.x = Math.round(
    //     lerp(player.transform.position.x, target.x, dt)
    //   );
    //   player.transform.y = Math.round(
    //     lerp(player.transform.position.y, target.y, dt)
    //   );
    //   Matter.Body.setPosition(player.transform, target);
    // }

  }
  return world;
};

// Another system without any component attatched to world entity
const timeSystem = (world) => {
  // init
  const { time } = world;
  if (time.then === 0) {
    time.then = performance.now();
  }
  if (time.deltaTime === 0) {
    // console.log('nioent');
    time.deltaTime = performance.now();
  }
  const now = performance.now();
  const delta = now - time.then;

  time.delta = delta;
  time.elapsed += delta;
  time.fps = 1000 / (now - time.then);
  time.lastDeltaTime = time.deltaTime;
  time.deltaTime = delta / frameRate;
  time.deltaTimeCorrection = time.deltaTime / time.lastDeltaTime;
  time.then = now;

  return world;
};

// Order to execute systems
const pipeline = pipe(movementSystem, timeSystem);

// World entity that will handle all our entities attatched to world
const world = createWorld();
// Attach time object to world
world.time = {
  delta: 0,
  elapsed: 1,
  then: 0,
  deltaTime: 0,
  deltaTimeCorrection: 0,
  fps: 1,
  lastDeltaTime: 0
};

// Create a new entity and add components
const eid = addEntity(world);
addComponent(world, Position, eid);
addComponent(world, Velocity, eid);
Velocity.x[eid] = 1;
Velocity.y[eid] = 1;

const engine = Matter.Engine.create();

  const entitiesSystem = createEntitiesSystem()
  const playerTransformSystem = createPlayerTransformSystem(engine)
  const playerTargetMovementSystem =  createPlayerTargetMovementSystem()
  const broadcastNetworkSystem = createBroadcastNetworkSystem()
// execute the systems for world entity
// setInterval(() => {
//   pipeline(world);
//   console.log(
//     'running',
//     eid,
//     Velocity.x[eid],
//     Position.x[eid],
//     // world.time.delta,
//     // world.time.elapsed,
//     // world.time.then,
//     // world.time.fps,
//     // world.time.lastDeltaTime,
//     world.time.deltaTime,
//     world.time.deltaTimeCorrection
//   );
// }, frameRate);



const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer)

app.use(express.static('acropolis/dist'));
dotenv.config();

const canvas = { width: 1000, height: 1000 };
const boxes = 0;
const playered = 0;
const playerSize = 16;
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
      isStatic: true
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
    )
  ]
};





console.log('networkEntities');

engine.gravity.y = 0;
engine.gravity.x = 0;
Matter.Composite.add(engine.world, Object.values(entities).flat());

const toVertices = (e) => e.vertices.map(({ x, y }) => ({ x, y }));
const player = entities.player;

let lastUpdate = Date.now();
let lastDelta = Date.now();
let dt;

function getDistance(Vector1, Vector2) {
  return Math.sqrt(
    Math.pow(Vector1.x - Vector2.x, 2) + Math.pow(Vector1.y - Vector2.y, 2)
  );
}

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

setInterval(() => {
  let now = Date.now();
  dt = (now - lastUpdate) / frameRate;
  global.dt = dt
  // console.log('correction', dt / lastDelta)
  let correction = dt / lastDelta;
  lastDelta = dt;
  //console.log('dt',dt, now, lastUpdate)
  //console.log('fps',1000/(now - lastUpdate))
  let fps = 1000 / (now - lastUpdate);
  // console.log(now - lastUpdate, dt, frameRate, fps)
  lastUpdate = now;
  entitiesSystem(world)
  playerTransformSystem(world)
  playerTargetMovementSystem(world)
  broadcastNetworkSystem(world)
  io.emit('update state', {
    //boxes: entities.boxes.map(toVertices),
    walls: entities.walls.map(toVertices),
    // players: entities.players.map(player=> ({ position: player.transform.position,id:player.id, target: player.mousePosition})),
    players: entities.players.map((player) => ({
      position: player.transform.position,
      id: player.id,
      target: player.mousePosition,
      skills: player.skills?.qSkill?.transform?.position
        ? player.skills?.qSkill?.transform?.position
        : null
    })),
    online,
    fps
  });

  io.emit('broadcastNetworkClient', global.broadcastNetworkClient);

  entities.players.forEach((player) => {
    if (entities.players[player.id]?.skills?.qSkill?.transform) {
      // console.log(entities.players[player.id].skills.qSkill.transform);
    }

    let force = 2 * dt;
    const deltaVector = Matter.Vector.sub(
      player.transform.position,
      player.mousePosition
    );
    const normalizedDelta = Matter.Vector.normalise(deltaVector);
    let forceVector = Matter.Vector.mult(normalizedDelta, force);
    const target = Matter.Vector.sub(player.transform.position, forceVector);
    if (getDistance(player.mousePosition, player.transform.position) > 1) {
      // console.log('lala',Math.round(lerp( player.transform.position.x,target.x, dt)), player.transform.position.x,target.x, dt )
      player.transform.x = Math.round(
        lerp(player.transform.position.x, target.x, dt)
      );
      player.transform.y = Math.round(
        lerp(player.transform.position.y, target.y, dt)
      );
      Matter.Body.setPosition(player.transform, target);
    }
  });
  Matter.Engine.update(engine, dt, correction);
}, frameRate);

//Each connection will manage his own data
io.on('connection', (socket) => {
  // console.log('se esta conectando como pndjo')
  online++;
  //Here we create a Matter js circle transform
  let playerTransform = Matter.Bodies.rectangle(
    canvas.width / 2,
    canvas.height / 2,
    playerSize,
    playerSize * 1.25
  );
  // Here we create the player for the client that is requesting conection to join the game
  const newPlayer = {
    socket,
    id: socket.id,
    mousePosition: { x: canvas.width / 2, y: canvas.height / 2 },
    transform: playerTransform,
    skills: {
      qSkill: null
    }
  };
  const entityId = uuid()
  const newEntity = {
    id: entityId, 
    type: 'player',
    position: {x:0,y:0},
    target: {x:500, y:500}
  }
  global.networkEntities[entityId] = newEntity
  // console.log(global.networkEntities)
  //Entities will have the state of every object in the game
  entities.players.push(newPlayer);
  //Here we add the new player to the matter js world to interact with other objects
  // Matter.Composite.add(engine.world, newPlayer.transform);
  //Here we listen/receive the connected player events.
  socket.on('disconnect', () => {
    delete global.networkEntities[entityId]
    // global.networkEntities = global.networkEntities.filter((player) => 
    // player.id !== newEntity.id
    // );
    console.log('disconnected', entityId)
    // --online;
    // Matter.World.remove(engine.world, newPlayer.transform);
    // entities.players = entities.players.filter(
    //   (player) => player.id !== newPlayer.id
    // );
  });
  socket.on('register', (cb) => cb(socket.id));
  socket.on('player click', (coordinates) => {
    // console.log(coordinates);
    global.networkEntities[entityId].target = coordinates 
    newPlayer.mousePosition = coordinates;
  });

  socket.on('login', async (authToken) => {
    socket.emit('loggedIn', true);
    // try {
    //   const token = authToken;
    //   const { address, body } = await Web3Token.verify(token);
    //   if (address) {
    //     console.log('address body', address, body);
    //     const wallets = await axios({
    //       method: 'get',
    //       url: 'https://www.acropolisrpg.com/api/wallets'
    //     });
    //     console.log('wallets', wallets.data);
    //     const wallet = wallets.data.find(
    //       (wallet) =>
    //         wallet.address.toString().toUpperCase() ===
    //         address.toString().toUpperCase()
    //     );
    //     console.log('existe', wallet);
    //     socket.emit('loggedIn', true);
    //     try {
    //       const nonce = await axios({
    //         method: 'get',
    //         url: `https://www.acropolisrpg.com/api/acropolis/nonce/${wallet.address}`
    //       });
    //       console.log(nonce);
    //       const claimed = await axios({
    //         method: 'get',
    //         url: `https://www.acropolisrpg.com/api/acropolis/claim/${wallet.address}/${nonce.data}`
    //       });
    //       console.log(claimed);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  });
  socket.on('player q', () => {
    // console.log('cvalior ', newPlayer.id, entities.players);

    entities.players.forEach((player) => {
      if (player.id === newPlayer.id) {
        if (player?.skills?.qSkill?.transform) {
          // console.log('hay y remueve', player.skills.qSkill.transform);
          Matter.World.remove(engine.world, player.skills.qSkill.transform);
        }
        player.skills.qSkill = {
          transform: Matter.Bodies.circle(
            newPlayer.transform.x,
            newPlayer.transform.y - 40,
            40
          )
        };
        Matter.Composite.add(engine.world, player.skills.qSkill.transform);
        // console.log('lala', player.skills.qSkill.transform);
        setTimeout(() => {
          // console.log('lali');
          if (player?.skills?.qSkill?.transform) {
            Matter.World.remove(engine.world, player.skills.qSkill.transform);
          }
          player.skills.qSkill = null;
        }, 1000);
      }
    });
  });
});

httpServer.listen(1234, () => console.log('server listening on ' + 1234));
