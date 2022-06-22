import { 
  defineSystem
} from 'bitecs';


export const createTimeSystem = () =>{
  window.acropolis.timeSystem = {}
  const timeSystem = window.acropolis.timeSystem
  // window.acropolis.timeSystem.frameRate = 1000/60
  timeSystem.frameRate = 1000/60
  timeSystem.clientDeltaTime = 1;
  timeSystem.clientLastUpdate = Date.now();
  timeSystem.clientLastDeltaTime = 1;
  timeSystem.clientDeltaTimeNoFR = 0
  return defineSystem(world => {

    const clientNow = Date.now();
    timeSystem.clientDeltaTimeNoFR = (clientNow - timeSystem.clientLastUpdate)
    timeSystem.clientDeltaTime = (clientNow - timeSystem.clientLastUpdate) / timeSystem.frameRate;
    timeSystem.clientLastUpdate = clientNow;
    timeSystem.correction = timeSystem.clientDeltaTime / timeSystem.clientLastDeltaTime;
    timeSystem.clientLastDeltaTime = timeSystem.clientDeltaTime;
    return world
  })
} 