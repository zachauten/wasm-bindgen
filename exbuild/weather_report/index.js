/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// For more comments about what's going on here, check out the `hello_world`\n// example\nPromise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_text-encoding_index_js\"), __webpack_require__.e(\"pkg_index_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pkg */ \"./pkg/index.js\"))\n    .catch(console.error);\n\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".index.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
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
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm chunk loading */
/******/ 	(() => {
/******/ 		// object to store loaded and loading wasm modules
/******/ 		var installedWasmModules = {};
/******/ 		
/******/ 		function promiseResolve() { return Promise.resolve(); }
/******/ 		
/******/ 		var wasmImportedFuncCache0;
/******/ 		var wasmImportedFuncCache1;
/******/ 		var wasmImportedFuncCache2;
/******/ 		var wasmImportedFuncCache3;
/******/ 		var wasmImportedFuncCache4;
/******/ 		var wasmImportedFuncCache5;
/******/ 		var wasmImportedFuncCache6;
/******/ 		var wasmImportedFuncCache7;
/******/ 		var wasmImportedFuncCache8;
/******/ 		var wasmImportedFuncCache9;
/******/ 		var wasmImportedFuncCache10;
/******/ 		var wasmImportedFuncCache11;
/******/ 		var wasmImportedFuncCache12;
/******/ 		var wasmImportedFuncCache13;
/******/ 		var wasmImportedFuncCache14;
/******/ 		var wasmImportedFuncCache15;
/******/ 		var wasmImportedFuncCache16;
/******/ 		var wasmImportedFuncCache17;
/******/ 		var wasmImportedFuncCache18;
/******/ 		var wasmImportedFuncCache19;
/******/ 		var wasmImportedFuncCache20;
/******/ 		var wasmImportedFuncCache21;
/******/ 		var wasmImportedFuncCache22;
/******/ 		var wasmImportedFuncCache23;
/******/ 		var wasmImportedFuncCache24;
/******/ 		var wasmImportedFuncCache25;
/******/ 		var wasmImportedFuncCache26;
/******/ 		var wasmImportedFuncCache27;
/******/ 		var wasmImportedFuncCache28;
/******/ 		var wasmImportedFuncCache29;
/******/ 		var wasmImportedFuncCache30;
/******/ 		var wasmImportedFuncCache31;
/******/ 		var wasmImportedFuncCache32;
/******/ 		var wasmImportedFuncCache33;
/******/ 		var wasmImportedFuncCache34;
/******/ 		var wasmImportedFuncCache35;
/******/ 		var wasmImportedFuncCache36;
/******/ 		var wasmImportedFuncCache37;
/******/ 		var wasmImportedFuncCache38;
/******/ 		var wasmImportedFuncCache39;
/******/ 		var wasmImportedFuncCache40;
/******/ 		var wasmImportedFuncCache41;
/******/ 		var wasmImportedFuncCache42;
/******/ 		var wasmImportedFuncCache43;
/******/ 		var wasmImportedFuncCache44;
/******/ 		var wasmImportedFuncCache45;
/******/ 		var wasmImportedFuncCache46;
/******/ 		var wasmImportedFuncCache47;
/******/ 		var wasmImportedFuncCache48;
/******/ 		var wasmImportedFuncCache49;
/******/ 		var wasmImportedFuncCache50;
/******/ 		var wasmImportedFuncCache51;
/******/ 		var wasmImportedFuncCache52;
/******/ 		var wasmImportedFuncCache53;
/******/ 		var wasmImportedFuncCache54;
/******/ 		var wasmImportedFuncCache55;
/******/ 		var wasmImportedFuncCache56;
/******/ 		var wasmImportedFuncCache57;
/******/ 		var wasmImportedFuncCache58;
/******/ 		var wasmImportedFuncCache59;
/******/ 		var wasmImportedFuncCache60;
/******/ 		var wasmImportedFuncCache61;
/******/ 		var wasmImportedFuncCache62;
/******/ 		var wasmImportedFuncCache63;
/******/ 		var wasmImportedFuncCache64;
/******/ 		var wasmImportObjects = {
/******/ 			"./pkg/index_bg.wasm": function() {
/******/ 				return {
/******/ 					"./index_bg.js": {
/******/ 						"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache0 === undefined) wasmImportedFuncCache0 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache0["__wbindgen_string_get"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 							if(wasmImportedFuncCache1 === undefined) wasmImportedFuncCache1 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache1["__wbindgen_object_clone_ref"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_json_serialize": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache2 === undefined) wasmImportedFuncCache2 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache2["__wbindgen_json_serialize"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbindgen_cb_drop": function(p0i32) {
/******/ 							if(wasmImportedFuncCache4 === undefined) wasmImportedFuncCache4 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache4["__wbindgen_cb_drop"](p0i32);
/******/ 						},
/******/ 						"__wbg_fetch_4ac6a7dfdd9e8230": function(p0i32) {
/******/ 							if(wasmImportedFuncCache5 === undefined) wasmImportedFuncCache5 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache5["__wbg_fetch_4ac6a7dfdd9e8230"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache6 === undefined) wasmImportedFuncCache6 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache6["__wbindgen_string_new"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_fetch_8c28485eb2d6317d": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache7 === undefined) wasmImportedFuncCache7 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache7["__wbg_fetch_8c28485eb2d6317d"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_appendChild_e9d52952defb480f": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache8 === undefined) wasmImportedFuncCache8 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache8["__wbg_appendChild_e9d52952defb480f"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_new_cae53a92273830c0": function() {
/******/ 							if(wasmImportedFuncCache9 === undefined) wasmImportedFuncCache9 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache9["__wbg_new_cae53a92273830c0"]();
/******/ 						},
/******/ 						"__wbg_append_8bcd139aff7a031e": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 							if(wasmImportedFuncCache10 === undefined) wasmImportedFuncCache10 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache10["__wbg_append_8bcd139aff7a031e"](p0i32,p1i32,p2i32,p3i32);
/******/ 						},
/******/ 						"__wbg_append_2c5e53fc0c6275c3": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32) {
/******/ 							if(wasmImportedFuncCache11 === undefined) wasmImportedFuncCache11 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache11["__wbg_append_2c5e53fc0c6275c3"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32);
/******/ 						},
/******/ 						"__wbg_body_36a11f2467926b2b": function(p0i32) {
/******/ 							if(wasmImportedFuncCache12 === undefined) wasmImportedFuncCache12 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache12["__wbg_body_36a11f2467926b2b"](p0i32);
/******/ 						},
/******/ 						"__wbg_createElement_2d8b75cffbd32c70": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache13 === undefined) wasmImportedFuncCache13 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache13["__wbg_createElement_2d8b75cffbd32c70"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_getElementById_0c9415d96f5b9ec6": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache14 === undefined) wasmImportedFuncCache14 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache14["__wbg_getElementById_0c9415d96f5b9ec6"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_newwithstrandinit_41c86e821f771b24": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache15 === undefined) wasmImportedFuncCache15 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache15["__wbg_newwithstrandinit_41c86e821f771b24"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_instanceof_Window_a2a08d3918d7d4d0": function(p0i32) {
/******/ 							if(wasmImportedFuncCache16 === undefined) wasmImportedFuncCache16 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache16["__wbg_instanceof_Window_a2a08d3918d7d4d0"](p0i32);
/******/ 						},
/******/ 						"__wbg_document_14a383364c173445": function(p0i32) {
/******/ 							if(wasmImportedFuncCache17 === undefined) wasmImportedFuncCache17 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache17["__wbg_document_14a383364c173445"](p0i32);
/******/ 						},
/******/ 						"__wbg_setid_c3cb9fedad5d2791": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache18 === undefined) wasmImportedFuncCache18 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache18["__wbg_setid_c3cb9fedad5d2791"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_setclassName_7a10d229676db879": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache19 === undefined) wasmImportedFuncCache19 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache19["__wbg_setclassName_7a10d229676db879"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_setinnerHTML_c3959ab1092c9bae": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache20 === undefined) wasmImportedFuncCache20 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache20["__wbg_setinnerHTML_c3959ab1092c9bae"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_setAttribute_6091f6f3602fc299": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 							if(wasmImportedFuncCache21 === undefined) wasmImportedFuncCache21 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache21["__wbg_setAttribute_6091f6f3602fc299"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 						},
/******/ 						"__wbg_new_483f23f84dfd2751": function() {
/******/ 							if(wasmImportedFuncCache22 === undefined) wasmImportedFuncCache22 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache22["__wbg_new_483f23f84dfd2751"]();
/******/ 						},
/******/ 						"__wbg_append_fcf64231455390c4": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 							if(wasmImportedFuncCache23 === undefined) wasmImportedFuncCache23 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache23["__wbg_append_fcf64231455390c4"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 						},
/******/ 						"__wbg_addEventListener_a77a92f38176616e": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 							if(wasmImportedFuncCache24 === undefined) wasmImportedFuncCache24 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache24["__wbg_addEventListener_a77a92f38176616e"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 						},
/******/ 						"__wbg_removeEventListener_2882dfde82b5b4d9": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 							if(wasmImportedFuncCache25 === undefined) wasmImportedFuncCache25 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache25["__wbg_removeEventListener_2882dfde82b5b4d9"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 						},
/******/ 						"__wbg_instanceof_HtmlInputElement_756d5883770e3491": function(p0i32) {
/******/ 							if(wasmImportedFuncCache26 === undefined) wasmImportedFuncCache26 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache26["__wbg_instanceof_HtmlInputElement_756d5883770e3491"](p0i32);
/******/ 						},
/******/ 						"__wbg_value_5573c798506a4119": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache27 === undefined) wasmImportedFuncCache27 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache27["__wbg_value_5573c798506a4119"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_newwithu8arraysequenceandoptions_43f3015332237054": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache28 === undefined) wasmImportedFuncCache28 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache28["__wbg_newwithu8arraysequenceandoptions_43f3015332237054"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_instanceof_Response_e928c54c1025470c": function(p0i32) {
/******/ 							if(wasmImportedFuncCache29 === undefined) wasmImportedFuncCache29 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache29["__wbg_instanceof_Response_e928c54c1025470c"](p0i32);
/******/ 						},
/******/ 						"__wbg_url_0f82030e7245954c": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache30 === undefined) wasmImportedFuncCache30 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache30["__wbg_url_0f82030e7245954c"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_status_5b4a574de7c5bbfe": function(p0i32) {
/******/ 							if(wasmImportedFuncCache31 === undefined) wasmImportedFuncCache31 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache31["__wbg_status_5b4a574de7c5bbfe"](p0i32);
/******/ 						},
/******/ 						"__wbg_headers_1dc1ef92ba3d32b1": function(p0i32) {
/******/ 							if(wasmImportedFuncCache32 === undefined) wasmImportedFuncCache32 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache32["__wbg_headers_1dc1ef92ba3d32b1"](p0i32);
/******/ 						},
/******/ 						"__wbg_text_5cb78830c1a11c5b": function(p0i32) {
/******/ 							if(wasmImportedFuncCache33 === undefined) wasmImportedFuncCache33 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache33["__wbg_text_5cb78830c1a11c5b"](p0i32);
/******/ 						},
/******/ 						"__wbg_newnoargs_fc5356289219b93b": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache34 === undefined) wasmImportedFuncCache34 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache34["__wbg_newnoargs_fc5356289219b93b"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_call_4573f605ca4b5f10": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache35 === undefined) wasmImportedFuncCache35 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache35["__wbg_call_4573f605ca4b5f10"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_next_9ef803116340cdc1": function(p0i32) {
/******/ 							if(wasmImportedFuncCache36 === undefined) wasmImportedFuncCache36 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache36["__wbg_next_9ef803116340cdc1"](p0i32);
/******/ 						},
/******/ 						"__wbg_next_0e1ee6203bc0f8ed": function(p0i32) {
/******/ 							if(wasmImportedFuncCache37 === undefined) wasmImportedFuncCache37 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache37["__wbg_next_0e1ee6203bc0f8ed"](p0i32);
/******/ 						},
/******/ 						"__wbg_done_2a1e30464aae6a4d": function(p0i32) {
/******/ 							if(wasmImportedFuncCache38 === undefined) wasmImportedFuncCache38 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache38["__wbg_done_2a1e30464aae6a4d"](p0i32);
/******/ 						},
/******/ 						"__wbg_value_a495c29471c31da6": function(p0i32) {
/******/ 							if(wasmImportedFuncCache39 === undefined) wasmImportedFuncCache39 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache39["__wbg_value_a495c29471c31da6"](p0i32);
/******/ 						},
/******/ 						"__wbg_new_306ce8d57919e6ae": function() {
/******/ 							if(wasmImportedFuncCache40 === undefined) wasmImportedFuncCache40 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache40["__wbg_new_306ce8d57919e6ae"]();
/******/ 						},
/******/ 						"__wbg_iterator_6ac6eb1e020f18e3": function() {
/******/ 							if(wasmImportedFuncCache41 === undefined) wasmImportedFuncCache41 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache41["__wbg_iterator_6ac6eb1e020f18e3"]();
/******/ 						},
/******/ 						"__wbg_resolve_f269ce174f88b294": function(p0i32) {
/******/ 							if(wasmImportedFuncCache42 === undefined) wasmImportedFuncCache42 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache42["__wbg_resolve_f269ce174f88b294"](p0i32);
/******/ 						},
/******/ 						"__wbg_then_1c698eedca15eed6": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache43 === undefined) wasmImportedFuncCache43 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache43["__wbg_then_1c698eedca15eed6"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_then_4debc41d4fc92ce5": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache44 === undefined) wasmImportedFuncCache44 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache44["__wbg_then_4debc41d4fc92ce5"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_globalThis_56d9c9f814daeeee": function() {
/******/ 							if(wasmImportedFuncCache45 === undefined) wasmImportedFuncCache45 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache45["__wbg_globalThis_56d9c9f814daeeee"]();
/******/ 						},
/******/ 						"__wbg_self_ba1ddafe9ea7a3a2": function() {
/******/ 							if(wasmImportedFuncCache46 === undefined) wasmImportedFuncCache46 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache46["__wbg_self_ba1ddafe9ea7a3a2"]();
/******/ 						},
/******/ 						"__wbg_window_be3cc430364fd32c": function() {
/******/ 							if(wasmImportedFuncCache47 === undefined) wasmImportedFuncCache47 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache47["__wbg_window_be3cc430364fd32c"]();
/******/ 						},
/******/ 						"__wbg_global_8c35aeee4ac77f2b": function() {
/******/ 							if(wasmImportedFuncCache48 === undefined) wasmImportedFuncCache48 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache48["__wbg_global_8c35aeee4ac77f2b"]();
/******/ 						},
/******/ 						"__wbg_new_97cf52648830a70d": function(p0i32) {
/******/ 							if(wasmImportedFuncCache49 === undefined) wasmImportedFuncCache49 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache49["__wbg_new_97cf52648830a70d"](p0i32);
/******/ 						},
/******/ 						"__wbg_newwithbyteoffsetandlength_9ca61320599a2c84": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache50 === undefined) wasmImportedFuncCache50 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache50["__wbg_newwithbyteoffsetandlength_9ca61320599a2c84"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_buffer_de1150f91b23aa89": function(p0i32) {
/******/ 							if(wasmImportedFuncCache51 === undefined) wasmImportedFuncCache51 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache51["__wbg_buffer_de1150f91b23aa89"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_is_function": function(p0i32) {
/******/ 							if(wasmImportedFuncCache52 === undefined) wasmImportedFuncCache52 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache52["__wbindgen_is_function"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_is_undefined": function(p0i32) {
/******/ 							if(wasmImportedFuncCache53 === undefined) wasmImportedFuncCache53 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache53["__wbindgen_is_undefined"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_is_object": function(p0i32) {
/******/ 							if(wasmImportedFuncCache54 === undefined) wasmImportedFuncCache54 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache54["__wbindgen_is_object"](p0i32);
/******/ 						},
/******/ 						"__wbg_get_89247d3aeaa38cc5": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache55 === undefined) wasmImportedFuncCache55 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache55["__wbg_get_89247d3aeaa38cc5"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_has_ded5f0e31f1ff6ad": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache56 === undefined) wasmImportedFuncCache56 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache56["__wbg_has_ded5f0e31f1ff6ad"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_set_b12cd0ab82903c2f": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache57 === undefined) wasmImportedFuncCache57 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache57["__wbg_set_b12cd0ab82903c2f"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 							if(wasmImportedFuncCache58 === undefined) wasmImportedFuncCache58 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache58["__wbindgen_object_drop_ref"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache59 === undefined) wasmImportedFuncCache59 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache59["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache60 === undefined) wasmImportedFuncCache60 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache60["__wbindgen_throw"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbindgen_rethrow": function(p0i32) {
/******/ 							if(wasmImportedFuncCache61 === undefined) wasmImportedFuncCache61 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache61["__wbindgen_rethrow"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_memory": function() {
/******/ 							if(wasmImportedFuncCache62 === undefined) wasmImportedFuncCache62 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache62["__wbindgen_memory"]();
/******/ 						},
/******/ 						"__wbindgen_closure_wrapper398": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache63 === undefined) wasmImportedFuncCache63 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache63["__wbindgen_closure_wrapper398"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbindgen_closure_wrapper1784": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache64 === undefined) wasmImportedFuncCache64 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache64["__wbindgen_closure_wrapper1784"](p0i32,p1i32,p2i32);
/******/ 						}
/******/ 					},
/******/ 					"./snippets/rust-webassembly-weather-reports-4039a8792ac9d244/util.js": {
/******/ 						"initialize": function(p0f64,p1f64) {
/******/ 							if(wasmImportedFuncCache3 === undefined) wasmImportedFuncCache3 = __webpack_require__.c["./pkg/snippets/rust-webassembly-weather-reports-4039a8792ac9d244/util.js"].exports;
/******/ 							return wasmImportedFuncCache3["initialize"](p0f64,p1f64);
/******/ 						}
/******/ 					}
/******/ 				};
/******/ 			},
/******/ 		};
/******/ 		
/******/ 		var wasmModuleMap = {
/******/ 			"pkg_index_js": [
/******/ 				"./pkg/index_bg.wasm"
/******/ 			]
/******/ 		};
/******/ 		
/******/ 		// object with all WebAssembly.instance exports
/******/ 		__webpack_require__.w = {};
/******/ 		
/******/ 		// Fetch + compile chunk loading for webassembly
/******/ 		__webpack_require__.f.wasm = function(chunkId, promises) {
/******/ 		
/******/ 			var wasmModules = wasmModuleMap[chunkId] || [];
/******/ 		
/******/ 			wasmModules.forEach(function(wasmModuleId, idx) {
/******/ 				var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/ 		
/******/ 				// a Promise means "currently loading" or "already loaded".
/******/ 				if(installedWasmModuleData)
/******/ 					promises.push(installedWasmModuleData);
/******/ 				else {
/******/ 					var importObject = wasmImportObjects[wasmModuleId]();
/******/ 					var req = fetch(__webpack_require__.p + "" + {"pkg_index_js":{"./pkg/index_bg.wasm":"9e01fc7edf9daeb17c01"}}[chunkId][wasmModuleId] + ".module.wasm");
/******/ 					var promise;
/******/ 					if(importObject && typeof importObject.then === 'function' && typeof WebAssembly.compileStreaming === 'function') {
/******/ 						promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 							return WebAssembly.instantiate(items[0], items[1]);
/******/ 						});
/******/ 					} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 						promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 					} else {
/******/ 						var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 						promise = bytesPromise.then(function(bytes) {
/******/ 							return WebAssembly.instantiate(bytes, importObject);
/******/ 						});
/******/ 					}
/******/ 					promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 						return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 					}));
/******/ 				}
/******/ 			});
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;