import Phaser from 'phaser'
import io from 'socket.io-client'
import ball from './../spikedballa.png'
import cooldownTimer from '../../utils/cooldownTimer'
const socket = io()//'https://stealth-magenta-lady.glitch.me:1234'
const fpsEl = document.querySelector("#fps");
const onlineEl = document.querySelector("#online");
const worldX = document.querySelector("#worldX");
const worldY = document.querySelector("#worldY");
const frameRate = 1000 / 30;

function lerp (start, end, amt){
  return (1-amt)*start+amt*end
}

function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

export default class Game extends Phaser.Scene {
  preload () {
    this.load.image('ball', ball);
    this.allPlayers = []
    this.gameTime = Date.now(); 
  }
  create () {
    this.pointerado = this.input.activePointer;
    this.instance1 = cooldownTimer(5000)
    this.instance2 = cooldownTimer(1000)
    this.instance3 = cooldownTimer(100)
    
    // console.log(this.timerio.remainingTime())
    this.lastUpdate = Date.now();
    this.dt = 0
    this.add.text(400,200,'Hello World!')
    console.log('lala')
    socket.once("connect", () => {
      console.log("connected");
      socket.emit("register", socketId => {
        console.log(socketId)
      });
      //this.ball.anchor.set(0.5, 0.5);
   
    });
    this.headPosition = new Phaser.Geom.Point(100, 100);
    this.input.mouse.disableContextMenu();
    this.input.on('pointerup', (pointer) => {

      if (pointer.leftButtonReleased()) {
        socket.emit("player click", {x:pointer.worldX, y: pointer.worldY}); 
        // console.log('allplayers',this.allPlayers)
      }
  });
    this.input.on('pointerdown', (pointer) => {

        if (pointer.leftButtonReleased()) {

        }
        
  });

  socket.on("update state", ({players, walls, online, fps}) => {
    let now = Date.now();
    this.dt = (now - this.lastUpdate) / (1000/30);
    //  console.log('now', this.dt)
    this.lastUpdate = now;
    
    
    //  console.log('now',now)
    // recibir y guardar players en otra variable verificar cuando sea diferente y si es diferente remover al jugador o realizar otras acciones.
    // this.elMono.x = players[0].x
    // this.elMono.y = players[0].y
    players.forEach(player => {
      //  console.log(player)
      if (!this.allPlayers?.[player.id]) {
        this.allPlayers[player.id] = ({
          sprite:this.add.sprite(player.position.x,player.position.y, 'ball'),
          playerId: player.id,
          transform: {
            x:player.position.x,
            y:player.position.y
          }
        })
      }
      if(!isNaN(this.dt)) {
        if(this.allPlayers[player.id].sprite.x === Infinity) {
          this.allPlayers[player.id].sprite.x = 0
        } 
        if(this.allPlayers[player.id].sprite.y === Infinity) {
          this.allPlayers[player.id].sprite.y = 0
        } 
        this.allPlayers[player.id].transform.x =  Math.round(lerp(this.allPlayers[player.id].sprite.x, player.position.x,  this.dt));
        this.allPlayers[player.id].transform.y = Math.round(lerp(this.allPlayers[player.id].sprite.y, player.position.y, this.dt));
        // this.allPlayers[player.id].sprite.x =  player.position.x
        // this.allPlayers[player.id].sprite.y = player.position.y
      }
      
      //this.allPlayers[player.id].sprite.destroy()
    });

    for (let [key, value] of Object.entries(this.allPlayers)) {
      let exist = false
      players.forEach(player => {
        if (key === player.id) {
          exist = true
        }
      });
      if (!exist) {
        value.sprite.destroy()
        delete this.allPlayers[key]
      }
    };
    // console.log(players)

    fpsEl.textContent = Math.round(fps);
    onlineEl.textContent = online;
    worldX.textContent  = this.pointerado.worldX
    worldY.textContent  = this.pointerado.worldY
    
  });

  }
  update () {
    let clientNow = Date.now();
    this.clientDeltaTime = (clientNow - this.clientLastUpdate) / (1000/60);
    this.clientLastUpdate = clientNow;
    // console.log('clientDeltaTime', this.clientDeltaTime)
    // console.log(this.instance1.remainigTime(), this.instance2.remainigTime())
    //console.log('chingo de update')
    // this.gameLastTime = Date.now();
    // console.log(this.gameLastTime - this.gameTime)
    //   //console.log('dt',dt, now, lastUpdate)
    //   //console.log('fps',1000/(now - lastUpdate))
    //   let fpsa = 1000 / (now - lastUpdate);

    for (let [key, value] of Object.entries(this.allPlayers)) {
      if (!isNaN(this.clientDeltaTime)) {
        if(this.allPlayers[key].sprite.x === Infinity) {
          this.allPlayers[key].sprite.x = 0
        } 
        if(this.allPlayers[key].sprite.y === Infinity) {
          this.allPlayers[key].sprite.y = 0
        } 
        this.allPlayers[key].sprite.x =  lerp(this.allPlayers[key].sprite.x, this.allPlayers[key].transform.x,  this.clientDeltaTime);
        this.allPlayers[key].sprite.y = lerp(this.allPlayers[key].sprite.y, this.allPlayers[key].transform.y, this.clientDeltaTime);
      }
    };

    if (this.pointerado.leftButtonDown() && !this.pointerado.leftButtonReleased()  && this.instance3.remainigTime() >= 100) {
      socket.emit("player click", {x:this.pointerado.worldX, y: this.pointerado.worldY}); 
    }

    // this.input.keyboard.cre
  }
}