import Phaser from "phaser";
import Game from './scenes/Game'
import TitleScreen from './scenes/TileScreen'

const config = {
    renderType: 3,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 800,
    fps:60
};

const game = new Phaser.Game(config);

game.scene.add('titlescreen', TitleScreen)
game.scene.add('game', Game)

game.scene.start('game')


// (() => {
//   const canvas = document.querySelector("#game");
//   const onlineEl = document.querySelector("#online");
//   const fpsEl = document.querySelector("#fps");
//   const ctx = canvas.getContext("2d");
//   const socket = io();

//   function lerp(a, b, t) {
//     return (1 - t) * a + t * b;
//   }

//   const draw = (body, ctx) => {
//     ctx.beginPath();
//     body.forEach(e => ctx.lineTo(e.x, e.y));
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();
//   };
  
//   socket.once("connect", () => {
//     console.log("connected");
//     socket.emit("register", res => {
//       canvas.width = res.canvas.width;
//       canvas.height = res.canvas.height;
//     });
//   });
  
//   socket.on("update state", ({players, walls, online, fps}) => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = "#111";
//     ctx.strokeStyle = "#111";
//     walls.forEach(wall => draw(wall, ctx));
//     ctx.fillStyle = "#aaa";
//     //boxes.forEach(box => draw(box, ctx));
//     players.forEach(player => draw(player, ctx));
//     onlineEl.textContent = online;
//     fpsEl.textContent = Math.round(fps);
//   });
  
//   document.addEventListener("mousedown", e => {
//     socket.emit("player click", {x: e.offsetX, y: e.offsetY}); 
//   });
// })();
