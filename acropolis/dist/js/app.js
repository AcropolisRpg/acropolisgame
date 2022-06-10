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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ \"./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _game_scenes_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game/scenes/Game */ \"./src/game/scenes/Game.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var web3_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3-token */ \"./node_modules/web3-token/dist/web3-token.umd.min.js\");\n/* harmony import */ var web3_token__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3_token__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\n\n\n\n\n\n //local\n//const socket = io();\n// prod\n\nvar socket; // if (process.env.ENVI === 'production') {\n//   socket = io(window.location.origin, { path: '/gameSocket' });\n// } else {\n\nsocket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(); //  socket = io(window.location.origin, { path: '/gameSocket' });\n// }\n// import TitleScreen from '../game/scenes/TileScreen'\n// import Web3 from 'web3';\n// import Web3Token from 'web3-token';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Acropolis',\n  data: function data() {\n    return {\n      isLoggedIn: false\n    };\n  },\n  methods: {\n    initGame: function initGame() {\n      // game.scene.add('titlescreen', TitleScreen)\n      var test = /*#__PURE__*/function () {\n        var _ref = Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().mark(function _callee() {\n          var web3, address, token;\n          return Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  _context.next = 2;\n                  return socket.once('connect', function () {\n                    // console.log('connected');\n                    socket.emit('register', function (socketId) {\n                      console.log('socketId', socketId); // this.currentPlayerId = socketId;\n                    }); //this.ball.anchor.set(0.5, 0.5);\n                  });\n\n                case 2:\n                  // Connection to MetaMask wallet\n                  web3 = new web3__WEBPACK_IMPORTED_MODULE_4___default.a(window.ethereum);\n                  _context.next = 5;\n                  return window.ethereum.request({\n                    method: 'eth_requestAccounts'\n                  });\n\n                case 5:\n                  _context.next = 7;\n                  return web3.eth.getAccounts();\n\n                case 7:\n                  address = _context.sent[0];\n                  _context.next = 10;\n                  return web3_token__WEBPACK_IMPORTED_MODULE_5___default.a.sign(function (msg) {\n                    return web3.eth.personal.sign(msg, address);\n                  }, '1d');\n\n                case 10:\n                  token = _context.sent;\n                  console.log(token);\n                  socket.emit('login', token);\n\n                case 13:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function test() {\n          return _ref.apply(this, arguments);\n        };\n      }();\n\n      test();\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    socket.on('loggedIn', function (isLoggedIn) {\n      console.log('leand', isLoggedIn);\n      _this.isLoggedIn = isLoggedIn;\n      setTimeout(function () {\n        var config = {\n          type: phaser__WEBPACK_IMPORTED_MODULE_2___default.a.AUTO,\n          scale: {\n            parent: 'phaser-example',\n            mode: phaser__WEBPACK_IMPORTED_MODULE_2___default.a.Scale.FIT,\n            width: 600,\n            height: 600\n          }\n        };\n        var game = new phaser__WEBPACK_IMPORTED_MODULE_2___default.a.Game(config);\n        game.scene.add('acropolisGame', _game_scenes_Game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n        game.scene.start('acropolisGame', {\n          socket: socket\n        });\n      }, 2000);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Acropolis.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Home.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/Home.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Acropolis_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Acropolis.vue */ \"./src/components/Acropolis.vue\");\n// @ is an alias to /src\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Home',\n  components: {\n    Acropolis: _components_Acropolis_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Home.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache) {\n  var _component_router_view = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"router-view\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\" <div id=\\\"nav\\\">\\n    <router-link to=\\\"/\\\">Home</router-link> |\\n    <router-link to=\\\"/about\\\">About</router-link>\\n  </div> \"), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_view)]);\n}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Acropolis.vue?vue&type=template&id=5aa075b8&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Acropolis.vue?vue&type=template&id=5aa075b8&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nvar _withScopeId = function _withScopeId(n) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"pushScopeId\"])(\"data-v-5aa075b8\"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"popScopeId\"])(), n;\n};\n\nvar _hoisted_1 = {\n  key: 0\n};\n\nvar _hoisted_2 = /*#__PURE__*/_withScopeId(function () {\n  return /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h3\", {\n    style: {\n      \"color\": \"#fff\",\n      \"text-align\": \"center\",\n      \"padding\": \"5px\",\n      \"max-width\": \"200px\",\n      \"margin\": \"0 auto\"\n    }\n  }, \" Welcome to Acropolis MMORPG Beta Testing! \", -1\n  /* HOISTED */\n  );\n});\n\nvar _hoisted_3 = {\n  key: 1\n};\n\nvar _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createStaticVNode\"])(\"<div style=\\\"text-align:center;margin:25px auto;\\\" data-v-5aa075b8><h3 style=\\\"color:#fff;\\\" data-v-5aa075b8>Acropolis Playgrounds BETA Development!</h3><div id=\\\"phaser-example\\\" style=\\\"border-radius:100px;\\\" data-v-5aa075b8></div><h3 style=\\\"color:#fff;\\\" data-v-5aa075b8> Click anywhere to move around or press &quot;QWERASDF&quot; key for skills. </h3><a href=\\\"https://www.acropolisrpg.com/\\\" style=\\\"color:#fff;\\\" data-v-5aa075b8>Go to Acropolist home page</a></div><p style=\\\"color:#fff;text-align:center;\\\" data-v-5aa075b8> The first time you login you will receive a reward of 100 $ACR, be wise because that&#39;s the only currency that will be used inside and outside the game. </p><h3 style=\\\"color:#fff;text-align:center;\\\" data-v-5aa075b8> If you can&#39;t see the game screen refresh and login again! </h3><p style=\\\"color:#fff;text-align:center;\\\" data-v-5aa075b8> Server stats. <span id=\\\"online\\\" data-v-5aa075b8>0</span> users online. <span id=\\\"fps\\\" data-v-5aa075b8>0</span> server fps. <span id=\\\"worldX\\\" data-v-5aa075b8>0</span> server fps. <span id=\\\"worldY\\\" data-v-5aa075b8>0</span> server fps. </p>\", 4);\n\nvar _hoisted_8 = [_hoisted_4];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", null, [!$data.isLoggedIn ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, [_hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", {\n    style: {\n      \"color\": \"#fff\",\n      \"text-align\": \"center\",\n      \"border\": \"1px solid white\",\n      \"padding\": \"5px\",\n      \"max-width\": \"200px\",\n      \"margin\": \"0 auto\"\n    },\n    onClick: _cache[0] || (_cache[0] = function () {\n      return $options.initGame && $options.initGame.apply($options, arguments);\n    })\n  }, \" Click here to Login! \")])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_3, _hoisted_8))]);\n}\n\n//# sourceURL=webpack:///./src/components/Acropolis.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Home.vue?vue&type=template&id=fae5bece":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/Home.vue?vue&type=template&id=fae5bece ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"home\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_Acropolis = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"Acropolis\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_Acropolis)]);\n}\n\n//# sourceURL=webpack:///./src/views/Home.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--13-0!../node_modules/babel-loader/lib!../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader-v16/dist??ref--1-1!./App.vue?vue&type=template&id=7ba5bd90 */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Acropolis_vue_vue_type_template_id_5aa075b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./Acropolis.vue?vue&type=template&id=5aa075b8&scoped=true */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Acropolis.vue?vue&type=template&id=5aa075b8&scoped=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Acropolis_vue_vue_type_template_id_5aa075b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Acropolis.vue?");

/***/ }),

/***/ "./src/game/constants/constants.js":
/*!*****************************************!*\
  !*** ./src/game/constants/constants.js ***!
  \*****************************************/
/*! exports provided: FRAME_SIZE_24_24, FRAME_SIZE_32_32, FRAME_SIZE_96_96, FRAME_SIZE_16_16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRAME_SIZE_24_24\", function() { return FRAME_SIZE_24_24; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRAME_SIZE_32_32\", function() { return FRAME_SIZE_32_32; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRAME_SIZE_96_96\", function() { return FRAME_SIZE_96_96; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRAME_SIZE_16_16\", function() { return FRAME_SIZE_16_16; });\nvar frameSize = function frameSize(frameWidth, frameHeight) {\n  return {\n    frameWidth: frameWidth,\n    frameHeight: frameHeight\n  };\n};\n\nvar FRAME_SIZE_24_24 = frameSize(24, 24);\nvar FRAME_SIZE_32_32 = frameSize(32, 32);\nvar FRAME_SIZE_96_96 = frameSize(96, 96);\nvar FRAME_SIZE_16_16 = frameSize(16, 16);\n\n//# sourceURL=webpack:///./src/game/constants/constants.js?");

/***/ }),

/***/ "./src/game/phaserHelper/loaders.js":
/*!******************************************!*\
  !*** ./src/game/phaserHelper/loaders.js ***!
  \******************************************/
/*! exports provided: loadImage, loadTilemapTiledJSON, loadSpritesheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImage\", function() { return loadImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadTilemapTiledJSON\", function() { return loadTilemapTiledJSON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSpritesheet\", function() { return loadSpritesheet; });\n/* harmony import */ var _utils_stringHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/stringHandler */ \"./src/game/utils/stringHandler.js\");\n\nvar loadImage = function loadImage(scene, key, url) {\n  return scene.load.image(key, Object(_utils_stringHandler__WEBPACK_IMPORTED_MODULE_0__[\"pathHandler\"])(url));\n};\nvar loadTilemapTiledJSON = function loadTilemapTiledJSON(scene, key, url) {\n  return scene.load.tilemapTiledJSON(key, Object(_utils_stringHandler__WEBPACK_IMPORTED_MODULE_0__[\"pathHandler\"])(url));\n};\nvar loadSpritesheet = function loadSpritesheet(scene, key, url, frameSizing) {\n  return scene.load.spritesheet(key, Object(_utils_stringHandler__WEBPACK_IMPORTED_MODULE_0__[\"pathHandler\"])(url), frameSizing);\n};\n\n//# sourceURL=webpack:///./src/game/phaserHelper/loaders.js?");

/***/ }),

/***/ "./src/game/scenes/Game.js":
/*!*********************************!*\
  !*** ./src/game/scenes/Game.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ \"./node_modules/@babel/runtime/helpers/esm/createSuper.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ \"./node_modules/core-js/modules/es.object.entries.js\");\n/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _utils_cooldownTimer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/cooldownTimer */ \"./src/game/utils/cooldownTimer.js\");\n/* harmony import */ var _systems_loadingBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../systems/loadingBar */ \"./src/game/systems/loadingBar.js\");\n/* harmony import */ var _utils_transformManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/transformManager */ \"./src/game/utils/transformManager.js\");\n/* harmony import */ var _phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../phaserHelper/loaders */ \"./src/game/phaserHelper/loaders.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants/constants */ \"./src/game/constants/constants.js\");\n/* harmony import */ var _systems_playerSpritesheetAnimations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../systems/playerSpritesheetAnimations */ \"./src/game/systems/playerSpritesheetAnimations.js\");\n/* harmony import */ var _systems_playerPlayAnimations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../systems/playerPlayAnimations */ \"./src/game/systems/playerPlayAnimations.js\");\n/* harmony import */ var _systems_gameController__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../systems/gameController */ \"./src/game/systems/gameController.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Game = /*#__PURE__*/function (_Phaser$Scene) {\n  Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Game, _Phaser$Scene);\n\n  var _super = Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Game);\n\n  function Game() {\n    Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Game);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Game, [{\n    key: \"init\",\n    value: function init(data) {\n      this.lobbyScene = {};\n      this.lobbyScene.socket = data.socket;\n    }\n  }, {\n    key: \"preload\",\n    value: function preload() {\n      //This is the place where you load all assets.\n      Object(_systems_loadingBar__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this);\n      Object(_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_12__[\"loadImage\"])(this, 'ball', '/game/sprites/spikedballa.png');\n      Object(_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_12__[\"loadImage\"])(this, 'atlas', '/game/tiled/atlas.png');\n      Object(_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_12__[\"loadTilemapTiledJSON\"])(this, 'forestkey', '/game/tiled/forest1.json');\n      Object(_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_12__[\"loadSpritesheet\"])(this, 'bodySpriteSheet', '/game/character/characters/char_all.png', _constants_constants__WEBPACK_IMPORTED_MODULE_13__[\"FRAME_SIZE_32_32\"]);\n      Object(_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_12__[\"loadSpritesheet\"])(this, 'shoesSpriteSheet', '/game/character/clothes/shoes.png', _constants_constants__WEBPACK_IMPORTED_MODULE_13__[\"FRAME_SIZE_32_32\"]);\n      Object(_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_12__[\"loadSpritesheet\"])(this, 'clothesSpriteSheet', '/game/character/clothes/basic.png', _constants_constants__WEBPACK_IMPORTED_MODULE_13__[\"FRAME_SIZE_32_32\"]);\n      Object(_phaserHelper_loaders__WEBPACK_IMPORTED_MODULE_12__[\"loadSpritesheet\"])(this, 'balla', '/game/sprites/spikedballa.png', _constants_constants__WEBPACK_IMPORTED_MODULE_13__[\"FRAME_SIZE_96_96\"]);\n      this.allPlayers = {};\n      this.followingPlayer = false;\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      var _this = this;\n\n      //Build Map\n      var map = this.make.tilemap({\n        key: 'forestkey',\n        tileWidth: 16,\n        tileHeight: 16\n      });\n      var tileset = map.addTilesetImage('atlas', 'atlas');\n      map.createLayer('piso', tileset, 0, 0);\n      map.createLayer('caminos', tileset, 0, 0);\n      map.createLayer('plantas', tileset, 0, 0);\n      map.createLayer('construcciones', tileset, 0, 0); // Crete player Animations\n\n      Object(_systems_playerSpritesheetAnimations__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(this); //Restrict camera maximum movement\n\n      this.cameras.main.setBounds(0, 0, 1000, 1000); //Time Management?\n\n      this.clientLastUpdate = Date.now();\n      this.clientLastDelta = Date.now();\n      this.clientLastDeltaTime = Date.now();\n      this.pointerado = this.input.activePointer;\n      this.instance1 = Object(_utils_cooldownTimer__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(5000);\n      this.instance2 = Object(_utils_cooldownTimer__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(1000);\n      this.instance3 = Object(_utils_cooldownTimer__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(100);\n      this.lastUpdate = Date.now();\n      this.dt = 0; //Disable right click context menu\n\n      this.input.mouse.disableContextMenu(); //Refactor all this shit into a fucking system with components\n\n      this.input.on('pointerup', function (pointer) {\n        if (pointer.leftButtonReleased()) {\n          var _this$allPlayers, _this$allPlayers$_thi, _this$allPlayers2, _this$allPlayers2$_th, _this$allPlayers3, _this$allPlayers3$_th, _this$allPlayers3$_th2, _this$allPlayers3$_th3, _this$allPlayers3$_th4;\n\n          if ((_this$allPlayers = _this.allPlayers) !== null && _this$allPlayers !== void 0 && (_this$allPlayers$_thi = _this$allPlayers[_this.currentPlayerId]) !== null && _this$allPlayers$_thi !== void 0 && _this$allPlayers$_thi.target && (_this$allPlayers2 = _this.allPlayers) !== null && _this$allPlayers2 !== void 0 && (_this$allPlayers2$_th = _this$allPlayers2[_this.currentPlayerId]) !== null && _this$allPlayers2$_th !== void 0 && _this$allPlayers2$_th.sprite && ((_this$allPlayers3 = _this.allPlayers) === null || _this$allPlayers3 === void 0 ? void 0 : (_this$allPlayers3$_th = _this$allPlayers3[_this.currentPlayerId]) === null || _this$allPlayers3$_th === void 0 ? void 0 : (_this$allPlayers3$_th2 = _this$allPlayers3$_th.sprite) === null || _this$allPlayers3$_th2 === void 0 ? void 0 : (_this$allPlayers3$_th3 = _this$allPlayers3$_th2.anims) === null || _this$allPlayers3$_th3 === void 0 ? void 0 : (_this$allPlayers3$_th4 = _this$allPlayers3$_th3.currentAnim) === null || _this$allPlayers3$_th4 === void 0 ? void 0 : _this$allPlayers3$_th4.key) !== 'running') {\n            Object(_systems_playerPlayAnimations__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(_this, 'running', _this.allPlayers[_this.currentPlayerId]);\n\n            if (_this.allPlayers[_this.currentPlayerId].sprite.x < _this.pointerado.worldX) {\n              _this.allPlayers[_this.currentPlayerId].sprites.body.flipX = false;\n              _this.allPlayers[_this.currentPlayerId].sprites.shoes.flipX = false;\n              _this.allPlayers[_this.currentPlayerId].sprites.clothes.flipX = false;\n            } else {\n              _this.allPlayers[_this.currentPlayerId].sprites.body.flipX = true;\n              _this.allPlayers[_this.currentPlayerId].sprites.shoes.flipX = true;\n              _this.allPlayers[_this.currentPlayerId].sprites.clothes.flipX = true;\n            }\n          }\n\n          var target = {\n            x: Math.round(pointer.worldX),\n            y: Math.round(pointer.worldY)\n          };\n          _this.allPlayers[_this.currentPlayerId].target = target;\n\n          _this.lobbyScene.socket.emit('player click', target);\n        }\n      });\n      this.input.on('pointerdown', function (pointer) {\n        if (pointer.leftButtonReleased()) {\n          var target = {\n            x: pointer.worldX,\n            y: pointer.worldY\n          };\n          _this.allPlayers[_this.currentPlayerId].target = target;\n        }\n      }); //Yes this is a fucking bloody hell, refactor into systems and components\n\n      this.lobbyScene.socket.on('update state', function (_ref) {\n        var players = _ref.players;\n        var now = Date.now();\n        _this.dt = (now - _this.lastUpdate) / (1000 / 30);\n        _this.lastUpdate = now;\n        players.forEach(function (player) {\n          var _this$allPlayers4, _player$skills, _player$skills2, _this$allPlayers5, _this$allPlayers6;\n\n          if (!((_this$allPlayers4 = _this.allPlayers) !== null && _this$allPlayers4 !== void 0 && _this$allPlayers4[player.id])) {\n            _this.allPlayers[player.id] = {\n              sprites: {\n                body: _this.add.sprite(player.position.x, player.position.y, 'bodySpriteSheet'),\n                shoes: _this.add.sprite(player.position.x, player.position.y, 'shoesSpriteSheet'),\n                clothes: _this.add.sprite(player.position.x, player.position.y, 'clothesSpriteSheet')\n              },\n              playerId: player.id,\n              transform: {\n                x: player.position.x,\n                y: player.position.y\n              },\n              target: {\n                x: player.position.x,\n                y: player.position.y\n              },\n              skills: null\n            };\n          } // if(this.instance1.remainigTime() === 5000) {\n\n\n          if ((_player$skills = player.skills) !== null && _player$skills !== void 0 && _player$skills.y && (_player$skills2 = player.skills) !== null && _player$skills2 !== void 0 && _player$skills2.x && !((_this$allPlayers5 = _this.allPlayers) !== null && _this$allPlayers5 !== void 0 && _this$allPlayers5[player.id].skills)) {\n            _this.allPlayers[player.id].skills = _this.add.sprite(player.skills.x, player.skills.y, 'ball');\n          } else if (player.skills === null && (_this$allPlayers6 = _this.allPlayers) !== null && _this$allPlayers6 !== void 0 && _this$allPlayers6[player.id].skills) {\n            _this.allPlayers[player.id].skills.destroy();\n\n            _this.allPlayers[player.id].skills = null;\n          } // }\n\n\n          if (_this.instance1.remainigTime() === 5000) {// console.log('changa', player);\n          }\n\n          if (!isNaN(_this.dt)) {\n            var _this$allPlayers7, _this$allPlayers7$pla, _this$allPlayers7$pla2, _this$allPlayers8, _this$allPlayers8$pla, _this$allPlayers8$pla2, _player$skills3, _player$skills4, _this$allPlayers9, _this$allPlayers9$pla, _this$allPlayers9$pla2, _this$allPlayers9$pla3, _this$allPlayers9$pla4, _this$allPlayers10, _this$allPlayers10$pl, _this$allPlayers10$pl2, _this$allPlayers10$pl3, _this$allPlayers10$pl4;\n\n            if ((_this$allPlayers7 = _this.allPlayers) !== null && _this$allPlayers7 !== void 0 && (_this$allPlayers7$pla = _this$allPlayers7[player.id]) !== null && _this$allPlayers7$pla !== void 0 && (_this$allPlayers7$pla2 = _this$allPlayers7$pla.skills) !== null && _this$allPlayers7$pla2 !== void 0 && _this$allPlayers7$pla2.x && (_this$allPlayers8 = _this.allPlayers) !== null && _this$allPlayers8 !== void 0 && (_this$allPlayers8$pla = _this$allPlayers8[player.id]) !== null && _this$allPlayers8$pla !== void 0 && (_this$allPlayers8$pla2 = _this$allPlayers8$pla.skills) !== null && _this$allPlayers8$pla2 !== void 0 && _this$allPlayers8$pla2.y && (_player$skills3 = player.skills) !== null && _player$skills3 !== void 0 && _player$skills3.x && (_player$skills4 = player.skills) !== null && _player$skills4 !== void 0 && _player$skills4.y) {\n              _this.allPlayers[player.id].skills.x = Math.round(Object(_utils_transformManager__WEBPACK_IMPORTED_MODULE_11__[\"lerp\"])(_this.allPlayers[player.id].skills.x, player.skills.x, _this.dt));\n              _this.allPlayers[player.id].skills.y = Math.round(Object(_utils_transformManager__WEBPACK_IMPORTED_MODULE_11__[\"lerp\"])(_this.allPlayers[player.id].skills.y, player.skills.y, _this.dt));\n            }\n\n            if (_this.allPlayers[player.id].sprites.body.x === Infinity) {\n              _this.allPlayers[player.id].sprites.body.x = 0;\n              _this.allPlayers[player.id].sprites.shoes.x = 0;\n              _this.allPlayers[player.id].sprites.clothes.x = 0;\n            }\n\n            if (_this.allPlayers[player.id].sprites.body.y === Infinity) {\n              _this.allPlayers[player.id].sprites.body.y = 0;\n              _this.allPlayers[player.id].sprites.shoes.y = 0;\n              _this.allPlayers[player.id].sprites.clothes.y = 0;\n            }\n\n            _this.allPlayers[player.id].transform.x = Math.round(Object(_utils_transformManager__WEBPACK_IMPORTED_MODULE_11__[\"lerp\"])(_this.allPlayers[player.id].sprites.body.x, player.position.x, _this.dt));\n            _this.allPlayers[player.id].transform.y = Math.round(Object(_utils_transformManager__WEBPACK_IMPORTED_MODULE_11__[\"lerp\"])(_this.allPlayers[player.id].sprites.body.y, player.position.y, _this.dt));\n            _this.allPlayers[player.id].target = player.target; // if(this.isAttaking){\n            //   return\n            // }\n\n            if (((_this$allPlayers9 = _this.allPlayers) === null || _this$allPlayers9 === void 0 ? void 0 : (_this$allPlayers9$pla = _this$allPlayers9[player.id]) === null || _this$allPlayers9$pla === void 0 ? void 0 : (_this$allPlayers9$pla2 = _this$allPlayers9$pla.sprites.body) === null || _this$allPlayers9$pla2 === void 0 ? void 0 : (_this$allPlayers9$pla3 = _this$allPlayers9$pla2.anims) === null || _this$allPlayers9$pla3 === void 0 ? void 0 : (_this$allPlayers9$pla4 = _this$allPlayers9$pla3.currentAnim) === null || _this$allPlayers9$pla4 === void 0 ? void 0 : _this$allPlayers9$pla4.key) !== 'running' && !_this.isAttaking && Object(_utils_transformManager__WEBPACK_IMPORTED_MODULE_11__[\"getDistance\"])(_this.allPlayers[player.id].sprites.body, player.target) > 1) {\n              Object(_systems_playerPlayAnimations__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(_this, 'running', _this.allPlayers[player.id]);\n            }\n\n            if (((_this$allPlayers10 = _this.allPlayers) === null || _this$allPlayers10 === void 0 ? void 0 : (_this$allPlayers10$pl = _this$allPlayers10[player.id]) === null || _this$allPlayers10$pl === void 0 ? void 0 : (_this$allPlayers10$pl2 = _this$allPlayers10$pl.sprites.body) === null || _this$allPlayers10$pl2 === void 0 ? void 0 : (_this$allPlayers10$pl3 = _this$allPlayers10$pl2.anims) === null || _this$allPlayers10$pl3 === void 0 ? void 0 : (_this$allPlayers10$pl4 = _this$allPlayers10$pl3.currentAnim) === null || _this$allPlayers10$pl4 === void 0 ? void 0 : _this$allPlayers10$pl4.key) !== 'idle' && !_this.isAttaking && Object(_utils_transformManager__WEBPACK_IMPORTED_MODULE_11__[\"getDistance\"])(_this.allPlayers[player.id].sprites.body, player.target) < 1) {\n              Object(_systems_playerPlayAnimations__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(_this, 'idle', _this.allPlayers[player.id]);\n            }\n\n            if (_this.allPlayers[player.id].sprites.body) {\n              if (_this.allPlayers[player.id].sprites.body.x < player.target.x) {\n                _this.allPlayers[player.id].sprites.body.flipX = false;\n                _this.allPlayers[player.id].sprites.shoes.flipX = false;\n                _this.allPlayers[player.id].sprites.clothes.flipX = false;\n              } else {\n                _this.allPlayers[player.id].sprites.body.flipX = true;\n                _this.allPlayers[player.id].sprites.shoes.flipX = true;\n                _this.allPlayers[player.id].sprites.clothes.flipX = true;\n              }\n            }\n\n            if (_this.instance1.remainigTime() === 5000) {// console.log('toti', player.skills);\n            }\n          }\n        }); //Store this in the right system.\n\n        var _loop = function _loop() {\n          var _Object$entries$_i = Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_Object$entries[_i], 2),\n              key = _Object$entries$_i[0],\n              value = _Object$entries$_i[1];\n\n          var exist = false;\n          players.forEach(function (player) {\n            if (key === player.id) {\n              exist = true;\n            }\n          });\n\n          if (!exist) {\n            value.sprite.destroy();\n            delete _this.allPlayers[key];\n          }\n        };\n\n        for (var _i = 0, _Object$entries = Object.entries(_this.allPlayers); _i < _Object$entries.length; _i++) {\n          _loop();\n        }\n      });\n      setTimeout(function () {\n        Object(_systems_gameController__WEBPACK_IMPORTED_MODULE_16__[\"default\"])(_this, _this.allPlayers[_this.currentPlayerId]);\n      }, 2000);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      var clientNow = Date.now();\n      this.clientDeltaTime = (clientNow - this.clientLastUpdate) / (1000 / 60);\n      this.clientLastUpdate = clientNow;\n      this.correction = this.clientDeltaTime / this.clientLastDeltaTime;\n      this.clientLastDeltaTime = this.clientDeltaTime; //   let fpsa = 1000 / (now - lastUpdate);\n\n      if (this.allPlayers === {}) {\n        return;\n      }\n\n      for (var _i2 = 0, _Object$entries2 = Object.entries(this.allPlayers); _i2 < _Object$entries2.length; _i2++) {\n        var _Object$entries2$_i = Object(C_Proyectos_acropolisgame_acropolis_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_Object$entries2[_i2], 1),\n            key = _Object$entries2$_i[0];\n\n        if (this.lobbyScene.socket.id && this.allPlayers[this.lobbyScene.socket.id].sprites.body) {\n          var _this$allPlayers11, _this$allPlayers11$th;\n\n          this.currentPlayerId = this.lobbyScene.socket.id;\n\n          if ((_this$allPlayers11 = this.allPlayers) !== null && _this$allPlayers11 !== void 0 && (_this$allPlayers11$th = _this$allPlayers11[this.currentPlayerId]) !== null && _this$allPlayers11$th !== void 0 && _this$allPlayers11$th.sprites.body && !this.followingPlayer && this.cameras.main) {\n            this.followingPlayer = true;\n            this.cameras.main.startFollow(this.allPlayers[this.currentPlayerId].sprites.body, false, this.clientDeltaTime * this.correction, this.clientDeltaTime * this.correction);\n            this.cameras.main.zoom = 2;\n            this.cameras.main.roundPixels = true;\n          }\n        }\n\n        if (!isNaN(this.clientDeltaTime)) {\n          var _this$allPlayers12, _this$allPlayers12$th, _this$allPlayers12$th2, _this$allPlayers12$th3, _this$allPlayers12$th4;\n\n          if (this.allPlayers[key].sprites.body.x === Infinity) {\n            this.allPlayers[key].sprites.body.x = 0;\n            this.allPlayers[key].sprites.shoes.x = 0;\n            this.allPlayers[key].sprites.clothes.x = 0;\n          }\n\n          if (this.allPlayers[key].sprites.body.y === Infinity) {\n            this.allPlayers[key].sprites.body.y = 0;\n            this.allPlayers[key].sprites.shoes.y = 0;\n            this.allPlayers[key].sprites.clothes.y = 0;\n          }\n\n          if (Object(_utils_transformManager__WEBPACK_IMPORTED_MODULE_11__[\"getDistance\"])(this.allPlayers[key].sprites.body, this.allPlayers[key].target) > 1) {\n            this.allPlayers[key].sprites.body.x = Object(_utils_transformManager__WEBPACK_IMPORTED_MODULE_11__[\"lerp\"])(this.allPlayers[key].sprites.body.x, this.allPlayers[key].transform.x, this.clientDeltaTime);\n            this.allPlayers[key].sprites.shoes.x = Object(_utils_transformManager__WEBPACK_IMPORTED_MODULE_11__[\"lerp\"])(this.allPlayers[key].sprites.shoes.x, this.allPlayers[key].transform.x, this.clientDeltaTime);\n            this.allPlayers[key].sprites.clothes.x = Object(_utils_transformManager__WEBPACK_IMPORTED_MODULE_11__[\"lerp\"])(this.allPlayers[key].sprites.clothes.x, this.allPlayers[key].transform.x, this.clientDeltaTime);\n            this.allPlayers[key].sprites.body.y = Object(_utils_transformManager__WEBPACK_IMPORTED_MODULE_11__[\"lerp\"])(this.allPlayers[key].sprites.body.y, this.allPlayers[key].transform.y, this.clientDeltaTime);\n            this.allPlayers[key].sprites.shoes.y = Object(_utils_transformManager__WEBPACK_IMPORTED_MODULE_11__[\"lerp\"])(this.allPlayers[key].sprites.shoes.y, this.allPlayers[key].transform.y, this.clientDeltaTime);\n            this.allPlayers[key].sprites.clothes.y = Object(_utils_transformManager__WEBPACK_IMPORTED_MODULE_11__[\"lerp\"])(this.allPlayers[key].sprites.clothes.y, this.allPlayers[key].transform.y, this.clientDeltaTime);\n          } // Debugger conbsole logs\n\n\n          if (this.instance3.remainigTime() >= 100) {// console.log(this.cameras.main)\n            // console.log(getDistance (this.allPlayers[key].sprite, this.allPlayers[key].target))\n            // console.log(getDistance (this.allPlayers[this.currentPlayerId].sprite, this.allPlayers[this.currentPlayerId].target))\n            // this.allPlayers[this.currentPlayerId].sprite.play({ key: 'idle' });\n            // console.log(this.allPlayers?.[this.currentPlayerId]?.sprite?.anims?.currentAnim?.key  === 'running' , this.allPlayers[key].sprite.y, this.allPlayers[key].target.y)\n            // console.log(this.allPlayers[key].sprite.y - this.allPlayers[key].transform.y)\n          }\n\n          if (((_this$allPlayers12 = this.allPlayers) === null || _this$allPlayers12 === void 0 ? void 0 : (_this$allPlayers12$th = _this$allPlayers12[this.currentPlayerId]) === null || _this$allPlayers12$th === void 0 ? void 0 : (_this$allPlayers12$th2 = _this$allPlayers12$th.sprites.body) === null || _this$allPlayers12$th2 === void 0 ? void 0 : (_this$allPlayers12$th3 = _this$allPlayers12$th2.anims) === null || _this$allPlayers12$th3 === void 0 ? void 0 : (_this$allPlayers12$th4 = _this$allPlayers12$th3.currentAnim) === null || _this$allPlayers12$th4 === void 0 ? void 0 : _this$allPlayers12$th4.key) === 'running' && !this.isAttaking && Object(_utils_transformManager__WEBPACK_IMPORTED_MODULE_11__[\"getDistance\"])(this.allPlayers[this.currentPlayerId].sprites.body, this.allPlayers[this.currentPlayerId].target) < 1) {\n            Object(_systems_playerPlayAnimations__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(this, 'idle', this.allPlayers[this.currentPlayerId]);\n          }\n        }\n      }\n\n      if (this.pointerado.leftButtonDown() && !this.pointerado.leftButtonReleased() && this.instance3.remainigTime() >= 100) {\n        if (this.allPlayers[this.currentPlayerId].sprites.body) {\n          if (this.allPlayers[this.currentPlayerId].sprites.body.x < this.pointerado.worldX) {\n            this.allPlayers[this.currentPlayerId].sprites.body.flipX = false;\n            this.allPlayers[this.currentPlayerId].sprites.shoes.flipX = false;\n            this.allPlayers[this.currentPlayerId].sprites.clothes.flipX = false;\n          } else {\n            this.allPlayers[this.currentPlayerId].sprites.body.flipX = true;\n            this.allPlayers[this.currentPlayerId].sprites.shoes.flipX = true;\n            this.allPlayers[this.currentPlayerId].sprites.clothes.flipX = true;\n          }\n        }\n\n        this.lobbyScene.socket.emit('player click', {\n          x: Math.round(this.pointerado.worldX),\n          y: Math.round(this.pointerado.worldY)\n        });\n      }\n    }\n  }]);\n\n  return Game;\n}(phaser__WEBPACK_IMPORTED_MODULE_8___default.a.Scene);\n\n\n\n//# sourceURL=webpack:///./src/game/scenes/Game.js?");

/***/ }),

/***/ "./src/game/systems/gameController.js":
/*!********************************************!*\
  !*** ./src/game/systems/gameController.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _playerPlayAnimations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerPlayAnimations */ \"./src/game/systems/playerPlayAnimations.js\");\n\n\nvar gameController = function gameController(currentScene, player) {\n  var currentPlayer = player;\n  currentScene.input.keyboard.on('keydown', function (e) {\n    if (currentScene.isAttaking) {\n      return;\n    }\n\n    currentScene.isAttaking = true;\n\n    switch (e.code) {\n      case 'KeyQ':\n        currentScene.lobbyScene.socket.emit('player q');\n        break;\n\n      case 'KeyW':\n        Object(_playerPlayAnimations__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentScene, 'attack', currentPlayer);\n        break;\n\n      case 'KeyE':\n        Object(_playerPlayAnimations__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentScene, 'mining', currentPlayer);\n        break;\n\n      case 'KeyR':\n        Object(_playerPlayAnimations__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentScene, 'gathering', currentPlayer);\n        break;\n\n      case 'KeyA':\n        Object(_playerPlayAnimations__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentScene, 'chopping', currentPlayer);\n        break;\n\n      case 'KeyS':\n        Object(_playerPlayAnimations__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentScene, 'fishing', currentPlayer);\n        break;\n\n      case 'KeyD':\n        Object(_playerPlayAnimations__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentScene, 'watering', currentPlayer);\n        break;\n\n      case 'KeyF':\n        Object(_playerPlayAnimations__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentScene, 'shoveling', currentPlayer);\n        break;\n\n      default:\n        break;\n    }\n\n    setTimeout(function () {\n      return currentScene.isAttaking = false;\n    }, 500);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameController);\n\n//# sourceURL=webpack:///./src/game/systems/gameController.js?");

/***/ }),

/***/ "./src/game/systems/loadingBar.js":
/*!****************************************!*\
  !*** ./src/game/systems/loadingBar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar loadingBar = function loadingBar(scene) {\n  var progressBar = scene.add.graphics();\n  var progressBox = scene.add.graphics();\n  var text = scene.add.text(170, 240, 'Loading Acropolis...');\n  progressBox.fillStyle(0x222222, 0.8);\n  progressBox.fillRect(0, 270, 600, 50);\n  scene.load.on('progress', function (value) {\n    console.log(value);\n    progressBar.clear();\n    progressBar.fillStyle(0xffffff, 1);\n    progressBar.fillRect(10, 280, 590 * value, 30);\n  });\n  scene.load.on('fileprogress', function (file) {\n    console.log(file.src);\n  });\n  scene.load.on('complete', function () {\n    console.log('complete');\n    progressBar.destroy();\n    progressBox.destroy();\n    text.destroy();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadingBar);\n\n//# sourceURL=webpack:///./src/game/systems/loadingBar.js?");

/***/ }),

/***/ "./src/game/systems/playerPlayAnimations.js":
/*!**************************************************!*\
  !*** ./src/game/systems/playerPlayAnimations.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar playerPlayAnimation = function playerPlayAnimation(scene, animationKey, playerInstance) {\n  switch (animationKey) {\n    case 'running':\n      playerInstance.sprites.body.play({\n        key: 'running'\n      });\n      playerInstance.sprites.shoes.play({\n        key: 'runningShoes'\n      });\n      playerInstance.sprites.clothes.play({\n        key: 'runningClothes'\n      });\n      break;\n\n    case 'idle':\n      playerInstance.sprites.body.play({\n        key: 'idle'\n      });\n      playerInstance.sprites.shoes.play({\n        key: 'idleShoes'\n      });\n      playerInstance.sprites.clothes.play({\n        key: 'idleClothes'\n      });\n      break;\n\n    case 'attack':\n      playerInstance.sprites.body.play({\n        key: 'attack'\n      });\n      playerInstance.sprites.shoes.play({\n        key: 'attackShoes'\n      });\n      playerInstance.sprites.clothes.play({\n        key: 'attackClothes'\n      });\n      break;\n\n    case 'mining':\n      playerInstance.sprites.body.play({\n        key: 'mining'\n      });\n      playerInstance.sprites.shoes.play({\n        key: 'miningShoes'\n      });\n      playerInstance.sprites.clothes.play({\n        key: 'miningClothes'\n      });\n      break;\n\n    case 'gathering':\n      playerInstance.sprites.body.play({\n        key: 'gathering'\n      });\n      playerInstance.sprites.shoes.play({\n        key: 'gatheringShoes'\n      });\n      playerInstance.sprites.clothes.play({\n        key: 'gatheringClothes'\n      });\n      break;\n\n    case 'chopping':\n      playerInstance.sprites.body.play({\n        key: 'chopping'\n      });\n      playerInstance.sprites.shoes.play({\n        key: 'choppingShoes'\n      });\n      playerInstance.sprites.clothes.play({\n        key: 'choppingClothes'\n      });\n      break;\n\n    case 'fishing':\n      playerInstance.sprites.body.play({\n        key: 'fishing'\n      });\n      playerInstance.sprites.shoes.play({\n        key: 'fishingShoes'\n      });\n      playerInstance.sprites.clothes.play({\n        key: 'fishingClothes'\n      });\n      break;\n\n    case 'watering':\n      playerInstance.sprites.body.play({\n        key: 'watering'\n      });\n      playerInstance.sprites.shoes.play({\n        key: 'wateringShoes'\n      });\n      playerInstance.sprites.clothes.play({\n        key: 'wateringClothes'\n      });\n      break;\n\n    case 'shoveling':\n      playerInstance.sprites.body.play({\n        key: 'shoveling'\n      });\n      playerInstance.sprites.shoes.play({\n        key: 'shovelingShoes'\n      });\n      playerInstance.sprites.clothes.play({\n        key: 'shovelingClothes'\n      });\n      break;\n\n    default:\n      break;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (playerPlayAnimation);\n\n//# sourceURL=webpack:///./src/game/systems/playerPlayAnimations.js?");

/***/ }),

/***/ "./src/game/systems/playerSpritesheetAnimations.js":
/*!*********************************************************!*\
  !*** ./src/game/systems/playerSpritesheetAnimations.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar animatedPlayer = function animatedPlayer(scene) {\n  // Body\n  var running = {\n    key: 'running',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 128,\n      end: 135\n    }),\n    frameRate: 15,\n    repeat: -1\n  };\n  scene.anims.create(running);\n  var idle = {\n    key: 'idle',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      frames: [128]\n    }),\n    frameRate: 15,\n    repeat: -1\n  };\n  scene.anims.create(idle);\n  var attack = {\n    key: 'attack',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 1152,\n      end: 1155\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(attack);\n  var mining = {\n    key: 'mining',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 8 * 8 * 31,\n      end: 8 * 8 * 31 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(mining);\n  var gathering = {\n    key: 'gathering',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 8 * 8 * 10,\n      end: 8 * 8 * 10 + 2\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(gathering);\n  var chopping = {\n    key: 'chopping',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 8 * 8 * 35,\n      end: 8 * 8 * 35 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(chopping);\n  var fishing = {\n    key: 'fishing',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 8 * 8 * 47,\n      end: 8 * 8 * 47 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(fishing);\n  var watering = {\n    key: 'watering',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 8 * 8 * 39,\n      end: 8 * 8 * 39 + 1\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(watering);\n  var shoveling = {\n    key: 'shoveling',\n    frames: scene.anims.generateFrameNumbers('bodySpriteSheet', {\n      start: 8 * 8 * 43,\n      end: 8 * 8 * 43 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(shoveling); // Shoes\n\n  var runningShoes = {\n    key: 'runningShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 200,\n      end: 207\n    }),\n    frameRate: 15,\n    repeat: -1\n  };\n  scene.anims.create(runningShoes);\n  var idleShoes = {\n    key: 'idleShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      frames: [160]\n    }),\n    frameRate: 15,\n    repeat: -1\n  };\n  scene.anims.create(idleShoes);\n  var attackShoes = {\n    key: 'attackShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 1440,\n      end: 1443\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(attackShoes);\n  var miningShoes = {\n    key: 'miningShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 2480,\n      end: 2483\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(miningShoes);\n  var gatheringShoes = {\n    key: 'gatheringShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 8 * 10 * 10,\n      end: 8 * 10 * 10 + 2\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(gatheringShoes);\n  var choppingShoes = {\n    key: 'choppingShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 8 * 10 * 35,\n      end: 8 * 10 * 35 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(choppingShoes);\n  var fishingShoes = {\n    key: 'fishingShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 8 * 10 * 47,\n      end: 8 * 10 * 47 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(fishingShoes);\n  var wateringShoes = {\n    key: 'wateringShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 8 * 10 * 39,\n      end: 8 * 10 * 39\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(wateringShoes);\n  var shovelingShoes = {\n    key: 'shovelingShoes',\n    frames: scene.anims.generateFrameNumbers('shoesSpriteSheet', {\n      start: 8 * 10 * 43,\n      end: 8 * 10 * 43 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(shovelingShoes); // Clothes\n\n  var runningClothes = {\n    key: 'runningClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 160,\n      end: 167\n    }),\n    frameRate: 15,\n    repeat: -1\n  };\n  scene.anims.create(runningClothes);\n  var idleClothes = {\n    key: 'idleClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      frames: [160]\n    }),\n    frameRate: 15,\n    repeat: -1\n  };\n  scene.anims.create(idleClothes);\n  var attackClothes = {\n    key: 'attackClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 1440,\n      end: 1443\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(attackClothes);\n  var miningClothes = {\n    key: 'miningClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 2480,\n      end: 2483\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(miningClothes);\n  var gatheringClothes = {\n    key: 'gatheringClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 8 * 10 * 10,\n      end: 8 * 10 * 10 + 2\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(gatheringClothes);\n  var choppingClothes = {\n    key: 'choppingClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 8 * 10 * 35,\n      end: 8 * 10 * 35 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(choppingClothes);\n  var fishingClothes = {\n    key: 'fishingClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 8 * 10 * 47,\n      end: 8 * 10 * 47 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(fishingClothes);\n  var wateringClothes = {\n    key: 'wateringClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 8 * 10 * 39,\n      end: 8 * 10 * 39 + 1\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(wateringClothes);\n  var shovelingClothes = {\n    key: 'shovelingClothes',\n    frames: scene.anims.generateFrameNumbers('clothesSpriteSheet', {\n      start: 8 * 10 * 43,\n      end: 8 * 10 * 43 + 4\n    }),\n    frameRate: 15,\n    repeat: 0\n  };\n  scene.anims.create(shovelingClothes);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (animatedPlayer);\n\n//# sourceURL=webpack:///./src/game/systems/playerSpritesheetAnimations.js?");

/***/ }),

/***/ "./src/game/utils/cooldownTimer.js":
/*!*****************************************!*\
  !*** ./src/game/utils/cooldownTimer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cooldownTimer = function cooldownTimer(cooldowne) {\n  var initTime = Date.now();\n\n  var remainigTime = function remainigTime() {\n    var counter = cooldowne - (Date.now() - initTime);\n\n    if (counter < 0) {\n      counter = cooldowne;\n      initTime = Date.now();\n    }\n\n    return counter;\n  };\n\n  return {\n    remainigTime: remainigTime\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cooldownTimer);\n\n//# sourceURL=webpack:///./src/game/utils/cooldownTimer.js?");

/***/ }),

/***/ "./src/game/utils/stringHandler.js":
/*!*****************************************!*\
  !*** ./src/game/utils/stringHandler.js ***!
  \*****************************************/
/*! exports provided: pathHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pathHandler\", function() { return pathHandler; });\nvar pathHandler = function pathHandler(url) {\n  var pathPrefix = '';\n\n  if (Object({\"NODE_ENV\":\"development\",\"BASE_URL\":\"/\"}).ENVI === 'production') {\n    pathPrefix = '/game';\n  }\n\n  return pathPrefix + url;\n}; // export const pathHandler = (url) => {\n//   let pathPrefix = '/game';\n//   return pathPrefix + url;\n// };\n\n//# sourceURL=webpack:///./src/game/utils/stringHandler.js?");

/***/ }),

/***/ "./src/game/utils/transformManager.js":
/*!********************************************!*\
  !*** ./src/game/utils/transformManager.js ***!
  \********************************************/
/*! exports provided: lerp, getDistance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lerp\", function() { return lerp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDistance\", function() { return getDistance; });\nvar lerp = function lerp(start, end, amt) {\n  return (1 - amt) * start + amt * end;\n};\nvar getDistance = function getDistance(Vector1, Vector2) {\n  return Math.sqrt(Math.pow(Vector1.x - Vector2.x, 2) + Math.pow(Vector1.y - Vector2.y, 2));\n};\n\n//# sourceURL=webpack:///./src/game/utils/transformManager.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Proyectos_acropolisgame_acropolis_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n\n\n\n\n\n\n\nObject(vue__WEBPACK_IMPORTED_MODULE_4__[\"createApp\"])(_App_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).use(_router__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).mount('#app');\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/Home.vue */ \"./src/views/Home.vue\");\n\n\n\n\n\nvar routes = [{\n  path: '/',\n  name: 'Home',\n  component: _views_Home_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}, {\n  path: '/about',\n  name: 'About',\n  // route level code-splitting\n  // this generates a separate chunk (about.[hash].js) for this route\n  // which is lazy-loaded when the route is visited.\n  component: function component() {\n    return __webpack_require__.e(/*! import() | about */ \"about\").then(__webpack_require__.bind(null, /*! ../views/About.vue */ \"./src/views/About.vue\"));\n  }\n}];\nvar router = Object(vue_router__WEBPACK_IMPORTED_MODULE_3__[\"createRouter\"])({\n  history: Object(vue_router__WEBPACK_IMPORTED_MODULE_3__[\"createWebHashHistory\"])(),\n  routes: routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/views/Home.vue":
/*!****************************!*\
  !*** ./src/views/Home.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_vue_vue_type_template_id_fae5bece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=fae5bece */ \"./src/views/Home.vue?vue&type=template&id=fae5bece\");\n/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ \"./src/views/Home.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/C_Proyectos_acropolisgame_acropolis_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Home_vue_vue_type_template_id_fae5bece__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/views/Home.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/views/Home.vue?");

/***/ }),

/***/ "./src/views/Home.vue?vue&type=script&lang=js":
/*!****************************************************!*\
  !*** ./src/views/Home.vue?vue&type=script&lang=js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./Home.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Home.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/views/Home.vue?");

/***/ }),

/***/ "./src/views/Home.vue?vue&type=template&id=fae5bece":
/*!**********************************************************!*\
  !*** ./src/views/Home.vue?vue&type=template&id=fae5bece ***!
  \**********************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Home_vue_vue_type_template_id_fae5bece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./Home.vue?vue&type=template&id=fae5bece */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Home.vue?vue&type=template&id=fae5bece\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Home_vue_vue_type_template_id_fae5bece__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Home.vue?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 10:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 11:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 12:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 13:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 14:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 15:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 16:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 17:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 18:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 19:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 2:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 7:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 8:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 9:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ })

/******/ });