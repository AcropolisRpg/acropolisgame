<template>
  <div>
    <div style="text-align: center; margin: 25px auto">
      <h3 style="color: #fff">Acropolis Playgrounds BETA Development!</h3>
      <div id="phaser-example" style="border-radius: 100px"></div>
      <h3 style="color: #fff">Click anywhere to move around or press "Q" key for skills.</h3>
      <a href="https://www.acropolisrpg.com/" style="color: #fff">Go to Acropolist home page</a>
    </div>
    <p style="color: #fff; text-align: center;">
      Server stats. 
      <span id="online">0</span> users online.
      <span id="fps">0</span> server fps.
      <span id="worldX">0</span> server fps.
      <span id="worldY">0</span> server fps.
    </p>
  </div>
</template>

<script>
    import Phaser from "phaser";
import Game from '../game/scenes/Game'
// import TitleScreen from '../game/scenes/TileScreen'
// import Web3 from 'web3';
// import Web3Token from 'web3-token';

export default {
  name: 'Acropolis',
  methods: {
    initGame () {
      
const config = {
    renderType: 3,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 600,
    height: 600,
    fps:60
};

const game = new Phaser.Game(config);

// game.scene.add('titlescreen', TitleScreen)
game.scene.add('game', Game)

game.scene.start('game')

// const test = async () => {
//     // Connection to MetaMask wallet
// const web3 = new Web3(window.ethereum);
// await window.ethereum.request({ method: 'eth_requestAccounts'});

// // getting address from which we will sign message
// const address = (await web3.eth.getAccounts())[0];

// // generating a token with 1 day of expiration time
// const token = await Web3Token.sign(msg => web3.eth.personal.sign(msg, address), '1d'); 
// console.log(token)
// }

// test();
    }
  },
  mounted () {
    this.initGame();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
