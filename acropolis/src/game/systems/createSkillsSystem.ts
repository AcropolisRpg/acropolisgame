import { defineQuery, defineSystem } from 'bitecs';

export const createSkillsSystem = (scene) => {
  return defineSystem((world) => {
    const networkEntities = window.acropolis.networkSystem.getNetworkEntities();
    for (const [entityId, entity] of Object.entries<any>(networkEntities)) {
      const localEntity =
        window.acropolis.networkSystem.getLocalEntityByNetworkId(entityId);
      if (entity?.skillPosition) {
        if (!localEntity?.skill) {
          console.log('crea el puto skill');
          localEntity.skill = {};
          localEntity.sprites.skill = scene.add.sprite(entity.skillPosition.x, entity.skillPosition.y, 'balla')
        }
      } 
      else if (localEntity?.skill) {
        console.log('destroye el puto skill');
        localEntity.sprites.skill.destroy()
        localEntity.skill = null;
      }
    }
    return world;
  });
};
