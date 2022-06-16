import { Position, TargetPosition } from './../components/position';
import { 
  defineQuery, 
  defineSystem
} from 'bitecs';

export const createTargetMovementSystem = () =>{
  const movementQuery = defineQuery([TargetPosition, Position])
  return defineSystem(world => {
    // console.log('networkentities', window.acropolis.networkSystem.getLocalEntities())
    const networkEntities =  window.acropolis.networkSystem.getNetworkEntities()
    const localEntities = window.acropolis.networkSystem.getLocalEntities()
    const entities = movementQuery(world)
    for (let i = 0; i < entities.length; i++) {
      const id = entities[i];
      const entity = window.acropolis.networkSystem.getNetworkEntityByLocalId(id)
      Position.x[id] = entity.position.x
      Position.y[id] = entity.position.y
      console.log( Position.x[id], Position.y[id])
    }
    return world
  })
} 