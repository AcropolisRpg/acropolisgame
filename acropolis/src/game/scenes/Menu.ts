export default class Menu extends Phaser.Scene {
  private lobbyScene
  constructor() {
    super("Menu");
  }
  init(data) {
    this.lobbyScene = {}
    this.lobbyScene.socket = data.socket
  }
  preload() {
    console.log('peload')
  }
  create () {
    console.log('create')
  }
  update () {
    console.log('lolgo')
  }
}