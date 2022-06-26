import {
  Position,
  TransformRectangle,
  TargetPosition,
  Player
} from '../components/components.js'
import { defineQuery, defineSystem, enterQuery } from 'bitecs'
import Matter from 'matter-js'
import { cooldownTimer, getDistance, lerp } from '../utils/utils.js'

export const createSkillSystem = (engine) => {
  const skillEntityQuery = defineQuery([Player])
  const timers = {}
  return defineSystem((world) => {
    const entities = skillEntityQuery(world)
    for (let i = 0; i < entities.length; i++) {
      const id = entities[i]
      const networkEntity = global.networkEntities[global.entitiesByLocalId[id]]
      if (!networkEntity.target || !global.networkEntities?.[global.entitiesByLocalId?.[id]]?.skillPosition) {
        continue
      }
      if (!timers[id]) {
        timers[id] = cooldownTimer(2000)
      }
      timers[id].timeCounter(global.deltaTime)
      const playerSkillPosition = global.networkEntities[global.entitiesByLocalId[id]].skillPosition
      if (!networkEntity?.activeSkill) {
        if (timers[id]?.timer?.isReady) {
          timers[id].trigger()
          networkEntity.activeSkill = Matter.Bodies.circle(
            playerSkillPosition.x,
            playerSkillPosition.y,
            40,
            {
              isStatic: true
              // isSensor: true
            }
          )
          Matter.Composite.add(engine.world, networkEntity.activeSkill)
          console.log('lanza los pinshis poderes', playerSkillPosition)
        }
      }
      if (timers[id]?.isFinished() && networkEntity?.activeSkill) {
        console.log('haterminado y lo borra ala chingada', networkEntity.activeSkill)
        Matter.World.remove(engine.world, networkEntity.activeSkill)
        networkEntity.activeSkill = null
        networkEntity.skillPosition = null
      }
    }
    return world
  })
}
