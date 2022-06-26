export const flipPlayerX = (sprites, flip = false) => {
  for (const [key] of Object.entries(sprites)) {
    if (key === 'body' || key === 'clothes' || key === 'shoes' || key === 'hair') {
      sprites[key].flipX = flip
    }
  }
}

export const flipPlayerY = (sprites, flip = false) => {
  for (const [key] of Object.entries(sprites)) {
    sprites[key].flipY = flip
  }
}
