import {
  Position,
  Resource,
  TransformRectangle
} from '../components/components.js';
import { defineQuery, defineSystem, enterQuery, exitQuery } from 'bitecs';
import Matter from 'matter-js';

export const createResourceSystem = (engine) => {
  const resourceQuery = defineQuery([TransformRectangle, Resource]);
  const resourceQueryEnter = enterQuery(resourceQuery);
  const resourceQueryExit = exitQuery(resourceQuery);

  return defineSystem((world) => {
    const enterEntities = resourceQueryEnter(world);
    for (let i = 0; i < enterEntities.length; i++) {
      const id = enterEntities[i];
      const { transform, sensor } = global.networkEntities[global.entitiesByLocalId[id]];
      Matter.Composite.add(engine.world, transform);
      Matter.Composite.add(engine.world, sensor);
      Position.x[id] = transform.position.x;
      Position.y[id] = transform.position.y;
    }

    const exitEntities = resourceQueryExit(world);
    for (let i = 0; i < exitEntities.length; i++) {
      const id = exitEntities[i];
      const resource =
        global.networkEntities?.[global.entitiesByLocalId?.[id]]?.transform;
        const sensor =
        global.networkEntities?.[global.entitiesByLocalId?.[id]]?.sensor;
      if (!resource) {
        continue;
      }
      Matter.World.remove(engine.world, resource);
      Matter.World.remove(engine.world, sensor);
      global.networkEntities[global.entitiesByLocalId[id]].transform = {}
      global.networkEntities[global.entitiesByLocalId[id]].sensor = {}
    }
    return world;
  });
};
