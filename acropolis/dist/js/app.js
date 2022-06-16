/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"about":"about"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Acropolis.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Acropolis.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ \"./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _game_scenes_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game/scenes/Game */ \"./src/game/scenes/Game.ts\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _game_systems_networkUpdateStateSystem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../game/systems/networkUpdateStateSystem */ \"./src/game/systems/networkUpdateStateSystem.ts\");\n\n\n\n // import Web3 from 'web3';\n// import Web3Token from 'web3-token';\n\n //local\n//const socket = io();\n// prod\n\nvar socket; // if (process.env.ENVI === 'production') {\n//   socket = io(window.location.origin, { path: '/gameSocket' });\n// } else {\n\nsocket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); //  socket = io(window.location.origin, { path: '/gameSocket' });\n// }\n// import TitleScreen from '../game/scenes/TileScreen'\n// import Web3 from 'web3';\n// import Web3Token from 'web3-token';\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vue__WEBPACK_IMPORTED_MODULE_5__[\"defineComponent\"])({\n  name: 'Acropolis',\n  data: function data() {\n    return {\n      isLoggedIn: false\n    };\n  },\n  methods: {\n    initGame: function initGame() {\n      // game.scene.add('titlescreen', TitleScreen)\n      var test = /*#__PURE__*/function () {\n        var _ref = Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().mark(function _callee() {\n          return Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  _context.next = 2;\n                  return socket.once('connect', function () {\n                    // console.log('connected');\n                    socket.emit('register', function (socketId) {\n                      console.log('socketId', socketId); // this.currentPlayerId = socketId;\n                    }); //this.ball.anchor.set(0.5, 0.5);\n                  });\n\n                case 2:\n                  // Connection to MetaMask wallet\n                  // const web3 = new Web3(window.ethereum);\n                  // await window.ethereum.request({ method: 'eth_requestAccounts' });\n                  // // getting address from which we will sign message\n                  // const address = (await web3.eth.getAccounts())[0];\n                  // // generating a token with 1 day of expiration time\n                  // const token = await Web3Token.sign(\n                  //   (msg) => web3.eth.personal.sign(msg, address),\n                  //   '1d'\n                  // );\n                  // console.log(token);\n                  // socket.emit('login', token);\n                  socket.emit('login');\n\n                case 3:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function test() {\n          return _ref.apply(this, arguments);\n        };\n      }();\n\n      test();\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    socket.on('loggedIn', function (isLoggedIn) {\n      window.acropolis = {};\n      window.acropolis.networkSystem = Object(_game_systems_networkUpdateStateSystem__WEBPACK_IMPORTED_MODULE_6__[\"networkUpdateStateSystem\"])(socket); // setInterval(() => {\n      // console.log(networkSystem.getLatestNetworkData())\n      // }, 500);\n\n      console.log('leand', isLoggedIn);\n      _this.isLoggedIn = isLoggedIn;\n      setTimeout(function () {\n        var config = {\n          type: phaser__WEBPACK_IMPORTED_MODULE_2___default.a.AUTO,\n          scale: {\n            parent: 'phaser-example',\n            mode: phaser__WEBPACK_IMPORTED_MODULE_2___default.a.Scale.FIT,\n            width: 600,\n            height: 600\n          }\n        };\n        var game = new phaser__WEBPACK_IMPORTED_MODULE_2___default.a.Game(config);\n        game.scene.add('acropolisGame', _game_scenes_Game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n        game.scene.start('acropolisGame', {\n          socket: socket\n        });\n      }, 3000);\n    });\n  }\n}));\n\n//# sourceURL=webpack:///./src/components/Acropolis.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Home.vue?vue&type=script&lang=ts":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/Home.vue?vue&type=script&lang=ts ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ \"./node_modules/@babel/runtime/helpers/esm/createSuper.js\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-class-component */ \"./node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js\");\n/* harmony import */ var _components_Acropolis_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Acropolis.vue */ \"./src/components/Acropolis.vue\");\n\n\n\n\n\n\n // @ is an alias to /src\n\nvar Home = /*#__PURE__*/function (_Vue) {\n  Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Home, _Vue);\n\n  var _super = Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Home);\n\n  function Home() {\n    Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Home);\n\n    return _super.apply(this, arguments);\n  }\n\n  return Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Home);\n}(vue_class_component__WEBPACK_IMPORTED_MODULE_5__[\"Vue\"]);\n\nHome = Object(tslib__WEBPACK_IMPORTED_MODULE_4__[\"__decorate\"])([Object(vue_class_component__WEBPACK_IMPORTED_MODULE_5__[\"Options\"])({\n  components: {\n    Acropolis: _components_Acropolis_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }\n})], Home);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/views/Home.vue?./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Home.vue?vue&type=template&id=fae5bece&ts=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-2!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/Home.vue?vue&type=template&id=fae5bece&ts=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"home\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_Acropolis = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"Acropolis\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_Acropolis)]);\n}\n\n//# sourceURL=webpack:///./src/views/Home.vue?./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-2!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache) {\n  var _component_router_view = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"router-view\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\" <div id=\\\"nav\\\">\\n    <router-link to=\\\"/\\\">Home</router-link> |\\n    <router-link to=\\\"/about\\\">About</router-link>\\n  </div> \"), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_view)]);\n}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Acropolis.vue?vue&type=template&id=5aa075b8&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Acropolis.vue?vue&type=template&id=5aa075b8&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nvar _withScopeId = function _withScopeId(n) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"pushScopeId\"])(\"data-v-5aa075b8\"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"popScopeId\"])(), n;\n};\n\nvar _hoisted_1 = {\n  key: 0\n};\n\nvar _hoisted_2 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h3\", {\n    style: {\n      \"color\": \"#fff\",\n      \"text-align\": \"center\",\n      \"padding\": \"5px\",\n      \"max-width\": \"200px\",\n      \"margin\": \"0 auto\"\n    }\n  }, \" Welcome to Acropolis MMORPG Beta Testing! \", -1\n  /* HOISTED */\n  );\n});\n\nvar _hoisted_3 = {\n  key: 1\n};\n\nvar _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createStaticVNode\"])(\"<div style=\\\"text-align:center;margin:25px auto;\\\" data-v-5aa075b8><h3 style=\\\"color:#fff;\\\" data-v-5aa075b8>Acropolis Playgrounds BETA Development!</h3><div id=\\\"phaser-example\\\" style=\\\"border-radius:100px;\\\" data-v-5aa075b8></div><h3 style=\\\"color:#fff;\\\" data-v-5aa075b8> Click anywhere to move around or press &quot;QWERASDF&quot; key for skills. </h3><a href=\\\"https://www.acropolisrpg.com/\\\" style=\\\"color:#fff;\\\" data-v-5aa075b8>Go to Acropolist home page</a></div><p style=\\\"color:#fff;text-align:center;\\\" data-v-5aa075b8> The first time you login you will receive a reward of 100 $ACR, be wise because that&#39;s the only currency that will be used inside and outside the game. </p><h3 style=\\\"color:#fff;text-align:center;\\\" data-v-5aa075b8> If you can&#39;t see the game screen refresh and login again! </h3><p style=\\\"color:#fff;text-align:center;\\\" data-v-5aa075b8> Server stats. <span id=\\\"online\\\" data-v-5aa075b8>0</span> users online. <span id=\\\"fps\\\" data-v-5aa075b8>0</span> server fps. <span id=\\\"worldX\\\" data-v-5aa075b8>0</span> server fps. <span id=\\\"worldY\\\" data-v-5aa075b8>0</span> server fps. </p>\", 4);\n\nvar _hoisted_8 = [_hoisted_4];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", null, [!_ctx.isLoggedIn ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, [_hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", {\n    style: {\n      \"color\": \"#fff\",\n      \"text-align\": \"center\",\n      \"border\": \"1px solid white\",\n      \"padding\": \"5px\",\n      \"max-width\": \"200px\",\n      \"margin\": \"0 auto\"\n    },\n    onClick: _cache[0] || (_cache[0] = function () {\n      return _ctx.initGame && _ctx.initGame.apply(_ctx, arguments);\n    })\n  }, \" Click here to Login! \")])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_3, _hoisted_8))]);\n}\n\n//# sourceURL=webpack:///./src/components/Acropolis.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\nbody{\\n  background: black;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Acropolis.vue?vue&type=style&index=0&id=5aa075b8&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Acropolis.vue?vue&type=style&index=0&id=5aa075b8&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\nh3[data-v-5aa075b8] {\\n  margin: 40px 0 0;\\n}\\nul[data-v-5aa075b8] {\\n  list-style-type: none;\\n  padding: 0;\\n}\\nli[data-v-5aa075b8] {\\n  display: inline-block;\\n  margin: 0 10px;\\n}\\na[data-v-5aa075b8] {\\n  color: #42b983;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Acropolis.vue?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader-v16/dist/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader-v16/dist??ref--1-1!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"77075db6\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Acropolis.vue?vue&type=style&index=0&id=5aa075b8&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Acropolis.vue?vue&type=style&index=0&id=5aa075b8&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./Acropolis.vue?vue&type=style&index=0&id=5aa075b8&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Acropolis.vue?vue&type=style&index=0&id=5aa075b8&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"98351af0\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Acropolis.vue?./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ \"./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\nconst script = {}\n\n\n\n\nconst __exports__ = /*#__PURE__*/C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(script, [['render',_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!*****************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--7-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader-v16/dist/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader-v16/dist??ref--1-1!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--13-0!../node_modules/babel-loader/lib!../node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader-v16/dist??ref--1-1!./App.vue?vue&type=template&id=7ba5bd90 */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/components/Acropolis.vue":
/*!**************************************!*\
  !*** ./src/components/Acropolis.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Acropolis_vue_vue_type_template_id_5aa075b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Acropolis.vue?vue&type=template&id=5aa075b8&scoped=true */ \"./src/components/Acropolis.vue?vue&type=template&id=5aa075b8&scoped=true\");\n/* harmony import */ var _Acropolis_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Acropolis.vue?vue&type=script&lang=js */ \"./src/components/Acropolis.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Acropolis_vue_vue_type_style_index_0_id_5aa075b8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Acropolis.vue?vue&type=style&index=0&id=5aa075b8&scoped=true&lang=css */ \"./src/components/Acropolis.vue?vue&type=style&index=0&id=5aa075b8&scoped=true&lang=css\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_Acropolis_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Acropolis_vue_vue_type_template_id_5aa075b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__scopeId',\"data-v-5aa075b8\"],['__file',\"src/components/Acropolis.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/components/Acropolis.vue?");

/***/ }),

/***/ "./src/components/Acropolis.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./src/components/Acropolis.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Acropolis_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./Acropolis.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Acropolis.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Acropolis_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/components/Acropolis.vue?");

/***/ }),

/***/ "./src/components/Acropolis.vue?vue&type=style&index=0&id=5aa075b8&scoped=true&lang=css":
/*!**********************************************************************************************!*\
  !*** ./src/components/Acropolis.vue?vue&type=style&index=0&id=5aa075b8&scoped=true&lang=css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Acropolis_vue_vue_type_style_index_0_id_5aa075b8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./Acropolis.vue?vue&type=style&index=0&id=5aa075b8&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Acropolis.vue?vue&type=style&index=0&id=5aa075b8&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Acropolis_vue_vue_type_style_index_0_id_5aa075b8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Acropolis_vue_vue_type_style_index_0_id_5aa075b8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Acropolis_vue_vue_type_style_index_0_id_5aa075b8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Acropolis_vue_vue_type_style_index_0_id_5aa075b8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/Acropolis.vue?");

/***/ }),

/***/ "./src/components/Acropolis.vue?vue&type=template&id=5aa075b8&scoped=true":
/*!********************************************************************************!*\
  !*** ./src/components/Acropolis.vue?vue&type=template&id=5aa075b8&scoped=true ***!
  \********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Acropolis_vue_vue_type_template_id_5aa075b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./Acropolis.vue?vue&type=template&id=5aa075b8&scoped=true */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Acropolis.vue?vue&type=template&id=5aa075b8&scoped=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Acropolis_vue_vue_type_template_id_5aa075b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Acropolis.vue?");

/***/ }),

/***/ "./src/game/components/actions.ts":
/*!****************************************!*\
  !*** ./src/game/components/actions.ts ***!
  \****************************************/
/*! exports provided: Actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Actions\", function() { return Actions; });\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n\nvar Actions = Object(bitecs__WEBPACK_IMPORTED_MODULE_0__[\"defineComponent\"])({\n  actions: bitecs__WEBPACK_IMPORTED_MODULE_0__[\"Types\"].ui8\n});\n\n//# sourceURL=webpack:///./src/game/components/actions.ts?");

/***/ }),

/***/ "./src/game/components/position.ts":
/*!*****************************************!*\
  !*** ./src/game/components/position.ts ***!
  \*****************************************/
/*! exports provided: Position, TargetPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Position\", function() { return Position; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TargetPosition\", function() { return TargetPosition; });\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n/* harmony import */ var _vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector2 */ \"./src/game/components/vector2.ts\");\n\n\nvar Position = Object(bitecs__WEBPACK_IMPORTED_MODULE_0__[\"defineComponent\"])(_vector2__WEBPACK_IMPORTED_MODULE_1__[\"Vector2\"]);\nvar TargetPosition = Object(bitecs__WEBPACK_IMPORTED_MODULE_0__[\"defineComponent\"])(_vector2__WEBPACK_IMPORTED_MODULE_1__[\"Vector2\"]);\n\n//# sourceURL=webpack:///./src/game/components/position.ts?");

/***/ }),

/***/ "./src/game/components/sprite.ts":
/*!***************************************!*\
  !*** ./src/game/components/sprite.ts ***!
  \***************************************/
/*! exports provided: Sprite, Body, Shoes, Clothes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sprite\", function() { return Sprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Body\", function() { return Body; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Shoes\", function() { return Shoes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clothes\", function() { return Clothes; });\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n\nvar Sprite = Object(bitecs__WEBPACK_IMPORTED_MODULE_0__[\"defineComponent\"])({\n  texture: bitecs__WEBPACK_IMPORTED_MODULE_0__[\"Types\"].ui8\n});\nvar Body = Object(bitecs__WEBPACK_IMPORTED_MODULE_0__[\"defineComponent\"])({\n  texture: bitecs__WEBPACK_IMPORTED_MODULE_0__[\"Types\"].ui8\n});\nvar Shoes = Object(bitecs__WEBPACK_IMPORTED_MODULE_0__[\"defineComponent\"])({\n  texture: bitecs__WEBPACK_IMPORTED_MODULE_0__[\"Types\"].ui8\n});\nvar Clothes = Object(bitecs__WEBPACK_IMPORTED_MODULE_0__[\"defineComponent\"])({\n  texture: bitecs__WEBPACK_IMPORTED_MODULE_0__[\"Types\"].ui8\n});\n\n//# sourceURL=webpack:///./src/game/components/sprite.ts?");

/***/ }),

/***/ "./src/game/components/vector2.ts":
/*!****************************************!*\
  !*** ./src/game/components/vector2.ts ***!
  \****************************************/
/*! exports provided: Vector2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Vector2\", function() { return Vector2; });\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n\nvar Vector2 = {\n  x: bitecs__WEBPACK_IMPORTED_MODULE_0__[\"Types\"].f32,\n  y: bitecs__WEBPACK_IMPORTED_MODULE_0__[\"Types\"].f32\n};\n\n//# sourceURL=webpack:///./src/game/components/vector2.ts?");

/***/ }),

/***/ "./src/game/constants/constants.ts":
/*!*****************************************!*\
  !*** ./src/game/constants/constants.ts ***!
  \*****************************************/
/*! exports provided: FRAME_SIZE_24_24, FRAME_SIZE_32_32, FRAME_SIZE_96_96, FRAME_SIZE_16_16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRAME_SIZE_24_24\", function() { return FRAME_SIZE_24_24; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRAME_SIZE_32_32\", function() { return FRAME_SIZE_32_32; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRAME_SIZE_96_96\", function() { return FRAME_SIZE_96_96; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRAME_SIZE_16_16\", function() { return FRAME_SIZE_16_16; });\nvar frameSize = function frameSize(frameWidth, frameHeight) {\n  return {\n    frameWidth: frameWidth,\n    frameHeight: frameHeight\n  };\n};\n\nvar FRAME_SIZE_24_24 = frameSize(24, 24);\nvar FRAME_SIZE_32_32 = frameSize(32, 32);\nvar FRAME_SIZE_96_96 = frameSize(96, 96);\nvar FRAME_SIZE_16_16 = frameSize(16, 16);\n\n//# sourceURL=webpack:///./src/game/constants/constants.ts?");

/***/ }),

/***/ "./src/game/phaserHelper/loaders.ts":
/*!******************************************!*\
  !*** ./src/game/phaserHelper/loaders.ts ***!
  \******************************************/
/*! exports provided: loadImage, loadTilemapTiledJSON, loadSpritesheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImage\", function() { return loadImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadTilemapTiledJSON\", function() { return loadTilemapTiledJSON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSpritesheet\", function() { return loadSpritesheet; });\n/* harmony import */ var _utils_stringHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/stringHandler */ \"./src/game/utils/stringHandler.ts\");\n\nvar loadImage = function loadImage(scene, key, url) {\n  return scene.load.image(key, Object(_utils_stringHandler__WEBPACK_IMPORTED_MODULE_0__[\"pathHandler\"])(url));\n};\nvar loadTilemapTiledJSON = function loadTilemapTiledJSON(scene, key, url) {\n  return scene.load.tilemapTiledJSON(key, Object(_utils_stringHandler__WEBPACK_IMPORTED_MODULE_0__[\"pathHandler\"])(url));\n};\nvar loadSpritesheet = function loadSpritesheet(scene, key, url, frameSizing) {\n  return scene.load.spritesheet(key, Object(_utils_stringHandler__WEBPACK_IMPORTED_MODULE_0__[\"pathHandler\"])(url), frameSizing);\n};\n\n//# sourceURL=webpack:///./src/game/phaserHelper/loaders.ts?");

/***/ }),

/***/ "./src/game/scenes/Game.ts":
/*!*********************************!*\
  !*** ./src/game/scenes/Game.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ \"./node_modules/@babel/runtime/helpers/esm/createSuper.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _systems_loadingBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../systems/loadingBar */ \"./src/game/systems/loadingBar.ts\");\n/* harmony import */ var _phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../phaserHelper/loaders */ \"./src/game/phaserHelper/loaders.ts\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/constants */ \"./src/game/constants/constants.ts\");\n/* harmony import */ var _systems_playerSpritesheetAnimations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../systems/playerSpritesheetAnimations */ \"./src/game/systems/playerSpritesheetAnimations.ts\");\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n/* harmony import */ var _systems_createSpriteSystem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../systems/createSpriteSystem */ \"./src/game/systems/createSpriteSystem.ts\");\n/* harmony import */ var _systems_createPlayerSystem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../systems/createPlayerSystem */ \"./src/game/systems/createPlayerSystem.ts\");\n/* harmony import */ var _systems_createTargetMovementSystem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../systems/createTargetMovementSystem */ \"./src/game/systems/createTargetMovementSystem.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Game = /*#__PURE__*/function (_Phaser$Scene) {\n  Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Game, _Phaser$Scene);\n\n  var _super = Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Game);\n\n  function Game() {\n    Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Game);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Game, [{\n    key: \"init\",\n    value: // constructor()\n    // {\n    // \tsuper('game')\n    // }\n    function init(data) {\n      this.lobbyScene = {};\n      this.lobbyScene.socket = data.socket;\n    }\n  }, {\n    key: \"preload\",\n    value: function preload() {\n      //This is the place where you load all assets.\n      Object(_systems_loadingBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this);\n      Object(_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_6__[\"loadImage\"])(this, 'ball', '/game/sprites/spikedballa.png');\n      Object(_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_6__[\"loadImage\"])(this, 'atlas', '/game/tiled/atlas.png');\n      Object(_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_6__[\"loadTilemapTiledJSON\"])(this, 'forestkey', '/game/tiled/forest1.json');\n      Object(_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_6__[\"loadSpritesheet\"])(this, 'bodySpriteSheet', '/game/character/characters/char_all.png', _constants_constants__WEBPACK_IMPORTED_MODULE_7__[\"FRAME_SIZE_32_32\"]);\n      Object(_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_6__[\"loadSpritesheet\"])(this, 'shoesSpriteSheet', '/game/character/clothes/shoes.png', _constants_constants__WEBPACK_IMPORTED_MODULE_7__[\"FRAME_SIZE_32_32\"]);\n      Object(_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_6__[\"loadSpritesheet\"])(this, 'clothesSpriteSheet', '/game/character/clothes/basic.png', _constants_constants__WEBPACK_IMPORTED_MODULE_7__[\"FRAME_SIZE_32_32\"]);\n      Object(_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_6__[\"loadSpritesheet\"])(this, 'balla', '/game/sprites/spikedballa.png', _constants_constants__WEBPACK_IMPORTED_MODULE_7__[\"FRAME_SIZE_96_96\"]);\n      this.allPlayers = {};\n      this.followingPlayer = false;\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      var _this = this;\n\n      // console.log(globalThis.acropolis.networkUpdateStateSystem.getLatestNetworkData())\n      this.world = Object(bitecs__WEBPACK_IMPORTED_MODULE_9__[\"createWorld\"])();\n      this.playerSystem = Object(_systems_createPlayerSystem__WEBPACK_IMPORTED_MODULE_11__[\"createPlayerSystem\"])(); // setInterval( ()=>{\n      //   console.log('tumadre')\n      //   this.playerSystem(this.world)\n      // },500)\n\n      this.targetMovementSystem = Object(_systems_createTargetMovementSystem__WEBPACK_IMPORTED_MODULE_12__[\"createTargetMovementSystem\"])();\n      this.spriteSystem = Object(_systems_createSpriteSystem__WEBPACK_IMPORTED_MODULE_10__[\"createSpriteSystem\"])(this, ['bodySpriteSheet', 'clothesSpriteSheet', 'shoesSpriteSheet']); // const player = addEntity(this.world)\n      // addComponent(this.world, Position, player)\n      // Position.x[player] = 100 \n      // Position.y[player] = 100\n      // addComponent(this.world, Velocity, player)\n      // Velocity.x[player] = 100\n      // Velocity.y[player] = 100\n      // addComponent(this.world, Sprite, player)\n      // Sprite.texture[player] = 0\n      //Build Map\n\n      var map = this.make.tilemap({\n        key: 'forestkey',\n        tileWidth: 16,\n        tileHeight: 16\n      });\n      var tileset = map.addTilesetImage('atlas', 'atlas');\n      map.createLayer('piso', tileset, 0, 0);\n      map.createLayer('caminos', tileset, 0, 0);\n      map.createLayer('plantas', tileset, 0, 0);\n      map.createLayer('construcciones', tileset, 0, 0); // Crete player Animations\n\n      Object(_systems_playerSpritesheetAnimations__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this); //Restrict camera maximum movement\n\n      this.cameras.main.setBounds(0, 0, 1000, 1000); // //Time Management?\n      // this.clientLastUpdate = Date.now();\n      // this.clientLastDelta = Date.now();\n      // this.clientLastDeltaTime = Date.now();\n      // this.pointerado = this.input.activePointer;\n      // this.instance1 = cooldownTimer(5000);\n      // this.instance2 = cooldownTimer(1000);\n      // this.instance3 = cooldownTimer(100);\n      // this.lastUpdate = Date.now();\n      // this.dt = 0;\n      // //Disable right click context menu\n      // this.input.mouse.disableContextMenu();\n      // //Refactor all this shit into a fucking system with components\n      // this.input.on('pointerup', (pointer) => {\n      //   if (pointer.leftButtonReleased()) {\n      //     if (\n      //       this.allPlayers?.[this.currentPlayerId]?.target &&\n      //       this.allPlayers?.[this.currentPlayerId]?.sprite &&\n      //       this.allPlayers?.[this.currentPlayerId]?.sprite?.anims?.currentAnim\n      //         ?.key !== 'running'\n      //     ) {\n      //       playerPlayAnimation(\n      //         this,\n      //         'running',\n      //         this.allPlayers[this.currentPlayerId]\n      //       );\n      //       if (\n      //         this.allPlayers[this.currentPlayerId].sprite.x <\n      //         this.pointerado.worldX\n      //       ) {\n      //         flipPlayerX(this.allPlayers[this.currentPlayerId].sprites)\n      //       } else {\n      //         flipPlayerX(this.allPlayers[this.currentPlayerId].sprites, true)\n      //       }\n      //     }\n      //     const target = {\n      //       x: Math.round(pointer.worldX),\n      //       y: Math.round(pointer.worldY)\n      //     };\n      //     this.allPlayers[this.currentPlayerId].target = target;\n      //     this.lobbyScene.socket.emit('player click', target);\n      //   }\n      // });\n      // this.input.on('pointerdown', (pointer) => {\n      //   if (pointer.leftButtonReleased()) {\n      //     const target = { x: pointer.worldX, y: pointer.worldY };\n      //     this.allPlayers[this.currentPlayerId].target = target;\n      //   }\n      // });\n      // //Yes this is a fucking bloody hell, refactor into systems and components\n      // this.lobbyScene.socket.on('update state', ({ players }) => {\n      //   const now = Date.now();\n      //   this.dt = (now - this.lastUpdate) / (1000 / 30);\n      //   this.lastUpdate = now;\n      //   players.forEach((player) => {\n      //     if (!this.allPlayers?.[player.id]) {\n      //       this.allPlayers[player.id] = {\n      //         sprites:{\n      //           body: this.add.sprite(\n      //             player.position.x,\n      //             player.position.y,\n      //             'bodySpriteSheet'\n      //           ),\n      //           shoes: this.add.sprite(\n      //             player.position.x,\n      //             player.position.y,\n      //             'shoesSpriteSheet'\n      //           ),\n      //           clothes: this.add.sprite(\n      //             player.position.x,\n      //             player.position.y,\n      //             'clothesSpriteSheet'\n      //           ),\n      //         },\n      //         playerId: player.id,\n      //         transform: {\n      //           x: player.position.x,\n      //           y: player.position.y\n      //         },\n      //         target: { x: player.position.x, y: player.position.y },\n      //         skills: null\n      //       };\n      //     }\n      //     // if(this.instance1.remainigTime() === 5000) {\n      //     if (\n      //       player.skills?.y &&\n      //       player.skills?.x &&\n      //       !this.allPlayers?.[player.id].skills\n      //     ) {\n      //       this.allPlayers[player.id].skills = this.add.sprite(\n      //         player.skills.x,\n      //         player.skills.y,\n      //         'ball'\n      //       );\n      //     } else if (\n      //       player.skills === null &&\n      //       this.allPlayers?.[player.id].skills\n      //     ) {\n      //       this.allPlayers[player.id].skills.destroy();\n      //       this.allPlayers[player.id].skills = null;\n      //     }\n      //     // }\n      //     if (this.instance1.remainigTime() === 5000) {\n      //       // console.log('changa', player);\n      //     }\n      //     if (!isNaN(this.dt)) {\n      //       if (\n      //         this.allPlayers?.[player.id]?.skills?.x &&\n      //         this.allPlayers?.[player.id]?.skills?.y &&\n      //         player.skills?.x &&\n      //         player.skills?.y\n      //       ) {\n      //         this.allPlayers[player.id].skills.x = Math.round(\n      //           lerp(\n      //             this.allPlayers[player.id].skills.x,\n      //             player.skills.x,\n      //             this.dt\n      //           )\n      //         );\n      //         this.allPlayers[player.id].skills.y = Math.round(\n      //           lerp(\n      //             this.allPlayers[player.id].skills.y,\n      //             player.skills.y,\n      //             this.dt\n      //           )\n      //         );\n      //       }\n      //       if (this.allPlayers[player.id].sprites.body.x === Infinity) {\n      //         this.allPlayers[player.id].sprites.body.x = 0;\n      //         this.allPlayers[player.id].sprites.shoes.x = 0;\n      //         this.allPlayers[player.id].sprites.clothes.x = 0;\n      //       }\n      //       if (this.allPlayers[player.id].sprites.body.y === Infinity) {\n      //         this.allPlayers[player.id].sprites.body.y = 0;\n      //         this.allPlayers[player.id].sprites.shoes.y = 0;\n      //         this.allPlayers[player.id].sprites.clothes.y = 0;\n      //       }\n      //       this.allPlayers[player.id].transform.x = Math.round(\n      //         lerp(\n      //           this.allPlayers[player.id].sprites.body.x,\n      //           player.position.x,\n      //           this.dt\n      //         )\n      //       );\n      //       this.allPlayers[player.id].transform.y = Math.round(\n      //         lerp(\n      //           this.allPlayers[player.id].sprites.body.y,\n      //           player.position.y,\n      //           this.dt\n      //         )\n      //       );\n      //       this.allPlayers[player.id].target = player.target;\n      //       // if(this.isAttaking){\n      //       //   return\n      //       // }\n      //       if (\n      //         this.allPlayers?.[player.id]?.sprites.body?.anims?.currentAnim?.key !==\n      //           'running' &&\n      //         !this.isAttaking &&\n      //         getDistance(this.allPlayers[player.id].sprites.body, player.target) > 1\n      //       ) {\n      //         playerPlayAnimation(this, 'running', this.allPlayers[player.id]);\n      //       }\n      //       if (\n      //         this.allPlayers?.[player.id]?.sprites.body?.anims?.currentAnim?.key !==\n      //           'idle' &&\n      //         !this.isAttaking &&\n      //         getDistance(this.allPlayers[player.id].sprites.body, player.target) < 1\n      //       ) {\n      //         playerPlayAnimation(this, 'idle', this.allPlayers[player.id]);\n      //       }\n      //       if (this.allPlayers[player.id].sprites.body) {\n      //         if (this.allPlayers[player.id].sprites.body.x < player.target.x) {\n      //           flipPlayerX(this.allPlayers[player.id].sprites)\n      //         } else {\n      //           flipPlayerX(this.allPlayers[player.id].sprites, true)\n      //         }\n      //       }\n      //       if (this.instance1.remainigTime() === 5000) {\n      //         // console.log('toti', player.skills);\n      //       }\n      //     }\n      //   });\n      //   //Store this in the right system.\n      //   for (const [key, value] of Object.entries<any>(this.allPlayers)) {\n      //     let exist = false;\n      //     players.forEach((player) => {\n      //       if (key === player.id) {\n      //         exist = true;\n      //       }\n      //     });\n      //     if (!exist) {\n      //       value.sprite.destroy();\n      //       delete this.allPlayers[key];\n      //     }\n      //   }\n      // });\n      // setTimeout(() => {\n      //   gameController(this, this.allPlayers[this.currentPlayerId]);\n      // }, 2000);\n\n      setInterval(function () {\n        _this.cameras.main.zoom = 0.5;\n\n        if (!_this.world || !_this.spriteSystem || !_this.playerSystem || !_this.targetMovementSystem) {\n          // console.log('entra aca', !this.world || !this.spriteSystem || this.playerSystem || this.targetMovementSystem)\n          return;\n        } // console.log('inicia los sistemad')\n\n\n        _this.playerSystem(_this.world);\n\n        _this.targetMovementSystem(_this.world);\n\n        _this.spriteSystem(_this.world);\n      }, 500);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {}\n  }]);\n\n  return Game;\n}(phaser__WEBPACK_IMPORTED_MODULE_4___default.a.Scene);\n\n\n\n//# sourceURL=webpack:///./src/game/scenes/Game.ts?");

/***/ }),

/***/ "./src/game/systems/createPlayerSystem.ts":
/*!************************************************!*\
  !*** ./src/game/systems/createPlayerSystem.ts ***!
  \************************************************/
/*! exports provided: createPlayerSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPlayerSystem\", function() { return createPlayerSystem; });\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ \"./node_modules/core-js/modules/es.object.entries.js\");\n/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ \"./node_modules/core-js/modules/es.json.stringify.js\");\n/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n/* harmony import */ var _components_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/actions */ \"./src/game/components/actions.ts\");\n/* harmony import */ var _components_position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/position */ \"./src/game/components/position.ts\");\n/* harmony import */ var _components_sprite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/sprite */ \"./src/game/components/sprite.ts\");\n\n\n\n\n\n\n\nvar createPlayerSystem = function createPlayerSystem() {\n  var playersByNetworkId = {};\n  return Object(bitecs__WEBPACK_IMPORTED_MODULE_3__[\"defineSystem\"])(function (world) {\n    var networkEntities = window.acropolis.networkSystem.getNetworkEntities();\n    var localEntitiesIds = window.acropolis.networkSystem.getNetworkEntitiesIDsByLocalID();\n    var localEntitiesByNetworkId = window.acropolis.networkSystem.getLocalEntitiesIDsByNetworkID(); // const networkEntities = networkData.players;\n    // console.log(playersByNetworkId);\n    // currentPlayers.forEach((player) => {\n\n    for (var _i = 0, _Object$entries = Object.entries(networkEntities); _i < _Object$entries.length; _i++) {\n      var _Object$entries$_i = Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_Object$entries[_i], 2),\n          entityId = _Object$entries$_i[0],\n          entity = _Object$entries$_i[1];\n\n      console.log('con una chingada', localEntitiesByNetworkId);\n\n      if ((localEntitiesByNetworkId === null || localEntitiesByNetworkId === void 0 ? void 0 : localEntitiesByNetworkId[entityId]) >= 0 && Object(bitecs__WEBPACK_IMPORTED_MODULE_3__[\"entityExists\"])(world, localEntitiesByNetworkId[entityId])) {\n        continue;\n      }\n\n      var playerId = Object(bitecs__WEBPACK_IMPORTED_MODULE_3__[\"addEntity\"])(world);\n      var clonedEntity = JSON.parse(JSON.stringify(entity));\n      window.acropolis.networkSystem.setLocalEntityByLocalId(playerId, clonedEntity); // window.acropolis.networkSystem.setNetworkEntityByLocalId(playerId, clonedEntity)\n      // playersByNetworkId[entityId] = playerId;\n      // playersByLocalId[playerId] = entityId;\n\n      window.acropolis.networkSystem.setLocalEntityIDbyNetworkID(entityId, playerId);\n      window.acropolis.networkSystem.setNetworkEntityIDbyLocalID(entityId, playerId);\n      Object(bitecs__WEBPACK_IMPORTED_MODULE_3__[\"addComponent\"])(world, _components_position__WEBPACK_IMPORTED_MODULE_5__[\"Position\"], playerId);\n      Object(bitecs__WEBPACK_IMPORTED_MODULE_3__[\"addComponent\"])(world, _components_sprite__WEBPACK_IMPORTED_MODULE_6__[\"Body\"], playerId);\n      Object(bitecs__WEBPACK_IMPORTED_MODULE_3__[\"addComponent\"])(world, _components_sprite__WEBPACK_IMPORTED_MODULE_6__[\"Shoes\"], playerId);\n      Object(bitecs__WEBPACK_IMPORTED_MODULE_3__[\"addComponent\"])(world, _components_sprite__WEBPACK_IMPORTED_MODULE_6__[\"Clothes\"], playerId);\n      Object(bitecs__WEBPACK_IMPORTED_MODULE_3__[\"addComponent\"])(world, _components_position__WEBPACK_IMPORTED_MODULE_5__[\"TargetPosition\"], playerId);\n      Object(bitecs__WEBPACK_IMPORTED_MODULE_3__[\"addComponent\"])(world, _components_actions__WEBPACK_IMPORTED_MODULE_4__[\"Actions\"], playerId);\n    }\n\n    for (var _i2 = 0, _Object$entries2 = Object.entries(localEntitiesIds); _i2 < _Object$entries2.length; _i2++) {\n      var _Object$entries2$_i = Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_Object$entries2[_i2], 2),\n          networkId = _Object$entries2$_i[0],\n          localId = _Object$entries2$_i[1];\n\n      var exist = false;\n\n      for (var _i3 = 0, _Object$entries3 = Object.entries(networkEntities); _i3 < _Object$entries3.length; _i3++) {\n        var _Object$entries3$_i = Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_Object$entries3[_i3], 1),\n            _entityId = _Object$entries3$_i[0];\n\n        if (networkId === _entityId) {\n          exist = true;\n        }\n      }\n\n      if (!exist) {\n        Object(bitecs__WEBPACK_IMPORTED_MODULE_3__[\"removeEntity\"])(world, localId);\n        window.acropolis.networkSystem.deleteNetworkEntitiesIDsByLocalID(localId);\n        window.acropolis.networkSystem.deleteLocalEntitiesIDsByNetworkID(networkId);\n        window.acropolis.networkSystem.deleteLocalEntity(localId); // delete playersByNetworkId[key];\n        // delete playersByLocalId[value];\n      }\n    } //update whole entitiesById\n    // window.acropolis.networkSystem.setNetworkEntitiesIDbyLocalID(playersByNetworkId)\n    // window.acropolis.networkSystem.setLocalEntitiesIDsByNetworkID(playersByLocalId)\n    // console.log(playersByNetworkId, playersByLocalId)\n\n\n    return world;\n  });\n};\n\n//# sourceURL=webpack:///./src/game/systems/createPlayerSystem.ts?");

/***/ }),

/***/ "./src/game/systems/createSpriteSystem.ts":
/*!************************************************!*\
  !*** ./src/game/systems/createSpriteSystem.ts ***!
  \************************************************/
/*! exports provided: createSpriteSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSpriteSystem\", function() { return createSpriteSystem; });\n/* harmony import */ var _components_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/position */ \"./src/game/components/position.ts\");\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n/* harmony import */ var _components_sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sprite */ \"./src/game/components/sprite.ts\");\n\n\n\nvar createSpriteSystem = function createSpriteSystem(scene, textures) {\n  var spritesById = {};\n  var spriteQuery = Object(bitecs__WEBPACK_IMPORTED_MODULE_1__[\"defineQuery\"])([_components_sprite__WEBPACK_IMPORTED_MODULE_2__[\"Body\"]]);\n  var spriteQueryEnter = Object(bitecs__WEBPACK_IMPORTED_MODULE_1__[\"enterQuery\"])(spriteQuery);\n  var spriteQueryExit = Object(bitecs__WEBPACK_IMPORTED_MODULE_1__[\"exitQuery\"])(spriteQuery);\n  return Object(bitecs__WEBPACK_IMPORTED_MODULE_1__[\"defineSystem\"])(function (world) {\n    var enterEntities = spriteQueryEnter(world);\n\n    for (var i = 0; i < enterEntities.length; i++) {\n      console.log('sistema');\n      var id = enterEntities[i]; // const textId = Sprite.texture[id]\n      // const texture = textures[textId]\n\n      var entity = window.acropolis.networkSystem.getLocalEntityByLocalId(id);\n      entity.sprite = scene.add.sprite(0, 0, 'bodySpriteSheet'); // console.lowindow.acropolis.networkSystem.getLatestNetworkData()\n      // scene.cameras.main.startFollow(\n      //             spritesById[id],\n      //       false,\n      //       scene.clientDeltaTime * scene.correction,\n      //       scene.clientDeltaTime * this.correction\n      //     );\n      //     this.cameras.main.zoom = 2;\n      //     this.cameras.main.roundPixels = true;\n    }\n\n    var entities = spriteQuery(world);\n\n    for (var _i = 0; _i < entities.length; _i++) {\n      var _id = entities[_i];\n\n      var _entity = window.acropolis.networkSystem.getLocalEntityByLocalId(_id);\n\n      var sprite = _entity.sprite;\n      console.log('viene undefind', sprite, _entity);\n\n      if (!sprite) {\n        continue;\n      }\n\n      sprite.x = _components_position__WEBPACK_IMPORTED_MODULE_0__[\"Position\"].x[_id];\n      sprite.y = _components_position__WEBPACK_IMPORTED_MODULE_0__[\"Position\"].y[_id];\n    }\n\n    var exitEntities = spriteQueryExit(world);\n\n    for (var _i2 = 0; _i2 < exitEntities.length; _i2) {\n      var _id2 = exitEntities[_i2];\n      var _sprite = window.acropolis.networkSystem.getLocalEntityByLocalId(_id2).sprite;\n\n      if (!_sprite) {\n        continue;\n      }\n\n      _sprite.destroy();\n\n      delete spritesById[_id2];\n    }\n\n    return world;\n  });\n};\n\n//# sourceURL=webpack:///./src/game/systems/createSpriteSystem.ts?");

/***/ }),

/***/ "./src/game/systems/createTargetMovementSystem.ts":
/*!********************************************************!*\
  !*** ./src/game/systems/createTargetMovementSystem.ts ***!
  \********************************************************/
/*! exports provided: createTargetMovementSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTargetMovementSystem\", function() { return createTargetMovementSystem; });\n/* harmony import */ var _components_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/position */ \"./src/game/components/position.ts\");\n/* harmony import */ var bitecs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bitecs */ \"./node_modules/bitecs/dist/index.mjs\");\n\n\nvar createTargetMovementSystem = function createTargetMovementSystem() {\n  var movementQuery = Object(bitecs__WEBPACK_IMPORTED_MODULE_1__[\"defineQuery\"])([_components_position__WEBPACK_IMPORTED_MODULE_0__[\"TargetPosition\"], _components_position__WEBPACK_IMPORTED_MODULE_0__[\"Position\"]]);\n  return Object(bitecs__WEBPACK_IMPORTED_MODULE_1__[\"defineSystem\"])(function (world) {\n    // console.log('networkentities', window.acropolis.networkSystem.getLocalEntities())\n    var networkEntities = window.acropolis.networkSystem.getNetworkEntities();\n    var localEntities = window.acropolis.networkSystem.getLocalEntities();\n    var entities = movementQuery(world);\n\n    for (var i = 0; i < entities.length; i++) {\n      var id = entities[i];\n      var entity = window.acropolis.networkSystem.getNetworkEntityByLocalId(id);\n      _components_position__WEBPACK_IMPORTED_MODULE_0__[\"Position\"].x[id] = entity.position.x;\n      _components_position__WEBPACK_IMPORTED_MODULE_0__[\"Position\"].y[id] = entity.position.y;\n      console.log(_components_position__WEBPACK_IMPORTED_MODULE_0__[\"Position\"].x[id], _components_position__WEBPACK_IMPORTED_MODULE_0__[\"Position\"].y[id]);\n    }\n\n    return world;\n  });\n};\n\n//# sourceURL=webpack:///./src/game/systems/createTargetMovementSystem.ts?");

/***/ }),

/***/ "./src/game/systems/loadingBar.ts":
/*!****************************************!*\
  !*** ./src/game/systems/loadingBar.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar loadingBar = function loadingBar(scene) {\n  var progressBar = scene.add.graphics();\n  var progressBox = scene.add.graphics();\n  var text = scene.add.text(170, 240, 'Loading Acropolis...');\n  progressBox.fillStyle(0x222222, 0.8);\n  progressBox.fillRect(0, 270, 600, 50);\n  scene.load.on('progress', function (value) {\n    console.log(value);\n    progressBar.clear();\n    progressBar.fillStyle(0xffffff, 1);\n    progressBar.fillRect(10, 280, 590 * value, 30);\n  });\n  scene.load.on('fileprogress', function (file) {\n    console.log(file.src);\n  });\n  scene.load.on('complete', function () {\n    console.log('complete');\n    progressBar.destroy();\n    progressBox.destroy();\n    text.destroy();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadingBar);\n\n//# sourceURL=webpack:///./src/game/systems/loadingBar.ts?");

/***/ }),

/***/ "./src/game/systems/networkUpdateStateSystem.ts":
/*!******************************************************!*\
  !*** ./src/game/systems/networkUpdateStateSystem.ts ***!
  \******************************************************/
/*! exports provided: networkUpdateStateSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"networkUpdateStateSystem\", function() { return networkUpdateStateSystem; });\nvar networkUpdateStateSystem = function networkUpdateStateSystem(socket) {\n  var networkEntitiesIDsByLocalID = {};\n  var localEntitiesIDsByNetworkID = {};\n  var localEntities = {}; // This is only read\n\n  var networkEntities = {}; // socket.on('update state', (data) => {\n  //   networkData = data;\n  // });\n\n  socket.on('broadcastNetworkClient', function (data) {\n    console.log('broadcastNetworkClient', data);\n    networkEntities = data;\n  });\n\n  var deleteNetworkEntitiesIDsByLocalID = function deleteNetworkEntitiesIDsByLocalID(id) {\n    delete networkEntitiesIDsByLocalID[id];\n  };\n\n  var deleteLocalEntitiesIDsByNetworkID = function deleteLocalEntitiesIDsByNetworkID(id) {\n    delete localEntitiesIDsByNetworkID[id];\n  };\n\n  var deleteLocalEntity = function deleteLocalEntity(id) {\n    delete localEntities[id];\n  };\n\n  var setLocalEntityIDbyNetworkID = function setLocalEntityIDbyNetworkID(networkId, localId) {\n    localEntitiesIDsByNetworkID[networkId] = localId;\n  };\n\n  var getLocalEntityIDbyNetworkID = function getLocalEntityIDbyNetworkID(networkId) {\n    return localEntitiesIDsByNetworkID[networkId];\n  }; // const setNetworkEntitiesIDbyLocalID = (entitiesById) => {\n  //   networkEntitiesIDsByLocalID = entitiesById\n  // }\n\n\n  var getNetworkEntitiesIDsByLocalID = function getNetworkEntitiesIDsByLocalID() {\n    return networkEntitiesIDsByLocalID;\n  }; // const setLocalEntitiesIDsByNetworkID = (entitiesById) => {\n  //   localEntitiesIDsByNetworkID = entitiesById\n  // }\n\n\n  var getLocalEntitiesIDsByNetworkID = function getLocalEntitiesIDsByNetworkID() {\n    return localEntitiesIDsByNetworkID;\n  }; // ver que pedo \n  // const getNetworkEntityByLocalId = (id) => {\n  //   const networkEntity =  networkEntities[localEntitiesIDsByNetworkID[id]]\n  //   return networkEntity\n  // }\n\n\n  var setLocalEntityByLocalId = function setLocalEntityByLocalId(id, entity) {\n    localEntities[id] = entity;\n  };\n\n  var getLocalEntityByLocalId = function getLocalEntityByLocalId(id) {\n    var localEntity = localEntities[id];\n    return localEntity;\n  };\n\n  var getNetworkEntities = function getNetworkEntities() {\n    return networkEntities;\n  };\n\n  var getLocalEntities = function getLocalEntities() {\n    return localEntities;\n  }; // const setNetworkEntityByLocalId = (id, entity) => {\n  //   networkEntities[id] = entity\n  // }\n\n\n  var setNetworkEntityIDbyLocalID = function setNetworkEntityIDbyLocalID(networkId, localId) {\n    networkEntitiesIDsByLocalID[localId] = networkId;\n  };\n\n  var getNetworkEntityIDbyLocalID = function getNetworkEntityIDbyLocalID(localId) {\n    return networkEntitiesIDsByLocalID[localId];\n  };\n\n  var getNetworkEntityByLocalId = function getNetworkEntityByLocalId(id) {\n    var networkEntity = networkEntities[getNetworkEntityIDbyLocalID(id)];\n    return networkEntity;\n  };\n\n  return {\n    deleteNetworkEntitiesIDsByLocalID: deleteNetworkEntitiesIDsByLocalID,\n    deleteLocalEntitiesIDsByNetworkID: deleteLocalEntitiesIDsByNetworkID,\n    deleteLocalEntity: deleteLocalEntity,\n    getLocalEntitiesIDsByNetworkID: getLocalEntitiesIDsByNetworkID,\n    // setLocalEntitiesIDsByNetworkID,\n    getNetworkEntitiesIDsByLocalID: getNetworkEntitiesIDsByLocalID,\n    // setNetworkEntitiesIDbyLocalID,\n    // setNetworkEntityByLocalId,\n    // Server values must be only readable.\n    getNetworkEntities: getNetworkEntities,\n    getNetworkEntityByLocalId: getNetworkEntityByLocalId,\n    // Local values can be written\n    getLocalEntities: getLocalEntities,\n    getLocalEntityByLocalId: getLocalEntityByLocalId,\n    setLocalEntityByLocalId: setLocalEntityByLocalId,\n    // The glue between server and client.\n    setNetworkEntityIDbyLocalID: setNetworkEntityIDbyLocalID,\n    getNetworkEntityIDbyLocalID: getNetworkEntityIDbyLocalID,\n    getLocalEntityIDbyNetworkID: getLocalEntityIDbyNetworkID,\n    setLocalEntityIDbyNetworkID: setLocalEntityIDbyNetworkID\n  };\n};\n\n//# sourceURL=webpack:///./src/game/systems/networkUpdateStateSystem.ts?");

/***/ }),

/***/ "./src/game/systems/playerSpritesheetAnimations.ts":
/*!*********************************************************!*\
  !*** ./src/game/systems/playerSpritesheetAnimations.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar animatedPlayer = function animatedPlayer(scene) {\n  // Body\n  var running = {\n    key: 'running',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 128,\n      end: 135\n    }),\n    frameRate: 15,\n    repeat: -1\n  };\n  scene.anims.create(running);\n  var idle = {\n    key: 'idle',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      frames: [128]\n    }),\n    frameRate: 15,\n    repeat: -1\n  };\n  scene.anims.create(idle);\n  var attack = {\n    key: 'attack',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 1152,\n      end: 1155\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(attack);\n  var mining = {\n    key: 'mining',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 8 * 8 * 31,\n      end: 8 * 8 * 31 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(mining);\n  var gathering = {\n    key: 'gathering',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 8 * 8 * 10,\n      end: 8 * 8 * 10 + 2\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(gathering);\n  var chopping = {\n    key: 'chopping',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 8 * 8 * 35,\n      end: 8 * 8 * 35 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(chopping);\n  var fishing = {\n    key: 'fishing',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 8 * 8 * 47,\n      end: 8 * 8 * 47 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(fishing);\n  var watering = {\n    key: 'watering',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 8 * 8 * 39,\n      end: 8 * 8 * 39 + 1\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(watering);\n  var shoveling = {\n    key: 'shoveling',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 8 * 8 * 43,\n      end: 8 * 8 * 43 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(shoveling); // Shoes\n\n  var runningShoes = {\n    key: 'runningShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 200,\n      end: 207\n    }),\n    frameRate: 15,\n    repeat: -1\n  };\n  scene.anims.create(runningShoes);\n  var idleShoes = {\n    key: 'idleShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      frames: [160]\n    }),\n    frameRate: 15,\n    repeat: -1\n  };\n  scene.anims.create(idleShoes);\n  var attackShoes = {\n    key: 'attackShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 1440,\n      end: 1443\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(attackShoes);\n  var miningShoes = {\n    key: 'miningShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 2480,\n      end: 2483\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(miningShoes);\n  var gatheringShoes = {\n    key: 'gatheringShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 8 * 10 * 10,\n      end: 8 * 10 * 10 + 2\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(gatheringShoes);\n  var choppingShoes = {\n    key: 'choppingShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 8 * 10 * 35,\n      end: 8 * 10 * 35 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(choppingShoes);\n  var fishingShoes = {\n    key: 'fishingShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 8 * 10 * 47,\n      end: 8 * 10 * 47 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(fishingShoes);\n  var wateringShoes = {\n    key: 'wateringShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 8 * 10 * 39,\n      end: 8 * 10 * 39\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(wateringShoes);\n  var shovelingShoes = {\n    key: 'shovelingShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 8 * 10 * 43,\n      end: 8 * 10 * 43 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(shovelingShoes); // Clothes\n\n  var runningClothes = {\n    key: 'runningClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 160,\n      end: 167\n    }),\n    frameRate: 15,\n    repeat: -1\n  };\n  scene.anims.create(runningClothes);\n  var idleClothes = {\n    key: 'idleClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      frames: [160]\n    }),\n    frameRate: 15,\n    repeat: -1\n  };\n  scene.anims.create(idleClothes);\n  var attackClothes = {\n    key: 'attackClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 1440,\n      end: 1443\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(attackClothes);\n  var miningClothes = {\n    key: 'miningClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 2480,\n      end: 2483\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(miningClothes);\n  var gatheringClothes = {\n    key: 'gatheringClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 8 * 10 * 10,\n      end: 8 * 10 * 10 + 2\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(gatheringClothes);\n  var choppingClothes = {\n    key: 'choppingClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 8 * 10 * 35,\n      end: 8 * 10 * 35 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(choppingClothes);\n  var fishingClothes = {\n    key: 'fishingClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 8 * 10 * 47,\n      end: 8 * 10 * 47 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(fishingClothes);\n  var wateringClothes = {\n    key: 'wateringClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 8 * 10 * 39,\n      end: 8 * 10 * 39 + 1\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(wateringClothes);\n  var shovelingClothes = {\n    key: 'shovelingClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 8 * 10 * 43,\n      end: 8 * 10 * 43 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(shovelingClothes);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (animatedPlayer);\n\n//# sourceURL=webpack:///./src/game/systems/playerSpritesheetAnimations.ts?");

/***/ }),

/***/ "./src/game/utils/stringHandler.ts":
/*!*****************************************!*\
  !*** ./src/game/utils/stringHandler.ts ***!
  \*****************************************/
/*! exports provided: pathHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pathHandler\", function() { return pathHandler; });\nvar pathHandler = function pathHandler(url) {\n  var pathPrefix = '';\n\n  if (Object({\"NODE_ENV\":\"development\",\"BASE_URL\":\"/\"}).ENVI === 'production') {\n    pathPrefix = '/game';\n  }\n\n  return pathPrefix + url;\n}; // export const pathHandler = (url) => {\n//   let pathPrefix = '/game';\n//   return pathPrefix + url;\n// };\n\n//# sourceURL=webpack:///./src/game/utils/stringHandler.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router */ \"./src/router/index.ts\");\n\n\n\n\n\n\n\nObject(vue__WEBPACK_IMPORTED_MODULE_4__[\"createApp\"])(_App_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).use(_router__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).mount('#app');\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/router/index.ts":
/*!*****************************!*\
  !*** ./src/router/index.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/Home.vue */ \"./src/views/Home.vue\");\n\n\n\n\n\nvar routes = [{\n  path: '/',\n  name: 'Home',\n  component: _views_Home_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}, {\n  path: '/about',\n  name: 'About',\n  // route level code-splitting\n  // this generates a separate chunk (about.[hash].js) for this route\n  // which is lazy-loaded when the route is visited.\n  component: function component() {\n    return __webpack_require__.e(/*! import() | about */ \"about\").then(__webpack_require__.bind(null, /*! ../views/About.vue */ \"./src/views/About.vue\"));\n  }\n}];\nvar router = Object(vue_router__WEBPACK_IMPORTED_MODULE_3__[\"createRouter\"])({\n  history: Object(vue_router__WEBPACK_IMPORTED_MODULE_3__[\"createWebHashHistory\"])(),\n  routes: routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/router/index.ts?");

/***/ }),

/***/ "./src/views/Home.vue":
/*!****************************!*\
  !*** ./src/views/Home.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_vue_vue_type_template_id_fae5bece_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=fae5bece&ts=true */ \"./src/views/Home.vue?vue&type=template&id=fae5bece&ts=true\");\n/* harmony import */ var _Home_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=ts */ \"./src/views/Home.vue?vue&type=script&lang=ts\");\n/* empty/unused harmony star reexport *//* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_Home_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Home_vue_vue_type_template_id_fae5bece_ts_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/views/Home.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/views/Home.vue?");

/***/ }),

/***/ "./src/views/Home.vue?vue&type=script&lang=ts":
/*!****************************************************!*\
  !*** ./src/views/Home.vue?vue&type=script&lang=ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_15_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_15_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Home_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--15-0!../../node_modules/babel-loader/lib!../../node_modules/ts-loader??ref--15-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./Home.vue?vue&type=script&lang=ts */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Home.vue?vue&type=script&lang=ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_15_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_15_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Home_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/views/Home.vue?");

/***/ }),

/***/ "./src/views/Home.vue?vue&type=template&id=fae5bece&ts=true":
/*!******************************************************************!*\
  !*** ./src/views/Home.vue?vue&type=template&id=fae5bece&ts=true ***!
  \******************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_15_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_15_2_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Home_vue_vue_type_template_id_fae5bece_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--15-0!../../node_modules/babel-loader/lib!../../node_modules/ts-loader??ref--15-2!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./Home.vue?vue&type=template&id=fae5bece&ts=true */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Home.vue?vue&type=template&id=fae5bece&ts=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_15_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_15_2_node_modules_vue_loader_v16_dist_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Home_vue_vue_type_template_id_fae5bece_ts_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Home.vue?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.ts */\"./src/main.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/main.ts?");

/***/ })

/******/ });