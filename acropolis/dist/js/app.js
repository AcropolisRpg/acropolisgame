/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=script&lang=ts":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=script&lang=ts ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-class-component */ \"./node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js\");\n/* harmony import */ var _components_AcropolisMain_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AcropolisMain.vue */ \"./src/components/AcropolisMain.vue\");\n\n\n // @ is an alias to /src\n\nlet Home = class Home extends vue_class_component__WEBPACK_IMPORTED_MODULE_1__.Vue {};\nHome = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,vue_class_component__WEBPACK_IMPORTED_MODULE_1__.Options)({\n  components: {\n    AcropolisMain: _components_AcropolisMain_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n})], Home);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack://acropolis/./src/views/Home.vue?./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use%5B1%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=template&id=fae5bece&ts=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=template&id=fae5bece&ts=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"home\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_AcropolisMain = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"AcropolisMain\");\n\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AcropolisMain)]);\n}\n\n//# sourceURL=webpack://acropolis/./src/views/Home.vue?./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use%5B1%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B4%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/game/components/components.ts":
/*!*******************************************!*\
  !*** ./src/game/components/components.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Actions\": function() { return /* binding */ Actions; },\n/* harmony export */   \"Body\": function() { return /* binding */ Body; },\n/* harmony export */   \"Clothes\": function() { return /* binding */ Clothes; },\n/* harmony export */   \"Hair\": function() { return /* binding */ Hair; },\n/* harmony export */   \"HealthBar\": function() { return /* binding */ HealthBar; },\n/* harmony export */   \"ManaBar\": function() { return /* binding */ ManaBar; },\n/* harmony export */   \"Position\": function() { return /* binding */ Position; },\n/* harmony export */   \"Resource\": function() { return /* binding */ Resource; },\n/* harmony export */   \"Shoes\": function() { return /* binding */ Shoes; },\n/* harmony export */   \"Sprite\": function() { return /* binding */ Sprite; },\n/* harmony export */   \"TargetPosition\": function() { return /* binding */ TargetPosition; },\n/* harmony export */   \"Vector2\": function() { return /* binding */ Vector2; },\n/* harmony export */   \"Velocity\": function() { return /* binding */ Velocity; }\n/* harmony export */ });\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n\nconst Vector2 = {\n  x: bitecs__WEBPACK_IMPORTED_MODULE_0__.Types.f32,\n  y: bitecs__WEBPACK_IMPORTED_MODULE_0__.Types.f32\n};\nconst Actions = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\n  actions: bitecs__WEBPACK_IMPORTED_MODULE_0__.Types.ui8\n});\n\nconst GameBarFactory = () => (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\n  position: Vector2,\n  type: bitecs__WEBPACK_IMPORTED_MODULE_0__.Types.ui8,\n  parentRef: bitecs__WEBPACK_IMPORTED_MODULE_0__.Types.ui8,\n  currentStats: {\n    max: bitecs__WEBPACK_IMPORTED_MODULE_0__.Types.f32,\n    current: bitecs__WEBPACK_IMPORTED_MODULE_0__.Types.f32\n  }\n}); // Factory de componentes de Barras de juego.\n\n\nconst ManaBar = GameBarFactory();\nconst HealthBar = GameBarFactory();\nconst Position = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineComponent)(Vector2);\nconst TargetPosition = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineComponent)(Vector2);\nconst Sprite = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\n  texture: bitecs__WEBPACK_IMPORTED_MODULE_0__.Types.ui8\n});\nconst Body = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\n  texture: bitecs__WEBPACK_IMPORTED_MODULE_0__.Types.ui8\n});\nconst Shoes = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\n  texture: bitecs__WEBPACK_IMPORTED_MODULE_0__.Types.ui8\n});\nconst Hair = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\n  texture: bitecs__WEBPACK_IMPORTED_MODULE_0__.Types.ui8\n});\nconst Clothes = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\n  texture: bitecs__WEBPACK_IMPORTED_MODULE_0__.Types.ui8\n});\nconst Velocity = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineComponent)(Vector2);\nconst Resource = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineComponent)();\n\n//# sourceURL=webpack://acropolis/./src/game/components/components.ts?");

/***/ }),

/***/ "./src/game/constants/constants.ts":
/*!*****************************************!*\
  !*** ./src/game/constants/constants.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FRAME_SIZE_16_16\": function() { return /* binding */ FRAME_SIZE_16_16; },\n/* harmony export */   \"FRAME_SIZE_24_24\": function() { return /* binding */ FRAME_SIZE_24_24; },\n/* harmony export */   \"FRAME_SIZE_32_32\": function() { return /* binding */ FRAME_SIZE_32_32; },\n/* harmony export */   \"FRAME_SIZE_64_64\": function() { return /* binding */ FRAME_SIZE_64_64; },\n/* harmony export */   \"FRAME_SIZE_96_96\": function() { return /* binding */ FRAME_SIZE_96_96; }\n/* harmony export */ });\nconst frameSize = (frameWidth, frameHeight) => ({\n  frameWidth,\n  frameHeight\n});\n\nconst FRAME_SIZE_24_24 = frameSize(24, 24);\nconst FRAME_SIZE_32_32 = frameSize(32, 32);\nconst FRAME_SIZE_64_64 = frameSize(64, 64);\nconst FRAME_SIZE_96_96 = frameSize(96, 96);\nconst FRAME_SIZE_16_16 = frameSize(16, 16);\n\n//# sourceURL=webpack://acropolis/./src/game/constants/constants.ts?");

/***/ }),

/***/ "./src/game/phaserHelper/loaders.ts":
/*!******************************************!*\
  !*** ./src/game/phaserHelper/loaders.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadImage\": function() { return /* binding */ loadImage; },\n/* harmony export */   \"loadSpritesheet\": function() { return /* binding */ loadSpritesheet; },\n/* harmony export */   \"loadTilemapTiledJSON\": function() { return /* binding */ loadTilemapTiledJSON; }\n/* harmony export */ });\n/* harmony import */ var _utils_stringHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/stringHandler */ \"./src/game/utils/stringHandler.ts\");\n\nconst loadImage = (scene, key, url) => {\n  return scene.load.image(key, (0,_utils_stringHandler__WEBPACK_IMPORTED_MODULE_0__.pathHandler)(url));\n};\nconst loadTilemapTiledJSON = (scene, key, url) => {\n  return scene.load.tilemapTiledJSON(key, (0,_utils_stringHandler__WEBPACK_IMPORTED_MODULE_0__.pathHandler)(url));\n};\nconst loadSpritesheet = (scene, key, url, frameSizing) => {\n  return scene.load.spritesheet(key, (0,_utils_stringHandler__WEBPACK_IMPORTED_MODULE_0__.pathHandler)(url), frameSizing);\n};\n\n//# sourceURL=webpack://acropolis/./src/game/phaserHelper/loaders.ts?");

/***/ }),

/***/ "./src/game/scenes/Game.ts":
/*!*********************************!*\
  !*** ./src/game/scenes/Game.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _systems_loadingBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../systems/loadingBar */ \"./src/game/systems/loadingBar.ts\");\n/* harmony import */ var _phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../phaserHelper/loaders */ \"./src/game/phaserHelper/loaders.ts\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants */ \"./src/game/constants/constants.ts\");\n/* harmony import */ var _systems_playerSpritesheetAnimations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../systems/playerSpritesheetAnimations */ \"./src/game/systems/playerSpritesheetAnimations.ts\");\n/* harmony import */ var _systems_createGameControllerSystem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../systems/createGameControllerSystem */ \"./src/game/systems/createGameControllerSystem.ts\");\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n/* harmony import */ var _systems_createSpriteSystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../systems/createSpriteSystem */ \"./src/game/systems/createSpriteSystem.ts\");\n/* harmony import */ var _systems_createEntitySystem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../systems/createEntitySystem */ \"./src/game/systems/createEntitySystem.ts\");\n/* harmony import */ var _systems_createTargetMovementSystem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../systems/createTargetMovementSystem */ \"./src/game/systems/createTargetMovementSystem.ts\");\n/* harmony import */ var _systems_createTimeSystem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../systems/createTimeSystem */ \"./src/game/systems/createTimeSystem.ts\");\n/* harmony import */ var _systems_createAnimationSystem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../systems/createAnimationSystem */ \"./src/game/systems/createAnimationSystem.ts\");\n/* harmony import */ var _systems_createResourceSpriteSystem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../systems/createResourceSpriteSystem */ \"./src/game/systems/createResourceSpriteSystem.ts\");\n/* harmony import */ var _systems_createHealthBarSystem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../systems/createHealthBarSystem */ \"./src/game/systems/createHealthBarSystem.ts\");\n/* harmony import */ var _systems_createItemsSystem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../systems/createItemsSystem */ \"./src/game/systems/createItemsSystem.ts\");\n/* harmony import */ var _systems_createSkillsSystem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../systems/createSkillsSystem */ \"./src/game/systems/createSkillsSystem.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass Game extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {\n  init(data) {\n    this.lobbyScene = {};\n    this.lobbyScene.socket = data.socket;\n  }\n\n  preload() {\n    //This is the place where you load all assets.\n    (0,_systems_loadingBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this);\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadImage)(this, 'ball', '/game/sprites/spikedballa.png');\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadImage)(this, 'atlas', '/game/tiled/atlas.png');\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadTilemapTiledJSON)(this, 'forestkey', '/game/tiled/forest1.json');\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadSpritesheet)(this, 'bodySpriteSheet', '/game/character/characters/char_all.png', _constants_constants__WEBPACK_IMPORTED_MODULE_3__.FRAME_SIZE_32_32);\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadSpritesheet)(this, 'shoesSpriteSheet', '/game/character/clothes/shoes.png', _constants_constants__WEBPACK_IMPORTED_MODULE_3__.FRAME_SIZE_32_32); //'buzzcut.png',hitler\n    //'curly.png',afro\n    //'french_curl.png',señora\n    //'gentleman.png', joven\n    //'midiwave.png', greñuda\n    //'ponytail.png', chopo de hershey\n    //'spacebuns.png',sailor moon\n\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadSpritesheet)(this, 'gentlemanHairSpriteSheet', '/game/character/hair/gentleman.png', _constants_constants__WEBPACK_IMPORTED_MODULE_3__.FRAME_SIZE_32_32);\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadSpritesheet)(this, 'clothesSpriteSheet', '/game/character/clothes/basic.png', _constants_constants__WEBPACK_IMPORTED_MODULE_3__.FRAME_SIZE_32_32);\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadSpritesheet)(this, 'balla', '/game/sprites/spikedballa.png', _constants_constants__WEBPACK_IMPORTED_MODULE_3__.FRAME_SIZE_96_96);\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadSpritesheet)(this, 'trees', '/game/nature/global.png', _constants_constants__WEBPACK_IMPORTED_MODULE_3__.FRAME_SIZE_32_32);\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadSpritesheet)(this, 'globalNature', '/game/nature/global.png', _constants_constants__WEBPACK_IMPORTED_MODULE_3__.FRAME_SIZE_16_16);\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadSpritesheet)(this, 'sand', '/game/nature/sandy3.png', _constants_constants__WEBPACK_IMPORTED_MODULE_3__.FRAME_SIZE_32_32);\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadSpritesheet)(this, 'crops', '/game/fullversion/farming/crops.png', _constants_constants__WEBPACK_IMPORTED_MODULE_3__.FRAME_SIZE_16_16);\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadSpritesheet)(this, 'chicken', '/game/fullversion/animals/chicken_animation.png', _constants_constants__WEBPACK_IMPORTED_MODULE_3__.FRAME_SIZE_16_16);\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadSpritesheet)(this, 'TXprops', '/game/rpg-pack/Texture/TXProps.png', _constants_constants__WEBPACK_IMPORTED_MODULE_3__.FRAME_SIZE_32_32);\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadSpritesheet)(this, 'healthBarDecoration', '/game/statusbar/health_bar_decoration.png', {\n      frameWidth: 64,\n      frameHeight: 17\n    });\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadSpritesheet)(this, 'healthBar', '/game/statusbar/health_bar.png', {\n      frameWidth: 49,\n      frameHeight: 17\n    });\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadSpritesheet)(this, 'backpack', '/game/rpg-pack/UI/backpack.png', _constants_constants__WEBPACK_IMPORTED_MODULE_3__.FRAME_SIZE_32_32);\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadSpritesheet)(this, 'inventory', '/game/rpg-pack/UI/inventory.png', {\n      frameWidth: 192,\n      frameHeight: 192\n    });\n    (0,_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_2__.loadSpritesheet)(this, 'icons', '/game/icons/icons_full_32.png', _constants_constants__WEBPACK_IMPORTED_MODULE_3__.FRAME_SIZE_32_32);\n  }\n\n  create() {\n    this.world = (0,bitecs__WEBPACK_IMPORTED_MODULE_6__.createWorld)();\n    this.timeSystem = (0,_systems_createTimeSystem__WEBPACK_IMPORTED_MODULE_10__.createTimeSystem)();\n    this.entitySystem = (0,_systems_createEntitySystem__WEBPACK_IMPORTED_MODULE_8__.createEntitySystem)();\n    this.itemsSystem = (0,_systems_createItemsSystem__WEBPACK_IMPORTED_MODULE_14__.createItemsSystem)(this);\n    this.gameControllerSystem = (0,_systems_createGameControllerSystem__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, this.lobbyScene.socket);\n    this.spriteSystem = (0,_systems_createSpriteSystem__WEBPACK_IMPORTED_MODULE_7__.createSpriteSystem)(this, ['bodySpriteSheet', 'clothesSpriteSheet', 'shoesSpriteSheet']);\n    this.skillsSystem = (0,_systems_createSkillsSystem__WEBPACK_IMPORTED_MODULE_15__.createSkillsSystem)(this);\n    this.healthBarSystem = (0,_systems_createHealthBarSystem__WEBPACK_IMPORTED_MODULE_13__.createHealthBarSystem)(this);\n    this.animationSystem = (0,_systems_createAnimationSystem__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(this);\n    this.targetMovementSystem = (0,_systems_createTargetMovementSystem__WEBPACK_IMPORTED_MODULE_9__.createTargetMovementSystem)(this, this.lobbyScene.socket);\n    this.resourceSpriteSystem = (0,_systems_createResourceSpriteSystem__WEBPACK_IMPORTED_MODULE_12__.createResourceSpriteSystem)(this); //Build Map\n\n    const map = this.make.tilemap({\n      key: 'forestkey',\n      tileWidth: 16,\n      tileHeight: 16\n    });\n    const tileset = map.addTilesetImage('atlas', 'atlas');\n    map.createLayer('piso', tileset, 0, 0);\n    map.createLayer('caminos', tileset, 0, 0);\n    map.createLayer('plantas', tileset, 0, 0);\n    map.createLayer('construcciones', tileset, 0, 0); // Crete player Animations\n\n    (0,_systems_playerSpritesheetAnimations__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this); //Restrict camera maximum movement\n\n    this.cameras.main.setBounds(0, 0, 1000, 1000); //Disable right click context menu\n\n    this.input.mouse.disableContextMenu();\n    setInterval(() => {\n      if (!this.world || !this.spriteSystem || !this.entitySystem || !this.targetMovementSystem || !this.timeSystem) {\n        // console.log('entra aca', !this.world || !this.spriteSystem || this.playerSystem || this.targetMovementSystem)\n        return;\n      }\n\n      this.itemsSystem(this.world);\n      this.timeSystem(this.world);\n      this.entitySystem(this.world);\n      this.spriteSystem(this.world);\n      this.healthBarSystem(this.world);\n      this.resourceSpriteSystem(this.world);\n      this.skillsSystem(this.world);\n      this.targetMovementSystem(this.world);\n      this.gameControllerSystem(this.world);\n      this.animationSystem(this.world);\n    }, window.acropolis.timeSystem.frameRate);\n  }\n\n}\n\n//# sourceURL=webpack://acropolis/./src/game/scenes/Game.ts?");

/***/ }),

/***/ "./src/game/systems/createAnimationSystem.ts":
/*!***************************************************!*\
  !*** ./src/game/systems/createAnimationSystem.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n/* harmony import */ var _playerPlayAnimations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerPlayAnimations */ \"./src/game/systems/playerPlayAnimations.ts\");\n\n\n\nconst createAnimationSystem = scene => {\n  const lastAnimation = [];\n  return (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineSystem)(world => {\n    // const currentPlayer =\n    //   window.acropolis.networkSystem.getLocalEntityByNetworkId(\n    //     window.acropolis.currentPlayerId\n    //   );\n    // if (lastAnimation !== currentPlayer.action) {\n    //   lastAnimation = currentPlayer.action;\n    //   playerPlayAnimation(scene, currentPlayer.action, currentPlayer);\n    // }\n    const allPlayers = window.acropolis.networkSystem.getNetworkEntities();\n\n    for (const [entityId, entity] of Object.entries(allPlayers)) {\n      if (entity.type === 'player' && lastAnimation[entityId] !== entity.action) {\n        // console.log('entityId', entityId, 'entity actuio', entity.action)\n        lastAnimation[entityId] = entity.action;\n        (0,_playerPlayAnimations__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(scene, entity.action, window.acropolis.networkSystem.getLocalEntityByNetworkId(entityId));\n      }\n    }\n\n    return world;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createAnimationSystem);\n\n//# sourceURL=webpack://acropolis/./src/game/systems/createAnimationSystem.ts?");

/***/ }),

/***/ "./src/game/systems/createEntitySystem.ts":
/*!************************************************!*\
  !*** ./src/game/systems/createEntitySystem.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createEntitySystem\": function() { return /* binding */ createEntitySystem; }\n/* harmony export */ });\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components */ \"./src/game/components/components.ts\");\n\n\nconst createEntitySystem = () => {\n  return (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineSystem)(world => {\n    const networkEntities = window.acropolis.networkSystem.getNetworkEntities();\n    const localEntitiesIds = window.acropolis.networkSystem.getNetworkEntitiesIDsByLocalID();\n    const localEntitiesByNetworkId = window.acropolis.networkSystem.getLocalEntitiesIDsByNetworkID();\n\n    for (const [entityId, entity] of Object.entries(networkEntities)) {\n      if (localEntitiesByNetworkId?.[entityId] >= 0 && (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.entityExists)(world, localEntitiesByNetworkId[entityId])) {\n        continue;\n      }\n\n      if (entity.type === 'player') {\n        const playerId = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.addEntity)(world);\n        const clonedEntity = JSON.parse(JSON.stringify(entity));\n        window.acropolis.networkSystem.setLocalEntityByLocalId(playerId, clonedEntity);\n        window.acropolis.networkSystem.setLocalEntityIDbyNetworkID(entityId, playerId);\n        window.acropolis.networkSystem.setNetworkEntityIDbyLocalID(entityId, playerId);\n        (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.addComponent)(world, _components_components__WEBPACK_IMPORTED_MODULE_1__.Position, playerId);\n        (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.addComponent)(world, _components_components__WEBPACK_IMPORTED_MODULE_1__.Body, playerId);\n        (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.addComponent)(world, _components_components__WEBPACK_IMPORTED_MODULE_1__.Shoes, playerId);\n        (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.addComponent)(world, _components_components__WEBPACK_IMPORTED_MODULE_1__.Hair, playerId);\n        (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.addComponent)(world, _components_components__WEBPACK_IMPORTED_MODULE_1__.Clothes, playerId);\n        (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.addComponent)(world, _components_components__WEBPACK_IMPORTED_MODULE_1__.TargetPosition, playerId);\n        (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.addComponent)(world, _components_components__WEBPACK_IMPORTED_MODULE_1__.Actions, playerId);\n      }\n\n      if (entity.type === 'resource') {\n        const resourceId = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.addEntity)(world);\n        const clonedEntity = JSON.parse(JSON.stringify(entity));\n        window.acropolis.networkSystem.setLocalEntityByLocalId(resourceId, clonedEntity);\n        window.acropolis.networkSystem.setLocalEntityIDbyNetworkID(entityId, resourceId);\n        window.acropolis.networkSystem.setNetworkEntityIDbyLocalID(entityId, resourceId);\n        (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.addComponent)(world, _components_components__WEBPACK_IMPORTED_MODULE_1__.Position, resourceId);\n        (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.addComponent)(world, _components_components__WEBPACK_IMPORTED_MODULE_1__.Resource, resourceId);\n      }\n    }\n\n    for (const [localId, networkId] of Object.entries(localEntitiesIds)) {\n      let exist = false;\n\n      for (const [entityId] of Object.entries(networkEntities)) {\n        if (networkId === entityId) {\n          exist = true;\n        }\n      }\n\n      if (!exist) {\n        (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.removeEntity)(world, Number(localId));\n      }\n    }\n\n    return world;\n  });\n};\n\n//# sourceURL=webpack://acropolis/./src/game/systems/createEntitySystem.ts?");

/***/ }),

/***/ "./src/game/systems/createGameControllerSystem.ts":
/*!********************************************************!*\
  !*** ./src/game/systems/createGameControllerSystem.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n/* harmony import */ var _utils_cooldownTimer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/cooldownTimer */ \"./src/game/utils/cooldownTimer.ts\");\n\n\n\nconst createGameControllerSystem = (scene, socket) => {\n  // const currentPlayer = player;\n  const inputKeys = 'Q,W,E,R,A,S,D,F';\n  const keys = scene.input.keyboard.addKeys(inputKeys);\n  const inputKeysList = inputKeys.split(',');\n  const cooldownTime = (0,_utils_cooldownTimer__WEBPACK_IMPORTED_MODULE_1__.cooldownTimer)(100);\n  const activePointer = scene.input.activePointer;\n  return (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineSystem)(world => {\n    const currentPlayer = window.acropolis.networkSystem.getLocalEntityByNetworkId(window.acropolis.currentPlayerId); // TODO use server time instead local time.\n\n    cooldownTime.timeCounter(window.acropolis.timeSystem.clientDeltaTimeNoFR); // console.log('ooldownTime.timer.isReady', cooldownTime.timer.isReady)\n    // console.log('gamecontroller timer', cooldownTime.timer.currentTime)\n    // console.log('gamecontroller timer', cooldownTime.timer.isReady)\n    // TODO Move to network System?\n\n    for (let i = 0; i < inputKeysList.length; i++) {\n      const key = inputKeysList[i];\n\n      if (keys[key].isDown) {\n        switch (key) {\n          case 'Q':\n            if (cooldownTime.timer.isReady) {\n              cooldownTime.trigger();\n              socket.emit('playerTarget', {\n                x: currentPlayer.position.x,\n                y: currentPlayer.position.y\n              });\n              socket.emit('playerAction', 'skill');\n              socket.emit('playerSkillPosition', {\n                x: activePointer.worldX,\n                y: activePointer.worldY\n              });\n            }\n\n            currentPlayer.action = 'skill';\n            break;\n\n          case 'W':\n            if (cooldownTime.timer.isReady) {\n              cooldownTime.trigger();\n              socket.emit('playerTarget', {\n                x: currentPlayer.position.x,\n                y: currentPlayer.position.y\n              });\n              socket.emit('playerAction', 'attack');\n            }\n\n            currentPlayer.action = 'attack';\n            break;\n\n          case 'E':\n            if (cooldownTime.timer.isReady) {\n              cooldownTime.trigger();\n              socket.emit('playerTarget', {\n                x: currentPlayer.position.x,\n                y: currentPlayer.position.y\n              });\n              socket.emit('playerAction', 'mining');\n            }\n\n            currentPlayer.action = 'mining';\n            break;\n\n          case 'R':\n            if (cooldownTime.timer.isReady) {\n              cooldownTime.trigger();\n              socket.emit('playerTarget', {\n                x: currentPlayer.position.x,\n                y: currentPlayer.position.y\n              });\n              socket.emit('playerAction', 'gathering');\n            }\n\n            currentPlayer.action = 'gathering';\n            break;\n\n          case 'A':\n            if (cooldownTime.timer.isReady) {\n              cooldownTime.trigger();\n              socket.emit('playerTarget', {\n                x: currentPlayer.position.x,\n                y: currentPlayer.position.y\n              });\n              socket.emit('playerAction', 'chopping');\n            }\n\n            currentPlayer.action = 'chopping';\n            break;\n\n          case 'S':\n            if (cooldownTime.timer.isReady) {\n              cooldownTime.trigger();\n              socket.emit('playerTarget', {\n                x: currentPlayer.position.x,\n                y: currentPlayer.position.y\n              });\n              socket.emit('playerAction', 'fishing');\n            }\n\n            currentPlayer.action = 'fishing';\n            break;\n\n          case 'D':\n            if (cooldownTime.timer.isReady) {\n              cooldownTime.trigger();\n              socket.emit('playerTarget', {\n                x: currentPlayer.position.x,\n                y: currentPlayer.position.y\n              });\n              socket.emit('playerAction', 'watering');\n            }\n\n            currentPlayer.action = 'watering';\n            break;\n\n          case 'F':\n            if (cooldownTime.timer.isReady) {\n              cooldownTime.trigger();\n              socket.emit('playerTarget', {\n                x: currentPlayer.position.x,\n                y: currentPlayer.position.y\n              });\n              socket.emit('playerAction', 'shoveling');\n            }\n\n            currentPlayer.action = 'shoveling';\n            break;\n\n          default:\n            break;\n        }\n      }\n    }\n\n    return world;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createGameControllerSystem);\n\n//# sourceURL=webpack://acropolis/./src/game/systems/createGameControllerSystem.ts?");

/***/ }),

/***/ "./src/game/systems/createHealthBarSystem.ts":
/*!***************************************************!*\
  !*** ./src/game/systems/createHealthBarSystem.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHealthBarSystem\": function() { return /* binding */ createHealthBarSystem; }\n/* harmony export */ });\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components */ \"./src/game/components/components.ts\");\n\n\nconst createHealthBarSystem = scene => {\n  // const spritesById = {}\n  const spriteQuery = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineQuery)([_components_components__WEBPACK_IMPORTED_MODULE_1__.Body]);\n  const spriteQueryEnter = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.enterQuery)(spriteQuery);\n  const spriteQueryExit = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.exitQuery)(spriteQuery);\n  const timeSystem = window.acropolis.timeSystem;\n  const getLocalEntityByLocalId = window.acropolis.networkSystem.getLocalEntityByLocalId;\n  return (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineSystem)(world => {\n    const enterEntities = spriteQueryEnter(world);\n\n    for (let i = 0; i < enterEntities.length; i++) {\n      const id = enterEntities[i];\n      const entity = getLocalEntityByLocalId(id);\n      entity.sprites.healthBarDecoration = scene.add.sprite(50, 15, 'healthBarDecoration');\n      entity.sprites.healthBarDecoration.setScrollFactor(0, 0);\n      entity.sprites.healthBar = scene.add.sprite(57, 15, 'healthBar');\n      entity.sprites.healthBar.setScrollFactor(0, 0);\n    }\n\n    const entities = spriteQuery(world);\n\n    for (let i = 0; i < entities.length; i++) {\n      const id = entities[i];\n      const entity = getLocalEntityByLocalId(id);\n      const networkEntity = window.acropolis.networkSystem.getNetworkEntityByLocalId(id);\n\n      if (networkEntity.healthPoints < 100) {\n        // console.log('orale perro', entity.healthPoints)\n        const multiplier = networkEntity.healthPoints / 100;\n        entity.healthPoints = networkEntity.healthPoints;\n        entity.sprites.healthBar.setCrop(0, 0, 50 * multiplier, 10);\n      }\n    }\n\n    const exitEntities = spriteQueryExit(world);\n\n    for (let i = 0; i < exitEntities.length; i++) {\n      const id = exitEntities[i];\n      const entity = getLocalEntityByLocalId(id);\n      const {\n        healthBar,\n        healthBarDecoration\n      } = entity.sprites;\n\n      if (!healthBar) {\n        continue;\n      }\n\n      healthBar.destroy();\n      healthBarDecoration.destroy();\n    }\n\n    return world;\n  });\n};\n\n//# sourceURL=webpack://acropolis/./src/game/systems/createHealthBarSystem.ts?");

/***/ }),

/***/ "./src/game/systems/createItemsSystem.ts":
/*!***********************************************!*\
  !*** ./src/game/systems/createItemsSystem.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createItemsSystem\": function() { return /* binding */ createItemsSystem; }\n/* harmony export */ });\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components */ \"./src/game/components/components.ts\");\n\n\nconst createItemsSystem = scene => {\n  // const spritesById = {}\n  const spriteQuery = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineQuery)([_components_components__WEBPACK_IMPORTED_MODULE_1__.Body]);\n  const spriteQueryEnter = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.enterQuery)(spriteQuery);\n  const spriteQueryExit = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.exitQuery)(spriteQuery);\n  const timeSystem = window.acropolis.timeSystem;\n  const getLocalEntityByLocalId = window.acropolis.networkSystem.getLocalEntityByLocalId;\n  let initBackpack = false;\n  let x = 288;\n  let y = 416;\n  let counter = 1;\n  const inventoryLayout = [];\n  let layoutX = 288;\n  let layoutY = 416;\n  let inventoryId = 1;\n  let entity;\n  let networkEntity;\n\n  const generateInventoryLayout = () => {\n    for (let y = 0; y < 4; y++) {\n      layoutX = 288;\n\n      for (let x = 0; x < 8; x++) {\n        inventoryLayout.push({\n          id: inventoryId,\n          position: {\n            x: layoutX,\n            y: layoutY\n          },\n          itemId: ''\n        });\n        layoutX += 32;\n        inventoryId++;\n      }\n\n      layoutY += 32;\n    }\n  };\n\n  const makeItemDraggable = (key, entity) => {\n    entity.sprites.items[key].sprite.setInteractive();\n    entity.sprites.items[key].sprite.setData({\n      id: key\n    });\n    entity.sprites.items[key].sprite.setScrollFactor(0, 0);\n    entity.sprites.items[key].qty.setData({\n      id: key\n    });\n    entity.sprites.items[key].qty.setInteractive({\n      draggable: true,\n      // SETUP hitarea\n      hitArea: new Phaser.Geom.Rectangle(-16, -16, 32, 32),\n      //Check hitarea\n      hitAreaCallback: function (hitArea, x, y) {\n        return Phaser.Geom.Rectangle.Contains(hitArea, x, y);\n      }\n    });\n    entity.sprites.items[key].qty.setScrollFactor(0, 0);\n    scene.input.setDraggable(entity.sprites.items[key].sprite);\n  };\n\n  const updateLayoutCounter = () => {\n    x += 32;\n    counter++;\n\n    if (counter > 8) {\n      y += 32;\n      x = 288;\n    }\n  };\n\n  const updateInventoryLayoutItem = (key, item) => {\n    inventoryLayout.forEach(inventoryItem => {\n      if (inventoryItem.position.x === item.sprite.x && inventoryItem.position.y === item.sprite.y) {\n        inventoryItem.itemId = key;\n      }\n    });\n  };\n\n  const setItemImage = (key, entity) => {\n    switch (key) {\n      case 'basicWood':\n        entity.sprites.items[key].sprite.setFrame(16 * 60 - 2);\n        break;\n\n      case 'basicStone':\n        entity.sprites.items[key].sprite.setFrame(16 * 54 - 5);\n        break;\n\n      case 'basicHerb':\n        entity.sprites.items[key].sprite.setFrame(16 * 18);\n        break;\n\n      default:\n        break;\n    }\n  };\n\n  const manageDnDInventory = () => {\n    scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {\n      if (dragX >= 288 && dragX <= 512 && dragY >= 416 && dragY <= 512) {\n        gameObject.x = Phaser.Math.Snap.To(dragX, 32);\n        gameObject.y = Phaser.Math.Snap.To(dragY, 32);\n        inventoryLayout.forEach(inventoryItem => {\n          if (inventoryItem.position.y === gameObject.y && inventoryItem.position.x === gameObject.x && inventoryItem.itemId // y tiene item\n          ) {\n            const currentItemInventory = inventoryLayout.find(invItem => invItem.itemId === gameObject.getData('id'));\n\n            if (currentItemInventory) {\n              const itemId = currentItemInventory.itemId;\n              const itemToUpdate = entity.sprites.items[inventoryItem.itemId];\n              itemToUpdate.sprite.x = currentItemInventory.position.x;\n              itemToUpdate.sprite.y = currentItemInventory.position.y;\n              itemToUpdate.qty.x = currentItemInventory.position.x;\n              itemToUpdate.qty.y = currentItemInventory.position.y;\n              currentItemInventory.itemId = inventoryItem.itemId;\n              inventoryItem.itemId = itemId;\n            }\n          } else if (inventoryItem.position.y === gameObject.y && inventoryItem.position.x === gameObject.x) {\n            const currentItemInventory = inventoryLayout.find(invItem => invItem.itemId === gameObject.getData('id'));\n            inventoryItem.itemId = gameObject.getData('id');\n            currentItemInventory.itemId = ''; // console.log('Inventory Layout',inventoryLayout)\n          }\n        });\n      }\n    });\n  };\n\n  const createBackPackInventory = entity => {\n    entity.sprites.inventory = scene.add.sprite(400, 370, 'inventory');\n    entity.sprites.backpack = scene.add.sprite(575, 575, 'backpack');\n    scene.input.topOnly = false;\n    entity.sprites.backpack.setScrollFactor(0, 0);\n    entity.sprites.backpack.setInteractive();\n    window.acropolis.inventory = {};\n    window.acropolis.inventory.inventoryOpen = true;\n    entity.sprites.inventory.setScrollFactor(0, 0);\n    entity.sprites.inventory.setInteractive();\n    entity.sprites.inventory.setScale(2);\n    entity.sprites.backpack.setName('backpack');\n  };\n\n  const openCloseBackpackInventory = () => {\n    scene.input.on('pointerdown', (pointer, objectsClicked) => {\n      if (objectsClicked?.[0]?.name === 'backpack') {\n        window.acropolis.inventory.inventoryOpen = !window.acropolis.inventory.inventoryOpen;\n\n        if (entity?.sprites?.items) {\n          for (const [, item] of Object.entries(entity.sprites.items)) {\n            item.sprite.setVisible(!item.sprite.visible);\n            item.qty.setVisible(!item.qty.visible);\n          }\n        }\n\n        entity.sprites.inventory.setVisible(!entity.sprites.inventory.visible);\n      }\n    });\n  };\n\n  return (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineSystem)(world => {\n    if (!window?.acropolis?.currentPlayerId) {\n      return;\n    } /// intentando hacer el ciclo de refrescamiento\n\n\n    entity = window.acropolis.networkSystem.getLocalEntityByNetworkId(window.acropolis.currentPlayerId);\n    networkEntity = window.acropolis.networkSystem.getNetworkEntityByNetworkID(window.acropolis.currentPlayerId); // Refresh items if doesn't have items.\n\n    if (entity?.items === null) {\n      entity.items = networkEntity.items;\n    }\n\n    if (initBackpack) {\n      if (networkEntity?.items) {\n        if (entity?.items) {\n          // Layout 16x64\n          for (const [key, networkItem] of Object.entries(networkEntity.items)) {\n            if (entity.sprites.items[key]) {\n              //actualizar el texto de cantidad de items\n              entity.sprites.items[key].qty.setText(networkItem.quantity);\n              continue;\n            }\n\n            const item = {\n              sprite: scene.add.sprite(x, y, 'icons'),\n              qty: scene.add.text(x, y, networkItem.quantity)\n            };\n            entity.sprites.items[key] = item;\n            const visibility = window.acropolis.inventory.inventoryOpen;\n            item.sprite.setVisible(visibility);\n            item.qty.setVisible(visibility);\n            updateInventoryLayoutItem(key, item);\n            setItemImage(key, entity);\n            makeItemDraggable(key, entity);\n            updateLayoutCounter();\n          }\n        }\n      }\n    } // qeui termina el intento\n\n\n    if (initBackpack) {\n      return;\n    }\n\n    if (!entity?.sprites) {\n      return;\n    }\n\n    initBackpack = true;\n    createBackPackInventory(entity);\n    generateInventoryLayout();\n    entity.sprites.items = {};\n\n    if (networkEntity?.items) {\n      //estop ver donde va\n      if (entity?.items) {\n        // Layout 16x64\n        for (const [key, networkItem] of Object.entries(networkEntity.items)) {\n          if (entity.sprites.items[key]) {\n            continue;\n          }\n\n          const item = {\n            sprite: scene.add.sprite(x, y, 'icons'),\n            qty: scene.add.text(x, y, networkItem.quantity)\n          };\n          entity.sprites.items[key] = item;\n          updateInventoryLayoutItem(key, item);\n          setItemImage(key, entity);\n          makeItemDraggable(key, entity);\n          updateLayoutCounter();\n        }\n      }\n    }\n\n    manageDnDInventory();\n    openCloseBackpackInventory(); // TODO actualizar los estupidos valores numericos de la base de datos porque claro que si!\n    // TODO revidsar porque se rompe el sistema de ordenamiento de items.\n    // if (entity?.sprites) {\n    //   networkEntity =\n    //     window.acropolis.networkSystem.getNetworkEntityByNetworkID(\n    //       window.acropolis.currentPlayerId\n    //     );\n    //     if(!networkEntity?.items) {\n    //       return\n    //     }\n    //     entity.sprites.items = {};\n    //   // Layout 16x64\n    //   for (const [key, networkItem] of Object.entries<any>(\n    //     networkEntity.items\n    //   )) {\n    //     // console.log(networkItem);\n    //     if (!entity.sprites.items[key]) {\n    //       const item = {\n    //         sprite: scene.add.sprite(x, y, 'icons'),\n    //         qty: scene.add.text(x, y, networkItem.quantity)\n    //       };\n    //       item.sprite.setVisible(!item.sprite.visible);\n    //       item.qty.setVisible(!item.qty.visible);\n    //       entity.sprites.items[key] = item;\n    //       switch (key) {\n    //         case 'basicWood':\n    //           entity.sprites.items[key].sprite.setFrame(16 * 60 - 2);\n    //           break;\n    //         case 'basicStone':\n    //           entity.sprites.items[key].sprite.setFrame(16 * 54 - 5);\n    //           break;\n    //         case 'basicHerb':\n    //           entity.sprites.items[key].sprite.setFrame(16 * 18);\n    //           break;\n    //         default:\n    //           break;\n    //       }\n    //       scene.input.topOnly = false;\n    //       entity.sprites.items[key].sprite.setInteractive();\n    //       entity.sprites.items[key].sprite.setData({ id: key });\n    //       entity.sprites.items[key].sprite.setScrollFactor(0, 0);\n    //       entity.sprites.items[key].qty.setData({ id: key });\n    //       entity.sprites.items[key].qty.setInteractive({\n    //         draggable: true,\n    //         // SETUP hitarea\n    //         hitArea: new Phaser.Geom.Rectangle(-16, -16, 32, 32),\n    //         //Check hitarea\n    //         hitAreaCallback: function (hitArea, x, y) {\n    //           return Phaser.Geom.Rectangle.Contains(hitArea, x, y);\n    //         }\n    //       });\n    //       entity.sprites.items[key].qty.setScrollFactor(0, 0);\n    //       scene.input.setDraggable(entity.sprites.items[key].sprite);\n    //       x += 32;\n    //       counter++;\n    //       if (counter > 8) {\n    //         y += 32;\n    //         x = 288;\n    //       }\n    //     }\n    //   }\n    // }\n    // if (window.acropolis.currentPlayerId) {\n    //   const currentPlayer =\n    //     window.acropolis.networkSystem.getLocalEntityByNetworkId(\n    //       window.acropolis.currentPlayerId\n    //     );\n    //   const networkEntity =\n    //     window.acropolis.networkSystem.getNetworkEntityByNetworkID(\n    //       window.acropolis.currentPlayerId\n    //     );\n    //   if (currentPlayer) {\n    //     if (networkEntity.items) {\n    //       // Layout 16x64\n    //       // console.log('currentPlayer', networkEntity.items)\n    //       let x = 288;\n    //       let y = 416;\n    //       let counter = 1;\n    //       for (const [key, item] of Object.entries<any>(networkEntity.items)) {\n    //         if (!currentPlayer.sprites.items[key]) {\n    //           currentPlayer.sprites.items[key] = scene.add.sprite(\n    //             x,\n    //             y,\n    //             'icons'\n    //           );\n    //           currentPlayer.sprites.items[key].setVisible(false);\n    //           // currentPlayer.sprites.items[key].text = scene.add.text(288, 416, item);\n    //           //wood\n    //           switch (key) {\n    //             case 'basicWood':\n    //               currentPlayer.sprites.items[key].setFrame(16 * 60 - 2);\n    //               break;\n    //             case 'basicStone':\n    //               currentPlayer.sprites.items[key].setFrame(16 * 54 - 5);\n    //               break;\n    //             case 'basicHerb':\n    //               currentPlayer.sprites.items[key].setFrame(16 * 18);\n    //               break;\n    //             default:\n    //               break;\n    //           }\n    //           //stone\n    //           //herb\n    //           currentPlayer.sprites.items[key].setInteractive();\n    //           currentPlayer.sprites.items[key].setScrollFactor(0, 0);\n    //           scene.input.setDraggable(currentPlayer.sprites.items[key]);\n    //         }\n    //         x += 32;\n    //         counter++;\n    //         if (counter > 8) {\n    //           y += 32;\n    //           x = 288;\n    //         }\n    //       }\n    //     }\n    //   }\n    // }\n    // const exitEntities = spriteQueryExit(world);\n    // for (let i = 0; i < exitEntities.length; i++) {\n    //   const id = exitEntities[i];\n    //   const entity = getLocalEntityByLocalId(id);\n    //   const { wood, stone, herb } = entity.text;\n    //   if (!wood) {\n    //     continue;\n    //   }\n    //   wood.destroy();\n    //   stone.destroy();\n    //   herb.destroy();\n    // }\n\n    return world;\n  });\n};\n\n//# sourceURL=webpack://acropolis/./src/game/systems/createItemsSystem.ts?");

/***/ }),

/***/ "./src/game/systems/createResourceSpriteSystem.ts":
/*!********************************************************!*\
  !*** ./src/game/systems/createResourceSpriteSystem.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createResourceSpriteSystem\": function() { return /* binding */ createResourceSpriteSystem; }\n/* harmony export */ });\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components */ \"./src/game/components/components.ts\");\n/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\n\n\nconst createResourceSpriteSystem = scene => {\n  // const spritesById = {}\n  const resourceQuery = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineQuery)([_components_components__WEBPACK_IMPORTED_MODULE_1__.Resource]);\n  const resourceQueryEnter = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.enterQuery)(resourceQuery);\n  const resourceQueryExit = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.exitQuery)(resourceQuery);\n  const timeSystem = window.acropolis.timeSystem;\n  const getLocalEntityByLocalId = window.acropolis.networkSystem.getLocalEntityByLocalId;\n  return (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineSystem)(world => {\n    const enterEntities = resourceQueryEnter(world);\n\n    for (let i = 0; i < enterEntities.length; i++) {\n      const id = enterEntities[i];\n      const entity = getLocalEntityByLocalId(id); // console.log('entity', entity)\n\n      entity.sprites = {};\n\n      if (entity.category === 'tree') {\n        entity.sprites.body = scene.add.sprite(entity.position.x, entity.position.y - 15, 'trees');\n        entity.sprites.body.setScale(2);\n      }\n\n      if (entity.category === 'herb') {\n        console.log('pintalamadre');\n        entity.sprites.body = scene.add.sprite(entity.position.x, entity.position.y - 5, 'globalNature');\n        entity.sprites.body.setFrame(60);\n        entity.sprites.body.setScale(2);\n      }\n\n      if (entity.category === 'stone') {\n        console.log('pintalamadre');\n        entity.sprites.body = scene.add.sprite(entity.position.x, entity.position.y + 5, 'TXprops');\n        entity.sprites.body.setFrame(245);\n      }\n\n      if (entity.category === 'sand') {\n        console.log('pintalamadre');\n        entity.sprites.body = scene.add.sprite(entity.position.x, entity.position.y + 5, 'sand'); // entity.sprites.body.setFrame(4)\n      }\n\n      if (entity.category === 'animal') {\n        console.log('pintalamadre234');\n        entity.sprites.body = scene.add.sprite(entity.position.x, entity.position.y + 5, 'chicken');\n        entity.sprites.body.setFrame(4);\n        const animatedChicken = {\n          key: 'animatedChicken',\n          frames: scene.anims.generateFrameNumbers('chicken', {\n            start: 1,\n            end: 4\n          }),\n          frameRate: 4,\n          repeat: -1\n        };\n        scene.anims.create(animatedChicken);\n        setTimeout(() => {\n          entity.sprites.body.play({\n            key: 'animatedChicken'\n          });\n        }, 1000);\n      }\n\n      if (entity.category === 'crop') {\n        console.log('pintalamadre234');\n        entity.sprites.body = scene.add.sprite(entity.position.x, entity.position.y + 5, 'crops');\n        entity.sprites.body.setFrame(4);\n        const animatedCrop = {\n          key: 'animatedCrop',\n          frames: scene.anims.generateFrameNumbers('crops', {\n            start: 1,\n            end: 5\n          }),\n          frameRate: 0.1,\n          repeat: -1\n        };\n        scene.anims.create(animatedCrop);\n        setTimeout(() => {\n          entity.sprites.body.play({\n            key: 'animatedCrop'\n          });\n        }, 1000);\n      } // !Important To set multiple resources you can select a frame and change widh and height or without for default\n      // if(id === 0) {\n      //   entity.sprites.body.setFrame(2, widht, height)\n      //   entity.sprites.body.setFrame(2, widht, height)\n      // }\n\n    }\n\n    const entities = resourceQuery(world);\n\n    for (let i = 0; i < entities.length; i++) {\n      const id = entities[i];\n      const entity = getLocalEntityByLocalId(id);\n      const {\n        body\n      } = entity.sprites;\n\n      if (!body) {\n        continue;\n      }\n\n      if (entity.category === 'tree') {\n        body.x = entity.position.x;\n        body.y = entity.position.y - 15;\n      }\n\n      if (entity.category === 'herb') {\n        body.x = entity.position.x;\n        body.y = entity.position.y;\n      }\n    }\n\n    const exitEntities = resourceQueryExit(world);\n\n    for (let i = 0; i < exitEntities.length; i++) {\n      const id = exitEntities[i];\n      const entity = getLocalEntityByLocalId(id);\n      const {\n        body,\n        clothes,\n        shoes\n      } = entity.sprites;\n      console.log('resourceQuery Exit');\n\n      if (!body) {\n        continue;\n      }\n\n      body.destroy();\n    }\n\n    return world;\n  });\n};\n\n//# sourceURL=webpack://acropolis/./src/game/systems/createResourceSpriteSystem.ts?");

/***/ }),

/***/ "./src/game/systems/createSkillsSystem.ts":
/*!************************************************!*\
  !*** ./src/game/systems/createSkillsSystem.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSkillsSystem\": function() { return /* binding */ createSkillsSystem; }\n/* harmony export */ });\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\n\nconst createSkillsSystem = scene => {\n  return (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineSystem)(world => {\n    const networkEntities = window.acropolis.networkSystem.getNetworkEntities();\n\n    for (const [entityId, entity] of Object.entries(networkEntities)) {\n      const localEntity = window.acropolis.networkSystem.getLocalEntityByNetworkId(entityId);\n\n      if (entity?.skillPosition) {\n        if (!localEntity?.skill) {\n          console.log('crea el puto skill');\n          localEntity.skill = {};\n          localEntity.sprites.skill = scene.add.sprite(entity.skillPosition.x, entity.skillPosition.y, 'balla');\n        }\n      } else if (localEntity?.skill) {\n        console.log('destroye el puto skill');\n        localEntity.sprites.skill.destroy();\n        localEntity.skill = null;\n      }\n    }\n\n    return world;\n  });\n};\n\n//# sourceURL=webpack://acropolis/./src/game/systems/createSkillsSystem.ts?");

/***/ }),

/***/ "./src/game/systems/createSpriteSystem.ts":
/*!************************************************!*\
  !*** ./src/game/systems/createSpriteSystem.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSpriteSystem\": function() { return /* binding */ createSpriteSystem; }\n/* harmony export */ });\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components */ \"./src/game/components/components.ts\");\n/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\n\n\nconst createSpriteSystem = (scene, textures) => {\n  // const spritesById = {}\n  const spriteQuery = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineQuery)([_components_components__WEBPACK_IMPORTED_MODULE_1__.Body]);\n  const spriteQueryEnter = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.enterQuery)(spriteQuery);\n  const spriteQueryExit = (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.exitQuery)(spriteQuery);\n  const timeSystem = window.acropolis.timeSystem;\n  const getLocalEntityByLocalId = window.acropolis.networkSystem.getLocalEntityByLocalId;\n  return (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineSystem)(world => {\n    const enterEntities = spriteQueryEnter(world);\n\n    for (let i = 0; i < enterEntities.length; i++) {\n      const id = enterEntities[i];\n      const entity = getLocalEntityByLocalId(id);\n      const networkEntity = window.acropolis.networkSystem.getNetworkEntityByLocalId(id);\n      entity.sprites = {};\n      entity.sprites.body = scene.add.sprite(0, 0, 'bodySpriteSheet');\n      entity.sprites.clothes = scene.add.sprite(0, 0, 'clothesSpriteSheet');\n      entity.sprites.shoes = scene.add.sprite(0, 0, 'shoesSpriteSheet');\n      entity.sprites.hair = scene.add.sprite(0, 0, 'gentlemanHairSpriteSheet');\n      _components_components__WEBPACK_IMPORTED_MODULE_1__.Position.x[id] = networkEntity.position.x;\n      _components_components__WEBPACK_IMPORTED_MODULE_1__.Position.y[id] = networkEntity.position.y;\n      entity.position.x = _components_components__WEBPACK_IMPORTED_MODULE_1__.Position.x[id];\n      entity.position.y = _components_components__WEBPACK_IMPORTED_MODULE_1__.Position.y[id]; // console.log('el current player',window.acropolis.currentPlayerId, entity.id, )\n    }\n\n    const entities = spriteQuery(world);\n\n    for (let i = 0; i < entities.length; i++) {\n      const id = entities[i];\n      const entity = getLocalEntityByLocalId(id);\n      const {\n        body,\n        clothes,\n        shoes,\n        hair\n      } = entity.sprites;\n\n      if (!body) {\n        continue;\n      }\n\n      body.x = _components_components__WEBPACK_IMPORTED_MODULE_1__.Position.x[id];\n      body.y = _components_components__WEBPACK_IMPORTED_MODULE_1__.Position.y[id];\n      clothes.x = _components_components__WEBPACK_IMPORTED_MODULE_1__.Position.x[id];\n      clothes.y = _components_components__WEBPACK_IMPORTED_MODULE_1__.Position.y[id];\n      shoes.x = _components_components__WEBPACK_IMPORTED_MODULE_1__.Position.x[id];\n      shoes.y = _components_components__WEBPACK_IMPORTED_MODULE_1__.Position.y[id];\n      hair.x = _components_components__WEBPACK_IMPORTED_MODULE_1__.Position.x[id];\n      hair.y = _components_components__WEBPACK_IMPORTED_MODULE_1__.Position.y[id];\n      entity.position.x = _components_components__WEBPACK_IMPORTED_MODULE_1__.Position.x[id];\n      entity.position.y = _components_components__WEBPACK_IMPORTED_MODULE_1__.Position.y[id];\n\n      if (window.acropolis.currentPlayerId === entity.id) {\n        scene.cameras.main.startFollow(entity.sprites.body, true, timeSystem.clientDeltaTime * timeSystem.correction, timeSystem.clientDeltaTime * timeSystem.correction);\n        scene.cameras.main.zoom = 1;\n        scene.cameras.main.roundPixels = true; // scene.cameras.main.startFollow\n        // console.log(entity.position.x, entity.position.y)\n      } // console.log\n      // scene.cameras.main.x = entity.position.x\n      // scene.cameras.main.y = entity.position.y\n\n    }\n\n    const exitEntities = spriteQueryExit(world);\n\n    for (let i = 0; i < exitEntities.length; i++) {\n      const id = exitEntities[i];\n      const entity = getLocalEntityByLocalId(id);\n      const {\n        body,\n        clothes,\n        shoes,\n        hair\n      } = entity.sprites;\n      console.log('spriteQuery Exit');\n\n      if (!body) {\n        continue;\n      }\n\n      body.destroy();\n      clothes.destroy();\n      shoes.destroy();\n      hair.destroy();\n    }\n\n    return world;\n  });\n};\n\n//# sourceURL=webpack://acropolis/./src/game/systems/createSpriteSystem.ts?");

/***/ }),

/***/ "./src/game/systems/createTargetMovementSystem.ts":
/*!********************************************************!*\
  !*** ./src/game/systems/createTargetMovementSystem.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTargetMovementSystem\": function() { return /* binding */ createTargetMovementSystem; }\n/* harmony export */ });\n/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/components */ \"./src/game/components/components.ts\");\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n/* harmony import */ var _utils_transformManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/transformManager */ \"./src/game/utils/transformManager.ts\");\n/* harmony import */ var _flipPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flipPlayer */ \"./src/game/systems/flipPlayer.ts\");\n/* harmony import */ var _utils_cooldownTimer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/cooldownTimer */ \"./src/game/utils/cooldownTimer.ts\");\n\n\n\n\n\nconst createTargetMovementSystem = (scene, socket) => {\n  const movementQuery = (0,bitecs__WEBPACK_IMPORTED_MODULE_1__.defineQuery)([_components_components__WEBPACK_IMPORTED_MODULE_0__.TargetPosition, _components_components__WEBPACK_IMPORTED_MODULE_0__.Position]);\n  const activePointer = scene.input.activePointer;\n  const cooldownTime = (0,_utils_cooldownTimer__WEBPACK_IMPORTED_MODULE_4__.cooldownTimer)(100); // console.log('madres', window.acropolis.timeSystem.clientDeltaTimeNoFR)\n  // let animation = null;\n\n  return (0,bitecs__WEBPACK_IMPORTED_MODULE_1__.defineSystem)(world => {\n    cooldownTime.timeCounter(window.acropolis.timeSystem.clientDeltaTimeNoFR); // console.log('targetMovement', cooldownTime.timer.currentTime)\n    // console.log('targetMovement', cooldownTime.timer.isReady)\n\n    const clientDeltaTime = window.acropolis.timeSystem.clientDeltaTime;\n    const entities = movementQuery(world);\n\n    for (let i = 0; i < entities.length; i++) {\n      const id = entities[i];\n      const entity = window.acropolis.networkSystem.getNetworkEntityByLocalId(id);\n\n      if (!entity || window?.acropolis?.inventory?.inventoryOpen) {\n        continue;\n      } // console.log('position', entity.position.x, entity.position.y)\n      // !important the lerp is causing issues when switching tabs because delta time removing becuase its worst ATM\n      //  Position.x[id] = lerp(Position.x[id], entity.position.x, clientDeltaTime);\n      //  Position.y[id] = lerp(Position.y[id], entity.position.y, clientDeltaTime);\n\n\n      _components_components__WEBPACK_IMPORTED_MODULE_0__.Position.x[id] = entity.position.x;\n      _components_components__WEBPACK_IMPORTED_MODULE_0__.Position.y[id] = entity.position.y;\n      const localEntity = window.acropolis.networkSystem.getLocalEntityByLocalId(id);\n\n      if (!localEntity?.sprites?.body) {\n        continue;\n      } // !TODO move to animation system\n\n\n      const distance = (0,_utils_transformManager__WEBPACK_IMPORTED_MODULE_2__.getDistance)(localEntity.sprites.body, entity.target); // console.log('distance', distance)\n\n      if (localEntity.action !== 'running' && distance > 1) {\n        localEntity.action = 'running';\n      }\n\n      if (localEntity.action !== 'idle' && distance < 1) {\n        localEntity.action = 'idle';\n      }\n\n      if (localEntity.sprites.body.x < entity.target.x) {\n        (0,_flipPlayer__WEBPACK_IMPORTED_MODULE_3__.flipPlayerX)(localEntity.sprites);\n      } else {\n        (0,_flipPlayer__WEBPACK_IMPORTED_MODULE_3__.flipPlayerX)(localEntity.sprites, true);\n      }\n\n      if (activePointer.leftButtonDown() && !activePointer.leftButtonReleased() && cooldownTime.timer.isReady) {\n        cooldownTime.trigger();\n\n        if (localEntity.sprites.body.x < activePointer.worldX) {\n          (0,_flipPlayer__WEBPACK_IMPORTED_MODULE_3__.flipPlayerX)(localEntity.sprites);\n        } else {\n          (0,_flipPlayer__WEBPACK_IMPORTED_MODULE_3__.flipPlayerX)(localEntity.sprites, true);\n        }\n\n        if (activePointer.y > 550 && activePointer.x > 550) {\n          return;\n        }\n\n        socket.emit('playerTarget', {\n          x: Math.round(activePointer.worldX),\n          y: Math.round(activePointer.worldY)\n        });\n      }\n    }\n\n    return world;\n  });\n};\n\n//# sourceURL=webpack://acropolis/./src/game/systems/createTargetMovementSystem.ts?");

/***/ }),

/***/ "./src/game/systems/createTimeSystem.ts":
/*!**********************************************!*\
  !*** ./src/game/systems/createTimeSystem.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTimeSystem\": function() { return /* binding */ createTimeSystem; }\n/* harmony export */ });\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n\nconst createTimeSystem = () => {\n  window.acropolis.timeSystem = {};\n  const timeSystem = window.acropolis.timeSystem; // window.acropolis.timeSystem.frameRate = 1000/60\n\n  timeSystem.frameRate = 1000 / 60;\n  timeSystem.clientDeltaTime = 1;\n  timeSystem.clientLastUpdate = Date.now();\n  timeSystem.clientLastDeltaTime = 1;\n  timeSystem.clientDeltaTimeNoFR = 0;\n  return (0,bitecs__WEBPACK_IMPORTED_MODULE_0__.defineSystem)(world => {\n    const clientNow = Date.now();\n    timeSystem.clientDeltaTimeNoFR = clientNow - timeSystem.clientLastUpdate;\n    timeSystem.clientDeltaTime = (clientNow - timeSystem.clientLastUpdate) / timeSystem.frameRate;\n    timeSystem.clientLastUpdate = clientNow;\n    timeSystem.correction = timeSystem.clientDeltaTime / timeSystem.clientLastDeltaTime;\n    timeSystem.clientLastDeltaTime = timeSystem.clientDeltaTime;\n    return world;\n  });\n};\n\n//# sourceURL=webpack://acropolis/./src/game/systems/createTimeSystem.ts?");

/***/ }),

/***/ "./src/game/systems/flipPlayer.ts":
/*!****************************************!*\
  !*** ./src/game/systems/flipPlayer.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"flipPlayerX\": function() { return /* binding */ flipPlayerX; },\n/* harmony export */   \"flipPlayerY\": function() { return /* binding */ flipPlayerY; }\n/* harmony export */ });\nconst flipPlayerX = (sprites, flip = false) => {\n  for (const [key] of Object.entries(sprites)) {\n    if (key === 'body' || key === 'clothes' || key === 'shoes' || key === 'hair') {\n      sprites[key].flipX = flip;\n    }\n  }\n};\nconst flipPlayerY = (sprites, flip = false) => {\n  for (const [key] of Object.entries(sprites)) {\n    sprites[key].flipY = flip;\n  }\n};\n\n//# sourceURL=webpack://acropolis/./src/game/systems/flipPlayer.ts?");

/***/ }),

/***/ "./src/game/systems/loadingBar.ts":
/*!****************************************!*\
  !*** ./src/game/systems/loadingBar.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\nconst loadingBar = scene => {\n  const progressBar = scene.add.graphics();\n  const progressBox = scene.add.graphics();\n  const text = scene.add.text(170, 240, 'Loading Acropolis...');\n  progressBox.fillStyle(0x222222, 0.8);\n  progressBox.fillRect(0, 270, 600, 50);\n  scene.load.on('progress', function (value) {\n    console.log(value);\n    progressBar.clear();\n    progressBar.fillStyle(0xffffff, 1);\n    progressBar.fillRect(10, 280, 590 * value, 30);\n  });\n  scene.load.on('fileprogress', function (file) {\n    console.log(file.src);\n  });\n  scene.load.on('complete', function () {\n    console.log('complete');\n    progressBar.destroy();\n    progressBox.destroy();\n    text.destroy();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadingBar);\n\n//# sourceURL=webpack://acropolis/./src/game/systems/loadingBar.ts?");

/***/ }),

/***/ "./src/game/systems/playerPlayAnimations.ts":
/*!**************************************************!*\
  !*** ./src/game/systems/playerPlayAnimations.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst playerPlayAnimation = (scene, animationKey, playerInstance) => {\n  switch (animationKey) {\n    case 'running':\n      playerInstance.sprites.body.play({\n        key: 'running'\n      });\n      playerInstance.sprites.shoes.play({\n        key: 'runningShoes'\n      });\n      playerInstance.sprites.hair.play({\n        key: 'runningHair'\n      });\n      playerInstance.sprites.clothes.play({\n        key: 'runningClothes'\n      });\n      break;\n\n    case 'idle':\n      playerInstance.sprites.body.play({\n        key: 'idle'\n      });\n      playerInstance.sprites.shoes.play({\n        key: 'idleShoes'\n      });\n      playerInstance.sprites.hair.play({\n        key: 'idleHair'\n      });\n      playerInstance.sprites.clothes.play({\n        key: 'idleClothes'\n      });\n      break;\n\n    case 'attack':\n      playerInstance.sprites.body.play({\n        key: 'attack'\n      });\n      playerInstance.sprites.shoes.play({\n        key: 'attackShoes'\n      });\n      playerInstance.sprites.hair.play({\n        key: 'attackHair'\n      });\n      playerInstance.sprites.clothes.play({\n        key: 'attackClothes'\n      });\n      break;\n\n    case 'mining':\n      playerInstance.sprites.body.play({\n        key: 'mining'\n      });\n      playerInstance.sprites.shoes.play({\n        key: 'miningShoes'\n      });\n      playerInstance.sprites.hair.play({\n        key: 'miningHair'\n      });\n      playerInstance.sprites.clothes.play({\n        key: 'miningClothes'\n      });\n      break;\n\n    case 'gathering':\n      playerInstance.sprites.body.play({\n        key: 'gathering'\n      });\n      playerInstance.sprites.shoes.play({\n        key: 'gatheringShoes'\n      });\n      playerInstance.sprites.hair.play({\n        key: 'gatheringHair'\n      });\n      playerInstance.sprites.clothes.play({\n        key: 'gatheringClothes'\n      });\n      break;\n\n    case 'chopping':\n      playerInstance.sprites.body.play({\n        key: 'chopping'\n      });\n      playerInstance.sprites.shoes.play({\n        key: 'choppingShoes'\n      });\n      playerInstance.sprites.hair.play({\n        key: 'choppingHair'\n      });\n      playerInstance.sprites.clothes.play({\n        key: 'choppingClothes'\n      });\n      break;\n\n    case 'fishing':\n      playerInstance.sprites.body.play({\n        key: 'fishing'\n      });\n      playerInstance.sprites.shoes.play({\n        key: 'fishingShoes'\n      });\n      playerInstance.sprites.hair.play({\n        key: 'fishingHair'\n      });\n      playerInstance.sprites.clothes.play({\n        key: 'fishingClothes'\n      });\n      break;\n\n    case 'watering':\n      playerInstance.sprites.body.play({\n        key: 'watering'\n      });\n      playerInstance.sprites.shoes.play({\n        key: 'wateringShoes'\n      });\n      playerInstance.sprites.hair.play({\n        key: 'wateringHair'\n      });\n      playerInstance.sprites.clothes.play({\n        key: 'wateringClothes'\n      });\n      break;\n\n    case 'shoveling':\n      playerInstance.sprites.body.play({\n        key: 'shoveling'\n      });\n      playerInstance.sprites.shoes.play({\n        key: 'shovelingShoes'\n      });\n      playerInstance.sprites.hair.play({\n        key: 'shovelingHair'\n      });\n      playerInstance.sprites.clothes.play({\n        key: 'shovelingClothes'\n      });\n      break;\n\n    default:\n      break;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (playerPlayAnimation);\n\n//# sourceURL=webpack://acropolis/./src/game/systems/playerPlayAnimations.ts?");

/***/ }),

/***/ "./src/game/systems/playerSpritesheetAnimations.ts":
/*!*********************************************************!*\
  !*** ./src/game/systems/playerSpritesheetAnimations.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst animatedPlayer = scene => {\n  // Body\n  const running = {\n    key: 'running',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 128,\n      end: 135\n    }),\n    frameRate: 15,\n    repeat: -1\n  };\n  scene.anims.create(running);\n  const idle = {\n    key: 'idle',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      frames: [128]\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(idle);\n  const attack = {\n    key: 'attack',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 1152,\n      end: 1155\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(attack);\n  const mining = {\n    key: 'mining',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 8 * 8 * 31,\n      end: 8 * 8 * 31 + 4\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(mining);\n  const gathering = {\n    key: 'gathering',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 8 * 8 * 10,\n      end: 8 * 8 * 10 + 2\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(gathering);\n  const chopping = {\n    key: 'chopping',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 8 * 8 * 35,\n      end: 8 * 8 * 35 + 4\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(chopping);\n  const fishing = {\n    key: 'fishing',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 8 * 8 * 47,\n      end: 8 * 8 * 47 + 4\n    }),\n    frameRate: 7,\n    repeat: 0\n  };\n  scene.anims.create(fishing);\n  const watering = {\n    key: 'watering',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 8 * 8 * 39,\n      end: 8 * 8 * 39 + 1\n    }),\n    frameRate: 3,\n    repeat: -1\n  };\n  scene.anims.create(watering);\n  const shoveling = {\n    key: 'shoveling',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 8 * 8 * 43,\n      end: 8 * 8 * 43 + 4\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(shoveling); // Shoes\n\n  const runningShoes = {\n    key: 'runningShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 200,\n      end: 207\n    }),\n    frameRate: 15,\n    repeat: -1\n  };\n  scene.anims.create(runningShoes);\n  const idleShoes = {\n    key: 'idleShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      frames: [160]\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(idleShoes);\n  const attackShoes = {\n    key: 'attackShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 1440,\n      end: 1443\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(attackShoes);\n  const miningShoes = {\n    key: 'miningShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 2480,\n      end: 2483\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(miningShoes);\n  const gatheringShoes = {\n    key: 'gatheringShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 8 * 10 * 10,\n      end: 8 * 10 * 10 + 2\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(gatheringShoes);\n  const choppingShoes = {\n    key: 'choppingShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 8 * 10 * 35,\n      end: 8 * 10 * 35 + 4\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(choppingShoes);\n  const fishingShoes = {\n    key: 'fishingShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 8 * 10 * 47,\n      end: 8 * 10 * 47 + 4\n    }),\n    frameRate: 7,\n    repeat: 0\n  };\n  scene.anims.create(fishingShoes);\n  const wateringShoes = {\n    key: 'wateringShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 8 * 10 * 39,\n      end: 8 * 10 * 39\n    }),\n    frameRate: 3,\n    repeat: -1\n  };\n  scene.anims.create(wateringShoes);\n  const shovelingShoes = {\n    key: 'shovelingShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 8 * 10 * 43,\n      end: 8 * 10 * 43 + 4\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(shovelingShoes); //Hair\n\n  const runningHair = {\n    key: 'runningHair',\n    frames: scene.anims.generateFrameNumbers('gentlemanHairSpriteSheet', {\n      start: 8 * 14 * 2,\n      end: 8 * 14 * 2 + 7\n    }),\n    frameRate: 15,\n    repeat: -1\n  };\n  scene.anims.create(runningHair);\n  const idleHair = {\n    key: 'idleHair',\n    frames: scene.anims.generateFrameNumbers('gentlemanHairSpriteSheet', {\n      frames: [8 * 14 * 2]\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(idleHair);\n  const attackHair = {\n    key: 'attackHair',\n    frames: scene.anims.generateFrameNumbers('gentlemanHairSpriteSheet', {\n      start: 8 * 14 * 18,\n      end: 8 * 14 * 18 + 3\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(attackHair);\n  const miningHair = {\n    key: 'miningHair',\n    frames: scene.anims.generateFrameNumbers('gentlemanHairSpriteSheet', {\n      start: 8 * 14 * 31,\n      end: 8 * 14 * 31 + 4\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(miningHair);\n  const gatheringHair = {\n    key: 'gatheringHair',\n    frames: scene.anims.generateFrameNumbers('gentlemanHairSpriteSheet', {\n      start: 8 * 14 * 10,\n      end: 8 * 14 * 10 + 2\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(gatheringHair);\n  const choppingHair = {\n    key: 'choppingHair',\n    frames: scene.anims.generateFrameNumbers('gentlemanHairSpriteSheet', {\n      start: 8 * 14 * 35,\n      end: 8 * 14 * 35 + 4\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(choppingHair);\n  const fishingHair = {\n    key: 'fishingHair',\n    frames: scene.anims.generateFrameNumbers('gentlemanHairSpriteSheet', {\n      start: 8 * 14 * 47,\n      end: 8 * 14 * 47 + 4\n    }),\n    frameRate: 7,\n    repeat: 0\n  };\n  scene.anims.create(fishingHair);\n  const wateringHair = {\n    key: 'wateringHair',\n    frames: scene.anims.generateFrameNumbers('gentlemanHairSpriteSheet', {\n      start: 8 * 14 * 39,\n      end: 8 * 14 * 39\n    }),\n    frameRate: 3,\n    repeat: -1\n  };\n  scene.anims.create(wateringHair);\n  const shovelingHair = {\n    key: 'shovelingHair',\n    frames: scene.anims.generateFrameNumbers('gentlemanHairSpriteSheet', {\n      start: 8 * 14 * 43,\n      end: 8 * 14 * 43 + 4\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(shovelingHair); // Clothes\n\n  const runningClothes = {\n    key: 'runningClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 160,\n      end: 167\n    }),\n    frameRate: 15,\n    repeat: -1\n  };\n  scene.anims.create(runningClothes);\n  const idleClothes = {\n    key: 'idleClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      frames: [160]\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(idleClothes);\n  const attackClothes = {\n    key: 'attackClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 1440,\n      end: 1443\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(attackClothes);\n  const miningClothes = {\n    key: 'miningClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 2480,\n      end: 2483\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(miningClothes);\n  const gatheringClothes = {\n    key: 'gatheringClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 8 * 10 * 10,\n      end: 8 * 10 * 10 + 2\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(gatheringClothes);\n  const choppingClothes = {\n    key: 'choppingClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 8 * 10 * 35,\n      end: 8 * 10 * 35 + 4\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(choppingClothes);\n  const fishingClothes = {\n    key: 'fishingClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 8 * 10 * 47,\n      end: 8 * 10 * 47 + 4\n    }),\n    frameRate: 7,\n    repeat: 0\n  };\n  scene.anims.create(fishingClothes);\n  const wateringClothes = {\n    key: 'wateringClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 8 * 10 * 39,\n      end: 8 * 10 * 39 + 1\n    }),\n    frameRate: 3,\n    repeat: -1\n  };\n  scene.anims.create(wateringClothes);\n  const shovelingClothes = {\n    key: 'shovelingClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 8 * 10 * 43,\n      end: 8 * 10 * 43 + 4\n    }),\n    frameRate: 7,\n    repeat: -1\n  };\n  scene.anims.create(shovelingClothes);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (animatedPlayer);\n\n//# sourceURL=webpack://acropolis/./src/game/systems/playerSpritesheetAnimations.ts?");

/***/ }),

/***/ "./src/game/utils/cooldownTimer.ts":
/*!*****************************************!*\
  !*** ./src/game/utils/cooldownTimer.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cooldownTimer\": function() { return /* binding */ cooldownTimer; }\n/* harmony export */ });\n// const cooldownTimer = (cooldowne) => {\n//   let initTime = Date.now()\n//   const remainigTime = () => {\n//     let  counter = cooldowne - (Date.now() - initTime)\n//     if (counter < 0 ) {\n//       counter = cooldowne\n//       initTime = Date.now()\n//     }\n//     return  counter\n//   }\n//   return {\n//     remainigTime\n//   }\n// }\n// export default cooldownTimer\nconst cooldownTimer = cooldownTime => {\n  const timer = {\n    cooldownTime,\n    currentTime: cooldownTime,\n    isReady: true,\n    triggered: false\n  };\n\n  const timeCounter = deltaTime => {\n    if (timer.isReady && timer.triggered && timer.currentTime === cooldownTime) {\n      timer.isReady = false;\n      timer.currentTime = timer.cooldownTime;\n    } else if (!timer.isReady && timer.triggered) {\n      timer.currentTime = timer.currentTime - deltaTime;\n\n      if (timer.currentTime < 0) {\n        timer.currentTime = cooldownTime;\n        timer.triggered = false;\n        timer.isReady = true;\n      }\n    }\n  };\n\n  const trigger = () => {\n    timer.triggered = true;\n  };\n\n  return {\n    timer,\n    timeCounter,\n    trigger\n  };\n};\n\n//# sourceURL=webpack://acropolis/./src/game/utils/cooldownTimer.ts?");

/***/ }),

/***/ "./src/game/utils/stringHandler.ts":
/*!*****************************************!*\
  !*** ./src/game/utils/stringHandler.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pathHandler\": function() { return /* binding */ pathHandler; }\n/* harmony export */ });\nconst pathHandler = url => {\n  let pathPrefix = '';\n\n  if (({\"NODE_ENV\":\"development\",\"BASE_URL\":\"/\"}).ENVI === 'production') {\n    pathPrefix = '/game';\n  }\n\n  return pathPrefix + url;\n}; // export const pathHandler = (url) => {\n//   const pathPrefix = '/game';\n//   return pathPrefix + url;\n// };\n\n//# sourceURL=webpack://acropolis/./src/game/utils/stringHandler.ts?");

/***/ }),

/***/ "./src/game/utils/transformManager.ts":
/*!********************************************!*\
  !*** ./src/game/utils/transformManager.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDistance\": function() { return /* binding */ getDistance; },\n/* harmony export */   \"lerp\": function() { return /* binding */ lerp; }\n/* harmony export */ });\nconst lerp = (start, end, amt) => {\n  return (1 - amt) * start + amt * end;\n};\nconst getDistance = (Vector1, Vector2) => {\n  return Math.sqrt(Math.pow(Vector1.x - Vector2.x, 2) + Math.pow(Vector1.y - Vector2.y, 2));\n};\n\n//# sourceURL=webpack://acropolis/./src/game/utils/transformManager.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.ts\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).use(_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).mount('#app');\n\n//# sourceURL=webpack://acropolis/./src/main.ts?");

/***/ }),

/***/ "./src/router/index.ts":
/*!*****************************!*\
  !*** ./src/router/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/Home.vue */ \"./src/views/Home.vue\");\n\n\nconst routes = [{\n  path: '/',\n  name: 'Home',\n  component: _views_Home_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.createWebHashHistory)(),\n  routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack://acropolis/./src/router/index.ts?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AcropolisMain.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AcropolisMain.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_scenes_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/scenes/Game */ \"./src/game/scenes/Game.ts\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var web3_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3-token */ \"./node_modules/web3-token/dist/web3-token.umd.min.js\");\n/* harmony import */ var web3_token__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3_token__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _shared_networkUpdateStateSystem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/networkUpdateStateSystem */ \"../shared/networkUpdateStateSystem.js\");\n/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\n\n // import Web3 from 'web3';\n// import Web3Token from 'web3-token';\n\n //local\n//const socket = io();\n// prod\n\nlet socket;\n\nif (({\"NODE_ENV\":\"development\",\"BASE_URL\":\"/\"}).ENVI === 'production') {\n  socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(window.location.origin, {\n    path: '/gameSocket'\n  });\n} else {\n  socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // socket = io(window.location.origin, { path: '/gameSocket' });\n} // import TitleScreen from '../game/scenes/TileScreen'\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,vue__WEBPACK_IMPORTED_MODULE_5__.defineComponent)({\n  name: 'AcropolisMain',\n\n  data() {\n    return {\n      isLoggedIn: false,\n      loginText: 'Click here to Login!'\n    };\n  },\n\n  methods: {\n    initGame() {\n      // game.scene.add('titlescreen', TitleScreen)\n      const test = async () => {\n        await socket.once('connect', () => {\n          // console.log('connected');\n          socket.emit('register', socketId => {\n            console.log('socketId', socketId); // this.currentPlayerId = socketId;\n          }); //this.ball.anchor.set(0.5, 0.5);\n        }); // Connection to MetaMask wallet\n\n        const web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(window.ethereum);\n        await window.ethereum.request({\n          method: 'eth_requestAccounts'\n        }); // getting address from which we will sign message\n\n        const address = (await web3.eth.getAccounts())[0]; // generating a token with 1 day of expiration time\n\n        const token = await web3_token__WEBPACK_IMPORTED_MODULE_4___default().sign(msg => web3.eth.personal.sign(msg, address), '1d');\n        console.log(token);\n        socket.emit('login', token); // socket.emit('login');\n      };\n\n      test();\n    }\n\n  },\n\n  mounted() {\n    socket.on('loggedIn', data => {\n      const {\n        isLoggedIn,\n        entityId\n      } = data;\n      console.log('logeeasdfa', isLoggedIn); // !important prod\n\n      if (!isLoggedIn) {\n        this.loginText = 'Account already logged in!';\n        return;\n      }\n\n      window.acropolis = {};\n      window.acropolis.networkSystem = (0,_shared_networkUpdateStateSystem__WEBPACK_IMPORTED_MODULE_6__.networkUpdateStateSystem)(socket);\n      window.acropolis.currentPlayerId = entityId;\n      window.acropolis.socket = socket;\n      this.isLoggedIn = isLoggedIn; // const deviceWidth = window.innerWidth * window.devicePixelRatio\n      // const deviceHeight = window.innerHeight * window.devicePixelRatio\n      // const pahserCanvas =  Phaser.CANVAS\n\n      setTimeout(() => {\n        const config = {\n          type: (phaser__WEBPACK_IMPORTED_MODULE_0___default().AUTO),\n          // deviceWidth,\n          // deviceHeight,\n          // pahserCanvas,\n          scale: {\n            parent: 'phaser-example',\n            mode: (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scale.FIT),\n            width: 600,\n            height: 600\n          }\n        };\n        const game = new (phaser__WEBPACK_IMPORTED_MODULE_0___default().Game)(config);\n        game.scene.add('acropolisGame', _game_scenes_Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        game.scene.start('acropolisGame', {\n          socket\n        });\n      }, 3000);\n    });\n  }\n\n}));\n\n//# sourceURL=webpack://acropolis/./src/components/AcropolisMain.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache) {\n  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-view\");\n\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" <div id=\\\"nav\\\">\\n    <router-link to=\\\"/\\\">Home</router-link> |\\n    <router-link to=\\\"/about\\\">About</router-link>\\n  </div> \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)]);\n}\n\n//# sourceURL=webpack://acropolis/./src/App.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B4%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AcropolisMain.vue?vue&type=template&id=a20869de&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AcropolisMain.vue?vue&type=template&id=a20869de&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-a20869de\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\n\nconst _hoisted_1 = {\n  key: 0\n};\n\nconst _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", {\n  style: {\n    \"color\": \"#fff\",\n    \"text-align\": \"center\",\n    \"padding\": \"5px\",\n    \"max-width\": \"200px\",\n    \"margin\": \"0 auto\"\n  }\n}, \" Welcome to Acropolis MMORPG Beta Testing! \", -1\n/* HOISTED */\n));\n\nconst _hoisted_3 = {\n  key: 1\n};\n\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div style=\\\"text-align:center;margin:25px auto;\\\" data-v-a20869de><h3 style=\\\"color:#fff;\\\" data-v-a20869de>Acropolis Playgrounds BETA Development!</h3><div id=\\\"phaser-example\\\" style=\\\"width:100%;\\\" data-v-a20869de></div><h3 style=\\\"color:#fff;\\\" data-v-a20869de> Click anywhere to move around or press &quot;QWERASDF&quot; key for skills. </h3><a href=\\\"https://www.acropolisrpg.com/\\\" style=\\\"color:#fff;\\\" data-v-a20869de>Go to Acropolist home page</a></div><p style=\\\"color:#fff;text-align:center;\\\" data-v-a20869de> The first time you login you will receive a reward of 100 $ACR, be wise because that&#39;s the only currency that will be used inside and outside the game. </p><h3 style=\\\"color:#fff;text-align:center;\\\" data-v-a20869de> If you can&#39;t see the game screen refresh and login again! </h3><p style=\\\"color:#fff;text-align:center;\\\" data-v-a20869de> Server stats. <span id=\\\"online\\\" data-v-a20869de>0</span> users online. <span id=\\\"fps\\\" data-v-a20869de>0</span> server fps. <span id=\\\"worldX\\\" data-v-a20869de>0</span> server fps. <span id=\\\"worldY\\\" data-v-a20869de>0</span> server fps. </p>\", 4);\n\nconst _hoisted_8 = [_hoisted_4];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [!_ctx.isLoggedIn ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", {\n    style: {\n      \"color\": \"#fff\",\n      \"text-align\": \"center\",\n      \"border\": \"1px solid white\",\n      \"padding\": \"5px\",\n      \"max-width\": \"200px\",\n      \"margin\": \"0 auto\"\n    },\n    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.initGame && _ctx.initGame(...args))\n  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.loginText), 1\n  /* TEXT */\n  )])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_3, _hoisted_8))]);\n}\n\n//# sourceURL=webpack://acropolis/./src/components/AcropolisMain.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B4%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nbody{\\n  background: black;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://acropolis/./src/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AcropolisMain.vue?vue&type=style&index=0&id=a20869de&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AcropolisMain.vue?vue&type=style&index=0&id=a20869de&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nh3[data-v-a20869de] {\\n  margin: 40px 0 0;\\n}\\nul[data-v-a20869de] {\\n  list-style-type: none;\\n  padding: 0;\\n}\\nli[data-v-a20869de] {\\n  display: inline-block;\\n  margin: 0 10px;\\n}\\na[data-v-a20869de] {\\n  color: #42b983;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://acropolis/./src/components/AcropolisMain.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ \"./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\nconst script = {}\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(script, [['render',_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://acropolis/./src/App.vue?");

/***/ }),

/***/ "./src/components/AcropolisMain.vue":
/*!******************************************!*\
  !*** ./src/components/AcropolisMain.vue ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AcropolisMain_vue_vue_type_template_id_a20869de_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AcropolisMain.vue?vue&type=template&id=a20869de&scoped=true */ \"./src/components/AcropolisMain.vue?vue&type=template&id=a20869de&scoped=true\");\n/* harmony import */ var _AcropolisMain_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AcropolisMain.vue?vue&type=script&lang=js */ \"./src/components/AcropolisMain.vue?vue&type=script&lang=js\");\n/* harmony import */ var _AcropolisMain_vue_vue_type_style_index_0_id_a20869de_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AcropolisMain.vue?vue&type=style&index=0&id=a20869de&scoped=true&lang=css */ \"./src/components/AcropolisMain.vue?vue&type=style&index=0&id=a20869de&scoped=true&lang=css\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_AcropolisMain_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_AcropolisMain_vue_vue_type_template_id_a20869de_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-a20869de\"],['__file',\"src/components/AcropolisMain.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://acropolis/./src/components/AcropolisMain.vue?");

/***/ }),

/***/ "./src/views/Home.vue":
/*!****************************!*\
  !*** ./src/views/Home.vue ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_vue_vue_type_template_id_fae5bece_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=fae5bece&ts=true */ \"./src/views/Home.vue?vue&type=template&id=fae5bece&ts=true\");\n/* harmony import */ var _Home_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=ts */ \"./src/views/Home.vue?vue&type=script&lang=ts\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_Home_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Home_vue_vue_type_template_id_fae5bece_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/Home.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://acropolis/./src/views/Home.vue?");

/***/ }),

/***/ "./src/views/Home.vue?vue&type=script&lang=ts":
/*!****************************************************!*\
  !*** ./src/views/Home.vue?vue&type=script&lang=ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=script&lang=ts */ \"./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=script&lang=ts\");\n \n\n//# sourceURL=webpack://acropolis/./src/views/Home.vue?");

/***/ }),

/***/ "./src/views/Home.vue?vue&type=template&id=fae5bece&ts=true":
/*!******************************************************************!*\
  !*** ./src/views/Home.vue?vue&type=template&id=fae5bece&ts=true ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_fae5bece_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_fae5bece_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=template&id=fae5bece&ts=true */ \"./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=template&id=fae5bece&ts=true\");\n\n\n//# sourceURL=webpack://acropolis/./src/views/Home.vue?");

/***/ }),

/***/ "./src/components/AcropolisMain.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/components/AcropolisMain.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AcropolisMain_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AcropolisMain_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AcropolisMain.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AcropolisMain.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://acropolis/./src/components/AcropolisMain.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=7ba5bd90 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90\");\n\n\n//# sourceURL=webpack://acropolis/./src/App.vue?");

/***/ }),

/***/ "./src/components/AcropolisMain.vue?vue&type=template&id=a20869de&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/components/AcropolisMain.vue?vue&type=template&id=a20869de&scoped=true ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AcropolisMain_vue_vue_type_template_id_a20869de_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AcropolisMain_vue_vue_type_template_id_a20869de_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AcropolisMain.vue?vue&type=template&id=a20869de&scoped=true */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AcropolisMain.vue?vue&type=template&id=a20869de&scoped=true\");\n\n\n//# sourceURL=webpack://acropolis/./src/components/AcropolisMain.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!*****************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://acropolis/./src/App.vue?");

/***/ }),

/***/ "./src/components/AcropolisMain.vue?vue&type=style&index=0&id=a20869de&scoped=true&lang=css":
/*!**************************************************************************************************!*\
  !*** ./src/components/AcropolisMain.vue?vue&type=style&index=0&id=a20869de&scoped=true&lang=css ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AcropolisMain_vue_vue_type_style_index_0_id_a20869de_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AcropolisMain.vue?vue&type=style&index=0&id=a20869de&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AcropolisMain.vue?vue&type=style&index=0&id=a20869de&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AcropolisMain_vue_vue_type_style_index_0_id_a20869de_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AcropolisMain_vue_vue_type_style_index_0_id_a20869de_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AcropolisMain_vue_vue_type_style_index_0_id_a20869de_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AcropolisMain_vue_vue_type_style_index_0_id_a20869de_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://acropolis/./src/components/AcropolisMain.vue?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"7634ea42\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://acropolis/./src/App.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AcropolisMain.vue?vue&type=style&index=0&id=a20869de&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AcropolisMain.vue?vue&type=style&index=0&id=a20869de&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AcropolisMain.vue?vue&type=style&index=0&id=a20869de&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AcropolisMain.vue?vue&type=style&index=0&id=a20869de&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"0898b2a2\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://acropolis/./src/components/AcropolisMain.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "?1bfd":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

eval("/* (ignored) */\n\n//# sourceURL=webpack://acropolis/buffer_(ignored)?");

/***/ }),

/***/ "?2b7e":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

eval("/* (ignored) */\n\n//# sourceURL=webpack://acropolis/buffer_(ignored)?");

/***/ }),

/***/ "?f4e8":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

eval("/* (ignored) */\n\n//# sourceURL=webpack://acropolis/buffer_(ignored)?");

/***/ }),

/***/ "?8d7a":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (function() {

eval("/* (ignored) */\n\n//# sourceURL=webpack://acropolis/crypto_(ignored)?");

/***/ }),

/***/ "?8402":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

eval("/* (ignored) */\n\n//# sourceURL=webpack://acropolis/buffer_(ignored)?");

/***/ }),

/***/ "?ee7e":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

eval("/* (ignored) */\n\n//# sourceURL=webpack://acropolis/buffer_(ignored)?");

/***/ }),

/***/ "?22f5":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

eval("/* (ignored) */\n\n//# sourceURL=webpack://acropolis/buffer_(ignored)?");

/***/ }),

/***/ "?c852":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function() {

eval("/* (ignored) */\n\n//# sourceURL=webpack://acropolis/util_(ignored)?");

/***/ }),

/***/ "?8c28":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function() {

eval("/* (ignored) */\n\n//# sourceURL=webpack://acropolis/util_(ignored)?");

/***/ }),

/***/ "?ce10":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

eval("/* (ignored) */\n\n//# sourceURL=webpack://acropolis/buffer_(ignored)?");

/***/ }),

/***/ "?0089":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

eval("/* (ignored) */\n\n//# sourceURL=webpack://acropolis/buffer_(ignored)?");

/***/ }),

/***/ "?d460":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

eval("/* (ignored) */\n\n//# sourceURL=webpack://acropolis/buffer_(ignored)?");

/***/ }),

/***/ "../shared/networkUpdateStateSystem.js":
/*!*********************************************!*\
  !*** ../shared/networkUpdateStateSystem.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"networkUpdateStateSystem\": function() { return /* binding */ networkUpdateStateSystem; }\n/* harmony export */ });\n/* eslint-disable */\nconst networkUpdateStateSystem = socket => {\n  const networkEntitiesIDsByLocalID = {};\n  const localEntitiesIDsByNetworkID = {};\n  const localEntities = {}; // This is only read\n\n  let networkEntities = {};\n  socket.on('broadcastNetworkClient', data => {\n    networkEntities = data; // console.log('nwetworkentites', networkEntities)\n  });\n\n  const deleteNetworkEntityIDByLocalID = id => {\n    delete networkEntitiesIDsByLocalID[id];\n  };\n\n  const deleteLocalEntityIDByNetworkID = id => {\n    delete localEntitiesIDsByNetworkID[id];\n  };\n\n  const deleteLocalEntity = id => {\n    delete localEntities[id];\n  };\n\n  const setLocalEntityIDbyNetworkID = (networkId, localId) => {\n    localEntitiesIDsByNetworkID[networkId] = localId;\n  };\n\n  const getNetworkEntityByNetworkID = networkId => {\n    return networkEntities[networkId];\n  };\n\n  const getLocalEntityIDbyNetworkID = networkId => {\n    return localEntitiesIDsByNetworkID[networkId];\n  };\n\n  const getNetworkEntitiesIDsByLocalID = () => {\n    return networkEntitiesIDsByLocalID;\n  };\n\n  const getLocalEntitiesIDsByNetworkID = () => {\n    return localEntitiesIDsByNetworkID;\n  };\n\n  const setLocalEntityByLocalId = (id, entity) => {\n    localEntities[id] = entity;\n  };\n\n  const getLocalEntityByLocalId = id => {\n    const localEntity = localEntities[id];\n    return localEntity;\n  };\n\n  const getLocalEntityByNetworkId = id => {\n    // console.log('localEntities', localEntities)\n    const localEntity = localEntities[getLocalEntityIDbyNetworkID(id)];\n    return localEntity;\n  };\n\n  const getNetworkEntities = () => {\n    return networkEntities;\n  };\n\n  const getLocalEntities = () => {\n    return localEntities;\n  };\n\n  const setNetworkEntityIDbyLocalID = (networkId, localId) => {\n    networkEntitiesIDsByLocalID[localId] = networkId;\n  };\n\n  const getNetworkEntityIDbyLocalID = localId => {\n    return networkEntitiesIDsByLocalID[localId];\n  };\n\n  const getNetworkEntityByLocalId = id => {\n    const networkEntity = networkEntities[getNetworkEntityIDbyLocalID(id)];\n    return networkEntity;\n  };\n\n  return {\n    deleteNetworkEntityIDByLocalID,\n    deleteLocalEntityIDByNetworkID,\n    deleteLocalEntity,\n    getLocalEntitiesIDsByNetworkID,\n    getNetworkEntitiesIDsByLocalID,\n    // Server values must be only readable.\n    getNetworkEntities,\n    getNetworkEntityByLocalId,\n    getNetworkEntityByNetworkID,\n    // Local values can be written\n    getLocalEntities,\n    getLocalEntityByLocalId,\n    getLocalEntityByNetworkId,\n    setLocalEntityByLocalId,\n    // The glue between server and client.\n    setNetworkEntityIDbyLocalID,\n    getNetworkEntityIDbyLocalID,\n    getLocalEntityIDbyNetworkID,\n    setLocalEntityIDbyNetworkID\n  };\n};\n\n//# sourceURL=webpack://acropolis/../shared/networkUpdateStateSystem.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkacropolis"] = self["webpackChunkacropolis"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./src/main.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;