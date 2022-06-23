export const flipPlayerX = (sprites, flip = false) => {
  for (const [key] of Object.entries(sprites)) {
    if (key === 'body' || key === 'clothes' || key === 'shoes') {
      sprites[key].flipX = flip
    }
  }
}

export const flipPlayerY = (sprites, flip = false) => {
  for (const [key] of Object.entries(sprites)) {
    sprites[key].flipY = flip
  }
}
