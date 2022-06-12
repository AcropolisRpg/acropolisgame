
import Phaser, { Scene } from 'phaser';
import cooldownTimer from '../utils/cooldownTimer';
import loadingBar from '../systems/loadingBar';
import { lerp, getDistance } from '../utils/transformManager';
import {
  loadImage,
  loadTilemapTiledJSON,
  loadSpritesheet
} from '../phaserHelper/loaders';
import { FRAME_SIZE_32_32, FRAME_SIZE_96_96 } from '../constants/constants';
import animatedPlayer from '../systems/playerSpritesheetAnimations';
import playerPlayAnimation from '../systems/playerPlayAnimations';
import gameController from '../systems/gameController';
import { flipPlayerX } from '../systems/flipPlayer';
import { addComponent, addEntity, createWorld, defineSystem } from 'bitecs';
import { Position } from '../components/position';
import { Velocity } from '../components/velocity';
import { Sprite } from '../components/sprite';
import { createSpriteSystem } from '../systems/createSpriteSystem';
import { createPlayerSystem } from '../systems/createPlayerSystem';
import { createTargetMovementSystem } from './../systems/createTargetMovementSystem';

declare global {
  interface Window { acropolis: any }
}
export default class Game extends Phaser.Scene {
  private clientLastUpdate
  private world 
  private lobbyScene 
  private pointerado 
  private allPlayers
  private followingPlayer
  private spriteSystem 
  private currentPlayerId
  private dt 
  private lastUpdate
  private instance1
  private instance2
  private instance3 
  private isAttaking 
  private clientDeltaTime
  private correction
  private clientLastDeltaTime
  private clientLastDelta
  private playerSystem
  private targetMovementSystem

  // constructor()
	// {
	// 	super('game')
	// }

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
    this.allPlayers = {};
    this.followingPlayer = false;
  }
  create() { 

    // console.log(globalThis.acropolis.networkUpdateStateSystem.getLatestNetworkData())
    this.world = createWorld()
    this.playerSystem = createPlayerSystem()
    // setInterval( ()=>{
    //   console.log('tumadre')
    //   this.playerSystem(this.world)
    // },500)
    this.targetMovementSystem = createTargetMovementSystem()



    // const player = addEntity(this.world)
    // addComponent(this.world, Position, player)

    // Position.x[player] = 100 
    // Position.y[player] = 100

    // addComponent(this.world, Velocity, player)

    // Velocity.x[player] = 100
    // Velocity.y[player] = 100
    // addComponent(this.world, Sprite, player)
    // Sprite.texture[player] = 0
    // this.spriteSystem = createSpriteSystem(this, ['bodySpriteSheet','clothesSpriteSheet','shoesSpriteSheet'])

    // //Build Map
    // const map = this.make.tilemap({
    //   key: 'forestkey',
    //   tileWidth: 16,
    //   tileHeight: 16
    // });
    // const tileset = map.addTilesetImage('atlas', 'atlas');
    // map.createLayer('piso', tileset, 0, 0);
    // map.createLayer('caminos', tileset, 0, 0);
    // map.createLayer('plantas', tileset, 0, 0);
    // map.createLayer('construcciones', tileset, 0, 0);
    // // Crete player Animations
    // animatedPlayer(this);

    // //Restrict camera maximum movement
    // this.cameras.main.setBounds(0, 0, 1000, 1000);

    // //Time Management?
    // this.clientLastUpdate = Date.now();
    // this.clientLastDelta = Date.now();
    // this.clientLastDeltaTime = Date.now();
    // this.pointerado = this.input.activePointer;
    // this.instance1 = cooldownTimer(5000);
    // this.instance2 = cooldownTimer(1000);
    // this.instance3 = cooldownTimer(100);
    // this.lastUpdate = Date.now();
    // this.dt = 0;

    // //Disable right click context menu
    // this.input.mouse.disableContextMenu();

    // //Refactor all this shit into a fucking system with components
    // this.input.on('pointerup', (pointer) => {
    //   if (pointer.leftButtonReleased()) {
    //     if (
    //       this.allPlayers?.[this.currentPlayerId]?.target &&
    //       this.allPlayers?.[this.currentPlayerId]?.sprite &&
    //       this.allPlayers?.[this.currentPlayerId]?.sprite?.anims?.currentAnim
    //         ?.key !== 'running'
    //     ) {
    //       playerPlayAnimation(
    //         this,
    //         'running',
    //         this.allPlayers[this.currentPlayerId]
    //       );
    //       if (
    //         this.allPlayers[this.currentPlayerId].sprite.x <
    //         this.pointerado.worldX
    //       ) {
    //         flipPlayerX(this.allPlayers[this.currentPlayerId].sprites)
    //       } else {
    //         flipPlayerX(this.allPlayers[this.currentPlayerId].sprites, true)
    //       }
    //     }
    //     const target = {
    //       x: Math.round(pointer.worldX),
    //       y: Math.round(pointer.worldY)
    //     };
    //     this.allPlayers[this.currentPlayerId].target = target;
    //     this.lobbyScene.socket.emit('player click', target);
    //   }
    // });

    // this.input.on('pointerdown', (pointer) => {
    //   if (pointer.leftButtonReleased()) {
    //     const target = { x: pointer.worldX, y: pointer.worldY };
    //     this.allPlayers[this.currentPlayerId].target = target;
    //   }
    // });

    // //Yes this is a fucking bloody hell, refactor into systems and components
    // this.lobbyScene.socket.on('update state', ({ players }) => {
    //   const now = Date.now();
    //   this.dt = (now - this.lastUpdate) / (1000 / 30);
    //   this.lastUpdate = now;
    //   players.forEach((player) => {
    //     if (!this.allPlayers?.[player.id]) {
    //       this.allPlayers[player.id] = {
    //         sprites:{
    //           body: this.add.sprite(
    //             player.position.x,
    //             player.position.y,
    //             'bodySpriteSheet'
    //           ),
    //           shoes: this.add.sprite(
    //             player.position.x,
    //             player.position.y,
    //             'shoesSpriteSheet'
    //           ),
    //           clothes: this.add.sprite(
    //             player.position.x,
    //             player.position.y,
    //             'clothesSpriteSheet'
    //           ),
    //         },
    //         playerId: player.id,
    //         transform: {
    //           x: player.position.x,
    //           y: player.position.y
    //         },
    //         target: { x: player.position.x, y: player.position.y },
    //         skills: null
    //       };
    //     }

    //     // if(this.instance1.remainigTime() === 5000) {
    //     if (
    //       player.skills?.y &&
    //       player.skills?.x &&
    //       !this.allPlayers?.[player.id].skills
    //     ) {
    //       this.allPlayers[player.id].skills = this.add.sprite(
    //         player.skills.x,
    //         player.skills.y,
    //         'ball'
    //       );
    //     } else if (
    //       player.skills === null &&
    //       this.allPlayers?.[player.id].skills
    //     ) {
    //       this.allPlayers[player.id].skills.destroy();
    //       this.allPlayers[player.id].skills = null;
    //     }
    //     // }
    //     if (this.instance1.remainigTime() === 5000) {
    //       // console.log('changa', player);
    //     }
    //     if (!isNaN(this.dt)) {
    //       if (
    //         this.allPlayers?.[player.id]?.skills?.x &&
    //         this.allPlayers?.[player.id]?.skills?.y &&
    //         player.skills?.x &&
    //         player.skills?.y
    //       ) {
    //         this.allPlayers[player.id].skills.x = Math.round(
    //           lerp(
    //             this.allPlayers[player.id].skills.x,
    //             player.skills.x,
    //             this.dt
    //           )
    //         );
    //         this.allPlayers[player.id].skills.y = Math.round(
    //           lerp(
    //             this.allPlayers[player.id].skills.y,
    //             player.skills.y,
    //             this.dt
    //           )
    //         );
    //       }
    //       if (this.allPlayers[player.id].sprites.body.x === Infinity) {
    //         this.allPlayers[player.id].sprites.body.x = 0;
    //         this.allPlayers[player.id].sprites.shoes.x = 0;
    //         this.allPlayers[player.id].sprites.clothes.x = 0;
    //       }
    //       if (this.allPlayers[player.id].sprites.body.y === Infinity) {
    //         this.allPlayers[player.id].sprites.body.y = 0;
    //         this.allPlayers[player.id].sprites.shoes.y = 0;
    //         this.allPlayers[player.id].sprites.clothes.y = 0;
    //       }
    //       this.allPlayers[player.id].transform.x = Math.round(
    //         lerp(
    //           this.allPlayers[player.id].sprites.body.x,
    //           player.position.x,
    //           this.dt
    //         )
    //       );
    //       this.allPlayers[player.id].transform.y = Math.round(
    //         lerp(
    //           this.allPlayers[player.id].sprites.body.y,
    //           player.position.y,
    //           this.dt
    //         )
    //       );
    //       this.allPlayers[player.id].target = player.target;
    //       // if(this.isAttaking){
    //       //   return
    //       // }
    //       if (
    //         this.allPlayers?.[player.id]?.sprites.body?.anims?.currentAnim?.key !==
    //           'running' &&
    //         !this.isAttaking &&
    //         getDistance(this.allPlayers[player.id].sprites.body, player.target) > 1
    //       ) {
    //         playerPlayAnimation(this, 'running', this.allPlayers[player.id]);
    //       }
    //       if (
    //         this.allPlayers?.[player.id]?.sprites.body?.anims?.currentAnim?.key !==
    //           'idle' &&
    //         !this.isAttaking &&
    //         getDistance(this.allPlayers[player.id].sprites.body, player.target) < 1
    //       ) {
    //         playerPlayAnimation(this, 'idle', this.allPlayers[player.id]);
    //       }
    //       if (this.allPlayers[player.id].sprites.body) {
    //         if (this.allPlayers[player.id].sprites.body.x < player.target.x) {
    //           flipPlayerX(this.allPlayers[player.id].sprites)
    //         } else {
    //           flipPlayerX(this.allPlayers[player.id].sprites, true)
    //         }
    //       }
    //       if (this.instance1.remainigTime() === 5000) {
    //         // console.log('toti', player.skills);
    //       }
    //     }
    //   });
    //   //Store this in the right system.
    //   for (const [key, value] of Object.entries<any>(this.allPlayers)) {
    //     let exist = false;
    //     players.forEach((player) => {
    //       if (key === player.id) {
    //         exist = true;
    //       }
    //     });
    //     if (!exist) {
    //       value.sprite.destroy();
    //       delete this.allPlayers[key];
    //     }
    //   }
    // });


    
    // setTimeout(() => {
    //   gameController(this, this.allPlayers[this.currentPlayerId]);
    // }, 2000);
  }
  update() {
    this.playerSystem(this.world)
    this.targetMovementSystem(this.world)
  }
    // if(!this.world || !this.spriteSystem){
    //   return 
    // }
    // this.spriteSystem(this.world)
  //   const clientNow = Date.now();
  //   this.clientDeltaTime = (clientNow - this.clientLastUpdate) / (1000 / 60);
  //   this.clientLastUpdate = clientNow;
  //   this.correction = this.clientDeltaTime / this.clientLastDeltaTime;
  //   this.clientLastDeltaTime = this.clientDeltaTime;
  //   //   let fpsa = 1000 / (now - lastUpdate);
  //   if (this.allPlayers === {}) {
  //     return;
  //   }
  //   for (const [key] of Object.entries(this.allPlayers)) {
  //     if (
  //       this.lobbyScene.socket.id &&
  //       this.allPlayers[this.lobbyScene.socket.id].sprites.body
  //     ) {
  //       this.currentPlayerId = this.lobbyScene.socket.id;
  //       if (
  //         this.allPlayers?.[this.currentPlayerId]?.sprites.body &&
  //         !this.followingPlayer &&
  //         this.cameras.main
  //       ) {
  //         this.followingPlayer = true;

  //         this.cameras.main.startFollow(
  //           this.allPlayers[this.currentPlayerId].sprites.body,
  //           false,
  //           this.clientDeltaTime * this.correction,
  //           this.clientDeltaTime * this.correction
  //         );

  //         this.cameras.main.zoom = 2;
  //         this.cameras.main.roundPixels = true;
  //       }
  //     }
  //     if (!isNaN(this.clientDeltaTime)) {
  //       if (this.allPlayers[key].sprites.body.x === Infinity) {
  //         console.log('esto quiensaber que peod bug')
  //         this.allPlayers[key].sprites.body.x = 0;
  //         this.allPlayers[key].sprites.shoes.x = 0;
  //         this.allPlayers[key].sprites.clothes.x = 0;
  //       }
  //       if (this.allPlayers[key].sprites.body.y === Infinity) {
  //         console.log('esto quiensaber que peod bug')
  //         this.allPlayers[key].sprites.body.y = 0;
  //         this.allPlayers[key].sprites.shoes.y = 0;
  //         this.allPlayers[key].sprites.clothes.y = 0;
  //       }
  //       if (
  //         getDistance(
  //           this.allPlayers[key].sprites.body,
  //           this.allPlayers[key].target
  //         ) > 1
  //       ) {
  //         this.allPlayers[key].sprites.body.x = lerp(
  //           this.allPlayers[key].sprites.body.x,
  //           this.allPlayers[key].transform.x,
  //           this.clientDeltaTime
  //         );
  //         this.allPlayers[key].sprites.shoes.x = lerp(
  //           this.allPlayers[key].sprites.shoes.x,
  //           this.allPlayers[key].transform.x,
  //           this.clientDeltaTime
  //         );
  //         this.allPlayers[key].sprites.clothes.x = lerp(
  //           this.allPlayers[key].sprites.clothes.x,
  //           this.allPlayers[key].transform.x,
  //           this.clientDeltaTime
  //         );
  //         this.allPlayers[key].sprites.body.y = lerp(
  //           this.allPlayers[key].sprites.body.y,
  //           this.allPlayers[key].transform.y,
  //           this.clientDeltaTime
  //         );
  //         this.allPlayers[key].sprites.shoes.y = lerp(
  //           this.allPlayers[key].sprites.shoes.y,
  //           this.allPlayers[key].transform.y,
  //           this.clientDeltaTime
  //         );
  //         this.allPlayers[key].sprites.clothes.y = lerp(
  //           this.allPlayers[key].sprites.clothes.y,
  //           this.allPlayers[key].transform.y,
  //           this.clientDeltaTime
  //         );
  //       }
  //       // Debugger conbsole logs
  //       if (this.instance3.remainigTime() >= 100) {
  //         // console.log(this.cameras.main)
  //         // console.log(getDistance (this.allPlayers[key].sprite, this.allPlayers[key].target))
  //         // console.log(getDistance (this.allPlayers[this.currentPlayerId].sprite, this.allPlayers[this.currentPlayerId].target))
  //         // this.allPlayers[this.currentPlayerId].sprite.play({ key: 'idle' });
  //         // console.log(this.allPlayers?.[this.currentPlayerId]?.sprite?.anims?.currentAnim?.key  === 'running' , this.allPlayers[key].sprite.y, this.allPlayers[key].target.y)
  //         // console.log(this.allPlayers[key].sprite.y - this.allPlayers[key].transform.y)
  //       }

  //       if (
  //         this.allPlayers?.[this.currentPlayerId]?.sprites.body?.anims?.currentAnim
  //           ?.key === 'running' &&
  //         !this.isAttaking &&
  //         getDistance(
  //           this.allPlayers[this.currentPlayerId].sprites.body,
  //           this.allPlayers[this.currentPlayerId].target
  //         ) < 1
  //       ) {
  //         playerPlayAnimation(
  //           this,
  //           'idle',
  //           this.allPlayers[this.currentPlayerId]
  //         );
  //       }
  //     }
  //   }
   
  //   if (
  //     this.pointerado.leftButtonDown() &&
  //     !this.pointerado.leftButtonReleased() &&
  //     this.instance3.remainigTime() >= 100
  //   ) {
  //     if (this.allPlayers[this.currentPlayerId].sprites.body) {
  //       if (
  //         this.allPlayers[this.currentPlayerId].sprites.body.x <
  //         this.pointerado.worldX
  //       ) {
  //         flipPlayerX(this.allPlayers[this.currentPlayerId].sprites)
  //       } else {
  //         flipPlayerX(this.allPlayers[this.currentPlayerId].sprites, true)
  //       }
  //     }
  //     this.lobbyScene.socket.emit('player click', {
  //       x: Math.round(this.pointerado.worldX),
  //       y: Math.round(this.pointerado.worldY)
  //     });
  //   }
  // }
}
