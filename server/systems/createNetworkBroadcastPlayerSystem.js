import { defineSystem } from 'bitecs';

export const createBroadcastNetworkSystem = () => {
  return defineSystem((world) => {
    global.broadcastNetworkClient = {}
    for (const [networkEntityId, networkEntity] of Object.entries(global.networkEntities)) {
      const { position, type, target, id } = networkEntity;
      global.broadcastNetworkClient[networkEntityId] = { position, type, target, id };
    }
    return world;
  });
};
