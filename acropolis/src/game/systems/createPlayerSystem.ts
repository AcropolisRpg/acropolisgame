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
    const networkData = window.acropolis.networkSystem.getLatestNetworkData();
    const currentPlayers = networkData.players;
    console.log(playersByNetworkId);
    currentPlayers.forEach((player) => {
      if (
        playersByNetworkId?.[player.id] >= 0 &&
        entityExists(world, playersByNetworkId[player.id])
      ) {
        return;
      }
      const playerId = addEntity(world);
      playersByNetworkId[player.id] = playerId;
      playersByLocalId[playerId] = player;
      addComponent(world, Position, playerId);
      addComponent(world, Body, playerId);
      addComponent(world, Shoes, playerId);
      addComponent(world, Clothes, playerId);
      addComponent(world, TargetPosition, playerId);
      addComponent(world, Actions, playerId);
    });

    for (const [key, value] of Object.entries<any>(playersByNetworkId)) {
      let exist = false;
      currentPlayers.forEach((player) => {
        if (key === player.id) {
          exist = true;
        }
      });
      if (!exist) {
        removeEntity(world, value);
        delete playersByNetworkId[key];
        delete playersByLocalId[value];
      }
    }
    //update whole entitiesById
    console.log('chale')
    window.acropolis.networkSystem.setNetworkEntities(playersByNetworkId)
    window.acropolis.networkSystem.setLocalEntities(playersByLocalId)
    return world;
  });
};
