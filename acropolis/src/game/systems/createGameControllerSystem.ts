import { defineSystem } from 'bitecs';
import { cooldownTimer } from '../utils/cooldownTimer';

const createGameControllerSystem = (scene: Phaser.Scene, socket) => {
  // const currentPlayer = player;
  const inputKeys = 'Q,W,E,R,A,S,D,F,T,G,ONE,TWO,THREE';
  const keys: any = scene.input.keyboard.addKeys(inputKeys);
  const inputKeysList = inputKeys.split(',');
  const cooldownTime = cooldownTimer(100);
  const activePointer = scene.input.activePointer;
  return defineSystem((world) => {
    const currentPlayer =
      window.acropolis.networkSystem.getLocalEntityByNetworkId(
        window.acropolis.currentPlayerId
      );
    // TODO use server time instead local time.
    cooldownTime.timeCounter(window.acropolis.timeSystem.clientDeltaTimeNoFR);
    // console.log('ooldownTime.timer.isReady', cooldownTime.timer.isReady)
    // console.log('gamecontroller timer', cooldownTime.timer.currentTime)
    // console.log('gamecontroller timer', cooldownTime.timer.isReady)
    // TODO Move to network System?
    for (let i = 0; i < inputKeysList.length; i++) {
      const key = inputKeysList[i];
      if (keys[key].isDown) {
        switch (key) {
          case 'ONE':
            if (cooldownTime.timer.isReady) {
              cooldownTime.trigger()
              // socket.emit('playerTarget', {
              //   x: currentPlayer.position.x,
              //   y: currentPlayer.position.y
              // });
              socket.emit('playerAction', 'skill');
              socket.emit('playerSkillPosition', {
                x: activePointer.worldX,
                y: activePointer.worldY
              });
            }
            currentPlayer.action = 'skill';

            break;
          case 'W':
            if (cooldownTime.timer.isReady) {
              cooldownTime.trigger()
              socket.emit('playerTarget', {
                x: currentPlayer.position.x,
                y: currentPlayer.position.y
              });
              socket.emit('playerAction', 'attack');
            }

            currentPlayer.action = 'attack';
            break;
          case 'E':
            if (cooldownTime.timer.isReady) {
              cooldownTime.trigger()
              socket.emit('playerTarget', {
                x: currentPlayer.position.x,
                y: currentPlayer.position.y
              });

              socket.emit('playerAction', 'mining');
            }
            currentPlayer.action = 'mining';
            break;
          case 'R':
            if (cooldownTime.timer.isReady) {
              cooldownTime.trigger()
              socket.emit('playerTarget', {
                x: currentPlayer.position.x,
                y: currentPlayer.position.y
              });
              socket.emit('playerAction', 'gathering');
            }
            currentPlayer.action = 'gathering';
            break;
          case 'A':
            if (cooldownTime.timer.isReady) {
              cooldownTime.trigger()
              socket.emit('playerTarget', {
                x: currentPlayer.position.x,
                y: currentPlayer.position.y
              });
              socket.emit('playerAction', 'chopping');
            }
            currentPlayer.action = 'chopping';
            break;
          case 'S':
            if (cooldownTime.timer.isReady) {
              cooldownTime.trigger()
              socket.emit('playerTarget', {
                x: currentPlayer.position.x,
                y: currentPlayer.position.y
              });
              socket.emit('playerAction', 'fishing');
            }
            currentPlayer.action = 'fishing';
            break;
          case 'D':
            if (cooldownTime.timer.isReady) {
              cooldownTime.trigger()
              socket.emit('playerTarget', {
                x: currentPlayer.position.x,
                y: currentPlayer.position.y
              });
              socket.emit('playerAction', 'watering');
            }
            currentPlayer.action = 'watering';
            break;
          case 'F':
            if (cooldownTime.timer.isReady) {
              cooldownTime.trigger()
              socket.emit('playerTarget', {
                x: currentPlayer.position.x,
                y: currentPlayer.position.y
              });
              socket.emit('playerAction', 'shoveling');
            }
            currentPlayer.action = 'shoveling';
            break;
          case 'TWO':
              console.log('checando')
              if (cooldownTime.timer.isReady) {
                cooldownTime.trigger()
                socket.emit('playerAction', 'shoot');
                socket.emit('playerShootingPosition', {
                  x: activePointer.worldX,
                  y: activePointer.worldY
                });
              }
              currentPlayer.action = 'shoot';
  
              break;
              case 'THREE':
                console.log('checando')
                if (cooldownTime.timer.isReady) {
                  cooldownTime.trigger()
                  socket.emit('playerDash');
                }
                currentPlayer.action = 'dash';
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
