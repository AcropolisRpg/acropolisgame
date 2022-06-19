import { defineSystem } from 'bitecs';

// TODO add memoizing to broadcast only changed objects.
export const createBroadcastNetworkSystem = () => {
  return defineSystem((world) => {
    global.broadcastNetworkClient = {}
    for (const [networkEntityId, networkEntity] of Object.entries(global.networkEntities)) {
      const { position, type, target, id, category } = networkEntity;
      if( type === 'player'){
        global.broadcastNetworkClient[networkEntityId] = { position, type, target, id };

      }
      if( type === 'resource'){
        global.broadcastNetworkClient[networkEntityId] = { position, type, id, category };
      }
    }
    return world;
  });
};
