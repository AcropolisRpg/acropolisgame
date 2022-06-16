import {
  Position,
  TransformRectangle,
  TargetPosition,
  Player
} from '../components/components.js';
import { defineSystem } from 'bitecs';

export const createBroadcastNetworkSystem = () => {
  return defineSystem((world) => {
    global.broadcastNetworkClient = {}
    for (const [networkEntityId, networkEntity] of Object.entries(global.networkEntities)) {
      const { position, type } = networkEntity;
      console.log('position', position)
      // console.log('lenfiadfasdf', networkEntity, position, type)
      global.broadcastNetworkClient[networkEntityId] = { position, type };
    }
    return world;
  });
};
