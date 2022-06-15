import {
  addEntity,
  entityExists,
  addComponent,
  removeEntity,
  defineSystem
} from 'bitecs';
import { Actions } from '../components/actions';
import { Position, TargetPosition } from '../components/position';
import { Body, Shoes, Clothes } from '../components/sprite';

export const createPlayerSystem = () => {
  const playersByNetworkId = {};
  const playersByLocalId = {};
  return defineSystem((world) => {
    const currentEntities = window.acropolis.networkSystem.getLatestNetworkData();
    // const currentEntities = networkData.players;
    // console.log(playersByNetworkId);
    // currentPlayers.forEach((player) => {
    for (const [entityId, entity] of Object.entries(currentEntities)) {
      if (
        playersByNetworkId?.[entityId] >= 0 &&
        entityExists(world, playersByNetworkId[entityId])
      ) {
        continue;
      }
      const playerId = addEntity(world);
      playersByNetworkId[entityId] = playerId;
      playersByLocalId[playerId] = entityId;
      addComponent(world, Position, playerId);
      addComponent(world, Body, playerId);
      addComponent(world, Shoes, playerId);
      addComponent(world, Clothes, playerId);
      addComponent(world, TargetPosition, playerId);
      addComponent(world, Actions, playerId);
    }

    for (const [key, value] of Object.entries<any>(playersByNetworkId)) {
      let exist = false;
      for (const [entityId, entity] of Object.entries(currentEntities)) {
        if (key === entityId) {
          exist = true;
        }
      }
      if (!exist) {
        removeEntity(world, value);
        delete playersByNetworkId[key];
        delete playersByLocalId[value];
      }
    }
    //update whole entitiesById
    window.acropolis.networkSystem.setNetworkEntities(playersByNetworkId)
    window.acropolis.networkSystem.setLocalEntities(playersByLocalId)
    return world;
  });
};
