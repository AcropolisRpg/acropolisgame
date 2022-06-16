import { flipPlayerY } from './flipPlayer';
import { Position } from './../components/position';
import { defineQuery, defineSystem, enterQuery, exitQuery } from 'bitecs';
import { Body } from '../components/sprite';


export const createSpriteSystem = (scene: Phaser.Scene, textures: string[]) =>{
  const spritesById = {}
  const spriteQuery = defineQuery([Body])
  const spriteQueryEnter = enterQuery(spriteQuery)
  const spriteQueryExit =  exitQuery(spriteQuery)

  return defineSystem(world => {
    const enterEntities = spriteQueryEnter(world)
    for (let i = 0; i < enterEntities.length; i++) {
      console.log('sistema')
      const id = enterEntities[i];
      // const textId = Sprite.texture[id]
      // const texture = textures[textId]
      const entity = window.acropolis.networkSystem.getLocalEntityByLocalId(id)
      entity.sprite = scene.add.sprite(0,0, 'bodySpriteSheet')
      // console.lowindow.acropolis.networkSystem.getLatestNetworkData()
      // scene.cameras.main.startFollow(
      //             spritesById[id],
      //       false,
      //       scene.clientDeltaTime * scene.correction,
      //       scene.clientDeltaTime * this.correction
      //     );

      //     this.cameras.main.zoom = 2;
      //     this.cameras.main.roundPixels = true;
    }

    const entities = spriteQuery(world)
    for (let i = 0; i < entities.length; i++) {
      const id = entities[i]
      const entity = window.acropolis.networkSystem.getLocalEntityByLocalId(id)
      const {sprite} = entity
      console.log('viene undefind',sprite, entity)
      if (!sprite) {
        continue
      }
      sprite.x = Position.x[id]
      sprite.y = Position.y[id]
      }

      const exitEntities = spriteQueryExit(world)
      for (let i = 0; i < exitEntities.length; i){
        const id = exitEntities[i]
        const sprite =  window.acropolis.networkSystem.getLocalEntityByLocalId(id).sprite
        if (!sprite) {
          continue
        }
        sprite.destroy()
        delete spritesById[id]
      }
    return world
  })
} 