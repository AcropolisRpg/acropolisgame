import { defineSystem } from 'bitecs';
import playerPlayAnimation from './playerPlayAnimations';

const createAnimationSystem = (scene: Phaser.Scene) => {
  const lastAnimation = []
  return defineSystem((world) => {
    // const currentPlayer =
    //   window.acropolis.networkSystem.getLocalEntityByNetworkId(
    //     window.acropolis.currentPlayerId
    //   );
    // if (lastAnimation !== currentPlayer.action) {
    //   lastAnimation = currentPlayer.action;
    //   playerPlayAnimation(scene, currentPlayer.action, currentPlayer);
    // }

    const allPlayers = window.acropolis.networkSystem.getNetworkEntities()
    for (const [entityId, entity] of Object.entries<any>(allPlayers)) {
      if (entity.type === 'player' && lastAnimation[entityId] !== entity.action) {
        // console.log('entityId', entityId, 'entity actuio', entity.action)
        lastAnimation[entityId] = entity.action;
        playerPlayAnimation(scene, entity.action, window.acropolis.networkSystem.getLocalEntityByNetworkId(entityId));
      }
    }
    return world;
  });
};
export default createAnimationSystem;
