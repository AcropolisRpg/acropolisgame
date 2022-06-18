import {
  defineSystem
} from 'bitecs';

export const createDestroyEntitiesSystem = () => {
  const entitiesByNetworkId = global.entitiesByNetworkId;
  const entitiesByLocalId = global.entitiesByLocalId;
  const networkEntities = global.networkEntities 
  return defineSystem((world) => {
    for (const [eid, entity] of Object.entries(networkEntities)) {
      if (entity.destroyed) {
        const leid = entitiesByNetworkId[eid]
        delete entitiesByNetworkId[eid]
        delete entitiesByLocalId[leid]
        delete networkEntities[eid]
      }
    }
    return world;
  });
};
