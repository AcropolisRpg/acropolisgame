export default class Dungeon extends Phaser.Scene {
  private lobbyScene
  constructor() {
    super("Dungeon");
  }
  init(data) {
    this.lobbyScene = {}
    this.lobbyScene.socket = data.socket
  }
  preload() {
    this.game.sound.stopAll();
    console.log('peload')
  }
  create () {
    console.log('create')
  }
  update () {
    // console.log('lolgo')
  }
}