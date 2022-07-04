import {
  Position,
  TransformRectangle,
  TargetPosition,
  Player,
  Body
} from '../components/components.js'
import { defineQuery, defineSystem, enterQuery } from 'bitecs'
import Matter from 'matter-js'
import { cooldownTimer, getDistance, lerp } from '../utils/utils.js'

export const createShootingSystem = (engine) => {
  const shootEntityQuery = defineQuery([Player])
  const timers = {}
  return defineSystem((world) => {
    const entities = shootEntityQuery(world)
    for (let i = 0; i < entities.length; i++) {
      const id = entities[i]
      const networkEntity = global.networkEntities[global.entitiesByLocalId[id]]

      if (!networkEntity.target || !global.networkEntities?.[global.entitiesByLocalId?.[id]]?.shootPosition) {
        continue
      }
      if (!timers[id]) {
        timers[id] = cooldownTimer(1000)
      }
      timers[id].timeCounter(global.deltaTime)
      const playerShootPosition = global.networkEntities[global.entitiesByLocalId[id]].shootPosition
      const playerPosition = global.networkEntities[global.entitiesByLocalId[id]].transform.position

      if (!networkEntity?.activeShooting && playerShootPosition) {
        const vectorPos = Matter.Vector.sub(networkEntity.position, playerShootPosition)

        // vectorPos.x = (vectorPos.x < 30) ? 150 : vectorPos.x
        // vectorPos.x = (vectorPos.x > -30) ? -150 : vectorPos.x
        // vectorPos.y = (vectorPos.y < 30) ? 150 : vectorPos.y
        // vectorPos.y = (vectorPos.y > -30) ? -150 : vectorPos.y
        if (timers[id]?.timer?.isReady) {
          timers[id].trigger()
          networkEntity.activeShooting = Matter.Bodies.circle(
            playerPosition.x + (vectorPos.x * -1),
            playerPosition.y + (vectorPos.y * -1),
            16,
            {
              // isStatic: true
              isSensor: true
            }
          )
          // networkEntity.activeShooting.position.x = networkEntity.activeShooting.position.x + (vectorPos.x * -1)
          // networkEntity.activeShooting.position.y = networkEntity.activeShooting.position.y + (vectorPos.y * -1)
          console.log('vectorPos', vectorPos)

          Matter.Composite.add(engine.world, networkEntity.activeShooting)
          // console.log('shooting', networkEntity.activeShooting.position)
          // Matter.Vector.normalise(networkEntity.position)

          console.log('vectorPos', vectorPos)

          Matter.Body.setVelocity(networkEntity.activeShooting, { x: vectorPos.x / 30 * -1, y: vectorPos.y / 30 * -1 })
          networkEntity.activeShootingPosition = networkEntity.activeShooting.position
        }
      }
      if (networkEntity?.activeShootingPosition) {
        networkEntity.activeShootingPosition = networkEntity.activeShooting.position
        // console.log('shooting movement', networkEntity.activeShootingPosition)
      }
      if (timers[id]?.isFinished() && networkEntity?.activeShooting) {
        Matter.World.remove(engine.world, networkEntity.activeShooting)
        networkEntity.activeShooting = null
        networkEntity.activeShootingPosition = null
        global.networkEntities[global.entitiesByLocalId[id]].shootPosition = null
      }
    }
    return world
  })
}
