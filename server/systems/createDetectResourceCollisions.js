import { defineSystem } from 'bitecs';
import Matter from 'matter-js';

// !Important imports not working withot JS extension WTF.
import { cooldownTimer } from '../utils/utils.js';

export const createDetectResourceCollision = () => {
  const networkEntities = global.networkEntities;
  const timers = {};
  return defineSystem((world) => {
    for (const [, player] of Object.entries(networkEntities)) {
      if (player?.type && player.type !== 'player') {
        continue;
      }
      for (const [, entityB] of Object.entries(networkEntities)) {
        if (player.id === entityB.id) {
          continue;
        }
        if (!entityB?.sensor) {
          continue;
        }
        if (!player?.transform) {
          continue;
        }
        // console.log('antes de tronar', player.transform, entityB.sensor)
        if (
          player?.transform &&
          entityB?.sensor &&
          Matter.Collision.collides(player.transform, entityB.sensor) !== null
        ) {
          // collision happened

          // TODO Remove timers after finishing action to avoid memory leaks.
          switch (player.action) {
            case 'mining':
              if (entityB.category === 'stone') {
                if (!timers[player.id]) {
                  timers[player.id] = cooldownTimer(2000);
                }
                timers[player.id].timeCounter(global.deltaTime);
                if (timers[player.id].timer.currentTime <= 0) {
                  if(!player.items) {
                    player.items = {}
                  }
                  if(!player.items['basicStone']) {
                    player.items.basicStone = 1
                  }
                  if (player.items['basicStone']) {
                    player.items.basicStone = player.items.basicStone + 1
                  }
                  console.log('player Items',player.items)
                }
              }
              break;
            case 'gathering':
              if (entityB.category === 'herb') {
                if (!timers[player.id]) {
                  timers[player.id] = cooldownTimer(2000);
                }
                timers[player.id].timeCounter(global.deltaTime);
                if (timers[player.id].timer.currentTime <= 0) {
                  if(!player.items) {
                    player.items = {}
                  }
                  if(!player.items['basicHerb']) {
                    player.items.basicHerb = 1
                  }
                  if (player.items['basicHerb']) {
                    player.items.basicHerb = player.items.basicHerb + 1
                  }
                  console.log('player Items',player.items)
                }
              }
              break;
            case 'chopping':
              if (entityB.category === 'tree') {
                if (!timers[player.id]) {
                  timers[player.id] = cooldownTimer(2000);
                }
                timers[player.id].timeCounter(global.deltaTime);
                if (timers[player.id].timer.currentTime <= 0) {
                  if(!player.items) {
                    player.items = {}
                  }
                  if(!player.items['basicWood']) {
                    player.items.basicWood = 1
                  }
                  if (player.items['basicWood']) {
                    player.items.basicWood = player.items.basicWood + 1
                  }
                  console.log('player Items',player.items)
                }
              }
              break;
            default:
              break;
          }
        }
      }
    }
    // console.log(timers);
    return world;
  });
};
