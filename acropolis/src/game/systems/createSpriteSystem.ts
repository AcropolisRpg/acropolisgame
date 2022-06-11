import { defineQuery, defineSystem, enterQuery, exitQuery } from 'bitecs';
import { Sprite } from '../components/sprite';

const spritesById = {}
const spriteQuery = defineQuery([Sprite])
const spriteQueryEnter = enterQuery(spriteQuery)
const spriteQueryExit =  exitQuery(spriteQuery)
export const createSpriteSystem = (scene: Phaser.Scene, textures: string[]) =>{
  return defineSystem(world => {
    const enterEntities = spriteQueryEnter(world)
    for (let i = 0; i < enterEntities.length; i++) {
      const id = enterEntities[i];
      const textId = Sprite.texture[id]
      const texture = textures[textId]
      spritesById[id] = scene.add.sprite(0,0, texture)
    }
    return world
  })
} 