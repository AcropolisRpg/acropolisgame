const playerPlayAnimation = (scene, animationKey, playerInstance) => {
  window.acropolis.walking.stop()
  window.acropolis.sword.stop()
  window.acropolis.wood.stop()
  window.acropolis.pickaxe.stop()
  window.acropolis.fishing.stop()
  window.acropolis.watering.stop()
  window.acropolis.gathering.stop()
  window.acropolis.shoveling.stop()
  switch (animationKey) {
    case 'running':

      playerInstance.sprites.body.play({ key: 'running' })
      playerInstance.sprites.shoes.play({ 
        key:'runningShoes'
      })   
      playerInstance.sprites.hair.play({
        key: 'runningHair'
      })
      playerInstance.sprites.clothes.play({
        key: 'runningClothes'
      })
      // setInterval( ()=>{
      //   scene.sound.play('playerStep');
      // },150)
     
      window.acropolis.walking.play()

      // playerInstance.sprites.body.on('animationrepeat', function () {
      //   if(playerInstance.sprites.body.anims.currentAnim.key === 'running') {
      //     scene.sound.stop('playerStep')
      //     scene.sound.resume('playerStep');
      //     // console.log('correindolachis')
      //   }
      // });
      break
    case 'idle':
      playerInstance.sprites.body.play({ key: 'idle' })
      playerInstance.sprites.shoes.play({ 
        key: 'idleShoes' 
      })     
      playerInstance.sprites.hair.play({
        key: 'idleHair'
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
      playerInstance.sprites.hair.play({
        key: 'attackHair'
      })
      playerInstance.sprites.clothes.play({
        key: 'attackClothes'
      })
      window.acropolis.sword.play()
      break
    case 'mining':
      playerInstance.sprites.body.play({ key: 'mining' })
      playerInstance.sprites.shoes.play({
        key: 'miningShoes'
      })
      playerInstance.sprites.hair.play({
        key: 'miningHair'
      })
      playerInstance.sprites.clothes.play({
        key: 'miningClothes'
      })
      window.acropolis.pickaxe.play()
      break
    case 'gathering':
      playerInstance.sprites.body.play({ key: 'gathering' })
      playerInstance.sprites.shoes.play({
        key: 'gatheringShoes'
      })
      playerInstance.sprites.hair.play({
        key: 'gatheringHair'
      })
      playerInstance.sprites.clothes.play({
        key: 'gatheringClothes'
      })
      window.acropolis.gathering.play()
      break
    case 'chopping':
      playerInstance.sprites.body.play({ key: 'chopping' })
      playerInstance.sprites.shoes.play({
        key: 'choppingShoes'
      })
      playerInstance.sprites.hair.play({
        key: 'choppingHair'
      })
      playerInstance.sprites.clothes.play({
        key: 'choppingClothes'
      })
      window.acropolis.wood.play()
      break
    case 'fishing':
      playerInstance.sprites.body.play({ key: 'fishing' })
      playerInstance.sprites.shoes.play({
        key: 'fishingShoes'
      })
      playerInstance.sprites.hair.play({
        key: 'fishingHair'
      })
      playerInstance.sprites.clothes.play({
        key: 'fishingClothes'
      })
      window.acropolis.fishing.play()
      break
    case 'watering':
      playerInstance.sprites.body.play({ key: 'watering' })
      playerInstance.sprites.shoes.play({
        key: 'wateringShoes'
      })
      playerInstance.sprites.hair.play({
        key: 'wateringHair'
      })
      playerInstance.sprites.clothes.play({
        key: 'wateringClothes'
      })
      window.acropolis.watering.play()
      break
    case 'shoveling':
      playerInstance.sprites.body.play({ key: 'shoveling' })
      playerInstance.sprites.shoes.play({
        key: 'shovelingShoes'
      })
      playerInstance.sprites.hair.play({
        key: 'shovelingHair'
      })
      playerInstance.sprites.clothes.play({
        key: 'shovelingClothes'
      })
      window.acropolis.shoveling.play()
      break

    default:
      break
  }
}

export default playerPlayAnimation
