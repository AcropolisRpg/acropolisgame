import {
  Position,
  Player,
  TransformRectangle
} from '../components/components.js';
import { defineQuery, defineSystem, enterQuery, exitQuery } from 'bitecs';
import Matter from 'matter-js';

export const createPlayerTransformSystem = (engine) => {
  const playerSize = 16;
  const canvas = { width: 1000, height: 1000 };
  const playerQuery = defineQuery([TransformRectangle, Player]);
  const playerQueryEnter = enterQuery(playerQuery);
  const playerQueryExit = exitQuery(playerQuery);

  return defineSystem((world) => {
    const enterEntities = playerQueryEnter(world);
    for (let i = 0; i < enterEntities.length; i++) {
      const id = enterEntities[i];
      global.networkEntities[global.entitiesByLocalId[id]].transform = 
        Matter.Bodies.rectangle(
          canvas.width / 2,
          canvas.height / 2,
          playerSize,
          playerSize * 1.25
        )
      const { transform } = global.networkEntities[global.entitiesByLocalId[id]];
      Matter.Composite.add(engine.world, transform);
      transform.position.x = 500;
      transform.position.y = 500;
      Position.x[id] = transform.position.x;
      Position.y[id] = transform.position.y;
    }

    const exitEntities = playerQueryExit(world);
    for (let i = 0; i < exitEntities.length; i++) {
      const id = exitEntities[i];
      const player =
        global.networkEntities?.[global.entitiesByLocalId?.[id]]?.transform;
      if (!player) {
        continue;
      }
      Matter.World.remove(engine.world, player)
      global.networkEntities[global.entitiesByLocalId[id]].transform = null
    }
    return world;
  });
};
