import {
  Position,
  TransformRectangle,
  TargetPosition
} from '../components/components.js'
import { defineQuery, defineSystem, enterQuery} from 'bitecs'
import Matter from 'matter-js'
import { getDistance, lerp } from '../utils/utils.js';

export const createPlayerTargetMovementSystem = () => {
  const moveEntityQuery = defineQuery([TransformRectangle, TargetPosition, Position])
  const moveEntityQueryEnter = enterQuery(moveEntityQuery)
  return defineSystem((world) => {
  
    const enterEntities = moveEntityQueryEnter(world);
    for (let i = 0; i < enterEntities.length; i++) {
      const id = enterEntities[i];
      const networkEntity = global.networkEntities[global.entitiesByLocalId[id]];
      if (!networkEntity.target) {
        networkEntity.target = {
          x: Position.x[id],
          y: Position.y[id]
        }
      }
      TargetPosition.x[id] =  networkEntity.target.x
      TargetPosition.y[id] =  networkEntity.target.y
    }

    const entities = moveEntityQuery(world)
    for (let i = 0; i < entities.length; i++) {
      const id = entities[i];
      const networkEntity = global.networkEntities[global.entitiesByLocalId[id]];
      if (!networkEntity.target) {
        continue;
      }
      const dt = global.dt
      let force = 1 * dt

      const playerPosition = global.networkEntities[global.entitiesByLocalId[id]].transform.position
      const deltaVector = Matter.Vector.sub(
        playerPosition,
        networkEntity.target
      );
      TargetPosition.x[id] =  networkEntity.target.x
      TargetPosition.y[id] =  networkEntity.target.y

      const normalizedDelta = Matter.Vector.normalise(deltaVector)
      let forceVector = Matter.Vector.mult(normalizedDelta, force)
      const target = Matter.Vector.sub(playerPosition, forceVector)
      if (getDistance(networkEntity.target, playerPosition) > 1) {
        networkEntity.action = 'running'
        // playerPosition.x = Math.round(
        //   lerp(playerPosition.x, target.x, dt)
        // );
        // playerPosition.y = Math.round(
        //   lerp(playerPosition.y, target.y, dt)
        // );
        // Update MatterJS current position
        Matter.Body.setPosition(global.networkEntities[global.entitiesByLocalId[id]].transform, target)
        // Update ECS current position
        Position.x[id] = global.networkEntities[global.entitiesByLocalId[id]].transform.position.x
        Position.y[id] = global.networkEntities[global.entitiesByLocalId[id]].transform.position.y
        // Update Network Object current position 
        // Because position will be always determined by the server bye..
        // console.log(networkEntity)
        networkEntity.position.x = global.networkEntities[global.entitiesByLocalId[id]].transform.position.x
        networkEntity.position.y = global.networkEntities[global.entitiesByLocalId[id]].transform.position.y
      }

      if (getDistance(networkEntity.target, playerPosition) < 1 && networkEntity.action === 'running') {
        networkEntity.action = 'idle'
      }
    }
    return world;
  });
};
