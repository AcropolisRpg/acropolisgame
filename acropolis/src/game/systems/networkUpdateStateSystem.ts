import { Socket } from 'socket.io';

export const networkUpdateStateSystem = (socket: Socket) => {
  const networkEntitiesIDsByLocalID = {}
  const localEntitiesIDsByNetworkID = {}
  const localEntities = {};

  // This is only read
  let networkEntities = {};

  // socket.on('update state', (data) => {
  //   networkData = data;
  // });
  socket.on('broadcastNetworkClient', (data) => {
    console.log('broadcastNetworkClient', data)
    networkEntities = data;
  });

  const deleteNetworkEntitiesIDsByLocalID = (id) => {
    delete networkEntitiesIDsByLocalID[id]
  }
  const deleteLocalEntitiesIDsByNetworkID = (id) => {
    delete localEntitiesIDsByNetworkID[id]
  }
  const deleteLocalEntity = (id) => {
    delete localEntities[id]
  }
  const setLocalEntityIDbyNetworkID = (networkId, localId) => {
    localEntitiesIDsByNetworkID[networkId] = localId
  }
  const getLocalEntityIDbyNetworkID = (networkId) => {
    return localEntitiesIDsByNetworkID[networkId]
  }

  // const setNetworkEntitiesIDbyLocalID = (entitiesById) => {
  //   networkEntitiesIDsByLocalID = entitiesById
  // }
  const getNetworkEntitiesIDsByLocalID = () => {
    return networkEntitiesIDsByLocalID
  }
  // const setLocalEntitiesIDsByNetworkID = (entitiesById) => {
  //   localEntitiesIDsByNetworkID = entitiesById
  // }
  const getLocalEntitiesIDsByNetworkID = () => {
    return localEntitiesIDsByNetworkID
  }

  // ver que pedo 
  // const getNetworkEntityByLocalId = (id) => {
  //   const networkEntity =  networkEntities[localEntitiesIDsByNetworkID[id]]
  //   return networkEntity
  // }
  const setLocalEntityByLocalId = (id, entity) => {
    localEntities[id] = entity
  }
  const getLocalEntityByLocalId = (id) => {
    const localEntity =  localEntities[id]
    return localEntity
  }


  const getNetworkEntities = () => {
    return networkEntities;
  };

  const getLocalEntities = () => {
    return localEntities;
  };
  
  // const setNetworkEntityByLocalId = (id, entity) => {
  //   networkEntities[id] = entity
  // }

  const setNetworkEntityIDbyLocalID = (networkId, localId) => {
    networkEntitiesIDsByLocalID[localId] = networkId
  }

  const getNetworkEntityIDbyLocalID = (localId) => {
    return networkEntitiesIDsByLocalID[localId]
  }
  const getNetworkEntityByLocalId = (id) => {
    const networkEntity =  networkEntities[getNetworkEntityIDbyLocalID(id)]
    return networkEntity
  }

  return {
    deleteNetworkEntitiesIDsByLocalID,
    deleteLocalEntitiesIDsByNetworkID,
    deleteLocalEntity,

    getLocalEntitiesIDsByNetworkID,
    // setLocalEntitiesIDsByNetworkID,
    getNetworkEntitiesIDsByLocalID,
    // setNetworkEntitiesIDbyLocalID,
    // setNetworkEntityByLocalId,

    // Server values must be only readable.
    getNetworkEntities,
    getNetworkEntityByLocalId,

    // Local values can be written
    getLocalEntities,
    getLocalEntityByLocalId,
    setLocalEntityByLocalId,

    // The glue between server and client.
    setNetworkEntityIDbyLocalID,
    getNetworkEntityIDbyLocalID,
    getLocalEntityIDbyNetworkID,
    setLocalEntityIDbyNetworkID,

  };
};
