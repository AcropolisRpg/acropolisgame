import {
  addEntity,
  entityExists,
  addComponent,
  removeEntity,
  defineSystem
} from 'bitecs'
import { Resource, Position, TargetPosition, Actions, Body, Shoes, Clothes } from '../components/components'

export const createEntitySystem = () => {
  return defineSystem((world) => {
    const networkEntities = window.acropolis.networkSystem.getNetworkEntities()
    const localEntitiesIds =
      window.acropolis.networkSystem.getNetworkEntitiesIDsByLocalID()
    const localEntitiesByNetworkId =
      window.acropolis.networkSystem.getLocalEntitiesIDsByNetworkID()

    for (const [entityId, entity] of Object.entries < any > (networkEntities)) {
      if (
        localEntitiesByNetworkId?.[entityId] >= 0 &&
        entityExists(world, localEntitiesByNetworkId[entityId])
      ) {
        continue
      }
      if (entity.type === 'player') {
        const playerId = addEntity(world)
        const clonedEntity = JSON.parse(JSON.stringify(entity))
        window.acropolis.networkSystem.setLocalEntityByLocalId(
          playerId,
          clonedEntity
        )
        window.acropolis.networkSystem.setLocalEntityIDbyNetworkID(
          entityId,
          playerId
        )
        window.acropolis.networkSystem.setNetworkEntityIDbyLocalID(
          entityId,
          playerId
        )
        addComponent(world, Position, playerId)
        addComponent(world, Body, playerId)
        addComponent(world, Shoes, playerId)
        addComponent(world, Clothes, playerId)
        addComponent(world, TargetPosition, playerId)
        addComponent(world, Actions, playerId)
      }
      if (entity.type === 'resource') {
        const resourceId = addEntity(world)
        const clonedEntity = JSON.parse(JSON.stringify(entity))
        window.acropolis.networkSystem.setLocalEntityByLocalId(
          resourceId,
          clonedEntity
        )
        window.acropolis.networkSystem.setLocalEntityIDbyNetworkID(
          entityId,
          resourceId
        )
        window.acropolis.networkSystem.setNetworkEntityIDbyLocalID(
          entityId,
          resourceId
        )
        addComponent(world, Position, resourceId)
        addComponent(world, Resource, resourceId)
      }
    }

    for (const [localId, networkId] of Object.entries <any> (localEntitiesIds)) {
      let exist = false
      for (const [entityId] of Object.entries(networkEntities)) {
        if (networkId === entityId) {
          exist = true
        }
      }
      if (!exist) {
        removeEntity(world, Number(localId))
      }
    }
    return world
  })
}
