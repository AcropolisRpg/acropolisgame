import {
  addEntity,
  entityExists,
  addComponent,
  removeEntity,
  defineSystem
} from 'bitecs';
import {
  Body,
  Shoes,
  Clothes,
  Actions,
  Position,
  TargetPosition,
  TransformRectangle,
  Player
} from '../components/components.js';

export const createEntitiesSystem = () => {
  const entitiesByNetworkId = global.entitiesByNetworkId;
  const entitiesByLocalId = global.entitiesByLocalId;
  return defineSystem((world) => {
    const currentEntities = global.networkEntities;
    // console.log(global.networkEntities);
    for (const [networkEntityId, networkEntity] of Object.entries(currentEntities)) {
      // console.log('imprime la chingada', entitiesByNetworkId, entityExists(world, entitiesByNetworkId[networkEntityId]))
      if (
        entitiesByNetworkId?.[networkEntityId] >= 0 &&
        entityExists(world, entitiesByNetworkId[networkEntityId])
      ) {
        continue;
      }
      if (networkEntity.type === 'player') {
        const entityId = addEntity(world);
        entitiesByNetworkId[networkEntityId] = entityId;
        entitiesByLocalId[entityId] = networkEntityId;
        addComponent(world, Position, entityId);
        addComponent(world, Body, entityId);
        addComponent(world, Shoes, entityId);
        addComponent(world, Clothes, entityId);
        addComponent(world, TargetPosition, entityId);
        addComponent(world, Actions, entityId);
        addComponent(world, TransformRectangle, entityId);
        addComponent(world, Player, entityId);
        // console.log( 'adddeed entities', entitiesByNetworkId, entitiesByLocalId)
      }
    }
    // console.log('debe entrar ahuevo')
    for (const [key , value] of Object.entries(global.entitiesByNetworkId)) {
      let exist = false;
      for (const [networkEntityId, networkEntity] of Object.entries(currentEntities)) {
        if (key === networkEntityId) {
          exist = true;
        }
      }
      if (!exist) {
        removeEntity(world, value);
        delete entitiesByNetworkId[key];
        delete entitiesByLocalId[value];
      }
    }

    // Call Global function at server
    global.entitiesByNetworkId = entitiesByNetworkId;
    global.entitiesByLocalId = entitiesByLocalId;
    return world;
  });
};
