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
      // console.log('entitiesByLocalId',id, global.entitiesByLocalId, global.entitiesByLocalId[id])
      const networkEntity = global.networkEntities[global.entitiesByLocalId[id]];
      if (!networkEntity.target) {
        networkEntity.target = {
          x: Position.x[id],
          y: Position.y[id]
        }
      }
      TargetPosition.x[id] =  networkEntity.target.x
      TargetPosition.y[id] =  networkEntity.target.y
      console.log('sistema de nada')
    }

    const entities = moveEntityQuery(world)
    for (let i = 0; i < entities.length; i++) {
      console.log('epal?')
      const id = entities[i];
      const networkEntity = global.networkEntities[global.entitiesByLocalId[id]];
      if (!networkEntity.target) {
        continue;
      }
      const dt = global.dt
      let force = 2 * dt
      const playerPosition = {
        x: Position.x[id],
        y: Position.y[id]
      }
      const deltaVector = Matter.Vector.sub(
        playerPosition,
        networkEntity.target
      );
      TargetPosition.x[id] =  networkEntity.target.x
      TargetPosition.y[id] =  networkEntity.target.y

      const normalizedDelta = Matter.Vector.normalise(deltaVector)
      let forceVector = Matter.Vector.mult(normalizedDelta, force)
      const target = Matter.Vector.sub(playerPosition, forceVector)
      console.log('que pedo1')
      if (getDistance(networkEntity.target, playerPosition) > 1) {
        console.log('que pedo2')
        playerPosition.x = Math.round(
          lerp(playerPosition.x, target.x, dt)
        );
        playerPosition.y = Math.round(
          lerp(playerPosition.y, target.y, dt)
        );
        // Update ECS current position
        Position.x[id] = playerPosition.x
        Position.y[id] = playerPosition.y
        console.log(Position.x[id], Position.y[id])
        // Update MatterJS current position
        Matter.Body.setPosition(global.networkEntities[global.entitiesByLocalId[id]].transform, target)
        // Update Network Object current position 
        // Because position will be always determined by the server bye..
        console.log(networkEntity)
        networkEntity.position.x = Position.x[id]
        networkEntity.position.y = Position.y[id]
      }
    }
    return world;
  });
};
