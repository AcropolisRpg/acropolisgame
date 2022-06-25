import {
  addEntity,
  entityExists,
  addComponent,
  removeEntity,
  defineSystem
} from 'bitecs'
import {
  Body,
  Shoes,
  Clothes,
  Hair,
  Actions,
  Position,
  TargetPosition,
  TransformRectangle,
  Player,
  Resource
} from '../components/components.js'

export const createEntitiesSystem = () => {
  const entitiesByNetworkId = global.entitiesByNetworkId
  const entitiesByLocalId = global.entitiesByLocalId
  return defineSystem((world) => {
    const currentEntities = global.networkEntities
    for (const [networkEntityId, networkEntity] of Object.entries(currentEntities)) {
      if (
        entitiesByNetworkId?.[networkEntityId] >= 0 &&
        entityExists(world, entitiesByNetworkId[networkEntityId])
      ) {
        continue
      }
      if (networkEntity.type === 'player') {
        const entityId = addEntity(world)
        entitiesByNetworkId[networkEntityId] = entityId
        entitiesByLocalId[entityId] = networkEntityId
        addComponent(world, Position, entityId)
        addComponent(world, Body, entityId)
        addComponent(world, Shoes, entityId)
        addComponent(world, Hair, entityId)
        addComponent(world, Clothes, entityId)
        addComponent(world, TargetPosition, entityId)
        addComponent(world, Actions, entityId)
        addComponent(world, TransformRectangle, entityId)
        addComponent(world, Player, entityId)
      }

      if (networkEntity.type === 'resource') {
        const entityId = addEntity(world)
        entitiesByNetworkId[networkEntityId] = entityId
        entitiesByLocalId[entityId] = networkEntityId
        addComponent(world, Position, entityId)
        addComponent(world, TransformRectangle, entityId)
        addComponent(world, Resource, entityId)
      }
    }
    for (const [eid, entity] of Object.entries(global.networkEntities)) {
      if (entity.destroyed) {
        removeEntity(world, global.entitiesByNetworkId[eid])
      }
    }

    // Call Global function at server
    global.entitiesByNetworkId = entitiesByNetworkId
    global.entitiesByLocalId = entitiesByLocalId
    return world
  })
}
