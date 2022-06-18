import { 
  defineSystem
} from 'bitecs';


export const createTimeSystem = () =>{
  window.acropolis.timeSystem = {}
  // window.acropolis.timeSystem.frameRate = 1000/60
  window.acropolis.timeSystem.frameRate = 1000/60
  window.acropolis.timeSystem.clientDeltaTime = 1;
  window.acropolis.timeSystem.clientLastUpdate = Date.now();
  window.acropolis.timeSystem.clientLastDeltaTime = 1;

  return defineSystem(world => {

    const clientNow = Date.now();
    window.acropolis.timeSystem.clientDeltaTime = (clientNow - window.acropolis.timeSystem.clientLastUpdate) / window.acropolis.timeSystem.frameRate;
    window.acropolis.timeSystem.clientLastUpdate = clientNow;
    window.acropolis.timeSystem.correction = window.acropolis.timeSystem.clientDeltaTime / window.acropolis.timeSystem.clientLastDeltaTime;
    window.acropolis.timeSystem.clientLastDeltaTime = window.acropolis.timeSystem.clientDeltaTime;
    return world
  })
} 