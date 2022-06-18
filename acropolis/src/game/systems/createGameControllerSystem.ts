import playerPlayAnimation from './playerPlayAnimations';

const createGameControllerSystem =  (scene: Phaser.Scene, player, socket) => {
  const currentPlayer = player
  scene.input.keyboard.on('keydown', (e) => {
    if (player.action) {
      return;
    }
    player.action = true;
    switch (e.code) {
      case 'KeyQ':
        socket.emit('playerAction', 'skill');
        break;
      case 'KeyW':
        socket.emit('playerAction', 'attack');
        playerPlayAnimation(scene, 'attack', currentPlayer);
        break;
      case 'KeyE':
        socket.emit('playerAction', 'mining');
        playerPlayAnimation(scene, 'mining', currentPlayer);
        break;
      case 'KeyR':
        socket.emit('playerAction', 'gathering');
        playerPlayAnimation(scene, 'gathering', currentPlayer);
        break;
      case 'KeyA':
        socket.emit('playerAction', 'chopping');
        playerPlayAnimation(scene, 'chopping', currentPlayer);
        break;
      case 'KeyS':
        socket.emit('playerAction', 'fishing');
        playerPlayAnimation(scene, 'fishing', currentPlayer);
        break;
      case 'KeyD':
        socket.emit('playerAction', 'watering');
        playerPlayAnimation(scene, 'watering', currentPlayer);
        break;
      case 'KeyF':
        socket.emit('playerAction', 'shoveling');
        playerPlayAnimation(scene, 'shoveling', currentPlayer);
        break;
      default:
        break;
    }
    setTimeout(() => (player.action = false), 500);
  });
};
export default createGameControllerSystem;
