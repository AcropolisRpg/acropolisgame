import Phaser from 'phaser';
import cooldownTimer from '../utils/cooldownTimer';
// const socket = io('https://acropolisrpg.com', {path: '/gameSocket'}); //'https://stealth-magenta-lady.glitch.me:1234'
// const fpsEl = document.querySelector('#fps');
// const onlineEl = document.querySelector('#online');
// const worldX = document.querySelector('#worldX');
// const worldY = document.querySelector('#worldY');
// const frameRate = 1000 / 30;
import loadingBar from '../components/loadingBar';
import { lerp, getDistance } from '../utils/transformManager';
import {
  loadImage,
  loadTilemapTiledJSON,
  loadSpritesheet
} from '../phaserHelper/loaders';
import { FRAME_SIZE_32_32, FRAME_SIZE_96_96 } from '../constants/constants';
import animatedPlayer from '../animations/player';
import playerPlayAnimation from '../animations/playerPlayAnimations';
export default class Game extends Phaser.Scene {
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
    // this.gameAnimation = this.anims.create(animConfig);
    this.allPlayers = {};
    this.gameTime = Date.now();
    this.followingPlayer = false;
  }
  create() {
    const map = this.make.tilemap({
      key: 'forestkey',
      tileWidth: 16,
      tileHeight: 16
    });
    const tileset = map.addTilesetImage('atlas', 'atlas');
    // const layer =
    map.createLayer('piso', tileset, 0, 0);
    map.createLayer('caminos', tileset, 0, 0);
    map.createLayer('plantas', tileset, 0, 0);
    map.createLayer('construcciones', tileset, 0, 0);
    this.clientLastUpdate = Date.now();
    this.clientLastDelta = Date.now();
    this.clientLastDeltaTime = Date.now();
    animatedPlayer(this)
    // console.log('this.colal', this.colala)
    this.cameras.main.setBounds(0, 0, 1000, 1000);

    // console.log('lala');

    this.pointerado = this.input.activePointer;
    this.instance1 = cooldownTimer(5000);
    this.instance2 = cooldownTimer(1000);
    this.instance3 = cooldownTimer(100);

    // console.log(this.timerio.remainingTime())
    this.lastUpdate = Date.now();
    this.dt = 0;
    // this.add.text(400,200,'Hello World!')

    this.headPosition = new Phaser.Geom.Point(100, 100);
    this.input.mouse.disableContextMenu();
    this.input.on('pointerup', (pointer) => {
      if (pointer.leftButtonReleased()) {
        if (
          this.allPlayers?.[this.currentPlayerId]?.target &&
          this.allPlayers?.[this.currentPlayerId]?.sprite &&
          this.allPlayers?.[this.currentPlayerId]?.sprite?.anims?.currentAnim
            ?.key !== 'running'
        ) {
          playerPlayAnimation(this, 'running', this.allPlayers[this.currentPlayerId])
          if (
            this.allPlayers[this.currentPlayerId].sprite.x <
            this.pointerado.worldX
          ) {
            this.allPlayers[this.currentPlayerId].sprite.flipX = false;
            this.allPlayers[this.currentPlayerId].shoesSprite.flipX = false;
            this.allPlayers[this.currentPlayerId].clothesSprite.flipX = false;
          } else {
            this.allPlayers[this.currentPlayerId].sprite.flipX = true;
            this.allPlayers[this.currentPlayerId].shoesSprite.flipX = true;
            this.allPlayers[this.currentPlayerId].clothesSprite.flipX = true;
          }
        }
        const target = {
          x: Math.round(pointer.worldX),
          y: Math.round(pointer.worldY)
        };
        this.allPlayers[this.currentPlayerId].target = target;
        this.lobbyScene.socket.emit('player click', target);
        // console.log('allplayers',this.allPlayers)
      }
    });
    this.input.on('pointerdown', (pointer) => {
      if (pointer.leftButtonReleased()) {
        const target = { x: pointer.worldX, y: pointer.worldY };
        this.allPlayers[this.currentPlayerId].target = target;
      }
    });
    this.playerInputClient = {};
    this.playerInputClient.keyQ = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.Q
    );
    this.playerInputClient.keyW = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.W
    );
    this.playerInputClient.keyE = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.E
    );
    this.playerInputClient.keyR = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.R
    );
    this.playerInputClient.keyD = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.D
    );
    this.playerInputClient.keyF = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.F
    );
    this.playerInputClient.keyA = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.A
    );
    this.playerInputClient.keyS = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.S
    );

    this.lobbyScene.socket.on('update state', ({ players }) => {
      let now = Date.now();
      this.dt = (now - this.lastUpdate) / (1000 / 30);
      this.lastUpdate = now;
      players.forEach((player) => {
        if (!this.allPlayers?.[player.id]) {
          this.allPlayers[player.id] = {
            sprite: this.add.sprite(
              player.position.x,
              player.position.y,
              'bodySpriteSheet'
            ),
            shoesSprite: this.add.sprite(
              player.position.x,
              player.position.y,
              'shoesSpriteSheet'
            ),
            clothesSprite: this.add.sprite(
              player.position.x,
              player.position.y,
              'clothesSpriteSheet'
            ),
            playerId: player.id,
            transform: {
              x: player.position.x,
              y: player.position.y
            },
            target: { x: player.position.x, y: player.position.y },
            skills: null
          };
        }

        // if(this.instance1.remainigTime() === 5000) {
        if (
          player.skills?.y &&
          player.skills?.x &&
          !this.allPlayers?.[player.id].skills
        ) {
          this.allPlayers[player.id].skills = this.add.sprite(
            player.skills.x,
            player.skills.y,
            'ball'
          );
        } else if (
          player.skills === null &&
          this.allPlayers?.[player.id].skills
        ) {
          this.allPlayers[player.id].skills.destroy();
          this.allPlayers[player.id].skills = null;
        }
        // }
        if (this.instance1.remainigTime() === 5000) {
          // console.log('changa', player);
        }
        if (!isNaN(this.dt)) {
          if (
            this.allPlayers?.[player.id]?.skills?.x &&
            this.allPlayers?.[player.id]?.skills?.y &&
            player.skills?.x &&
            player.skills?.y
          ) {
            this.allPlayers[player.id].skills.x = Math.round(
              lerp(
                this.allPlayers[player.id].skills.x,
                player.skills.x,
                this.dt
              )
            );
            this.allPlayers[player.id].skills.y = Math.round(
              lerp(
                this.allPlayers[player.id].skills.y,
                player.skills.y,
                this.dt
              )
            );
          }
          if (this.allPlayers[player.id].sprite.x === Infinity) {
            this.allPlayers[player.id].sprite.x = 0;
            this.allPlayers[player.id].shoesSprite.x = 0;
            this.allPlayers[player.id].clothesSprite.x = 0;
          }
          if (this.allPlayers[player.id].sprite.y === Infinity) {
            this.allPlayers[player.id].sprite.y = 0;
            this.allPlayers[player.id].shoesSprite.y = 0;
            this.allPlayers[player.id].clothesSprite.y = 0;
          }
          this.allPlayers[player.id].transform.x = Math.round(
            lerp(
              this.allPlayers[player.id].sprite.x,
              player.position.x,
              this.dt
            )
          );
          this.allPlayers[player.id].transform.y = Math.round(
            lerp(
              this.allPlayers[player.id].sprite.y,
              player.position.y,
              this.dt
            )
          );
          this.allPlayers[player.id].target = player.target;
          // if(this.isAttaking){
          //   return
          // }
          if (
            this.allPlayers?.[player.id]?.sprite?.anims?.currentAnim?.key !==
              'running' &&
              !this.isAttaking &&
            getDistance(this.allPlayers[player.id].sprite, player.target) > 1
          ) {
            playerPlayAnimation(this, 'running', this.allPlayers[player.id])
          }
          if (
            this.allPlayers?.[player.id]?.sprite?.anims?.currentAnim?.key !==
              'idle' &&
              !this.isAttaking &&
            getDistance(this.allPlayers[player.id].sprite, player.target) < 1
          ) {
            playerPlayAnimation(this, 'idle', this.allPlayers[player.id])
          }
          if (this.allPlayers[player.id].sprite) {
            if (this.allPlayers[player.id].sprite.x < player.target.x) {
              this.allPlayers[player.id].sprite.flipX = false;
              this.allPlayers[player.id].shoesSprite.flipX = false;
              this.allPlayers[player.id].clothesSprite.flipX = false;
            } else {
              this.allPlayers[player.id].sprite.flipX = true;
              this.allPlayers[player.id].shoesSprite.flipX = true;
              this.allPlayers[player.id].clothesSprite.flipX = true;
            }
          }
          if (this.instance1.remainigTime() === 5000) {
            // console.log('toti', player.skills);
          }
        }
      });

      for (let [key, value] of Object.entries(this.allPlayers)) {
        let exist = false;
        players.forEach((player) => {
          if (key === player.id) {
            exist = true;
          }
        });
        if (!exist) {
          value.sprite.destroy();
          delete this.allPlayers[key];
        }
      }
    });

  }
  update() {
   
    if (this.input.keyboard.checkDown(this.playerInputClient.keyQ, 1000)) {
      this.lobbyScene.socket.emit('player q');
    }
    if(this.input.keyboard.checkDown(this.playerInputClient.keyW, 1000) && !this.isAttaking ) {
      this.isAttaking = true
      playerPlayAnimation(this, 'attack', this.allPlayers[this.currentPlayerId])
      setTimeout(()=> this.isAttaking = false, 267);
    }
    if(this.input.keyboard.checkDown(this.playerInputClient.keyE, 1000) && !this.isAttaking ) {
      this.isAttaking = true
      playerPlayAnimation(this, 'mining', this.allPlayers[this.currentPlayerId])
      setTimeout(()=> this.isAttaking = false, 530);
    }
    if(this.input.keyboard.checkDown(this.playerInputClient.keyR, 1000) && !this.isAttaking ) {
      this.isAttaking = true
      playerPlayAnimation(this, 'gathering', this.allPlayers[this.currentPlayerId])
      setTimeout(()=> this.isAttaking = false, 530);
    }
    if(this.input.keyboard.checkDown(this.playerInputClient.keyD, 1000) && !this.isAttaking ) {
      this.isAttaking = true
      playerPlayAnimation(this, 'chopping', this.allPlayers[this.currentPlayerId])
      setTimeout(()=> this.isAttaking = false, 530);
    }
    if(this.input.keyboard.checkDown(this.playerInputClient.keyF, 1000) && !this.isAttaking ) {
      this.isAttaking = true
      playerPlayAnimation(this, 'fishing', this.allPlayers[this.currentPlayerId])
      setTimeout(()=> this.isAttaking = false, 530);
    }
    if(this.input.keyboard.checkDown(this.playerInputClient.keyA, 1000) && !this.isAttaking ) {
      this.isAttaking = true
      playerPlayAnimation(this, 'watering', this.allPlayers[this.currentPlayerId])
      setTimeout(()=> this.isAttaking = false, 530);
    }
    if(this.input.keyboard.checkDown(this.playerInputClient.keyS, 1000) && !this.isAttaking ) {
      this.isAttaking = true
      playerPlayAnimation(this, 'shoveling', this.allPlayers[this.currentPlayerId])
      setTimeout(()=> this.isAttaking = false, 530);
    }

    let clientNow = Date.now();
    this.clientDeltaTime = (clientNow - this.clientLastUpdate) / (1000 / 60);
    this.clientLastUpdate = clientNow;
    this.correction = this.clientDeltaTime / this.clientLastDeltaTime;
    this.clientLastDeltaTime = this.clientDeltaTime;
    //   let fpsa = 1000 / (now - lastUpdate);
    if (this.allPlayers === {}) {
      return;
    }
    for (let [key] of Object.entries(this.allPlayers)) {
      if (
        this.lobbyScene.socket.id &&
        this.allPlayers[this.lobbyScene.socket.id].sprite
      ) {
        this.currentPlayerId = this.lobbyScene.socket.id;
        if (
          this.allPlayers?.[this.currentPlayerId]?.sprite &&
          !this.followingPlayer &&
          this.cameras.main
        ) {
          this.followingPlayer = true;

          this.cameras.main.startFollow(
            this.allPlayers[this.currentPlayerId].sprite,
            false,
            this.clientDeltaTime * this.correction,
            this.clientDeltaTime * this.correction
          );

          this.cameras.main.zoom = 2;
          this.cameras.main.roundPixels = true;
        }
      }

      if (!isNaN(this.clientDeltaTime)) {
        if (this.allPlayers[key].sprite.x === Infinity) {
          this.allPlayers[key].sprite.x = 0;
          this.allPlayers[key].shoesSprite.x = 0;
          this.allPlayers[key].clothesSprite.x = 0;
        }
        if (this.allPlayers[key].sprite.y === Infinity) {
          this.allPlayers[key].sprite.y = 0;
          this.allPlayers[key].shoesSprite.y = 0;
          this.allPlayers[key].clothesSprite.y = 0;
        }
        if (
          getDistance(
            this.allPlayers[key].sprite,
            this.allPlayers[key].target
          ) > 1
        ) {
          this.allPlayers[key].sprite.x = lerp(
            this.allPlayers[key].sprite.x,
            this.allPlayers[key].transform.x,
            this.clientDeltaTime
          );
          this.allPlayers[key].shoesSprite.x = lerp(
            this.allPlayers[key].shoesSprite.x,
            this.allPlayers[key].transform.x,
            this.clientDeltaTime
          );
          this.allPlayers[key].clothesSprite.x = lerp(
            this.allPlayers[key].clothesSprite.x,
            this.allPlayers[key].transform.x,
            this.clientDeltaTime
          );
          this.allPlayers[key].sprite.y = lerp(
            this.allPlayers[key].sprite.y,
            this.allPlayers[key].transform.y,
            this.clientDeltaTime
          );
          this.allPlayers[key].shoesSprite.y = lerp(
            this.allPlayers[key].shoesSprite.y,
            this.allPlayers[key].transform.y,
            this.clientDeltaTime
          );
          this.allPlayers[key].clothesSprite.y = lerp(
            this.allPlayers[key].clothesSprite.y,
            this.allPlayers[key].transform.y,
            this.clientDeltaTime
          );
        }
        // Debugger conbsole logs
        if (this.instance3.remainigTime() >= 100) {
          // console.log(this.cameras.main)
          // console.log(getDistance (this.allPlayers[key].sprite, this.allPlayers[key].target))
          // console.log(getDistance (this.allPlayers[this.currentPlayerId].sprite, this.allPlayers[this.currentPlayerId].target))
          // this.allPlayers[this.currentPlayerId].sprite.play({ key: 'idle' });
          // console.log(this.allPlayers?.[this.currentPlayerId]?.sprite?.anims?.currentAnim?.key  === 'running' , this.allPlayers[key].sprite.y, this.allPlayers[key].target.y)
          // console.log(this.allPlayers[key].sprite.y - this.allPlayers[key].transform.y)
        }

        if (
          this.allPlayers?.[this.currentPlayerId]?.sprite?.anims?.currentAnim
            ?.key === 'running' &&
            !this.isAttaking &&
          getDistance(
            this.allPlayers[this.currentPlayerId].sprite,
            this.allPlayers[this.currentPlayerId].target
          ) < 1
        ) {
          playerPlayAnimation(this, 'idle', this.allPlayers[this.currentPlayerId])

        }
      }
    }

    if (
      this.pointerado.leftButtonDown() &&
      !this.pointerado.leftButtonReleased() &&
      this.instance3.remainigTime() >= 100
    ) {
      if (this.allPlayers[this.currentPlayerId].sprite) {
        if (
          this.allPlayers[this.currentPlayerId].sprite.x <
          this.pointerado.worldX
        ) {
          this.allPlayers[this.currentPlayerId].sprite.flipX = false;
          this.allPlayers[this.currentPlayerId].shoesSprite.flipX = false;
          this.allPlayers[this.currentPlayerId].clothesSprite.flipX = false;
        } else {
          this.allPlayers[this.currentPlayerId].sprite.flipX = true;
          this.allPlayers[this.currentPlayerId].shoesSprite.flipX = true;
          this.allPlayers[this.currentPlayerId].clothesSprite.flipX = true;
        }
      }
      this.lobbyScene.socket.emit('player click', {
        x: Math.round(this.pointerado.worldX),
        y: Math.round(this.pointerado.worldY)
      });
    }
  }
}
