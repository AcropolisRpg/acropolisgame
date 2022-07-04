import { flipPlayerX } from './flipPlayer';
import { defineQuery, defineSystem } from 'bitecs';

export const createShootingSystem = (scene) => {
  return defineSystem((world) => {
    const networkEntities = window.acropolis.networkSystem.getNetworkEntities();
    for (const [entityId, entity] of Object.entries<any>(networkEntities)) {
      const localEntity =
        window.acropolis.networkSystem.getLocalEntityByNetworkId(entityId);
      if (entity?.activeShootingPosition) {
        if (!localEntity?.shoot) {
          console.log('crea el puto skill');
          localEntity.shoot = {};
          localEntity.sprites.shoot = scene.add.sprite(entity.activeShootingPosition.x, entity.activeShootingPosition.y, 'fireball')
          window.acropolis.fireball.play()
        }
        localEntity.sprites.shoot.x = entity.activeShootingPosition.x
        localEntity.sprites.shoot.y = entity.activeShootingPosition.y
        localEntity.sprites.shoot.angle += 5
      } else if (localEntity?.shoot) {
        console.log('destroye el puto skill');
        localEntity.sprites.shoot.destroy()
        localEntity.shoot = null;
      }
    }
    return world;
  });
};
