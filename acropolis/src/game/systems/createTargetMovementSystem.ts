import { Position, TargetPosition } from './../components/position';
import { 
  defineQuery, 
  defineSystem
} from 'bitecs';

export const createTargetMovementSystem = () =>{
  const movementQuery = defineQuery([TargetPosition, Position])
  return defineSystem(world => {
    // console.log('networkentities', window.acropolis.networkSystem.getLocalEntities())
    const networkEntities =  window.acropolis.networkSystem.getLatestNetworkData()
    const localEntities = window.acropolis.networkSystem.getLocalEntities()
    const entities = movementQuery(world)
    for (let i = 0; i < entities.length; i++) {
      const id = entities[i];
      Position.x[id] = networkEntities[localEntities[id]].position.x
      Position.y[id] = networkEntities[localEntities[id]].position.y
      // console.log( Position.x[id], Position.y[id])
    }
    return world
  })
} 