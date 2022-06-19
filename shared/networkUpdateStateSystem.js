
/* eslint-disable */
export const networkUpdateStateSystem = (socket) => {
  const networkEntitiesIDsByLocalID = {}
  const localEntitiesIDsByNetworkID = {}
  const localEntities = {};

  // This is only read
  let networkEntities = {};

  socket.on('broadcastNetworkClient', (data) => {
    networkEntities = data;
  });

  const deleteNetworkEntityIDByLocalID = (id) => {
    delete networkEntitiesIDsByLocalID[id]
  }
  const deleteLocalEntityIDByNetworkID = (id) => {
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

  const getNetworkEntitiesIDsByLocalID = () => {
    return networkEntitiesIDsByLocalID
  }

  const getLocalEntitiesIDsByNetworkID = () => {
    return localEntitiesIDsByNetworkID
  }

  const setLocalEntityByLocalId = (id, entity) => {
    localEntities[id] = entity
  }
  const getLocalEntityByLocalId = (id) => {
    const localEntity =  localEntities[id]
    return localEntity
  }

  const getLocalEntityByNetworkId = (id) => {

    const localEntity =  localEntities[getLocalEntityIDbyNetworkID(id)]
    return localEntity
  }


  const getNetworkEntities = () => {
    return networkEntities;
  };

  const getLocalEntities = () => {
    return localEntities;
  };

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
    deleteNetworkEntityIDByLocalID,
    deleteLocalEntityIDByNetworkID,
    deleteLocalEntity,

    getLocalEntitiesIDsByNetworkID,
    getNetworkEntitiesIDsByLocalID,

    // Server values must be only readable.
    getNetworkEntities,
    getNetworkEntityByLocalId,

    // Local values can be written
    getLocalEntities,
    getLocalEntityByLocalId,
    getLocalEntityByNetworkId,
    setLocalEntityByLocalId,

    // The glue between server and client.
    setNetworkEntityIDbyLocalID,
    getNetworkEntityIDbyLocalID,
    getLocalEntityIDbyNetworkID,
    setLocalEntityIDbyNetworkID,

  };
};
