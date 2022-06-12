import { flipPlayerY } from './flipPlayer';
import { Position } from './../components/position';
import { defineQuery, defineSystem, enterQuery, exitQuery } from 'bitecs';
import { Sprite } from '../components/sprite';


export const createSpriteSystem = (scene: Phaser.Scene, textures: string[]) =>{
  const spritesById = {}
  const spriteQuery = defineQuery([Sprite])
  const spriteQueryEnter = enterQuery(spriteQuery)
  const spriteQueryExit =  exitQuery(spriteQuery)

  return defineSystem(world => {
    const enterEntities = spriteQueryEnter(world)
    for (let i = 0; i < enterEntities.length; i++) {
      const id = enterEntities[i];
      const textId = Sprite.texture[id]
      const texture = textures[textId]
      spritesById[id] = scene.add.sprite(0,0, texture)
    }

    const entities = spriteQuery(world)
    for (let i = 0; i < entities.length; i++) {
      const id = entities[i]
      const sprite = spritesById[id]
      if (!sprite) {
        continue
      }
      sprite.x = Position.x[id]
      sprite.y = Position.y[id]
      }

      const exitEntities = spriteQueryExit(world)
      for (let i = 0; i < exitEntities.length; i){
        const id = exitEntities[i]
        const sprite = spritesById[id]
        if (!sprite) {
          continue
        }
        sprite.destroy()
        delete spritesById[id]
      }
    return world
  })
} 