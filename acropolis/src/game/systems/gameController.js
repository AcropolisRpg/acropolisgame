import playerPlayAnimation from './playerPlayAnimations';

const gameController =  (currentScene, player) => {
  let currentPlayer = player
  currentScene.input.keyboard.on('keydown', (e) => {
    if (currentScene.isAttaking) {
      return;
    }
    currentScene.isAttaking = true;
    switch (e.code) {
      case 'KeyQ':
        currentScene.lobbyScene.socket.emit('player q');
        break;
      case 'KeyW':
        playerPlayAnimation(currentScene, 'attack', currentPlayer);
        break;
      case 'KeyE':
        playerPlayAnimation(currentScene, 'mining', currentPlayer);
        break;
      case 'KeyR':
        playerPlayAnimation(currentScene, 'gathering', currentPlayer);
        break;
      case 'KeyA':
        playerPlayAnimation(currentScene, 'chopping', currentPlayer);
        break;
      case 'KeyS':
        playerPlayAnimation(currentScene, 'fishing', currentPlayer);
        break;
      case 'KeyD':
        playerPlayAnimation(currentScene, 'watering', currentPlayer);
        break;
      case 'KeyF':
        playerPlayAnimation(currentScene, 'shoveling', currentPlayer);
        break;
      default:
        break;
    }
    setTimeout(() => (currentScene.isAttaking = false), 500);
  });
};
export default gameController;
