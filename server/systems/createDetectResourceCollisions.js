import { defineSystem } from 'bitecs'
import Matter from 'matter-js'

// !Important imports not working withot JS extension WTF.
import { cooldownTimer } from '../utils/utils.js'

export const createDetectResourceCollision = () => {
  const networkEntities = global.networkEntities
  const timers = {}
  return defineSystem((world) => {
    for (const [, player] of Object.entries(networkEntities)) {
      if (player?.type && player.type !== 'player') {
        continue
      }
      if (!timers[player.id]) {
        timers[player.id] = cooldownTimer(2000)
      }
      timers[player.id].timeCounter(global.deltaTime)
      // console.log('timers[player.id].timer.currentTime', global.deltaTime, timers[player.id].timer.currentTime)
      for (const [, entityB] of Object.entries(networkEntities)) {
        if (
          player?.transform &&
          entityB?.activeSkill &&
          Matter.Collision.collides(player.transform, entityB.activeSkill) !== null
        ) {
          console.log(' le parte su madre', player.healthPoints)
          player.healthPoints -= 0.1
          if (player.healthPoints <= 1) {
            player.healthPoints = 100
          }
        }

        if (player.id === entityB.id) {
          continue
        }
        if (!entityB?.sensor) {
          continue
        }
        if (!player?.transform) {
          continue
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
                timers[player.id].trigger()
                if (timers[player.id].isFinished()) {
                  if (!player.items) {
                    player.items = {}
                  }
                  if (!player.items.basicStone) {
                    player.items.basicStone = {
                      name: 'basicStone',
                      quantity: 1
                    }
                  }
                  if (player.items.basicStone) {
                    player.items.basicStone.quantity = player.items.basicStone.quantity + 1
                  }
                  console.log('player Items', player.items)
                }
              }
              break
            case 'gathering':
              if (entityB.category === 'herb') {
                timers[player.id].trigger()
                if (timers[player.id].isFinished()) {
                  if (!player.items) {
                    player.items = {}
                  }
                  if (!player.items.basicHerb) {
                    player.items.basicHerb = {
                      name: 'basicHerb',
                      quantity: 1
                    }
                  }
                  if (player.items.basicHerb) {
                    player.items.basicHerb.quantity = player.items.basicHerb.quantity + 1
                  }
                  console.log('player Items', player.items)
                }
              }
              break
            case 'chopping':
              if (entityB.category === 'tree') {
                timers[player.id].trigger()
                if (timers[player.id].isFinished()) {
                  if (!player.items) {
                    player.items = {}
                  }
                  if (!player.items.basicWood) {
                    player.items.basicWood = {
                      name: 'basicWood',
                      quantity: 1
                    }
                  }
                  if (player.items.basicWood) {
                    player.items.basicWood.quantity = player.items.basicWood.quantity + 1
                  }
                  console.log('player Items', player.items)
                }
              }
              break
            case 'fishing':
              if (entityB.category === 'fish') {
                timers[player.id].trigger()
                if (timers[player.id].isFinished()) {
                  if (!player.items) {
                    player.items = {}
                  }
                  if (!player.items.basicFish) {
                    player.items.basicFish = {
                      name: 'basicFish',
                      quantity: 1
                    }
                  }
                  if (player.items.basicFish) {
                    player.items.basicFish.quantity = player.items.basicFish.quantity + 1
                  }
                  console.log('player Items', player.items)
                }
              }
              break
            case 'watering':
              if (entityB.category === 'crop') {
                timers[player.id].trigger()
                if (timers[player.id].isFinished()) {
                  if (!player.items) {
                    player.items = {}
                  }
                  if (!player.items.basicCrop) {
                    player.items.basicCrop = {
                      name: 'basicCrop',
                      quantity: 1
                    }
                  }
                  if (player.items.basicCrop) {
                    player.items.basicCrop.quantity = player.items.basicCrop.quantity + 1
                  }
                  console.log('player Items', player.items)
                }
              }
              break
            case 'shoveling':
              if (entityB.category === 'sand') {
                timers[player.id].trigger()
                if (timers[player.id].isFinished()) {
                  if (!player.items) {
                    player.items = {}
                  }
                  if (!player.items.basicSand) {
                    player.items.basicSand = {
                      name: 'basicSand',
                      quantity: 1
                    }
                  }
                  if (player.items.basicSand) {
                    player.items.basicSand.quantity = player.items.basicSand.quantity + 1
                  }
                  console.log('player Items', player.items)
                }
              }
              break
            case 'attack':
              if (entityB.category === 'animal') {
                timers[player.id].trigger()
                if (timers[player.id].isFinished()) {
                  if (!player.items) {
                    player.items = {}
                  }
                  if (!player.items.basicLeather) {
                    player.items.basicLeather = {
                      name: 'basicLeather',
                      quantity: 1
                    }
                  }
                  if (player.items.basicLeather) {
                    player.items.basicLeather.quantity = player.items.basicLeather.quantity + 1
                  }
                  console.log('player Items', player.items)
                }
              }
              break
            default:
              break
          }
        }
      }
    }
    // console.log(timers);
    return world
  })
}
