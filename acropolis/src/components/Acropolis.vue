<template>
  <div>
    <div v-if="!isLoggedIn">
      <h3
        style="
          color: #fff;
          text-align: center;
          padding: 5px;
          max-width: 200px;
          margin: 0 auto;
        "
      >
        Welcome to Acropolis MMORPG Beta Testing!
      </h3>
      <p
        style="
          color: #fff;
          text-align: center;
          border: 1px solid white;
          padding: 5px;
          max-width: 200px;
          margin: 0 auto;
        "
        @click="initGame"
      >
        Click here to Login!
      </p>
    </div>
    <div v-else>
      <div style="text-align: center; margin: 25px auto">
        <h3 style="color: #fff">Acropolis Playgrounds BETA Development!</h3>
        <div id="phaser-example" style="border-radius: 100px"></div>
        <h3 style="color: #fff">
          Click anywhere to move around or press "QWERASDF" key for skills.
        </h3>
        <a href="https://www.acropolisrpg.com/" style="color: #fff"
          >Go to Acropolist home page</a
        >
      </div>

      <p style="color: #fff; text-align: center">
        The first time you login you will receive a reward of 100 $ACR, be wise
        because that's the only currency that will be used inside and outside
        the game.
      </p>
      <h3 style="color: #fff; text-align: center">
        If you can't see the game screen refresh and login again!
      </h3>
      <p style="color: #fff; text-align: center">
        Server stats.
        <span id="online">0</span> users online. <span id="fps">0</span> server
        fps. <span id="worldX">0</span> server fps.
        <span id="worldY">0</span> server fps.
      </p>
    </div>
  </div>
</template>

<script>
import Phaser from 'phaser';
import Game from '../game/scenes/Game';
// import Web3 from 'web3';
// import Web3Token from 'web3-token';
import io from 'socket.io-client';

//local
//const socket = io();
// prod
let socket;
// if (process.env.ENVI === 'production') {
//   socket = io(window.location.origin, { path: '/gameSocket' });
// } else {
  socket = io();
  //  socket = io(window.location.origin, { path: '/gameSocket' });
// }

// import TitleScreen from '../game/scenes/TileScreen'
// import Web3 from 'web3';
// import Web3Token from 'web3-token';
import { defineComponent } from 'vue'
import { networkUpdateStateSystem } from '../../../shared/networkUpdateStateSystem';
export default defineComponent({
  name: 'Acropolis',
  data() {
    return {
      isLoggedIn: false
    };
  },
  methods: {
    initGame() {
      // game.scene.add('titlescreen', TitleScreen)
      const test = async () => {
        await socket.once('connect', () => {
          // console.log('connected');
          socket.emit('register', (socketId) => {
            console.log('socketId', socketId);
            // this.currentPlayerId = socketId;
          });
          //this.ball.anchor.set(0.5, 0.5);
        });

        // Connection to MetaMask wallet
        // const web3 = new Web3(window.ethereum);
        // await window.ethereum.request({ method: 'eth_requestAccounts' });

        // // getting address from which we will sign message
        // const address = (await web3.eth.getAccounts())[0];

        // // generating a token with 1 day of expiration time
        // const token = await Web3Token.sign(
        //   (msg) => web3.eth.personal.sign(msg, address),
        //   '1d'
        // );
        // console.log(token);
        // socket.emit('login', token);
        socket.emit('login');
      };

      test();
    }
  },
  mounted() {
    socket.on('loggedIn', (data) => {
      const {isLoggedIn, entityId} = data
      window.acropolis = {}
      window.acropolis.networkSystem = networkUpdateStateSystem(socket)
      window.acropolis.currentPlayerId = entityId
      window.acropolis.socket = socket
      this.isLoggedIn = isLoggedIn;
      setTimeout(() => {
        const config = {
          type: Phaser.AUTO,
          scale: {
            parent: 'phaser-example',
            mode: Phaser.Scale.FIT,
            width: 600,
            height: 600
          }
        };
        const game = new Phaser.Game(config);
        game.scene.add('acropolisGame', Game);
        game.scene.start('acropolisGame', { socket });
      }, 3000);
    });
  }
})
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
