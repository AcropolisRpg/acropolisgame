import express from 'express';
import Matter from 'matter-js';
import dotenv from 'dotenv';
import Web3Token from 'web3-token';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { createWorld } from 'bitecs';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { createEntitiesSystem } from './server/systems/createEntitiesSystem.js';
import { createPlayerTransformSystem } from './server/systems/createPlayerTransformSystem.js';
import { createPlayerTargetMovementSystem } from './server/systems/createPlayerTargetMovementSystem.js';
import { createBroadcastNetworkSystem } from './server/systems/createNetworkBroadcastSystem.js';
import { createDestroyEntitiesSystem } from './server/systems/createDestroyEntitiesSystem.js';
import { createResourceSystem } from './server/systems/createResourceSystem.js';

global.entitiesByNetworkId = {};
global.entitiesByLocalId = {};
global.broadcastNetworkClient = {};

// this will track entities commands from clients while they are existing.
global.networkEntities = {};

// This will track the local data for example matterJS objects
global.localEntities = {};

const frameRate = 1000 / 60;

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

const engine = Matter.Engine.create();

const entitiesSystem = createEntitiesSystem();
const resourceSystem = createResourceSystem(engine);
const playerTransformSystem = createPlayerTransformSystem(engine);
const playerTargetMovementSystem = createPlayerTargetMovementSystem(engine);
const destroyEntitiesSystem = createDestroyEntitiesSystem();
const broadcastNetworkSystem = createBroadcastNetworkSystem();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

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

engine.gravity.y = 0;
engine.gravity.x = 0;
Matter.Composite.add(engine.world, Object.values(entities).flat());

let lastUpdate = Date.now();
let lastDelta = Date.now();
let dt;

const resourcesFactory = (resourceCategory, x, y) => {
  const entityId = uuid();
  const position = {
    x,
    y
  };
  const entity = {
    id: entityId,
    position,
    type:'resource',
    transform: Matter.Bodies.circle(position.x, position.y, 16, {
      isStatic: true
    }),
    sensor: Matter.Bodies.circle(position.x, position.y, 32, {
      isStatic: true,
      isSensor: true
    })
  };
  switch (resourceCategory) {
    case 'tree':
      entity.category = 'tree';
      break;
    case 'stone':
      entity.category = 'stone';
      break;
    case 'metal':
      entity.category = 'metal';
      break;
    case 'herb':
      entity.category = 'herb';
      break;
    case 'leather':
      entity.category = 'leather';
      break;
    case 'fish':
      entity.category = 'fish';
      break;
    case 'sand':
      entity.category = 'sand';
      break;

    default:
      break;
  }
  return entity;
};

const tree = resourcesFactory('tree', 50, 50)
const tree1 = resourcesFactory('tree', 150, 550)
const tree2 = resourcesFactory('tree', 250, 250)
const tree3 = resourcesFactory('tree', 350, 250)
global.networkEntities[tree.id] = tree
global.networkEntities[tree1.id] = tree1
global.networkEntities[tree2.id] = tree2
global.networkEntities[tree3.id] = tree3

console.log(global.networkEntities)
// TODO Integrate tymesystem in the server...
setInterval(() => {
  let now = Date.now();
  dt = (now - lastUpdate) / frameRate;
  global.dt = dt;
  // console.log('correction', dt / lastDelta)
  let correction = dt / lastDelta;
  global.corretion = correction;
  lastDelta = dt;
  //console.log('dt',dt, now, lastUpdate)
  //console.log('fps',1000/(now - lastUpdate))
  let fps = 1000 / (now - lastUpdate);
  // console.log(now - lastUpdate, dt, frameRate, fps)
  lastUpdate = now;
  entitiesSystem(world);
  resourceSystem(world)
  playerTransformSystem(world);
  playerTargetMovementSystem(world);
  destroyEntitiesSystem();
  broadcastNetworkSystem(world);

  Matter.Engine.update(engine, dt, correction);
  io.emit('broadcastNetworkClient', global.broadcastNetworkClient);
}, frameRate);

//Each connection will manage his own data
io.on('connection', (socket) => {
  const entityId = uuid();
  const newEntity = {
    id: entityId,
    type: 'player',
    position: { x: 0, y: 0 },
    target: { x: 500, y: 500 }
  };
  global.networkEntities[entityId] = newEntity;
  // entities.players.push(newPlayer);
  socket.on('disconnect', () => {
    global.networkEntities[entityId].destroyed = true;
    console.log('disconnected', entityId);
  });
  socket.on('player click', (coordinates) => {
    global.networkEntities[entityId].target = coordinates;
    // newPlayer.mousePosition = coordinates;
  });

  socket.on('login', async (authToken) => {
    socket.emit('loggedIn', { isLoggedIn: true, entityId });
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
  socket.on('playerAction', (action) => {
    console.log('action', action, entityId);
    global.networkEntities[entityId].action = action;
  });
});

httpServer.listen(1234, () => console.log('server listening on ' + 1234));
