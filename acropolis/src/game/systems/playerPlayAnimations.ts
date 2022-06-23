const playerPlayAnimation = (scene, animationKey, playerInstance) => {
  switch (animationKey) {
    case 'running':
      playerInstance.sprites.body.play({ key: 'running' })
      playerInstance.sprites.shoes.play({
        key: 'runningShoes'
      })
      playerInstance.sprites.clothes.play({
        key: 'runningClothes'
      })
      break
    case 'idle':
      playerInstance.sprites.body.play({ key: 'idle' })
      playerInstance.sprites.shoes.play({
        key: 'idleShoes'
      })
      playerInstance.sprites.clothes.play({
        key: 'idleClothes'
      })
      break
    case 'attack':
      playerInstance.sprites.body.play({ key: 'attack' })
      playerInstance.sprites.shoes.play({
        key: 'attackShoes'
      })
      playerInstance.sprites.clothes.play({
        key: 'attackClothes'
      })
      break
    case 'mining':
      playerInstance.sprites.body.play({ key: 'mining' })
      playerInstance.sprites.shoes.play({
        key: 'miningShoes'
      })
      playerInstance.sprites.clothes.play({
        key: 'miningClothes'
      })
      break
    case 'gathering':
      playerInstance.sprites.body.play({ key: 'gathering' })
      playerInstance.sprites.shoes.play({
        key: 'gatheringShoes'
      })
      playerInstance.sprites.clothes.play({
        key: 'gatheringClothes'
      })
      break
    case 'chopping':
      playerInstance.sprites.body.play({ key: 'chopping' })
      playerInstance.sprites.shoes.play({
        key: 'choppingShoes'
      })
      playerInstance.sprites.clothes.play({
        key: 'choppingClothes'
      })
      break
    case 'fishing':
      playerInstance.sprites.body.play({ key: 'fishing' })
      playerInstance.sprites.shoes.play({
        key: 'fishingShoes'
      })
      playerInstance.sprites.clothes.play({
        key: 'fishingClothes'
      })
      break
    case 'watering':
      playerInstance.sprites.body.play({ key: 'watering' })
      playerInstance.sprites.shoes.play({
        key: 'wateringShoes'
      })
      playerInstance.sprites.clothes.play({
        key: 'wateringClothes'
      })
      break
    case 'shoveling':
      playerInstance.sprites.body.play({ key: 'shoveling' })
      playerInstance.sprites.shoes.play({
        key: 'shovelingShoes'
      })
      playerInstance.sprites.clothes.play({
        key: 'shovelingClothes'
      })
      break

    default:
      break
  }
}

export default playerPlayAnimation
