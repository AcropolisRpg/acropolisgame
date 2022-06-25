import Phaser from 'phaser';
import loadingBar from '../systems/loadingBar';
import {
  loadImage,
  loadTilemapTiledJSON,
  loadSpritesheet
} from '../phaserHelper/loaders';
import { FRAME_SIZE_32_32, FRAME_SIZE_96_96, FRAME_SIZE_16_16, FRAME_SIZE_64_64 } from '../constants/constants';
import animatedPlayer from '../systems/playerSpritesheetAnimations';
import createGameControllerSystem from '../systems/createGameControllerSystem';
import { createWorld } from 'bitecs';

import { createSpriteSystem } from '../systems/createSpriteSystem';
import { createEntitySystem } from '../systems/createEntitySystem';
import { createTargetMovementSystem } from './../systems/createTargetMovementSystem';
import { createTimeSystem } from '../systems/createTimeSystem';
import createAnimationSystem from '../systems/createAnimationSystem';
import { createResourceSpriteSystem } from '../systems/createResourceSpriteSystem';
import { createHealthBarSystem } from '../systems/createHealthBarSystem';
import { createItemsSystem } from '../systems/createItemsSystem';

declare global {
  interface Window {
    acropolis: any;
  }
}
export default class Game extends Phaser.Scene {
  private world;
  private lobbyScene;
  private spriteSystem;
  private entitySystem;
  private targetMovementSystem;
  private timeSystem;
  private gameControllerSystem;
  private animationSystem;
  private resourceSpriteSystem;
  private healthBarSystem;
  private itemsSystem;

  init(data) {
    this.lobbyScene = {};
    this.lobbyScene.socket = data.socket;
  }
  preload() {
    //This is the place where you load all assets.
    loadingBar(this);
    loadImage(this, 'ball', '/game/sprites/spikedballa.png');
    loadImage(this, 'atlas', '/game/tiled/atlas.png');
    loadTilemapTiledJSON(this, 'forestkey', '/game/tiled/forest1.json');
    loadSpritesheet(
      this,
      'bodySpriteSheet',
      '/game/character/characters/char_all.png',
      FRAME_SIZE_32_32
    );
    loadSpritesheet(
      this,
      'shoesSpriteSheet',
      '/game/character/clothes/shoes.png',
      FRAME_SIZE_32_32
    );
    loadSpritesheet(
      this,
      'longStaightHairSpriteSheet',
      '/game/character/hair/long_straight.png',
      FRAME_SIZE_32_32
    );
    loadSpritesheet(
      this,
      'clothesSpriteSheet',
      '/game/character/clothes/basic.png',
      FRAME_SIZE_32_32
    );
    loadSpritesheet(
      this,
      'balla',
      '/game/sprites/spikedballa.png',
      FRAME_SIZE_96_96
    );
    loadSpritesheet(
      this,
      'trees',
      '/game/nature/global.png',
      FRAME_SIZE_32_32
    );
    loadSpritesheet(
      this,
      'globalNature',
      '/game/nature/global.png',
      FRAME_SIZE_16_16
    );
    loadSpritesheet(
      this,
      'TXprops',
      '/game/rpg-pack/Texture/TXProps.png',
      FRAME_SIZE_32_32
    );
    loadSpritesheet(
      this,
      'healthBarDecoration',
      '/game/statusbar/health_bar_decoration.png',
      {
        frameWidth: 64,
        frameHeight: 17
      }
    );
    loadSpritesheet(
      this,
      'healthBar',
      '/game/statusbar/health_bar.png',
      {
        frameWidth: 49,
        frameHeight: 17
      }
    );
    loadSpritesheet(
      this,
      'backpack',
      '/game/rpg-pack/UI/backpack.png',
      FRAME_SIZE_32_32
    );
    loadSpritesheet(
      this,
      'backpack',
      '/game/rpg-pack/UI/backpack.png',
      FRAME_SIZE_32_32
    );
    loadSpritesheet(
      this,
      'inventory',
      '/game/rpg-pack/UI/inventory.png',
      {
        frameWidth: 192,
        frameHeight: 192
      }
    );
    loadSpritesheet(
      this,
      'icons',
      '/game/icons/icons_full_32.png',
      FRAME_SIZE_32_32
    );
  }
  create() {
    this.world = createWorld();
    this.timeSystem = createTimeSystem();
    this.entitySystem = createEntitySystem();
    this.itemsSystem = createItemsSystem(this) 
    this.gameControllerSystem = createGameControllerSystem(
      this,
      this.lobbyScene.socket
    );
    this.spriteSystem = createSpriteSystem(this, [
      'bodySpriteSheet',
      'clothesSpriteSheet',
      'shoesSpriteSheet'
    ]);
    this.healthBarSystem = createHealthBarSystem(this)
    this.animationSystem = createAnimationSystem(this);
    this.targetMovementSystem = createTargetMovementSystem(
      this,
      this.lobbyScene.socket
    );
    this.resourceSpriteSystem = createResourceSpriteSystem(this)

    //Build Map
    const map = this.make.tilemap({
      key: 'forestkey',
      tileWidth: 16,
      tileHeight: 16
    });
    const tileset = map.addTilesetImage('atlas', 'atlas');
    map.createLayer('piso', tileset, 0, 0);
    map.createLayer('caminos', tileset, 0, 0);
    map.createLayer('plantas', tileset, 0, 0);
    map.createLayer('construcciones', tileset, 0, 0);
    // Crete player Animations
    animatedPlayer(this);

    //Restrict camera maximum movement
    this.cameras.main.setBounds(0, 0, 1000, 1000);

    //Disable right click context menu
    this.input.mouse.disableContextMenu();

    setInterval(() => {
      if (
        !this.world ||
        !this.spriteSystem ||
        !this.entitySystem ||
        !this.targetMovementSystem ||
        !this.timeSystem
      ) {
        // console.log('entra aca', !this.world || !this.spriteSystem || this.playerSystem || this.targetMovementSystem)
        return;
      }
      this.itemsSystem(this.world)
      this.timeSystem(this.world);
      this.entitySystem(this.world);
      this.spriteSystem(this.world);
      this.healthBarSystem(this.world)
      this.resourceSpriteSystem(this.world)
      this.targetMovementSystem(this.world);
      this.gameControllerSystem(this.world);
      this.animationSystem(this.world);

    }, window.acropolis.timeSystem.frameRate);
  }
}
