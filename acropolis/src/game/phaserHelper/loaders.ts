import { pathHandler } from '../utils/stringHandler'

export const loadImage = (scene, key, url) => {
  return scene.load.image(key, pathHandler(url))
}

export const loadTilemapTiledJSON = (scene, key, url) => {
  return scene.load.tilemapTiledJSON(key, pathHandler(url))
}

export const loadSpritesheet = (scene, key, url, frameSizing) => {
  return scene.load.spritesheet(key, pathHandler(url), frameSizing)
}
