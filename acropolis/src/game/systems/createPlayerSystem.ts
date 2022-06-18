import {
  addEntity,
  entityExists,
  addComponent,
  removeEntity,
  defineSystem
} from 'bitecs';
import { Actions } from '../components/actions';
import { Position, TargetPosition } from '../components/position';
import { Body, Shoes, Clothes } from '../components/sprite';

export const createPlayerSystem = () => {
  const playersByNetworkId = {};
  return defineSystem((world) => {
    const networkEntities = window.acropolis.networkSystem.getNetworkEntities()
    const localEntitiesIds = window.acropolis.networkSystem.getNetworkEntitiesIDsByLocalID()
    const localEntitiesByNetworkId = window.acropolis.networkSystem.getLocalEntitiesIDsByNetworkID()

    for (const [entityId, entity] of Object.entries(networkEntities)) {
      if (
        localEntitiesByNetworkId?.[entityId] >= 0 &&
        entityExists(world, localEntitiesByNetworkId[entityId])
      ) {
        continue;
      }
      const playerId = addEntity(world);
      const clonedEntity = JSON.parse(JSON.stringify(entity))
      window.acropolis.networkSystem.setLocalEntityByLocalId(playerId, clonedEntity)
      window.acropolis.networkSystem.setLocalEntityIDbyNetworkID(entityId, playerId)
      window.acropolis.networkSystem.setNetworkEntityIDbyLocalID(entityId, playerId)
      addComponent(world, Position, playerId);
      addComponent(world, Body, playerId);
      addComponent(world, Shoes, playerId);
      addComponent(world, Clothes, playerId);
      addComponent(world, TargetPosition, playerId);
      addComponent(world, Actions, playerId);
    }

    for (const [localId, networkId] of Object.entries<any>(localEntitiesIds)) {
      let exist = false;
      for (const [entityId] of Object.entries(networkEntities)) {
        if (networkId === entityId) {
          exist = true;
        }
      }
      if (!exist) {
        removeEntity(world, Number(localId))
         // ! Esto de debe de borrar hasta el final en otro sistema por ahorra comentar
        // window.acropolis.networkSystem.deleteNetworkEntityIDByLocalID(localId)
        // window.acropolis.networkSystem.deleteLocalEntityIDByNetworkID(networkId)

        // window.acropolis.networkSystem.deleteLocalEntity(localId)
        // delete playersByNetworkId[key];
        // delete playersByLocalId[value];
      }
    }
    return world;
  });
};
