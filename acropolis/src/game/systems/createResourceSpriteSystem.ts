import { defineQuery, defineSystem, enterQuery, exitQuery } from 'bitecs';
import { Resource, Position } from '../components/components';

export const createResourceSpriteSystem = (scene: Phaser.Scene) => {
  // const spritesById = {}
  const resourceQuery = defineQuery([Resource]);
  const resourceQueryEnter = enterQuery(resourceQuery);
  const resourceQueryExit = exitQuery(resourceQuery);
  const timeSystem = window.acropolis.timeSystem;
  const getLocalEntityByLocalId =
    window.acropolis.networkSystem.getLocalEntityByLocalId;
  return defineSystem((world) => {
    const enterEntities = resourceQueryEnter(world);
    for (let i = 0; i < enterEntities.length; i++) {
      const id = enterEntities[i];
      const entity = getLocalEntityByLocalId(id);
      console.log('entity', entity)
      entity.sprites = {};
      if (entity.category === 'tree') {
        entity.sprites.body = scene.add.sprite(entity.position.x, entity.position.y -15, 'trees');
      }

      if (entity.category === 'herb') {
        console.log('pintalamadre')
        entity.sprites.body = scene.add.sprite(entity.position.x, entity.position.y - 5, 'globalNature');
        entity.sprites.body.setFrame(60)
      }
      entity.sprites.body.setScale(2)

      // !Important To set multiple resources you can select a frame and change widh and height or without for default
      // if(id === 0) {
      //   entity.sprites.body.setFrame(2, widht, height)
       //   entity.sprites.body.setFrame(2, widht, height)
      // }
    }

    const entities = resourceQuery(world);
    for (let i = 0; i < entities.length; i++) {
      const id = entities[i];
      const entity = getLocalEntityByLocalId(id);
      const { body } = entity.sprites;
      if (!body) {
        continue;
      }
      if (entity.category === 'tree') {
        body.x = entity.position.x
        body.y = entity.position.y -15
      }
      if (entity.category === 'herb') {
        body.x = entity.position.x
        body.y = entity.position.y 
      }
    }

    const exitEntities = resourceQueryExit(world);
    for (let i = 0; i < exitEntities.length; i++) {
      const id = exitEntities[i];
      const entity = getLocalEntityByLocalId(id);
      const { body, clothes, shoes } = entity.sprites;
      console.log('resourceQuery Exit');
      if (!body) {
        continue;
      }
      body.destroy();
    }
    return world;
  });
};
