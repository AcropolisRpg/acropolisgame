const animatedPlayer = (scene) => {

  // Body
  const running = {
    key: 'running',
    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {
      start: 128,
      end: 135
    }),
    frameRate: 15,
    repeat: -1
  };
  scene.anims.create(running);
  const idle = {
    key: 'idle',
    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {
      frames: [128]
    }),
    frameRate: 15,
    repeat: -1
  };
  scene.anims.create(idle);
  const attack = {
    key: 'attack',
    frames: scene.anims.generateFrameNumbers('bodySpriteSheet',  {
      start: 1152,
      end: 1155
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(attack);
  const mining = {
    key: 'mining',
    frames: scene.anims.generateFrameNumbers('bodySpriteSheet',  {
      start: 8*8*31,
      end:  8*8*31+4
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(mining);
  const gathering = {
    key: 'gathering',
    frames: scene.anims.generateFrameNumbers('bodySpriteSheet',  {
      start: 8*8*10,
      end:  8*8*10+2
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(gathering);
  const chopping = {
    key: 'chopping',
    frames: scene.anims.generateFrameNumbers('bodySpriteSheet',  {
      start: 8*8*35,
      end:  8*8*35+4
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(chopping);
  const fishing = {
    key: 'fishing',
    frames: scene.anims.generateFrameNumbers('bodySpriteSheet',  {
      start: 8*8*47,
      end:  8*8*47+4
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(fishing);
  const watering = {
    key: 'watering',
    frames: scene.anims.generateFrameNumbers('bodySpriteSheet',  {
      start: 8*8*39,
      end:  8*8*39+1
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(watering);
  const shoveling = {
    key: 'shoveling',
    frames: scene.anims.generateFrameNumbers('bodySpriteSheet',  {
      start: 8*8*43,
      end:  8*8*43+4
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(shoveling);
  // Shoes
  const runningShoes = {
    key: 'runningShoes',
    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {
      start: 200,
      end: 207
    }),
    frameRate: 15,
    repeat: -1
  };
  scene.anims.create(runningShoes);
  const idleShoes = {
    key: 'idleShoes',
    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {
      frames: [160]
    }),
    frameRate: 15,
    repeat: -1
  };
  scene.anims.create(idleShoes);
  const attackShoes = {
    key: 'attackShoes',
    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {
      start: 1440,
      end: 1443
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(attackShoes);
  const miningShoes = {
    key: 'miningShoes',
    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {
      start: 2480,
      end: 2483
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(miningShoes);
  const gatheringShoes = {
    key: 'gatheringShoes',
    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {
      start: 8*10*10,
      end:  8*10*10+2
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(gatheringShoes);
  const choppingShoes = {
    key: 'choppingShoes',
    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {
      start: 8*10*35,
      end:  8*10*35+4
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(choppingShoes);
  const fishingShoes = {
    key: 'fishingShoes',
    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {
      start: 8*10*47,
      end:  8*10*47+4
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(fishingShoes);
  const wateringShoes = {
    key: 'wateringShoes',
    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {
      start: 8*10*39,
      end:  8*10*49+1
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(wateringShoes);
  const shovelingShoes = {
    key: 'shovelingShoes',
    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {
      start: 8*10*43,
      end:  8*10*43+4
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(shovelingShoes);
  // Clothes
  const runningClothes = {
    key: 'runningClothes',
    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {
      start: 160,
      end: 167
    }),
    frameRate: 15,
    repeat: -1
  };
  scene.anims.create(runningClothes);

  const idleClothes = {
    key: 'idleClothes',
    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {
      frames: [160]
    }),
    frameRate: 15,
    repeat: -1
  };
  scene.anims.create(idleClothes);
  const attackClothes = {
    key: 'attackClothes',
    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {
      start: 1440,
      end: 1443
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(attackClothes);
  const miningClothes = {
    key: 'miningClothes',
    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {
      start: 2480,
      end: 2483
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(miningClothes);
  const gatheringClothes = {
    key: 'gatheringClothes',
    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {
      start: 8*10*10,
      end: 8*10*10+2
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(gatheringClothes);
  const choppingClothes = {
    key: 'choppingClothes',
    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {
      start: 8*10*35,
      end: 8*10*35+4
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(choppingClothes);
  const fishingClothes = {
    key: 'fishingClothes',
    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {
      start: 8*10*47,
      end: 8*10*47+4
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(fishingClothes);
  const wateringClothes = {
    key: 'wateringClothes',
    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {
      start: 8*10*39,
      end: 8*10*39+1
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(wateringClothes);
  const shovelingClothes = {
    key: 'shovelingClothes',
    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {
      start: 8*10*43,
      end: 8*10*43+4
    }),
    frameRate: 15,
    repeat: 0
  };
  scene.anims.create(shovelingClothes);
}

export default animatedPlayer
