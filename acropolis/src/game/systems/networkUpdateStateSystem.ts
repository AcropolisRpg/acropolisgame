import { Socket } from 'socket.io';

export const networkUpdateStateSystem = (socket: Socket) => {
  let networkEntitiesById = {}
  let networkData = {};
  // socket.on('update state', (data) => {
  //   networkData = data;
  // });
  socket.on('broadcastNetworkClient', (data) => {
    console.log('broadcastNetworkClient', data)
    networkData = data;
  });

  const getLatestNetworkData = () => {
    return networkData;
  };
  const setNetworkEntities = (entitiesById) => {
    networkEntitiesById = entitiesById
  }
  const getNetworkEntities = () => {
    return networkEntitiesById
  }
  const setLocalEntities = (entitiesById) => {
    networkEntitiesById = entitiesById
  }
  const getLocalEntities = () => {
    return networkEntitiesById
  }
  return {
    getLatestNetworkData,
    setNetworkEntities,
    getNetworkEntities,
    setLocalEntities,
    getLocalEntities
  };
};
