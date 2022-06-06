const playerPlayAnimation = (scene, animationKey, playerInstance) => {
  switch (animationKey) {
    case 'running':
      playerInstance.sprite.play({ key: 'running' });
      playerInstance.shoesSprite.play({
        key: 'runningShoes'
      });
      playerInstance.clothesSprite.play({
        key: 'runningClothes'
      });
      break;
    case 'idle':
      playerInstance.sprite.play({ key: 'idle' });
      playerInstance.shoesSprite.play({
        key: 'idleShoes'
      });
      playerInstance.clothesSprite.play({
        key: 'idleClothes'
      });
      break;
    case 'attack':
      playerInstance.sprite.play({ key: 'attack' });
      playerInstance.shoesSprite.play({
        key: 'attackShoes'
      });
      playerInstance.clothesSprite.play({
        key: 'attackClothes'
      });
      break;
    case 'mining':
      playerInstance.sprite.play({ key: 'mining' });
      playerInstance.shoesSprite.play({
        key: 'miningShoes'
      });
      playerInstance.clothesSprite.play({
        key: 'miningClothes'
      });
      break;
    case 'gathering':
      playerInstance.sprite.play({ key: 'gathering' });
      playerInstance.shoesSprite.play({
        key: 'gatheringShoes'
      });
      playerInstance.clothesSprite.play({
        key: 'gatheringClothes'
      });
      break;
    case 'chopping':
      playerInstance.sprite.play({ key: 'chopping' });
      playerInstance.shoesSprite.play({
        key: 'choppingShoes'
      });
      playerInstance.clothesSprite.play({
        key: 'choppingClothes'
      });
      break;
    case 'fishing':
      playerInstance.sprite.play({ key: 'fishing' });
      playerInstance.shoesSprite.play({
        key: 'fishingShoes'
      });
      playerInstance.clothesSprite.play({
        key: 'fishingClothes'
      });
      break;
    case 'watering':
      playerInstance.sprite.play({ key: 'watering' });
      playerInstance.shoesSprite.play({
        key: 'wateringShoes'
      });
      playerInstance.clothesSprite.play({
        key: 'wateringClothes'
      });
      break;
    case 'shoveling':
      playerInstance.sprite.play({ key: 'shoveling' });
      playerInstance.shoesSprite.play({
        key: 'shovelingShoes'
      });
      playerInstance.clothesSprite.play({
        key: 'shovelingClothes'
      });
      break;

    default:
      break;
  }
};

export default playerPlayAnimation;
