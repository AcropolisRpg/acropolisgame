import { defineSystem } from 'bitecs';
import playerPlayAnimation from './playerPlayAnimations';

const createAnimationSystem = (scene: Phaser.Scene) => {
  let lastAnimation = '';
  return defineSystem((world) => {
    const currentPlayer =
      window.acropolis.networkSystem.getLocalEntityByNetworkId(
        window.acropolis.currentPlayerId
      );
    if (lastAnimation !== currentPlayer.action) {
      lastAnimation = currentPlayer.action;
      playerPlayAnimation(scene, currentPlayer.action, currentPlayer);
    }
    return world;
  });
};
export default createAnimationSystem;
