import { defineSystem } from 'bitecs';
import cooldownTimer from '../utils/cooldownTimer';

const createGameControllerSystem = (scene: Phaser.Scene, socket) => {
  // const currentPlayer = player;
  const inputKeys = 'Q,W,E,R,A,S,D,F';
  const keys: any = scene.input.keyboard.addKeys(inputKeys);
  const inputKeysList = inputKeys.split(',');
  const cooldownTime = cooldownTimer(101);
  return defineSystem((world) => {
    const currentPlayer =
      window.acropolis.networkSystem.getLocalEntityByNetworkId(
        window.acropolis.currentPlayerId
      );
    // TODO Move to network System?
    for (let i = 0; i < inputKeysList.length; i++) {
      const key = inputKeysList[i];
      if (keys[key].isDown) {
        switch (key) {
          case 'Q':
            socket.emit('playerTarget', {
              x: currentPlayer.position.x,
              y: currentPlayer.position.y
            });
            if (cooldownTime.remainigTime() >= 100) {
              socket.emit('playerAction', 'skill');
            }
            currentPlayer.action = 'skill';

            break;
          case 'W':
            socket.emit('playerTarget', {
              x: currentPlayer.position.x,
              y: currentPlayer.position.y
            });
            if (cooldownTime.remainigTime() >= 100) {
              socket.emit('playerAction', 'attack');
            }

            currentPlayer.action = 'attack';
            break;
          case 'E':
            socket.emit('playerTarget', {
              x: currentPlayer.position.x,
              y: currentPlayer.position.y
            });
            if (cooldownTime.remainigTime() >= 100) {
              socket.emit('playerAction', 'mining');
            }
            currentPlayer.action = 'mining';
            break;
          case 'R':
            socket.emit('playerTarget', {
              x: currentPlayer.position.x,
              y: currentPlayer.position.y
            });
            if (cooldownTime.remainigTime() >= 100) {
              socket.emit('playerAction', 'gathering');
            }
            currentPlayer.action = 'gathering';
            break;
          case 'A':
            socket.emit('playerTarget', {
              x: currentPlayer.position.x,
              y: currentPlayer.position.y
            });
            if (cooldownTime.remainigTime() >= 100) {
              socket.emit('playerAction', 'chopping');
            }
            currentPlayer.action = 'chopping';
            break;
          case 'S':
            socket.emit('playerTarget', {
              x: currentPlayer.position.x,
              y: currentPlayer.position.y
            });
            if (cooldownTime.remainigTime() >= 100) {
              socket.emit('playerAction', 'fishing');
            }
            currentPlayer.action = 'fishing';
            break;
          case 'D':
            socket.emit('playerTarget', {
              x: currentPlayer.position.x,
              y: currentPlayer.position.y
            });
            if (cooldownTime.remainigTime() >= 100) {
              socket.emit('playerAction', 'watering');
            }
            currentPlayer.action = 'watering';
            break;
          case 'F':
            socket.emit('playerTarget', {
              x: currentPlayer.position.x,
              y: currentPlayer.position.y
            });
            if (cooldownTime.remainigTime() >= 100) {
              socket.emit('playerAction', 'shoveling');
            }
            currentPlayer.action = 'shoveling';
            break;
          default:
            break;
        }
      }
    }
    return world;
  });
};
export default createGameControllerSystem;
