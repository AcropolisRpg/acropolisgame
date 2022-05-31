import Phaser from "phaser";
import Game from './scenes/Game'
import TitleScreen from './scenes/TileScreen'
import Web3 from 'web3';
import Web3Token from 'web3-token';




const config = {
    renderType: 3,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 600,
    height: 600,
    fps:60
};

const game = new Phaser.Game(config);

game.scene.add('titlescreen', TitleScreen)
game.scene.add('game', Game)

game.scene.start('game')

const test = async () => {
    // Connection to MetaMask wallet
const web3 = new Web3(ethereum);
await ethereum.request({ method: 'eth_requestAccounts'});

// getting address from which we will sign message
const address = (await web3.eth.getAccounts())[0];

// generating a token with 1 day of expiration time
const token = await Web3Token.sign(msg => web3.eth.personal.sign(msg, address), '1d'); 
}

test();
