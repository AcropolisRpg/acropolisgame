import express from 'express'
import Matter from 'matter-js'
import dotenv from 'dotenv'
import Web3Token from 'web3-token'
import axios from 'axios'
import { v4 as uuid } from 'uuid'
import { createWorld } from 'bitecs'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { createEntitiesSystem } from './server/systems/createEntitiesSystem.js'
import { createPlayerTransformSystem } from './server/systems/createPlayerTransformSystem.js'
import { createPlayerTargetMovementSystem } from './server/systems/createPlayerTargetMovementSystem.js'
import { createBroadcastNetworkSystem } from './server/systems/createNetworkBroadcastSystem.js'
import { createDestroyEntitiesSystem } from './server/systems/createDestroyEntitiesSystem.js'
import { createResourceSystem } from './server/systems/createResourceSystem.js'
import { createDetectResourceCollision } from './server/systems/createDetectResourceCollisions.js'
import monk from 'monk'
import { cooldownTimer } from './server/utils/utils.js'
import { createSkillSystem } from './server/systems/createSkillsSystem.js'

const url = 'localhost:27017/game'
const db = monk(url)
db.then(() => {
  console.log('Connected correctly to server')
})

const playersDB = db.get('players')

global.entitiesByNetworkId = {}
global.entitiesByLocalId = {}
global.broadcastNetworkClient = {}

// this will track entities commands from clients while they are existing.
global.networkEntities = {}

// This will track the local data for example matterJS objects
global.localEntities = {}

const frameRate = 1000 / 60

// Another system without any component attatched to world entity
const timeSystem = (world) => {
  // init
  const { time } = world
  if (time.then === 0) {
    time.then = performance.now()
  }
  if (time.deltaTime === 0) {
    // console.log('nioent');
    time.deltaTime = performance.now()
  }
  const now = performance.now()
  const delta = now - time.then

  time.delta = delta
  time.elapsed += delta
  time.fps = 1000 / (now - time.then)
  time.lastDeltaTime = time.deltaTime
  time.deltaTime = delta / frameRate
  time.deltaTimeCorrection = time.deltaTime / time.lastDeltaTime
  time.then = now

  return world
}

// World entity that will handle all our entities attatched to world
const world = createWorld()
// Attach time object to world
world.time = {
  delta: 0,
  elapsed: 1,
  then: 0,
  deltaTime: 0,
  deltaTimeCorrection: 0,
  fps: 1,
  lastDeltaTime: 0
}

const engine = Matter.Engine.create()

const entitiesSystem = createEntitiesSystem()
const resourceSystem = createResourceSystem(engine)
const playerTransformSystem = createPlayerTransformSystem(engine)
const playerTargetMovementSystem = createPlayerTargetMovementSystem(engine)
const skillSystem = createSkillSystem(engine)
const detectResourceCollision = createDetectResourceCollision()
const destroyEntitiesSystem = createDestroyEntitiesSystem()
const broadcastNetworkSystem = createBroadcastNetworkSystem()

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

app.use(express.static('acropolis/dist'))
dotenv.config()

const canvas = { width: 1000, height: 1000 }
const boxes = 0
const playered = 0
const playerSize = 16
const wallThickness = 20
const online = 0

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
}

engine.gravity.y = 0
engine.gravity.x = 0
Matter.Composite.add(engine.world, Object.values(entities).flat())

let lastUpdate = Date.now()
let lastDelta = Date.now()
let dt

const resourcesFactory = (resourceCategory, x, y) => {
  const entityId = uuid()
  const position = {
    x,
    y
  }
  const entity = {
    id: entityId,
    position,
    type: 'resource',
    transform: Matter.Bodies.circle(position.x, position.y, 16, {
      isStatic: true
    }),
    sensor: Matter.Bodies.circle(position.x, position.y, 32, {
      isStatic: true,
      isSensor: true
    })
  }
  switch (resourceCategory) {
    case 'tree':
      entity.category = 'tree'
      break
    case 'stone':
      entity.category = 'stone'
      entity.transform.radius = 10
      break
    case 'sand':
      entity.category = 'sand'
      break
    case 'herb':
      entity.category = 'herb'
      entity.transform.isSensor = true
      break
    case 'crop':
      entity.category = 'crop'
      break
    case 'animal':
      entity.category = 'animal'
      break
    case 'fish':
      entity.category = 'fish'
      break

    default:
      break
  }
  return entity
}

const trees = [
  {
    x: 50,
    y: 150
  },
  {
    x: 150,
    y: 100
  },
  {
    x: 250,
    y: 150
  },
  {
    x: 370,
    y: 50
  },
  {
    x: 550,
    y: 350
  }

]

const herbs = [
  {
    x: 80,
    y: 180
  },
  {
    x: 180,
    y: 180
  },
  {
    x: 280,
    y: 280
  },
  {
    x: 580,
    y: 580
  },
  {
    x: 880,
    y: 880
  }
]

const stones = [
  {
    x: 30,
    y: 30
  },
  {
    x: 130,
    y: 130
  },
  {
    x: 230,
    y: 30
  },
  {
    x: 530,
    y: 530
  },
  {
    x: 330,
    y: 330
  }
]

const sands = [{
  x: 950,
  y: 350
},
{
  x: 550,
  y: 150
},
{
  x: 550,
  y: 850
},
{
  x: 550,
  y: 650
},
{
  x: 650,
  y: 150
}]
const animals = [
  {
    x: 180,
    y: 380
  },
  {
    x: 580,
    y: 280
  },
  {
    x: 480,
    y: 380
  },
  {
    x: 580,
    y: 980
  },
  {
    x: 780,
    y: 880
  }]
const crops = [
  {
    x: 130,
    y: 330
  },
  {
    x: 530,
    y: 230
  },
  {
    x: 430,
    y: 330
  },
  {
    x: 530,
    y: 930
  },
  {
    x: 730,
    y: 330
  }
]
const fishes = []

// Add Resources
const generateResources = (type, resources) => {
  resources.forEach((resource) => {
    const generatedResource = resourcesFactory(type, resource.x, resource.y)
    global.networkEntities[generatedResource.id] = generatedResource
  })
}

generateResources('tree', trees)
generateResources('herb', herbs)
generateResources('stone', stones)
generateResources('sand', sands)
generateResources('animal', animals)
generateResources('crop', crops)
generateResources('fish', fishes)

const databaseStorageTimer = cooldownTimer(1000)
// console.log(global.networkEntities);
// TODO Integrate tymesystem in the server...
setInterval(async () => {
  const now = Date.now()
  global.deltaTime = now - lastUpdate
  dt = (now - lastUpdate) / frameRate
  global.dt = dt
  // console.log('correction', dt / lastDelta)
  const correction = dt / lastDelta
  global.corretion = correction
  lastDelta = dt
  databaseStorageTimer.timeCounter(global.deltaTime)
  if (databaseStorageTimer.timer.isReady) {
    databaseStorageTimer.trigger()
    // salvar en la base de datos
    const anon = async () => {
      for (const [, networkEntity] of Object.entries(global.networkEntities)) {
        if (networkEntity.type === 'player') {
          const {
            id,
            address,
            type,
            position,
            target,
            healthPoints,
            items
          } = networkEntity
          const entityToStore = {
            id,
            address,
            type,
            position,
            target,
            healthPoints,
            items
          }
          await playersDB.update({
            address: entityToStore.address
          }, { $set: entityToStore })
        }
      }
    }
    anon()
  }
  // console.log('dt',dt, now, lastUpdate)
  // console.log('fps',1000/(now - lastUpdate))
  // const fps = 1000 / (now - lastUpdate)
  // console.log(now - lastUpdate, dt, frameRate, fps)
  lastUpdate = now
  entitiesSystem(world)
  resourceSystem(world)
  playerTransformSystem(world)
  playerTargetMovementSystem(world)
  skillSystem(world)
  detectResourceCollision(world)
  destroyEntitiesSystem()
  broadcastNetworkSystem(world)

  Matter.Engine.update(engine, dt, correction)
  io.emit('broadcastNetworkClient', global.broadcastNetworkClient)
}, frameRate)
const x = 0
// Each connection will manage his own data
io.on('connection', (socket) => {
  socket.on('login', async (authToken) => {
    console.log('lanza el login')
    // const address = '0x1BeDda29B3860d2AbE40A8f97047eFE01E184BC1'.toUpperCase()
    // const address = x
    // x++
    let playerAddress
    // !important prod
    try {
      const token = authToken
      const { address, body } = await Web3Token.verify(token)
      playerAddress = address.toString().toUpperCase()
      if (address) {
        console.log('address body', address)
        const wallets = await axios({
          method: 'get',
          url: 'https://www.acropolisrpg.com/api/wallets'
        })
        // console.log('wallets', wallets.data)
        const wallet = wallets.data.find(
          (wallet) =>
            wallet.address.toString().toUpperCase() ===
            address.toString().toUpperCase()
        )
        // console.log('existe', wallet)
        socket.emit('loggedIn', true)
        try {
          const nonce = await axios({
            method: 'get',
            url: `https://www.acropolisrpg.com/api/acropolis/nonce/${wallet.address}`
          })
          console.log(nonce)
          const claimed = await axios({
            method: 'get',
            url: `https://www.acropolisrpg.com/api/acropolis/claim/${wallet.address}/${nonce.data}`
          })
          console.log(claimed)
        } catch (error) {
          console.log(error)
        }
      }
    } catch (error) {
      console.log(error)
    }

    if (playerAddress) {
      let player
      let newEntity
      /* Create a new player */
      try {
        console.log('playercityo', playerAddress)
        player = await playersDB.findOne({
          address: playerAddress
        })
        console.log('playercityo', player)
        if (player) {
          console.log(player)
          newEntity = player
        } else {
          const entityId = uuid()
          newEntity = {
            id: entityId,
            address: playerAddress,
            type: 'player',
            position: { x: 0, y: 0 },
            target: { x: 500, y: 500 },
            action: 'idle',
            healthPoints: 100,
            items: null
          }
          player = await playersDB.insert(newEntity)
          console.log('player', player)
        }
      } catch (error) {
        console.log(error)
      }
      const entityId = newEntity.id
      // !important prod
      if (global.networkEntities[entityId]) {
        socket.emit('loggedIn', { isLoggedIn: false, entityId })
        return
      }
      global.networkEntities[entityId] = newEntity
      socket.emit('loggedIn', { isLoggedIn: true, entityId })

      socket.on('disconnect', () => {
        global.networkEntities[entityId].destroyed = true
        console.log('disconnected', entityId)
      })
      socket.on('playerTarget', (coordinates) => {
        console.log('coordinates', coordinates)
        global.networkEntities[entityId].target = coordinates
        // newPlayer.mousePosition = coordinates;
      })
      socket.on('playerAction', (action) => {
        console.log('action', action, entityId)
        global.networkEntities[entityId].action = action
      })
      socket.on('playerSkillPosition', (coordinates) => {
        console.log('skillPosition', coordinates, entityId)
        global.networkEntities[entityId].skillPosition = coordinates
      })
    }
  })
})

httpServer.listen(1234, () => console.log('server listening on ' + 1234))
