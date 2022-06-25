import { defineQuery, defineSystem, enterQuery, exitQuery } from 'bitecs';
import { Body, Position } from '../components/components';
import _ from 'lodash';

export const createItemsSystem = (scene: Phaser.Scene) => {
  // const spritesById = {}
  const spriteQuery = defineQuery([Body]);
  const spriteQueryEnter = enterQuery(spriteQuery);
  const spriteQueryExit = exitQuery(spriteQuery);
  const timeSystem = window.acropolis.timeSystem;
  const getLocalEntityByLocalId =
    window.acropolis.networkSystem.getLocalEntityByLocalId;
  let executed = false;
  let x = 288;
  let y = 416;
  let counter = 1;
  const inventoryLayout = [];
  let layoutX = 288;
  let layoutY = 416;
  let inventoryId = 1;
  let entity;
  let networkEntity;

  const generateInventoryLayout = () =>{
    for (let y = 0; y < 4; y++) {
      layoutX = 288;
      for (let x = 0; x < 8; x++) {
        inventoryLayout.push({
          id: inventoryId,
          position: { x: layoutX, y: layoutY },
          itemId: ''
        });
        layoutX += 32;
        inventoryId++;
      }
      layoutY += 32;
    }
  }

  const makeItemDraggable = (entity,key) => {
    entity.sprites.items[key].sprite.setInteractive();
    entity.sprites.items[key].sprite.setData({ id: key });
    entity.sprites.items[key].sprite.setScrollFactor(0, 0);
    entity.sprites.items[key].qty.setData({ id: key });
    entity.sprites.items[key].qty.setInteractive({
      draggable: true,
      // SETUP hitarea
      hitArea: new Phaser.Geom.Rectangle(-16, -16, 32, 32),
      //Check hitarea
      hitAreaCallback: function (hitArea, x, y) {
        return Phaser.Geom.Rectangle.Contains(hitArea, x, y);
      }
    });
    entity.sprites.items[key].qty.setScrollFactor(0, 0);
    scene.input.setDraggable(entity.sprites.items[key].sprite);
  }

  const updateLayoutCounter = () =>{
    x += 32;
    counter++;
    if (counter > 8) {
      y += 32;
      x = 288;
    }
  }

  const setItemImage = (entity, key) => {
    switch (key) {
      case 'basicWood':
        entity.sprites.items[key].sprite.setFrame(16 * 60 - 2);
        break;
      case 'basicStone':
        entity.sprites.items[key].sprite.setFrame(16 * 54 - 5);
        break;
      case 'basicHerb':
        entity.sprites.items[key].sprite.setFrame(16 * 18);
        break;
      default:
        break;
    }
  }

  return defineSystem((world) => {
    if (!window?.acropolis?.currentPlayerId || executed) {
      return;
    }
    entity = window.acropolis.networkSystem.getLocalEntityByNetworkId(
      window.acropolis.currentPlayerId
    );
    networkEntity = window.acropolis.networkSystem.getNetworkEntityByNetworkID(
      window.acropolis.currentPlayerId
    );
    if (!entity?.sprites) {
      return;
    }
    executed = true;

    entity.sprites.inventory = scene.add.sprite(400, 370, 'inventory');
    entity.sprites.backpack = scene.add.sprite(575, 575, 'backpack');
    scene.input.topOnly = false;

    generateInventoryLayout()

    if (networkEntity.items) {
      //estop ver donde va
      entity.sprites.items = {};
      if (entity.items) {
        // Layout 16x64
        for (const [key, networkItem] of Object.entries<any>(
          networkEntity.items
        )) {
          if (entity.sprites.items[key]) {
            continue;
          }
          const item = {
            sprite: scene.add.sprite(x, y, 'icons'),
            qty: scene.add.text(x, y, networkItem.quantity)
          };
          inventoryLayout.forEach((inventoryItem) => {
            if (
              inventoryItem.position.x === item.sprite.x &&
              inventoryItem.position.y === item.sprite.y
            ) {
              inventoryItem.itemId = key;
            }
          });
          entity.sprites.items[key] = item;
 
          setItemImage(entity, key)
          //stone
          //herb

          // Make items drraggable
          makeItemDraggable(key, entity)
          updateLayoutCounter()
        }
      }
    }

    entity.sprites.backpack.setScrollFactor(0, 0);
    entity.sprites.backpack.setInteractive();
    window.acropolis.inventory = {};
    window.acropolis.inventory.inventoryOpen = true;
    entity.sprites.inventory.setScrollFactor(0, 0);
    entity.sprites.inventory.setInteractive();
    entity.sprites.inventory.setScale(2);
    entity.sprites.backpack.setName('backpack');
    scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      if (dragX >= 288 && dragX <= 512 && dragY >= 416 && dragY <= 512) {
        gameObject.x = Phaser.Math.Snap.To(dragX, 32);
        gameObject.y = Phaser.Math.Snap.To(dragY, 32);
        inventoryLayout.forEach((inventoryItem) => {
          if (
            inventoryItem.position.y === gameObject.y &&
            inventoryItem.position.x === gameObject.x &&
            inventoryItem.itemId // y tiene item
          ) {
            const currentItemInventory = inventoryLayout.find(
              (invItem) => invItem.itemId === gameObject.getData('id')
            );
            if (currentItemInventory) {
              const itemId = currentItemInventory.itemId;
              entity.sprites.items[inventoryItem.itemId].sprite.x =
                currentItemInventory.position.x;
              entity.sprites.items[inventoryItem.itemId].sprite.y =
                currentItemInventory.position.y;
              entity.sprites.items[inventoryItem.itemId].qty.x =
                currentItemInventory.position.x;
              entity.sprites.items[inventoryItem.itemId].qty.y =
                currentItemInventory.position.y;
              currentItemInventory.itemId = inventoryItem.itemId;
              inventoryItem.itemId = itemId;
            }
          } else if (
            inventoryItem.position.y === gameObject.y &&
            inventoryItem.position.x === gameObject.x
          ) {
            const currentItemInventory = inventoryLayout.find(
              (invItem) => invItem.itemId === gameObject.getData('id')
            );
            inventoryItem.itemId = gameObject.getData('id');
            currentItemInventory.itemId = '';
            // console.log('Inventory Layout',inventoryLayout)
          }
        });
      }
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

          if (entity?.sprites?.items) {
            for (const [, item] of Object.entries<any>(entity.sprites.items)) {
              item.sprite.setVisible(!item.sprite.visible);
              item.qty.setVisible(!item.qty.visible);
            }
          }
          entity.sprites.inventory.setVisible(
            !entity.sprites.inventory.visible
          );
        }
      }
    );

    // TODO actualizar los estupidos valores numericos de la base de datos porque claro que si!
    // TODO revidsar porque se rompe el sistema de ordenamiento de items.

    // if (entity?.sprites) {
    //   networkEntity =
    //     window.acropolis.networkSystem.getNetworkEntityByNetworkID(
    //       window.acropolis.currentPlayerId
    //     );

    //     if(!networkEntity?.items) {
    //       return
    //     }
    //     entity.sprites.items = {};
    //   // Layout 16x64
    //   for (const [key, networkItem] of Object.entries<any>(
    //     networkEntity.items
    //   )) {
    //     // console.log(networkItem);
    //     if (!entity.sprites.items[key]) {
    //       const item = {
    //         sprite: scene.add.sprite(x, y, 'icons'),
    //         qty: scene.add.text(x, y, networkItem.quantity)
    //       };
    //       item.sprite.setVisible(!item.sprite.visible);
    //       item.qty.setVisible(!item.qty.visible);
    //       entity.sprites.items[key] = item;
    //       switch (key) {
    //         case 'basicWood':
    //           entity.sprites.items[key].sprite.setFrame(16 * 60 - 2);
    //           break;
    //         case 'basicStone':
    //           entity.sprites.items[key].sprite.setFrame(16 * 54 - 5);
    //           break;
    //         case 'basicHerb':
    //           entity.sprites.items[key].sprite.setFrame(16 * 18);
    //           break;
    //         default:
    //           break;
    //       }
    //       scene.input.topOnly = false;
    //       entity.sprites.items[key].sprite.setInteractive();
    //       entity.sprites.items[key].sprite.setData({ id: key });
    //       entity.sprites.items[key].sprite.setScrollFactor(0, 0);
    //       entity.sprites.items[key].qty.setData({ id: key });
    //       entity.sprites.items[key].qty.setInteractive({
    //         draggable: true,
    //         // SETUP hitarea
    //         hitArea: new Phaser.Geom.Rectangle(-16, -16, 32, 32),
    //         //Check hitarea
    //         hitAreaCallback: function (hitArea, x, y) {
    //           return Phaser.Geom.Rectangle.Contains(hitArea, x, y);
    //         }
    //       });
    //       entity.sprites.items[key].qty.setScrollFactor(0, 0);
    //       scene.input.setDraggable(entity.sprites.items[key].sprite);
    //       x += 32;
    //       counter++;
    //       if (counter > 8) {
    //         y += 32;
    //         x = 288;
    //       }
    //     }
    //   }
    // }

    // if (window.acropolis.currentPlayerId) {
    //   const currentPlayer =
    //     window.acropolis.networkSystem.getLocalEntityByNetworkId(
    //       window.acropolis.currentPlayerId
    //     );
    //   const networkEntity =
    //     window.acropolis.networkSystem.getNetworkEntityByNetworkID(
    //       window.acropolis.currentPlayerId
    //     );
    //   if (currentPlayer) {
    //     if (networkEntity.items) {
    //       // Layout 16x64
    //       // console.log('currentPlayer', networkEntity.items)
    //       let x = 288;
    //       let y = 416;
    //       let counter = 1;
    //       for (const [key, item] of Object.entries<any>(networkEntity.items)) {
    //         if (!currentPlayer.sprites.items[key]) {
    //           currentPlayer.sprites.items[key] = scene.add.sprite(
    //             x,
    //             y,
    //             'icons'
    //           );

    //           currentPlayer.sprites.items[key].setVisible(false);
    //           // currentPlayer.sprites.items[key].text = scene.add.text(288, 416, item);
    //           //wood
    //           switch (key) {
    //             case 'basicWood':
    //               currentPlayer.sprites.items[key].setFrame(16 * 60 - 2);
    //               break;
    //             case 'basicStone':
    //               currentPlayer.sprites.items[key].setFrame(16 * 54 - 5);
    //               break;
    //             case 'basicHerb':
    //               currentPlayer.sprites.items[key].setFrame(16 * 18);
    //               break;
    //             default:
    //               break;
    //           }
    //           //stone
    //           //herb
    //           currentPlayer.sprites.items[key].setInteractive();
    //           currentPlayer.sprites.items[key].setScrollFactor(0, 0);
    //           scene.input.setDraggable(currentPlayer.sprites.items[key]);
    //         }

    //         x += 32;
    //         counter++;
    //         if (counter > 8) {
    //           y += 32;
    //           x = 288;
    //         }
    //       }
    //     }
    //   }
    // }

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
