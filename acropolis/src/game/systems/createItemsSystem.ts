import { defineQuery, defineSystem, enterQuery, exitQuery } from 'bitecs';
import { Body, Position } from '../components/components';

export const createItemsSystem = (scene: Phaser.Scene) => {
  // const spritesById = {}
  const spriteQuery = defineQuery([Body]);
  const spriteQueryEnter = enterQuery(spriteQuery);
  const spriteQueryExit = exitQuery(spriteQuery);
  const timeSystem = window.acropolis.timeSystem;
  const getLocalEntityByLocalId =
    window.acropolis.networkSystem.getLocalEntityByLocalId;

  return defineSystem((world) => {
    const enterEntities = spriteQueryEnter(world);
    for (let i = 0; i < enterEntities.length; i++) {
      const id = enterEntities[i];
      const entity = getLocalEntityByLocalId(id);
      // entity.text = {}
      entity.sprites.inventory = scene.add.sprite(400, 370, 'inventory');
      entity.sprites.backpack = scene.add.sprite(575, 575, 'backpack');

      entity.sprites.items = {};

      console.log('entity.items', entity.items);
      let x = 288;
      let y = 416;
      let counter = 1;

      if (entity.items) {
        // Layout 16x64
        for (const [key, item] of Object.entries<any>(entity.items)) {
          if (!entity.sprites.items[key]) {
            entity.sprites.items[key] = scene.add.sprite(x, y, 'icons');
            // entity.sprites.items[key].text = scene.add.text(288, 416, item);
            //wood
            switch (key) {
              case 'basicWood':
                entity.sprites.items[key].setFrame(16 * 60 - 2);
                break;
              case 'basicStone':
                entity.sprites.items[key].setFrame(16 * 54 - 5);
                break;
              case 'basicHerb':
                entity.sprites.items[key].setFrame(16 * 18);
                break;
              default:
                break;
            }
            //stone
            //herb
            entity.sprites.items[key].setInteractive();
            entity.sprites.items[key].setScrollFactor(0, 0);
            scene.input.setDraggable(entity.sprites.items[key]);
            x += 32;
            counter++;
            if (counter > 8) {
              y += 32;
              x = 288;
            }
          }
        }
      }
      // entity.sprites.items.wood = scene.add.sprite(320, 416, 'icons');
      // entity.sprites.items.wood.setFrame(3)
      // entity.sprites.items.wood.setInteractive();
      // entity.sprites.items.wood.setScrollFactor(0, 0)
      // scene.input.setDraggable(entity.sprites.items.wood);

      entity.sprites.backpack.setScrollFactor(0, 0);
      entity.sprites.backpack.setInteractive();
      window.acropolis.inventory = {};
      window.acropolis.inventory.inventoryOpen = true;
      entity.sprites.inventory.setScrollFactor(0, 0);
      entity.sprites.inventory.setInteractive();
      entity.sprites.inventory.setScale(2);
      entity.sprites.backpack.setName('backpack');
      // entity.sprites.backpack.setCrop(0, 0, 40, 10);
      scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = Phaser.Math.Snap.To(dragX, 32);
        gameObject.y = Phaser.Math.Snap.To(dragY, 32);
      });
      scene.input.on(
        'pointerdown',
        (
          pointer: Phaser.Input.Pointer,
          objectsClicked: Phaser.GameObjects.GameObject[]
        ) => {
          if (objectsClicked?.[0]?.name === 'backpack') {
            window.acropolis.inventory.inventoryOpen =
              !window.acropolis.inventory.inventoryOpen;
            for (const [, item] of Object.entries<any>(entity.sprites.items)) {
              item.setVisible(!item.visible);
            }
            entity.sprites.inventory.setVisible(
              !entity.sprites.inventory.visible
            );
          }
        }
      );
    }
    if (window.acropolis.currentPlayerId) {
      const currentPlayer =
        window.acropolis.networkSystem.getLocalEntityByNetworkId(
          window.acropolis.currentPlayerId
        );
       const networkEntity =  window.acropolis.networkSystem.getNetworkEntityByNetworkID(window.acropolis.currentPlayerId)
      if (currentPlayer) {

        if (networkEntity.items) {
          // Layout 16x64
          // console.log('currentPlayer', networkEntity.items)
          let x = 288;
          let y = 416;
          let counter = 1;
          for (const [key, item] of Object.entries<any>(networkEntity.items)) {
          
            if (!currentPlayer.sprites.items[key]) {
              currentPlayer.sprites.items[key] = scene.add.sprite(
                x,
                y,
                'icons'
              );

              currentPlayer.sprites.items[key].setVisible(false);
              // currentPlayer.sprites.items[key].text = scene.add.text(288, 416, item);
              //wood
              switch (key) {
                case 'basicWood':
                  currentPlayer.sprites.items[key].setFrame(16 * 60 - 2);
                  break;
                case 'basicStone':
                  currentPlayer.sprites.items[key].setFrame(16 * 54 - 5);
                  break;
                case 'basicHerb':
                  currentPlayer.sprites.items[key].setFrame(16 * 18);
                  break;
                default:
                  break;
              }
              //stone
              //herb
              currentPlayer.sprites.items[key].setInteractive();
              currentPlayer.sprites.items[key].setScrollFactor(0, 0);
              scene.input.setDraggable(currentPlayer.sprites.items[key]);
            }

              x += 32;
              counter++;
              if (counter > 8) {
                y += 32;
                x = 288;
              }
          }
        }
      }
    }

    // const exitEntities = spriteQueryExit(world);
    // for (let i = 0; i < exitEntities.length; i++) {
    //   const id = exitEntities[i];
    //   const entity = getLocalEntityByLocalId(id);
    //   const { wood, stone, herb } = entity.text;
    //   if (!wood) {
    //     continue;
    //   }
    //   wood.destroy();
    //   stone.destroy();
    //   herb.destroy();
    // }
    return world;
  });
};
