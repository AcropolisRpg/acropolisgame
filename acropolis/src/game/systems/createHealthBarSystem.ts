import { defineQuery, defineSystem, enterQuery, exitQuery } from 'bitecs';
import { Body, Position} from '../components/components';
import Phaser from 'phaser';
export const createHealthBarSystem = (scene: Phaser.Scene) => {
  // const spritesById = {}
  const spriteQuery = defineQuery([Body]);
  const spriteQueryEnter = enterQuery(spriteQuery);
  const spriteQueryExit = exitQuery(spriteQuery);
  const timeSystem = window.acropolis.timeSystem;
  const getLocalEntityByLocalId =
    window.acropolis.networkSystem.getLocalEntityByLocalId;
  return defineSystem((world) => {
    const enterEntities = spriteQueryEnter(world);
    for (let i = 0; i < enterEntities.length; i++) {
      const id = enterEntities[i];
      const entity = getLocalEntityByLocalId(id);
      entity.sprites.healthBarDecoration = scene.add.sprite(50, 15, 'healthBarDecoration');
      entity.sprites.healthBarDecoration.setScrollFactor(0, 0)
      entity.sprites.healthBar = scene.add.sprite(57, 15, 'healthBar')
      entity.sprites.healthBar.setScrollFactor(0, 0)
      
    }
    const entities = spriteQuery(world)
    for (let i = 0; i < entities.length; i++) {
      const id = entities[i];
      const entity = getLocalEntityByLocalId(id);
      const networkEntity = window.acropolis.networkSystem.getNetworkEntityByLocalId(id)
      if(networkEntity.healthPoints < 100) {
        // console.log('orale perro', entity.healthPoints)
        const multiplier = networkEntity.healthPoints/100
        entity.healthPoints = networkEntity.healthPoints
        entity.sprites.healthBar.setCrop(0, 0, 50 * multiplier, 10)
      }
    }
 

    const exitEntities = spriteQueryExit(world);
    for (let i = 0; i < exitEntities.length; i++) {
      const id = exitEntities[i];
      const entity = getLocalEntityByLocalId(id);
      const { healthBar, healthBarDecoration } = entity.sprites;
      if (!healthBar) {
        continue;
      }
      healthBar.destroy();
      healthBarDecoration.destroy();
    }
    return world;
  });
};
