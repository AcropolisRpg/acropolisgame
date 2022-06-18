import { Position, TargetPosition } from './../components/position';
import { defineQuery, defineSystem } from 'bitecs';
import { getDistance, lerp } from '../utils/transformManager';
import cooldownTimer from '../utils/cooldownTimer';
import { flipPlayerX, flipPlayerY } from './flipPlayer';
import playerPlayAnimation from './playerPlayAnimations';

export const createTargetMovementSystem = (scene: Phaser.Scene, socket) => {
  const movementQuery = defineQuery([TargetPosition, Position]);
  const activePointer = scene.input.activePointer;
  const cooldownTime = cooldownTimer(100);
  // let animation = null;
  return defineSystem((world) => {
    const clientDeltaTime = window.acropolis.timeSystem.clientDeltaTime;
    const entities = movementQuery(world);
    for (let i = 0; i < entities.length; i++) {
      const id = entities[i];
      const entity =
        window.acropolis.networkSystem.getNetworkEntityByLocalId(id);
      if (!entity) {
        continue;
      }

      Position.x[id] = lerp(Position.x[id], entity.position.x, clientDeltaTime);
      Position.y[id] = lerp(Position.y[id], entity.position.y, clientDeltaTime);
      const localEntity =
        window.acropolis.networkSystem.getLocalEntityByLocalId(id);

      if (!localEntity?.sprites?.body) {
        continue;
      }
      const distance = getDistance(localEntity.sprites.body, entity.target);
      if (
        localEntity?.sprites?.body?.anims?.currentAnim?.key !== 'running' &&
        distance > 1
      ) {
        playerPlayAnimation(scene, 'running', localEntity);
      }
      if (
        localEntity?.sprites?.body?.anims?.currentAnim?.key !== 'idle' &&
        distance < 1
      ) {
        playerPlayAnimation(scene, 'idle', localEntity);
      }
      if (localEntity.sprites.body.x < entity.target.x) {
        flipPlayerX(localEntity.sprites);
      } else {
        flipPlayerX(localEntity.sprites, true);
      }
      if (
        activePointer.leftButtonDown() &&
        !activePointer.leftButtonReleased() &&
        cooldownTime.remainigTime() >= 100
      ) {
        if (localEntity.sprites.body.x < activePointer.worldX) {
          flipPlayerX(localEntity.sprites);
        } else {
          flipPlayerX(localEntity.sprites, true);
        }
        socket.emit('player click', {
          x: Math.round(activePointer.worldX),
          y: Math.round(activePointer.worldY)
        });
      }

      // if (activePointer.leftButtonReleased()) {
      //   if (
      //     localEntity.target &&
      //     localEntity.sprite &&
      //     localEntity.sprite?.anims?.currentAnim?.key !== 'running'
      //   ) {
      //     playerPlayAnimation(this, 'running', localEntity);
      //     if (localEntity.sprite.x < activePointer.worldX) {
      //       flipPlayerX(localEntity.sprites);
      //     } else {
      //       flipPlayerX(localEntity.sprites, true);
      //     }
      //   }
      //   const target = {
      //     x: Math.round(activePointer.worldX),
      //     y: Math.round(activePointer.worldY)
      //   };
      //   localEntity.target = target;
      //   socket.emit('player click', target);
      // }
    }
    return world;
  });
};
