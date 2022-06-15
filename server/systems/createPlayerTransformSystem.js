import {
  Position,
  Player,
  TransformRectangle
} from '../components/components.js';
import { defineQuery, defineSystem, enterQuery, exitQuery } from 'bitecs';
import Matter from 'matter-js';

export const createPlayerTransformSystem = (engine) => {
  const playersById = {};
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
      console.log('el chingado transform',global.networkEntities[global.entitiesByLocalId[id]].transform)
      console.log(global.networkEntities)
      const { transform } = global.networkEntities[global.entitiesByLocalId[id]];
      // const player = playersById[id];
      Matter.Composite.add(engine.world, transform);
      transform.x = 0;
      transform.y = 0;
      Position.x[id] = transform.x;
      Position.y[id] = transform.y;
      // console.log('gadaver',global.entitiesByLocalId[id].id ,global.networkEntities)
      // global.networkEntities[global.entitiesByLocalId[id].id].position = {x: Position.x[id], y: Position.y[id]}
      // console.log('nosni',playersById[id], player)
    }

    const entities = playerQuery(world);
    for (let i = 0; i < entities.length; i++) {
      const id = entities[i];
      const player =
        global.networkEntities[global.entitiesByLocalId[id]].transform;
      if (!player) {
        continue;
      }
      player.x = Position.x[id];
      player.y = Position.y[id];
      // console.log('curren entities', entities);
      // global.networkEntities[global.entitiesByLocalId[id].id].components.position = {x: Position.x[id], y: Position.y[id]}
    }

    const exitEntities = playerQueryExit(world);
    for (let i = 0; i < exitEntities.length; i++) {
      const id = exitEntities[i];
      const player =
        global.networkEntities?.[global.entitiesByLocalId?.[id]]?.transform;
      if (!player) {
        continue;
      }
      Matter.World.remove(engine.world, player);
      global.networkEntities[global.entitiesByLocalId[id]].transform = {}
    }
    return world;
  });
};
