import { flipPlayerY } from './flipPlayer';
import { Position } from './../components/position';
import { defineQuery, defineSystem, enterQuery, exitQuery } from 'bitecs';
import { Body } from '../components/sprite';

export const createSpriteSystem = (scene: Phaser.Scene, textures: string[]) => {
  // const spritesById = {}
  const spriteQuery = defineQuery([Body]);
  const spriteQueryEnter = enterQuery(spriteQuery);
  const spriteQueryExit = exitQuery(spriteQuery);

  return defineSystem((world) => {
    const enterEntities = spriteQueryEnter(world);
    for (let i = 0; i < enterEntities.length; i++) {
      const id = enterEntities[i];
      const entity = window.acropolis.networkSystem.getLocalEntityByLocalId(id);
      entity.sprites = {};
      entity.sprites.body = scene.add.sprite(0, 0, 'bodySpriteSheet');
      entity.sprites.clothes = scene.add.sprite(0, 0, 'clothesSpriteSheet');
      entity.sprites.shoes = scene.add.sprite(0, 0, 'shoesSpriteSheet');

      // console.log('el current player',window.acropolis.currentPlayerId, entity.id, )
      if(window.acropolis.currentPlayerId === entity.id){
        scene.cameras.main.startFollow(
          entity.sprites.body,
          false,
          window.acropolis.timeSystem.clientDeltaTime *
            window.acropolis.timeSystem.correction,
          window.acropolis.timeSystem.clientDeltaTime *
            window.acropolis.timeSystem.correction
        );
        scene.cameras.main.zoom = 2;
        scene.cameras.main.roundPixels = true;
      }
    }

    const entities = spriteQuery(world);
    for (let i = 0; i < entities.length; i++) {
      const id = entities[i];
      const entity = window.acropolis.networkSystem.getLocalEntityByLocalId(id);
      const { body, clothes, shoes } = entity.sprites;
      if (!body) {
        continue;
      }
      body.x = Position.x[id];
      body.y = Position.y[id];
      clothes.x = Position.x[id];
      clothes.y = Position.y[id];
      shoes.x = Position.x[id];
      shoes.y = Position.y[id];
    }

    const exitEntities = spriteQueryExit(world);
    for (let i = 0; i < exitEntities.length; i++) {
      const id = exitEntities[i];
      const entity = window.acropolis.networkSystem.getLocalEntityByLocalId(id);
      const { body, clothes, shoes } = entity.sprites;
      console.log('spriteQuery Exit');
      if (!body) {
        continue;
      }
      body.destroy();
      clothes.destroy();
      shoes.destroy();
    }
    return world;
  });
};
