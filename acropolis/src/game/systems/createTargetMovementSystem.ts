import { Position, TargetPosition } from './../components/components';
import { defineQuery, defineSystem } from 'bitecs';
import { getDistance, lerp } from '../utils/transformManager';
import { flipPlayerX } from './flipPlayer';
import { cooldownTimer } from '../utils/cooldownTimer';

export const createTargetMovementSystem = (scene: Phaser.Scene, socket) => {
  const movementQuery = defineQuery([TargetPosition, Position]);
  const activePointer = scene.input.activePointer;
  const cooldownTime = cooldownTimer(100);
  // console.log('madres', window.acropolis.timeSystem.clientDeltaTimeNoFR)
  // let animation = null;
  return defineSystem((world) => {
  cooldownTime.timeCounter(window.acropolis.timeSystem.clientDeltaTimeNoFR)
  // console.log('targetMovement', cooldownTime.timer.currentTime)
  // console.log('targetMovement', cooldownTime.timer.isReady)
    const clientDeltaTime = window.acropolis.timeSystem.clientDeltaTime;
    const entities = movementQuery(world);
    for (let i = 0; i < entities.length; i++) {
      const id = entities[i];
      const entity =
        window.acropolis.networkSystem.getNetworkEntityByLocalId(id);
      if (!entity || window?.acropolis?.inventory?.inventoryOpen) {
        continue;
      }

      Position.x[id] = lerp(Position.x[id], entity.position.x, clientDeltaTime);
      Position.y[id] = lerp(Position.y[id], entity.position.y, clientDeltaTime);
      const localEntity =
        window.acropolis.networkSystem.getLocalEntityByLocalId(id);

      if (!localEntity?.sprites?.body) {
        continue;
      }

      // !TODO move to animation system
      const distance = getDistance(localEntity.sprites.body, entity.target);
      if (
        localEntity.action !== 'running' &&
        distance > 1
      ) {
        localEntity.action = 'running'
      }
      if (
        localEntity.action !== 'idle' &&
        distance < 1
      ) {
        localEntity.action = 'idle'
      }
      if (localEntity.sprites.body.x < entity.target.x) {
        flipPlayerX(localEntity.sprites);
      } else {
        flipPlayerX(localEntity.sprites, true);
      }
      if (
        activePointer.leftButtonDown() &&
        !activePointer.leftButtonReleased() &&
        cooldownTime.timer.isReady
      ) {
        cooldownTime.trigger()
        if (localEntity.sprites.body.x < activePointer.worldX) {
          flipPlayerX(localEntity.sprites);
        } else {
          flipPlayerX(localEntity.sprites, true);
        }
        if(activePointer.y > 550 && activePointer.x > 550){
          return
        }
        socket.emit('playerTarget', {
          x: Math.round(activePointer.worldX),
          y: Math.round(activePointer.worldY)
        });

      }
    }
    return world;
  });
};
