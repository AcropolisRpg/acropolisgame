import { defineQuery, defineSystem, enterQuery, exitQuery } from 'bitecs';
import { Body, Position} from '../components/components';

export const createItemsSystem = (scene: Phaser.Scene) => {
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
      entity.text = {}
      entity.text.wood = scene.add.text(100, 10, 'Wood', { color: 'blue'  });
      entity.text.woodQty = scene.add.text(170, 10, '0', { color: 'blue'  });
      entity.text.stone = scene.add.text(190, 10, 'Stone', { color: 'blue'});
      entity.text.stoneQty = scene.add.text(270, 10, '0', { color: 'blue'});
      entity.text.herb = scene.add.text(280, 10, 'Herb', { color: 'blue'});
      entity.text.herbQty = scene.add.text(350, 10, '0', { color: 'blue'});
      entity.text.wood.setScrollFactor(0, 0)
      entity.text.stone.setScrollFactor(0, 0)
      entity.text.herb.setScrollFactor(0, 0)
      entity.text.woodQty.setScrollFactor(0, 0)
      entity.text.stoneQty.setScrollFactor(0, 0)
      entity.text.herbQty.setScrollFactor(0, 0)
    }

    const exitEntities = spriteQueryExit(world);
    for (let i = 0; i < exitEntities.length; i++) {
      const id = exitEntities[i];
      const entity = getLocalEntityByLocalId(id);
      const { wood, stone, herb } = entity.text;
      if (!wood) {
        continue;
      }
      wood.destroy();
      stone.destroy();
      herb.destroy();
    }
    return world;
  });
};
