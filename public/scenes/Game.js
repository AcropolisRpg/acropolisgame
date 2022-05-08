import Phaser from 'phaser';
import io from 'socket.io-client';
import ball from './../spikedballa.png';
import atlas from './../atlas.png';
import forest from './../forest.json';
import cooldownTimer from '../../utils/cooldownTimer';
import playerSprite from '../../rpg-pack/chars/gabe/gabe-idle-run.png';

const socket = io(); //'https://stealth-magenta-lady.glitch.me:1234'
const fpsEl = document.querySelector('#fps');
const onlineEl = document.querySelector('#online');
const worldX = document.querySelector('#worldX');
const worldY = document.querySelector('#worldY');
const frameRate = 1000 / 30;

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

function getDistance(Vector1, Vector2) {
  return Math.sqrt(
    Math.pow(Vector1.x - Vector2.x, 2) + Math.pow(Vector1.y - Vector2.y, 2)
  );
}

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export default class Game extends Phaser.Scene {
  preload() {
    this.load.image('ball', ball);
    this.load.image('atlas', atlas);
    this.load.tilemapTiledJSON('forest', forest);
    this.load.spritesheet('playerSprite', playerSprite, {
      frameWidth: 24,
      frameHeight: 24,
    });
    this.load.spritesheet('balla', ball, {
      frameWidth: 96,
      frameHeight: 96,
    });

    // this.gameAnimation = this.anims.create(animConfig);

    this.allPlayers = [];
    this.gameTime = Date.now();
    // this.load.image("tiles","src/assets/tiles.png");
    this.followingPlayer = false;
  }
  create() {
    this.clientLastUpdate = Date.now();
    this.clientLastDelta = Date.now();
    this.playerAnimations = 'idle';
    const running = {
      key: 'running',
      frames: this.anims.generateFrameNumbers('playerSprite'),
      frameRate: 15,
      repeat: -1,
    };
    this.anims.create(running);
    const idle = {
      key: 'idle',
      frames: this.anims.generateFrameNumbers('playerSprite', { frames: [0] }),
      frameRate: 15,
      repeat: -1,
    };
    // const idle = {
    //   key: 'idle',
    //   frames: this.anims.generateFrameNumbers('balla'),
    //   frameRate: 1,
    //   repeat: -1,
    // };
    this.anims.create(idle);
    // console.log('this.colal', this.colala)
    this.cameras.main.setBounds(0, 0, 10000, 10000);

    // console.log('lala');
    socket.once('connect', () => {
      // console.log('connected');
      socket.emit('register', (socketId) => {
        // console.log('uan chingada', socketId);
        // this.currentPlayerId = socketId;
      });
      //this.ball.anchor.set(0.5, 0.5);
    });
    const map = this.make.tilemap({
      key: 'forest',
      tileWidth: 16,
      tileHeight: 16,
    });
    const tileset = map.addTilesetImage('atlas', 'atlas');
    const layer = map.createLayer('layertati', tileset, 0, 0);
    layer.setScale(3, 3);

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
          this.allPlayers[this.currentPlayerId].sprite &&
          this.allPlayers?.[this.currentPlayerId]?.sprite?.anims?.currentAnim
            ?.key !== 'running'
        ) {
          this.allPlayers[this.currentPlayerId].sprite.play({ key: 'running' });
          if (
            this.allPlayers[this.currentPlayerId].sprite.x <
            this.pointerado.worldX
          ) {
            this.allPlayers[this.currentPlayerId].sprite.flipX = false;
          } else {
            this.allPlayers[this.currentPlayerId].sprite.flipX = true;
          }
        }
        const target = {
          x: Math.round(pointer.worldX),
          y: Math.round(pointer.worldY),
        };
        this.allPlayers[this.currentPlayerId].target = target;
        socket.emit('player click', target);
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

    socket.on('update state', ({ players, walls, online, fps }) => {
      let now = Date.now();
      this.dt = (now - this.lastUpdate) / (1000 / 30);
      //  console.log('now', this.dt)
      this.lastUpdate = now;

      //  console.log('now',now)
      // recibir y guardar players en otra variable verificar cuando sea diferente y si es diferente remover al jugador o realizar otras acciones.
      // this.elMono.x = players[0].x
      // this.elMono.y = players[0].y
      players.forEach((player) => {
        //  console.log(player)
        if (!this.allPlayers?.[player.id]) {
          this.allPlayers[player.id] = {
            sprite: this.add
              .sprite(player.position.x, player.position.y, 'playerSprite')
              .setScale(3, 3),
            playerId: player.id,
            transform: {
              x: player.position.x,
              y: player.position.y,
            },
            target: { x: player.position.x, y: player.position.y },
            skills: null,
          };
          // console.log('el carjo', this.allPlayers[player.id].sprite);
          // this.cameras.main.startFollow(this.allPlayers[player.id].sprite)
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
          console.log('changa', player);
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
          }
          if (this.allPlayers[player.id].sprite.y === Infinity) {
            this.allPlayers[player.id].sprite.y = 0;
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
          if (
            this.allPlayers?.[player.id]?.sprite?.anims?.currentAnim?.key !==
              'running' &&
            getDistance(this.allPlayers[player.id].sprite, player.target) > 20
          ) {
            this.allPlayers[player.id].sprite.play({ key: 'running' });
          }
          if (
            this.allPlayers?.[player.id]?.sprite?.anims?.currentAnim?.key !==
              'idle' &&
            getDistance(this.allPlayers[player.id].sprite, player.target) < 20
          ) {
            // this.allPlayers[player.id].sprite = player.target
            // this.allPlayers[player.id].transform  = player.target
            this.allPlayers[player.id].sprite.play({ key: 'idle' });
          }
          if (this.allPlayers[player.id].sprite) {
            if (this.allPlayers[player.id].sprite.x < player.target.x) {
              this.allPlayers[player.id].sprite.flipX = false;
            } else {
              this.allPlayers[player.id].sprite.flipX = true;
            }
          }
          if (this.instance1.remainigTime() === 5000) {
            console.log('toti', player.skills);
          }
          // this.allPlayers[player.id].sprite.x =  player.position.x
          // this.allPlayers[player.id].sprite.y = player.position.y
        }
        // if()

        //this.allPlayers[player.id].sprite.destroy()
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
      // console.log(players)

      fpsEl.textContent = Math.round(fps);
      onlineEl.textContent = online;
      worldX.textContent = this.pointerado.worldX;
      worldY.textContent = this.pointerado.worldY;
    });
  }
  update() {
    //  console.log('socket',socket)
    if (this.input.keyboard.checkDown(this.playerInputClient.keyQ, 1000)) {
      console.log('tapioca');
      socket.emit('player q');
    }
    let clientNow = Date.now();
    this.clientDeltaTime = (clientNow - this.clientLastUpdate) / (1000 / 60);
    this.clientLastUpdate = clientNow;
    this.correction = this.clientDeltaTime / this.clientLastDeltaTime;
    this.clientLastDeltaTime = this.clientDeltaTime;
    // console.log('clientDeltaTime', this.clientDeltaTime)
    // console.log(this.instance1.remainigTime(), this.instance2.remainigTime())
    //console.log('chingo de update')
    // this.gameLastTime = Date.now();
    // console.log(this.gameLastTime - this.gameTime)
    //   //console.log('dt',dt, now, lastUpdate)
    //   //console.log('fps',1000/(now - lastUpdate))
    //   let fpsa = 1000 / (now - lastUpdate);

    for (let [key, value] of Object.entries(this.allPlayers)) {
      if (socket.id && this.allPlayers[socket.id].sprite) {
        this.currentPlayerId = socket.id;
        // console.log(this.currentPlayerId)
        // console.log('porqueria',!this.followingPlayer, this.currentPlayerId)
        if (this.allPlayers[this.currentPlayerId] && !this.followingPlayer) {
          this.followingPlayer = true;
          // console.log(this.allPlayers[this.currentPlayerId],this.currentPlayerId)
          if (this.cameras.main) {
            this.cameras.main.startFollow(
              this.allPlayers[this.currentPlayerId].sprite,
              false,
              this.clientDeltaTime * this.correction,
              this.clientDeltaTime * this.correction
            );
          }
        }
      }

      if (!isNaN(this.clientDeltaTime)) {
        if (this.allPlayers[key].sprite.x === Infinity) {
          this.allPlayers[key].sprite.x = 0;
        }
        if (this.allPlayers[key].sprite.y === Infinity) {
          this.allPlayers[key].sprite.y = 0;
        }
        if (
          getDistance(
            this.allPlayers[key].sprite,
            this.allPlayers[key].target
          ) > 20
        ) {
          this.allPlayers[key].sprite.x = lerp(
            this.allPlayers[key].sprite.x,
            this.allPlayers[key].transform.x,
            this.clientDeltaTime
          );
          this.allPlayers[key].sprite.y = lerp(
            this.allPlayers[key].sprite.y,
            this.allPlayers[key].transform.y,
            this.clientDeltaTime
          );
        }

        if (this.instance3.remainigTime() >= 100) {
          // console.log(getDistance (this.allPlayers[key].sprite, this.allPlayers[key].target))
          // console.log(getDistance (this.allPlayers[this.currentPlayerId].sprite, this.allPlayers[this.currentPlayerId].target))
          // this.allPlayers[this.currentPlayerId].sprite.play({ key: 'idle' });
          // console.log(this.allPlayers?.[this.currentPlayerId]?.sprite?.anims?.currentAnim?.key  === 'running' , this.allPlayers[key].sprite.y, this.allPlayers[key].target.y)
          // console.log(this.allPlayers[key].sprite.y - this.allPlayers[key].transform.y)
        }

        if (
          this.allPlayers?.[this.currentPlayerId]?.sprite?.anims?.currentAnim
            ?.key === 'running' &&
          getDistance(
            this.allPlayers[this.currentPlayerId].sprite,
            this.allPlayers[this.currentPlayerId].target
          ) < 20
        ) {
          this.allPlayers[this.currentPlayerId].sprite.play({ key: 'idle' });
        }
        // if (this.playerAnimations === 'idle') {
        //   this.allPlayers[key].sprite.play({ key: 'idle' });
        // }
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
        } else {
          this.allPlayers[this.currentPlayerId].sprite.flipX = true;
        }
      }
      socket.emit('player click', {
        x: Math.round(this.pointerado.worldX),
        y: Math.round(this.pointerado.worldY),
      });
    }

  }
}
