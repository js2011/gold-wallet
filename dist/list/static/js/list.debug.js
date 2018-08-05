/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/utils/parseApiResponse.js
var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/* harmony default export */ var parseApiResponse = (function(){var response=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{errCode:0};// response 有可能为对象，但 data 字段为字符串
// 在解析之前不要进行短路返回
try{if(typeof response==='string'){response=JSON.parse(response);}if(typeof response==='string'){response=JSON.parse(response);}if(typeof response.data==='string'){response.data=JSON.parse(response.data);}if(typeof response.data==='string'){response.data=JSON.parse(response.data);}if(_typeof(response.data)==='object'){if(typeof response.data.data==='string'){response.data.data=JSON.parse(response.data.data);}if(typeof response.data.data==='string'){response.data.data=JSON.parse(response.data.data);}}}catch(e){console.warn('Api response parsing failed',e,response);}return response;});
// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/utils/index.js
var UA=window.navigator.userAgent;var utils_toString=Object.prototype.toString;var isAndroid=UA.indexOf('Android')>-1||UA.indexOf('Adr')>-1;var isiOS=/iphone|ipod|ipad/gi.test(UA)&&!isAndroid;var isSinaApp=UA.indexOf('sinanews')>-1;var isHybrid=UA.indexOf('hybrid')>-1;var verStr=UA.match(/sinanews__[\w.-]+__/i);var noop=function noop(){};var iframeNode=null;var _uuid=0;function generateUUID(){return _uuid++;}/**
 * @name utils
 * @private
 *//* harmony default export */ var utils = __webpack_exports__["a"] = ({/**
   * @memberof utils
   */isAndroid:isAndroid,isHybrid:isHybrid,/**
   * @memberof utils
   */isiOS:isiOS,/**
   * @memberof utils
   */isSinaApp:isSinaApp,appVersion:verStr?verStr[0].split('__')[1]:'',/**
   * @memberof utils
   */generateUUID:generateUUID,/**
   * @memberof utils
   */sliceString:function sliceString(number){var str='0';if(number==0||number==null||typeof number=='undefined'){return str;}str=number.toString().replace(/\.(.*?)$/g,'');if(str.length<6){return str;}str=str.slice(7,str.length);return str;},getAppVersion:function getAppVersion(){},/**
   * @memberof utils
   */bridgeFixCallback:function bridgeFixCallback(_ref){var _ref$options=_ref.options,options=_ref$options===undefined?{}:_ref$options,_ref$param=_ref.param,param=_ref$param===undefined?{}:_ref$param,response=_ref.response,_ref$resolve=_ref.resolve,resolve=_ref$resolve===undefined?noop:_ref$resolve,_ref$reject=_ref.reject,reject=_ref$reject===undefined?noop:_ref$reject,_ref$errorReport=_ref.errorReport,errorReport=_ref$errorReport===undefined?noop:_ref$errorReport,postHook=_ref.postHook,name=_ref.name;response=this.strToObject(response);// errDescription 别名
response.errMsg=response.errDescription;// 网络接口包含 statusCode 接口，单独处理
if(name==='fetch'){var resData=void 0;if(response.data&&response.data.data){resData=response.data.data;}else{resData=response;}// 先注释掉错误处理
// if (response.errCode == '0' && response.data.statusCode == 200) {
options.success&&// options.success(response.data.data, {
options.success(resData,{// statusCode: +response.data.statusCode,
// timestamp: response.timestamp,
// data: response.data.data
});// resolve(response.data.data);
resolve(resData);//   if (param.cache) {
//     Cache.save(`SNC_FETCH_${param.url}`, response.data.data);
//     console.log('[SNC_CACHE] save fetch cache', param.url);
//   }
// } else if (param.cache && Cache.get(`SNC_FETCH_${param.url}`)) {
//   // 无缓存数据时返回 null
//   const cacheData = Cache.get(`SNC_FETCH_${param.url}`);
//   options.success &&
//     options.success(cacheData.data, {
//       // 标识缓存数据
//       statusCode: 100,
//       timestamp: cacheData.timestamp,
//       // 原始响应数据
//       data: response.data.data
//     });
//   try {
//     console.log('[SNC_CACHE] get fetch cache', param.url, cacheData);
//   } catch (e) {
//     console.log('[SNC_CACHE] get fetch cache ' + param.url);
//   }
// 先注释掉错误处理
// } else {
//   const errMsg = this.getAPIErrorMsg(response, name);
//   // @TODO 错误上报
//   options.error && options.error(errMsg, response);
//   reject(errMsg, response);
//   errorReport({ msg: errMsg });
// }
}else{// 通用接口
if(response.errCode=='0'){this.isFunction(postHook)&&postHook(response);options.success&&options.success(response.data,options);resolve(response.data);}else{var errMsg=this.getAPIErrorMsg(response,name);// @TODO 错误上报
options.error&&options.error(errMsg,response);reject(errMsg,response);}}options.complete&&options.complete(response);},/**
   * @memberof utils
   */isFunction:function isFunction(v){return utils_toString.call(v)==='[object Function]';},/**
   * @memberof utils
   */isObject:function isObject(obj){return utils_toString.call(obj)==='[object Object]';},/**
   * @memberof utils
   */createIframeRquest:function createIframeRquest(url){if(!iframeNode){iframeNode=document.createElement('iframe');iframeNode.style.display='none';document.documentElement.appendChild(iframeNode);}//不删除iframe，留作复用
iframeNode.src=url;},/**
   * @memberof utils
   */camelCaseByDot:function camelCaseByDot(name){var arr=name.split('.');var upperFirstChar=function upperFirstChar(str){return str.replace(/^[a-z]{1}/,function(match){return match.toUpperCase();});};return arr.reduce(function(camel,cur){return camel+upperFirstChar(cur);});},/**
   * 对象属性过滤器生成函数
   * @memberof utils
   * @param  {Array}  props  目标属性集
   * @param  {Boolean | Function} isDrop 对目标属性过滤模式
   * Boolean|自定义断言函数，默认为去除模式
   * @return {Function}        过滤器
   */filterObjProps:function filterObjProps(props){var _this=this;var isDrop=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var exclude=function exclude(key){return props.indexOf(key)<0;};var include=function include(key){return!exclude(key);};var filter=this.isFunction(isDrop)?isDrop:isDrop?exclude:include;return function(obj){// ES5 Object.keys 参数必须为对象
if(!_this.isObject(obj))return{};var assign=function assign(data,key){return data[key]=obj[key],data;};return Object.keys(obj).filter(filter).reduce(assign,{});};},/**
   * @memberof utils
   */filterParams:function filterParams(data){return this.filterObjProps(['success','fail','complete'])(data);},/**
   * @memberof utils
   */serializeData:function serializeData(data){// ES5 Object.keys 参数必须为对象
if(!this.isObject(data))return'';return Object.keys(data).map(function(key){return key+'='+data[key];}).join('&');},/**
   * android下处理特殊转义，android下必须转2次
   * @memberof utils
   */strToObject:parseApiResponse,getAPIErrorMsg:function getAPIErrorMsg(resObj){var api=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'API';var isNetworkApi=['fetch'].indexOf(api)>-1;var errPrefix='Invalid '+api+' response';var errMsg='';// firstAjax 特殊处理
// {
//   response: {data, statusCode}
//   state: 'remote' | 'cache' | 'timeout' | 'error'
// }
if(api==='firstAjax'){resObj.response.errMsg=resObj.state;console.error('[SNC_HANDLER] '+errPrefix,resObj.response);return resObj.state;}if(!this.isObject(resObj)||resObj['errCode']===undefined){errMsg='need errCode';}else if(isNetworkApi&&resObj.data.statusCode===undefined){errMsg='need statusCode';}else{errMsg=resObj['errDescription'];}console.error('[SNC_HANDLER] '+errPrefix+': '+errMsg,resObj);return errMsg;},invokeLogger:function invokeLogger(api){var data=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};try{console.log('[SNC_CALL] Invoking '+api,data);}catch(e){// 某些安卓机型的 console.log 不支持多参数
console.log('[SNC_CALL] Invoking '+api+': '+JSON.stringify(data));}},// 忽略 undefined 属性
// 在 JSON.stringify 过程中也会忽略 undefined
mergeProp:function mergeProp(){var _this2=this;for(var _len=arguments.length,objs=Array(_len),_key=0;_key<_len;_key++){objs[_key]=arguments[_key];}return objs.reduce(function(targetObj,currObj){// 过滤掉非对象参数，ES5 中 Object.keys 参数必须为对象
if(!_this2.isObject(currObj))currObj={};Object.keys(currObj).forEach(function(p){if(currObj[p]!==undefined)targetObj[p]=currObj[p];});return targetObj;},{});}});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * wintip v1.5.0
 * (c) Vincent
 * Released under the MIT License.
 */
(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.wintip = factory());
}(this, (function () { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) { ref = {}; }
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "._win_tip_box {\n  position: fixed;\n  top: 0;\n  left: 0;\n  max-height: 75%;\n  word-break: break-all;\n  max-width: 55%;\n  color: #fff;\n  font-size: 12px;\n  z-index: 100;\n  overflow: auto;\n  opacity: 1;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);\n  -webkit-overflow-scrolling: touch;\n  transition: opacity 0.3s;\n}\n\n._win_tip {\n  display: inline-block;\n  min-width: 80px;\n  padding: 8px;\n  margin-bottom: 1px;\n  color: inherit;\n  border: 0;\n  background-color: rgba(34, 34, 34, 0.75);\n}\n\n._win_tip_box--sleep {\n  opacity: 0.3;\n}\n";
  styleInject(css);

  function query(selector) {
    return document.querySelector(selector)
  }

  function querys(selector) {
    return document.querySelectorAll(selector)
  }

  function createEl(tag) {
    return document.createElement(tag)
  }

  function likeNumber(value) {
    return !isNaN(Number(value))
  }

  function isElement(target) {
    // Element or Fragment
    return (
      (typeof target === 'object' && target.nodeType === 1) ||
      target.nodeType === 11
    )
  }

  function isFunc(target) {
    return typeof target === 'function'
  }

  function append(ele, dom) {
    ele = isElement(ele) ? ele : query(ele);
    ele.appendChild(dom);

    return ele
  }

  function space2dash(str) {
    return str.replace(/\s+/g, '_')
  }

  function stringify(obj) {
    try {
      return JSON.stringify(obj)
    } catch (e) {
      console.error('[wintip]', "can't print object", obj);
      return ''
    }
  }

  var BOX_CLASS_NAME = '_win_tip_box';
  var TIP_CLASS_NAME = '_win_tip';
  var TIP_ID_PREFIX = '_tip_';
  var BOX_SLEEP = '_win_tip_box--sleep';
  var TIP_FUNC_NAME = '__name';
  var WARN_COLOR = '#fee381';
  var ERROR_COLOR = '#ff4545';
  var WEAK_TIME = 30 * 1000;

  // start from 1
  var tipNo = 1;
  var sleepTimer = 0;
  var log = console.log;

  var settings = {
    // 'default', 'info', 'warn', 'error'
    output: 'default',
    console: false,
    opacity: 0.75,
    color: '#fff'
  };

  function consoleProxy(flag) {
    var mlog = function() {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      winTip.apply(winTip, args);
      log.apply(console, args);
    };

    console.log = flag ? mlog : log;
  }

  function isShow(level) {
    if ( level === void 0 ) level = 'default';

    var ranking = ['default', 'info', 'warn', 'error'];
    var outputLevel =
      ranking.indexOf(settings.output) < 0
        ? ranking.length
        : ranking.indexOf(settings.output);

    return ranking.indexOf(level) >= outputLevel || settings.output === true
  }

  function winTip() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var idStr = getNewTipId();
    var tipNode = query(("." + idStr));
    var output = isShow('default') && args.length;

    // return a empty object({}) when output is false
    // normaly return a Element object
    return output ? renderTip(tipNode, [idStr], splitArgs(args)) : {}
  }

  function getNewTipId(name) {
    name = name === void 0 ? tipNo++ : name;

    return space2dash(TIP_ID_PREFIX + name)
  }

  function splitArgs(args, name) {
    var res = args
      .map(function (e) { return (typeof e === 'object' ? stringify(e) : ("" + e)); })
      .join(' ');

    return name ? ("[" + name + "] " + res) : res
  }

  function createTipFragment(idArr, msg, opts) {
    var fragment = document.createDocumentFragment();
    var tip = createEl('span');

    tip.className = [TIP_CLASS_NAME ].concat( idArr).join(' ');
    tip.textContent = msg;

    append(fragment, tipDecorator(tip, opts));
    append(fragment, createEl('br'));

    return fragment
  }

  function createTipBox(fragment) {
    var box = createEl('div');

    box.className = BOX_CLASS_NAME;
    box.style.color = settings.color;
    box.onclick = function () { return weakUp(box); };

    return append(box, fragment)
  }

  function weakUp(tipBox) {
    clearTimeout(sleepTimer);
    tipBox.classList.remove(BOX_SLEEP);
    setTimeout(sleep, WEAK_TIME, tipBox);
  }

  function sleep(tipBox) {
    tipBox.classList.add(BOX_SLEEP);
  }

  function tipDecorator(tipNode, opts) {
    // handle global option firstly
    if (settings.opacity != 0.75) {
      tipNode.style.backgroundColor = "rgba(0, 0, 0, " + (settings.opacity) + ")";
    }

    if (!opts) { return tipNode }

    var color = opts.color;
    var level = opts.level;

    if (color) { tipNode.style.color = color; }

    if (level) { tipNode.dataset.level = level; }

    return tipNode
  }

  function renderTip(tipNode, idArr, msg, opts) {
    var tipBox = query(("." + BOX_CLASS_NAME));
    var tipFragment = createTipFragment(idArr, msg, opts);

    if (tipNode) {
      tipNode.textContent = msg;
      return tipDecorator(tipNode, opts)
    }

    if (tipBox) {
      append(tipBox, tipFragment);

      // scroll to bottom
      tipBox.scrollTop = tipBox.scrollHeight;
      weakUp(tipBox);
    } else {
      append(document.body, createTipBox(tipFragment));
    }

    return query(("." + (idArr.join(' .'))))
  }

  function wintipFactory(name, tipNode, opts) {
    function tipFn() {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var idArr = likeNumber(name)
        ? [getNewTipId()]
        : [getNewTipId(), getNewTipId(name)];
      var output = isShow(opts.level) && args.length;

      return output
        ? renderTip(
            tipNode || query(("." + (getNewTipId(name)))),
            idArr,
            splitArgs(args, likeNumber(name) ? '' : name),
            opts
          )
        : null
    }

    tipFn[TIP_FUNC_NAME] = name;

    return tipFn
  }

  winTip.remove = function (tip) {
    if (!tip) { return }

    var node = isElement(tip)
      ? tip
      : isFunc(tip)
        ? query(("." + (getNewTipId(tip[TIP_FUNC_NAME]))))
        : likeNumber(tip)
          ? querys(("." + TIP_CLASS_NAME))[tip]
          : query(("." + (getNewTipId(tip))));

    if (!node) { return }

    node.nextElementSibling.remove();
    node.remove();
  };

  winTip.config = function (opts) {
    Object.assign(settings, opts);

    // consoleProxy is 'default' level
    consoleProxy(isShow('default') && settings.console);
  };

  winTip.$ = function (name, opts) {
    if ( opts === void 0 ) opts = {};

    if (name && typeof name === 'object') { return wintipFactory('', null, name) }

    var tipNode = query(("." + (getNewTipId(name))));

    if (likeNumber(name) && !tipNode) {
      throw new Error(("[wintip]: name " + name + " is not defined"))
    }

    return wintipFactory(("" + name).trim(), tipNode, opts)
  };

  // sugas
  winTip.info = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return winTip.$({ level: 'info' }).apply(winTip, args);
  };

  winTip.warn = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      return winTip.$({ color: WARN_COLOR, level: 'warn' }).apply(winTip, args);
  };

  winTip.error = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      return winTip.$({ color: ERROR_COLOR, level: 'error' }).apply(winTip, args);
  };

  winTip.version = '1.5.0';

  return winTip;

})));


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 隐藏加载蒙层
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   * @return {Promise<Object>}
   *
   * @example
   * SNC.hideLoading()
   */if(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isiOS){ctx.hideLoading=ctx.definedMethod('hb.bee.hideLoading',{url:'SinaNews://SNMessageBoxVC-Connector'});return;}// 针对安卓设备，强制要求回调
ctx.hideLoading=function(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};// 添加flag保证回调只会调用一次
var flag=true;var timer=0;var param={url:'SinaNews://SNMessageBoxVC-Connector'};return new Promise(function(resolve,reject){// 由于未知原因，不保证一次开启成功，、
// 循环执行开启操作
timer=setInterval(function(){ctx.bridge.callHandler('hb.bee.hideLoading',param,function(response){clearInterval(timer);if(flag){console.log('[SNC_CALL] response hideLoading');__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].bridgeFixCallback({options:options,response:response,resolve:resolve,reject:reject,name:'hideLoading'});flag=false;}});__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].invokeLogger('hb.bee.hideLoading',param);},500);});};});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB", function() { return WEB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE", function() { return ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIDEO", function() { return VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_LIVE", function() { return EVENT_LIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATCH_LIVE", function() { return MATCH_LIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHOTO", function() { return PHOTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YIZHIBO", function() { return YIZHIBO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPSTORE", function() { return APPSTORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBJECT", function() { return SUBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HYBRID", function() { return HYBRID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MRTT", function() { return MRTT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEME", function() { return SCHEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA", function() { return MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_SECTION", function() { return LIVE_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_SOON", function() { return LIVE_SOON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENT", function() { return COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREVIEW_IMAGE", function() { return PREVIEW_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL", function() { return CHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPER_LIVE", function() { return SUPER_LIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAY_VIDEO", function() { return PLAY_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARE_IMAGE", function() { return SHARE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARE_SCREENSHOT", function() { return SHARE_SCREENSHOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH", function() { return SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAVORATE", function() { return FAVORATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_BOX", function() { return MESSAGE_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "READ_RECORD", function() { return READ_RECORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_SETTINGS", function() { return PROFILE_SETTINGS; });
/**
 * URLNavigateTo 跳转类型名（传参可忽略大小写）
 *
 * @module URLNavigateTo/action
 * @readonly
 *//**
 * 网页，对应 actionType: 1
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   url: 'https://sina.cn',
 *   action: 'web'
 * })
 */var WEB=1;/**
 * 普通正文页，对应 actionType: 2
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   id: 'fysqfnh2488197-comos-fashion-cms',
 *   action: 'article'
 * })
 *
 * // 跳转正文评论
 * SNC.URLNavigateTo({
 *   id: 'fysqfnh2488197-comos-fashion-cms',
 *   action: 'article',
 *   route: 'comment'
 * })
 */var ARTICLE=2;/**
 * 视频正文页，对应 actionType: 3
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   id: '6385019120-m17c93a8f0001006fnp-video-mp',
 *   action: 'video'
 * })
 *
 * // 跳转视频评论
 * SNC.URLNavigateTo({
 *   id: '6385019120-m17c93a8f0001006fnp-video-mp',
 *   action: 'video',
 *   route: 'comment'
 * })
 */var VIDEO=3;/**
 * 大事件直播，对应 actionType: 4
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   id: 'ty20034445-mobile-event-live',
 *   action: 'event_live'
 * })
 */var EVENT_LIVE=4;/**
 * 赛事直播，对应 actionType: 5
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   id: '2018032913-0-snlive-live',
 *   action: 'match_live',
 *   ext: {
 *     // 直播类型，match: 对抗类，news: 非对抗类
 *     liveType: 'match'
 *   }
 * })
 */var MATCH_LIVE=5;/**
 * 图集，对应 actionType: 6
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   id: '4-704-272506-hdpic',
 *   action: 'photo'
 * })
 *
 * // 跳转图集评论
 * SNC.URLNavigateTo({
 *   id: '4-704-272506-hdpic',
 *   action: 'photo',
 *   route: 'comment'
 * })
 */var PHOTO=6;/**
 * 一直播，对应 actionType: 7
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   id: 'AFmZJHnVVfXUrqyE-0-yizhibo',
 *   action: 'yizhibo'
 * })
 */var YIZHIBO=7;/**
 * 苹果应用商店（iOS 专用），对应 actionType: 10
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   // app id
 *   id: '348737611',
 *   // appstore 链接
 *   url: 'https://itunes.apple.com/cn/app/id299853944',
 *   action: 'appstore'
 * })
 */var APPSTORE=10;/**
 * 新版专题，对应 actionType: 11
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   id: 'HB-1-subject/index-subject-fymmiwm3489207',
 *   action: 'subject'
 * })
 */var SUBJECT=11;/**
 * hybrid 页面，对应 actionType: 13
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   id: 'HB-1-snhy/top10-rank-dqrb-mms-ur',
 *   action: 'hybrid',
 *   ext: {
 *     // 页面间传参字段，在下一个 hybrid 页面的 ready 回调中通过 data.message 获取
 *     message: {
 *       id: 22,
 *       listParam: ['haha', 'lala']
 *     }
 *   }
 * })
 */var HYBRID=13;/**
 * 明日头条，对应 actionType: 14
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   id: 'mingritoutiao',
 *   action: 'mrtt'
 * })
 */var MRTT=14;/**
 * 客户端呼起，对应 actionType: 15
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   id: 'sinaweibo://',
 *   action: 'scheme',
 *   ext: {
 *     // 安卓应用包名
 *     packageName: 'com.sina.weibo'
 *   }
 * })
 */var SCHEME=15;/**
 * 媒体主页，对应 actionType: 16
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   id: 'comos_6176079276',
 *   action: 'media'
 * })
 */var MEDIA=16;/**
 * 直播二级分类，对应 actionType: 17
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   // 栏目 id
 *   id: 'finance',
 *   action: 'live_section',
 *   ext: {
 *     // 自定义标题
 *     name: '财经'
 *   }
 * })
 */var LIVE_SECTION=17;/**
 * 直播预告，对应 actionType: 18
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * // 直播预告列表
 * SNC.URLNavigateTo({
 *   action: 'live_soon'
 * })
 *
 * // 二级分类直播预告
 * SNC.URLNavigateTo({
 *   // 栏目 id
 *   id: 'finance',
 *   action: 'live_soon'
 * })
 */var LIVE_SOON=18;/**
 * 评论页，对应 actionType: 19
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   id: 'slidenews-album-792-178612_0_ty__2-792-178612-hdpic',
 *   action: 'comment'
 * })
 *
 * // 评论后发微博
 * SNC.URLNavigateTo({
 *   id: 'slidenews-album-792-178612_0_ty__2-792-178612-hdpic',
 *   action: 'comment',
 *   ext: {
 *     title: '测试',
 *     link: 'https://sina.cn'
 *   }
 * })
 */var COMMENT=19;/**
 * 图片预览，对应 actionType: 21，请使用 {@link #sncclasspreviewimage|previewImage} 方法替代
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   action: 'preview_image',
 *   ext: {
 *     previewImage: [
 *       'https://k.sinaimg.cn/n/fashion/24_img/upload/de4bf6e2/460/w630h630/20180327/RWjm-fysqfnh5366415.jpg/w640slw.jpg',
 *       'https://k.sinaimg.cn/n/fashion/24_img/upload/de4bf6e2/460/w630h630/20180327/s5nA-fysqfnh5366463.jpg/w640slw.jpg',
 *       'https://k.sinaimg.cn/n/fashion/24_img/upload/de4bf6e2/160/w1344h2016/20180327/frkH-fysqfnh5366490.jpg/w640slw.jpg',
 *       'https://k.sinaimg.cn/n/fashion/24_img/upload/de4bf6e2/10/w964h1446/20180327/25D8-fysqfnh5366488.jpg/w640slw.jpg',
 *       'https://k.sinaimg.cn/n/fashion/24_img/upload/de4bf6e2/284/w754h1130/20180327/YgXf-fysqfnh5366610.jpg/w640slw.jpg'
 *     ],
 *     // 从第几张开始预览，0 代表第一张
 *     index: 2
 *   }
 * })
 */var PREVIEW_IMAGE=21;/**
 * 频道页
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   id: 'channel',
 *   action: 'channel'
 * })
 */var CHANNEL=22;/**
 * 超级直播页
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   id: 'HB-1-super_lives/index-match-l_165997',
 *   action: 'super_live'
 * })
 */var SUPER_LIVE=24;/**
 * 超级直播页
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   url: 'http://s.api.sina.cn/video_location/index?table_id=36885&cid=38804&did=fzqvvsa8843331&vt=4&creator_id=&video_id=169516432&r=video.sina.cn/news/s/2018-04-25/detail-ifzqvvsa8843331.d.html&time=1524810358826&rd=0.566490766381054',
 *   action: 'play_video'
 * })
 */var PLAY_VIDEO=25;/**
 * 图片分享
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   action: 'share_image',
 *   ext: {
 *     src: 'http://k.sinaimg.cn/n/auto/transform/220/w710h310/20180427/FZ5g-fztkpip1445492.jpg/w710h310l0t0q703e7.jpg',
 *   title: '图片分享'
 *  }
 * })
 */var SHARE_IMAGE=26;/**
 * 页面截图分享
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   action: 'share_screenshot',
 *   ext: {
 *     path: 'modal/alert/index.html',
 *     title: '截图容器标题',
 *     link: 'http://sina.cn',
 *     bottomTitle: '来自新浪新闻',
 *     bottomSubTitle:'2018-05-14',
 *     message: {
 *      shomw_msg: '显示信息',
 *      aaa: '其他信息',
 *      list: ['xxx', 'xxx']
 *     }
 *   }
 * })
 */var SHARE_SCREENSHOT=27;/**
 * 搜索
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   action: 'search',
 *   placeholder: '默认搜索文案'
 * })
 *
 * // 配置热词列表
 * SNC.URLNavigateTo({
 *   action: 'search',
 *   placeholder: '厉害了我的国',
 *   hotwords: ['我的中国梦', '这里是个好地方']
 * })
 */var SEARCH=28;/**
 * 收藏
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   action: 'favorate',
 * })
 */var FAVORATE=29;/**
 * 消息
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   action: 'message_box',
 * })
 */var MESSAGE_BOX=30;/**
 * 历史
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   action: 'read_record',
 * })
 */var READ_RECORD=31;/**
 * 个人设置
 *
 * @memberof URLNavigateTo/action
 * @const {number}
 * @default
 *
 * @example
 * SNC.URLNavigateTo({
 *   action: 'profile_settings',
 * })
 */var PROFILE_SETTINGS=32;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
module.exports = __webpack_require__(10);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Promise === 'undefined') {
  window.Promise = __webpack_require__(8)
}

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = __webpack_require__(9)

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (false) {
  require('raf').polyfill(global)
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}
  
  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function() {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new (this.constructor)(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    return new Promise(function (resolve, reject) {
      if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
    function (fn) {
      setTimeoutFunc(fn, 0);
    };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }

})(this);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib?{"babelrc":false,"presets":["babel-preset-react-app"],"plugins":["transform-decorators-legacy"],"compact":true,"cacheDirectory":false,"highlightCode":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/view/list/widget/feed.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var feed = ({props:{feed:Object},methods:{jump:function jump(url){this.$snc.URLNavigateTo({url:url,action:'web'});}}});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ca75a050","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/view/list/widget/feed.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jk-wod-main",attrs:{"data-id":"d31976fd626384f02f199f5a7c374f53","data-hittype":"2"}},[_c('a',{on:{"click":function($event){_vm.jump(_vm.feed.link)}}},[_c('div',{staticClass:"jk-wod-gshead"},[_c('i',[_c('img',{attrs:{"src":_vm.feed.logo}})]),_vm._v(" "),_c('div',{staticClass:"wod-gshead-cnt"},[_c('h2',[_c('span',[_vm._v(_vm._s(_vm.feed.name))])]),_vm._v(" "),_c('h3'),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.feed.detail.feature))])]),_vm._v(" "),_c('span',{staticClass:"wod-gshead-btn"},[_vm._v("点我拿钱")])]),_vm._v(" "),_c('form',{attrs:{"name":"form1","method":"post","action":"http://res.txingdai.com/t_2/?id=0b487a85dea0a75074aa1dce6834149d"}}),_vm._v(" "),_c('div',{staticClass:"jk-wod-gscnt"},[_c('ul',[_c('li',[_c('header',[_vm._v("额度(元)")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.feed.detail.limit))])]),_vm._v(" "),_c('li',[_c('header',[_vm._v("成功率")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.feed.detail.successRate)+"%")])]),_vm._v(" "),_c('li',[_c('header',[_vm._v("日费率")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.feed.detail.rate)+"%")])])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var widget_feed = (esExports);
// CONCATENATED MODULE: ./src/view/list/widget/feed.vue
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  feed,
  widget_feed,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var list_widget_feed = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib?{"babelrc":false,"presets":["babel-preset-react-app"],"plugins":["transform-decorators-legacy"],"compact":true,"cacheDirectory":false,"highlightCode":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/view/list/pages/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var $=__webpack_require__(13);// require("~/lib/common.js")
__webpack_require__(14);__webpack_require__(15);/* harmony default export */ var pages = ({components:{Feed:list_widget_feed},data:function data(){return{feedData:[],feed1:{detail:{limit:''}}};},created:function created(){var vm=this;this.$snc.fetch({// url: 'http://res.txingdai.com/site/0b487a85dea0a75074aa1dce6834149d?ts=1531811436150&start=0&limit=100',
url:'http://res.txingdai.com/appinfo/b114e4027afc43b89adcded84d470aa5?ts=1531811436150&start=0&limit=100',success:function success(data){// debugger
vm.feedData=data.data.list;vm.feed1=vm.feedData.splice(0,1)[0];},error:function error(e){// debugger
}});vm.$snc.onPullDownRefresh({success:function success(){vm.$snc.fetch({// url: 'http://res.txingdai.com/site/0b487a85dea0a75074aa1dce6834149d?ts=1531811436150&start=0&limit=100',
url:'http://res.txingdai.com/appinfo/b114e4027afc43b89adcded84d470aa5?ts=1531811436150&start=0&limit=100',success:function success(data){vm.feedData=data.data.list;vm.feed1=vm.feedData.splice(0,1)[0];vm.$snc.stopPullDownRefresh({msg:"\u66F4\u65B0\u4E86"+data.data.list.length+"\u6761\u4FE1\u606F"});},error:function error(e){vm.$snc.stopPullDownRefresh({msg:"\u66F4\u65B0\u5931\u8D25"});}});}});},methods:{jump:function jump(url){var action=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'web';this.$snc.URLNavigateTo({id:url,url:url,action:action});}},mounted:function mounted(){//滚动插件 
(function($){$.fn.extend({Scroll:function Scroll(opt,callback){//参数初始化 
if(!opt)var opt={};var _this=this.eq(0).find("ul:first");var lineH=_this.find("li:first").height(),//获取行高 
line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10),//每次滚动的行数，默认为一屏，即父容器高度 
speed=opt.speed?parseInt(opt.speed,10):500,//卷动速度，数值越大，速度越慢（毫秒） 
timer=opt.timer?parseInt(opt.timer,10):3000;//滚动的时间间隔（毫秒） 
if(line==0)line=1;var upHeight=0-line*lineH;//滚动函数 
var scrollUp=function scrollUp(){_this.animate({marginTop:upHeight},speed,function(){for(var i=1;i<=line;i++){_this.find("li:first").appendTo(_this);}_this.css({marginTop:0});});};//鼠标事件绑定 
var timerID=void 0;_this.hover(function(){if(timerID)clearInterval(timerID);},function(){timerID=setInterval(scrollUp,timer);}).mouseout();}});})($);$(function(){//消息滚动
$(".sdlninfo-user-li").Scroll({line:1,speed:1000,timer:3000});});// 顶部平台分类入口
var mySwiper=new Swiper(".swiper-frt-mian",{pagination:".swiper-paginatiom-m"});// 中部banner滚动
var mySwiper=new Swiper(".swiper-frt-bnr",{autoplay:5000,loop:true,pagination:".swiper-paginatiom-bnrsd"});// function 滚动
var mySwiper=new Swiper(".sdln-erne-jp1",{loop:false,slidesPerView:"auto"});}});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-53e3ee76","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/view/list/pages/index.vue
var pages_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"feed-list"},[_c('article',{staticClass:"g-big"},[_c('section',{staticClass:"swiper-frt-mian swiper-container-horizontal"},[_c('div',{staticClass:"swiper-wrapper"},[_c('div',{staticClass:"swiper-slide slide-jk-box swiper-slide-active",staticStyle:{"width":"640px"}},[_c('div',{staticClass:"slide-jk-bul",on:{"click":function($event){_vm.jump('category', 'hybrid')}}},[_vm._m(0)]),_vm._v(" "),_c('div',{staticClass:"slide-jk-bul",on:{"click":function($event){_vm.jump('category', 'hybrid')}}},[_vm._m(1)]),_vm._v(" "),_c('div',{staticClass:"slide-jk-bul",on:{"click":function($event){_vm.jump('category', 'hybrid')}}},[_vm._m(2)]),_vm._v(" "),_c('div',{staticClass:"slide-jk-bul",on:{"click":function($event){_vm.jump('category', 'hybrid')}}},[_vm._m(3)])]),_vm._v(" "),_vm._m(4)])]),_vm._v(" "),_c('section',{staticClass:"speedloan-info-list"},[_c('div',{staticClass:"jk-sdln-main"},[_vm._m(5),_vm._v(" "),_c('p',{staticClass:"sdln-max-jk"},[_vm._v("最高可借")]),_vm._v(" "),_c('p',{staticClass:"sdln-max-je"},[_vm._v(_vm._s(100000)+"\n          "),_c('span',[_vm._v("元")])]),_vm._v(" "),_c('section',{staticClass:"sdlninfo-user-li"},[_c('i'),_vm._v(" "),_c('ul',{staticStyle:{"margin-top":"0px"}},[_c('font',{attrs:{"color":"#FF7955"}},[_c('font',{attrs:{"color":"#FF7955"}},[_c('font',{attrs:{"color":"#FF7955"}})],1)],1),_vm._v(" "),_c('li',[_c('span',{on:{"click":_vm.jump}},[_c('font',{attrs:{"color":"#FF7955"}},[_vm._v("本平台不收取任何中介费用")])],1),_vm._v(" "),_c('font',{attrs:{"color":"#FF7955"}})],1),_vm._v(" "),_c('li',[_c('span',{on:{"click":_vm.jump}},[_c('font',{attrs:{"color":"#FF7955"}},[_vm._v("申请多家贷款可提升通过率")])],1),_vm._v(" "),_c('font',{attrs:{"color":"#FF7955"}})],1),_vm._v(" "),_c('li',[_c('span',{on:{"click":_vm.jump}},[_c('font',{attrs:{"color":"#FF7955"}},[_vm._v("本平台一律不向学生提供率借贷")])],1),_vm._v(" "),_c('font',{attrs:{"color":"#FF7955"}})],1)],1),_vm._v(" "),_c('font',{attrs:{"color":"#FF7955"}},[_c('font',{attrs:{"color":"#FF7955"}},[_c('font',{attrs:{"color":"#FF7955"}})],1)],1)],1),_vm._v(" "),_c('font',{attrs:{"color":"#FF7955"}},[_c('font',{attrs:{"color":"#FF7955"}},[_c('font',{attrs:{"color":"#FF7955"}},[_c('div',{staticClass:"pinfo-list-btn"},[_c('a',{staticClass:"s-gnel-ylbtn-gdt",on:{"click":function($event){_vm.jump(_vm.feed1.link)}}},[_vm._v("立即拿钱")])]),_vm._v(" "),_c('div',{staticClass:"pinfo-sdln-tgl"},[_c('span',[_vm._v("成功率")]),_vm._v(" "),_c('strong',[_vm._v("100%")])])])],1)],1)],1),_vm._v(" "),_c('font',{attrs:{"color":"#FF7955"}},[_c('font',{attrs:{"color":"#FF7955"}},[_c('font',{attrs:{"color":"#FF7955"}})],1)],1)],1),_vm._v(" "),_c('font',{attrs:{"color":"#FF7955"}},[_c('font',{attrs:{"color":"#FF7955"}},[_c('font',{attrs:{"color":"#FF7955"}},[_c('section',{staticClass:"pt-rsd-list"},[_c('div',{staticClass:"pt-rds-header"},[_c('h4',{staticClass:"pt-rds-lh4"},[_c('img',{attrs:{"src":__webpack_require__(16)}})])]),_vm._v(" "),_vm._l((_vm.feedData),function(feed){return _c('feed',{key:feed.key,attrs:{"feed":feed}})})],2),_vm._v(" "),_c('div',{staticStyle:{"height":"3.8rem"}})])],1)],1)],1)])}
var pages_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"javascript:;"}},[_c('i',[_c('img',{attrs:{"src":__webpack_require__(17)}})]),_vm._v(" "),_c('p',[_vm._v("爆款推荐")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"javascript:;"}},[_c('i',[_c('img',{attrs:{"src":__webpack_require__(18)}})]),_vm._v(" "),_c('p',[_vm._v("无视黑白")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"javascript:;"}},[_c('i',[_c('img',{attrs:{"src":__webpack_require__(19)}})]),_vm._v(" "),_c('p',[_vm._v("小额秒过")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"javascript:;"}},[_c('i',[_c('img',{attrs:{"src":__webpack_require__(20)}})]),_vm._v(" "),_c('p',[_vm._v("免审放款")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"swiper-slide slide-jk-box swiper-slide-next",staticStyle:{"width":"640px"}},[_c('div',{staticClass:"slide-jk-bul"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',{staticClass:"speedloan-js-head"},[_c('img',{attrs:{"src":__webpack_require__(21)}})])}]
var pages_esExports = { render: pages_render, staticRenderFns: pages_staticRenderFns }
/* harmony default export */ var list_pages = (pages_esExports);
// CONCATENATED MODULE: ./src/view/list/pages/index.vue
var pages_normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var pages___vue_template_functional__ = false
/* styles */
var pages___vue_styles__ = null
/* scopeId */
var pages___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var pages___vue_module_identifier__ = null
var pages_Component = pages_normalizeComponent(
  pages,
  list_pages,
  pages___vue_template_functional__,
  pages___vue_styles__,
  pages___vue_scopeId__,
  pages___vue_module_identifier__
)

/* harmony default export */ var view_list_pages = (pages_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib?{"babelrc":false,"presets":["babel-preset-react-app"],"plugins":["transform-decorators-legacy"],"compact":true,"cacheDirectory":false,"highlightCode":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/view/list/App.vue
//
//
//
//
//
//
/* harmony default export */ var App = ({props:{firstAjax:Boolean},components:{FeedPage:view_list_pages}});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-60469dc1","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/view/list/App.vue
var App_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[_c('feed-page')],1)}
var App_staticRenderFns = []
var App_esExports = { render: App_render, staticRenderFns: App_staticRenderFns }
/* harmony default export */ var list_App = (App_esExports);
// CONCATENATED MODULE: ./src/view/list/App.vue
function injectStyle (ssrContext) {
  __webpack_require__(12)
}
var App_normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var App___vue_template_functional__ = false
/* styles */
var App___vue_styles__ = injectStyle
/* scopeId */
var App___vue_scopeId__ = "data-v-60469dc1"
/* moduleIdentifier (server only) */
var App___vue_module_identifier__ = null
var App_Component = App_normalizeComponent(
  App,
  list_App,
  App___vue_template_functional__,
  App___vue_styles__,
  App___vue_scopeId__,
  App___vue_module_identifier__
)

/* harmony default export */ var view_list_App = (App_Component.exports);

// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/libs/events.js
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * sub/pub 基础类
 * @class EventsClass
 */var EventsClass=function(){function EventsClass(){_classCallCheck(this,EventsClass);this._evtMap={};}/**
   * 触发广播
   * @function
   * @param {String} name 事件名称
   * @param {Array} args 事件回调时的arguments参数
   */_createClass(EventsClass,[{key:"trigger",value:function trigger(name,args){var _this=this;var cbs=this._evtMap[name];if(cbs){cbs.forEach(function(fn){fn.apply(_this,[].concat(args));});}}/**
   * 订阅广播
   * @function
   * @param {String} name 事件名称
   * @param {Function} cb 事件回调函数
   */},{key:"on",value:function on(name,cb){if(this._evtMap[name]){this._evtMap[name].push(cb);}else{this._evtMap[name]=[cb];}}/**
   * 取消订阅
   *
   * @function
   * @param {String} name 事件名称
   * @param {Function} cb 事件回调函数
   */},{key:"off",value:function off(name,cb){if(this._evtMap[name]&&cb){var index=this._evtMap[name].indexOf(cb);this._evtMap[name].splice(index,1);return;}// @FIXME 危险区域
if(!cb){if(this._evtMap[name]){this._evtMap[name]=[];}}}}]);return EventsClass;}();/* harmony default export */ var events = (EventsClass);
// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/const/globalEvents.js
/**
 * 所有客户端广播集合
 * @readonly
 * @enum {String}
 *//* harmony default export */ var globalEvents = ({/**
   * 页面 ready 状态广播
   *
   * @example
   * // ready 直接接受一个回调函数
   * SNC.ready(data => {
   *   //  注意：当处于【wap】模式下，data 为 undefined
   *   // data.message {Object} 页面参数，由上个页面传来
   *   // data.newsId {String} 页面 id
   *   // data.navBarHeight {Number} 导航栏高度
   *   // data.commentBarHeight {Number} 评论条高度
   *   // data.statusBarHeight {Number} 顶部系统栏高度
   *   // data.info {String} 统计参数，数据上报时使用
   *   // data.abStrategyIds {Object} abTest 命中结果
   *   console.log(data)
   * })
   */ready:'hb.core.ready',/**
   * WVModal 弹窗首屏数据广播，仅在弹窗内有效
   *
   * @example
   * SNC.onPreFetch({
   *   success(res) {
   *     console.log(res.data)
   *   }
   * })
   */onPreFetch:'hb.core.onPreFetch',/**
   * 获取页面render状态广播
   *
   * @example
   * SNC.onGetRenderStatus({
   *   success(res) {}
   * })
   */onGetRenderStatus:'hb.core.getRenderStatus',/**
   * 页面第一次获取数据广播，需要对ajax=后面的参数进行encodeURIComponent编码
   *
   * @example
   * SNC.onFirstAjax({
   *   success(data, res) {
   *     // 网络异常时，data 为上次加载的缓存数据
   *     // 通过 res.statusCode 区分是否为缓存
   *     console.log(data)
   *     // res.statusCode 网络状态码，100 标识有缓存
   *     if(res.statusCode == 100) {
   *       console.log('网路异常')
   *     }
   *   }
   * })
   */onFirstAjax:'hb.core.onFirstAjax',/**
   * 监听右上角分享按钮点击事件
   *
   * @example
   * SNC.onShareInfo({
   *   success() {}
   * })
   */onShareInfo:'hb.bee.onShareInfo',/**
   * app当前夜间或者白天模式广播
   *
   * @example
   * SNC.onDayOrNightModeChange({
   *   success() {}
   * })
   */onDayOrNightModeChange:'hb.core.onDayOrNightModeChange',/**
   * 监听下拉刷新动画
   * 流程: 用户下拉 -> 下拉到指定位置（下拉成功）-> 触发 onPullDownRefresh
   *
   * @example
   * SNC.onPullDownRefresh({
   *   success() {}
   * })
   */onPullDownRefresh:'hb.bee.onPullDownRefresh',/**
   * 页面网络情况切换广播
   *
   * @example
   * SNC.onNetworkStatusChange({
   *   success(res) {}
   * })
   */onNetworkStatusChange:'hb.core.onNetworkStatusChange',/**
   * 页面展示事件
   *
   * @example
   * SNC.onShow({
   *   success(res) {
   *     // app: 应用级，page: 页面级
   *     console.log(res.action)
   *   }
   * })
   */onShow:'hb.core.onShow',/**
   * 页面挂起事件
   *
   * @example
   * SNC.onHide({
   *   success(res) {
   *     // app: 应用级，page: 页面级
   *     console.log(res.action)
   *   }
   * })
   */onHide:'hb.core.onHide',/**
   * 玲珑发送成功的回调
   *
   * @example
   * SNC.onCommentSendBack({
   *   success(res) {}
   * })
   */onCommentSendBack:'hb.bee.onCommentSendBack',/**
   * 玲珑去烧发送的回调
   *
   * @example
   * SNC.onCommentCancel({
   *   success(res) {}
   * })
   */onCommentCancel:'hb.bee.onCommentCancel',/**
   * 监听返回
   *
   * @example
   * SNC.onNavigateBack({
   *   success(res) {}
   * })
   */// 废弃
// onNavigateBack: 'hb.bee.onNavigateBack',
/**
   * 消息通道
   *
   * @example
   * SNC.onMessage({
   *   success(res) {
   *     // res.topic
   *     // res.data
   *     console.log(res)
   *   }
   * })
   */onMessage:'hb.core.onMessage',/**
   * 监听红包雨结束
   *
   * @example
   * SNC.onLuckMoneyEnd({
   *   success(res) {}
   * })
   */onLuckMoneyEnd:'hb.core.onLuckMoneyEnd',/**
   * 分享成功
   *
   * @example
   * SNC.onShareSuccess({
   *   success(res) {}
   * })
   */onShareSuccess:'hb.bee.onShareSuccess',/**
   * 评论按钮点击
   *
   * @example
   * SNC.onCommentClick({
   *   success(res) {}
   * })
   */onCommentClick:'hb.bee.onCommentClick',/**
   * 用户登录状态改变
   *
   * @example
   * SNC.onUserStateChange({
   *   success(res) {
   *     // res.action  login 登录，logout 注销
   *     // res.userInfo 用户登录信息，注销操作返回 {}
   *     console.log(res)
   *   }
   * })
   */onUserStateChange:'hb.core.onUserStateChange',/**
   * 获取 APP 原生元素点击事件
   *
   * @example
   * SNC.onNativeClick({
   *   success(res) {
   *     // res.key 元素唯一标识
   *     console.log(res)
   *   }
   * })
   */onNativeClick:'hb.bee.onNativeClick',/**
   * 点赞事件
   *
   * @example
   * SNC.onLike({
   *   success(res) {
   *     // res.postId 帖子 id
   *     // res.groupId 小组 id
   *     // [res.mid] 评论 id，保留字段，如果支持评论点赞
   *     // res.action 操作：1 点赞，2 取消赞，3 暴击点赞
   *     console.log(res)
   *   }
   * })
   */onLike:'hb.quanzi.onLike',/**
   * 收藏事件
   *
   * @example
   * SNC.onFavorites({
   *   success(res) {
   *     // res.postId 帖子 id
   *     // res.groupId 小组 id
   *     // res.action 操作：1 收藏，2 取消收藏
   *     console.log(res)
   *   }
   * })
   */onFavorites:'hb.quanzi.onFavorites',/**
   * 关注事件
   *
   * @example
   * SNC.onFollow({
   *   success(res) {
   *     // res.targetId 小组，用户，媒体 id
   *     // res.avatar 小组，用户，头像
   *     // res.name 小组，用户名称
   *     // res.description 小组，用户描述
   *     // res.action 操作：1 关注，2 取消关注
   *     console.log(res)
   *   }
   * })
   */onFollow:'hb.quanzi.onFollow',/**
   * 帖子发布进度
   *
   * @example
   * SNC.onPostProgress({
   *   success(res) {
   *     // res.groupId 小组 id
   *     // res.resultEventId
   *     // res.percentage 发布进度（百分比），范围[0, 100]，发布失败返回 -1
   *     console.log(res)
   *   }
   * })
   */onPostProgress:'hb.bee.onPostProgress'});
// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/const/config.js
// 在每次构建时注入 package.json version 信息
// 请确保将此变量名为 VERSION
var VERSION='1.9.2';var defaultConfig={collectLog:true,pageLoaded:false,autoRendered:true,debug:false};// 网络状态码
// fetch, firstAjax 请求类 api 用
var NETWORK_CODE={SUCCESS:200,TIMEOUT:110,CACHE:100};// first ajax 超时时间
var FIRST_AJAX_TIMEOUT=5000;
// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/utils/eventProxy.js
function firstAjaxProxy(rep,trigger){// statusCode 网络状态码
// 200: 请求成功
// 110: 请求超时（config.FIRST_AJAX_TIMEOUT 5s）
// 100: 缓存数据
if(this._isFirstAjaxTimeout){this._isFirstAjaxTimeout=false;return console.error('[SNC_EVENT] Missed firstAjax return time');}// 清除未过期的计时器
clearTimeout(this._firstAjaxTimer);if(rep.errCode==0&&rep.data.statusCode==NETWORK_CODE.SUCCESS){if(this._pageId){// 将当前请求结果写入存储
this.cache.save('SNC_FA_'+this._pageId,rep.data.data);this.cache.info();}return trigger({response:rep.data,state:'remote'});}else{// 尝试读取缓存数据
return this.cache.get('SNC_FA_'+this._pageId).then(function(cData){// statusCode: 100 缓存数据，sdk 协议
cData.statusCode=NETWORK_CODE.CACHE;trigger({response:cData,state:'cache'});}).catch(function(e){trigger({response:rep,state:'error'});});}}
// EXTERNAL MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/utils/index.js + 1 modules
var utils = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/libs/Cache.js
var Cache__createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function Cache__classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}// 保证 SNC 标准挂载的的方法进行处理
var Cache=function(){function Cache(ctx){Cache__classCallCheck(this,Cache);this.SNC=ctx;}Cache__createClass(Cache,[{key:'save',value:function save(key,data){var cache={timestamp:+new Date(),data:data};try{if(key){this.SNC.setStorage({key:key,value:cache}).then(function(){console.log('[SNC_CACHE] save firstAjax cache',key);});}}catch(e){}}},{key:'get',value:function get(key){try{// 获取不到返回 data 为 ''
return this.SNC.getStorage({key:key}).then(function(data){if(data){console.log('[SNC_CACHE] use firstAjax cache',key,data);return data;}return Promise.reject();});}catch(e){return Promise.reject();}}},{key:'info',value:function info(key){try{this.SNC.getStorageSize().then(function(data){var size=typeof data==='number'?data:data.size;console.log('[SNC_CACHE] used size '+size/1000+' KB');return size;});}catch(e){}}},{key:'remove',value:function remove(id){}},{key:'clear',value:function clear(){}}]);return Cache;}();/* harmony default export */ var libs_Cache = (Cache);
// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/utils/fixResponse.js
/**
 * 处理事件类方法的响应参数
 * @private
 *
 * @module fixResponse
 * @readonly
 *//**
 * 针对 ready 方法特殊处理
 * @memberof fixResponse
 * @private
 */function readyHandler(_ref){var _ref$response=_ref.response,response=_ref$response===undefined?{}:_ref$response,options=_ref.options;successHandle(options,response.data);}/**
 * onFirstAjax fetch 等网络 api，需多判断一层 statusCode
 * @memberof fixResponse
 * @private
 */function fixResponse_firstAjaxHandler(repInfo){var context=repInfo.context,options=repInfo.options,ajaxRep=repInfo.response,errCb=repInfo.errCb;var _ajaxRep$response=ajaxRep.response,response=_ajaxRep$response===undefined?{}:_ajaxRep$response,state=ajaxRep.state;var returnCache=options.cache===undefined?true:!!options.cache;var autoHideLoading=options.hideLoading===undefined?true:!!options.hideLoading;autoHideLoading&&context.hideLoading();if(state==='remote'){successHandle(options,response.data,response);}else if(state==='cache'&&returnCache){successHandle(options,response.data,response);}else{var errMsg=utils["a" /* default */].getAPIErrorMsg(ajaxRep,'firstAjax');// @TODO 错误上报
errorHandle(options,errCb,errMsg,response);}options.complete&&options.complete(response);}/**
 * 通用返回值处理
 * @memberof fixResponse
 * @private
 */function commonHandler(_ref2){var _ref2$response=_ref2.response,response=_ref2$response===undefined?{}:_ref2$response,options=_ref2.options,errCb=_ref2.errCb,evtName=_ref2.evtName;// errDescription 别名
response.errMsg=response.errDescription;if(response.errCode==0){successHandle(options,response.data);}else{var errMsg=utils["a" /* default */].getAPIErrorMsg(response,evtName);errorHandle(options,errCb,errMsg,response);}}function successHandle(opts){for(var _len=arguments.length,datas=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){datas[_key-1]=arguments[_key];}if(utils["a" /* default */].isFunction(opts)){opts.apply(null,datas);}else if(utils["a" /* default */].isFunction(opts.success)){// 兼容对象传参，旧版业务使用
opts.success.apply(null,datas);}}function errorHandle(opts,cb){for(var _len2=arguments.length,datas=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){datas[_key2-2]=arguments[_key2];}if(utils["a" /* default */].isFunction(cb)){cb.apply(null,datas);}if(utils["a" /* default */].isFunction(opts.error)){// 兼容对象传参，旧版业务使用
opts.error.apply(null,datas);}}
// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/core/mockBridge.js
/**
 * 如果debug模式，则SNC的bridge属性为此对象
 * @namespace mockBridge
 */var mockBridge={messageHandlers:{},mockMap:{},/**
   * 注册Native广播
   * @param {String} handlerName
   * @param {Function} handlerName
   */registerHandler:function registerHandler(handlerName,handler){if(this.messageHandlers[handlerName]){this.messageHandlers[handlerName].push(handlerName);}else{this.messageHandlers[handlerName]=[handler];}},/**
   * 模拟Native调用方法的返回数据
   * @param {Object} data
   * @example
   * // 模拟hb.core.checkJsApi 方法的返回值
   * snc.setmockMap({
   *   'hb.core.checkJsApi':function(data){
   *      return {
   *        errCode:0,
   *        data:{
   *         statusCode:110
   *        }
   *      }
   *   }
   * });
   */setmockMap:function setmockMap(data){/*
    this.mockMap = {
      'hb.core.checkJsApi':{
        errCode:0,
        data:'checkjsApi mock success'
      }
    };
    */this.mockMap=Object.assign(this.mockMap,data);},/**
   * 调用Native方法
   * @param {String} handlerName
   * @param {Object} data
   * @param {Function} responseCallbacks
   */callHandler:function callHandler(handlerName,data,responseCallbacks){if(this.mockMap[handlerName]){responseCallbacks(this.mockMap[handlerName](data));}else{throw new Error(handlerName+' api is not defined in mockMap!');}},/**
   * 模拟Native发起广播
   * @param {String} api
   * @param {Object} data
   * @example
   * // 模拟ready事件发起客户端广播
   * snc.mock('hb.core.ready',{
   *   errCode:0,
   *   data:{
   *     statusCode:120
   *   }
   * })
   */mock:function mock(api,data){if(this.messageHandlers[api]){this.messageHandlers[api].forEach(function(fn){fn(data);});}}};/* harmony default export */ var core_mockBridge = (mockBridge);
// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/core/connect.js
var connect__createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function connect__classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var win=window;var doc=document;/**
 * 创建和获取 jsbridge 基础类
 * @class ConnectClass
 * @extends EventsClass
 */var connect_ConnectClass=function(_EventsClass){_inherits(ConnectClass,_EventsClass);function ConnectClass(){connect__classCallCheck(this,ConnectClass);var _this=_possibleConstructorReturn(this,(ConnectClass.__proto__||Object.getPrototypeOf(ConnectClass)).call(this));_this._isFirstAjaxTimeout=false;_this._firstAjaxTimer=0;return _this;}/**
   * 获取jsbridge实例，注入到sncClass上的bridge属性 `this.bridge`
   */connect__createClass(ConnectClass,[{key:'connect',value:function connect(){var _this2=this;// 建立连接开始之前的广播，收集数据用
this.trigger('startConnect');this.cache=new libs_Cache(this);this.setupWebViewJavascriptBridge(function(jsBridge){_this2.bridge=jsBridge;console.log('[SNC_CONNECT] Success');// 注册事件发布器
_this2.registEventCenter(jsBridge);/**
       * 内部方法，获取到jsbridge时触发
       * @memberof globalEvents
       * @name connect
       */_this2.trigger('connect',[jsBridge,_this2]);});// 注册事件订阅器
this.registEventListener();return this;}/**
   * android下的初始化方法
   * @private
   */},{key:'androidSetup',value:function androidSetup(cb){// android 初始化应该是全局注入
doc.addEventListener('WebViewJavascriptBridgeReady',function(){cb(win.WebViewJavascriptBridge);},false);}/**
   * iOS下的初始化方法
   * @private
   */},{key:'iOSSetup',value:function iOSSetup(cb){//ios初始化 有些需要手工调用scheme才能注入js bridge脚本
if(win.WVJBCallbacks){win.WVJBCallbacks.push(cb);}else{win.WVJBCallbacks=[cb];utils["a" /* default */].createIframeRquest('https://__bridge_loaded__');}}/**
   * 建立jsbridge桥，回调拿到最终的jsbridge
   * @private
   */},{key:'setupWebViewJavascriptBridge',value:function setupWebViewJavascriptBridge(cb){if(this.options.debug)return cb(core_mockBridge);var WVJB=win.WebViewJavascriptBridge;// 检查是否已经被初始化过
if(WVJB){cb(WVJB);}else{// 不同客户端初始化方式不一样
utils["a" /* default */].isAndroid?this.androidSetup(cb):this.iOSSetup(cb);}}/**
   * 初始化globalEvent全局广播通道
   * @private
   */},{key:'registEventCenter',value:function registEventCenter(bridge){var _this3=this;this.on('onGetRenderStatus',function(data,cb){if(utils["a" /* default */].isFunction(cb))cb({errCode:0,data:{status:''+Number(_this3.pageLoaded)}});});// 批量注册所有 bridge 事件
Object.keys(globalEvents).forEach(function(name){bridge.registerHandler(globalEvents[name],function(rep,cb){_this3.fireAppEvent(name,rep,cb);});});this._setupFirstAjaxTimer();}},{key:'_setupFirstAjaxTimer',value:function _setupFirstAjaxTimer(){var _this4=this;this._isFirstAjaxTimeout=false;clearTimeout(this._firstAjaxTimer);// 初始化时创建 firstAjax 计时器
this._firstAjaxTimer=setTimeout(function(){// first ajax 超时回调
_this4.trigger('onFirstAjax',{response:{statusCode:NETWORK_CODE.TIMEOUT,data:{}},state:'timeout'});// 标记 firstAjax 超时状态
_this4._isFirstAjaxTimeout=true;},FIRST_AJAX_TIMEOUT);}},{key:'fireAppEvent',value:function fireAppEvent(evtName,response,cb){var _this5=this;var rep=utils["a" /* default */].strToObject(response);var trigger=function trigger(data){return _this5.trigger(evtName,[data,cb]);};console.log('[SNC_EVENT] Fire '+evtName,rep);if(evtName==='ready'){try{// 安卓需要二次解析 message
rep.data.message=JSON.parse(rep.data.message);}catch(e){}var urlInfo=rep&&rep.data&&rep.data.message&&rep.data.message.urlInfo;this.newsId=rep&&rep.data&&rep.data.newsId||'';// 一些 firstajax 带有 urlInfo 参数，因此拼接确作为此页面唯一标识
this._pageId=urlInfo?this.newsId+'&'+utils["a" /* default */].serializeData(urlInfo):this.newsId;}if(evtName==='onFirstAjax'){// 代理内部进行同步或异步 trigger
return firstAjaxProxy.call(this,rep,trigger);}trigger(rep);}/**
   * 挂载所有通道订阅方法到实例上，如 `on("ready") -> snc.ready({success:func})`
   * @private
   */},{key:'registEventListener',value:function registEventListener(){var _this6=this;Object.keys(globalEvents).forEach(function(evtName){_this6[evtName]=function(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var errCb=arguments[1];_this6.on(evtName,function(response){console.log('[SNC_EVENT] Handle '+evtName);var repInfo={evtName:evtName,response:response,errCb:errCb,options:options,context:_this6};switch(evtName){case'ready':readyHandler(repInfo);break;case'onFirstAjax':case'onPreFetch':fixResponse_firstAjaxHandler(repInfo);break;default:commonHandler(repInfo);}});};});}}]);return ConnectClass;}(events);/* harmony default export */ var core_connect = (connect_ConnectClass);
// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/core/EarlyBird.js
var EarlyBird__createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function EarlyBird__classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var EarlyBird=function(){function EarlyBird(){EarlyBird__classCallCheck(this,EarlyBird);this.invokeSet={};}EarlyBird__createClass(EarlyBird,[{key:"_setBirdcage",value:function _setBirdcage(name,param){var bird={param:param};if(this.invokeSet[name]){this.invokeSet[name].push(bird);}else{this.invokeSet[name]=[bird];}return bird;}},{key:"catch",value:function _catch(name){var _this=this;return function(param){var bird=_this._setBirdcage(name,param);// 兼容 Promise
return{then:function then(thenCb){bird.then=thenCb;return{catch:function _catch(catchCb){bird.catch=catchCb;}};}};};}},{key:"free",value:function free(name,cb){if(!this.invokeSet[name])return;this.invokeSet[name].forEach(function(bird,idx){cb(bird);});delete this.invokeSet[name];}}]);return EarlyBird;}();
// EXTERNAL MODULE: ./node_modules/wintip/lib/wintip.js
var wintip = __webpack_require__(3);
var wintip_default = /*#__PURE__*/__webpack_require__.n(wintip);

// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/libs/devperf.js
/**
 * @author xiaojue
 * @date 2018-05-23
 * @fileview 计算hybrid本地开发环境性能的模块
 * 通过 this.collectDevPerf 来开启，只对hb有效目前。
 * 原理，本地通过ls存储每次页面的性能，再汇总出平均性能，中位数以及分位数，目前取p90
 */// import copyHack from '@mfelibs/base-tools-copy2Clipper';
function devperf(source){try{//localStorage.removeItem('perf');
//deep clone
var param=JSON.parse(JSON.stringify(source));var perf=localStorage.getItem('perf');perf=perf?JSON.parse(perf):{data:[],exp:Date.now()};//有效期1天
if(Date.now()-perf.exp>1000*60*60*24){localStorage.removeItem('perf');return;}//获取css,js的加载时间
var resource=window.performance.getEntriesByType('resource');resource.forEach(function(res){if(res.initiatorType=='script'||res.initiatorType=='css'){param[res.initiatorType+'/'+res.name.slice(res.name.lastIndexOf('/')+1)+'_duration']=res.duration;}});//获取自定义点位的时间
var measure=window.performance.getEntriesByType('measure');measure.forEach(function(mea){param[mea.name]=mea.duration;});//wintip(perf);
if(perf.data.length>=100){perf.data.shift(1);}perf.data.push(param);//按page名称计算,性能平均值，p50，p90
var data=perf.data;var result={};data.forEach(function(item,index){if(!result[item.info]){result[item.info]={};}result[item.info][index]={};for(var name in item){if(['stime','type','subtype','btime','info','hybrid_first_paint'].indexOf(name)>-1)continue;if(name.indexOf('hybrid')>-1||name.indexOf('etime')>-1){result[item.info][index][name]=item[name]-item['stime'];}else{result[item.info][index][name]=item[name];}}});var perfResult={};var perfTable={};for(var page in result){var count=Object.keys(result[page]).length;perfResult[page]={};perfTable[page]={};perfTable[page]['count']=count;for(var i in result[page]){for(var key in result[page][i]){if(perfResult[page][key]){perfResult[page][key].push(result[page][i][key]);}else{perfResult[page][key]=[result[page][i][key]];}}}for(var j in perfResult[page]){var values=perfResult[page][j];values.sort(function(a,b){return a-b;});//平均值
perfTable[page][j+'_avg']=(sum(values)/count).toFixed(2);//中位数
perfTable[page][j+'_median']=((values[values.length-1>>1]+values[values.length>>1])/2).toFixed(2);//p90
perfTable[page][j+'_p90']=quartile(values,0.9).toFixed(2);}}wintip_default()(perfTable);localStorage.setItem('perf',JSON.stringify(perf));var perfstr=JSON.stringify(perfTable);// copyHack(perfstr);
}catch(e){wintip_default()(e.toString());}}function quartile(data,q){var pos=(data.length-1)*q;var base=Math.floor(pos);var rest=pos-base;if(data[base+1]!==undefined){return data[base]+rest*(data[base+1]-data[base]);}else{return data[base];}}function sum(arr){var sum=0;arr.forEach(function(item){sum+=item;});return sum;}/* harmony default export */ var libs_devperf = (devperf);
// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/appApis/performance.js
/* harmony default export */ var appApis_performance = (function(ctx){var defData={type:'hybrid',subtype:'',info:'',btime:0,stime:0,etime:0};var commonField=['subtype','info','etime','stime'];var getHbData=utils["a" /* default */].filterObjProps(commonField);function parseNumberStr(val){var isString=typeof val==='string';if(isString&&val==='')return val;var n=Number(val);// fix isNaN special-case behavior
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN
var isNaN=n!==n;return isString?isNaN?val:n:val;}function adapter(data){var hbData=getHbData(data);var copy=function copy(obj,key){return obj[key]=parseNumberStr(data[key]),obj;};var cmData=commonField.reduce(copy,{});var copyWithPrefix=function copyWithPrefix(obj,key){obj['hybrid_'+key]=parseNumberStr(data[key]);return obj;};return Object.keys(hbData).reduce(copyWithPrefix,cmData);}/**
   * 性能统计
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {String} options.subtype
   * @param {String} options.info
   * @param {Number} options.btime
   * @param {Number} options.etime
   * @param {Number} options.requeststart
   * @param {Number} options.responsestart
   * @param {Number} options.jsbridgeready
   * @param {Number} options.firstajax
   * @param {Number} options.domInteractive
   * @param {Number} options.domContentLoadedEventEnd
   * @param {Number} options.firstpaint
   * @param {Number} options.domComplete
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   *
   * @example
   * SNC.performance({
   *   subtype: 'page_init',
   *   btime: 1516699847958,
   *   etime: 1516699855372
   * })
   */ctx.performance=ctx.definedMethod('hb.core.performance',function(data){var param=utils["a" /* default */].mergeProp(defData,adapter(data));if(ctx.collectDevPerf&&param.subtype=='page_init'){libs_devperf.call(ctx,param);}return param;});});
// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/appApis/onRendered.js
/* harmony default export */ var onRendered = (function(ctx){/**
   * 触发页面就绪事件
   *
   * @memberof sncClass
   * @function
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   *
   * @example
   * SNC.onRendered({
   *   success(response) {}
   * })
   */ctx.onRendered=ctx.definedMethod('hb.core.onRendered',function(){// 内部状态标记为渲染完毕
ctx.pageLoaded=true;});});
// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/appApis/getStorage.js
/* harmony default export */ var getStorage = (function(ctx){/**
   * 获取数据存储内容
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {String} options.key 要获取数据的 key
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   * @return {Promise<Object>}
   *
   * @example
   * SNC.getStorage({
   *   key: 'test',
   *   success(response) {}
   * })
   */ctx.getStorage=ctx.definedMethod({api:'hb.core.getStorage',default:{key:''},postHook:function postHook(res){try{res.data=JSON.parse(res.data);}catch(e){}}});});
// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/appApis/setStorage.js
/* harmony default export */ var setStorage = (function(ctx){/**
   * 设置本地存数数据
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {String} options.key
   * @param {String} options.value
   * @param {String} options.expireTime 有效时间，单位：秒
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   *
   * @example
   * SNC.setStorage({
   *   key: 'test',
   *   value: { name: 'fish' },
   *   // 保存两天
   *   expireTime: 60 * 60 * 24 * 2
   * })
   */ctx.setStorage=ctx.definedMethod('hb.core.setStorage',{key:'',value:'',// 默认保存两天
expireTime:60*60*24*2},function(data){// @FIXME
// 此设置为了 hack 安卓只能接受字符串参数的问题
// 在 iOS 下导致崩溃
// 方案：1)iOS 端内兼容，2)验证安卓是否已支持数字参数
if(utils["a" /* default */].isAndroid){if(data.expireTime)data.expireTime+='';}data.value=JSON.stringify(typeof data.value==='undefined'?'':data.value);});});
// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/appApis/getStorageSize.js
/* harmony default export */ var getStorageSize = (function(ctx){/**
   * 获取数据存储使用情况
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   * @return {Promise<Object>}
   *
   * @example
   * SNC.getStorageSize({
   *   success(data) {
   *     // data.size  单位 byte
   *     console.log(data)
   *   }
   * })
   */ctx.getStorageSize=ctx.definedMethod('hb.core.getStorageSize');});
// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/appApis/simaLog.js
/* harmony default export */ var simaLog = (function(ctx){/**
   * sima 日志上报
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {String} options.subtype
   * @param {Number} options.stime
   * @param {Number} options.etime
   * @param {String} options.info
   * @param {String} options.info2
   * @param {String} options.info3
   * @param {String} options.info4
   * @param {String} options.info5
   * @param {String} options.info6
   * @param {String} options.info7
   * @param {String} options.info8
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   * @return {Promise<Object>}
   *
   * @example
   * SNC.simaLog({
   *   subtype: 'js_error',
   *   stime: Date.now(),
   *   success(response) {}
   * })
   */ctx.simaLog=ctx.definedMethod('hb.core.simaLog');});
// EXTERNAL MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/appApis/hideLoading.js
var hideLoading = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/core/buildInApi.js

// CONCATENATED MODULE: ./node_modules/@mfelibs/base-tools-mkperformance/src/index.js
var performanceCollection={isSend:true,init:function init(sampleRate,ext,cb){var sampleRate=sampleRate||1/5000;var rollNumber=Math.floor(Math.random()/sampleRate*10);if(rollNumber>=10){return;}var loc=location;this._performanceCollection(ext,cb);},_performanceCollection:function _performanceCollection(ext,cb){var win=window;var performance=null;var timing=null;var timer=-1;var DEFAULT_TIMEOUT_TIME=30;var self=this;var attr='0';if(win.performance){timer=setInterval(function(){clearInterval(timer);timing=win.performance.timing;if(timing.fetchStart){attr=self._sliceAttr(timing.fetchStart);}var cared={'attr':attr,'cE':self._sliceString(timing.connectEnd),'cS':self._sliceString(timing.connectStart),'dC':self._sliceString(timing.domComplete),'dCLE':self._sliceString(timing.domContentLoadedEventEnd),'dCLS':self._sliceString(timing.domContentLoadedEventStart),'dI':self._sliceString(timing.domInteractive),'dL':self._sliceString(timing.domLoading),'dLE':self._sliceString(timing.domainLookupEnd),'dLS':self._sliceString(timing.domainLookupStart),'fS':self._sliceString(timing.fetchStart),'lEE':self._sliceString(timing.loadEventEnd),'lES':self._sliceString(timing.loadEventStart),'rE':self._sliceString(timing.redirectEnd),'rS':self._sliceString(timing.redirectStart),'nS':self._sliceString(timing.navigationStart),'reS':self._sliceString(timing.requestStart),'rsS':self._sliceString(timing.responseStart),'rsE':self._sliceString(timing.responseEnd),'sCS':self._sliceString(timing.secureConnectionStart),'uEE':self._sliceString(timing.unloadEventEnd),'uES':self._sliceString(timing.unloadEventStart),'ext':ext};if(self.isSend){cb&&cb(cared);}},DEFAULT_TIMEOUT_TIME);}},_sliceString:function _sliceString(number){var str='0',self=this;if(number==0||number==null||typeof number=='undefined'){return str;}str=number.toString();str=str.slice(7,str.length);if(str.length<6){self.isSend=false;}return str;},_sliceAttr:function _sliceAttr(number){var str='0';if(number==0){str=number.toString();return str;}str=number.toString();str=str.slice(0,7);return str;}};window.performanceCollection=performanceCollection;/*
 *'attr':attr 前缀时间默认8位，已feachstart为准，feachStart为0，则为0
 *'cE':connectEnd,返回用户代理向服务器服务器请求文档，建立连接成功后的那个时间，如果此连接是一个长连接，又或者直接从缓存中获取资源（即没有与服务器建立连接）。则返回domainLookupEnd的值
 *'cS':connectStart,返回用户代理向服务器服务器请求文档，开始建立连接的那个时间，如果此连接是一个长连接，又或者直接从缓存中获取资源（即没有与服务器建立连接）。则返回domainLookupEnd的值
 *'dC':domComplete,返回用户代理把其文档的 "current document readiness" 设置为 "complete"的时候
 *'dCLE':domContentLoadedEventEnd,文档的DOMContentLoaded 事件的结束时间
 *'dCLS':domContentLoadedEventStart,返回文档发生 DOMContentLoaded事件的时间
 *'dI':domInteractive,返回用户代理把其文档的 "current document readiness" 设置为 "interactive"的时候.
 *'dL':domLoading,返回用户代理把其文档的 "current document readiness" 设置为 "loading"的时候
 *'dLE':domainLookupEnd,返回用户代理对结束对当前文档所属域进行DNS查询的时间。如果此请求没有DNS查询过程，如长连接，资源cache，甚至是本地资源等。那么就返回 fetchStart的值
 *'dLS':domainLookupStart,返回用户代理对当前文档所属域进行DNS查询开始的时间。如果此请求没有DNS查询过程，如长连接，资源cache,甚至是本地资源等。那么就返回 fetchStart的值
 *'fS':fetchStart,如果一个新的资源获取被发起，则fetchStart必须返回用户代理开始检查其相关缓存的那个时间，其他情况则返回开始获取该资源的时间
 *'lEE':loadEventEnd,文档触发load事件结束后的时间。如果load事件没有触发，那么该接口就返回0
 *'lES':loadEventStart,文档触发load事件的时间。如果load事件没有触发，那么该接口就返回0
 *'rE':redirectEnd,如果发生了HTTP重定向，并且从导航开始，中间的每次重定向，都和当前文档同域的话，就返回最后一次重定向，接收到最后一个字节数据后的那个时间.其他情况则返回0
 *'rS':redirectStart,如果,发生了HTTP重定向,或者类似的事情.并且,从导航开始,中间的每次重定向，都和当前文档同域的话,就返回开始重定向的,timing.fetchStart的值.其他情况，则返回0.
 *'nS':navigationStart,准备加载新页面的起始时间
 *'reS':requestStart,返回从服务器、缓存、本地资源等，开始请求文档的时间
 *'rsS':responseStart,返回用户代理从服务器、缓存、本地资源中，接收到第一个字节数据的时间
 *'rsS':responseEnd,返回用户代理接收到最后一个字符的时间，和当前连接被关闭的时间中，更早的那个。同样，文档可能来自服务器、缓存、或本地资源
 *'sCS':secureConnectionStart,可选特性。用户代理如果没有对应的东东，就要把这个设置为undefined。如果有这个东东，并且是HTTPS协议，那么就要返回开始SSL握手的那个时间。 如果不是HTTPS， 那么就返回0
 *'uEE':unloadEventEnd,如果前一个文档，和当前文档同源,返回前一个文档发生unload事件前的时间.如果没有前一个文档，或不同源,则返回0.
 *'uES':unloadEventStart,如果前一个文档和当前文档同源.返回前一个文档发生unload事件的时间. 如果没有前一个文档，或不同源,则返回0.如果,发生了HTTP重定向,或者类似的事情.并且,从导航开始中间的每次重定向，并不都和当前文档同域的话,.则返回0
 *'ext':ext 扩展数据
 *DNS查询耗时：domainLookupEnd - domainLookupStart
 *TCP链接耗时：connectEnd - connectStart
 *request请求耗时：responseEnd - responseStart
 *解析dom树耗时：domComplete - domInteractive
 *白屏时间：responseStart - navigationStart
 *domready时间：domContentLoadedEventEnd - navigationStart
 *onload时间：loadEventEnd - navigationStart
 *//* harmony default export */ var src = (performanceCollection);
// EXTERNAL MODULE: ./node_modules/fe-report/lib/index.min.js
var index_min = __webpack_require__(22);
var index_min_default = /*#__PURE__*/__webpack_require__.n(index_min);

// EXTERNAL MODULE: ./node_modules/fps-collector/lib/index.cjs.js
var index_cjs = __webpack_require__(23);
var index_cjs_default = /*#__PURE__*/__webpack_require__.n(index_cjs);

// EXTERNAL MODULE: ./node_modules/fe-error-report/dist/ger.js
var ger = __webpack_require__(24);
var ger_default = /*#__PURE__*/__webpack_require__.n(ger);

// CONCATENATED MODULE: ./node_modules/@mfelibs/base-tools-statistics/src/index.js
var src__createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function src__classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function src__possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function src__inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * @date 2018-01-09 * @fileoverview 收集更全的performance */var src_win=window;var mapping={"firstpaint":"fpt","fpsInfo":"fI","initiatorType":"IT","nextHopProtocol":"nHP","workerStart":"wS","redirectStart":"rDS","redirectEnd":"rE","fetchStart":"fS","domainLookupStart":"dS","domainLookupEnd":"dLE","connectStart":"cS","connectEnd":"cE","secureConnectionStart":"sCS","requestStart":"rQS","responseStart":"rPS","responseEnd":"rPE","transferSize":"tS","encodedBodySize":"eBS","decodedBodySize":"dBS","name":"nm","entryType":"eT","startTime":"sT","duration":"dr"};function clone(notObj){var res={};for(var i in mapping){if(notObj[i]){// 大于0的数字取两位小数
if(notObj[i].toFixed&&notObj[i]!==0){res[mapping[i]]=notObj[i].toFixed(2);}else{res[mapping[i]]=notObj[i];}}}return res;}function tileKey(from,target){Object.keys(from).forEach(function(key){if(!target[key])target[key]=from[key];});}function ready(cb){return src_win.addEventListener?src_win.addEventListener('load',cb):src_win.attchEVent('onload',cb);}var src_statistics=function(_report){src__inherits(statistics,_report);function statistics(options){src__classCallCheck(this,statistics);options.performanceOptions.dataKey='msg';options.performanceOptions.delay=1000;options.performanceOptions.url='https://beacon.sinajs.cn/';options.performanceOptions.getPath='p.gif';options.performanceOptions.postPath='put/p';options.performanceOptions.mergeReport=true;options.performanceOptions.extRandom=options.performanceOptions.extRandom===undefined?1:options.performanceOptions.extRandom;options.errorOptions.url='https://beacon.sinajs.cn/read.gif';options.errorOptions.delay=1000;options.errorOptions.mergeReport=true;//dataKey,mergeReport,delay,url,getPath,postPath,random
var performanceRandom=options.performanceOptions.random;options.performanceOptions.random=1;var _this=src__possibleConstructorReturn(this,(statistics.__proto__||Object.getPrototypeOf(statistics)).call(this,options.performanceOptions));var isSupportPerformance=src_win.performance&&typeof src_win.performance.getEntriesByType==='function'&&typeof src_win.performance.clearResourceTimings==='function'&&typeof src_win.performance.setResourceTimingBufferSize==='function';_this.extRandom=options.performanceOptions.extRandom;_this.extReport=new index_min_default.a({random:_this.extRandom,dataKey:options.performanceOptions.dataKey,url:options.performanceOptions.url,delay:options.performanceOptions.delay,getPath:'put/ext',mergeReport:options.performanceOptions.mergeReport});_this.collectTime=options.performanceOptions.collectTime||10000;_this.reportSize=options.performanceOptions.reportSize||10;_this.fpsCollector=null;_this.fpsInfo=[];_this.clinetInfo={};_this.hasReport=false;_this.itemRandom={'img':0,'link':0,'xmlhttprequest':0,'script':0};//初始化错误收集代码
_this.errorReport=new ger_default.a(options.errorOptions);if(!isSupportPerformance)return src__possibleConstructorReturn(_this);if(performanceRandom<=Math.random())return src__possibleConstructorReturn(_this);//设置最大buffer
src_win.performance.setResourceTimingBufferSize(300);_this.clinetInfo=_this.collectClinet();_this.collect();return _this;}src__createClass(statistics,[{key:'collect',value:function collect(){var _this2=this;//策略：
//1 页面onload之后收集一次然后上报
ready(function(){_this2.collectAll(function(rs){_this2.reportByGet(rs);});// 开始收集scroll时的帧率
_this2.collectFPS();//2 页面稳定后，每5秒检查一下，有新的resource -> script style img xhr 会进行上报
_this2.collectResource();});}},{key:'collectAll',value:function collectAll(cb){var _this3=this;//先计算page的performace
if(!this.hasReport){src.init(1,src_win.STO||{},function(rs){try{if(performance.getEntriesByType('paint')&&performance.getEntriesByType('paint')[0]){rs['firstpaint']=performance.getEntriesByType('paint')[0].startTime||0;rs['firstpaint']=rs['firstpaint'].toFixed(2);}if(src_win.chrome&&src_win.chrome.loadTimes){rs.ext['chrome_whiteScreen']=chrome.loadTimes().firstPaintTime.toFixed(0)-rs.nS;}rs.ext=JSON.stringify(rs.ext);tileKey(_this3.clinetInfo,rs);}catch(e){}_this3.hasReport=true;cb(rs);});}}},{key:'collectResource',value:function collectResource(){var _this4=this;var timer=setInterval(function(){var resource=src_win.performance.getEntriesByType('resource');if(resource.length>0){resource.filter(function(item){//script 包含了jsonp接口
var isTypes=item.initiatorType==='xmlhttprequest'||item.initiatorType==='script'||item.initiatorType==='img'||item.initiatorType==='link';var isSelf=item.name.indexOf('beacon.sinajs.cn')===-1;return isTypes&&isSelf;}).filter(function(item){var typerandom=_this4.itemRandom[item.initiatorType]||0;return typerandom>=Math.random();}).forEach(function(item,index){var result=clone(item);if(index===0&&_this4.fpsInfo.length>0){item.fpsInfo=JSON.stringify(_this4.fpsInfo);_this4._clearFpsInfo();}tileKey(_this4.clinetInfo,result);if(result.nm)result.nm=encodeURIComponent(result.nm);if(Object.keys(result).length>0)_this4.reportByPost(result);});src_win.performance.clearResourceTimings();}},this.collectTime);}//收集客户端信息
},{key:'collectClinet',value:function collectClinet(){var ua=src_win.navigator.userAgent;var isStandlone=false;var supportSwork=false;var platType='Mobile';try{document.createEvent("TouchEvent");}catch(e){platType='PC';}if(src_win.matchMedia('(display-mode: standalone)').matches)isStandlone=true;if('serviceWorker'in navigator)supportSwork=true;return{currentUrl:encodeURIComponent(src_win.location.href),projectType:platType,userAgent:ua,isStandlone:isStandlone,supportSwork:supportSwork,referer:document.referer?encodeURIComponent(document.referer):'',host:src_win.location.protocol+'//'+src_win.location.hostname};}//收集scroll时的fps信息
},{key:'collectFPS',value:function collectFPS(){var _this5=this;this.fpsCollector=new index_cjs["collectScrollFps"]({threshold:2// 每秒滑动超过两屏，才算快速滑动
});this.fpsCollector.start();// 每次快速滑动，保存帧率信息
this.fpsCollector.on('end',function(data){_this5.fpsInfo.push({fps:data.fps.toFixed(2),speed:data.speed.toFixed(2)});});}},{key:'collectExt',value:function collectExt(ext){if(this.extRandom<=Math.random())return;var clinet=this.collectClinet();clinet.ext=JSON.stringify(ext||{});this.extReport.reportByGet(clinet);}},{key:'collectExtByPost',value:function collectExtByPost(ext){if(this.extRandom<=Math.random())return;var clinet=this.collectClinet();clinet.ext=JSON.stringify(ext||{});this.extReport.reportByPost(clinet);}},{key:'_clearFpsInfo',value:function _clearFpsInfo(){this.fpsInfo=[];}}]);return statistics;}(index_min_default.a);/* harmony default export */ var base_tools_statistics_src = (src_statistics);
// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/core/sdk.js
var sdk__createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function sdk__classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function sdk__possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function sdk__inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var appContext={os:utils["a" /* default */].isiOS?'ios':utils["a" /* default */].isAndroid?'android':'other',innerApp:utils["a" /* default */].isSinaApp&&utils["a" /* default */].isHybrid,version:utils["a" /* default */].appVersion};/**
 * Class js-sdk
 *
 * @extends ConnectClass
 * @param {Object} options
 * @param {Boolean} optons.pageLoaded 页面加载状态
 * @param {Boolean} options.autoRendered 是否自动渲染
 * @param {Boolean} options.debug debug模式状态
 * @param {Boolean} options.collectLog 是否开启日志收集 默认false
 */var sdk_sncClass=function(_ConnectClass){sdk__inherits(sncClass,_ConnectClass);function sncClass(options){sdk__classCallCheck(this,sncClass);var _this=sdk__possibleConstructorReturn(this,(sncClass.__proto__||Object.getPrototypeOf(sncClass)).call(this));_this.options=Object.assign({},defaultConfig,options);// _pageId 与 newsId 在 ready 时被赋值
_this.newsId='';// pageId 通常为 newsId，当页面有 urlInfo 参数时，以 & 拼接
_this._pageId='';_this._timestamp=+new Date();_this._earlyBird=new EarlyBird();_this._namespace=[];_this._docs=[];_this.app=_this.context=appContext;_this._bindEvent();if(_this.options.collectLog){_this._openCollectLog();}_this.connect();// 挂载内建 api 缓存用
_this.mountApi('appApis',{getStorage:getStorage,hideLoading:hideLoading["default"],getStorageSize:getStorageSize,onRendered:onRendered,setStorage:setStorage,simaLog:simaLog});_this.version=VERSION;markSDKInstanceInfo(_this,VERSION);return _this;}sdk__createClass(sncClass,[{key:'_bindEvent',value:function _bindEvent(){var _this2=this;this.on('connect',function(){_this2.isConnect=true;});this.on('onFirstAjax',function(_ref){var _ref$response=_ref.response,response=_ref$response===undefined?{}:_ref$response,state=_ref.state;// push 打开的页面传递回退参数，用于场景还原
// 排除缓存数据
if(response.data&&response.data.data&&response.data.data.backConf&&state!=='cache'){// first ajax 数据回传
_this2.invoke('hb.core.firstAjaxCallbackData',{backConf:response.data.data.backConf});}});}},{key:'_openCollectLog',value:function _openCollectLog(){var ctx=this;// 挂载 performance api
this.mountApi('appApis',{performance:appApis_performance});console.log('[SNC_OPTION] CollectLog open');// 不使用 statistics 的上报策略和上报接口，只调用他的实例方法
this.statistics=new base_tools_statistics_src({errorOptions:{proxyTimer:false,repeat:50,random:1},performanceOptions:{random:0}});this._performanceCollect();//收集错误，中转
this.statistics.errorReport.set('delay',0);this.statistics.errorReport.set('mergeReport',false);// 不使用箭头函数，保证 this 指向为 statistics 内部
this.statistics.errorReport.on('beforeSend',function(){var errInfo=this.queue.get.shift();ctx.errorReport(errInfo);// 返回 false 禁用 performance 上报接口
return false;});}},{key:'init',value:function init(type,apis){var _this3=this;if(type==='wap'){this._setUpWapEvent();}else{this.on('ready',function(data){if(_this3.options.autoRendered){_this3.onRendered();}});}this.mountApi(type,apis);// 返回当前实例
return this;}},{key:'errorReport',value:function errorReport(info){var defInfo={subtype:'js_error',timestamp:Date.now(),colNum:0,rowNum:0,currentUrl:window.location.href,msg:'',screenSize:'',targetUrl:'',userAgent:window.navigator.userAgent,breadcrumbs:[]};var errInfo=Object.assign({},defInfo,info);console.log('[SNC_REPORT] catch error');try{this.simaLog({subtype:'js_error',stime:errInfo.timestamp,info:errInfo.colNum,info2:errInfo.rowNum,info3:errInfo.currentUrl,info4:errInfo.msg,info5:errInfo.screenSize,info6:errInfo.targetUrl,info7:errInfo.userAgent,info8:errInfo.breadcrumbs});}catch(e){console.error('[SNC_REPORT]',e);}}/**
   * 挂载 api
   * @param  {String} type 接口类型，app|wap
   * @param  {Object} apis api 对象集合
   */},{key:'mountApi',value:function mountApi(type,apis){var _this4=this;if(!utils["a" /* default */].isObject(apis))throw new Error('APIs should be an object');if(this.isConnect)return this._resolveApi(type,apis);// bridge 未连接时，定义方法预声明
// 执行的方法将会被储存在缓存队列里
// 在 bridge 链接后调用
this._catchEarlyBirds(apis);this.on('connect',function(){_this4._resolveApi(type,apis);});}},{key:'_resolveApi',value:function _resolveApi(type,apis){this.loadMethods(apis);// 触发 api 加载完成事件
this.trigger(type+'Loaded',apis);this.trigger('apisLoaded',apis);}},{key:'_performanceCollect',value:function _performanceCollect(){var _this5=this;var self=this;var performanceStorge={page_init:{}};this.on('fetch:before',function(param,uuid){performanceStorge[uuid]={stime:utils["a" /* default */].sliceString(Date.now())};});this.on('fetch:after',function(param,uuid){performanceStorge[uuid].etime=utils["a" /* default */].sliceString(Date.now());performanceStorge[uuid].info=param.url;//查看队列并合并上报
var item=performanceStorge[uuid];item.subtype='fetch';//report
_this5.performance(item).then(function(data){//success之后delete
delete performanceStorge[uuid];});});var willReport={bridgeReady:true,firstAjax:false,load:false,firstPaint:false};this.on('ready',function(){var perf=performanceStorge['page_init'];perf['jsbridge_ready']=utils["a" /* default */].sliceString(Date.now());willReport.bridgeReady=true;_this5.logPerformance(willReport,perf);});//firstAjax 5s,first_Paint在firstAjax后3s超时
var fptimer,fjouttime=5000,fpouttime=3000;var fjtimer=setTimeout(function(){self.off('onFirstAjax',firstAjaxHandler);var perf=performanceStorge['page_init'];perf['first_ajax']=utils["a" /* default */].sliceString(Date.now());willReport.firstAjax=true;self.logPerformance(willReport,perf);fpout();},fjouttime);function fpout(){fptimer=setTimeout(function(){self.off('onFirstPaint',firstPaintHandler);var perf=performanceStorge['page_init'];perf['first_paint']=utils["a" /* default */].sliceString(Date.now());willReport.firstPaint=true;self.logPerformance(willReport,perf);},fpouttime);}function firstAjaxHandler(){clearTimeout(fjtimer);var perf=performanceStorge['page_init'];perf['first_ajax']=utils["a" /* default */].sliceString(Date.now());willReport.firstAjax=true;self.logPerformance(willReport,perf);fpout();}function firstPaintHandler(){clearTimeout(fptimer);var perf=performanceStorge['page_init'];perf['first_paint']=utils["a" /* default */].sliceString(Date.now());willReport.firstPaint=true;self.logPerformance(willReport,perf);}this.on('onFirstAjax',firstAjaxHandler);this.on('onFirstPaint',firstPaintHandler);window.addEventListener('load',function(){var onloadDate=utils["a" /* default */].sliceString(Date.now());var perf=performanceStorge['page_init'];//如果不支持 -> mkperformance 逻辑
if(window.performance){_this5.statistics.collectAll(function(rs){perf['stime']=rs.nS;perf['request_start']=rs.reS;perf['response_start']=rs.rsS;perf['response_end']=rs.rsE;perf['dom_interactive']=rs.dI;perf['dom_content_loaded_event_end']=rs.dCLE;// first paint 在hybrid中并没有太大实际意义，这里替换成hybrid被动上报的render时间，在first ajax节点之后
//perf['first_paint'] = utils.sliceString(rs.firstpaint || 0);
perf['dom_complete']=rs.dC;perf.etime=rs.lEE||onloadDate;perf.info=window.location.href;willReport.load=true;_this5.logPerformance(willReport,perf);});}else{//不支持的报onload信息
perf['stime']=window.STAT_STIME===undefined?0:utils["a" /* default */].sliceString(window.STAT_STIME);perf['etime']=onloadDate;perf.info=window.location.href;willReport.load=true;_this5.logPerformance(willReport,perf);}});}},{key:'logPerformance',value:function logPerformance(flags,perf){var will=true;for(var i in flags){if(!flags[i]){will=false;break;}}if(will){perf.subtype='page_init';this.performance(perf);}}// 还原早鸟调用方法
},{key:'_freeEarlyBird',value:function _freeEarlyBird(name){var _this6=this;this._earlyBird.free(name,function(method){_this6[name](method.param).then(method.then).catch(method.catch);});}},{key:'_setUpWapEvent',value:function _setUpWapEvent(){var _this7=this;// 非客户端下直接触发 2 个全局事件
document.addEventListener('DOMContentLoaded',function(){var res={errCode:0,data:{statusCode:200,data:window.res}};_this7.trigger('connect');_this7.trigger('ready');_this7.trigger('onFirstAjax',res);});}},{key:'_catchEarlyBirds',value:function _catchEarlyBirds(){var _this8=this;var apis=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};// 先将所有方法赋值为同一函数,
// 在该函数中，将页面sdk初始化完成之前的函数调用保存在队列中，
// 在sdk初始化完成之后统一调用
// （从而达到不需要强制使用者在ready事件的回调中写业务逻辑的目的）
Object.keys(apis).forEach(function(name){// 跳过已挂载好的 api
if(_this8[name])return;_this8[name]=_this8._earlyBird.catch(name);});}/**
   * 设置debug属性 debug属性可以开启mockBridge功能，替换客户端的bridge
   * @param {Boolean} debug
   * @example
   * snc.setDbug(true)
   */},{key:'setDebug',value:function setDebug(debug){this.options.debug=debug;this.bridge=debug?core_mockBridge:window.WebViewJavascriptBridgeReady;}/**
   * 定义 hybrid 方法
   *
   * @param {String|Object} api 接口名称
   * @param {Object|Function} defData 默认数据
   * @param {Function} preHook 预处理钩子
   * @param {Function} postHook 后处理钩子
   * @param {Function} preHook 参数预处理函数
   *
   * @example
   * // 定义 hybrid 方法
   * snc.checkJsApi = snc.definedMethod('hb.core.checkJsApi', {
   * jsApiList: []
   * });
   *
   * // 调用方法
   * snc.checkJsApi({
   *  jsApiList:[],
   *  success:func,
   *  error:func,
   *  complete:func
   * })
   */},{key:'definedMethod',value:function definedMethod(api,defData,preHook,postHook){var _this9=this;// 参数重载，支持单对象配置
// {
//   api: 'hb.core.xxx',
//   default: {},
//   preHook(data, opt) {},
//   postHook(res) {}
// }
if(utils["a" /* default */].isObject(api)){var conf=api;api=conf.api;preHook=conf.preHook;postHook=conf.postHook;defData=conf.default||{};}else if(utils["a" /* default */].isFunction(defData)){preHook=defData;defData={};}return function(){var opt=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};if(!_this9.isConnect){return console.error('[SNC_CALL] JsBridge is unavailable');}if(!utils["a" /* default */].isObject(opt))throw new Error('[SNC_CALL] '+api+' options should be an object');var data=utils["a" /* default */].filterParams(opt);var param=null;// 钩子函数，bridge 调用前执行，可改变 opt 内部状态
if(utils["a" /* default */].isFunction(preHook)){param=preHook(data,opt);}// utils.mergeProp 自动合并至新对象上
// 此后不要修改 param 上的属性，以免意外污染作用域链上的 defData
param=utils["a" /* default */].isObject(param)?Object.assign({},defData,param):Object.assign({},defData,data);return _this9.invoke(api,param,opt,postHook);};}/**
   * hybrid 方法调用
   * @param  {String} api      方法名
   * @param  {Object} param    纯参数
   * @param  {Object} opt      原始参数
   * @param  {Function} postHook  返回结果处理
   * @return {Promise}
   */},{key:'invoke',value:function invoke(api,param,options,postHook){var _this10=this;return new Promise(function(resolve,reject){_this10.bridge.callHandler(api,param,function(response){console.log('[SNC_CALL] Response '+api,response);utils["a" /* default */].bridgeFixCallback({options:options,response:response,resolve:resolve,reject:reject,postHook:postHook,name:api});});utils["a" /* default */].invokeLogger(api,param);});}},{key:'definedDoc',value:function definedDoc(info){this._docs.push(info);}},{key:'doc',value:function doc(){// this._docs.forEach(doc => console.log(doc));
console.table(this._docs);}/**
   * 加载 API 到实例属性，标志着 api 的真正挂载
   * @param {Object} apis
   * @private
   */},{key:'loadMethods',value:function loadMethods(apis){var _this11=this;var _loop=function _loop(name){// 防止重复挂载 api，
// 这将意味着禁止在外部重写核心 api
if(_this11.checkNamespace())return'continue';_this11._namespace.push(name);// 使用 call(this, this) 以兼容内部 this
// 两端统一项目使用 this 挂载
// 本项目内 appApis 均采用 ctx 注入
apis[name].call(_this11,_this11);// @TODO 优化不必要包装
// 对原有方法进行包装，添加事件节点
var oldMethod=_this11[name];_this11[name]=function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}// 性能统计上报用
var _uuid=utils["a" /* default */].generateUUID();_this11.trigger(name+':before',[args,_uuid]);return oldMethod.apply(_this11,args.length?args:args.concat({})).then(function(value){_this11.trigger(name+':after',[args,_uuid]);return value;});};_this11._freeEarlyBird(name);};// apis 为对象，遍历对象属性
for(var name in apis){var _ret=_loop(name);if(_ret==='continue')continue;}}/**
   * 扩展方法，可以从外部进行广播订阅和API注册
   *
   * @memberof sncClass
   * @function
   * @param {String=} name 自定义方法名，可选
   * @param {Function} creator 生成器，接收 bridge proxy 实例，返回一个函数
   *
   * @example
   * // 注册拓展方法 myMethod1
   * snc.extend('myMethod1', proxy => proxy.bind('hb.bee.foo1'));
   *
   * // 注册拓展方法 myMethod2，提供默认参数 {name: 'lala'}
   * snc.extend('myMethod2', proxy => proxy.bind('hb.bee.foo2', {name: 'lala'}));
   *
   * // 注册拓展方法，省略自定义方法名
   * // 自动生成的方法名将使用过滤`hb.`前缀后驼峰化的 api 名称
   * // test.app.foo => textAppFoo
   * snc.extend(proxy => proxy.bind('test.app.foo'));
   * // hb.bee.bar => beeBar 省略 hb 前缀
   * snc.extend(proxy => proxy.bind('hb.bee.bar'));
   *
   * // 调用
   * snc.myMethod1({
   *  name: 'haha',
   *  success() {}
   * });
   * snc.myMethod2({
   *  name: 'test haha' // change default name 'lala',
   *  success() {}
   * });
   * snc.textAppFoo()
   * snc.beeBar()
   *
   * // 注册 onUpdate 拓展事件
   * snc.extend('onUpdate', proxy => proxy.regist('hb.bee.mydataupdate'));
   * // 省略自定义方法名
   * snc.extend(proxy => proxy.regist('hb.bee.mydataupdate'));
   *
   * // 监听事件
   * snc.onUpdate({
   *  success(data) {}
   * });
   * snc.beeMydataupdate({
   *  success(data) {}
   * });
   */},{key:'extend',value:function extend(name,creator){var _this12=this;var genFn=utils["a" /* default */].isFunction(name)?name:creator;var getApiName=function getApiName(customName,apiName){return utils["a" /* default */].isFunction(customName)?utils["a" /* default */].camelCaseByDot(apiName.replace(/^hb.{1}/,'')):customName;};var apiName='';var action='';var customMethod=genFn({// 绑定方法
bind:function bind(api){var defData=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};action='bind';apiName=getApiName(name,api);_this12._checkNamespaceErr(apiName);return _this12.definedMethod(api,defData);},// 注册事件
regist:function regist(api){action='regist';apiName=getApiName(name,api);_this12._checkNamespaceErr(apiName);if(_this12.bridge){_this12.bridge.registerHandler(api,function(rep,responseCallback){rep=utils["a" /* default */].strToObject(rep);_this12.trigger(apiName,rep);});}else{globalEvents[apiName]=api;}return function(options,errCb){_this12.on(apiName,function(response){commonHandler({response:response,options:options,errCb:errCb,evtName:apiName});});};}});if(customMethod){this[apiName]=customMethod;this._namespace.push(apiName);}else{console.warn('[SNC_EXTEND] Proxy.'+action+' should be return');}}/**
   * 绑定方法到实例（扩展原生方法请使用snc.extend）
   * @param {String} name
   * @param {Function} method
   * @example
   * snc.bindMethod('testMethod', function(){});
   * snc.testMethod();
   */},{key:'bindMethod',value:function bindMethod(name,method){this._checkNamespaceErr(name);this[name]=method;this._namespace.push(name);}/**
   * 检查实例是否已经挂载了方法
   * @param {String} name
   * @returns {Boolean}
   * snc.checkNamespace('testMethod');
   */},{key:'checkNamespace',value:function checkNamespace(name){return this._namespace.indexOf(name)>-1;}},{key:'_checkNamespaceErr',value:function _checkNamespaceErr(name){if(this.checkNamespace(name)){throw new Error(name+' has been defined on sdk instance!');}}/**
   * 删除本地性能cache
   * @example
   * snc.clearDevPerf();
   */},{key:'clearDevPerf',value:function clearDevPerf(){try{localStorage.removeItem('perf');}catch(e){}}}]);return sncClass;}(core_connect);function markSDKInstanceInfo(instance,VERSION){var snc=window['__SNC__']||{};if(snc.version){throw new Error('[SNC_INSTANCE] \u5B58\u5728\u591A\u4E2A SNC \u5B9E\u4F8B\u7248\u672C\uFF1A'+snc.version+', '+VERSION);}else{window['__SNC__']={version:VERSION,instance:instance};Object.freeze(window['__SNC__']);}}/* harmony default export */ var sdk = (sdk_sncClass);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/index.js
function universal_framework_src__classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function universal_framework_src__possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function universal_framework_src__inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * 全局事件 {@link http://unpkg.smfe.sina.cn/@mfelibs/client-jsbridge/dist/index/index.html#globalevents|@mfelibs/client-jsbridge}
 *
 * @memberof globalEvent
 * @param {Object} error 错误信息
 *//**
 * SNC基础类。
 * 在文档中，其方法分为app、wap两种命名空间，从而说明不同环境下的方法差异，但调用时不需要加命名空间。
 * 比如文档中有sncClass.app.fetch、sncClass.wap.fetch，但调用时只需要写sncClass.fetch
 * @extends sncClass
 * @param {Object} options
 * @param {Boolean} optons.pageLoaded 页面加载状态
 * @param {Boolean} options.hasNameSpeace 兼容旧版本，最新版一直为true
 * @param {Boolean} options.autoRendered 是否自动渲染
 * @param {Boolean} options.debug debug模式状态
 * @param {Boolean} options.collectLog 是否开启日志收集 默认false
 * @param {Boolean} options.errorRandom 开启日志收集后错误信息收集概率 默认0.02
 * @param {Boolean} options.performanceRandom 开启日志收集后性能信息收集概率 默认0.001
 */var UniversalClass=function(_SncClass){universal_framework_src__inherits(UniversalClass,_SncClass);function UniversalClass(){universal_framework_src__classCallCheck(this,UniversalClass);return universal_framework_src__possibleConstructorReturn(this,(UniversalClass.__proto__||Object.getPrototypeOf(UniversalClass)).apply(this,arguments));}return UniversalClass;}(sdk);/**
 * 两端统一核心全局接口调用对象。
 *  @global
 *  @type {universalClass}
 *  @example
 * import "@mfelibs/universal-framework/src/libs/apis/checkJsApi";
 * appSNC.checkJsApi({
 *   jsApiList: ['comment', 'getWeiBoState111'],
 *   success: function(response) {},
 * })
 * */var src_appSNC=new UniversalClass({hasNameSpeace:true,// 在 app 环境下开启性能监控
collectLog:"app"==='app',pageLoaded:false,autoRendered:true,debug:false});function firstAjaxAdpater(data){return{response:data,state:'remote'};}if(false){src_appSNC.trigger('connect');document.addEventListener('DOMContentLoaded',function(){src_appSNC.trigger('ready');src_appSNC.trigger('onFirstAjax',firstAjaxAdpater(window['SM']||{}));});}/* harmony default export */ var universal_framework_src = (src_appSNC);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/hideLoading.js
/**
 * 隐藏loading，仅端内，wap已抹平
 * @memberof appSNC
 * @module
 * @alias hideLoading
 * @name hideLoading
 * @param {Object} options
 * @param {Function} options.success
 * @param {Function} options.error
 * @param {Function} options.complete
 * 
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/hideLoading'
 * 
 * appSNC.hideLoading({
 *   success(response) {}
 * })
 */if(true){var hideLoading_hideLoading=__webpack_require__(4).default;universal_framework_src.mountApi("appApis",{hideLoading:hideLoading_hideLoading});}if(false){var _hideLoading=function _hideLoading(){this.hideLoading=function(_ref){var success=_ref.success;return new Promise(function(resolve,reject){success&&success();resolve();});};};appSNC.mountApi("wapApis",{hideLoading:_hideLoading});}/* harmony default export */ var apis_hideLoading = (universal_framework_src.hideLoading);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/fetch/index.js
/**
 * 数据请求接口
 * @memberof appSNC
 * @module
 * @name fetch
 * @alias fetch
 * @param {Object} options
 * @param {String} options.url 请求路径
 * @param {Object} options.method 请求方法，GET | POST，默认为 GET
 * @param {Object} options.data 传递的数据
 * @param {Object} options.referer POST 请求需要跨域请求用
 * @param {Number} options.timeout 超时时间
 * @param {Function} options.success
 * @param {Function} options.error
 * @param {Function} options.complete
 *
 * @example
 * import "@mfelibs/universal-framework/src/libs/apis/fetch";
 *
 * // app 接口请求
 * appSNC.fetch({
 *   url: 'rank/list',
 *   data: {
 *     page: 1,
 *     pullDirection: 'down'
 *   },
 *   success(response) {}
 * })
 *
 * // ajax 接口请求，以 http[s]:// 开头
 * SNC.fetch({
 *   url: 'http://cmnt.sina.cn/aj/v2/vote',
 *   method: 'POST', // POST, GET
 *   referer: 'http://sina.cn', // 跨域域名，默认为 sina.cn
 *   data: {
 *     channel: 'sh',
 *     newsid: 'comos-fztkpin5110540',
 *     mid: '5AE17227-3D9E9361-1640FB8B9-9B6-9C1'
 *   }
 * })
 */if(true){var fetch=__webpack_require__(25).default;universal_framework_src.mountApi('appApis',{fetch:fetch});}if(false){var _fetch=require('./fetch4Wap').default;appSNC.mountApi('wapApis',{fetch:_fetch});}/* harmony default export */ var apis_fetch = (universal_framework_src.fetch);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/setNavigationBarTitle.js
/**
 * 设置页面 title，仅端内，wap已抹平
 * @memberof appSNC
 * @module
 * @alias setNavigationBarTitle
 * @name setNavigationBarTitle
 * @param {Object} options
 * @param {String} options.title
 * @param {Function} options.success
 * @param {Function} options.error
 * @param {Function} options.complete
 * 
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/setNavigationBarTitle';
 * appSNC.setNavigationBarTitle({
 *   title: 'new title',
 *   success(response) {}
 * })
 */if(true){var setNavigationBarTitle=__webpack_require__(26).default;universal_framework_src.mountApi("appApis",{setNavigationBarTitle:setNavigationBarTitle});}if(false){var _setNavigationBarTitle=function _setNavigationBarTitle(){this.setNavigationBarTitle=function(_ref){var success=_ref.success;return new Promise(function(resolve,reject){success&&success();resolve();});};};appSNC.mountApi("wapApis",{setNavigationBarTitle:_setNavigationBarTitle});}/* harmony default export */ var apis_setNavigationBarTitle = (universal_framework_src.setNavigationBarTitle);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/setNavigationBarType.js
/**
 * 设置页面 title，仅端内，wap已抹平
 * @memberof appSNC
 * @description 用于设置导航条bar的类型，具体类型参考：http://wiki.intra.sina.com.cn/display/SinaMobile/plugin+manifest+v0.0.3中的navigationBarType
 * @module
 * @alias setNavigationBarType
 * @name setNavigationBarType
 * @param {Object} options
 * @param {Number} options.type
 * @param {Function} options.success
 * @param {Function} options.error
 * @param {Function} options.complete
 * 
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/setNavigationBarType';
 * 
 * appSNC.setNavigationBarType({
 *   type: 2,
 *   success(response) {}
 * })
 */if(true){var setNavigationBarType=__webpack_require__(27).default;universal_framework_src.mountApi("appApis",{setNavigationBarType:setNavigationBarType});}if(false){var _setNavigationBarType=function _setNavigationBarType(){this.setNavigationBarType=function(_ref){var success=_ref.success;return new Promise(function(resolve,reject){success&&success();resolve();});};};appSNC.mountApi("wapApis",{setNavigationBarType:_setNavigationBarType});}/* harmony default export */ var apis_setNavigationBarType = (universal_framework_src.setNavigationBarType);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/openShare/index.js
/**
 * 打开分享组件 (两端适用)
 * @memberof appSNC
 * @module
 * @name openShare
 * @alias openShare
 * @param {Object} options
 * @param {String} options.title 分享标题
 * @param {String} options.url 分享链接
 * @param {String} options.introduction 分享内容
 * @param {String} options.pic 分享图片
 * @param {String} options.target 分享平台，目前支持 'weixin_moments', 'weixin_friend', 'weibo'，未指定分享平台时将会展示分享弹层
 * @param {Function} options.success
 * @param {Function} options.error
 * @param {Function} options.complete
 *
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/openShare';
 *
 * appSNC.openShare({
 *   title: '新浪新闻1',
 *   url: 'https://www.baidu.com/',
 *   pic: 'https://www.baidu.com/img/bd_logo1.png',
 *   introduction: '分享内容，，，',
 *   success(response) {}
 * })
 *
 * // APP 中获取分享成功结果，请监听 onShareSuccess
 * SNC.onShareSuccess({
 *   success() {
 *     console.log('share success')
 *   }
 * })
 */if(true){var openShare=__webpack_require__(28).default;universal_framework_src.mountApi('appApis',{openShare:openShare});}if(false){var _openShare=require('./openShare4Wap').default;appSNC.mountApi('wapApis',{openShare:_openShare});}/* harmony default export */ var apis_openShare = (universal_framework_src.openShare);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/disableSlidingClose.js
/**
 * 禁止滑动退出，仅支持客户端，wap端已抹平
 * @memberof appSNC
 * @module
 * @alias disableSlidingClose
 * @name disableSlidingClose
 * @param {Object} options
 * @param {Function} options.success
 * @param {Function} options.error
 * @param {Function} options.complete
 * 
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/disableSlidingClose'
 * 
 * appSNC.disableSlidingClose({
 *   success(response) {}
 * })
 */if(true){var disableSlidingClose=__webpack_require__(29).default;universal_framework_src.mountApi("appApis",{disableSlidingClose:disableSlidingClose});}if(false){var _disableSlidingClose=function _disableSlidingClose(){this.disableSlidingClose=function(_ref){var success=_ref.success;return new Promise(function(resolve,reject){success&&success();resolve();});};};appSNC.mountApi("wapApis",{disableSlidingClose:_disableSlidingClose});}/* harmony default export */ var apis_disableSlidingClose = (universal_framework_src.disableSlidingClose);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/previewImage.js
/**
 * 图片预览，仅端内（等同于 actionType 为 21 的 URLNavigateTo），wap已抹平
 *
 * @memberof appSNC
 * @module
 * @alias previewImage
 * @name previewImage 
 * @param {Object} options
 * @param {Number} options.current 指定打开第几个图片，从 0 计数，默认为 0
 * @param {Array<String>} options.urls 图片数组
 * @param {Function} options.success
 * @param {Function} options.error
 * @param {Function} options.complete
 *
 * @example
 * import "@mfelibs/universal-framework/src/libs/apis/previewImage";
 * appSNC.previewImage({
 *   current: 0,
 *   urls: [
 *     'https://k.sinaimg.cn/n/fashion/24_img/upload/de4bf6e2/460/w630h630/20180327/RWjm-fysqfnh5366415.jpg/w640slw.jpg',
 *     'https://k.sinaimg.cn/n/fashion/24_img/upload/de4bf6e2/460/w630h630/20180327/s5nA-fysqfnh5366463.jpg/w640slw.jpg',
 *     'https://k.sinaimg.cn/n/fashion/24_img/upload/de4bf6e2/160/w1344h2016/20180327/frkH-fysqfnh5366490.jpg/w640slw.jpg'
 *   ]
 * })
 */if(true){var previewImage=__webpack_require__(30).default;universal_framework_src.mountApi("appApis",{previewImage:previewImage});}if(false){var _previewImage=function _previewImage(){this.previewImage=function(_ref){var success=_ref.success;return new Promise(function(resolve,reject){success&&success();resolve();});};};appSNC.mountApi("wapApis",{previewImage:_previewImage});}/* harmony default export */ var apis_previewImage = (universal_framework_src.previewImage);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/enablePullDownRefresh.js
/**
 * 启用下拉刷新
 *
 * @memberof appSNC
 * @module
 * @alias enablePullDownRefresh
 * @name enablePullDownRefresh
 * @param {Object} options
 * @param {Function} options.success
 * @param {Function} options.error
 * @param {Function} options.complete
 * 
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/enablePullDownRefresh'
 *
 * // webview 默认禁用下拉刷新功能，需要使用此方法开启
 * // 另外，请确保 manifest.json 的 display 配置中设置 enableOverflowScrolling: true
 * appSNC.enablePullDownRefresh()
 *
 * // 启用下拉刷新功能后，下拉页面到一定距离将会执行下拉刷洗动画，
 * // 同时触发 pullDownRefresh 事件，可通过 sdk 内置的 onPullDownRefresh 事件类方法监听，无需额外引入 api
 * // 结合 fetch 使用，示例：
 * appSNC.onPullDownRefresh({
 *   success() {
 *     appSNC.fetch({
 *       url: 'hbpage?page=1',
 *       success(data) {
 *         // 数据请求成功后，通过 stopPullDownRefresh 停止下拉刷新动画
 *         // stopPullDownRefresh 方法需要事先通过 import '@mfelibs/universal-framework/src/libs/apis/enablePullDownRefresh' 引入
 *         // msg 参数用于提示更新信息
 *         appSNC.stopPullDownRefresh({
 *           msg: `更新了${data.data.length}条信息`
 *         })
 *       },
 *       error(e) {
 *         appSNC.stopPullDownRefresh()
 *         console.log('请求失败')
 *       }
 *     })
 *   }
 * })
 */if(true){var enablePullDownRefresh=__webpack_require__(31).default;universal_framework_src.mountApi('appApis',{enablePullDownRefresh:enablePullDownRefresh});}if(false){var _enablePullDownRefresh=function _enablePullDownRefresh(){this.enablePullDownRefresh=function(_ref){var success=_ref.success;return new Promise(function(resolve,reject){success&&success();resolve();});};};appSNC.mountApi('wapApis',{enablePullDownRefresh:_enablePullDownRefresh});}/* harmony default export */ var apis_enablePullDownRefresh = (universal_framework_src.enablePullDownRefresh);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/stopPullDownRefresh.js
/**
 * 停止下拉刷新动画，具体使用示例详见 enablePullDownRefresh 方法
 * @memberof appSNC
 * @module
 * @name stopPullDownRefresh
 * @alias stopPullDownRefresh
 * @param {Object} options
 * @param {String} options.msg 更新信息
 * @param {Function} options.success
 * @param {Function} options.error
 * @param {Function} options.complete
 *
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/stopPullDownRefresh';
 *
 * appSNC.stopPullDownRefresh({
 *   msg: '更新n条数据',
 *   success(response) {}
 * })
 */if(true){var stopPullDownRefresh=__webpack_require__(32).default;universal_framework_src.mountApi('appApis',{stopPullDownRefresh:stopPullDownRefresh});}if(false){var _stopPullDownRefresh=function _stopPullDownRefresh(){this.stopPullDownRefresh=function(_ref){var success=_ref.success;return new Promise(function(resolve,reject){success&&success();resolve();});};};appSNC.mountApi('wapApis',{stopPullDownRefresh:_stopPullDownRefresh});}/* harmony default export */ var apis_stopPullDownRefresh = (universal_framework_src.stopPullDownRefresh);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/pageReload.js
/**
 * 页面刷新
 *
 * @memberof appSNC
 * @alias pageReload
 * @name pageReload
 * @module
 * @param {Object} options
 * @param {String} options.type  firstAjax: 仅重新触发 onFirstAjax 事件，page: 刷新整个页面
 * @param {successCallback} options.success
 * @param {errorCallback} options.error
 * @param {completeCallback} options.complete
 *
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/pageReload'
 *
 * // 刷新页面
 * SNC.pageReload()
 *
 * // firstAjax 重试
 * SNC.pageReload({
 *   type: 'firstAjax'
 * })
 *
 * // pageReload type 指定为 firstAjax 时，将重新触发 onFirstAjax 事件
 * SNC.onFirstAjax({
 *   success(data) {
 *     console.log(data)
 *   }
 * })
 */if(true){var pageReload=__webpack_require__(33).default;universal_framework_src.mountApi('appApis',{pageReload:pageReload});}if(false){var _pageReload=function _pageReload(){this.pageReload=function(_ref){var type=_ref.type,success=_ref.success;return new Promise(function(resolve,reject){if(type!=='firstAjax')window.location.reload();success&&success();resolve();});};};appSNC.mountApi('wapApis',{pageReload:_pageReload});}/* harmony default export */ var apis_pageReload = (universal_framework_src.pageReload);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/pageError.js
/**
 * 展示全屏错误提示页面，仅端内，wap已抹平
 * @memberof appSNC
 * @module
 * @alias pageError
 * @name pageError
 * @param {Object} options
 * @param {String} options.errorType
 * @param {Function} options.success
 * @param {Function} options.error
 * @param {Function} options.complete
 * @example
 * import "@mfelibs/universal-framework/src/libs/apis/pageError";
 * appSNC.pageError({
 *   success(response) {}
 * })
 */if(true){var pageError=__webpack_require__(34).default;universal_framework_src.mountApi("appApis",{pageError:pageError});}if(false){var _pageError=function _pageError(){this.pageError=function(_ref){var success=_ref.success;return new Promise(function(resolve,reject){success&&success();resolve();});};};appSNC.mountApi("wapApis",{pageError:_pageError});}/* harmony default export */ var apis_pageError = (universal_framework_src.pageError);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/login/index.js
/**
 * 登录接口 (两端适用)
 * @memberof appSNC
 * @module
 * @name login
 * @alias login
 * @param {Object} options
 * @param {String} options.logInfo 登录统计信息
 * @param {String} options.logInfo.openFrom 页面打开来源
 * @param {String} options.logInfo.wc_info 详细信息
 * @param {Function} options.success
 * @param {Function} options.error
 * @param {Function} options.complete
 * @return {Promise<Object>}
 *
 * @example
 * import "@mfelibs/universal-framework/src/libs/apis/login";
 *
 * appSNC.login({
 *   success(response) {}
 * })
 */if(true){var login=__webpack_require__(35).default;universal_framework_src.mountApi('appApis',{login:login});}if(false){var _login=require('./login4Wap').default;appSNC.mountApi('wapApis',{login:_login});}/* harmony default export */ var apis_login = (universal_framework_src.login);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/shake.js
/**
 * 震动，iOS time 枚举值 <0 短震, 1 长震>,hybrid专享代码，web端失效，但是不会报错。
 * Android 取 time 为毫秒数
 * 仅端内有效，wap已抹平
 * @memberof appSNC
 * @module
 * @alias shake
 * @name shake
 * @param {Object} options
 * @param {Number} options.time
 * @param {Number} options.type
 * @param {Number} options.intensity
 * @param {Function} options.success
 * @param {Function} options.error
 * @param {Function} options.complete
 * 
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/shake';
 * 
 * appSNC.shake({
 *   time: 200,
 *   type: 0,
 *   intensity: 0,
 *   success(response) {}
 * })
 */if(true){var shake=__webpack_require__(36).default;universal_framework_src.mountApi("appApis",{shake:shake});}if(false){var _shake=function _shake(){this.shake=function(_ref){var success=_ref.success;return new Promise(function(resolve,reject){success&&success();resolve();});};};appSNC.mountApi("wapApis",{shake:_shake});}/* harmony default export */ var apis_shake = (universal_framework_src.shake);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/getUserInfo/index.js
/**
 * 获取用户信息 (两端适用)
 * @memberof appSNC
 * @module 
 * @name getUserInfo
 * @alias getUserInfo
 * @param {Object} options
 * @param {Function} options.success
 * 
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/getUserInfo';
 * appSNC.getUserInfo({
 *   success(response) {}
 * })
 */if(true){var getUserInfo=__webpack_require__(37).default;universal_framework_src.mountApi("appApis",{getUserInfo:getUserInfo});}if(false){var _getUserInfo=require("./getUserInfo4Wap").default;appSNC.mountApi("wapApis",{getUserInfo:_getUserInfo});}/* harmony default export */ var apis_getUserInfo = (universal_framework_src.getUserInfo);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/memberShipPoint.js
/**
 * 会员积分
 *
 * @memberof appSNC
 * @alias memberShipPoint
 * @name memberShipPoint
 * @module
 * @param {Object} options
 * @param {String} options.metric  积分类型
 * @param {String} options.contentId 事件唯一 id
 * @param {String} options.callBackId  由消息通道下发，从弹窗页面的 message.callBackId 参数获取
 * newinstall_open: 首次打开客户端
 * article_count: 阅读正文
 * pic_count: 查看图集
 * video_count: 观看视频次数
 * subscribe_wordcup_team: 关注球队 (目前关注应该不走积分上报接口 ，请业务同学在开发的时候确认并注意)
 * subscribe_wordcup_player: 关注球星（目前关注应该不走积分上报接口，请业务同学在开发的时候确认并注意)
 * send_circle: 发送圈子
 * forward_circle: 转发圈子
 * calendar_wordcup: 将赛事添加到系统日历
 * guess_wordcup: 猜冠军、4强、8强队伍
 * 赛事竞猜   （不需要做前端实时弹窗）
 * h5game: 玩小游戏
 * calendar_docall: 去xx主页发帖打call
 * video_time: 观看视频时长
 * @param {successCallback} options.success
 * @param {errorCallback} options.error
 * @param {completeCallback} options.complete
 * @return {Promise<Object>}
 *
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/memberShipPoint';
 *
 * SNC.memberShipPoint({
 *   metric: 'newinstall_open',
 *   success(data) {}
 * })
 */if(true){var memberShipPoint=__webpack_require__(38).default;universal_framework_src.mountApi('appApis',{memberShipPoint:memberShipPoint});}if(false){var _memberShipPoint=function _memberShipPoint(){this.memberShipPoint=function(_ref){var success=_ref.success;return new Promise(function(resolve,reject){success&&success();resolve();});};};appSNC.mountApi('wapApis',{memberShipPoint:_memberShipPoint});}/* harmony default export */ var apis_memberShipPoint = (universal_framework_src.memberShipPoint);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/openPermission.js
/**
 * 开启权限
 *
 * @memberof appSNC
 * @module
 * @alias openPermission
 * @name openPermission
 * @param {Object} options
 * @param {String} options.type 权限类型
 * @param {successCallback} options.success
 * @param {errorCallback} options.error
 * @param {completeCallback} options.complete
 *
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/openPermission'
 *
 * SNC.openPermission({
 *   type: 'push', // 推送权限
 *   success(response) {}
 * })
 */if(true){var openPermission=__webpack_require__(39).default;universal_framework_src.mountApi('appApis',{openPermission:openPermission});}if(false){var _openPermission=function _openPermission(){this.openPermission=function(_ref){var success=_ref.success;return new Promise(function(resolve,reject){success&&success();resolve();});};};appSNC.mountApi('wapApis',{openPermission:_openPermission});}/* harmony default export */ var apis_openPermission = (universal_framework_src.openPermission);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/getPermissionInfo.js
/**
 * 获取权限信息
 *
 * @memberof appSNC
 * @module
 * @alias getPermissionInfo
 * @name getPermissionInfo
 * @param {Object} options
 * @param {String} options.type 权限类型
 * @param {successCallback} options.success
 * @param {errorCallback} options.error
 * @param {completeCallback} options.complete
 *
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/getPermissionInfo'
 *
 * SNC.getPermissionInfo({
 *   type: 'push', // 推送权限
 *   success(data) {
 *     // data.state 0 禁止，1 允许，2 未设置
 *     console.log(data)
 *   }
 * })
 */if(true){var getPermissionInfo=__webpack_require__(40).default;universal_framework_src.mountApi('appApis',{getPermissionInfo:getPermissionInfo});}if(false){var _getPermissionInfo=function _getPermissionInfo(){this.getPermissionInfo=function(_ref){var success=_ref.success;return new Promise(function(resolve,reject){success&&success();resolve();});};};appSNC.mountApi('wapApis',{getPermissionInfo:_getPermissionInfo});}/* harmony default export */ var apis_getPermissionInfo = (universal_framework_src.getPermissionInfo);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/getGlobalStorage.js
/**
 * 获取 APP 共享数据存储内容
 *
 * @memberof sncClass
 * @module
 * @alias getGlobalStorage
 * @name getGlobalStorage
 * @param {Object} options
 * @param {String} options.key 要获取数据的 key
 * @param {successCallback} options.success
 * @param {errorCallback} options.error
 * @param {completeCallback} options.complete
 * @return {Promise<Object>}
 *
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/getGlobalStorage'
 *
 * SNC.getGlobalStorage({
 *   key: 'test',
 *   success(response) {}
 * })
 */if(true){var getGlobalStorage=__webpack_require__(41).default;universal_framework_src.mountApi('appApis',{getGlobalStorage:getGlobalStorage});}if(false){var _getGlobalStorage=function _getGlobalStorage(){this.getGlobalStorage=function(_ref){var success=_ref.success;return new Promise(function(resolve,reject){success&&success();resolve();});};};appSNC.mountApi('wapApis',{getGlobalStorage:_getGlobalStorage});}/* harmony default export */ var apis_getGlobalStorage = (universal_framework_src.getGlobalStorage);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/setGlobalStorage.js
/**
 * 设置 APP 共享存数数据，请设置简单的键值对
 *
 * @memberof sncClass
 * @module
 * @alias setGlobalStorage
 * @name setGlobalStorage
 * @param {Object} options
 * @param {String} options.key
 * @param {String|Number|Boolean} options.value
 * @param {String} options.expireTime 有效时间，单位：秒
 * @param {successCallback} options.success
 * @param {errorCallback} options.error
 * @param {completeCallback} options.complete
 *
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/setGlobalStorage'
 *
 * SNC.setGlobalStorage({
 *   key: 'test',
 *   value: JSON.stringify({ name: 'fish' })
 * })
 */if(true){var setGlobalStorage=__webpack_require__(42).default;universal_framework_src.mountApi('appApis',{setGlobalStorage:setGlobalStorage});}if(false){var _setGlobalStorage=function _setGlobalStorage(){this.setGlobalStorage=function(_ref){var success=_ref.success;return new Promise(function(resolve,reject){success&&success();resolve();});};};appSNC.mountApi('wapApis',{setGlobalStorage:_setGlobalStorage});}/* harmony default export */ var apis_setGlobalStorage = (universal_framework_src.setGlobalStorage);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/showToast.js
/**
 *  toast浮层，仅端内，wap已抹平
 * @memberof appSNC
 * @module
 * @name showToast
 * @alias showToast
 * @param {Object} options
 * @param {String} options.title
 * @param {Number} options.type icon类型，默认为0。
 *  TipType_none: 0，
 *  TipType_success：1，
 *  TipType_disLikeTip：2，
 *  TipType_fail：3，
 *  TipType_alert：4，
 *  TipType_custom：5，
 *  TipType_processing：6，
 *  TipType_recommendPicsOutGuide：7，
 *  TipType_recommendChannelUpdate：8。
 * @param {Function} options.success
 * @param {Function} options.error
 * @param {Function} options.complete
 * 
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/showToast';
 * 
 * appSNC.showToast({
 *   title: '测试title',
 *   type: 1,
 *   success(response) {}
 * })
 */if(true){var showToast=__webpack_require__(43).default;universal_framework_src.mountApi("appApis",{showToast:showToast});}if(false){var _showToast=function _showToast(){this.showToast=function(_ref){var success=_ref.success;return new Promise(function(resolve,reject){success&&success();resolve();});};};appSNC.mountApi("wapApis",{showToast:_showToast});}/* harmony default export */ var apis_showToast = (universal_framework_src.showToast);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/getNetworkType.js
/**
 * 获取网络状态，仅端内，wap已抹平
 * @memberof appSNC
 * @module
 * @alias getNetworkType
 * @name getNetworkType
 * @param {Object} options
 * @param {Function} options.success
 * @param {Function} options.error
 * @param {Function} options.complete
 *
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/getNetworkType'
 *
 * appSNC.getNetworkType({
 *   success(data) {
 *     // data.networkType: <wifi|4g|3g|none>
 *     console.log(data)
 *   }
 * })
 */if(true){var getNetworkType=__webpack_require__(44).default;universal_framework_src.mountApi('appApis',{getNetworkType:getNetworkType});}if(false){var _getNetworkType=function _getNetworkType(){this.getNetworkType=function(_ref){var success=_ref.success;return new Promise(function(resolve,reject){success&&success();resolve();});};};appSNC.mountApi('wapApis',{getNetworkType:_getNetworkType});}/* harmony default export */ var apis_getNetworkType = (universal_framework_src.getNetworkType);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/getSystemInfo.js
/**
 * 获取系统信息，仅端内，wap已抹平
 * @memberof appSNC
 * @module
 * @alias getSystemInfo
 * @name getSystemInfo
 * @param {Object} options
 * @param {Function} options.success
 * @param {Function} options.error
 * @param {Function} options.complete
 * 
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/getSystemInfo'
 * appSNC.getSystemInfo({
 *   success(response) {}
 * })
 */if(true){var getSystemInfo=__webpack_require__(45).default;universal_framework_src.mountApi("appApis",{getSystemInfo:getSystemInfo});}if(false){var _getSystemInfo=function _getSystemInfo(){this.getSystemInfo=function(_ref){var success=_ref.success;return new Promise(function(resolve,reject){success&&success();resolve();});};};appSNC.mountApi("wapApis",{getSystemInfo:_getSystemInfo});}/* harmony default export */ var apis_getSystemInfo = (universal_framework_src.getSystemInfo);
// CONCATENATED MODULE: ./node_modules/@mfelibs/universal-framework/src/libs/apis/URLNavigateTo.js
/**
 * 通用页面跳转协议，具体用法及传参请参照 {@link http://wiki.intra.sina.com.cn/pages/viewpage.action?pageId=163810732|wiki}
 *
 * @memberof appSNC
 * @alias URLNavigateTo
 * @name URLNavigateTo
 * @function
 * @param {Object} options
 * @param {String} options.id - 通用业务 id
 * @param {String} options.url - 网页地址
 * @param {Number} options.actionType - 跳转类型码（详见 {@link http://wiki.intra.sina.com.cn/pages/viewpage.action?pageId=163810732#URLNavigateTov20-actionType|wiki·actionType}）
 * @param {String} options.action - 跳转类型名称名称（为 actionType 的语义化别名, 详见 {@link http://unpkg.smfe.sina.cn/@mfelibs/client-jsbridge/dist/index/index.html#urlnavigatetoaction}）
 * @param {String} [options.route] - 页面二级路由
 * @param {Object} [options.ext] - 业务拓展字段
 * @param {successCallback} options.success
 * @param {errorCallback} options.error
 * @param {completeCallback} options.complete
 *
 * @example
 * import '@mfelibs/universal-framework/src/libs/apis/URLNavigateTo'
 * 
 * // 跳转正文
 * SNC.URLNavigateTo({
 *   id: 'fxszmaa1849792-comos-news-cms',
 *   action: 'article'
 * })
 *
 * // 打开网页
 * SNC.URLNavigateTo({
 *   url: 'https://sina.cn',
 *   action: 'web'
 * })
 *
 * // 通过 actionType 码跳转
 * // 当 actionType 与 action 同时存在时，以 actionType 优先
 * SNC.URLNavigateTo({
 *   id: 'fxszmaa1849792-comos-news-cms',
 *   actionType: 2
 * })
 */if(true){var URLNavigateTo=__webpack_require__(46).default;universal_framework_src.mountApi('appApis',{URLNavigateTo:URLNavigateTo});}if(false){var _URLNavigateTo=function _URLNavigateTo(){this.URLNavigateTo=function(options){options=options||{};return new Promise(function(resolve,reject){if(options.action==='web'&&options.url){location.href=options.url;}resolve();});};};appSNC.mountApi('wapApis',{URLNavigateTo:_URLNavigateTo});}/* harmony default export */ var apis_URLNavigateTo = (universal_framework_src.URLNavigateTo);
// CONCATENATED MODULE: ./src/view/list/import/index.js
/* harmony default export */ var list_import = (universal_framework_src);
// CONCATENATED MODULE: ./src/store/index.js
var store__createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function store__classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Store=function(){function Store(){store__classCallCheck(this,Store);}store__createClass(Store,[{key:"set",value:function set(key,value){this[key]=value;}},{key:"get",value:function get(key){return this[key];}},{key:"del",value:function del(key){delete this[key];}}]);return Store;}();/* harmony default export */ var store = (new Store());
// EXTERNAL MODULE: ./src/css/skpt_mian.css-v=3.4.4.css
var skpt_mian_css_v_3_4_4 = __webpack_require__(48);
var skpt_mian_css_v_3_4_4_default = /*#__PURE__*/__webpack_require__.n(skpt_mian_css_v_3_4_4);

// EXTERNAL MODULE: ./src/css/style.css-v=3.4.4.css
var style_css_v_3_4_4 = __webpack_require__(49);
var style_css_v_3_4_4_default = /*#__PURE__*/__webpack_require__.n(style_css_v_3_4_4);

// CONCATENATED MODULE: ./src/view/list/index.js
// 引入css
vue_esm["a" /* default */].prototype.$snc=list_import;/* eslint-disable no-new */var vm=new vue_esm["a" /* default */]({el:'#app',data:{firstAjax:false},template:'<App :firstAjax="firstAjax"/>',components:{App:view_list_App}});list_import.ready(function(data){list_import.login({success:function success(data){}});// ready 后初始化基础信息
init(data);list_import.onFirstAjax({success:function success(data){vm.firstAjax=true;store.set('activityList',data);list_import.hideLoading();},error:function error(e){list_import.hideLoading();wintip_default()(e);}});});function init(data){var shareInfo={title:'data.commonData && data.commonData.share_title',url:'data.commonData && data.commonData.share_url',pic:'data.commonData && data.commonData.share_pic',introduction:'data.commonData && data.commonData.share_summary'};list_import.onShareInfo({success:function success(res){list_import.openShare(shareInfo);}});list_import.setNavigationBarTitle({title:'福利',success:function success(response){}});list_import.enablePullDownRefresh({theme:'worldcup',success:function success(response){console.log('下拉刷新启用成功！');}});}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (false) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (false
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (false
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "production" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "production" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (false) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (false) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (false) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    false
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (false) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (false) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "production" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "production" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (false) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "production" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "production" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (false) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (false) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (false) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (false) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if (false) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "production" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "production" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "production" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (false) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (false) {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if (false
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "production" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (false) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (false) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (false) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (false
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (false
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    false
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (false) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (false) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (false) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "production" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        false
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (false
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (false) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (false) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (false) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (false
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "production" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (false) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (false) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (false) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (false) {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (false) {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (false) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (false) {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (false) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (false) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (false) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (false) {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (false) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      false
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  'delete': ['Backspace', 'Delete']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (false) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "production" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (false
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (false) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (false) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (false) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (false) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (false) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "production" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (false) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (false) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (false) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (false) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["a"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var deletedIds = [];

var document = window.document;

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.12.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type( obj ) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {

			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
		} catch ( e ) {

			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( !support.ownFirst ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {

			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {

				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[ j ] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// init accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt( 0 ) === "<" &&
				selector.charAt( selector.length - 1 ) === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {

						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[ 2 ] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof root.ready !== "undefined" ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter( function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[ 0 ], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.uniqueSort( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = true;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {

	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener ||
		window.event.type === "load" ||
		document.readyState === "complete" ) {

		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE6-10
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );

		// If IE event model is used
		} else {

			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch ( e ) {}

			if ( top && top.doScroll ) {
				( function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {

							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll( "left" );
						} catch ( e ) {
							return window.setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				} )();
			}
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownFirst = i === "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery( function() {

	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {

		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== "undefined" ) {

		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {

			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
} );


( function() {
	var div = document.createElement( "div" );

	// Support: IE<9
	support.deleteExpando = true;
	try {
		delete div.test;
	} catch ( e ) {
		support.deleteExpando = false;
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();
var acceptData = function( elem ) {
	var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
};




var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
		data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {

		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {

		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split( " " );
					}
				}
			} else {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[ i ] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, undefined
	} else {
		cache[ id ] = undefined;
	}
}

jQuery.extend( {
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,

		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				jQuery.data( this, key );
			} );
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each( function() {
				jQuery.data( this, key, value );
			} ) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each( function() {
			jQuery.removeData( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object,
	// or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );


( function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {

			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== "undefined" ) {

			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

} )();
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn(
					elems[ i ],
					key,
					raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[ 0 ], key ) : emptyGet;
};
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );

var rleadingWhitespace = ( /^\s+/ );

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
		"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
		"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}


( function() {
	var div = document.createElement( "div" ),
		fragment = document.createDocumentFragment(),
		input = document.createElement( "input" );

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );

	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input = document.createElement( "input" );
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
	support.noCloneEvent = !!div.addEventListener;

	// Support: IE<9
	// Since attributes and properties are the same in IE,
	// cleanData must set properties to undefined rather than use removeAttribute
	div[ jQuery.expando ] = 1;
	support.attributes = !div.getAttribute( jQuery.expando );
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {
	option: [ 1, "<select multiple='multiple'>", "</select>" ],
	legend: [ 1, "<fieldset>", "</fieldset>" ],
	area: [ 1, "<map>", "</map>" ],

	// Support: IE8
	param: [ 1, "<object>", "</object>" ],
	thead: [ 1, "<table>", "</table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
	// unless wrapped in a div with non-breaking characters in front of it.
	_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
};

// Support: IE8-IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
				undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context;
			( elem = elems[ i ] ) != null;
			i++
		) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; ( elem = elems[ i ] ) != null; i++ ) {
		jQuery._data(
			elem,
			"globalEval",
			!refElements || jQuery._data( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/,
	rtbody = /<tbody/i;

function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

function buildFragment( elems, context, scripts, selection, ignored ) {
	var j, elem, contains,
		tmp, tag, tbody, wrap,
		l = elems.length,

		// Ensure a safe fragment
		safe = createSafeFragment( context ),

		nodes = [],
		i = 0;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || safe.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;

				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Manually add leading whitespace removed by IE
				if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
					nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
				}

				// Remove IE's autoinserted <tbody> from table fragments
				if ( !support.tbody ) {

					// String was a <table>, *may* have spurious <tbody>
					elem = tag === "table" && !rtbody.test( elem ) ?
						tmp.firstChild :

						// String was a bare <thead> or <tfoot>
						wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
							tmp :
							0;

					j = elem && elem.childNodes.length;
					while ( j-- ) {
						if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
							!tbody.childNodes.length ) {

							elem.removeChild( tbody );
						}
					}
				}

				jQuery.merge( nodes, tmp.childNodes );

				// Fix #12392 for WebKit and IE > 9
				tmp.textContent = "";

				// Fix #12392 for oldIE
				while ( tmp.firstChild ) {
					tmp.removeChild( tmp.firstChild );
				}

				// Remember the top-level container for proper cleanup
				tmp = safe.lastChild;
			}
		}
	}

	// Fix #11356: Clear elements from fragment
	if ( tmp ) {
		safe.removeChild( tmp );
	}

	// Reset defaultChecked for any radios and checkboxes
	// about to be appended to the DOM in IE 6/7 (#8060)
	if ( !support.appendChecked ) {
		jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
	}

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}

			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( safe.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	tmp = null;

	return safe;
}


( function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
	for ( i in { submit: true, change: true, focusin: true } ) {
		eventName = "on" + i;

		if ( !( support[ i ] = eventName in window ) ) {

			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" &&
					( !e || jQuery.event.triggered !== e.type ) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};

			// Add elem as a property of the handle fn to prevent a memory leak
			// with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
				jQuery._data( cur, "handle" );

			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if (
				( !special._default ||
				 special._default.apply( eventPath.pop(), data ) === false
				) && acceptData( elem )
			) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {

						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Safari 6-8+
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
			"pageX pageY screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ?
					original.toElement :
					fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {

						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	// Piggyback on a donor event to simulate a different one
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true

				// Previously, `originalEvent: {}` was set here, so stopPropagation call
				// would not be triggered on donor event, since in our own
				// jQuery.event.stopPropagation function we had a check for existence of
				// originalEvent.stopPropagation method, so, consequently it would be a noop.
				//
				// Guard for simulated events was moved to jQuery.event.stopPropagation function
				// since `originalEvent` should point to the original event for the
				// constancy with other events and for more focused logic
			}
		);

		jQuery.event.trigger( e, null, elem );

		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event,
			// to properly expose it to GC
			if ( typeof elem[ name ] === "undefined" ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( !e || this.isSimulated ) {
			return;
		}

		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

// IE submit delegation
if ( !support.submit ) {

	jQuery.event.special.submit = {
		setup: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {

				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?

						// Support: IE <=8
						// We use jQuery.prop instead of elem.form
						// to allow fixing the IE8 delegated submit issue (gh-2332)
						// by 3rd party polyfills/workarounds.
						jQuery.prop( elem, "form" ) :
						undefined;

				if ( form && !jQuery._data( form, "submit" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submitBubble = true;
					} );
					jQuery._data( form, "submit", true );
				}
			} );

			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {

			// If form was submitted by the user, bubble the event up the tree
			if ( event._submitBubble ) {
				delete event._submitBubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event );
				}
			}
		},

		teardown: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.change ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {

				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._justChanged = true;
						}
					} );
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._justChanged && !event.isTrigger ) {
							this._justChanged = false;
						}

						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event );
					} );
				}
				return false;
			}

			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event );
						}
					} );
					jQuery._data( elem, "change", true );
				}
			} );
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger ||
				( elem.type !== "radio" && elem.type !== "checkbox" ) ) {

				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	} );
}

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	},

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}
	return elem;
}

function cloneCopyEvent( src, dest ) {
	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var first, node, hasScripts,
		scripts, doc, fragment,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!jQuery._data( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval(
								( node.text || node.textContent || node.innerHTML || "" )
									.replace( rcleanScript, "" )
							);
						}
					}
				}
			}

			// Fix #11809: Avoid leaking memory
			fragment = first = null;
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		elems = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = elems[ i ] ) != null; i++ ) {

		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
			!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {

			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
				( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {

				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[ i ] ) {
					fixCloneNodeIssues( node, destElements[ i ] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
					cloneCopyEvent( node, destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems, /* internal */ forceAcceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			attributes = support.attributes,
			special = jQuery.event.special;

		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			if ( forceAcceptData || acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// Support: IE<9
						// IE does not allow us to delete expando properties from nodes
						// IE creates expando attributes along with the property
						// IE does not have a removeAttribute function on Document nodes
						if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
							elem.removeAttribute( internalKey );

						// Webkit & Blink performance suffers when deleting properties
						// from DOM nodes, so set to undefined instead
						// https://code.google.com/p/chromium/issues/detail?id=378607
						} else {
							elem[ internalKey ] = undefined;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append(
					( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
				);
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {

			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {

						// Remove element nodes and prevent memory leaks
						elem = this[ i ] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	div.style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = div.style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!div.style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container = document.createElement( "div" );
	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	div.innerHTML = "";
	container.appendChild( div );

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
		div.style.WebkitBoxSizing === "";

	jQuery.extend( support, {
		reliableHiddenOffsets: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {

			// We're checking for pixelPositionVal here instead of boxSizingReliableVal
			// since that compresses better and they're computed together anyway.
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},

		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},

		pixelPosition: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelPositionVal;
		},

		reliableMarginRight: function() {

			// Support: Android 2.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginRightVal;
		},

		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		}
	} );

	function computeStyleTests() {
		var contents, divStyle,
			documentElement = document.documentElement;

		// Setup
		documentElement.appendChild( container );

		div.style.cssText =

			// Support: Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
		pixelMarginRightVal = reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) {
			divStyle = window.getComputedStyle( div );
			pixelPositionVal = ( divStyle || {} ).top !== "1%";
			reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
			boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";

			// Support: Android 2.3 only
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );

			div.removeChild( contents );
		}

		// Support: IE6-8
		// First check that getClientRects works as expected
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.style.display = "none";
		reliableHiddenOffsetsVal = div.getClientRects().length === 0;
		if ( reliableHiddenOffsetsVal ) {
			div.style.display = "";
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			div.childNodes[ 0 ].style.borderCollapse = "separate";
			contents = div.getElementsByTagName( "td" );
			contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			if ( reliableHiddenOffsetsVal ) {
				contents[ 0 ].style.display = "";
				contents[ 1 ].style.display = "none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			}
		}

		// Teardown
		documentElement.removeChild( container );
	}

} )();


var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value"
			// instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values,
			// but width seems to be reliably pixels
			// this is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are
		// proportional to the parent element instead
		// and we can't measure the parent instead because it
		// might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/i,

	// swappable if display is none or starts with table except
	// "table", "table-cell", or "table-caption"
	// see here for display values:
	// https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] =
					jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {

		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight
			// (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch ( e ) {}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
} );

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {

			// IE uses filters for opacity
			return ropacity.test( ( computed && elem.currentStyle ?
				elem.currentStyle.filter :
				elem.style.filter ) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist -
			// attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule
				// or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return (
				parseFloat( curCSS( elem, "marginLeft" ) ) ||

				// Support: IE<=11+
				// Running getBoundingClientRect on a disconnected node in IE throws an error
				// Support: IE8 only
				// getClientRects() errors on disconnected elems
				( jQuery.contains( elem.ownerDocument, elem ) ?
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} ) :
					0
				)
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var a,
		input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Support: Windows Web Apps (WWA)
	// `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "checkbox" );
	div.appendChild( input );

	a = div.getElementsByTagName( "a" )[ 0 ];

	// First batch of tests.
	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class.
	// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute( "style" ) );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute( "href" ) === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement( "form" ).enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
} )();


var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if (
					hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// handle most common string cases
					ret.replace( rreturn, "" ) :

					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled :
								option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {

					// Setting the type on a radio button after the value resets the value in IE8-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;

					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		} else {

			// Support: IE<9
			// Use defaultChecked and defaultSelected for oldIE
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} else {
		attrHandle[ name ] = function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
	}
} );

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {

				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {

				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {

			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					( ret = elem.ownerDocument.createAttribute( name ) )
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each( [ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	} );
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {

			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case sensitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each( function() {

			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch ( e ) {}
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {

	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each( [ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	} );
}

// Support: Safari, IE9+
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return jQuery.attr( elem, "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// store className if set
					jQuery._data( this, "__className__", className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				jQuery.attr( this, "class",
					className || value === false ?
					"" :
					jQuery._data( this, "__className__" ) || ""
				);
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




// Return jQuery for attributes-only inclusion


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );


var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {

	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {

		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	} ) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new window.DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch ( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,

	// IE leaves an \r character at EOL
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var

			// Cross-domain detection vars
			parts,

			// Loop variable
			i,

			// URL without anti-cache param
			cacheURL,

			// Response headers as string
			responseHeadersString,

			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,

			// Response headers
			responseHeaders,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" )
			.replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


function getDisplay( elem ) {
	return elem.style && elem.style.display || jQuery.css( elem, "display" );
}

function filterHidden( elem ) {

	// Disconnected elements are considered hidden
	if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
		return true;
	}
	while ( elem && elem.nodeType === 1 ) {
		if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
			return true;
		}
		elem = elem.parentNode;
	}
	return false;
}

jQuery.expr.filters.hidden = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return support.reliableHiddenOffsets() ?
		( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
			!elem.getClientRects().length ) :
			filterHidden( elem );
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

	// Support: IE6-IE8
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		if ( this.isLocal ) {
			return createActiveXHR();
		}

		// Support: IE 9-11
		// IE seems to error on cross-domain PATCH requests when ActiveX XHR
		// is used. In IE 9+ always use the native XHR.
		// Note: this condition won't catch Edge as it doesn't define
		// document.documentMode but it also doesn't support ActiveX so it won't
		// reach this code.
		if ( document.documentMode > 8 ) {
			return createStandardXHR();
		}

		// Support: IE<9
		// oldIE XHR does not support non-RFC2616 methods (#13240)
		// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
		// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
		// Although this check for six methods instead of eight
		// since IE also does not support "trace" and "connect"
		return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
			createStandardXHR() || createActiveXHR();
	} :

	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	} );
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport( function( options ) {

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {

						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch ( e ) {

									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;

								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					// Do send the request
					// `xhr.send` may raise an exception, but it will be
					// handled in jQuery.ajax (so no try/catch here)
					if ( !options.async ) {

						// If we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {

						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						window.setTimeout( callback );
					} else {

						// Register the callback, but delay it in case `xhr.send` throws
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	} );
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch ( e ) {}
}




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// data: string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};





/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left
		// is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== "undefined" ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? ( prop in win ) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
	function( defaultExtra, funcName ) {

		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only,
					// but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};!function(){"use strict";var e,a=function a(s,i){function r(e){return Math.floor(e);}function n(){var e=T.params.autoplay,a=T.slides.eq(T.activeIndex);a.attr("data-swiper-autoplay")&&(e=a.attr("data-swiper-autoplay")||T.params.autoplay),T.autoplayTimeoutId=setTimeout(function(){T.params.loop?(T.fixLoop(),T._slideNext(),T.emit("onAutoplay",T)):T.isEnd?i.autoplayStopOnLast?T.stopAutoplay():(T._slideTo(0),T.emit("onAutoplay",T)):(T._slideNext(),T.emit("onAutoplay",T));},e);}function o(a,t){var s=e(a.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var i;return s.parents().each(function(e,a){a===t&&(i=t);}),i?t:void 0;}if(0!==s.length)return s[0];}function l(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){T.onResize(!0),T.emit("onObserverUpdate",T,e);});});s.observe(e,{attributes:void 0===a.attributes||a.attributes,childList:void 0===a.childList||a.childList,characterData:void 0===a.characterData||a.characterData}),T.observers.push(s);}function p(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!T.params.allowSwipeToNext&&(T.isHorizontal()&&39===a||!T.isHorizontal()&&40===a))return!1;if(!T.params.allowSwipeToPrev&&(T.isHorizontal()&&37===a||!T.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(T.container.parents("."+T.params.slideClass).length>0&&0===T.container.parents("."+T.params.slideActiveClass).length)return;var s={left:window.pageXOffset,top:window.pageYOffset},i=window.innerWidth,r=window.innerHeight,n=T.container.offset();T.rtl&&(n.left=n.left-T.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+T.width,n.top],[n.left,n.top+T.height],[n.left+T.width,n.top+T.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+i&&p[1]>=s.top&&p[1]<=s.top+r&&(t=!0);}if(!t)return;}T.isHorizontal()?(37!==a&&39!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!T.rtl||37===a&&T.rtl)&&T.slideNext(),(37===a&&!T.rtl||39===a&&T.rtl)&&T.slidePrev()):(38!==a&&40!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&T.slideNext(),38===a&&T.slidePrev()),T.emit("onKeyPress",T,a);}}function d(e){var a=0,t=0,s=0,i=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(a=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(a=t,t=0),s=10*a,i=10*t,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(s=e.deltaX),(s||i)&&e.deltaMode&&(1===e.deltaMode?(s*=40,i*=40):(s*=800,i*=800)),s&&!a&&(a=s<1?-1:1),i&&!t&&(t=i<1?-1:1),{spinX:a,spinY:t,pixelX:s,pixelY:i};}function u(e){e.originalEvent&&(e=e.originalEvent);var a=0,t=T.rtl?-1:1,s=d(e);if(T.params.mousewheelForceToAxis){if(T.isHorizontal()){if(!(Math.abs(s.pixelX)>Math.abs(s.pixelY)))return;a=s.pixelX*t;}else{if(!(Math.abs(s.pixelY)>Math.abs(s.pixelX)))return;a=s.pixelY;}}else a=Math.abs(s.pixelX)>Math.abs(s.pixelY)?-s.pixelX*t:-s.pixelY;if(0!==a){if(T.params.mousewheelInvert&&(a=-a),T.params.freeMode){var i=T.getWrapperTranslate()+a*T.params.mousewheelSensitivity,r=T.isBeginning,n=T.isEnd;if(i>=T.minTranslate()&&(i=T.minTranslate()),i<=T.maxTranslate()&&(i=T.maxTranslate()),T.setWrapperTransition(0),T.setWrapperTranslate(i),T.updateProgress(),T.updateActiveIndex(),(!r&&T.isBeginning||!n&&T.isEnd)&&T.updateClasses(),T.params.freeModeSticky?(clearTimeout(T.mousewheel.timeout),T.mousewheel.timeout=setTimeout(function(){T.slideReset();},300)):T.params.lazyLoading&&T.lazy&&T.lazy.load(),T.emit("onScroll",T,e),T.params.autoplay&&T.params.autoplayDisableOnInteraction&&T.stopAutoplay(),0===i||i===T.maxTranslate())return;}else{if(new window.Date().getTime()-T.mousewheel.lastScrollTime>60)if(a<0){if(T.isEnd&&!T.params.loop||T.animating){if(T.params.mousewheelReleaseOnEdges)return!0;}else T.slideNext(),T.emit("onScroll",T,e);}else if(T.isBeginning&&!T.params.loop||T.animating){if(T.params.mousewheelReleaseOnEdges)return!0;}else T.slidePrev(),T.emit("onScroll",T,e);T.mousewheel.lastScrollTime=new window.Date().getTime();}return e.preventDefault?e.preventDefault():e.returnValue=!1,!1;}}function c(a,t){a=e(a);var s,i,r,n=T.rtl?-1:1;s=a.attr("data-swiper-parallax")||"0",i=a.attr("data-swiper-parallax-x"),r=a.attr("data-swiper-parallax-y"),i||r?(i=i||"0",r=r||"0"):T.isHorizontal()?(i=s,r="0"):(r=s,i="0"),i=i.indexOf("%")>=0?parseInt(i,10)*t*n+"%":i*t*n+"px",r=r.indexOf("%")>=0?parseInt(r,10)*t+"%":r*t+"px",a.transform("translate3d("+i+", "+r+",0px)");}function m(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e;}if(!(this instanceof a))return new a(s,i);var h={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:!1,hashnavWatchState:!1,history:!1,replaceState:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",normalizeSlideIndex:!0,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},g=i&&i.virtualTranslate;i=i||{};var f={};for(var v in i){if("object"!=_typeof(i[v])||null===i[v]||i[v].nodeType||i[v]===window||i[v]===document||void 0!==t&&i[v]instanceof t||"undefined"!=typeof jQuery&&i[v]instanceof jQuery)f[v]=i[v];else{f[v]={};for(var w in i[v]){f[v][w]=i[v][w];}}}for(var y in h){if(void 0===i[y])i[y]=h[y];else if("object"==_typeof(i[y]))for(var x in h[y]){void 0===i[y][x]&&(i[y][x]=h[y][x]);}}var T=this;if(T.params=i,T.originalParams=f,T.classNames=[],void 0!==e&&void 0!==t&&(e=t),(void 0!==e||(e=void 0===t?window.Dom7||window.Zepto||window.jQuery:t))&&(T.$=e,T.currentBreakpoint=void 0,T.getActiveBreakpoint=function(){if(!T.params.breakpoints)return!1;var e,a=!1,t=[];for(e in T.params.breakpoints){T.params.breakpoints.hasOwnProperty(e)&&t.push(e);}t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10);});for(var s=0;s<t.length;s++){(e=t[s])>=window.innerWidth&&!a&&(a=e);}return a||"max";},T.setBreakpoint=function(){var e=T.getActiveBreakpoint();if(e&&T.currentBreakpoint!==e){var a=e in T.params.breakpoints?T.params.breakpoints[e]:T.originalParams,t=T.params.loop&&a.slidesPerView!==T.params.slidesPerView;for(var s in a){T.params[s]=a[s];}T.currentBreakpoint=e,t&&T.destroyLoop&&T.reLoop(!0);}},T.params.breakpoints&&T.setBreakpoint(),T.container=e(s),0!==T.container.length)){if(T.container.length>1){var b=[];return T.container.each(function(){b.push(new a(this,i));}),b;}T.container[0].swiper=T,T.container.data("swiper",T),T.classNames.push(T.params.containerModifierClass+T.params.direction),T.params.freeMode&&T.classNames.push(T.params.containerModifierClass+"free-mode"),T.support.flexbox||(T.classNames.push(T.params.containerModifierClass+"no-flexbox"),T.params.slidesPerColumn=1),T.params.autoHeight&&T.classNames.push(T.params.containerModifierClass+"autoheight"),(T.params.parallax||T.params.watchSlidesVisibility)&&(T.params.watchSlidesProgress=!0),T.params.touchReleaseOnEdges&&(T.params.resistanceRatio=0),["cube","coverflow","flip"].indexOf(T.params.effect)>=0&&(T.support.transforms3d?(T.params.watchSlidesProgress=!0,T.classNames.push(T.params.containerModifierClass+"3d")):T.params.effect="slide"),"slide"!==T.params.effect&&T.classNames.push(T.params.containerModifierClass+T.params.effect),"cube"===T.params.effect&&(T.params.resistanceRatio=0,T.params.slidesPerView=1,T.params.slidesPerColumn=1,T.params.slidesPerGroup=1,T.params.centeredSlides=!1,T.params.spaceBetween=0,T.params.virtualTranslate=!0),"fade"!==T.params.effect&&"flip"!==T.params.effect||(T.params.slidesPerView=1,T.params.slidesPerColumn=1,T.params.slidesPerGroup=1,T.params.watchSlidesProgress=!0,T.params.spaceBetween=0,void 0===g&&(T.params.virtualTranslate=!0)),T.params.grabCursor&&T.support.touch&&(T.params.grabCursor=!1),T.wrapper=T.container.children("."+T.params.wrapperClass),T.params.pagination&&(T.paginationContainer=e(T.params.pagination),T.params.uniqueNavElements&&"string"==typeof T.params.pagination&&T.paginationContainer.length>1&&1===T.container.find(T.params.pagination).length&&(T.paginationContainer=T.container.find(T.params.pagination)),"bullets"===T.params.paginationType&&T.params.paginationClickable?T.paginationContainer.addClass(T.params.paginationModifierClass+"clickable"):T.params.paginationClickable=!1,T.paginationContainer.addClass(T.params.paginationModifierClass+T.params.paginationType)),(T.params.nextButton||T.params.prevButton)&&(T.params.nextButton&&(T.nextButton=e(T.params.nextButton),T.params.uniqueNavElements&&"string"==typeof T.params.nextButton&&T.nextButton.length>1&&1===T.container.find(T.params.nextButton).length&&(T.nextButton=T.container.find(T.params.nextButton))),T.params.prevButton&&(T.prevButton=e(T.params.prevButton),T.params.uniqueNavElements&&"string"==typeof T.params.prevButton&&T.prevButton.length>1&&1===T.container.find(T.params.prevButton).length&&(T.prevButton=T.container.find(T.params.prevButton)))),T.isHorizontal=function(){return"horizontal"===T.params.direction;},T.rtl=T.isHorizontal()&&("rtl"===T.container[0].dir.toLowerCase()||"rtl"===T.container.css("direction")),T.rtl&&T.classNames.push(T.params.containerModifierClass+"rtl"),T.rtl&&(T.wrongRTL="-webkit-box"===T.wrapper.css("display")),T.params.slidesPerColumn>1&&T.classNames.push(T.params.containerModifierClass+"multirow"),T.device.android&&T.classNames.push(T.params.containerModifierClass+"android"),T.container.addClass(T.classNames.join(" ")),T.translate=0,T.progress=0,T.velocity=0,T.lockSwipeToNext=function(){T.params.allowSwipeToNext=!1,T.params.allowSwipeToPrev===!1&&T.params.grabCursor&&T.unsetGrabCursor();},T.lockSwipeToPrev=function(){T.params.allowSwipeToPrev=!1,T.params.allowSwipeToNext===!1&&T.params.grabCursor&&T.unsetGrabCursor();},T.lockSwipes=function(){T.params.allowSwipeToNext=T.params.allowSwipeToPrev=!1,T.params.grabCursor&&T.unsetGrabCursor();},T.unlockSwipeToNext=function(){T.params.allowSwipeToNext=!0,T.params.allowSwipeToPrev===!0&&T.params.grabCursor&&T.setGrabCursor();},T.unlockSwipeToPrev=function(){T.params.allowSwipeToPrev=!0,T.params.allowSwipeToNext===!0&&T.params.grabCursor&&T.setGrabCursor();},T.unlockSwipes=function(){T.params.allowSwipeToNext=T.params.allowSwipeToPrev=!0,T.params.grabCursor&&T.setGrabCursor();},T.setGrabCursor=function(e){T.container[0].style.cursor="move",T.container[0].style.cursor=e?"-webkit-grabbing":"-webkit-grab",T.container[0].style.cursor=e?"-moz-grabbin":"-moz-grab",T.container[0].style.cursor=e?"grabbing":"grab";},T.unsetGrabCursor=function(){T.container[0].style.cursor="";},T.params.grabCursor&&T.setGrabCursor(),T.imagesToLoad=[],T.imagesLoaded=0,T.loadImage=function(e,a,t,s,i,r){function n(){r&&r();}var o;e.complete&&i?n():a?(o=new window.Image(),o.onload=n,o.onerror=n,s&&(o.sizes=s),t&&(o.srcset=t),a&&(o.src=a)):n();},T.preloadImages=function(){function e(){void 0!==T&&null!==T&&T&&(void 0!==T.imagesLoaded&&T.imagesLoaded++,T.imagesLoaded===T.imagesToLoad.length&&(T.params.updateOnImagesReady&&T.update(),T.emit("onImagesReady",T)));}T.imagesToLoad=T.container.find("img");for(var a=0;a<T.imagesToLoad.length;a++){T.loadImage(T.imagesToLoad[a],T.imagesToLoad[a].currentSrc||T.imagesToLoad[a].getAttribute("src"),T.imagesToLoad[a].srcset||T.imagesToLoad[a].getAttribute("srcset"),T.imagesToLoad[a].sizes||T.imagesToLoad[a].getAttribute("sizes"),!0,e);}},T.autoplayTimeoutId=void 0,T.autoplaying=!1,T.autoplayPaused=!1,T.startAutoplay=function(){return void 0===T.autoplayTimeoutId&&!!T.params.autoplay&&!T.autoplaying&&(T.autoplaying=!0,T.emit("onAutoplayStart",T),void n());},T.stopAutoplay=function(e){T.autoplayTimeoutId&&(T.autoplayTimeoutId&&clearTimeout(T.autoplayTimeoutId),T.autoplaying=!1,T.autoplayTimeoutId=void 0,T.emit("onAutoplayStop",T));},T.pauseAutoplay=function(e){T.autoplayPaused||(T.autoplayTimeoutId&&clearTimeout(T.autoplayTimeoutId),T.autoplayPaused=!0,0===e?(T.autoplayPaused=!1,n()):T.wrapper.transitionEnd(function(){T&&(T.autoplayPaused=!1,T.autoplaying?n():T.stopAutoplay());}));},T.minTranslate=function(){return-T.snapGrid[0];},T.maxTranslate=function(){return-T.snapGrid[T.snapGrid.length-1];},T.updateAutoHeight=function(){var e,a=[],t=0;if("auto"!==T.params.slidesPerView&&T.params.slidesPerView>1)for(e=0;e<Math.ceil(T.params.slidesPerView);e++){var s=T.activeIndex+e;if(s>T.slides.length)break;a.push(T.slides.eq(s)[0]);}else a.push(T.slides.eq(T.activeIndex)[0]);for(e=0;e<a.length;e++){if(void 0!==a[e]){var i=a[e].offsetHeight;t=i>t?i:t;}}t&&T.wrapper.css("height",t+"px");},T.updateContainerSize=function(){var e,a;e=void 0!==T.params.width?T.params.width:T.container[0].clientWidth,a=void 0!==T.params.height?T.params.height:T.container[0].clientHeight,0===e&&T.isHorizontal()||0===a&&!T.isHorizontal()||(e=e-parseInt(T.container.css("padding-left"),10)-parseInt(T.container.css("padding-right"),10),a=a-parseInt(T.container.css("padding-top"),10)-parseInt(T.container.css("padding-bottom"),10),T.width=e,T.height=a,T.size=T.isHorizontal()?T.width:T.height);},T.updateSlidesSize=function(){T.slides=T.wrapper.children("."+T.params.slideClass),T.snapGrid=[],T.slidesGrid=[],T.slidesSizesGrid=[];var e,a=T.params.spaceBetween,t=-T.params.slidesOffsetBefore,s=0,i=0;if(void 0!==T.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*T.size),T.virtualSize=-a,T.rtl?T.slides.css({marginLeft:"",marginTop:""}):T.slides.css({marginRight:"",marginBottom:""});var n;T.params.slidesPerColumn>1&&(n=Math.floor(T.slides.length/T.params.slidesPerColumn)===T.slides.length/T.params.slidesPerColumn?T.slides.length:Math.ceil(T.slides.length/T.params.slidesPerColumn)*T.params.slidesPerColumn,"auto"!==T.params.slidesPerView&&"row"===T.params.slidesPerColumnFill&&(n=Math.max(n,T.params.slidesPerView*T.params.slidesPerColumn)));var o,l=T.params.slidesPerColumn,p=n/l,d=p-(T.params.slidesPerColumn*p-T.slides.length);for(e=0;e<T.slides.length;e++){o=0;var u=T.slides.eq(e);if(T.params.slidesPerColumn>1){var c,m,h;"column"===T.params.slidesPerColumnFill?(m=Math.floor(e/l),h=e-m*l,(m>d||m===d&&h===l-1)&&++h>=l&&(h=0,m++),c=m+h*n/l,u.css({"-webkit-box-ordinal-group":c,"-moz-box-ordinal-group":c,"-ms-flex-order":c,"-webkit-order":c,order:c})):(h=Math.floor(e/p),m=e-h*p),u.css("margin-"+(T.isHorizontal()?"top":"left"),0!==h&&T.params.spaceBetween&&T.params.spaceBetween+"px").attr("data-swiper-column",m).attr("data-swiper-row",h);}"none"!==u.css("display")&&("auto"===T.params.slidesPerView?(o=T.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),T.params.roundLengths&&(o=r(o))):(o=(T.size-(T.params.slidesPerView-1)*a)/T.params.slidesPerView,T.params.roundLengths&&(o=r(o)),T.isHorizontal()?T.slides[e].style.width=o+"px":T.slides[e].style.height=o+"px"),T.slides[e].swiperSlideSize=o,T.slidesSizesGrid.push(o),T.params.centeredSlides?(t=t+o/2+s/2+a,0===s&&0!==e&&(t=t-T.size/2-a),0===e&&(t=t-T.size/2-a),Math.abs(t)<.001&&(t=0),i%T.params.slidesPerGroup==0&&T.snapGrid.push(t),T.slidesGrid.push(t)):(i%T.params.slidesPerGroup==0&&T.snapGrid.push(t),T.slidesGrid.push(t),t=t+o+a),T.virtualSize+=o+a,s=o,i++);}T.virtualSize=Math.max(T.virtualSize,T.size)+T.params.slidesOffsetAfter;var g;if(T.rtl&&T.wrongRTL&&("slide"===T.params.effect||"coverflow"===T.params.effect)&&T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}),T.support.flexbox&&!T.params.setWrapperSize||(T.isHorizontal()?T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}):T.wrapper.css({height:T.virtualSize+T.params.spaceBetween+"px"})),T.params.slidesPerColumn>1&&(T.virtualSize=(o+T.params.spaceBetween)*n,T.virtualSize=Math.ceil(T.virtualSize/T.params.slidesPerColumn)-T.params.spaceBetween,T.isHorizontal()?T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}):T.wrapper.css({height:T.virtualSize+T.params.spaceBetween+"px"}),T.params.centeredSlides)){for(g=[],e=0;e<T.snapGrid.length;e++){T.snapGrid[e]<T.virtualSize+T.snapGrid[0]&&g.push(T.snapGrid[e]);}T.snapGrid=g;}if(!T.params.centeredSlides){for(g=[],e=0;e<T.snapGrid.length;e++){T.snapGrid[e]<=T.virtualSize-T.size&&g.push(T.snapGrid[e]);}T.snapGrid=g,Math.floor(T.virtualSize-T.size)-Math.floor(T.snapGrid[T.snapGrid.length-1])>1&&T.snapGrid.push(T.virtualSize-T.size);}0===T.snapGrid.length&&(T.snapGrid=[0]),0!==T.params.spaceBetween&&(T.isHorizontal()?T.rtl?T.slides.css({marginLeft:a+"px"}):T.slides.css({marginRight:a+"px"}):T.slides.css({marginBottom:a+"px"})),T.params.watchSlidesProgress&&T.updateSlidesOffset();}},T.updateSlidesOffset=function(){for(var e=0;e<T.slides.length;e++){T.slides[e].swiperSlideOffset=T.isHorizontal()?T.slides[e].offsetLeft:T.slides[e].offsetTop;}},T.currentSlidesPerView=function(){var e,a,t=1;if(T.params.centeredSlides){var s,i=T.slides[T.activeIndex].swiperSlideSize;for(e=T.activeIndex+1;e<T.slides.length;e++){T.slides[e]&&!s&&(i+=T.slides[e].swiperSlideSize,t++,i>T.size&&(s=!0));}for(a=T.activeIndex-1;a>=0;a--){T.slides[a]&&!s&&(i+=T.slides[a].swiperSlideSize,t++,i>T.size&&(s=!0));}}else for(e=T.activeIndex+1;e<T.slides.length;e++){T.slidesGrid[e]-T.slidesGrid[T.activeIndex]<T.size&&t++;}return t;},T.updateSlidesProgress=function(e){if(void 0===e&&(e=T.translate||0),0!==T.slides.length){void 0===T.slides[0].swiperSlideOffset&&T.updateSlidesOffset();var a=-e;T.rtl&&(a=e),T.slides.removeClass(T.params.slideVisibleClass);for(var t=0;t<T.slides.length;t++){var s=T.slides[t],i=(a+(T.params.centeredSlides?T.minTranslate():0)-s.swiperSlideOffset)/(s.swiperSlideSize+T.params.spaceBetween);if(T.params.watchSlidesVisibility){var r=-(a-s.swiperSlideOffset),n=r+T.slidesSizesGrid[t];(r>=0&&r<T.size||n>0&&n<=T.size||r<=0&&n>=T.size)&&T.slides.eq(t).addClass(T.params.slideVisibleClass);}s.progress=T.rtl?-i:i;}}},T.updateProgress=function(e){void 0===e&&(e=T.translate||0);var a=T.maxTranslate()-T.minTranslate(),t=T.isBeginning,s=T.isEnd;0===a?(T.progress=0,T.isBeginning=T.isEnd=!0):(T.progress=(e-T.minTranslate())/a,T.isBeginning=T.progress<=0,T.isEnd=T.progress>=1),T.isBeginning&&!t&&T.emit("onReachBeginning",T),T.isEnd&&!s&&T.emit("onReachEnd",T),T.params.watchSlidesProgress&&T.updateSlidesProgress(e),T.emit("onProgress",T,T.progress);},T.updateActiveIndex=function(){var e,a,t,s=T.rtl?T.translate:-T.translate;for(a=0;a<T.slidesGrid.length;a++){void 0!==T.slidesGrid[a+1]?s>=T.slidesGrid[a]&&s<T.slidesGrid[a+1]-(T.slidesGrid[a+1]-T.slidesGrid[a])/2?e=a:s>=T.slidesGrid[a]&&s<T.slidesGrid[a+1]&&(e=a+1):s>=T.slidesGrid[a]&&(e=a);}T.params.normalizeSlideIndex&&(e<0||void 0===e)&&(e=0),t=Math.floor(e/T.params.slidesPerGroup),t>=T.snapGrid.length&&(t=T.snapGrid.length-1),e!==T.activeIndex&&(T.snapIndex=t,T.previousIndex=T.activeIndex,T.activeIndex=e,T.updateClasses(),T.updateRealIndex());},T.updateRealIndex=function(){T.realIndex=parseInt(T.slides.eq(T.activeIndex).attr("data-swiper-slide-index")||T.activeIndex,10);},T.updateClasses=function(){T.slides.removeClass(T.params.slideActiveClass+" "+T.params.slideNextClass+" "+T.params.slidePrevClass+" "+T.params.slideDuplicateActiveClass+" "+T.params.slideDuplicateNextClass+" "+T.params.slideDuplicatePrevClass);var a=T.slides.eq(T.activeIndex);a.addClass(T.params.slideActiveClass),i.loop&&(a.hasClass(T.params.slideDuplicateClass)?T.wrapper.children("."+T.params.slideClass+":not(."+T.params.slideDuplicateClass+')[data-swiper-slide-index="'+T.realIndex+'"]').addClass(T.params.slideDuplicateActiveClass):T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+T.realIndex+'"]').addClass(T.params.slideDuplicateActiveClass));var t=a.next("."+T.params.slideClass).addClass(T.params.slideNextClass);T.params.loop&&0===t.length&&(t=T.slides.eq(0),t.addClass(T.params.slideNextClass));var s=a.prev("."+T.params.slideClass).addClass(T.params.slidePrevClass);if(T.params.loop&&0===s.length&&(s=T.slides.eq(-1),s.addClass(T.params.slidePrevClass)),i.loop&&(t.hasClass(T.params.slideDuplicateClass)?T.wrapper.children("."+T.params.slideClass+":not(."+T.params.slideDuplicateClass+')[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicateNextClass):T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicateNextClass),s.hasClass(T.params.slideDuplicateClass)?T.wrapper.children("."+T.params.slideClass+":not(."+T.params.slideDuplicateClass+')[data-swiper-slide-index="'+s.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicatePrevClass):T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+s.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicatePrevClass)),T.paginationContainer&&T.paginationContainer.length>0){var r,n=T.params.loop?Math.ceil((T.slides.length-2*T.loopedSlides)/T.params.slidesPerGroup):T.snapGrid.length;if(T.params.loop?(r=Math.ceil((T.activeIndex-T.loopedSlides)/T.params.slidesPerGroup),r>T.slides.length-1-2*T.loopedSlides&&(r-=T.slides.length-2*T.loopedSlides),r>n-1&&(r-=n),r<0&&"bullets"!==T.params.paginationType&&(r=n+r)):r=void 0!==T.snapIndex?T.snapIndex:T.activeIndex||0,"bullets"===T.params.paginationType&&T.bullets&&T.bullets.length>0&&(T.bullets.removeClass(T.params.bulletActiveClass),T.paginationContainer.length>1?T.bullets.each(function(){e(this).index()===r&&e(this).addClass(T.params.bulletActiveClass);}):T.bullets.eq(r).addClass(T.params.bulletActiveClass)),"fraction"===T.params.paginationType&&(T.paginationContainer.find("."+T.params.paginationCurrentClass).text(r+1),T.paginationContainer.find("."+T.params.paginationTotalClass).text(n)),"progress"===T.params.paginationType){var o=(r+1)/n,l=o,p=1;T.isHorizontal()||(p=o,l=1),T.paginationContainer.find("."+T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+l+") scaleY("+p+")").transition(T.params.speed);}"custom"===T.params.paginationType&&T.params.paginationCustomRender&&(T.paginationContainer.html(T.params.paginationCustomRender(T,r+1,n)),T.emit("onPaginationRendered",T,T.paginationContainer[0]));}T.params.loop||(T.params.prevButton&&T.prevButton&&T.prevButton.length>0&&(T.isBeginning?(T.prevButton.addClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.disable(T.prevButton)):(T.prevButton.removeClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.enable(T.prevButton))),T.params.nextButton&&T.nextButton&&T.nextButton.length>0&&(T.isEnd?(T.nextButton.addClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.disable(T.nextButton)):(T.nextButton.removeClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.enable(T.nextButton))));},T.updatePagination=function(){if(T.params.pagination&&T.paginationContainer&&T.paginationContainer.length>0){var e="";if("bullets"===T.params.paginationType){for(var a=T.params.loop?Math.ceil((T.slides.length-2*T.loopedSlides)/T.params.slidesPerGroup):T.snapGrid.length,t=0;t<a;t++){e+=T.params.paginationBulletRender?T.params.paginationBulletRender(T,t,T.params.bulletClass):"<"+T.params.paginationElement+' class="'+T.params.bulletClass+'"></'+T.params.paginationElement+">";}T.paginationContainer.html(e),T.bullets=T.paginationContainer.find("."+T.params.bulletClass),T.params.paginationClickable&&T.params.a11y&&T.a11y&&T.a11y.initPagination();}"fraction"===T.params.paginationType&&(e=T.params.paginationFractionRender?T.params.paginationFractionRender(T,T.params.paginationCurrentClass,T.params.paginationTotalClass):'<span class="'+T.params.paginationCurrentClass+'"></span> / <span class="'+T.params.paginationTotalClass+'"></span>',T.paginationContainer.html(e)),"progress"===T.params.paginationType&&(e=T.params.paginationProgressRender?T.params.paginationProgressRender(T,T.params.paginationProgressbarClass):'<span class="'+T.params.paginationProgressbarClass+'"></span>',T.paginationContainer.html(e)),"custom"!==T.params.paginationType&&T.emit("onPaginationRendered",T,T.paginationContainer[0]);}},T.update=function(e){function a(){T.rtl,T.translate;t=Math.min(Math.max(T.translate,T.maxTranslate()),T.minTranslate()),T.setWrapperTranslate(t),T.updateActiveIndex(),T.updateClasses();}if(T){T.updateContainerSize(),T.updateSlidesSize(),T.updateProgress(),T.updatePagination(),T.updateClasses(),T.params.scrollbar&&T.scrollbar&&T.scrollbar.set();var t;if(e){T.controller&&T.controller.spline&&(T.controller.spline=void 0),T.params.freeMode?(a(),T.params.autoHeight&&T.updateAutoHeight()):(("auto"===T.params.slidesPerView||T.params.slidesPerView>1)&&T.isEnd&&!T.params.centeredSlides?T.slideTo(T.slides.length-1,0,!1,!0):T.slideTo(T.activeIndex,0,!1,!0))||a();}else T.params.autoHeight&&T.updateAutoHeight();}},T.onResize=function(e){T.params.onBeforeResize&&T.params.onBeforeResize(T),T.params.breakpoints&&T.setBreakpoint();var a=T.params.allowSwipeToPrev,t=T.params.allowSwipeToNext;T.params.allowSwipeToPrev=T.params.allowSwipeToNext=!0,T.updateContainerSize(),T.updateSlidesSize(),("auto"===T.params.slidesPerView||T.params.freeMode||e)&&T.updatePagination(),T.params.scrollbar&&T.scrollbar&&T.scrollbar.set(),T.controller&&T.controller.spline&&(T.controller.spline=void 0);var s=!1;if(T.params.freeMode){var i=Math.min(Math.max(T.translate,T.maxTranslate()),T.minTranslate());T.setWrapperTranslate(i),T.updateActiveIndex(),T.updateClasses(),T.params.autoHeight&&T.updateAutoHeight();}else T.updateClasses(),s=("auto"===T.params.slidesPerView||T.params.slidesPerView>1)&&T.isEnd&&!T.params.centeredSlides?T.slideTo(T.slides.length-1,0,!1,!0):T.slideTo(T.activeIndex,0,!1,!0);T.params.lazyLoading&&!s&&T.lazy&&T.lazy.load(),T.params.allowSwipeToPrev=a,T.params.allowSwipeToNext=t,T.params.onAfterResize&&T.params.onAfterResize(T);},T.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"},window.navigator.pointerEnabled?T.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(T.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}),T.touchEvents={start:T.support.touch||!T.params.simulateTouch?"touchstart":T.touchEventsDesktop.start,move:T.support.touch||!T.params.simulateTouch?"touchmove":T.touchEventsDesktop.move,end:T.support.touch||!T.params.simulateTouch?"touchend":T.touchEventsDesktop.end},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===T.params.touchEventsTarget?T.container:T.wrapper).addClass("swiper-wp8-"+T.params.direction),T.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",s="container"===T.params.touchEventsTarget?T.container[0]:T.wrapper[0],r=T.support.touch?s:document,n=!!T.params.nested;if(T.browser.ie)s[t](T.touchEvents.start,T.onTouchStart,!1),r[t](T.touchEvents.move,T.onTouchMove,n),r[t](T.touchEvents.end,T.onTouchEnd,!1);else{if(T.support.touch){var o=!("touchstart"!==T.touchEvents.start||!T.support.passiveListener||!T.params.passiveListeners)&&{passive:!0,capture:!1};s[t](T.touchEvents.start,T.onTouchStart,o),s[t](T.touchEvents.move,T.onTouchMove,n),s[t](T.touchEvents.end,T.onTouchEnd,o);}(i.simulateTouch&&!T.device.ios&&!T.device.android||i.simulateTouch&&!T.support.touch&&T.device.ios)&&(s[t]("mousedown",T.onTouchStart,!1),document[t]("mousemove",T.onTouchMove,n),document[t]("mouseup",T.onTouchEnd,!1));}window[t]("resize",T.onResize),T.params.nextButton&&T.nextButton&&T.nextButton.length>0&&(T.nextButton[a]("click",T.onClickNext),T.params.a11y&&T.a11y&&T.nextButton[a]("keydown",T.a11y.onEnterKey)),T.params.prevButton&&T.prevButton&&T.prevButton.length>0&&(T.prevButton[a]("click",T.onClickPrev),T.params.a11y&&T.a11y&&T.prevButton[a]("keydown",T.a11y.onEnterKey)),T.params.pagination&&T.params.paginationClickable&&(T.paginationContainer[a]("click","."+T.params.bulletClass,T.onClickIndex),T.params.a11y&&T.a11y&&T.paginationContainer[a]("keydown","."+T.params.bulletClass,T.a11y.onEnterKey)),(T.params.preventClicks||T.params.preventClicksPropagation)&&s[t]("click",T.preventClicks,!0);},T.attachEvents=function(){T.initEvents();},T.detachEvents=function(){T.initEvents(!0);},T.allowClick=!0,T.preventClicks=function(e){T.allowClick||(T.params.preventClicks&&e.preventDefault(),T.params.preventClicksPropagation&&T.animating&&(e.stopPropagation(),e.stopImmediatePropagation()));},T.onClickNext=function(e){e.preventDefault(),T.isEnd&&!T.params.loop||T.slideNext();},T.onClickPrev=function(e){e.preventDefault(),T.isBeginning&&!T.params.loop||T.slidePrev();},T.onClickIndex=function(a){a.preventDefault();var t=e(this).index()*T.params.slidesPerGroup;T.params.loop&&(t+=T.loopedSlides),T.slideTo(t);},T.updateClickedSlide=function(a){var t=o(a,"."+T.params.slideClass),s=!1;if(t)for(var i=0;i<T.slides.length;i++){T.slides[i]===t&&(s=!0);}if(!t||!s)return T.clickedSlide=void 0,void(T.clickedIndex=void 0);if(T.clickedSlide=t,T.clickedIndex=e(t).index(),T.params.slideToClickedSlide&&void 0!==T.clickedIndex&&T.clickedIndex!==T.activeIndex){var r,n=T.clickedIndex,l="auto"===T.params.slidesPerView?T.currentSlidesPerView():T.params.slidesPerView;if(T.params.loop){if(T.animating)return;r=parseInt(e(T.clickedSlide).attr("data-swiper-slide-index"),10),T.params.centeredSlides?n<T.loopedSlides-l/2||n>T.slides.length-T.loopedSlides+l/2?(T.fixLoop(),n=T.wrapper.children("."+T.params.slideClass+'[data-swiper-slide-index="'+r+'"]:not(.'+T.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){T.slideTo(n);},0)):T.slideTo(n):n>T.slides.length-l?(T.fixLoop(),n=T.wrapper.children("."+T.params.slideClass+'[data-swiper-slide-index="'+r+'"]:not(.'+T.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){T.slideTo(n);},0)):T.slideTo(n);}else T.slideTo(n);}};var S,C,z,M,E,P,I,k,L,D,B="input, select, textarea, button, video",H=Date.now(),G=[];T.animating=!1,T.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var X,A;T.onTouchStart=function(a){if(a.originalEvent&&(a=a.originalEvent),(X="touchstart"===a.type)||!("which"in a)||3!==a.which){if(T.params.noSwiping&&o(a,"."+T.params.noSwipingClass))return void(T.allowClick=!0);if(!T.params.swipeHandler||o(a,T.params.swipeHandler)){var t=T.touches.currentX="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,s=T.touches.currentY="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY;if(!(T.device.ios&&T.params.iOSEdgeSwipeDetection&&t<=T.params.iOSEdgeSwipeThreshold)){if(S=!0,C=!1,z=!0,E=void 0,A=void 0,T.touches.startX=t,T.touches.startY=s,M=Date.now(),T.allowClick=!0,T.updateContainerSize(),T.swipeDirection=void 0,T.params.threshold>0&&(k=!1),"touchstart"!==a.type){var i=!0;e(a.target).is(B)&&(i=!1),document.activeElement&&e(document.activeElement).is(B)&&document.activeElement.blur(),i&&a.preventDefault();}T.emit("onTouchStart",T,a);}}}},T.onTouchMove=function(a){if(a.originalEvent&&(a=a.originalEvent),!X||"mousemove"!==a.type){if(a.preventedByNestedSwiper)return T.touches.startX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,void(T.touches.startY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY);if(T.params.onlyExternal)return T.allowClick=!1,void(S&&(T.touches.startX=T.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,T.touches.startY=T.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,M=Date.now()));if(X&&T.params.touchReleaseOnEdges&&!T.params.loop)if(T.isHorizontal()){if(T.touches.currentX<T.touches.startX&&T.translate<=T.maxTranslate()||T.touches.currentX>T.touches.startX&&T.translate>=T.minTranslate())return;}else if(T.touches.currentY<T.touches.startY&&T.translate<=T.maxTranslate()||T.touches.currentY>T.touches.startY&&T.translate>=T.minTranslate())return;if(X&&document.activeElement&&a.target===document.activeElement&&e(a.target).is(B))return C=!0,void(T.allowClick=!1);if(z&&T.emit("onTouchMove",T,a),!(a.targetTouches&&a.targetTouches.length>1)){if(T.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,T.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,void 0===E){var t;T.isHorizontal()&&T.touches.currentY===T.touches.startY||!T.isHorizontal()&&T.touches.currentX===T.touches.startX?E=!1:(t=180*Math.atan2(Math.abs(T.touches.currentY-T.touches.startY),Math.abs(T.touches.currentX-T.touches.startX))/Math.PI,E=T.isHorizontal()?t>T.params.touchAngle:90-t>T.params.touchAngle);}if(E&&T.emit("onTouchMoveOpposite",T,a),void 0===A&&(T.touches.currentX===T.touches.startX&&T.touches.currentY===T.touches.startY||(A=!0)),S){if(E)return void(S=!1);if(A){T.allowClick=!1,T.emit("onSliderMove",T,a),a.preventDefault(),T.params.touchMoveStopPropagation&&!T.params.nested&&a.stopPropagation(),C||(i.loop&&T.fixLoop(),I=T.getWrapperTranslate(),T.setWrapperTransition(0),T.animating&&T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),T.params.autoplay&&T.autoplaying&&(T.params.autoplayDisableOnInteraction?T.stopAutoplay():T.pauseAutoplay()),D=!1,!T.params.grabCursor||T.params.allowSwipeToNext!==!0&&T.params.allowSwipeToPrev!==!0||T.setGrabCursor(!0)),C=!0;var s=T.touches.diff=T.isHorizontal()?T.touches.currentX-T.touches.startX:T.touches.currentY-T.touches.startY;s*=T.params.touchRatio,T.rtl&&(s=-s),T.swipeDirection=s>0?"prev":"next",P=s+I;var r=!0;if(s>0&&P>T.minTranslate()?(r=!1,T.params.resistance&&(P=T.minTranslate()-1+Math.pow(-T.minTranslate()+I+s,T.params.resistanceRatio))):s<0&&P<T.maxTranslate()&&(r=!1,T.params.resistance&&(P=T.maxTranslate()+1-Math.pow(T.maxTranslate()-I-s,T.params.resistanceRatio))),r&&(a.preventedByNestedSwiper=!0),!T.params.allowSwipeToNext&&"next"===T.swipeDirection&&P<I&&(P=I),!T.params.allowSwipeToPrev&&"prev"===T.swipeDirection&&P>I&&(P=I),T.params.threshold>0){if(!(Math.abs(s)>T.params.threshold||k))return void(P=I);if(!k)return k=!0,T.touches.startX=T.touches.currentX,T.touches.startY=T.touches.currentY,P=I,void(T.touches.diff=T.isHorizontal()?T.touches.currentX-T.touches.startX:T.touches.currentY-T.touches.startY);}T.params.followFinger&&((T.params.freeMode||T.params.watchSlidesProgress)&&T.updateActiveIndex(),T.params.freeMode&&(0===G.length&&G.push({position:T.touches[T.isHorizontal()?"startX":"startY"],time:M}),G.push({position:T.touches[T.isHorizontal()?"currentX":"currentY"],time:new window.Date().getTime()})),T.updateProgress(P),T.setWrapperTranslate(P));}}}}},T.onTouchEnd=function(a){if(a.originalEvent&&(a=a.originalEvent),z&&T.emit("onTouchEnd",T,a),z=!1,S){T.params.grabCursor&&C&&S&&(T.params.allowSwipeToNext===!0||T.params.allowSwipeToPrev===!0)&&T.setGrabCursor(!1);var t=Date.now(),s=t-M;if(T.allowClick&&(T.updateClickedSlide(a),T.emit("onTap",T,a),s<300&&t-H>300&&(L&&clearTimeout(L),L=setTimeout(function(){T&&(T.params.paginationHide&&T.paginationContainer.length>0&&!e(a.target).hasClass(T.params.bulletClass)&&T.paginationContainer.toggleClass(T.params.paginationHiddenClass),T.emit("onClick",T,a));},300)),s<300&&t-H<300&&(L&&clearTimeout(L),T.emit("onDoubleTap",T,a))),H=Date.now(),setTimeout(function(){T&&(T.allowClick=!0);},0),!S||!C||!T.swipeDirection||0===T.touches.diff||P===I)return void(S=C=!1);S=C=!1;var i;if(i=T.params.followFinger?T.rtl?T.translate:-T.translate:-P,T.params.freeMode){if(i<-T.minTranslate())return void T.slideTo(T.activeIndex);if(i>-T.maxTranslate())return void(T.slides.length<T.snapGrid.length?T.slideTo(T.snapGrid.length-1):T.slideTo(T.slides.length-1));if(T.params.freeModeMomentum){if(G.length>1){var r=G.pop(),n=G.pop(),o=r.position-n.position,l=r.time-n.time;T.velocity=o/l,T.velocity=T.velocity/2,Math.abs(T.velocity)<T.params.freeModeMinimumVelocity&&(T.velocity=0),(l>150||new window.Date().getTime()-r.time>300)&&(T.velocity=0);}else T.velocity=0;T.velocity=T.velocity*T.params.freeModeMomentumVelocityRatio,G.length=0;var p=1e3*T.params.freeModeMomentumRatio,d=T.velocity*p,u=T.translate+d;T.rtl&&(u=-u);var c,m=!1,h=20*Math.abs(T.velocity)*T.params.freeModeMomentumBounceRatio;if(u<T.maxTranslate())T.params.freeModeMomentumBounce?(u+T.maxTranslate()<-h&&(u=T.maxTranslate()-h),c=T.maxTranslate(),m=!0,D=!0):u=T.maxTranslate();else if(u>T.minTranslate())T.params.freeModeMomentumBounce?(u-T.minTranslate()>h&&(u=T.minTranslate()+h),c=T.minTranslate(),m=!0,D=!0):u=T.minTranslate();else if(T.params.freeModeSticky){var g,f=0;for(f=0;f<T.snapGrid.length;f+=1){if(T.snapGrid[f]>-u){g=f;break;}}u=Math.abs(T.snapGrid[g]-u)<Math.abs(T.snapGrid[g-1]-u)||"next"===T.swipeDirection?T.snapGrid[g]:T.snapGrid[g-1],T.rtl||(u=-u);}if(0!==T.velocity)p=T.rtl?Math.abs((-u-T.translate)/T.velocity):Math.abs((u-T.translate)/T.velocity);else if(T.params.freeModeSticky)return void T.slideReset();T.params.freeModeMomentumBounce&&m?(T.updateProgress(c),T.setWrapperTransition(p),T.setWrapperTranslate(u),T.onTransitionStart(),T.animating=!0,T.wrapper.transitionEnd(function(){T&&D&&(T.emit("onMomentumBounce",T),T.setWrapperTransition(T.params.speed),T.setWrapperTranslate(c),T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd();}));})):T.velocity?(T.updateProgress(u),T.setWrapperTransition(p),T.setWrapperTranslate(u),T.onTransitionStart(),T.animating||(T.animating=!0,T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd();}))):T.updateProgress(u),T.updateActiveIndex();}return void((!T.params.freeModeMomentum||s>=T.params.longSwipesMs)&&(T.updateProgress(),T.updateActiveIndex()));}var v,w=0,y=T.slidesSizesGrid[0];for(v=0;v<T.slidesGrid.length;v+=T.params.slidesPerGroup){void 0!==T.slidesGrid[v+T.params.slidesPerGroup]?i>=T.slidesGrid[v]&&i<T.slidesGrid[v+T.params.slidesPerGroup]&&(w=v,y=T.slidesGrid[v+T.params.slidesPerGroup]-T.slidesGrid[v]):i>=T.slidesGrid[v]&&(w=v,y=T.slidesGrid[T.slidesGrid.length-1]-T.slidesGrid[T.slidesGrid.length-2]);}var x=(i-T.slidesGrid[w])/y;if(s>T.params.longSwipesMs){if(!T.params.longSwipes)return void T.slideTo(T.activeIndex);"next"===T.swipeDirection&&(x>=T.params.longSwipesRatio?T.slideTo(w+T.params.slidesPerGroup):T.slideTo(w)),"prev"===T.swipeDirection&&(x>1-T.params.longSwipesRatio?T.slideTo(w+T.params.slidesPerGroup):T.slideTo(w));}else{if(!T.params.shortSwipes)return void T.slideTo(T.activeIndex);"next"===T.swipeDirection&&T.slideTo(w+T.params.slidesPerGroup),"prev"===T.swipeDirection&&T.slideTo(w);}}},T._slideTo=function(e,a){return T.slideTo(e,a,!0,!0);},T.slideTo=function(e,a,t,s){void 0===t&&(t=!0),void 0===e&&(e=0),e<0&&(e=0),T.snapIndex=Math.floor(e/T.params.slidesPerGroup),T.snapIndex>=T.snapGrid.length&&(T.snapIndex=T.snapGrid.length-1);var i=-T.snapGrid[T.snapIndex];if(T.params.autoplay&&T.autoplaying&&(s||!T.params.autoplayDisableOnInteraction?T.pauseAutoplay(a):T.stopAutoplay()),T.updateProgress(i),T.params.normalizeSlideIndex)for(var r=0;r<T.slidesGrid.length;r++){-Math.floor(100*i)>=Math.floor(100*T.slidesGrid[r])&&(e=r);}return!(!T.params.allowSwipeToNext&&i<T.translate&&i<T.minTranslate())&&!(!T.params.allowSwipeToPrev&&i>T.translate&&i>T.maxTranslate()&&(T.activeIndex||0)!==e)&&(void 0===a&&(a=T.params.speed),T.previousIndex=T.activeIndex||0,T.activeIndex=e,T.updateRealIndex(),T.rtl&&-i===T.translate||!T.rtl&&i===T.translate?(T.params.autoHeight&&T.updateAutoHeight(),T.updateClasses(),"slide"!==T.params.effect&&T.setWrapperTranslate(i),!1):(T.updateClasses(),T.onTransitionStart(t),0===a||T.browser.lteIE9?(T.setWrapperTranslate(i),T.setWrapperTransition(0),T.onTransitionEnd(t)):(T.setWrapperTranslate(i),T.setWrapperTransition(a),T.animating||(T.animating=!0,T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd(t);}))),!0));},T.onTransitionStart=function(e){void 0===e&&(e=!0),T.params.autoHeight&&T.updateAutoHeight(),T.lazy&&T.lazy.onTransitionStart(),e&&(T.emit("onTransitionStart",T),T.activeIndex!==T.previousIndex&&(T.emit("onSlideChangeStart",T),T.activeIndex>T.previousIndex?T.emit("onSlideNextStart",T):T.emit("onSlidePrevStart",T)));},T.onTransitionEnd=function(e){T.animating=!1,T.setWrapperTransition(0),void 0===e&&(e=!0),T.lazy&&T.lazy.onTransitionEnd(),e&&(T.emit("onTransitionEnd",T),T.activeIndex!==T.previousIndex&&(T.emit("onSlideChangeEnd",T),T.activeIndex>T.previousIndex?T.emit("onSlideNextEnd",T):T.emit("onSlidePrevEnd",T))),T.params.history&&T.history&&T.history.setHistory(T.params.history,T.activeIndex),T.params.hashnav&&T.hashnav&&T.hashnav.setHash();},T.slideNext=function(e,a,t){if(T.params.loop){if(T.animating)return!1;T.fixLoop();T.container[0].clientLeft;return T.slideTo(T.activeIndex+T.params.slidesPerGroup,a,e,t);}return T.slideTo(T.activeIndex+T.params.slidesPerGroup,a,e,t);},T._slideNext=function(e){return T.slideNext(!0,e,!0);},T.slidePrev=function(e,a,t){if(T.params.loop){if(T.animating)return!1;T.fixLoop();T.container[0].clientLeft;return T.slideTo(T.activeIndex-1,a,e,t);}return T.slideTo(T.activeIndex-1,a,e,t);},T._slidePrev=function(e){return T.slidePrev(!0,e,!0);},T.slideReset=function(e,a,t){return T.slideTo(T.activeIndex,a,e);},T.disableTouchControl=function(){return T.params.onlyExternal=!0,!0;},T.enableTouchControl=function(){return T.params.onlyExternal=!1,!0;},T.setWrapperTransition=function(e,a){T.wrapper.transition(e),"slide"!==T.params.effect&&T.effects[T.params.effect]&&T.effects[T.params.effect].setTransition(e),T.params.parallax&&T.parallax&&T.parallax.setTransition(e),T.params.scrollbar&&T.scrollbar&&T.scrollbar.setTransition(e),T.params.control&&T.controller&&T.controller.setTransition(e,a),T.emit("onSetTransition",T,e);},T.setWrapperTranslate=function(e,a,t){var s=0,i=0;T.isHorizontal()?s=T.rtl?-e:e:i=e,T.params.roundLengths&&(s=r(s),i=r(i)),T.params.virtualTranslate||(T.support.transforms3d?T.wrapper.transform("translate3d("+s+"px, "+i+"px, 0px)"):T.wrapper.transform("translate("+s+"px, "+i+"px)")),T.translate=T.isHorizontal()?s:i;var n,o=T.maxTranslate()-T.minTranslate();n=0===o?0:(e-T.minTranslate())/o,n!==T.progress&&T.updateProgress(e),a&&T.updateActiveIndex(),"slide"!==T.params.effect&&T.effects[T.params.effect]&&T.effects[T.params.effect].setTranslate(T.translate),T.params.parallax&&T.parallax&&T.parallax.setTranslate(T.translate),T.params.scrollbar&&T.scrollbar&&T.scrollbar.setTranslate(T.translate),T.params.control&&T.controller&&T.controller.setTranslate(T.translate,t),T.emit("onSetTranslate",T,T.translate);},T.getTranslate=function(e,a){var t,s,i,r;return void 0===a&&(a="x"),T.params.virtualTranslate?T.rtl?-T.translate:T.translate:(i=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=i.transform||i.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".");}).join(", ")),r=new window.WebKitCSSMatrix("none"===s?"":s)):(r=i.MozTransform||i.OTransform||i.MsTransform||i.msTransform||i.transform||i.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=r.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?r.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?r.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),T.rtl&&s&&(s=-s),s||0);},T.getWrapperTranslate=function(e){return void 0===e&&(e=T.isHorizontal()?"x":"y"),T.getTranslate(T.wrapper[0],e);},T.observers=[],T.initObservers=function(){if(T.params.observeParents)for(var e=T.container.parents(),a=0;a<e.length;a++){l(e[a]);}l(T.container[0],{childList:!1}),l(T.wrapper[0],{attributes:!1});},T.disconnectObservers=function(){for(var e=0;e<T.observers.length;e++){T.observers[e].disconnect();}T.observers=[];},T.createLoop=function(){T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass).remove();var a=T.wrapper.children("."+T.params.slideClass);"auto"!==T.params.slidesPerView||T.params.loopedSlides||(T.params.loopedSlides=a.length),T.loopedSlides=parseInt(T.params.loopedSlides||T.params.slidesPerView,10),T.loopedSlides=T.loopedSlides+T.params.loopAdditionalSlides,T.loopedSlides>a.length&&(T.loopedSlides=a.length);var t,s=[],i=[];for(a.each(function(t,r){var n=e(this);t<T.loopedSlides&&i.push(r),t<a.length&&t>=a.length-T.loopedSlides&&s.push(r),n.attr("data-swiper-slide-index",t);}),t=0;t<i.length;t++){T.wrapper.append(e(i[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass));}for(t=s.length-1;t>=0;t--){T.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass));}},T.destroyLoop=function(){T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass).remove(),T.slides.removeAttr("data-swiper-slide-index");},T.reLoop=function(e){var a=T.activeIndex-T.loopedSlides;T.destroyLoop(),T.createLoop(),T.updateSlidesSize(),e&&T.slideTo(a+T.loopedSlides,0,!1);},T.fixLoop=function(){var e;T.activeIndex<T.loopedSlides?(e=T.slides.length-3*T.loopedSlides+T.activeIndex,e+=T.loopedSlides,T.slideTo(e,0,!1,!0)):("auto"===T.params.slidesPerView&&T.activeIndex>=2*T.loopedSlides||T.activeIndex>T.slides.length-2*T.params.slidesPerView)&&(e=-T.slides.length+T.activeIndex+T.loopedSlides,e+=T.loopedSlides,T.slideTo(e,0,!1,!0));},T.appendSlide=function(e){if(T.params.loop&&T.destroyLoop(),"object"==(typeof e==="undefined"?"undefined":_typeof(e))&&e.length)for(var a=0;a<e.length;a++){e[a]&&T.wrapper.append(e[a]);}else T.wrapper.append(e);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0);},T.prependSlide=function(e){T.params.loop&&T.destroyLoop();var a=T.activeIndex+1;if("object"==(typeof e==="undefined"?"undefined":_typeof(e))&&e.length){for(var t=0;t<e.length;t++){e[t]&&T.wrapper.prepend(e[t]);}a=T.activeIndex+e.length;}else T.wrapper.prepend(e);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0),T.slideTo(a,0,!1);},T.removeSlide=function(e){T.params.loop&&(T.destroyLoop(),T.slides=T.wrapper.children("."+T.params.slideClass));var a,t=T.activeIndex;if("object"==(typeof e==="undefined"?"undefined":_typeof(e))&&e.length){for(var s=0;s<e.length;s++){a=e[s],T.slides[a]&&T.slides.eq(a).remove(),a<t&&t--;}t=Math.max(t,0);}else a=e,T.slides[a]&&T.slides.eq(a).remove(),a<t&&t--,t=Math.max(t,0);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0),T.params.loop?T.slideTo(t+T.loopedSlides,0,!1):T.slideTo(t,0,!1);},T.removeAllSlides=function(){for(var e=[],a=0;a<T.slides.length;a++){e.push(a);}T.removeSlide(e);},T.effects={fade:{setTranslate:function setTranslate(){for(var e=0;e<T.slides.length;e++){var a=T.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;T.params.virtualTranslate||(s-=T.translate);var i=0;T.isHorizontal()||(i=s,s=0);var r=T.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:r}).transform("translate3d("+s+"px, "+i+"px, 0px)");}},setTransition:function setTransition(e){if(T.slides.transition(e),T.params.virtualTranslate&&0!==e){var a=!1;T.slides.transitionEnd(function(){if(!a&&T){a=!0,T.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++){T.wrapper.trigger(e[t]);}}});}}},flip:{setTranslate:function setTranslate(){for(var a=0;a<T.slides.length;a++){var t=T.slides.eq(a),s=t[0].progress;T.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var i=t[0].swiperSlideOffset,r=-180*s,n=r,o=0,l=-i,p=0;if(T.isHorizontal()?T.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+T.slides.length,T.params.flip.slideShadows){var d=T.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=T.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-s,0)),u.length&&(u[0].style.opacity=Math.max(s,0));}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)");}},setTransition:function setTransition(a){if(T.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),T.params.virtualTranslate&&0!==a){var t=!1;T.slides.eq(T.activeIndex).transitionEnd(function(){if(!t&&T&&e(this).hasClass(T.params.slideActiveClass)){t=!0,T.animating=!1;for(var a=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<a.length;s++){T.wrapper.trigger(a[s]);}}});}}},cube:{setTranslate:function setTranslate(){var a,t=0;T.params.cube.shadow&&(T.isHorizontal()?(a=T.wrapper.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),T.wrapper.append(a)),a.css({height:T.width+"px"})):(a=T.container.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),T.container.append(a))));for(var s=0;s<T.slides.length;s++){var i=T.slides.eq(s),r=90*s,n=Math.floor(r/360);T.rtl&&(r=-r,n=Math.floor(-r/360));var o=Math.max(Math.min(i[0].progress,1),-1),l=0,p=0,d=0;s%4==0?(l=4*-n*T.size,d=0):(s-1)%4==0?(l=0,d=4*-n*T.size):(s-2)%4==0?(l=T.size+4*n*T.size,d=T.size):(s-3)%4==0&&(l=-T.size,d=3*T.size+4*T.size*n),T.rtl&&(l=-l),T.isHorizontal()||(p=l,l=0);var u="rotateX("+(T.isHorizontal()?0:-r)+"deg) rotateY("+(T.isHorizontal()?r:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(o<=1&&o>-1&&(t=90*s+90*o,T.rtl&&(t=90*-s-90*o)),i.transform(u),T.params.cube.slideShadows){var c=T.isHorizontal()?i.find(".swiper-slide-shadow-left"):i.find(".swiper-slide-shadow-top"),m=T.isHorizontal()?i.find(".swiper-slide-shadow-right"):i.find(".swiper-slide-shadow-bottom");0===c.length&&(c=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"left":"top")+'"></div>'),i.append(c)),0===m.length&&(m=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"right":"bottom")+'"></div>'),i.append(m)),c.length&&(c[0].style.opacity=Math.max(-o,0)),m.length&&(m[0].style.opacity=Math.max(o,0));}}if(T.wrapper.css({"-webkit-transform-origin":"50% 50% -"+T.size/2+"px","-moz-transform-origin":"50% 50% -"+T.size/2+"px","-ms-transform-origin":"50% 50% -"+T.size/2+"px","transform-origin":"50% 50% -"+T.size/2+"px"}),T.params.cube.shadow)if(T.isHorizontal())a.transform("translate3d(0px, "+(T.width/2+T.params.cube.shadowOffset)+"px, "+-T.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+T.params.cube.shadowScale+")");else{var h=Math.abs(t)-90*Math.floor(Math.abs(t)/90),g=1.5-(Math.sin(2*h*Math.PI/360)/2+Math.cos(2*h*Math.PI/360)/2),f=T.params.cube.shadowScale,v=T.params.cube.shadowScale/g,w=T.params.cube.shadowOffset;a.transform("scale3d("+f+", 1, "+v+") translate3d(0px, "+(T.height/2+w)+"px, "+-T.height/2/v+"px) rotateX(-90deg)");}var y=T.isSafari||T.isUiWebView?-T.size/2:0;T.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(T.isHorizontal()?0:t)+"deg) rotateY("+(T.isHorizontal()?-t:0)+"deg)");},setTransition:function setTransition(e){T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),T.params.cube.shadow&&!T.isHorizontal()&&T.container.find(".swiper-cube-shadow").transition(e);}},coverflow:{setTranslate:function setTranslate(){for(var a=T.translate,t=T.isHorizontal()?-a+T.width/2:-a+T.height/2,s=T.isHorizontal()?T.params.coverflow.rotate:-T.params.coverflow.rotate,i=T.params.coverflow.depth,r=0,n=T.slides.length;r<n;r++){var o=T.slides.eq(r),l=T.slidesSizesGrid[r],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*T.params.coverflow.modifier,u=T.isHorizontal()?s*d:0,c=T.isHorizontal()?0:s*d,m=-i*Math.abs(d),h=T.isHorizontal()?0:T.params.coverflow.stretch*d,g=T.isHorizontal()?T.params.coverflow.stretch*d:0;Math.abs(g)<.001&&(g=0),Math.abs(h)<.001&&(h=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var f="translate3d("+g+"px,"+h+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(f),o[0].style.zIndex=1-Math.abs(Math.round(d)),T.params.coverflow.slideShadows){var v=T.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=T.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0);}}if(T.browser.ie){T.wrapper[0].style.perspectiveOrigin=t+"px 50%";}},setTransition:function setTransition(e){T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);}}},T.lazy={initialImageLoaded:!1,loadImageInSlide:function loadImageInSlide(a,t){if(void 0!==a&&(void 0===t&&(t=!0),0!==T.slides.length)){var s=T.slides.eq(a),i=s.find("."+T.params.lazyLoadingClass+":not(."+T.params.lazyStatusLoadedClass+"):not(."+T.params.lazyStatusLoadingClass+")");!s.hasClass(T.params.lazyLoadingClass)||s.hasClass(T.params.lazyStatusLoadedClass)||s.hasClass(T.params.lazyStatusLoadingClass)||(i=i.add(s[0])),0!==i.length&&i.each(function(){var a=e(this);a.addClass(T.params.lazyStatusLoadingClass);var i=a.attr("data-background"),r=a.attr("data-src"),n=a.attr("data-srcset"),o=a.attr("data-sizes");T.loadImage(a[0],r||i,n,o,!1,function(){if(void 0!==T&&null!==T&&T){if(i?(a.css("background-image",'url("'+i+'")'),a.removeAttr("data-background")):(n&&(a.attr("srcset",n),a.removeAttr("data-srcset")),o&&(a.attr("sizes",o),a.removeAttr("data-sizes")),r&&(a.attr("src",r),a.removeAttr("data-src"))),a.addClass(T.params.lazyStatusLoadedClass).removeClass(T.params.lazyStatusLoadingClass),s.find("."+T.params.lazyPreloaderClass+", ."+T.params.preloaderClass).remove(),T.params.loop&&t){var e=s.attr("data-swiper-slide-index");if(s.hasClass(T.params.slideDuplicateClass)){var l=T.wrapper.children('[data-swiper-slide-index="'+e+'"]:not(.'+T.params.slideDuplicateClass+")");T.lazy.loadImageInSlide(l.index(),!1);}else{var p=T.wrapper.children("."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');T.lazy.loadImageInSlide(p.index(),!1);}}T.emit("onLazyImageReady",T,s[0],a[0]);}}),T.emit("onLazyImageLoad",T,s[0],a[0]);});}},load:function load(){var a,t=T.params.slidesPerView;if("auto"===t&&(t=0),T.lazy.initialImageLoaded||(T.lazy.initialImageLoaded=!0),T.params.watchSlidesVisibility)T.wrapper.children("."+T.params.slideVisibleClass).each(function(){T.lazy.loadImageInSlide(e(this).index());});else if(t>1)for(a=T.activeIndex;a<T.activeIndex+t;a++){T.slides[a]&&T.lazy.loadImageInSlide(a);}else T.lazy.loadImageInSlide(T.activeIndex);if(T.params.lazyLoadingInPrevNext)if(t>1||T.params.lazyLoadingInPrevNextAmount&&T.params.lazyLoadingInPrevNextAmount>1){var s=T.params.lazyLoadingInPrevNextAmount,i=t,r=Math.min(T.activeIndex+i+Math.max(s,i),T.slides.length),n=Math.max(T.activeIndex-Math.max(i,s),0);for(a=T.activeIndex+t;a<r;a++){T.slides[a]&&T.lazy.loadImageInSlide(a);}for(a=n;a<T.activeIndex;a++){T.slides[a]&&T.lazy.loadImageInSlide(a);}}else{var o=T.wrapper.children("."+T.params.slideNextClass);o.length>0&&T.lazy.loadImageInSlide(o.index());var l=T.wrapper.children("."+T.params.slidePrevClass);l.length>0&&T.lazy.loadImageInSlide(l.index());}},onTransitionStart:function onTransitionStart(){T.params.lazyLoading&&(T.params.lazyLoadingOnTransitionStart||!T.params.lazyLoadingOnTransitionStart&&!T.lazy.initialImageLoaded)&&T.lazy.load();},onTransitionEnd:function onTransitionEnd(){T.params.lazyLoading&&!T.params.lazyLoadingOnTransitionStart&&T.lazy.load();}},T.scrollbar={isTouched:!1,setDragPosition:function setDragPosition(e){var a=T.scrollbar,t=T.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[T.isHorizontal()?"left":"top"]-a.dragSize/2,i=-T.minTranslate()*a.moveDivider,r=-T.maxTranslate()*a.moveDivider;s<i?s=i:s>r&&(s=r),s=-s/a.moveDivider,T.updateProgress(s),T.setWrapperTranslate(s,!0);},dragStart:function dragStart(e){var a=T.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),T.params.scrollbarHide&&a.track.css("opacity",1),T.wrapper.transition(100),a.drag.transition(100),T.emit("onScrollbarDragStart",T);},dragMove:function dragMove(e){var a=T.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),T.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),T.emit("onScrollbarDragMove",T));},dragEnd:function dragEnd(e){var a=T.scrollbar;a.isTouched&&(a.isTouched=!1,T.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400);},1e3)),T.emit("onScrollbarDragEnd",T),T.params.scrollbarSnapOnRelease&&T.slideReset());},draggableEvents:function(){return T.params.simulateTouch!==!1||T.support.touch?T.touchEvents:T.touchEventsDesktop;}(),enableDraggable:function enableDraggable(){var a=T.scrollbar,t=T.support.touch?a.track:document;e(a.track).on(a.draggableEvents.start,a.dragStart),e(t).on(a.draggableEvents.move,a.dragMove),e(t).on(a.draggableEvents.end,a.dragEnd);},disableDraggable:function disableDraggable(){var a=T.scrollbar,t=T.support.touch?a.track:document;e(a.track).off(a.draggableEvents.start,a.dragStart),e(t).off(a.draggableEvents.move,a.dragMove),e(t).off(a.draggableEvents.end,a.dragEnd);},set:function set(){if(T.params.scrollbar){var a=T.scrollbar;a.track=e(T.params.scrollbar),T.params.uniqueNavElements&&"string"==typeof T.params.scrollbar&&a.track.length>1&&1===T.container.find(T.params.scrollbar).length&&(a.track=T.container.find(T.params.scrollbar)),a.drag=a.track.find(".swiper-scrollbar-drag"),0===a.drag.length&&(a.drag=e('<div class="swiper-scrollbar-drag"></div>'),a.track.append(a.drag)),a.drag[0].style.width="",a.drag[0].style.height="",a.trackSize=T.isHorizontal()?a.track[0].offsetWidth:a.track[0].offsetHeight,a.divider=T.size/T.virtualSize,a.moveDivider=a.divider*(a.trackSize/T.size),a.dragSize=a.trackSize*a.divider,T.isHorizontal()?a.drag[0].style.width=a.dragSize+"px":a.drag[0].style.height=a.dragSize+"px",a.divider>=1?a.track[0].style.display="none":a.track[0].style.display="",T.params.scrollbarHide&&(a.track[0].style.opacity=0);}},setTranslate:function setTranslate(){if(T.params.scrollbar){var e,a=T.scrollbar,t=(T.translate,a.dragSize);e=(a.trackSize-a.dragSize)*T.progress,T.rtl&&T.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):e<0?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),T.isHorizontal()?(T.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(T.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),T.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400);},1e3));}},setTransition:function setTransition(e){T.params.scrollbar&&T.scrollbar.drag.transition(e);}},T.controller={LinearSpline:function LinearSpline(e,a){var t=function(){var e,a,t;return function(s,i){for(a=-1,e=s.length;e-a>1;){s[t=e+a>>1]<=i?a=t:e=t;}return e;};}();this.x=e,this.y=a,this.lastIndex=e.length-1;var s,i;this.x.length;this.interpolate=function(e){return e?(i=t(this.x,e),s=i-1,(e-this.x[s])*(this.y[i]-this.y[s])/(this.x[i]-this.x[s])+this.y[s]):0;};},getInterpolateFunction:function getInterpolateFunction(e){T.controller.spline||(T.controller.spline=T.params.loop?new T.controller.LinearSpline(T.slidesGrid,e.slidesGrid):new T.controller.LinearSpline(T.snapGrid,e.snapGrid));},setTranslate:function setTranslate(e,t){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-T.translate:T.translate,"slide"===T.params.controlBy&&(T.controller.getInterpolateFunction(a),r=-T.controller.spline.interpolate(-e)),r&&"container"!==T.params.controlBy||(i=(a.maxTranslate()-a.minTranslate())/(T.maxTranslate()-T.minTranslate()),r=(e-T.minTranslate())*i+a.minTranslate()),T.params.controlInverse&&(r=a.maxTranslate()-r),a.updateProgress(r),a.setWrapperTranslate(r,!1,T),a.updateActiveIndex();}var i,r,n=T.params.control;if(Array.isArray(n))for(var o=0;o<n.length;o++){n[o]!==t&&n[o]instanceof a&&s(n[o]);}else n instanceof a&&t!==n&&s(n);},setTransition:function setTransition(e,t){function s(a){a.setWrapperTransition(e,T),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){r&&(a.params.loop&&"slide"===T.params.controlBy&&a.fixLoop(),a.onTransitionEnd());}));}var i,r=T.params.control;if(Array.isArray(r))for(i=0;i<r.length;i++){r[i]!==t&&r[i]instanceof a&&s(r[i]);}else r instanceof a&&t!==r&&s(r);}},T.hashnav={onHashCange:function onHashCange(e,a){var t=document.location.hash.replace("#","");t!==T.slides.eq(T.activeIndex).attr("data-hash")&&T.slideTo(T.wrapper.children("."+T.params.slideClass+'[data-hash="'+t+'"]').index());},attachEvents:function attachEvents(a){var t=a?"off":"on";e(window)[t]("hashchange",T.hashnav.onHashCange);},setHash:function setHash(){if(T.hashnav.initialized&&T.params.hashnav)if(T.params.replaceState&&window.history&&window.history.replaceState)window.history.replaceState(null,null,"#"+T.slides.eq(T.activeIndex).attr("data-hash")||"");else{var e=T.slides.eq(T.activeIndex),a=e.attr("data-hash")||e.attr("data-history");document.location.hash=a||"";}},init:function init(){if(T.params.hashnav&&!T.params.history){T.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=T.slides.length;a<t;a++){var s=T.slides.eq(a),i=s.attr("data-hash")||s.attr("data-history");if(i===e&&!s.hasClass(T.params.slideDuplicateClass)){var r=s.index();T.slideTo(r,0,T.params.runCallbacksOnInit,!0);}}T.params.hashnavWatchState&&T.hashnav.attachEvents();}},destroy:function destroy(){T.params.hashnavWatchState&&T.hashnav.attachEvents(!0);}},T.history={init:function init(){if(T.params.history){if(!window.history||!window.history.pushState)return T.params.history=!1,void(T.params.hashnav=!0);T.history.initialized=!0,this.paths=this.getPathValues(),(this.paths.key||this.paths.value)&&(this.scrollToSlide(0,this.paths.value,T.params.runCallbacksOnInit),T.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState));}},setHistoryPopState:function setHistoryPopState(){T.history.paths=T.history.getPathValues(),T.history.scrollToSlide(T.params.speed,T.history.paths.value,!1);},getPathValues:function getPathValues(){var e=window.location.pathname.slice(1).split("/"),a=e.length;return{key:e[a-2],value:e[a-1]};},setHistory:function setHistory(e,a){if(T.history.initialized&&T.params.history){var t=T.slides.eq(a),s=this.slugify(t.attr("data-history"));window.location.pathname.includes(e)||(s=e+"/"+s),T.params.replaceState?window.history.replaceState(null,null,s):window.history.pushState(null,null,s);}},slugify:function slugify(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");},scrollToSlide:function scrollToSlide(e,a,t){if(a)for(var s=0,i=T.slides.length;s<i;s++){var r=T.slides.eq(s),n=this.slugify(r.attr("data-history"));if(n===a&&!r.hasClass(T.params.slideDuplicateClass)){var o=r.index();T.slideTo(o,e,t);}}else T.slideTo(0,e,t);}},T.disableKeyboardControl=function(){T.params.keyboardControl=!1,e(document).off("keydown",p);},T.enableKeyboardControl=function(){T.params.keyboardControl=!0,e(document).on("keydown",p);},T.mousewheel={event:!1,lastScrollTime:new window.Date().getTime()},T.params.mousewheelControl&&(T.mousewheel.event=navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e="onwheel"in document;if(!e){var a=document.createElement("div");a.setAttribute("onwheel","return;"),e="function"==typeof a.onwheel;}return!e&&document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0&&(e=document.implementation.hasFeature("Events.wheel","3.0")),e;}()?"wheel":"mousewheel"),T.disableMousewheelControl=function(){if(!T.mousewheel.event)return!1;var a=T.container;return"container"!==T.params.mousewheelEventsTarged&&(a=e(T.params.mousewheelEventsTarged)),a.off(T.mousewheel.event,u),T.params.mousewheelControl=!1,!0;},T.enableMousewheelControl=function(){if(!T.mousewheel.event)return!1;var a=T.container;return"container"!==T.params.mousewheelEventsTarged&&(a=e(T.params.mousewheelEventsTarged)),a.on(T.mousewheel.event,u),T.params.mousewheelControl=!0,!0;},T.parallax={setTranslate:function setTranslate(){T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){c(this,T.progress);}),T.slides.each(function(){var a=e(this);a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){c(this,Math.min(Math.max(a[0].progress,-1),1));});});},setTransition:function setTransition(a){void 0===a&&(a=T.params.speed),T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=e(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||a;0===a&&(s=0),t.transition(s);});}},T.zoom={scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:T.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},getDistanceBetweenTouches:function getDistanceBetweenTouches(e){if(e.targetTouches.length<2)return 1;var a=e.targetTouches[0].pageX,t=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-a,2)+Math.pow(i-t,2));},onGestureStart:function onGestureStart(a){var t=T.zoom;if(!T.support.gestures){if("touchstart"!==a.type||"touchstart"===a.type&&a.targetTouches.length<2)return;t.gesture.scaleStart=t.getDistanceBetweenTouches(a);}if(!(t.gesture.slide&&t.gesture.slide.length||(t.gesture.slide=e(this),0===t.gesture.slide.length&&(t.gesture.slide=T.slides.eq(T.activeIndex)),t.gesture.image=t.gesture.slide.find("img, svg, canvas"),t.gesture.imageWrap=t.gesture.image.parent("."+T.params.zoomContainerClass),t.gesture.zoomMax=t.gesture.imageWrap.attr("data-swiper-zoom")||T.params.zoomMax,0!==t.gesture.imageWrap.length)))return void(t.gesture.image=void 0);t.gesture.image.transition(0),t.isScaling=!0;},onGestureChange:function onGestureChange(e){var a=T.zoom;if(!T.support.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.gesture.scaleMove=a.getDistanceBetweenTouches(e);}a.gesture.image&&0!==a.gesture.image.length&&(T.support.gestures?a.scale=e.scale*a.currentScale:a.scale=a.gesture.scaleMove/a.gesture.scaleStart*a.currentScale,a.scale>a.gesture.zoomMax&&(a.scale=a.gesture.zoomMax-1+Math.pow(a.scale-a.gesture.zoomMax+1,.5)),a.scale<T.params.zoomMin&&(a.scale=T.params.zoomMin+1-Math.pow(T.params.zoomMin-a.scale+1,.5)),a.gesture.image.transform("translate3d(0,0,0) scale("+a.scale+")"));},onGestureEnd:function onGestureEnd(e){var a=T.zoom;!T.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||a.gesture.image&&0!==a.gesture.image.length&&(a.scale=Math.max(Math.min(a.scale,a.gesture.zoomMax),T.params.zoomMin),a.gesture.image.transition(T.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(a.gesture.slide=void 0));},onTouchStart:function onTouchStart(e,a){var t=e.zoom;t.gesture.image&&0!==t.gesture.image.length&&(t.image.isTouched||("android"===e.device.os&&a.preventDefault(),t.image.isTouched=!0,t.image.touchesStart.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,t.image.touchesStart.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY));},onTouchMove:function onTouchMove(e){var a=T.zoom;if(a.gesture.image&&0!==a.gesture.image.length&&(T.allowClick=!1,a.image.isTouched&&a.gesture.slide)){a.image.isMoved||(a.image.width=a.gesture.image[0].offsetWidth,a.image.height=a.gesture.image[0].offsetHeight,a.image.startX=T.getTranslate(a.gesture.imageWrap[0],"x")||0,a.image.startY=T.getTranslate(a.gesture.imageWrap[0],"y")||0,a.gesture.slideWidth=a.gesture.slide[0].offsetWidth,a.gesture.slideHeight=a.gesture.slide[0].offsetHeight,a.gesture.imageWrap.transition(0),T.rtl&&(a.image.startX=-a.image.startX),T.rtl&&(a.image.startY=-a.image.startY));var t=a.image.width*a.scale,s=a.image.height*a.scale;if(!(t<a.gesture.slideWidth&&s<a.gesture.slideHeight)){if(a.image.minX=Math.min(a.gesture.slideWidth/2-t/2,0),a.image.maxX=-a.image.minX,a.image.minY=Math.min(a.gesture.slideHeight/2-s/2,0),a.image.maxY=-a.image.minY,a.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,a.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!a.image.isMoved&&!a.isScaling){if(T.isHorizontal()&&Math.floor(a.image.minX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x<a.image.touchesStart.x||Math.floor(a.image.maxX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x>a.image.touchesStart.x)return void(a.image.isTouched=!1);if(!T.isHorizontal()&&Math.floor(a.image.minY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y<a.image.touchesStart.y||Math.floor(a.image.maxY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y>a.image.touchesStart.y)return void(a.image.isTouched=!1);}e.preventDefault(),e.stopPropagation(),a.image.isMoved=!0,a.image.currentX=a.image.touchesCurrent.x-a.image.touchesStart.x+a.image.startX,a.image.currentY=a.image.touchesCurrent.y-a.image.touchesStart.y+a.image.startY,a.image.currentX<a.image.minX&&(a.image.currentX=a.image.minX+1-Math.pow(a.image.minX-a.image.currentX+1,.8)),a.image.currentX>a.image.maxX&&(a.image.currentX=a.image.maxX-1+Math.pow(a.image.currentX-a.image.maxX+1,.8)),a.image.currentY<a.image.minY&&(a.image.currentY=a.image.minY+1-Math.pow(a.image.minY-a.image.currentY+1,.8)),a.image.currentY>a.image.maxY&&(a.image.currentY=a.image.maxY-1+Math.pow(a.image.currentY-a.image.maxY+1,.8)),a.velocity.prevPositionX||(a.velocity.prevPositionX=a.image.touchesCurrent.x),a.velocity.prevPositionY||(a.velocity.prevPositionY=a.image.touchesCurrent.y),a.velocity.prevTime||(a.velocity.prevTime=Date.now()),a.velocity.x=(a.image.touchesCurrent.x-a.velocity.prevPositionX)/(Date.now()-a.velocity.prevTime)/2,a.velocity.y=(a.image.touchesCurrent.y-a.velocity.prevPositionY)/(Date.now()-a.velocity.prevTime)/2,Math.abs(a.image.touchesCurrent.x-a.velocity.prevPositionX)<2&&(a.velocity.x=0),Math.abs(a.image.touchesCurrent.y-a.velocity.prevPositionY)<2&&(a.velocity.y=0),a.velocity.prevPositionX=a.image.touchesCurrent.x,a.velocity.prevPositionY=a.image.touchesCurrent.y,a.velocity.prevTime=Date.now(),a.gesture.imageWrap.transform("translate3d("+a.image.currentX+"px, "+a.image.currentY+"px,0)");}}},onTouchEnd:function onTouchEnd(e,a){var t=e.zoom;if(t.gesture.image&&0!==t.gesture.image.length){if(!t.image.isTouched||!t.image.isMoved)return t.image.isTouched=!1,void(t.image.isMoved=!1);t.image.isTouched=!1,t.image.isMoved=!1;var s=300,i=300,r=t.velocity.x*s,n=t.image.currentX+r,o=t.velocity.y*i,l=t.image.currentY+o;0!==t.velocity.x&&(s=Math.abs((n-t.image.currentX)/t.velocity.x)),0!==t.velocity.y&&(i=Math.abs((l-t.image.currentY)/t.velocity.y));var p=Math.max(s,i);t.image.currentX=n,t.image.currentY=l;var d=t.image.width*t.scale,u=t.image.height*t.scale;t.image.minX=Math.min(t.gesture.slideWidth/2-d/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-u/2,0),t.image.maxY=-t.image.minY,t.image.currentX=Math.max(Math.min(t.image.currentX,t.image.maxX),t.image.minX),t.image.currentY=Math.max(Math.min(t.image.currentY,t.image.maxY),t.image.minY),t.gesture.imageWrap.transition(p).transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)");}},onTransitionEnd:function onTransitionEnd(e){var a=e.zoom;a.gesture.slide&&e.previousIndex!==e.activeIndex&&(a.gesture.image.transform("translate3d(0,0,0) scale(1)"),a.gesture.imageWrap.transform("translate3d(0,0,0)"),a.gesture.slide=a.gesture.image=a.gesture.imageWrap=void 0,a.scale=a.currentScale=1);},toggleZoom:function toggleZoom(a,t){var s=a.zoom;if(s.gesture.slide||(s.gesture.slide=a.clickedSlide?e(a.clickedSlide):a.slides.eq(a.activeIndex),s.gesture.image=s.gesture.slide.find("img, svg, canvas"),s.gesture.imageWrap=s.gesture.image.parent("."+a.params.zoomContainerClass)),s.gesture.image&&0!==s.gesture.image.length){var i,r,n,o,l,p,d,u,c,m,h,g,f,v,w,y,x,T;void 0===s.image.touchesStart.x&&t?(i="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,r="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(i=s.image.touchesStart.x,r=s.image.touchesStart.y),s.scale&&1!==s.scale?(s.scale=s.currentScale=1,s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),s.gesture.slide=void 0):(s.scale=s.currentScale=s.gesture.imageWrap.attr("data-swiper-zoom")||a.params.zoomMax,t?(x=s.gesture.slide[0].offsetWidth,T=s.gesture.slide[0].offsetHeight,n=s.gesture.slide.offset().left,o=s.gesture.slide.offset().top,l=n+x/2-i,p=o+T/2-r,c=s.gesture.image[0].offsetWidth,m=s.gesture.image[0].offsetHeight,h=c*s.scale,g=m*s.scale,f=Math.min(x/2-h/2,0),v=Math.min(T/2-g/2,0),w=-f,y=-v,d=l*s.scale,u=p*s.scale,d<f&&(d=f),d>w&&(d=w),u<v&&(u=v),u>y&&(u=y)):(d=0,u=0),s.gesture.imageWrap.transition(300).transform("translate3d("+d+"px, "+u+"px,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+s.scale+")"));}},attachEvents:function attachEvents(a){var t=a?"off":"on";if(T.params.zoom){var s=(T.slides,!("touchstart"!==T.touchEvents.start||!T.support.passiveListener||!T.params.passiveListeners)&&{passive:!0,capture:!1});T.support.gestures?(T.slides[t]("gesturestart",T.zoom.onGestureStart,s),T.slides[t]("gesturechange",T.zoom.onGestureChange,s),T.slides[t]("gestureend",T.zoom.onGestureEnd,s)):"touchstart"===T.touchEvents.start&&(T.slides[t](T.touchEvents.start,T.zoom.onGestureStart,s),T.slides[t](T.touchEvents.move,T.zoom.onGestureChange,s),T.slides[t](T.touchEvents.end,T.zoom.onGestureEnd,s)),T[t]("touchStart",T.zoom.onTouchStart),T.slides.each(function(a,s){e(s).find("."+T.params.zoomContainerClass).length>0&&e(s)[t](T.touchEvents.move,T.zoom.onTouchMove);}),T[t]("touchEnd",T.zoom.onTouchEnd),T[t]("transitionEnd",T.zoom.onTransitionEnd),T.params.zoomToggle&&T.on("doubleTap",T.zoom.toggleZoom);}},init:function init(){T.zoom.attachEvents();},destroy:function destroy(){T.zoom.attachEvents(!0);}},T._plugins=[];for(var Y in T.plugins){var O=T.plugins[Y](T,T.params[Y]);O&&T._plugins.push(O);}return T.callPlugins=function(e){for(var a=0;a<T._plugins.length;a++){e in T._plugins[a]&&T._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);}},T.emitterEventListeners={},T.emit=function(e){T.params[e]&&T.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(T.emitterEventListeners[e])for(a=0;a<T.emitterEventListeners[e].length;a++){T.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);}T.callPlugins&&T.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);},T.on=function(e,a){return e=m(e),T.emitterEventListeners[e]||(T.emitterEventListeners[e]=[]),T.emitterEventListeners[e].push(a),T;},T.off=function(e,a){var t;if(e=m(e),void 0===a)return T.emitterEventListeners[e]=[],T;if(T.emitterEventListeners[e]&&0!==T.emitterEventListeners[e].length){for(t=0;t<T.emitterEventListeners[e].length;t++){T.emitterEventListeners[e][t]===a&&T.emitterEventListeners[e].splice(t,1);}return T;}},T.once=function(e,a){e=m(e);var t=function t(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),T.off(e,t);};return T.on(e,t),T;},T.a11y={makeFocusable:function makeFocusable(e){return e.attr("tabIndex","0"),e;},addRole:function addRole(e,a){return e.attr("role",a),e;},addLabel:function addLabel(e,a){return e.attr("aria-label",a),e;},disable:function disable(e){return e.attr("aria-disabled",!0),e;},enable:function enable(e){return e.attr("aria-disabled",!1),e;},onEnterKey:function onEnterKey(a){13===a.keyCode&&(e(a.target).is(T.params.nextButton)?(T.onClickNext(a),T.isEnd?T.a11y.notify(T.params.lastSlideMessage):T.a11y.notify(T.params.nextSlideMessage)):e(a.target).is(T.params.prevButton)&&(T.onClickPrev(a),T.isBeginning?T.a11y.notify(T.params.firstSlideMessage):T.a11y.notify(T.params.prevSlideMessage)),e(a.target).is("."+T.params.bulletClass)&&e(a.target)[0].click());},liveRegion:e('<span class="'+T.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function notify(e){var a=T.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e));},init:function init(){T.params.nextButton&&T.nextButton&&T.nextButton.length>0&&(T.a11y.makeFocusable(T.nextButton),T.a11y.addRole(T.nextButton,"button"),T.a11y.addLabel(T.nextButton,T.params.nextSlideMessage)),T.params.prevButton&&T.prevButton&&T.prevButton.length>0&&(T.a11y.makeFocusable(T.prevButton),T.a11y.addRole(T.prevButton,"button"),T.a11y.addLabel(T.prevButton,T.params.prevSlideMessage)),e(T.container).append(T.a11y.liveRegion);},initPagination:function initPagination(){T.params.pagination&&T.params.paginationClickable&&T.bullets&&T.bullets.length&&T.bullets.each(function(){var a=e(this);T.a11y.makeFocusable(a),T.a11y.addRole(a,"button"),T.a11y.addLabel(a,T.params.paginationBulletMessage.replace(/{{index}}/,a.index()+1));});},destroy:function destroy(){T.a11y.liveRegion&&T.a11y.liveRegion.length>0&&T.a11y.liveRegion.remove();}},T.init=function(){T.params.loop&&T.createLoop(),T.updateContainerSize(),T.updateSlidesSize(),T.updatePagination(),T.params.scrollbar&&T.scrollbar&&(T.scrollbar.set(),T.params.scrollbarDraggable&&T.scrollbar.enableDraggable()),"slide"!==T.params.effect&&T.effects[T.params.effect]&&(T.params.loop||T.updateProgress(),T.effects[T.params.effect].setTranslate()),T.params.loop?T.slideTo(T.params.initialSlide+T.loopedSlides,0,T.params.runCallbacksOnInit):(T.slideTo(T.params.initialSlide,0,T.params.runCallbacksOnInit),0===T.params.initialSlide&&(T.parallax&&T.params.parallax&&T.parallax.setTranslate(),T.lazy&&T.params.lazyLoading&&(T.lazy.load(),T.lazy.initialImageLoaded=!0))),T.attachEvents(),T.params.observer&&T.support.observer&&T.initObservers(),T.params.preloadImages&&!T.params.lazyLoading&&T.preloadImages(),T.params.zoom&&T.zoom&&T.zoom.init(),T.params.autoplay&&T.startAutoplay(),T.params.keyboardControl&&T.enableKeyboardControl&&T.enableKeyboardControl(),T.params.mousewheelControl&&T.enableMousewheelControl&&T.enableMousewheelControl(),T.params.hashnavReplaceState&&(T.params.replaceState=T.params.hashnavReplaceState),T.params.history&&T.history&&T.history.init(),T.params.hashnav&&T.hashnav&&T.hashnav.init(),T.params.a11y&&T.a11y&&T.a11y.init(),T.emit("onInit",T);},T.cleanupStyles=function(){T.container.removeClass(T.classNames.join(" ")).removeAttr("style"),T.wrapper.removeAttr("style"),T.slides&&T.slides.length&&T.slides.removeClass([T.params.slideVisibleClass,T.params.slideActiveClass,T.params.slideNextClass,T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),T.paginationContainer&&T.paginationContainer.length&&T.paginationContainer.removeClass(T.params.paginationHiddenClass),T.bullets&&T.bullets.length&&T.bullets.removeClass(T.params.bulletActiveClass),T.params.prevButton&&e(T.params.prevButton).removeClass(T.params.buttonDisabledClass),T.params.nextButton&&e(T.params.nextButton).removeClass(T.params.buttonDisabledClass),T.params.scrollbar&&T.scrollbar&&(T.scrollbar.track&&T.scrollbar.track.length&&T.scrollbar.track.removeAttr("style"),T.scrollbar.drag&&T.scrollbar.drag.length&&T.scrollbar.drag.removeAttr("style"));},T.destroy=function(e,a){T.detachEvents(),T.stopAutoplay(),T.params.scrollbar&&T.scrollbar&&T.params.scrollbarDraggable&&T.scrollbar.disableDraggable(),T.params.loop&&T.destroyLoop(),a&&T.cleanupStyles(),T.disconnectObservers(),T.params.zoom&&T.zoom&&T.zoom.destroy(),T.params.keyboardControl&&T.disableKeyboardControl&&T.disableKeyboardControl(),T.params.mousewheelControl&&T.disableMousewheelControl&&T.disableMousewheelControl(),T.params.a11y&&T.a11y&&T.a11y.destroy(),T.params.history&&!T.params.replaceState&&window.removeEventListener("popstate",T.history.setHistoryPopState),T.params.hashnav&&T.hashnav&&T.hashnav.destroy(),T.emit("onDestroy"),e!==!1&&(T=null);},T.init(),T;}};a.prototype={isSafari:function(){var e=window.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0;}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function isArray(e){return"[object Array]"===Object.prototype.toString.apply(e);},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function(){var e=document.createElement("div");return e.innerHTML="<!--[if lte IE 9]><i></i><![endif]-->",1===e.getElementsByTagName("i").length;}()},device:function(){var e=window.navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),i=!t&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return{ios:t||i||s,android:a};}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch);}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e;}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++){if(a[t]in e)return!0;}}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window;}(),passiveListener:function(){var e=!1;try{var a=Object.defineProperty({},"passive",{get:function get(){e=!0;}});window.addEventListener("testPassiveListener",null,a);}catch(e){}return e;}(),gestures:function(){return"ongesturestart"in window;}()},plugins:{}};for(var t=function(){var e=function e(_e){var a=this,t=0;for(t=0;t<_e.length;t++){a[t]=_e[t];}return a.length=_e.length,this;},a=function a(_a,t){var s=[],i=0;if(_a&&!t&&_a instanceof e)return _a;if(_a)if("string"==typeof _a){var r,n,o=_a.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),0!==o.indexOf("<td")&&0!==o.indexOf("<th")||(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=_a,i=0;i<n.childNodes.length;i++){s.push(n.childNodes[i]);}}else for(r=t||"#"!==_a[0]||_a.match(/[ .<>:~]/)?(t||document).querySelectorAll(_a):[document.getElementById(_a.split("#")[1])],i=0;i<r.length;i++){r[i]&&s.push(r[i]);}}else if(_a.nodeType||_a===window||_a===document)s.push(_a);else if(_a.length>0&&_a[0].nodeType)for(i=0;i<_a.length;i++){s.push(_a[i]);}return new e(s);};return e.prototype={addClass:function addClass(e){if(void 0===e)return this;for(var a=e.split(" "),t=0;t<a.length;t++){for(var s=0;s<this.length;s++){this[s].classList.add(a[t]);}}return this;},removeClass:function removeClass(e){for(var a=e.split(" "),t=0;t<a.length;t++){for(var s=0;s<this.length;s++){this[s].classList.remove(a[t]);}}return this;},hasClass:function hasClass(e){return!!this[0]&&this[0].classList.contains(e);},toggleClass:function toggleClass(e){for(var a=e.split(" "),t=0;t<a.length;t++){for(var s=0;s<this.length;s++){this[s].classList.toggle(a[t]);}}return this;},attr:function attr(e,a){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var t=0;t<this.length;t++){if(2===arguments.length)this[t].setAttribute(e,a);else for(var s in e){this[t][s]=e[s],this[t].setAttribute(s,e[s]);}}return this;},removeAttr:function removeAttr(e){for(var a=0;a<this.length;a++){this[a].removeAttribute(e);}return this;},data:function data(e,a){if(void 0!==a){for(var t=0;t<this.length;t++){var s=this[t];s.dom7ElementDataStorage||(s.dom7ElementDataStorage={}),s.dom7ElementDataStorage[e]=a;}return this;}if(this[0]){var i=this[0].getAttribute("data-"+e);return i?i:this[0].dom7ElementDataStorage&&(e in this[0].dom7ElementDataStorage)?this[0].dom7ElementDataStorage[e]:void 0;}},transform:function transform(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e;}return this;},transition:function transition(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e;}return this;},on:function on(e,t,s,i){function r(e){var i=e.target;if(a(i).is(t))s.call(i,e);else for(var r=a(i).parents(),n=0;n<r.length;n++){a(r[n]).is(t)&&s.call(r[n],e);}}var n,o,l=e.split(" ");for(n=0;n<this.length;n++){if("function"==typeof t||t===!1)for("function"==typeof t&&(s=arguments[1],i=arguments[2]||!1),o=0;o<l.length;o++){this[n].addEventListener(l[o],s,i);}else for(o=0;o<l.length;o++){this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:s,liveListener:r}),this[n].addEventListener(l[o],r,i);}}return this;},off:function off(e,a,t,s){for(var i=e.split(" "),r=0;r<i.length;r++){for(var n=0;n<this.length;n++){if("function"==typeof a||a===!1)"function"==typeof a&&(t=arguments[1],s=arguments[2]||!1),this[n].removeEventListener(i[r],t,s);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++){this[n].dom7LiveListeners[o].listener===t&&this[n].removeEventListener(i[r],this[n].dom7LiveListeners[o].liveListener,s);}}}return this;},once:function once(e,a,t,s){function i(n){t(n),r.off(e,a,i,s);}var r=this;"function"==typeof a&&(a=!1,t=arguments[1],s=arguments[2]),r.on(e,a,i,s);},trigger:function trigger(e,a){for(var t=0;t<this.length;t++){var s;try{s=new window.CustomEvent(e,{detail:a,bubbles:!0,cancelable:!0});}catch(t){s=document.createEvent("Event"),s.initEvent(e,!0,!0),s.detail=a;}this[t].dispatchEvent(s);}return this;},transitionEnd:function transitionEnd(e){function a(r){if(r.target===this)for(e.call(this,r),t=0;t<s.length;t++){i.off(s[t],a);}}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<s.length;t++){i.on(s[t],a);}return this;},width:function width(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null;},outerWidth:function outerWidth(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null;},height:function height(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null;},outerHeight:function outerHeight(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null;},offset:function offset(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,s=e.clientTop||t.clientTop||0,i=e.clientLeft||t.clientLeft||0,r=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:a.top+r-s,left:a.left+n-i};}return null;},css:function css(e,a){var t;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t++){for(var s in e){this[t].style[s]=e[s];}}return this;}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e);}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t++){this[t].style[e]=a;}return this;}return this;},each:function each(e){for(var a=0;a<this.length;a++){e.call(this[a],a,this[a]);}return this;},html:function html(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a++){this[a].innerHTML=e;}return this;},text:function text(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var a=0;a<this.length;a++){this[a].textContent=e;}return this;},is:function is(t){if(!this[0])return!1;var s,i;if("string"==typeof t){var r=this[0];if(r===document)return t===document;if(r===window)return t===window;if(r.matches)return r.matches(t);if(r.webkitMatchesSelector)return r.webkitMatchesSelector(t);if(r.mozMatchesSelector)return r.mozMatchesSelector(t);if(r.msMatchesSelector)return r.msMatchesSelector(t);for(s=a(t),i=0;i<s.length;i++){if(s[i]===this[0])return!0;}return!1;}if(t===document)return this[0]===document;if(t===window)return this[0]===window;if(t.nodeType||t instanceof e){for(s=t.nodeType?[t]:t,i=0;i<s.length;i++){if(s[i]===this[0])return!0;}return!1;}return!1;},index:function index(){if(this[0]){for(var e=this[0],a=0;null!==(e=e.previousSibling);){1===e.nodeType&&a++;}return a;}},eq:function eq(a){if(void 0===a)return this;var t,s=this.length;return a>s-1?new e([]):a<0?(t=s+a,new e(t<0?[]:[this[t]])):new e([this[a]]);},append:function append(a){var t,s;for(t=0;t<this.length;t++){if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a;i.firstChild;){this[t].appendChild(i.firstChild);}}else if(a instanceof e)for(s=0;s<a.length;s++){this[t].appendChild(a[s]);}else this[t].appendChild(a);}return this;},prepend:function prepend(a){var t,s;for(t=0;t<this.length;t++){if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a,s=i.childNodes.length-1;s>=0;s--){this[t].insertBefore(i.childNodes[s],this[t].childNodes[0]);}}else if(a instanceof e)for(s=0;s<a.length;s++){this[t].insertBefore(a[s],this[t].childNodes[0]);}else this[t].insertBefore(a,this[t].childNodes[0]);}return this;},insertBefore:function insertBefore(e){for(var t=a(e),s=0;s<this.length;s++){if(1===t.length)t[0].parentNode.insertBefore(this[s],t[0]);else if(t.length>1)for(var i=0;i<t.length;i++){t[i].parentNode.insertBefore(this[s].cloneNode(!0),t[i]);}}},insertAfter:function insertAfter(e){for(var t=a(e),s=0;s<this.length;s++){if(1===t.length)t[0].parentNode.insertBefore(this[s],t[0].nextSibling);else if(t.length>1)for(var i=0;i<t.length;i++){t[i].parentNode.insertBefore(this[s].cloneNode(!0),t[i].nextSibling);}}},next:function next(t){return new e(this.length>0?t?this[0].nextElementSibling&&a(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[]);},nextAll:function nextAll(t){var s=[],i=this[0];if(!i)return new e([]);for(;i.nextElementSibling;){var r=i.nextElementSibling;t?a(r).is(t)&&s.push(r):s.push(r),i=r;}return new e(s);},prev:function prev(t){return new e(this.length>0?t?this[0].previousElementSibling&&a(this[0].previousElementSibling).is(t)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[]);},prevAll:function prevAll(t){var s=[],i=this[0];if(!i)return new e([]);for(;i.previousElementSibling;){var r=i.previousElementSibling;t?a(r).is(t)&&s.push(r):s.push(r),i=r;}return new e(s);},parent:function parent(e){for(var t=[],s=0;s<this.length;s++){e?a(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode);}return a(a.unique(t));},parents:function parents(e){for(var t=[],s=0;s<this.length;s++){for(var i=this[s].parentNode;i;){e?a(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;}}return a(a.unique(t));},find:function find(a){for(var t=[],s=0;s<this.length;s++){for(var i=this[s].querySelectorAll(a),r=0;r<i.length;r++){t.push(i[r]);}}return new e(t);},children:function children(t){for(var s=[],i=0;i<this.length;i++){for(var r=this[i].childNodes,n=0;n<r.length;n++){t?1===r[n].nodeType&&a(r[n]).is(t)&&s.push(r[n]):1===r[n].nodeType&&s.push(r[n]);}}return new e(a.unique(s));},remove:function remove(){for(var e=0;e<this.length;e++){this[e].parentNode&&this[e].parentNode.removeChild(this[e]);}return this;},add:function add(){var e,t,s=this;for(e=0;e<arguments.length;e++){var i=a(arguments[e]);for(t=0;t<i.length;t++){s[s.length]=i[t],s.length++;}}return s;}},a.fn=e.prototype,a.unique=function(e){for(var a=[],t=0;t<e.length;t++){a.indexOf(e[t])===-1&&a.push(e[t]);}return a;},a;}(),s=["jQuery","Zepto","Dom7"],i=0;i<s.length;i++){window[s[i]]&&function(e){e.fn.swiper=function(t){var s;return e(this).each(function(){var e=new a(this,t);s||(s=e);}),s;};}(window[s[i]]);}var r;r=void 0===t?window.Dom7||window.Zepto||window.jQuery:t,r&&("transitionEnd"in r.fn||(r.fn.transitionEnd=function(e){function a(r){if(r.target===this)for(e.call(this,r),t=0;t<s.length;t++){i.off(s[t],a);}}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<s.length;t++){i.on(s[t],a);}return this;}),"transform"in r.fn||(r.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e;}return this;}),"transition"in r.fn||(r.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e;}return this;}),"outerWidth"in r.fn||(r.fn.outerWidth=function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null;})),window.Swiper=a;}(), true?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper;});//# sourceMappingURL=maps/swiper.min.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * 
 */function jishu(uri){var url=appPath+"/Request/count_click_ajax";ajax_jquery({url:url,data:{openId:openId,event:pId},success:function success(data){window.location.href=uri;}});}function close_main_notice_dl(){$("#notice_dl").css("display","none");$("#notice_bg_dl").css("display","none");}//根据条件获取快速借款列表
function filter_outflow_product(amountRangeId,periodRangeId,labels){var url=appPath+"/Borrow/get_outflow_productlist_new_ajax";ajax_jquery({url:url,data:{amountRangeId:amountRangeId,periodRangeId:periodRangeId,labels:labels},success:function success(data){if(data.status=="1"){var html=data.data.msg;$("#p_list").empty();$("#p_list").append(html);}else{var msg=data.msg?data.msg:"系统错误";dalert(msg);}}});}//重置选择状态
function reset_outflow_product_style_condition(){$(".qy-cieia-vcnt1 a").removeClass("qy-cieia-atv1");}//确认选择
function confirm_outflow_product_style_condition(){$(".choice-mask").hide();$(".qy-cieia-vl1").hide();$(".cieia-cie-atv1").removeClass();//获取选中的值
var amountRangeId=$("#u1").find(".qy-cieia-atv1 a").attr("data-id");var periodRangeId=$("#u2").find(".qy-cieia-atv1 a").attr("data-id");var labels="";$("#u3 .qy-cieia-atv1").each(function(){labels+=$(this).attr("data-id")+",";});if(labels!=""){labels=labels.substr(0,labels.length-1);}filter_outflow_product(amountRangeId,periodRangeId,labels);}//判断是否购买,点击ICon
function judge_is_borrow(obj,request_url,common_type){//记录productId
var url=appPath+"/Common/setproductid";var productUrl=$("#quick_insure_btn").attr("data-href");ajax_jquery({async:false,url:url,data:{productId:productId,productUrl:productUrl},success:function success(data){}});ajax_jquery({async:false,url:appPath+"/Request/get_insure_num_ajax",data:{productId:productId},success:function success(res){if(res.status==1){if(res.data.num==0){$("#bg_dl").css("display","block");$("#lgb-rfse-indiy5").css("display","block");return false;}}}});getHitInfo_entry(obj,request_url,common_type);if(can_join=="1"){$("#bg_dl").css("display","block");$("#lgb-rfse-indiy2").css("display","block");}else if(error_code=="E050100066"){$("#bg_dl").css("display","block");$("#lgb-rfse-indiy3").css("display","block");}else if(error_code=="E050100080"){$("#bg_dl").css("display","block");$("#lgb-rfse-indiy4").css("display","block");}else if(error_code=="E050100067"){$("#bg_dl").css("display","block");$("#lgb-rfse-indiy5").css("display","block");}}//立即参与
function quick_join(obj,request_url,common_type){getHitInfo_entry(obj,request_url,common_type);}//关闭icon弹出框
function close_yes_borrow_dl(){$("#bg_dl").css("display","none");$("#lgb-rfse-indiy3").css("display","none");}//关闭icon弹出框1
function close_yes_borrow_1_dl(){$("#bg_dl").css("display","none");$("#lgb-rfse-indiy4").css("display","none");}//关闭icon弹出框
function close_judge_is_borrow_dl(){$("#bg_dl").css("display","none");$("#lgb-rfse-indiy2").css("display","none");$("#lgb-rfse-indiy5").css("display","none");$(".custom-dialog").hide();}//跳过去借款
function skip_to_getHitInfo(request_url){var obj=document.getElementById("quick_insure_btn");//	getHitInfo(obj, request_url);
getHitInfo_entry(obj,request_url,"E");}//点击借款按钮
function pre_judge_is_borrow(obj,request_url){//记录productId
var productUrl=$("#quick_insure_btn").attr("data-href");var url=appPath+"/Common/setproductid";ajax_jquery({async:false,url:url,data:{productId:productId,productUrl:productUrl},success:function success(data){}});//判断是否购买
//1,如果有条件，而且未购买，去购买
//2,如果有条件，已购买，跳转借款
//3,如果有条件，未支付完成，去完成支付
//此处都是能买的
if(can_join=="1"){$("#bg_dl").css("display","block");$("#lgb-rfse-indiy1").css("display","block");}else{//	getHitInfo(obj, request_url);
ajax_jquery({mask:"1",url:appPath+"/Third/detectLogin",success:function success(_d){if(_d.status==0){if(is_client=="1"){var loadingHtml="<article class='m-mask-c'></article>";loadingHtml+="<div class='loading-gif'></div>";$("body").append(loadingHtml);var ttm=setTimeout(function(){if(ttm){clearTimeout(ttm);}window.location.href="lgb://login#{}";$(".m-mask-c").remove();$(".loading-gif").remove();},1000);}else{//			getHitInfo(obj, request_url, "login", appPath + '/Third/detectLogin', appPath + '/Login/login3', "E");
getHitInfo_entry(obj,request_url,"E");//开始登录
window.location.href=appPath+'/Login/login?redirect='+thisPageUrl;/*$("#bg_dl").css("display", "block");
					$("#login-step-1").css("display", "block");*/}}else{getHitInfo_entry(obj,request_url,"E");}},async:false});}}//购买保险服务,进入实名页面（废弃）
function buy_insure(obj,request_url,common_type){getHitInfo_entry(obj,request_url,common_type);//确认可买
var url=appPath+"/Request/can_buy_ajax";ajax_jquery({url:url,data:{},success:function success(data){if(data.status=="1"){//进入实名页面
if(is_client=="1"){window.location.href=noticeURL;}else{window.location.href=appPath+"/Borrow/realname";}}else{var error_code=data.error;if(error_code=="E050100080"){//已购买未支付,提醒去支付
fnDialog({dialogTexts:'拒就赔已经申请,待支付',btnLeft:'继续借款',btnRight:'去支付'},function(){if(is_client=="1"){window.location.href="lgb://applyclaim#{}";}else{window.location.href=appPath+"/Insure/index";}},function(){window.location.href=productUrl;});}else{var msg=data.msg?data.msg:"系统错误";dalert(msg);}}}});}//确认支付（废弃）
var newTab;function do_buy_insure(obj,request_url,common_type){/*
	if(!isWeiXin() && choose_zfb_pay_channel == "yibeijia"){
		newTab = window.open('about:blank');
	}
	*/getHitInfo_entry(obj,request_url,common_type);if(is_realname=="0"){//先认证实名
var realname=$("#realname").val();var cardId=$("#cardId").val();if(realname==""||realname==undefined||realname==null){dalert("请填写完整信息");return false;}if(cardId==""||cardId==undefined||cardId==null){dalert("请填写完整信息");return false;}var url=appPath+"/Request/save_realname_ajax";ajax_jquery({url:url,data:{realname:realname,cardId:cardId},success:function success(data){if(data.status=="1"){//如果实名成功，改为成功
is_realname="1";//调起支付
doPay();}else{var msg=data.msg?data.msg:"系统错误";dalert(msg);}}});}else{//直接支付
doPay();}}//确认申请支付
function confirm_apply(obj,request_url,common_type){if(!(count>0)){dalert("购买数量不可为0");return false;}getHitInfo_entry(obj,request_url,common_type);if(is_realname=="0"){//先认证实名
var realname=$("#realname").val();var cardId=$("#cardId").val();if(realname==""||realname==undefined||realname==null){dalert("请填写完整信息");return false;}if(cardId==""||cardId==undefined||cardId==null){dalert("请填写完整信息");return false;}var url=appPath+"/Request/save_realname_ajax";ajax_jquery({url:url,data:{realname:realname,cardId:cardId},success:function success(data){if(data.status=="1"){//如果实名成功，改为成功
is_realname="1";//调起支付
doPay();}else{var msg=data.msg?data.msg:"系统错误";dalert(msg);}}});}else{//直接支付
doPay();}}/**
 * 
 *///看跳转那个资料
function fast_finish_info(step){var url="";if(step==1){url=appPath+"/Borrow/cert";}else if(step==2||step==4){url=appPath+"/Borrow/contact";}else if(step==3||step==5){url=appPath+"/Borrow/phone";}else if(step==6){url=appPath+"/Borrow/adddebitcard";}else{url=appPath+"/Borrow/main";}return url;}//判断资料是否完成
function quick_auth_is_over(){var url=appPath+"/Request/get_design_profile_status_ajax";ajax_jquery({url:url,data:{},success:function success(data){if(data.status=='1'){var step=data.data.step;var url2=fast_finish_info(step);//如果资料完成就申请
if(url2.indexOf("main")>0){var url3=appPath+"/Request/saas_commend_ajax";ajax_jquery({url:url3,data:{},success:function success(data){if(data.status=='1'){window.location.href=appPath+"/Borrow/preDesign";}else{var msg=data.msg?data.msg:"服务出错";dalert(msg,function(){window.location.href=appPath+"/Borrow/preDesign";});}}});}else{window.location.href=url2;}}else{var msg=data.msg?data.msg:"服务出错";dalert(msg);}}});}//这里只是将design的身份验证挪到这里
function pre_do_dingzhi(){// 先判断能不能定制
var url=appPath+"/Request/judge_can_commend_ajax";ajax_jquery({url:url,data:{},success:function success(res){if(res.status==1){window.location.href=appPath+"/Borrow/design";}else{var msg=res.msg?res.msg:"服务出错";dalert(msg);}}});}function do_dingzhi(){var amount_dic=$("#amount_dic").val();var period_dic=$("#period_dic").val();/*if (loanVersion == 'v1') {
        var bankId = $("#bankcard").attr("data-id");
        if (bankId == '' || bankId == null || bankId == undefined) {
            dalert("请先添加银行卡");
            return false;
        }
	}*/// 先判断能不能定制
var url=appPath+"/Request/judge_can_commend_ajax";ajax_jquery({url:url,data:{},success:function success(res){if(res.status==1){//先判断质料是否填写完成
var url=appPath+"/Request/get_design_profile_status_ajax";ajax_jquery({url:url,data:{},success:function success(data){if(data.status=='1'){var step=data.data.step;if(step==0){//资料填写完,开始定制
if(loanVersion=='v2'){window.location.href=appPath+"/Borrow/design";}else{var url2=appPath+"/Request/saas_commend_ajax";ajax_jquery({url:url2,data:{amountId:amount_dic,periodId:period_dic},success:function success(data){if(data.status=='1'){// 定制成功
// window.location.href = appPath + "/Borrow/main";
window.location.href=appPath+"/Borrow/preDesign";}else{var msg=data.msg?data.msg:"服务出错";dalert(msg);}}});}}else{// 资料不完善
if(loanVersion=='v2'){//直接完善资料
$("#bg_dl").css("display","block");$("#dialg_dl").css("display","block");}else{// 如果v1 需要保存数据
//保存数据
var url3=appPath+"/Common/set_design_borrow";var data3={amount_dic:amount_dic,period_dic:period_dic};ajax_jquery({url:url3,data:data3,success:function success(data){$("#bg_dl").css("display","block");$("#dialg_dl").css("display","block");}});}}}else{var msg=data.msg?data.msg:"服务出错";dalert(msg);}}});}else{var msg=res.msg?res.msg:"服务出错";dalert(msg);}}});}function close_design_dl(){$("#bg_dl").css("display","none");$("#dialg_dl").css("display","none");}//更新资料
function update_user_info(){quick_auth_is_over();}//完善实名资料
function complete_cert(){var f1=$("#f1").html().trim();var f2=$("#f2").html().trim();var f3=$("#f3").html().trim();if(f1==""||f1==undefined||f1==null||f1==1){dalert("请上传照片");return false;}if(f2==""||f2==undefined||f2==null||f2==1){dalert("请上传照片");return false;}if(f3==""||f3==undefined||f3==null||f3==1){dalert("请上传照片");return false;}if(is_realname=="0"){call_hit(28);//先认证实名
var realname=$("#realname").val();var cardId=$("#cardId").val();if(realname==""||realname==undefined||realname==null){dalert("请填写完整信息");return false;}if(cardId==""||cardId==undefined||cardId==null){dalert("请填写完整信息");return false;}var url=appPath+"/Request/save_realname_ajax";ajax_jquery({url:url,data:{realname:realname,cardId:cardId},success:function success(data){if(data.status=="1"){//如果实名成功，改为成功
is_realname="1";if(is_zhima!="1"){//授权芝麻
show_zhima_dl();}else{quick_auth_is_over();}}else{var msg=data.msg?data.msg:"系统错误";dalert(msg);}}});}else{if(is_zhima!="1"){//授权芝麻
show_zhima_dl();}else{quick_auth_is_over();}}}//完善芝麻信用
function show_zhima_dl(){call_hit(27);var url2=appPath+"/Request/get_zhima_auth_url_ajax";ajax_jquery({url:url2,data:{},success:function success(data){if(data.status=='1'){var url=data.data.authUrl;document.getElementById("zhima_iframe").src=url;$("#zhima_bg_dl").css("display","block");$("#zhima_dl").css("display","block");}else{var msg=data.msg?data.msg:"系统出错";dalert(msg);}}});}//关闭弹窗
function close_zhima_dl(){$("#zhima_bg_dl").css("display","none");$("#zhima_dl").css("display","none");//判断是否要支付
var url2=appPath+"/Request/get_zhima_status_ajax";ajax_jquery({url:url2,data:{},success:function success(data){if(data.status=='1'){try{var data=data.data;if(data["zhimaInfo"]["status"]=="1"){is_zhima="1";quick_auth_is_over();}}catch(e){dalert("系统出错");}}else{var msg=data.msg?data.msg:"系统出错";dalert(msg);}}});}//刷新芝麻
function refresh_zhima(){$("#zhima_bg_dl").css("display","none");$("#zhima_dl").css("display","none");//判断是否要支付
var url2=appPath+"/Request/get_zhima_status_ajax";ajax_jquery({url:url2,data:{},success:function success(data){if(data.status=='1'){try{var data=data.data;if(data["zhimaInfo"]["status"]=="1"){is_zhima="1";quick_auth_is_over();}}catch(e){dalert("系统出错");}}else{var msg=data.msg?data.msg:"系统出错";dalert(msg);}}});}//联系人检测
function doContactCheck(){var name1=$("#name1").val();var phone1=$("#phone1").val();var relationship1=$("#relationship1").val();if(relationship1==-1){relationship1="";}var is_contact1=false;if(name1!=""&&phone1!=""&&relationship1!=""){is_contact1=true;}var name2=$("#name2").val();var phone2=$("#phone2").val();var relationship2=$("#relationship2").val();if(relationship2==-1){relationship2="";}var is_contact2=false;if(name2!=""&&phone2!=""&&relationship2!=""){is_contact2=true;}if(!check_phone(phone1)||!check_phone(phone2)){dalert("请输入正确的手机号码");return false;}if(!is_contact1||!is_contact2){dalert("请填写完整信息");return false;}if(relationship1!=1&&relationship1!=2&&relationship2!=1&&relationship2!=2){dalert("请至少填写一个父母或者配偶");return false;}var name="";var phone="";var relationship="";if(is_contact1){name=name1.replace(",","")+",";phone=phone1.replace(",","")+",";relationship=relationship1.replace(",","")+",";}if(is_contact2){name+=name2.replace(",","")+",";phone+=phone2.replace(",","")+",";relationship+=relationship2.replace(",","")+",";}name=name.substr(0,name.length-1);phone=phone.substr(0,phone.length-1);relationship=relationship.substr(0,relationship.length-1);var url=appPath+"/Request/save_main_contact_ajax";ajax_jquery({url:url,data:{name:name,phone:phone,relationship:relationship},success:function success(data){if(data.status=='1'){quick_auth_is_over();}else{var msg=data.msg?data.msg:"保存失败";dalert(msg);}}});}//定时器
var timeinterval;var times;function clock(){$("#n-ayinfo #get_new_code_djs").html(times+"s");times--;if(times==-1){clearInterval(timeinterval);timeinterval="";$("#n-ayinfo #get_new_code").css("display","block");$("#n-ayinfo #get_new_code_djs").css("display","none");}}//重发动态密码或者图片验证码
function reset_phone_captcha(ctype){var url=appPath+"/Request/resend_captcha_ajax";ajax_jquery({url:url,data:{gatherToken:gatherToken,siteCode:siteCode},success:function success(data){if(data.status=='1'){if(ctype==1){//动态验证码
$("#n-ayinfo #get_new_code_djs").html("60s");times=59;timeinterval=setInterval("clock()",1000);$("#n-ayinfo #get_new_code").css("display","none");$("#n-ayinfo #get_new_code_djs").css("display","block");}else{//图片验证码
captchaImage=data.data.img_content;img_type=data.data.img_type;var base64="data:image/"+img_type+";base64,"+captchaImage;$("#pic_code img").attr("src",base64);}}else{var msg=data.msg?data.msg:"请求失败";dalert(msg);}}});}//保存运营商信息
var gatherToken="";var siteCode="";var dynamicPasswordType="";var dynamicPasswordMsg="";var captchaImage="";var img_type="";function save_ppd(){var password=$("#ppd").val();if(password==""){dalert("请填写完整信息");return false;}var url=appPath+"/Request/save_thirdinfo_mobilecarrier";ajax_jquery({url:url,umask:"1",data:{password:password},success:function success(data){if(data.status=="1"){//进入下一步
quick_auth_is_over();}else if(data.status=='0'&&data.error=="E00080000"){if(timeinterval){clearInterval(timeinterval);timeinterval="";}//输入密码后再次请求
gatherToken=data.data.gatherToken;siteCode=data.data.siteCode;dynamicPasswordType=data.data.dynamicPasswordType;dynamicPasswordMsg=data.data.dynamicPasswordMsg;$("#n-ayinfo").slideDown();$("#n-ayinfo #authsmscode").attr("placeholder",dynamicPasswordMsg);//出现倒计时
$("#n-ayinfo #get_new_code_djs").html("60s");times=59;timeinterval=setInterval("clock()",1000);$("#n-ayinfo #get_new_code").css("display","none");$("#n-ayinfo #get_new_code_djs").css("display","block");//渲染按钮
$("#change-btn").empty();$("#change-btn").append('<a href="javascript:" onclick="authenticationverificationCode()" class="s-gnel-ylbtn">下一步</a>');}else if(data.status=='0'&&data.error=="E00080003"){if(timeinterval){clearInterval(timeinterval);timeinterval="";}//选择图片验证码，密码后再次请求
gatherToken=data.data.gatherToken;siteCode=data.data.siteCode;dynamicPasswordType=data.data.dynamicPasswordType;dynamicPasswordMsg=data.data.dynamicPasswordMsg;captchaImage=data.data.captchaImage;img_type=data.data.img_type;$("#n-ayinfo-img").slideDown();$("#n-ayinfo-img #authsmscode-img").attr("placeholder",dynamicPasswordMsg);var base64="data:image/"+img_type+";base64,"+captchaImage;$("#pic_code img").attr("src",base64);$("#change-btn").empty();$("#change-btn").append('<a href="javascript:" onclick="authenticationverificationImgCode()" class="s-gnel-ylbtn">下一步</a>');}else{var msg=data.msg?data.msg:"保存失败";dalert(msg);}}});}//再次短信验证
function authenticationverificationCode(){var password=$("#ppd").val();var authsmscode=$("#authsmscode").val();if(authsmscode==""){dalert("请输入短信验证码");return false;}//再次提交
var url=appPath+"/Request/save_thirdinfo_mobilecarrier";ajax_jquery({url:url,umask:"1",data:{password:password,gatherToken:gatherToken,dynamicPassword:authsmscode,dynamicPasswordType:dynamicPasswordType,siteCode:siteCode},success:function success(data){if(data.status=="1"){//进入下一步
quick_auth_is_over();}else if(data.status=='0'&&data.error=="E00080000"){if(timeinterval){clearInterval(timeinterval);timeinterval="";}//输入密码后再次请求
gatherToken=data.data.gatherToken;siteCode=data.data.siteCode;dynamicPasswordType=data.data.dynamicPasswordType;dynamicPasswordMsg=data.data.dynamicPasswordMsg;$("#n-ayinfo-img").hide();$("#authsmscode-img").attr("value","");$("#n-ayinfo").slideDown();$("#authsmscode").attr("value","");$("#n-ayinfo #authsmscode").attr("placeholder",dynamicPasswordMsg);//出现倒计时
$("#n-ayinfo #get_new_code_djs").html("60s");times=59;timeinterval=setInterval("clock()",1000);$("#n-ayinfo #get_new_code").css("display","none");$("#n-ayinfo #get_new_code_djs").css("display","block");//渲染按钮
$("#change-btn").empty();$("#change-btn").append('<a href="javascript:" onclick="authenticationverificationCode()" class="s-gnel-ylbtn">下一步</a>');}else if(data.status=='0'&&data.error=="E00080003"){if(timeinterval){clearInterval(timeinterval);timeinterval="";}//选择图片验证码，密码后再次请求
gatherToken=data.data.gatherToken;siteCode=data.data.siteCode;dynamicPasswordType=data.data.dynamicPasswordType;dynamicPasswordMsg=data.data.dynamicPasswordMsg;captchaImage=data.data.captchaImage;img_type=data.data.img_type;$("#n-ayinfo").hide();$("#authsmscode").attr("value","");$("#n-ayinfo-img").slideDown();$('#authsmscode-img').attr("value","");$("#n-ayinfo-img #authsmscode-img").attr("placeholder",dynamicPasswordMsg);var base64="data:image/"+img_type+";base64,"+captchaImage;$("#pic_code img").attr("src",base64);$("#change-btn").empty();$("#change-btn").append('<a href="javascript:" onclick="authenticationverificationImgCode()" class="s-gnel-ylbtn">下一步</a>');}else{var msg=data.msg?data.msg:"验证失败";dalert(msg);}}});}//再次图片验码
function authenticationverificationImgCode(){var password=$("#ppd").val();var authsmscode=$("#authsmscode-img").val();if(authsmscode==""){dalert("请输入图片验证码");return false;}//再次提交
var url=appPath+"/Request/save_thirdinfo_mobilecarrier";ajax_jquery({url:url,umask:"1",data:{password:password,gatherToken:gatherToken,dynamicPassword:authsmscode,dynamicPasswordType:dynamicPasswordType,siteCode:siteCode},success:function success(data){if(data.status=="1"){//进入下一步
quick_auth_is_over();}else if(data.status=='0'&&data.error=="E00080000"){if(timeinterval){clearInterval(timeinterval);timeinterval="";}//输入密码后再次请求
gatherToken=data.data.gatherToken;siteCode=data.data.siteCode;dynamicPasswordType=data.data.dynamicPasswordType;dynamicPasswordMsg=data.data.dynamicPasswordMsg;$("#n-ayinfo-img").hide();$("#authsmscode-img").attr("value","");$("#n-ayinfo").slideDown();$("#authsmscode").attr("value","");$("#n-ayinfo #authsmscode").attr("placeholder",dynamicPasswordMsg);//出现倒计时
$("#n-ayinfo #get_new_code_djs").html("60s");times=59;timeinterval=setInterval("clock()",1000);$("#n-ayinfo #get_new_code").css("display","none");$("#n-ayinfo #get_new_code_djs").css("display","block");//渲染按钮
$("#change-btn").empty();$("#change-btn").append('<a href="javascript:" onclick="authenticationverificationCode()" class="s-gnel-ylbtn">下一步</a>');}else if(data.status=='0'&&data.error=="E00080003"){if(timeinterval){clearInterval(timeinterval);timeinterval="";}//选择图片验证码，密码后再次请求
gatherToken=data.data.gatherToken;siteCode=data.data.siteCode;dynamicPasswordType=data.data.dynamicPasswordType;dynamicPasswordMsg=data.data.dynamicPasswordMsg;captchaImage=data.data.captchaImage;img_type=data.data.img_type;$("#n-ayinfo").hide();$("#authsmscode").attr("value","");$("#n-ayinfo-img").slideDown();$('#authsmscode-img').attr("value","");$("#n-ayinfo-img #authsmscode-img").attr("placeholder",dynamicPasswordMsg);var base64="data:image/"+img_type+";base64,"+captchaImage;$("#pic_code img").attr("src",base64);$("#change-btn").empty();$("#change-btn").append('<a href="javascript:" onclick="authenticationverificationImgCode()" class="s-gnel-ylbtn">下一步</a>');}else{var msg=data.msg?data.msg:"验证失败";dalert(msg);}}});}//添加卡片
/*
function save_debitcard(){
	var cardNo = $("#cardNo").val();
	var bankId = $("#bankId").val();
	var mobile = $("#mobile").val();
	
	if(cardNo == "" || bankId == "" || mobile == ""){
		dalert("请填写完整信息");
		return false;
	}
	
	if(!check_phone(mobile)){
		dalert("请填写正确的手机号码");
		return false;
	}
	
	var url = appPath + "/Request/bind_bank_card_ajax";
	ajax_jquery({
		url : url,
		data : {cardType:1, cardNo:cardNo, bankId:bankId, mobile:mobile},
		success : function (data){
			if(data.status == '1'){
				window.history.go(-1);
			}else{
				var msg = data.msg?data.msg:"保存失败";
				dalert(msg)
			}
		}					
	});
}
*/function save_design_debitcard(){var cardNo=$("#cardNo").val();var bankId=$("#bankId").val();var mobile=$("#mobile").val();if(cardNo==""||bankId==""||mobile==""){dalert("请填写完整信息");return false;}if(!check_phone(mobile)){dalert("请填写正确的手机号码");return false;}var url=appPath+"/Request/bind_bank_card_ajax";ajax_jquery({url:url,data:{cardType:1,cardNo:cardNo,bankId:bankId,mobile:mobile},success:function success(data){if(data.status=='1'){quick_auth_is_over();}else{var msg=data.msg?data.msg:"新增失败";dalert(msg);}}});}//用户确认放款
function do_apply(){var userCardId=$("#bankcard").data("id");var url=appPath+"/Request/confirm_commend_ajax";ajax_jquery({url:url,data:{userCardId:userCardId,nid:nid},success:function success(data){if(data.status=='1'){//弹窗
$("#bg_dl").css("display","block");$("#dialog_dl").css("display","block");}else{var msg=data.msg?data.msg:"提交失败";dalert(msg);}}});}//还款
function do_repay(){if(isBankCard==2){window.location.href=appPath+'/Borrow/alirepay/nid'+nid;}else{var cardId=$("#bankcard").data("id");var url=appPath+"/Request/onekey_repay_ajax";ajax_jquery({url:url,data:{cardId:cardId,nid:nid},success:function success(data){if(data.status=='1'){//弹窗
tipOpen("还款处理中，请稍后查看",3000);setTimeout(function(){window.location.href=appPath+"/Borrow/main";},2000);// $("#bg_dl").css("display", "block");
// $("#dialog_dl").css("display", "block");
}else{var msg=data.msg?data.msg:"提交失败";dalert(msg);}}});}}//关闭首页提示窗口
function close_borrow_main_dl(){$(".m-mask-c").css("display","none");$(".custom-dialog").css("display","none");}//借款还款时候修改卡片
function choose_apply_card(){var url=appPath+"/Borrow/choos_apply_card_dl";ajax_jquery({url:url,data:{},success:function success(data){if(data.status=='1'){$("#apply_main").css("display","none");$("#apply_body").append(data.data.msg);}else{var msg=data.msg?data.msg:"获取失败";dalert(msg);}}});}//借款还款时选择卡片
function choose_repay_card(){var url=appPath+"/Borrow/choos_repay_card_dl";ajax_jquery({url:url,data:{},success:function success(data){if(data.status=='1'){$("#repay_main").css("display","none");$("#repay_body").append(data.data.msg);}else{var msg=data.msg?data.msg:"获取失败";dalert(msg);}}});}function do_assisted_loan_apply(){var url=appPath+"/Request/post_assisted_detail";var data=$("#form1").serialize();console.log(data);ajax_jquery({url:url,data:data,success:function success(res){console.log(res);if(res.status==1){window.location.href=appPath+"/Borrow/assistedLoanApplySuccess";}else{var msg=res.msg?res.msg:"提交失败";dalert(msg);}}});}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAAoCAMAAAC8TlQPAAABelBMVEUAAAACAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVFRUAAAAAAAAAAAAAAAAAAAAAAAAFBQUUFBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAGBgYiIiIAAAAAAAAAAAAAAAAAAAAFBQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiIiIAAAAiIiIAAAAAAAAlJCIAAAAiIiIiIiIiIiIjIyMjIyMiIiIiIiIiIiIjIyMkJCQiIiIkJCQiIiIkJCQiIiIiIiIkJCQiIiIjIyMjIyMAAAD92QAiIiL20wGHdhMwLSDWuAY2Mx8qKSHNsAfevwXoxwNgVRh8bRSdiQ+tlgy5oAvCqAnjwwT61gFAOx5CPR1SShtzZRZ3aRWUghGhjA/wzgKijQ52thJmAAAAYXRSTlMAJ5cOT9h1lPxoeajxZDs4LQgD1GVgQurICwZxSBjOvbNsUxW2moL47eTafDEq4BH3urCdhX4b9d6ORjUjH8Gso4lbWVY/6cWloEz+yr+4r3cy8drQjiP+UUI43pZcYV9JGt4WqQAABm1JREFUaN7tmGdfGkEQxgeRJiioAREFUcSCNfZEMZbYY0vU9LK31pje63fPzBzLcRvIm/NN/Pl/cTvnHbqzO/Psg3DF5cGVgcvG9vIuXDL25N2HcLnYknL4AVwqtuRXufGP2st3IGY4FIvFBsAiiU/CUIl6t9tdj2NDPdOMWA8jrUgeFAm6vQkXxD15fiT3ElCJPiHEoBm2Y9gCFtN4f4fGazZagYnj0yocxwW9VoOXJjAJBIO9AokHFZ102x0MzoBjEnAgjw8Pv8idsuscQ2bpb8emAUljWLpLzXjv71uEOWFjFHcGPxiilJYgQ6MIL9A1AUybqMQAOOYh7MtvhvHy/vAB/M1NUeSWKxQK+TEIIWn1wiA9WoNGYWFuZETFU1DFQwsPXS0tC/yxSkyAUx7s7m5svDQM47vcSpStOUXNorC4oV5IcwYJv7CBPXFbxd1Nwk4aN19UpBkc4t46WJZHBvJSyu0G0EmXTPOGsIiqF/rbBgcHl4ZqivgKS90lNEqXo7m2lvfMU1vEQ/dVtbXglCfby/L1oUF8kfLJ3ynF43Fa5cl4fCgWjVIYoD6IALKSy+U6QIN2pwfHsXi8h6rUI3TagYh68ElTW1s/mHR6ELxxyqP7kjJifkgpn0MZruM0guD2er0ujBqptbtpPzPc9KBBu7NihiskFItm9WWz12lMZbNZnHe+GvEKpLfajlPBa9iT8vsng+DKk8Pl9IYWOz5CBUWd5YMQCrKSDn8zaNxi4WZI6Lz97X5KBXVbIAFgxkUlouCMHYl9pPgo5Znc1HJ2dYyPCIbWlBa6ekbNmX7iAZ1csbQmBNLZl6dhJJnM0ng7mSQRmhOVWAJHHAzLz4dGkTN5dCof6BukWKKOwm1x31aLHeSC1KinPYlxGBNEW6uw089ncCXy4IhVKd8aFp/l+59yD0oYEEVCGXOc7BvDKx+7jaTsoNEvkAyHLYLw0aCr9HxVVTfFwSqdBnBCZljKE8Pizcb5p1P5CCyiooBnrNVdCMew+vz1ZBxoP1pBI1p0PfVTpr5lhY1eYLy8gxmXhvNOkudGCb8M40jug4VPDKbnC24ApgTT0USqh4TLnvX0ehtHNfS8MRuZJRVJpXJ025NKjXLDscHzu3zCThM4rjv53rDzwSYQLjdAnUDqyDnT35+cJ6M6x86z7BQ6WRSRiUmB9AE0sSky3USXcoZMFt+20+bYgJ/JN1pKr+RyaS9NT9fNKqlu6CIBg2q8csVXkQSCTq8pHkrUqs3Tq7NgrRaASWLI7+W0TcqDM+7Kt+jB9ZSGtfkRIxjPdpsnf5dqiDh7G40htad1gnFRwAXXRGMulaKHM8oJtngL1ISoBMLgOKXDd8fvDBsfS1OaECZ+nEaCMwq5zdVP46ZN8qprcAJD0DDgMT/ZANeEHVIA9/ooh+4irCG19IXREcvylfHxyLBxIh9DkWrBdEeVOIdi1P9IV0HgI6ARoC1Ue8Q6YpldlSTho7BDlPF/jtiUHwydn3K1xIGOIMExF+tbNnvjmpu02Tu6toYVsijY6mn4qMEs9b8FugLkLBXJ6ScW954j9tEN6byWT0vs0A2fz9e1kEYGMj4kCh00zCi1ToHOrNlgY8Kky/yy15NMsuDNJZMZYKZIM6rEX0Qc2nB5+kkXvLP7Q1CEC6OG9SDMfT9r6la18uejZS1uLXtX9jyLpl6vFEyrV73GXxl9o54CvSw5FLkdq/hbLaVvchss4rTAbs4iDN18DAWKBd/EJ7BG3nwXMhPJddPP9bOGh8NBXp5wOMwC4LL3TVTppGNeyOMT7aAdtuyAm7dn3HQBt1xTXEjtdE1NoxrqtjkaCATa2wRCK52cwZCM04LQ4CrgfFsxtTpi6Q7dJuEiWJWnpTmdnModTe9CQ+jGiNYVHmqVLq2b0yviFoxqsEEO71BX2emxHK3Lph2TcCEktuTGj+Jh++7Y9t+HMWE6bTOLzBxnaB6Sdep/e9qBpPJVjidKXWVnxdLwBJS6hzRcUE77Uh6/eX9++Ovk91cpVxOgsPo/2cNnzU0/6wPXU7M51RHtQCL8bPAiHK9h5KGfNVqMFX/3FEpqt+WFBuCieLgpFcvPoJSFwGKeg8xiILCOdY/dsgSJ9UAgSq2DLiYGFrFxoibqAqJ/bW10/iYGbHmugU4EdWIAU4ooZurhAtnd2Xw8fPfe6tMEXHHFFVf8v/wBG7oqNXqTLfcAAAAASUVORK5CYII="

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAYAAAA850oKAAAAAXNSR0IArs4c6QAAFLxJREFUeAHtXQt0VMUZnmweJCHLG5EQEiJgABHBBBJItCGWhzFoFSMINtpTxeOj1eKjtWpL5Vh8gcfT1lfVtihWjdRWMFVQkqJAQgKiIhAjQgJJlDdsIJJnv3+5d727ubu575277Jxzz52dO4///+fbf2b++e/cCBbiITc3N9blco2MiIhIA6tpnZ2dFO+HuBNxJ+J0T6A70uJxncJvF343CXcX0lyIH0FaDeLViFc7nc6asrKy7/E7ZENEKHE2efLkuLa2tuyOjo488HUxLgJEMi4HLqNDByqsw1WNa6vD4VgXFRW1YdOmTc1GNxSs+mwNjsLCwpja2tpMAQx5+EdnQZAxwRIm2m2BdinHfR2BJSUlpaK4uLgliPToatp24Fi0aJGjpKQkt729vQicz8aVoEsC5hZuQvUrIyMjl+fn55eBdtI2tgm2AUdWVtbo1tbWIvwz50NDDLWNhAVCQfc+0L0iOjp6eXl5+U470M81OEhLrF69+joI8h4INsMOAlVCI4BSiXzLCgoK3uJZm3AJjvT09GiM2TdgLvEAhDhSicBtmqcGfC4Bn69t2bKllTceuAIHLTubmpp+Di1xPwRFq4yzJdRBmzyRkJDwMk/LY27AkZGRcT1A8RTQkHi2IEKGzwaA5N6qqqp/yjyzPCno4MAQMgpcP4trquXc89tgKUi7HUPNrmCSGDRwABRkjXwY1z24ooMpBE7bpjnIUlyLAZJTwaAxKOCYNGnSDNgpXgTDZ9O8Qmv/1sFOsmDz5s0faK1AazlLwYEJZxT2ORaD2F/jsrRtrQLipFwn6Hgc+zkPY8LaZhVNlnVQZmZmErTFG5h0ZlvFXKi1g8nqBmiRuRUVFfut4M0ScGAlkg9mlgMY/a1gKpTbAEAOg78irGhKzOYz0uwGJk6cuBigeB7t0AQ0HPRLgOQ4LykpKaqhoYFWNaYF08CBHdPI+Pj4lwCMu0C9JRrKNCnxV3EE5HrpkCFDkrOzs9/bsWMHzUkMD6Z0GvlVYJPsTTAwy3CKwxV6SQDDzCps5s0xw4/EcCeYnJycvgDG2jAwvPrQtB8kZ5I3VoJ9jG7EUM0Bw9ZgIHkNCB5rNKHh+gJLAHLfDrlPh8GsMXBO5U8N0xyE3DAwlAve6Jz0hyT5G6lBDNEcwhyDhpKwDcPoXldf3ycxMTHTjZiD6NYctCoRJp9hYKjvSDNK5FB/UL/orVx3BcJyda5eQsLlDZVA2rFjx5JgB3lXT626wCEYuMiOEQ78SWCCXkOZ5jkHmcQxx1gNmWiugz95hhxFnZikFmg1tWvqWGETbRvAEd4r4RxPAMdhbNaN17JZp3pCStvuwu5qGBicA4PIoz8w9Rf1m1pyVYOD/DHCS1a1Yg5ufuovwY9GFSGqhhXBg+u/aEFVOVUUhTObJYFODC+Xq/EoU9zJgs8nvallS9e+Bdc2sP59WtnaTf1Y1Zf0BqVi1s3qrGDUW4dGRyv1SVW8lE1MTHwEFV8RDI6MaHNPfSx78OZa9pO8Q+yKSw6zqMhO9k19HGtpVT2yGkFOsOrojYYjGxsbP1JCgCJwCK8PvEoVK6mUxzzNpyPZ0MGnWdqwZubs2c4yx7nYtdMOspjoDla9N561tp01IMnEH70YADnUXT8plQi9V2L71we+rovzkkfPuHZ2y+xGtnLZdnZlLsnKFJ8ZrzY5+EH9SP3ZbehWE0BrzEMt9G6J7UN8bAfLv+RIFz7ikH5p+nF28WgX27rTyZpOqV71damT84RUaI8aaI8vAtEZUHNgbRyLwk8GqsBOz1paA09C08c0sTce38FmTOkKIDvxqZDWJ4X+9Zs9IDjopWaUDJl3V+Pjuj87hbTI4jv3sLtu2M8cjpAeZhKF/lUPDgwn0TCe3O+3pA0fxMe2K6Z6fv537PG7v2FRUd0DSnGlnGWk/qV+9keWX81B52OgkC1tGv6YTTrntL9Hsuk/yjjGlt27m/WICVmAJAv9LMu/LDjoRB3h4BTZQnZNHD38lGrSs8adYEvu+iZkhxjqZ+pvOcHIrlYwFs1B5gVyBeycdtf8/SwhXr0WSIZ9pHdCG9u4jWxIIRf619TU7IJj0HZfzmQRg0whsXSVMjt44Gk2qD+daqAtFE4/yK7OO6itMP+lZPu7Czjo1D5MVELmcDaxXy6bdFSMar4vLNrPhp77vebyvBak/qZ+96WvCzjgnFrkmykUfl+WpR8cNDF95I49LBL7MqEW5PrdCxw0MYHn0PxQYzxp0Gl2gYbJqJwcqJ5QHF6o330npl7goJOBoWJsdwCsXCdK0+bM/E76U3ec9mPiVNhMdDdoQQXU79T/0qa8wAF3spAbUnphlXFVLh1pYVzo26uN/bTAWMAZR532mnz73wMOOmQe1c7WXjWfJa/DKiO2h/rla3fczJ15IBSNY7MFHLjZ94CDvj6AFHKRCpkwsG8L/uHfmsJPQnw7m5YVcht0CQIO3DLzgAOWsjxTpBjESu/G5hltpJkVrvlxt/4yZjVtWr1SHHjAgdZCChy0LzJtsv7la6BeGDviJEtJ9G/3IO1y45Xfsj89UGOnDTwPDtzgoLfkMVvNCiQIOz1LHdLM/nDbHktInnLRcdl28mB0e3vpdnbH3HoWia3/Npu4IRIOCA/ElBscMIDkIB7MLxzJClhLYm9nG1uKnVQlvhta6vctk3nhCd8kRpPVx7Dd36/3mSNDa3zcE7sU4CshRsDDGXAALVP5ok8bNdHwvXhq4W5GRi+rAnmPUbtimJl9mC0s2if+dN8PHvHrMuGVj5cfIh7cmgNE0cfybB8eWlDLLkprspQPMqmTRzsFGs4evKW2S/tNp2Q3v7vk4yjBjQcRHPQVRVsH8vu8PCc4S8th7klppxsYPWK67rtE2g4b7q9qMofgZJpsZ2QM6NvK7rupLmgs0IplOlZG484/KUuDGvdE2QqsT0wmXNBB9SPRtqhBrCfDgBZ/OW8/65Wg3D/UgCa9qhiW2IxXG455pUl/DBrQIv1ph7iDcBGF3Tj6SrMdCJalcczwk2xmdnCGE5Gg7PEnYMfwL8OUwf5tIWIdvN0JF6QxbD3f+MX19UGXayBgEHFkLIuI8A+eoDMgT4AbHOfLP+M/9cKRTSx9jIt7QnvifRl/8xFeicdoMpI0R19eCZTSdWthA+uDrXJpuOkqczbVpG0YFf/ZVYYdLGwUSQHrwbDSj8DhDJiLg4dkZJoz4wC798Y6DzXkMJwzQd507cnEUWQK5iUjks/YQzgiKxApTgfUB/fguOTi43iloN29XMy44Iy5+prLDmEcD8Qbf8/mGuyRZiaHhAvyGeUeHNLd1QXXNrond/k4gMVuYcaUo26Q24FuwgX3moNWAlnjfhg+xsM8XohDVwbC8GW3QKZ22nuxQ3BrDhDKteaYMMrFaLYvDTfaaCIqpZviNjrewT2suPfufZng5Te9q+ob7Kg1RB4uSjuJN+/4t5hiWImj1Yr6t4tFTi24jzlPfr/CgqZNayIXXmo2CKdozsGxFamTjUrlGrua+jjroq7aUFNFJhYiXNBqxVoHCBUM0dvtvvMNFcW5zZoBq67UQYhHQgkXXGuOMeeFntYgINCqZTTnvImag9thJW1Y6M03RC3BO/ChOVw0IeUWHCmJ1vmC0kmDFV9Yt6oflco98F00rATXGUL8K8ncnTCZWxVWr+/PFj45wjKA8L7PQrigCWmNVR2gtp2EeO9dWLXllebvgI3t1VXnuo+4vnfpCBxUa/5boedybusgXNCwUq1UiFbnozPKrQhr8CWF+gM93E2dbnGwX0GDbP+6p6lNk1tjbA9r+NPISDUNK/yCw4JhhTwkX3nnXC/5NX8fiSFmOGs8aO57Xuf043d/iHDhcDqdNKx4b154iSp4P7pzvzOCsg/L+7K9DV13EI65otnCp0awU82kXM0J9MUGTkMH4cJRVlZG3q91PBJ59IS5B9TTXOPFlf5P7969L4499OdUfCfNHOlEmoc7vQTXES5E8rgcWo4cN/c1wlX/689qG+jsf//hk0/7sL+/6z3s+M+t7gnHTsduPIjg2KqOLWtyHzlunuYgu8ZfA2gNKYeUb9eeeGmSIXGOvxLlxoMbHDj/ep0h3BpcyZET5mmO4jUD2YEjyiacbW0R7OG/pDJayRgZvjusrH0j21RSl4gHN7dRUVEbUIg7J4NqE/6tJBzXyUgMFYOVyMmTh4afl99RV8ZTWCZysjmS0cVhaBHwcOY1yE2bNjXD6FHOG6FVO8wxZz/3ViI77lI/ZK147xzWcMCYf7vZy2StfUk4IDxQeame5G5o2b0vVlMnBhLMjt3x7F8fDQyUxe8z+kjgMyuS/D5X8+Czr8w1sqmhxSevBwcecIjjjE/GIP+MYFU7jDNln26JYIueT2UdHdrfaSit7Mtoias3bP6il94qTCkvxYEHHCkpKRVojTvHn5KP+xsmhKdfHcr24vuyegMNL3oC2VcqvzRnyNRDF8o2CThwV+MBR3FxMU1IV+qs3PDin3zaG/se+sf5LZi/aB1OfJl6f2M/dkzDnEWsh+ZSnH6BcqWAAzepHnDQL3zrfLnIAC/3zs4IVrxG3z+VeHlmxRDDWKKTAUsr+2iu77XVgzSXNbOgb/97gSM/P78Ms1Xv087MpEZh3f8pHcD0mNI3bOsFI5axE8DSzdreP6/eG8fKP+fvi0/U79T/0i7xAgc+qdCB3bgV0gw8xMkeQPMFrWFV2QCtRf2WI5+Pdg077v8wyRTvl1CFD6jfqf+l2b3AQQ+io6O5G1qIrvc39IOXlvoZ/venHWz9VuP/qWT6/lrlqmX9lt7sw/J+xA53Qa7fu4CjvLx8J1RMFXfUg6AlLyezE03qrIpf1caZdnrwnnrlS9pDR6PZ4heH8ShWvJgeUUn97ktcF3AIGZb6ZuThdwO8te5/ejjUuXI7xVe1xm+YibI4fEy5lfX3zw0z3KAn0mHAfZlcHbLgKCgoeAuZyQmIu7B1p9OtQZQSpmfJ2V0bLQrOMydfkD++lMIqt6sfErtr36DnNUJ/d6lOVkfD0aMzKSmpCZOUq7qU4CChem88Vi/RbMr4490e4LITq5SKz83pmOk4byPQ65qk4Wg310hDntHih0X0vtdff/1TuXplNQdlxHc3XsOtTq4QD2lvrx3o9tLqboiJM9GJty8O4fcXyF/kvmXD2Vo4L3Mc6oR+liXRLzi2bNnSionKE7KlOEkkwd/26Pnwy/Dv9zE8ybwzQOlLUHKhrrEHu3lRGiPrLs+B+pf62R+NfsFBBRISEl7GrcFfYR7St+1KYPMfGMM+9rNcvQCH2Dp7+v+Ha+WBPt3hO6TQnsmbHwxkN/x2jOFGN610BijXIPSv3yyycw4x9969e9sSExPpPMfZYhqPd/LQWoP9Dlpajju/yevNfAfgfxye5J/XGLe7SzK4LPMomzrph3M2Krc7sZIawd5bP4C1qVhNBUue0Bq3bty4cVug9hWtCdPT02mPf2qginh5Rt97nZ//HZuXf8BzOBv5ol57z1hsdgX8L6hi4YXfVbMJo5rYps96sVf+PZh9Vm0s+FQRoz5zKYaTvO6KKZIWtAdt59+KS1H+7ho18zltitFyd+WHA91ueHTGBx0TRcPAx1u1b5ZJaR47ognAw6fLXxjG3nx/EOPVF1RKsyROc4yCxsbGQ5I02agizUEloT2W4PYb2Vo4TnTg+2r0qa3p+B7L+qo+2E3VtmHGMYtqSXsMWuMBJYXUgINMjWRiTVZScTgPlxKoA1WjAQ5Fp+IEXK1I2aMKsd+/AGkmvf8lbS0cN0ECndR/SoFB7auaQ9TX1+/G/IP87HJMID5cpbkSeLyqquoFNU0o1hxipXjB9mEsg+g9l3CwiQSov6jf1JKreM4hrTgzMzOpvb19G/ZejPP+lTYQjhsmAQDjMIaT8RUVFfvVVqpac1ADQkNFiIbnH2olbm1+6p8iLcAgMlXNOaR8NTQ01GDnNgra41JpejjOjwSw4/oo5hkvaqVIMzioQQCkdMiQIbS0naCVgHA5cySA4eQVAONuPbVrGlakDaampi4AIaukaeF4cCVA/UH9opcKTRNS30YnT54c19rauhZDTLbvs/BvayUAYGyAs/A08WVoPa3r1hzUOBESGxs7C4Rt10NMuKw+CZD8qR+MAAZRYojmEFnC/stgELgGGmSsmBa+WyMBAgbkPh0WUMM+Q2mI5hDZJ8LgQHIJCA0byUShWHAneZPcjQQGkW2o5hDlIMxB3gSSZ4lp4bs5EgAwVmGOMceooURKpaGaQ6yYCMVs+WoQ/oqYFr4bLwGSL8nZDGAQtaZoDqkYJk6cuBgezg9a0Za03RCPd5KBq7KyUvV+iRq5mA4OIiYjIyMft+UYZsJ7MWp6RyYvtMVhJBfBwFUi89jQJFOGFV8KiRHa/AFj4Ymqr3BU/Cb5kRytAAaRZQk4qCHa/MGMOhfRx3CFN+wgBBWB5PUYyU/rJpqKtjxZLRlWPK0JkUmTJs3Alj9tCNG+TDgElkAdeXBt3rz5g8DZjH+qa+NNKzmCRxmBg9rPFO5aqwvVcuQl/iSu6zCM7AoGk0HRHFJGYVUdhd/P4poqTT/L46Xg/3YYtYICClH2QQeHSAhAMg9x+qckimln4Z1ePb0PoHidB94tm5B2xywJBH6OwzEjvxN567rLH2LP64hv4p8XYJB8udEc0s6GFomGkecGGM/o5ZuR0mchFq8Bn0voGASAguYYXAVuNIdUKiQoWP/+NmvWrFH4R12Pq0r63O5x8FNJfBF/xCePwCAZc6k55Do/KytrNByKiiDU+bC0DpXLw3Ma6N4Huldgk2y53OFsPNJuG3CIwsNZmY6SkpJc2EmKkEZHQySIzzi801nyK2GnWE4HwPqe88khvV4k2Q4cUuoLCwtjamtrMzFm5yE9D//MLNxjpHksjrdAQ5SjzXWYS6yjQ+alZ4lbTIvu5mwNDl/uBT+SHIBkKp5djCsNF1lhzZhbdaBeWlVV49oKUJRiyPjErO1ztGF5CClwyEkvNzc31uVyjUTnEVDSAByK0yluTsSdiLvv9BvxOKQ1I+5C3IW4+06/ET+CtBrEqxGvxrKzRvjsKpJCM/wfQJa2/BT8zx0AAAAASUVORK5CYII="

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAYAAAA850oKAAAAAXNSR0IArs4c6QAAJJxJREFUeAHtXQlgVcXVniTsJGwBIWEJoIjgUkUELFEBFStCWxdcUFG7QLWtS7W26t/W/v62WmsVrW31rxuKimjrj4oLCqhQQNBaRRDCjknYIkvClkDyf9/cO/fNve/e9+59774lmIGXO3PmzJlzzpw7+8zNEYe5GzFiRKvq6up+OTk5/SFq/4aGBvo7wV8AfwH8fObzCVgb/PYiXI1wjfmsBqwa/q8AK4N/JfwrCwoKyubNm7cf4cPW5RxOkp166qmtDx48OLy+vn4U5BqEHw2iF365+IXt6kFwI34r8fs4Nzd3TrNmzRYsXLhwX9gZZYpeozaO8ePHt9iwYcNQ0xhG4Y0eBkW2yJQykW8tapdFeM6hsZSUlCyeMWNGbQb5SSrrRmccd955Z+6sWbNGHDp0aCIkvxC//KQ0kNrENSD/cl5e3tQxY8bMA++sbRqNazTGMWzYsAF1dXUT8WZejhqiZ6PRsMko+N4Evqc1b9586qJFi1Y0Bv6z2jhYS7z22msXQ5E3Q7GDG4NC/fAIQ1kCvD+NHTv2xWyuTbLSOE4++eTmaLOvQF/iNiixnx+FN1KcMsj5e8j57EcffVSXbTJklXFw2FlTU/N91BK3QlEcZXxd3EbUJn/Iz89/PJuGx1ljHIMHD74MRvFHWEPx18UiXOSsgJHcsnTp0udd4tIOyrhxoAk5BlL/Bb+RaZc+ezOcC9auQ1PzRSZZzJhxwCg4G/kr/G7Gr3kmlZClebMPcj9+d8FI9maCx4wYx5AhQ87BPMVjEPjr1K9ItHw3Yp5k0ocffvhWogQSTZdW40CHsxnWOe4Cs7/AL615J6qgLEnXAD7uxXrOr9BhPZguntJWQEOHDu2B2uIFdDqHp0u4wy0fdFYXoBa5dPHixV+mQ7a0GAdGImMgzFQYRmE6hDqc84CBVEG+iRjRzEq1nHmpzuCUU065C0bxN+TDDmiTS14D1OOEHj16NKuoqOCoJmUuZcaBFdO8Nm3a/B2GcQO4T0sNlTItZR/hHOj19O7du/caPnz468uXL2efJHSXkkLjvgoskk2HAONC57iJoE0DaGZexWLeJanYRxL6JpjS0tKOMIzZTYZhK8OUBahn6hsjwQ5hZxJqzYGJrSJY8ttg+LiwGW2iF1sD0Psy6H00JswqY2P6jw2t5qDlNhmGf8WHjckXkvoPswYJpeYw+xhsSprmMMIu9eD05rdo0WJ0GH2QpGsOjkrMzmeTYQQvyFSkKGV5sFySJZ40AXO4emmyjDSlD1UD/Xfu3NkD8yAzk6GalHGYE1ycx2hy2aeBk5KdKEu4z8EpcfQxXoNOEqaRffo87DhqQCd1bKJT7QkVrLmI9gmMo2mtJMvtCcZRhcW6ExNZrAvcIeWyu7m62mQYWW4YZI8vMMuL5RaU3cDGwf0YTUPWoGrOLD7Ly9xHE4iRQM2KuYPrDeQQKF0gjpqQU6WBBjQv5wbZUea7kM09nzypdRhs7UtkEdO3qlJVuGHQ3QgiA/zuSQ3SrHAzcCM0DBqC85eInp00EjGwRPINNQ3Lj+Xoy/l6HczjA5+CYiPZJZ6JgvOlSl+FkmIk7mo/wc+xB781B8+VNBlGzFLLhEHGZMgrkuXI8ozr4hoHao0JoDIyLqWMI6hqPzFG+N6rX2IUmCo5HhLPN3DKkWa5xkwYsy7E2JhXJq0BhSw+ohj8jY0ptIe6gudCQonk5MFA+OAKHHU4MtbZ3JgTIzzUDJ6y1DCCFZdbMfUsOiBGn7pDnHB0jejR9YBo06pe7NmXKzZtbiX+/UW+mL2oo6jcalwUpKf3n7PC1FOHX8oJUiw2y/cRr/SeXKPaYdu0Gr8sG6EohXuJZIdHCQhAr24HxLWXlItRQ3bakR2hhoYc8eaCjuLRGcWicjuMxJG1I+hI7QxGceJEyESYQ9uj0DllJzXKea7KYkXvKsysTYxKkVGA/+JgUVjFAU8Ofm3bHBKTx1eKO69dL47suT+uJEzTr9c+ccFZ20WzvAaxfE1bcaiexIykfJjeuLQiCMFTRNKG7muP+0HWYWn/EzfKrsbBG3VWrlw5HQmyZP0kOaPIRXmMKa0Sf7xlrRh2wm6RG7cbbldVHgxj0IAacW7pV2LrV83F+vLW0tiUZTRmI0EFMHDy5MmPoO8RpWRX40BbdAnUM8muokyEovj1ZMJWQAjwrSdsYN894p6b1onxo7eJ1uhTJOPyUfOcOWynGDSwWqxc31rs2NX8cDCSwrKysi9Qeyxz6sbVOIqLi58EYoY7osEMQwmmjKJT+1pxy9WbxM+v+VIc0cm1SVVJAj+LutSK88+sEp3a1Yllq9uI2to8w0hMSjTKYC54imD0Y2NjWb83jON/nVhRXJm39i13IqYvnJhRsJqgMM2a1YvLvrVNfO/8yqRrCj8yV+/JE4+9VCRemt0Zy+O5Rp9VE0Hz+iAXVRw+0oSDgoNRA523HEbVHF27dr0Z2ZWGk2UQKv7VSBVaaoSHtQVKRpSetFvcf/NacRaGp82b+acXhEsnbssWDeKbJ+6WI5/1Fa1EBYa+eBMtBskaf8Fc8BTB6Edj49K66srKynf1GBsX5tWO69FJ6akjpdbvvxBtzCKgwr2K9oubrvxSnPqN3all1Qf1uUs6iCnTuovN21pKbCmdJqLmjUNNSRcHLaRoGPQmXH3ZW7/60lZz7N27dyQs6Kch5eeDTGKqUi9mm1YHMV9RIX7zow2iFya0ssH16b5fXHhWFWquetkfOXQot7H0R9qvWbPm/fLy8nVKjzbj6Nat228QcaKKTN0zmFFY7xBrCxloEN8+o0rch6HpkOOqAw9NUyeXQTkvt0GchKHveafvEFU7monVm1o1iqYGLYZA0/KK0o+ld14yv3btWl4MksK7xIMZhWKS7QcZJfPHH71H3DLxS3FM371WdLZ7/rMyX/zxqR6ibKNxRYnUgqYKzRtHFKu44uAlHF3Tt2/fQnWZv1Vz4ILUb0L5kxMmGzdhYipQTUjnjrXiVgxLb4ZhdO4Y7tA0LutJInTrzKHvdsk3h74Hsnfo22L37t2z0bRwWl1YxlFUVHQNwiMIDN/5Mwy+F9a7AQ8Ng233lWO3iN9dv04MaES1hVOHlGVAn73i/FFVMI5csWJda0NaU2A+TK8zqUc4GLYHETfwBsx5vMcIyzgw8fXfCJe4YScH828YMh/IrGqL0wbtlFPeo4buTNvQNDlZ46du0bxBjqrOhEwbKlqKCoxqKK+yjGBFHgw7PnfUfU4ujOMp4krqPCVfW1vLJcqQP2QT3zBs4iHAcO/ifeJnaD6GHF9NHg9r9/7S9uLBZ7vDSFolOIFm02AYuqrFKf0OPKUv93PgVDYnvUI2jPh86mLx7eHaxQ8uqBQXn7MNI5D4hhU/h+zHOH3wLnEqJtGmvX6EeHpmkdi3H7OspujUTwa00MK0h9lyfRId0ZHhqzG2WJZhwEPDGDSgWky/b7m49NytXxvDUDrnbO7V39kinr9nuVwolM2MGWnpSSFHPWPrOQrdB0DZgzQO4PNjeWlzlsA0DORagmbkTz9fIwo7NK5RSNgK64YFvSm/XC26Fh4w+iFmBpa+ws7Qm560B2Uc/b3xwo3RBaWfcxfX4K1p1TK55fRwucwctYK2h8Tl522VetFrkDRzJO0hl5uIkXHatwIqwWkgp2CWs8lFNEB9qJdI11MEI+W+XrSLXOwu74esVA2S0lyVwEpy1hp07fIPpTTfxka8HWoPOqUfpa80yiHtIhfj2rQ1KUo41ZzwyTdj8/ZGcl5KCZDi55YqDByhF11PzJLhdDnaBWuMFBhHsB70u4s7pEvmRpHPnEXt02oIHkqRxnG0R2RqwKb5y4fpf+bVrmIjNso0OSG+WNdGzJjdxVAF9GOqSPOkR0to0vqx5uiYjuwsIbXMFGwvDhJN+m0/MffD9lrs18/7xvxO4id3HyVq65RmonXgHhOspo6mGg1Bs9IpD2sqkxDVOzo6XIgSin0MdrQYpl/Ba7EYNQfNy2er2ooBR+4THQrS9kGicAVNgNoq7GT/r4d6ixff7CzqDqqxQY6lG1n0atjiSV9p0hMhUASMozIPq7Hc+ZXyneaKdSUjw7pxyDBglViImjmnUHDj7nFH7RVcqDpc3a7qZuKhZ4vF/U/1hNxq9cLQVMQ0TOmV4jyVoTTsiRA0oioHV0auxJsccr8jukAV65TRWXM0YAXBiI/UKMASHdodFJMv3izGnvGVbcYwqJTZhl+PU3Mvzy4UT7zcVVTv5cJ4DnRCiengN598WHCpOBlhxhv+yF+l4QgkGR9qjlU5OBNbASJFyRCKTuttHLQCKQabFkseF+Mw44nSr2SfuOGqChx43hOdVSODLFmWLx6eWiy4U51aYuFTEfpTGYd8qnjKCb8Rx4DTWcp0RiQarqRxcHoy5K2B7iJI9vFHPqkN5YfIhEljMY2C2lLGo+BnnbpTXHvZZtEl5ENKiWovSDoeWXhkWpH44KN2EWOQBIyaIjnjkBoNwo4f3Bo2KwdRzVubfvyk8ocTbSBKBBa2bFrwlDDTEOhXTYwyCD51eGuswUwYt01MGLutUWwA2n8gVzwz8wgxfVZnOQqhVtif4NPNIKhbJxxVvAFjHBGinNRiFDQZAPI8ROPYjYIqSIaQe9poMZQIlnEgoTQCSSC69tCNwunvdkSt+PGEzYL7IbLVvb2gg3h0ejexHYevpTFQXs0wZKED5jQG43Uw4EyXIeOoZrNSjvxTMFrxNg7oh/8N6TW/m6E4jUImlNo0aAw6rkbccEWl6N0j/pUKzDIdbuXa1mLKM8Xi87I2kTddvhHGmy8LXDMSQ1NSIxFDIaOGZRg0THWaD4cYRloHMNlgRYpGK+QrWgxLBHjo10cthiQNgtcl0OlxFq6Zzmkgubgi4fwzvxLXXLhFcMk7U27n7mbisRe7iVnvdxQN2IEQ0YDRjBhymTWBlNHAsWoTybihANo/08evNZjIVJpMH84f5LuK8xxXg1wKag53JpUYqpaQYfxp27peTLltjbj9h5vkmRSe8dgFZUuHeEtJJgE5D2AS4Q08K9a0Ea+/30le3dS/z36tuXLnI0zooUM5YsZbncWvHyoxagtlFZI/b8MgD0f33i/+a/JG8ZPLKuXRhQ+XtdOMypA7Pq+mUuIjBsFYn4dvk16GFL2DpEoG1xIDHlngIEbYJdg3+p2RVbJQebTxu9jCz1rgc15xUIdZQyKZVbPNsBChyoKdv0WfFIgPPm4nSrofEN06p35n2eL/FIjbHigR7/6rgzXtLd94jS/qS/UrlJ9zONdfUSF+8f1Noke3WtEGL8fx/faKjZWtxJqNrSO1BhPEdZZW42L6RWDNwVczMzttDA1avPJaJd3xNp1Lzt0mzindIR59sUi8Nq+TpWA2OdKZOjFqEUAAZ8zqDa3EDf/TV4wctktchzfyiMLwjaR8S0vx8LNFYuG/CyzjNHgCN2BCSUNW+RJI4wYCN05feHaV+MGFm+U1VDKN9odXU9mcSUjRs8WlNlDNZuUc5JGC87He1qxipM7MamAD3phh36gWndrb11S4fbB00G75W/tlK7FV7nVAASCd8TZGNKQ3NYSuB/7MuZ1wj1euGHjUPkGDS9Zxd/jjL3UVv3usp9hQ3tIyAlmrabWFzAl/VO3IfAcfWy3uvWW9+BYM3m1ZYNnqtuLPzxWLWqyv6Oli86y0GRsrgdhFbFaORcJRCSROOIklDjz0U5FsEma+Vyj27sOaCqpX5/0ahR0Oyml0VsEcBezdj6kZGAj/GW9nhB0JM4MH0R/4ZEVb8fa/Oso2vU+PxE/jv/lBR3H7g73Fkk8LBPsZ0knjjjRthEVqCwOHNwHdPnmTXApwW1DcXdNMPPxcd/GHJ3vgliBj4U3WNkYOcf6afMTBChqN/F/iaOUiVNMzgib2h+/+plriwEO/GpkwwHBH1B7X4SrI8053X1OhIU39v67i+Te6iDq1vC2rEWkvkjXSoVOTavQTduLAPeL6Kyt83SbINHQr1rYRU6YWiRXo/yiJ+JQ1FZ4WTHnM2pB3kF0xbqvcMNzM5TIZdqRffqcQNwMVi+qaPIMOaEjaqmYkA3CKtBHS/ypJdVjyfhjHeM5zHA9SvPQ+Bc5dJF0c6tEyDnBg6lUW5DG47O1nV5VjddZ9TaUCK5kPTysWH+DUGB3pyv4IPCoP+TQiJA7/8IqEs4fvEpeO2Sb6xrhy8lNsH3jpjc7i/aXtRL0piiw4k7qSTj7xR28Kzv7mDkzSYQTicdxi6ecF4sFnuos1m3hm1nCmfVtKsMKIVnkp3MhTSRqBhOQ7IYe7jLHJmNpXGwlCok0y7iLp4ihjkHUxkyDSiod2csDVt4ZD0ZdWiEKP0/VU9BQsZq0rN3aTMb2XkeiGyOw4Mjr2yL2iqGudaNWiXtTszcWIoaVYVtZWbMfdGspRkqiagpEOozi69z5x08RyeVWESqs/uTT/MG7+mbsEBi2JGtJKTeGPATJhEmik1rw6OfgtbTngSQXrcfV1W0kZtcc6kOqdFDnXxO4i6eIo47AKDZFWPF8dM8Ch3lU43zIBJ+Lcqmi1DP74P7qJGuwFoWNSSdciaJGTHitPiR39h9zLtt8UQ5dGsgbmFawjhqaTcAHu2BHuTSFP1k+d2VVMe62LOMChOWnjn0ovn/jDp8wTT1VzKBymiXaacNGRiULW41bjPlKL2A12LqgclSiloOl0cZRxkIaE44+KV0pi3MGDOWLpsgJ0LDsJdvBKiu0dS9I5FpuDxqFw9qBTW7YB/QND00YhSD8pRZxREzA3959eeEwlCwl/JF8m4zTU8edsF3ffuEF2pHV5VE6zF3YUt97fVyz4dztxkDcgm07VRCqsnrrchEVSKAz9GTtWxwzgX4wbfp5VxjEQCU8LkDgpVF0cXZkSjj8qXj61QmWYO8TegbI/Q7U/oG/0dkIOfYfjVsHTTt4t1mEoK7f5k1tkJAtblrAM+pZBvcG6UTDxkBMwNMUFuKOH73QdmpZtwPa/h/uIF2Z1kQZry1AZmQ1oBJzG4YKigZS2NFDy3hm8WVBSxpelz8JFcbOTp+mkYJaEA6yLo4zDquIRqeL5JFwBFFyR47zF+NHbxfcvcJ9QIt67izqIRzB3wGupdWfR1oEufhaUU4ru+MICZzdphG6O2//+Nr1IvIqheb3jlKdFi2JptCUcf/hUxqGMknnIeLfMlHJc4xID4j70s5csWfKO1He67+fQCzkZ41Cicyr6R5dUinG4RE7RU3F8sr1/9tUj5K8OzVMijgXVmv2eb28Rl2GU49Xv4WW1j7/cTdZwbvlYhQxPlhqHdT+HpSnMd7yHt/R0N4ESh1mqsJGwMgVUFWZOTj0ubCkXJx5Tg7a5veBZln04shCr5rARRYAjBV76ckJ/96HvFnwWg0Nf/QiEyt9JS39ricNZzWsvrfS8CeDDz4yh6XpzxOSkp8KWRkzjKMBR0Ku+s1lugXz9vU7iH+92zmjNAYN9H583P4P8Gt16eNApLcFjBH4pd27GwUU3fu6iEBNgNJBx2FTM6rkMi1DK6ekUTH9W7WwuXkNVvmlzS3EsZlm50qs7Xg4zChfbnzRgj1iFDuuOXZGhqo6n+wdgmHv3DevFRWi++LEep6vY2lLc/Vgvuf6zE/zGcpZhAEmtsdz7s7WYVq+R97NzmeCzVfmiHDT9u3ha8U+JmDCOJ6PuBMP3Verxll4TjFRi2Lo46s0tHbRLnDywxiLI2UV56w3adU4UbUOfQU9nIbp4iP8K3kC+/cdyTcVxSxBHO9/F/g82RyvWtRX7MOPqdF0KD4obUZPdcnW568X6+7nGgubjzr+WyI6vM32s8CDIed/N68R5eAF4PbbuVqETu2x1kC29frWi5+Ltx4eJf61uE7Qop+YeUrvgiiUrUwCUcfAqyb/cUeZ5EzFPg/31hSJMTNk7loqm15OGcP0V5eIMj+2ELOR5H+Ew1cq2YhemsDlf8Q00S2ecskveZOhG9y18vemRF4rl9j+3eC8YL2f56YQKMdLjC1GU7epf9YeMxhkWvWlz1yRz0rXplbNvuO0eUhtlTIY9BTJX+SYVF9FdJD1TZRzsW7RsXi8mfnuruHLcFrxR0VU4V0SfeqWbeOFNbU0lLg8GwmBsJ7wR96P3TWI7Ic+xPvB0dzmM9pmtRKMsXGO5Er8WkNHpuMbyCg5y/Q1bE9g0ZXC08jQmv65W/OnlJPCt+lGHDh16V0Um/wxmHJIZ/CnCpa7XX17u+YZxL8UU3MA3H5t6gjjZzuNe8h9eVCnyA2wn5Pa/v04vRn/G3FMSIFN+vOenkMXrmy/80OADT/cQq9i3grqosUwZB5qUM/Gt+zlKPJtxhP/VhMSMQzHFjtpNEzd5vu2LP22HaxqLsa8i2An99jiHeyVqqAtwq3Cs66Y40/oiaqnnXneZxFIa9Hjy23A3ob9yYv9IP0pH5eQc9268gy9Q0klNZdA4YJBRX01Q5WDxjabl9wj80gIk5UnOOJh1Xm69HClw5xRHG06n9m8+8U+sqcijhU4M7zA7vfwMB6fdi484IBfe9h3IE19uaSEX3hZhC6DcouhNIiqGhjdp/GZsc9xu9ad0JNJ7BnMuPMtSW2cu0wMh08YBFu5Bk3KbzmuUcYT7pSZ34yADVsbw0M8+h4SZYYtJ9soAY0fxRxdjomuE+0QXq3622RzKOmclLVop9HC2ll+R/CGN2KPJ4i0CD6O22Kw+Q6o6XJSfvOEPn2xWVNgE8+HhpNY84vyD3b7U5EoZE2JLUFiD/ZP2wpQiukZaGcNDv2Uc8Gs6s+IMy8H94bj/PNYej5XoNP5pKjqN2IuRLscL3jjs5bdW3Bw3DJOnj1doQ1TDCix0NTLJhHHAGJdg4muIxYzpsSbB9AhMiHHT8UU6LGy/0zhI3w1m5WtGcrj3OmoHfima2wmdX3zkFxW4MsuvTX+OPZlyO6FFxNujm7HFhze6jCnGqbvbcayANRprNqcztv8Vi3v+3lPecW7FIzPV6SRMz5thPY7h2M4vt95UkN8tmPha5sRwNY5JkyYtX7Vq1QQgFzoThBXWRWJNQYXIt4YZMKxlJJVlRRrKXI238ZU5neUax0DUJrmOeSx+VJhfcCSdz9e2RVOjU9SIm17Gql90rB1Cg+Ri329/vNG1s8yh6T/e6Sxue7CP+ASjEYajnF49mpFSRAV3WkwUAQVwoa2i/D3Lxo0bd63bd2U9KWOl9hqs1D7hj74XVmwJrczhoV9vWgiw4kne7HvoOal47u3gHMZQLKG7OW4nfAhDX15Cn6wbLbf/VYguHrvSPvo8H9v/emBWNzKCsmnBsACLDRlnIhhR9v4GEc1oK43do7Rgh/oNYQX2e1iBfdIN35MyRi2cilyNXy+3hP5g/sWyXhjVMWUG4M7GYAwDIfppJ+8SN1xZLooxE+nmlmCz0INo+9V2QjccL1j/PsaiHr8U5ebYyTQW9SI3I0ZJD4CqIRUNiYM/fMoaEk8FI4700+PqbNpxxYgD3Ij44N+yx2aPehxb4GmgMXEyiBEdm3lbLAJ6WPodMGgvoi0dGRwwyNNi/8SaSh2Gi+yPOA9KdUcfgU1NuwKepGvra5jK9Rd2Nm+9ZpPo6nKCjtsBnnqlq/j1n0vsm4WdWjFK3wbVjYARluHEtgiNhkMJWowfL/K7A8PXRV64Mambm4/XIHESZ2ljS2pjAAGG2bzQyTgTwXxYcImjA2WMmQZ+zkhyZpIzlG6OK748STdznvvQl/s1LjobG4l4Mq119PwKaXIC68/YAqBvJIqSVgFU1WgyI8FmHB9WraHwAdO8Zirnw0UBThTvcAU2ER+Jvob7EAvp4lJH88KO6TTvPOLFBBQRHJEpm4EwCxNuy800IqcUulD8SiP3iRyJGUs3x/tPZ+KoJY8h0GBYUzANtxBw0c7NcfvfA1N7oLMZGS67SgmgVRuYhCw808NHYoZBgrqkZgY+H8hzAoavz8dC90UdBsL59pGxCHnHWerwRkGMjREEVDhmJ9VMF68W4ZrKBVhTmRRwTcXJsFtt4yodgE6jIC2JayZQ6RI3DFJUWqI/kJuL5mRUvBS+qMM4jgEhHnwKtl5u5a5UYQFcPTZmEFBhm4EwpRanCBHXy0jMJIJT25MxJ6FO86u08Z4cBju3/7lKpIBuTQgzMeP5sIxCgzu8DMZwSjsxUNyj2I88AcbxhXt0BOo6zxGJNnzonG7HxBg/ilrqjAs7bBPZNAL9LbTiTY8VJiMxOqyM3o/OI7cgzv+4PdZSakX3ru7NBnGV++Cj9uKOKb3Fm9hPos6bqDjraRa6LHA3w9CMgmmSNwxJxco+oOc+GMZ0P2lsuo2VALUHjWMFfgkObU0NxcrEjItiCgAFk7UD8FQ4Zi1CehaiSVx7HIUrLEdhU89x/fbI4S9XaLkrjFsCPsNhbV7YH29PKGsD3XgVeSmtJjK9XkbBNBqqIhHjGUOoGKkQxaHrABiHry82B8oF+z3OwX6PN5BBoHR2fv2rwZmJ/lIGamrIgJOYnalgIVMET6MgNROHD2UUFlhTgeZltA+XsCAN2K9xLvZrvOUjE4niq1lRxLC3cA2aF079JdG8BBfOlgIBhvWCseJNjxUm47AoWTiqFGyRRAjgTBqSnm6pJgkZbeJY2Zl4ehzRVbz/3Ml4MsyLezE6edR/fgkcnsbY+FdQzoIgmUTjBhPUpkgEOIIljIXEH/38KY/0M2w6GTZxFY6RQGHEeCrieCqjcKMvR9WIUOg23hRQ5ydGlvaoYLqypzVC4GUBy80tLhYsIVMcOnRoDzQvn6BqD2lhzqlub5ajGAZAwfw0NYoy06j+i4K5PZXxucVJrjXW6ZUGZCKraRiVVkNVoDhPJVkctBjR4KcKzcmJixcv/jIGmmuUYy3TFScKaGY0ERHB5Y2iRoB/JTBDW6YIqLAqSBVmhKplnNlKHFb55o9p1U/B+LRoaQQIUzUFwTKMJ9NbYS2hipeRvv6Qjn+dxCDJrCcmYhikGajPoTOB9f8ynHVphrfvdB2euD+4QqLUB4AqYFU2NhzGJ86gYSiKMOgory1PBTTzcQTj5E7ukuHQTh4rrnejn/GYHeo/lLBxMAsYyFwsznFoe5L/LONhBldQlDoBsBUYsrThmAEbzIMtq3AtT/YbBUWB/E/AMG70EMsXOKFmRafcp0+fSWDkVR0Wjt9P0Rk5sdy0spMB1ZzoRmLhmAkUjkof9dQBZh4E2WgqHIMVq4kxgz4e/uX0QUyisDxYLn7xvfBC4Yyn9Ovq6majiRnulVFycJaAfxclFAAKpndCFSwWZT1nGgWdhOkRCiZj/f7xk7tfWhE88LgAm4XPXrhwoftKYwQ1ri80DktLSzvu37//fSj/uLi5JozgKJEYdFwFA9AJ143FSU4Zg4K7GQXj/HNFbCcHhIXjwO+yVq1anT5//vwdYVAMlVNMsReBwbezxUCoIFcBTaBrnEOrVsFbngiCCygS6erzk6NrwrhAGgb0PhpT45VxkX0iJN3n0PMhY/n5+aeB0SQnyXSqTj8V7F/JLED1syiZANnngD+q76FgKiGfpnMBqagYz2A8xyDkGkV9U+9hGgYz8q9lV7bcgWYfZDoseZw7RphQreR8kk1E6OC5kJlEcvIphIkGw3gVfYxLwuhjOHMOteZQxMlonz59zgfjTyhY6p7B30r97ffrD8Z/cJ6C0TewqV/qORWGwRxSbto44nAXjjjckY68gnYNDRWH/TflKiXDDZzgwpGCwOslQaRNiyQ4Xskd7FPRzIS0FhNPxMQagXhUY8enRZWcY6kCHxMxwTUrNj/Jx6akWXGyRUG4+APBUthR1XNlQamfDg/br/JIm2EsoB7TYRjUVFqMgxlx8Qc96hHw3oNfGl9tvQCVHxwEdiqt/gxMJNEE1Nc91F+ii2iJZExJ0+7MHWVcEOK6TJOLrYGNqC0mBdnBFZuc/9ikFt78Z2PHNHeU0TiY/1DzaUdqCnGX+H34XYxmJO5O8VSoKyM1hy6IeezhL4CN1OFfc/9cyH8dJrUyYhRK9xk3DsUIjGQC/HxTihXsa/isgMw/h1E8lw2yp61DGk9YKoRnNzGi+QlwN8bDP8ziN1Juyp8thkH9Zk3NoRc2apHmmOS5ApNnvMCsnx53mPnLIOfvIeezMAr2MbLKZU3NoWuFiuKFIrhx5hi8UZfht1SPb+x+yLOEclE+ypmNhkEdZ2XN4Vb45i2HE6HUyzHT2tMNJ5th4HsT+J6GRbKpixYt4snBrHeNxjiUJnmR7qxZs0bgaMREwC7ET7uiT2FlzZM31L6MeYqpY8aMmQfe67OGMx+MNDrj0GXiZf4bNmwYijZ7FOCj8GYOw9O4VV5HTJ+/FjUEb8qZg77EnJKSksUzZsyoTV/24ebUqI3DqQpzH0kpjGQk4gbh1x8/zsKmom/FWoCjqpX4fQyjmIsmY36qls+RR9rdYWUcbtozr67qh8KjofSH4dDfCf4C+Avgl0+G4W8NGDfmVsNfDb98Mgz/V4CVwb8S/pUYdpbFujIJeI3e/T/cqtgWl7CKXwAAAABJRU5ErkJggg=="

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAYAAAA850oKAAAAAXNSR0IArs4c6QAAFtBJREFUeAHtXQt4VcW1XnmShBwIiApJyEMICYiIEPIgQUMU0DRYLQ8Rvbm39YpexNYn1SsobVRErPX7KtpSr37FclEpfQiNF6iAlpQEAqWKQAhBEiBBDCEmIYQ8779Ozj45j31OzmM/5oQz37e/PXv2PNas+feaNTNrZgdQP3c5OTlhTU1NSQEBAcmoanJ3dzf7h8JvgN8AP98j+Y6wCFwteG7Cc7Pp3oSwJvjrEVYBfzn85QaDoWLXrl2teO63LqA/1SwzMzO8o6Mjq6urKxf1moSLARGHKxCX0q4LGVbjKsd1IDAwcEdwcHDxnj17LildkF75+TQ45s2bF1pVVZVuAkMuvugMMDJUL2ai3DZIlxLcdzBY4uPjSzdu3NimIz1eFe1z4FixYkVgUVFRTmdnZwFqPgdXpFccUDdxM7LfFBQUtC4vL28XaGdp4zPOZ8CRkZExtr29vQBf5n2QECN9hsMmQkH3KdC9PiQkZF1JSckRX6BfaHCwlNiyZct8MPJJMDbVFxjqCo0Ayj7Eez0/P/8jkaWJkOCYPHlyCPrs+6FLPAsmJrnCcB+NU4F6rkQ9f79///520eogFDh42Nnc3PwApMRSMIpHGVeKq4Y0eTUyMvJ/RBoeCwOO1NTUewGK14CG6CsFETL1rAFIniorK9sg807zIN3BgS4kBbV+C9d0zWsvboE7QdpidDVH9SRRN3AAFDwbuRzXk7hC9GSCoGWzDvILXIUASYseNOoCjrS0tFmYp1iLCl9JeoWn7VuNeZJFe/fu3eppBp6m0xQcUDiDsc5RCGJ/ikvTsj1lkCDpukHHKqznLIfC2qEVTZo1UHp6eiykxQdQOrO0qlx/KwfKajGkyILS0tLTWtRNE3BgJJKHyqwDMK7SolL9uQwA5DzqV4ARTZHa9QxSu4ApU6YUAhS/RjmsgPqd9xxgPi6MjY0Nrqmp4VGNak41cGDFNCgiIuIdAOMnoF4TCaUal8TLOAB8vTkmJiYuKyvrr4cPH2adRHGnSqOxXQUWyT5EBWYrTrE/QysOoJvZjMW8e9SwI1HcCCY7O3sIgLHdDwyrNlTtgfnM/MZIMErpQhSVHJjYGgEkbwPB45Um1J+fcw6A74fA95mYMKt1HtP1t4pJDkauHxiuM17pmPxBMv+VlCCKSA6TjsFdiX8OQ+lWdz+/3aGhoTOV0EG8lhw8KjEpn35guN+QaqTI5vbgdvE2c68zMA1XF3hLiD+9ohxIbmhoiMU8yMfe5OoVOEwTXDyP4XficeAmbyfKPNY5eEocOsYW8MTjPMTjZ7+jqBtKar6nU+0eNaxpEe0gwOFfKxEcTwDHeSzWTfRksc5tcPCyO+w8d/W3kUl8dCvNmlpPNyRdpChDO52sCafifw6mXWVR1HrZa71dVwgBIMWwT81xd7nfbXBgomslavqMrrVVsPCB4Z30yIIzNHfGt7K5nqsPoVffi6PP9ys+ASlbnoqBr2CCjK35XXZugcNkwfUJcncrncvUaBwx/YZGeuHhkzRsCFvkOXeflkZR4doEarnklQ7vvBB133aje7nDHYsylxvZZPPJO7V8wLSvm65Ggw8Z1EGBgd10oTGEWAJ0d/dWN2dKA7386AkKDnZ9QfOrygh6dOUYam7pBUh4WCddM7SdDBGd1HgxiM43hNBFcQFUjfYb66pNarAbYGVjYGGBwSDISW2gO7Lr6aaUJhoU2WlVte+agqjky8G0afsw6obgK3zEPWBwZtePaqHCJV/TS7+Np9vS62nm1As07rqLAKBVUVR5Ksxc1ulvwqxf6vvE7cft6FL30vspOSEaUoO3D3yBS0grce4ennmgimKuEWtDezeE0ie7h9Lr74+kxmZ3vkMnjeH9K+5DJ0B69LntwQbzDkvmfSVCAuPh+WfoV89WCAcM5mQAPr28afX0warDNGrkJYfM1fgFtyO3Z5+ut/N0EBVSYyFe8d4S4dyDc2roP39wVji6bAmKCO+iGRkXaOe+KOglQkiQxOjo6Ira2tovbWm1fHYqOTCnwR3massEovhvSGoGMBQzXVC9WoMNHRgZVUGauK4Aq0zUalP7OizGKTh4UzNSCrl39aF5NUax7bBmAr64MbmZpt7YKApl0ab2dUiPQ3CgOwnBLOhShyl1fMHzElOub9KRAs+Lvj2bdxaI4bh9uZ0dUeMQHHw+BhIJOXRNjLnkc1JDaoDRI1slrwj3OFM7y9IiCw4+Ucd0cIpsIr0DBw20nsPQmx53yjcM1Gw3o0tkcTtze8tFlg00HbWUJJdAhLDT3wwQgQyPaBCQ9iRTe9vVRxYciCXk0FWivqo2jNo7XJq/k5IIc6+oFnLjn2x724GDT+2DoiL04Wy8hP6nHcOEaXBXCenqItq47WpXo2sWj9ub2922QDtwwDi1wDaSiM+/+8twLHDZkS8iqWaaNn82jKoh9UR0cu1uxV1WTGAYcp+IxNvS9O2FUHrytdHU1u4b3cv+wwbYhYy0rYYwz9zutoqp1fR5S0vLdGivjwpDcR+E1NYNoK8qB1La+CbiKWpR3Y69UbTsV9dRa5sVu0Ujd3BlZeXnZ86c+VoizEpymI6Mlt75xL30y0E0/+lxdOj4QCHpXflOHD3zxiiRbTzMfLNtfzM4+JB5xJpjjukjHjbWeWheLY0ffVFIih+cU2u0LxGSOHui5phwYHxjlnMwQJ0KrfUh+/jihvA0+i+frqBb0xuEJZK7uzxMmbe0BkG6iXyGv5GFoY2NjdvRtVTzk1lyQNfIFZbDMoRNGNNM7790hG5MFlNiWJIchE/w8X87DSuyEzQgVFzdiGm2xIEZHAj3GXBkTfyO1vz3Mboqqm/DYMtG0ts/C2aFbJjEFu8COzMOjONA3iXf1tbGslnPH9m4xK8ZmfX088UnKShIGLsIl+i2jHT06wj68aokamgUwvDHkjT2t2GXfhTv0jdKDkyAZCNQeGDk31xHL8LA15eBwdxPSWyhtc+XwzpeSMkXasJDj84BRXQ6Ey2ySxvfSM89yJZUIlPpOm0J2GH32pOVFBoing4i4UHSOfhnecK6hOhLtOrxE5AYwpLoEWG89fJ5bKoibJYQzBnxIIEjWTDizOTwvtU3lh73Wok7i92OJQeJmhUa3FRWE5V9iQ7ay90QMzMvGOdpzBUWw2PEQ6DJyDRODJqsqQgJ7jKK3mgv96OsfgcmbbcQZd1DlJhLtHmHdTnuPF0GGAqeJhozgyh9LtEN+UQVJ93JwT7uA3fXYjOWOOaDoDCOcRHIP+TFgyRB7CnXMWTJvWdowhjvPvWvKrDrG/bznabRYz3GZHOxevTHbe5XjIFx92Ki9R/3pj1eRfSTF3ufPfWxPhU3QhgTQiMueBVWyC6FJ7kW3H7OU16b0/1LZl9XByz1FjxG9If/M0fr09N6meiu/yLa+nf7qP88bB/mbkhoSDctX3QSCrcY+gfjgiWGcODgoeqyRcqMTCaN69l5ZttYLEkWPgHjGz4zoA8nAWPbbvmIqQqdusqzvXNuq5MvRPtQIzjGaF+u8xLvvKWOeKinhEsZRfSCAyMEBsh9MJD7qMhxSZdAxvcfJtpeLB/n6qFEbyyTf+dJKO/i4537ejsMZ5OCsC3uRyBEGOnBaw+rnzhBEWHKjf9vSSPiruTvZfYs583Of9oOBiQSjbf5TCRgfLrHPh2HXHMV/kv+fk9a+Rjuh4YP6KJ2GDAdOGJwP7GCKdCtnOJuRV8qbCp0e1a9KmsmhY8TPQedQc6xbef9TxF98NfetwyMOyEx+gLGuNG9aZTyzZ/1LfFITWdnCBoxYgQL3WidCTEXvwxK2bAofOYquOkZvOpI9Pk++8xZgvwZEiQpgbAjvgcYO0vs43HItbBtZokxFl2WGi4M0oNtTY/ra6l+nkcrwkiOMfEtlJyg7lEFP8Opqc8vkW9SBg7PYWTOJ3IKjHXqAUOi7M6c85JXlzvjIhiKhzDgmDbpO9UYsRv6xiHMebASOmwIEXcHh4/bF8cAOXTMPlwKmTurp6vh7mYwOMfSKOZa6a1y94nJTRQZ0YEjpoKVy9SNnBgXXLIw4MhWCRwsDSwnrtzgkV3UNeutgyLCodC+RXTbVOtwb594HSljQiP9rQTDIX2cgbsVVE9/x7agKQktihOyq1Q5YMgR14Je8LEX5d54H6anXSzjgkcryreIB3zheQ017DS+Pu0BMW4mUauM0XHq6l99VLMlEH1LUx+RNHmt1KSXLbHTUnGYWYhtqLLPt2Yqm5+UW2IMxtM6OcYFdyvNOpVvVewglY4mGB1P9LtVRDyTqYZjhfTXP1cjZyK1eOIKtYwLHq0IITkiccirWu6e7xHxdQ6jQ2l11rasX75H9It3bUOJjm4ljBrswznEMBDvcKnlBoR2Gw/R7dDhRAHGRTAQ0gSPWvVzOd9gDQyGebrbkXPUyMMx4WWIdJRK/fAgHL7bocNp4owLHsoKITl4048WrhGd6Dd19iWxnYecqzxFsEKzfsPP0SrMbViX0jObe7mNxwy6uCbuVup1Kdqm0JZWdZnAayX/vpRoE7oJd9zku+Rjp1yHtZg3YAmm4pLlJR1/5cG4YIUU84b6O7Ulx8tvuw8MZ1w5eqLHHsRZHG/f6XnAPuOCP9dybyuhRPrab9XdNiO32OYt3Tz97qg78jZvTn+2Tl2e9EFjOc9zCAEOPudLTTcG9hpKO16jGTJY6Vx78ztZoy5Pekuy9zEuAg0GA3crWG7S1/E/TM43sH6sjlvxYyzFxymXd9gAzG8UypsgKlWKjkdEdTEugvHfr1acYluNCiUoVSlP8zlWFUGZUY2eJneajldO/7W5x5bjrMxo5eO/wZ4Dl61762dEDARLx6OVqTepP2IpP+lggsWSGHX81YwL6VPlriVBnXJcz3XvoUGUqeLZ4OGQ0rOmydNTdUYeHAvz9Znn4KM0D5brNsFiVDWk8eMBeZZpG8pHOPldDwcOHo0kHec4jHgwggPnX+8QoVGOV4fTN+d11dBFYIORhuKDKmq6fdRSwoMRHMHBwWx4j/1c+ruPdzmZ41aRPEebtB2Fq0gKLOUDqGi3PnxAvdpMeOjZBskHdWDSw4E5rZpssM/7LzuHGY2A7d+oGzJxrH3+SQmEIyztw9UO4T866XWwC+OA8cB1lHQO9gvRtZyrDzX+7ooJ0tJ9LwdbJLFyKzlecV3zgvSk7f3DrddoW6B1aWYcmMEh9TPW8fR5evujGIdL62pStP51oj0bsYf2TaJj2KZwq8J2oa7Q/lnZYPrimG6jFPwGtVf/NIMjPj6+FMQLYfjDkz9/Rveih0ubgJ30M3p2s2ldPlu+r/kgRutiLctrNuHAGGYGx8aNG1kh3WQZU08/S4+6Cyrb9+lZQZmy120ZTidrdFByemnZZMKBMcQMDn7Cv87X9cbT18c/6X3h7QR9idCw9CMnImjtH6I1LNG+KNv2twJHXl7eLmirMG8Rw+3DjOl7+HVGf3dNF4No2ZuJxiGsXnXlduf2tyzfyvwK8+nd2DvLqnK2ZSQ9/WVfGSj22suUpK+Zvmos4F+CPPZqEh3Tbx1FqtvbGzZssFpdspIcHCskJESYrqWH6gAqXJtAxQf739R6Z2cAPYdfbfBUud5Ort2tJAcTePr06bqYmJh8ePXtAC241dUVQJ+WDqXhwy7TmHjj/IzFW9/08l+mnsDPhP6h4zS5xDl0Kfv27t27UnqW7nbg4Bc40IWNjudKkUS4M0A+K4N1DdxNKc0+fVjtmXOh9OgrSdjYrb/EYH4CHE/V1NQcYr+ls+tW+GV+fv5HuLERkHDut5ui6T+Wp1D5SV2HfB7xhffMvL/lWrr3p9frffaGJf0Vpva2DDP6A+xCTAFTpkz5IX6v8K6j93qHB2I/x8I7zuGA1xrhf1PBvDpcGUEvvxNPbNAkksOM6I/27duHLV32ziE4TP84P44kcfbJxAkZcfVlWvrDasqaqI4Fmbc1Zd3iNxujiddLursdstvbYjxNX42Eo/fv398ul4FTalNTUx+BoembcglFCxs18hJ9f3qd8a9IgyLV21rpar35x4S8wrz1H0PokkYbtlylTYoHXWNJWVnZGunZ9u4UHHzEMU44rkQiYUYuthWwfeaD1nLTGuiu3DqaPI71au1cY3MQfVJ8lREUbLgkuKuBEfEothV1RKdTcHAidC8LcVvvKAORw7nLmYSRzbhRF+l6XDwM5kNilHIX8DMd/ivlYUgJlhQHjkTiP7eyOr5SRSqWD6TGQkiNDc4y7BMcnBgA4TX+6c4y8oV3LFX4QDo+MSd2eCuOOOjETvkO4539fAYXd0khABDrCk0Xg6kRU9t8b8LWCZYMFxpDjCMlBsVZ/NfWR91O6Bm5fdEuWZ/3FW8xInyBy6eXSds7Ao1fuqj/oO2rERR6z8ont2efTnYSzDZVbW1tHSbGeAwmzJqLLY3+Z5c5sBpS40NXYrvTQRYiQx76+J3vcoDbj9vRJecyOIC2Fqz3L0Kuyml0LpHoj6QQB7q5/bgdXc3PpW5Fygx/Kq5E98K7e/3di8QU37mvwujkN+6Q67LkkDLF2Hg5hkHF0rP/Lj4HuL243dyl1KWhrG2m6enpsZ2dnQcxe6rbzhtbmvzP8hwAMM6jO5lYWlp6Wj6G41C3JQdnZSqoAF6//uGYtyK84fYp8AQYTLxbOodlbbH+XxEbG8tnit1sGe73i8MBrLi+BD1jracUeQwOLhAA2QmrMV61xWkVficSB9CdvAtg4DeHnjuPuhXL4hITExeBkM2WYX6/vhzg9uB28ZYKjxRS20IzMzPD29vbt6OLybJ953/WlgMARjGMhWdIm6G9Kd1rycGFMyFhYWGzQZidHaI3xPnTuscB5j+3gxLA4JIVkRxSFbB6OwIEboMEGS+F+e/acICBAb7PxAxorVIlKiI5JGKYsMjIyGkg1D9JJjFFgzvzm/muJDCYbEUlh8QHkw7yIZA8Wwrz39XhAICxGTrGPUp1JZZUKio5pIyZUGjLd4Pwd6Uw/115DjB/mc9qAIOpVUVyWLIBWxwKscXhOS3Ksiy3n/u7eYILWwrcXi9xhy+qg4OJgRV7Hm7r0M3412LcaR2ZuJAW+KUQFWCCq0jmtaJBqnQrthRyRXjxBxXzK6q2zHHjmfnHfNQCGEyWJuDggnjxBxp1Dryv4PIv2IEJbjjm1yvMP08X0dwoyxxVk27FXJrJk5aWNgtL/rwgxOsyfuecA9VswYVd8FudR1P+rVcLb56SY7IoY3Bw+emmu6fZ9dd0bCW+Gtd8dCNH9aikLpLDsqKYVU3B81u4pluGX+H+naj/Ykxq6QIKife6g0MixLSzjr+UaCnsCrzXoM5PAxT/K0LdNVNI+6osM4T3bkIjX4K41X3F72fvq7neXH9RgMH8FUZyWDY2pEgIJnnux+TZswhPsnzXz/wVqOdK1PP3AAXrGEI5YSSHJVeYUXygyOzZs1PwRd2Lq8zyva/7UZ99XC+uH9dTRGAwj4WUHHKNn5GRMRYGRQVg6n2YaR0pF0fkMNB9CnSvxyLZupKSkiMi0yrR5jPgkAhesWJFYFFRUQ7mSQoQNgeXGKeuSQRa35vxuAnzFOv4AFjQ3mX9WuwnnwOHJTvnzZsXWlVVlY4+OxfhufgyM3APtYyjsb8NEoL/W7MDusQOPmTe8ixxjWnxujifBodt7U12JNkAyXS8m4QrGRfPwqqhW7EU4FEV/yzvAECxE13GbrWWz1GG5q5fgUOOe6ajq5LQeAyUZACH/UPhN8BvgN9452f4wxHGp+A2wd8Ev/HOz/DXI6wC/nL4yzHsrHB2ZBLi+bz7f3LNMt2VmaD1AAAAAElFTkSuQmCC"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAYAAAA850oKAAAAAXNSR0IArs4c6QAAEA5JREFUeAHtXQtsHMUZnrPPxjF3PJIU8CO2QmISECAeSWzLIdhBDcK1Rds0PFOrFRAkSgUIaItQJNqoDY+CiiqhhkdamRAIbqCtgykPJZEg8itGUYkClguVL4lN2xhMbRzi1/X7znvH+m7vfI/dvdm7GWm1c7OzM////d/N/DszO+sSGR5qa2sLRkZGKlwu1zKouszv9zM+H3Ev4l7EefbwjLRCHGP4PYLfo9p5BGkjiH+OtD7EexHv9Xq9ffv37/8avzM2uDJJs+rq6nmTk5M109PTa6HXFThIiDIcOTjMDtMo0IejF8cHOTk5e91u94H29vaTZleUrvIcTY4NGzbk9/f3V2pkWIt/dBWAzE8XmKh3HK1LB857SZby8vLOlpaW8TTKk1LVjiPHI488ktPW1lY7NTXVBM3X4/CkhIC1N4+i+N25ubnN9fX1+yE7WxvHBMeQo6qq6sKJiYkm/DNvRQuxyDEIa4JC7qOQ+6W8vLzmjo6Oj5wgv9TkYCuxZ8+eGwDk/QB2hRMAjUdGEKUb+Z5qaGh4VebWREpyXHnllXnoszfCl3gIIFbEA7hD8/RBz63Qc0dPT8+EbDpIRQ4+do6Ojt6GVuJnAIpPGdkSfGhNHvd4PC/I9HgsDTlWrFhxM0jxW7ChOFsYYaDnAEjywMGDB182uGZ7UtrJgS5kObR+Bked7drLW+E+iHYXupqP0yli2sgBUnA0cjOO+3HkpRMESeumD/Ikji0gyVg6ZEwLOVatWnUtximehcLZ5Fcka18fxkk2dXV1vZVsAcneZys54HC6Mc+xBcL+HIetdScLkCT3+SHHY5jP2QyHddIumWwzUGVlZSlai1fgdNbYpVym1QNn9QBakZs6OzuP2aGbLeTAk0g9lGkGMRbYoVQm1wGCDEG/JjzRtFmtZ67VFaxcuXILSPEH1EMHVIXUESCOt5SWlroHBgb4VGNZsIwcmDHNLSwsfB7EuAfS29JCWYaSfAW7gOuakpKSspqamjeOHDlCn8T0YInRuK4Ck2S7oECj6RKrAmchgG6mFZN5N1qxjsT0RTCrV68+G8R4RxFjlg0t+0GciTeeBM8yuxJTWw4MbBWByW9D4IvNFlSVFxsB4H4YuK/DgNlg7JzxXzWt5SBzFTHiB97snPxDEn8zWxBTWg7Nx2BXosYwzLZ64uW9n5+fv84MHyTlloNPJZrzqYiRuCGtuGM17UG7pFp4ygVoj6s3pSqIut9UBJYNDw+XYhzkb6mUmhI5tAEujmOoIB8Cl6c6UJa0z8EhcfgYe4BJ0mXIh2fGSeSHk9qQ7FB7UobVJtEOgRxqrkRyPoEcQ5isuyyZybqEHVJOu2uzq4oYkhOD4vEPTHvRbomKmzA5uB5DPbImCnN689Ne2jqahARJqFvRVnC9iRoSui8hiVRmqxDwo3u5LpEVZXEbWVvzyTe11NI+q8xnfbk+VHFhvGtSE+lWuBhYEcN6A1pZA+1HO8YV4mo5tNcH/oES1SrxuGCVOhNXtV8az2sP8bYcfK9EEUNqm8ctHO1Ie84Z5iQHWo1bUErdnCWpDE5CoE6za0yZY3YreDbmlkmfoIRsfkUxJoAOvjiAVx2WxHo3N2bLwZeaZSbGT246Ln5xW784Z/64g22UNtGLNftGFSBqy4Fmh33TP3FI+YSy4KwJ8ZfffShOy/eLiUmXeH3vQvGnvxaJE18o1yiqtSMv+JC0FM4pndSIELXl4P4YyC0lMajFj64fDBCD8Ty3X9yw7r8Bsty78ajwFNr2Uhird3Io0+xsqIMhObijjrZxiuFN6U5kN/L9a05EiJGf5xffuWpITPujNogR92R7Au1MexvhYJiobbVUYXSDDGk//u5ngdbCSJYdb5wnxk6mtEzFqNhMTqvQ7B2hoyE5kIvbIkgZzlt4SlxfG9lqUNgv/ucWu976lpRySy6Uob0j2l9t174jsirz8B394vo6Y3J0fugVH/Z5pBR9asolXni9SErZKBRejLoofJfDiDl+LE5tklWDknNOiYY1xsSgzJWXjAQOGeU/NZ4jNTk0u3ODvlCY1a3QMcHKoVtDVyWL3L5+UOQqd8ISq9Du4Y7pLHJwZ2AsDFlkSe0pFlpW9LW4roa7D6hgBQK0O+2vL3sWObCcTNou5Q60GjmzpNWroeJmIBBu/xDc3GQeFaw3oxKzy1hcclKsq/7c7GJVeZEIrNd4ELgSIge/PoAUKV39TT8YFK6I56pIzVRKygh4NB4ECgo9rWCkbG3KRVtQwNKyMXFN5ReGJQ+P5IrnXisS/ml5mHN/01FHO80aD94j4CFyIC4lOe5EqxEtPL1jkXjjPbnekLh34zGQw5KNdqLBYHY6efBLFhroVviWPLxVfshGqrB88Zi4esWwoUy+wdPEmwf4NS4VzESAPCAfWGaAHBgAWY14Or9wZKjfxobPDNOZ+NzuYjEtUXcSVVDnXcjX+DBDDrClTkYdtj5fLp79c5H4Kmwi7V/HC8Tb7WfLKHJGyBTkQ6DlgEb8WJ50gaR4/rVi0fjTizH0zNnWGXHZavjVtLyV9grwIeiQ8iuK0obRMbfY1lIiXvn7uaJxzZB4t8P0vdGk1T1NggX44NYWEUuz4uuC8rGYeHQd9ooLyk/GzJPOizlRnqpdLj/kjq7bl6Nu8e8hady+MvLChbWilwBMvrAkReja2SOFHHYLsfvdheKx7eV2Vxurvks5Cyt1lxJLenXNOgTIC3p4ihzWYezkkgPkuMDJGijZrUEAj7MVbDnUgIE1+Dq6VHQr80kOr6O1UMJbhYDXjebDEeTgAt2ej8xbUXDJ0q/EvIJpQ2AP9XrE+ESUZ1LDO+JLXHDmpFiySN7HcL0W5IUbzYcXEX26lPHRsRxx92/Mc492PnpELC0zNtRDT58vhobNf62SSw+23vOplPiGC0Ve5Dil5QgXXv22FgHyQvkc1mLs5NK9HAQLzN07WQslu/kIkBdsOaIP+JtfpyrROQiM0ecYcY68SlK7ECAv2K2M2lWhqsc5CJAXquVwjr1slTTYcqhuxVbYnVEZWo4ROqSKHM6wl91SjrBbUe8Z2g27A+ojL+iQ9jlAViWizQiQF+xWem2uV1XnDAR6OSvrCHJwv9HGq6Pv6pMo3md4om9HyTf6R8fM3yXmoiXOGW8kL9zY4rgPW1hz7pqtiLSh4LRpsfnOflvku++Hx2ypR+JKpsmLHG3va5/EgirR7EfAR14EWwtHdC32Y5S1NQb4ECTHB1kLg1LcCIEAHwLkwP7Xe41yqLTsRCDIhwA53G73AcCgvkuRnVwI13pc48PMzj7t7e0n8fnxDjy+rAnPaffvF/eca1qVfCQ9d4Hh1yKwI9B8MYztsI3CVVd8KcqKThldwkvcZ4vBE+a/03q473TD+uxOxOBXB/nAevXosGtJOzl+v7PUNDwuOn8sKjlebD1PfHrMeBEcCRWNHPyuS/fhM0yTUcKCQi5G0CHFHp/K75DQULaLpOdBiBzl5eWdkEQt/LHdHFJVOKrxICBUiBwtLS10SHdLJaoSxm4Edms8CNQbIgd/4VvnzXZLo+qTB4Fw+88iR319/X54q0flEVdJYhcCtDvtr69vFjnwSYVpPM6+pM+g4tmBAO1O++u1nUUOXsAXe1TXokcoS+JGdo8gBz/lhCbmYJZgotQEArB3d/gnvAhMBDk0tJ7UzuqUHQg8ZaSmfoQ0dL2hoeHV1tbWXyHB9s+HvrPtUEiOVCOewqlUi4i4//H7PhGT+AK22WHPewvF0zvMGx1OQL4+2vvgwcjOwpAcdExWrly5FZ9X2J5AJaZkPdNrvkFNEUwr5PR5s3w204ouyE+P3hgR3RruiAaVitatYNP56R3I5AtmVOeMRMCn2dlQuajk6OnpmYCj8rjhXSoxIxCgfWnnaMpEJQdv8Hg8L+A0EO1mle5oBAY0+0ZVIiY5tMXHD0a9W11wLAJoNR7Q7BtVB0OHVJ8bzc5O7I9+O9Lq9OlOjnN/vEnsThgtDH3pFsf/M7Ogh7n48cFvDv9MPJSu/WYe8U185jOn+I18jM98wNA/E9fuFcj/zTUk2hf24enk5bmqo+xzBpBjOTJx83zzt9ibs3aVwWQE6GNcij/9x3OVG9drXYODgyeKi4sLURg/96WCsxF4AsTYFY8KMX2OsAK24LcvLE39dBYCtB/tGFeImxxg2xjm+zehVPl3tI1L9azL5Kf9aMd4NY+rWwkWdvz48U/QvRTgt+pegqA45/wYnNBtiYgbd8sRLBQv2G7GYxDfc1HBIQjQXrRbouLG9bQSXmhlZWXp1NTUISwQketz0OGCqt94hHYNoTu5rLOz81iicCTccrACraImRJX/kSji9uanfZqSIQbFTMjn0Os1MDDQV1pays1f1ujTVVweBDDj+mv4Gc8mK1HS5GCFIMi+kpKSMkQvT1YAdZ81CKA72Q5i3JtK6Ul1K/oKFy9evAmCtOrTVDy9CNAetEuqUiTlkIZXWl1dPW9iYuIddDE14dfUb3sRADEOYLHwt4MvQ6dSe8otByunIAUFBY0Q7HAqwqh7U0OA+NMOZhCDkpjScgRVwgRdEQR8Gy3IxcE0dbYHARIDuK/DCOigWTWa0nIEhaFgWEByFQRVg2RBUGw4E2/ibiYxKLapLUcQB80H2QUmNwbT1NkaBECMVvgYN5rVleilNLXlCBZMQeEtfw+Cbw+mqbP5CBBf4mwFMSitJS2HHga84rAFK5wftqMufb0ZHvdzgKu7uzvh+ZJEcLGcHBQG+43V49SMbkbNxSRiHYO8aC2GkNyEAa42g8umJlnSrYRLSEU4+QPFlKMaDk4Cv4kfcbSDGBTLFnKwIk7+wKOuRfRRHGrCDiAkEIjXo8Qv2Um0BOoKZbWlWwnVpkVWrVp1Lab8OSHEeRkVYiPg4wqurq6ut2JnM/9qShNvyYqjrSgjOVh/pXZOtrhMvY+rxJ/AcQO6kTlXilsBQlpaDr0i2msPzyCtTp+e5fF90P8uDGqlhRRB7NNOjqAgIMktiPOfUhxMy8IzXz19EKTYKYPutjmkcylLQLDOcQk88ruR1zdX/gy77qPe1F8WYhBfaVoOvbHRiuRhkGcjBs8eQnqF/lqGxfu4Pwa3QQAp6GNIFaRpOfSoECiM/v2xsbFxOf5RN+OI3HZGf4PD4tCnm3pRP+opIzEIqZQth5Gtq6qqLsSCoiaAeitGWhcZ5ZE5DXIfhdwvYZKs2WhzNhlldww5guBhi6Kctra2WoyTNCFtPQ5P8JqEZ+4lvxvjFM3cADba9koSyh0QyXHk0AO5YcOG/P7+/kr02WuRvhb/zCqc8/V5bI6Po4XoQJ174Uvs5Sbz+r3EbZYl5eocTY5w7bV1JKtBkjpcuwLHMhwchbXCt5pGuXyq6sXxAUixD13G+1ZNn6MO20NGkcMIvdra2gJ8N7cCxiNRloE4jM9H3Iu4F/HAmb8Rn4c0fqVoBPERxANn/kb8c6T1Id6LeC8eO/vm2hkHeR0d/g+JohKnc58iFgAAAABJRU5ErkJggg=="

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAAoCAMAAAC8TlQPAAABVlBMVEUAAAAtLS0iIiIiIiIiIiIiIiIjIyMjIyMmJiYiIiIiIiIpKSkpKSkiIiIqKioiIiIjIyMiIiIjIyMlJSUiIiIiIiIiIiIjIyMjIyMiIiIkJCQlJSUiIiIkJCQyMjIiIiIjIyMjIyNGRkYiIiIjIyMiIiIiIiIiIiIkJCQmJiYiIiIiIiIjIyMiIiIjIyMiIiIiIiIjIyMnJyclJSUjIyMkJCSAgIAiIiIkJCQiIiIlJSUjIyMjIyMiIiIjIyMjIyMjIyMjIyMjIyMzMzMjIyMiIiIjIyMmJiY3NjI0NDQnJycvLy8zMzMzMzMzMzMnJyczMzMzMzMzMzM0NDRAPjAzMzMzMzMzMzMzMzMzMzMzMzMiIiL92QAzMzNZUylnXiankhby0AP61gFLRy1TTiuejBi1nhPtywR1aSKDdB+QfxyvmRTdvwjkxAfDqg/LsA3Nsg3Jrg0vDPZEAAAAW3RSTlMAB/fz8N77iC2mnA4frhfhoMNaKefTu850SkY86TALy5JqA8a3YLN/ZE7QbkLZ1ZaNeTUbv1QChXJnJOzl7qmRfFH563GjghP+XTgF86GYYvrYs3L+0IDjvoyq49GNDwAAB/dJREFUaN7tmGd70lAUx09SKhvK3iijtAwpgq1KW1dt3Xsbr3tvv/8bz7iBQNQn+k6f/l6QNOlN7ln/cwD22Wefff6a+rUdNeHKtTr8+9xTM9yGX7AeRPwwR8RCQnzmd7AOTAmXjPG4vOQkD3OcjyMr4KQib6sGiQpU1tfXe+CRyzvq2+MJr9VV+AUJCzkETpZyuRxdXcghWcvBCWAOWZZp4LFjOTkGsNZoNNCy4gJj0tWzch4CIlXGK+YQIE63VqCLnz7wSFs9mVr09o66CLMsp5GD6EmLKMI5+rsBRPiA5SBjOYhghEKhUNqyNvFQsmZAd0fFPX654HLGeMs+DdJJAvgJqY0qeOGWejY16am69dPg+NE0OvoMaNExKKloOTi8jS4mG008dvBuaHLrwKrlxDTkZt8fO2i5SAHUshy2JUDO8QPya7wQM9wDsRsX3k4seqZ2Yq5aIQLkVyQK4KNjTfIOz7J73dXVBlstCWbKEyRlhETqEH522u32kqSRDo8vvO0jFni/PiaONxsS9ZWjnbhpzbAKHrit3k0s+nRBtWGOIxaSAzD4vcsQsIihuCOCJvhSsVhlOAxQTpzBWwMQxhYjNpzETyyd3lk8ngLkBF1vbgSYGv+TnGMEq5LP+cOWiwB44Kb6Ylv04om65rrPFXIOoGARMeDXm1rpk46S3z158mScwobHIN4vNpskGPFms1lhf0RguMDpRFRDKCirFQtxJWVPTs/M3ztQzm14sGioXr6wTfqgbrrKL8DPwlziZE7Y5SoB3HWkRd5y0ACGdnzdLrqDkNqk1K2DIIUyT4KWHW+QceQv3+LBPl9PXhqHwRvX1Afboq9KXXR5wc8JYlfGEX30s6PPWlO2j1kO9kgOfeYBcoeJjg/S2gjH0IApUp/z+q6LKRFLxepgx6x5hLjkwSLjivqkLXr+Uim1UwIn2oIkOVxSecRHrrg2q9KlEkngZnFGu+gpy5ZmUepwnOE/+v0VzOLTRGFjm5SyyTdyzY40CcQ4y8YJhqNTFDyYdHHalF6/evXqpboPM5S0csOKbE5XD4taLYsv21pjj45iNENEiKO4gLzbtDQtVo0Op7B2kNh/osJ/SiaM4RTFNDx5a2HaRSac92DSA/XxsYPP6kYdnITsceegHh3WxDShZgmDy2xqIZpItC77WOrhvDgX/e3nvPNNdjaCsJyMuZT8+cPceQYmxWqqspPS6ZmT1ufBooi68Nxh0fMnc+OQsS3NXudbUU82u7O1sCxN3qQ4nCzprn9CRCqNtw3fTEumlCXSevlsERKFfD5/wrHL5KpQ9DSxvncG6Z26OSsrrKNxe4M+g/0rjZYGo02LSQdDe3iarZHAHZNpCI7yrRzGatgW60ZGeFFqJBklI4NYSnOYkYnKulkDb03pu8OiD2onAjOctEWopUeHokVUJMUdUF6eI6ePDkp+xOQ6rQvvyvl1LsitKo3KC1JKc2y3dT67kPVe2FHP3iDSmT6qG3N6Fzb10FU1dYIdk0Y7qRVz7+zEpAruMxPT7uziPSpDDLKdd9kxXUlO6n+cOs5sUQLgsduWFJHW5yYFXnioiCfSli64h3DeLScgEdPpdJTzfXFx8fBSCtYbnU4nl8Gt90gokiTx0lnK+KUDVaxZsJt/gtcSpylcAKkMskeGRhN4lnU0Djc+8MbFq1d31GsWuzvqIcyRtQsnpEeCy+ak0RqnDk0ZYshCfhKQJRHiCG4By6vVRCtpVF2wzQpMHhyUvC6zu/I8LzgG5a1+/7CoSR8xud97pXpFfSaxe6VuzY8OI94E9oKNsh4dLk0bbdGacnaVMor+KZXGJiUyTN8Nu1voEp9jXBqIkJrkqiH3uHXueEN2Wjc1GRyHWsolcmWZ373GST2lifWpuuua7/KiCbYlAbmiG+3AmpKl2LAIkPtPy5cMytESqQu5Go0g0uFpA1+15PG0ZKHOT5ZCW+MLkKIl26PJUC8K7v0b4HuX2GGWxdmLMuhJf41O65TSopFIJDYpBthjfbrrZDIVLBLcFJq01dOitwctvWVClI+j4xuxsVk96PMeMnyhzs19ASt2TeIWBo+c52+Az9SVIcyR6tvDkLFl/+qwKVpbFcfF2TSJX0FPYnlAYmhAFLe6VLNE+ALc2GSB7llR+jB7ErHTYKTt+2FpuWzxLj01ynHrg1euU959cYkdclonf7EgsenJ2/RXh64W6wDtpF5ft+s/HdNdjLaRPCUX+xRoYiT1b9JDBoPBkRQ+oIuM8WKt28UiJecgxRq7IGyySOZ4KmM8Dnmf7qh74EICH6vYzVRrkS6WLPmw2z3eobct8uVTMoyWePBOD6joyC7aVE2PPok8zvKtskwKiy7O4YOPh5DduB7Atkl8QqeQQRu8EcMh7+1L9QhcjFjKCrCi1Zeqc0MSr8K9d0pNCn0DhYCn8B4FCO3LQG+B1/IyYSiF4cZWgPLMd6e062cHL788kNgZ4IL22RxysGRykP4qPVIGT02TB+qgASWtkCdy0eJ5Uex6n2Vwgm9DepwbrQCp2ZlO3q4F1xtX1ev36n4M3IwqKYODRWR6oDGqVbrsL2vSuZXqoUymxSb7W63WGZj8HlaQUW+TBbq8qA2mY7Zy1LRcdHDdqiWUmwXufumpMzxHSakrv7M/dubMmWIE/phIqVQycPny8nKkgh+9arhYKBRSUE8m11OUxIaL+k9HgbBQBY8Y13buXoJ99tlnn/+CH5pysf842RV/AAAAAElFTkSuQmCC"

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @version 0.1.0
 * @date 2018-01-10
 */
!function(e,t){ true?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["fe-report"]=t():e["fe-report"]=t()}("undefined"!==typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),a=n(2),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),i={dataKey:"",mergeReport:!0,delay:1e3,url:"",getPath:"",postPath:"",random:1};return n.config=a.a.assignObject(i,e),n.queue={get:[],post:[]},n.getUrl=n.config.url+n.config.getPath,n.postUrl=n.config.url+n.config.postPath,n}return i(t,e),s(t,[{key:"reportByGet",value:function(e){this.sendData("get",e)}},{key:"reportByPost",value:function(e){this.sendData("post",e)}},{key:"sendData",value:function(e,t){this.catchData(e,t)&&this.delayReport()}},{key:"delayReport",value:function(e){var t=this;if(this.trigger("beforeReport")){var n=this.config.mergeReport?this.config.delay:0;setTimeout(function(){t.trigger("beforeSend")&&t.report(e)},n)}}},{key:"catchData",value:function(e,t){return!(Math.random()>=this.config.random)&&(this.queue[e].push(t),this.queue[e])}},{key:"report",value:function(e){var t=this;Promise.all([this.getRequest(),this.postRequest()]).then(function(n){t.trigger("afterReport"),e&&e.call(t,n)})}},{key:"getRequest",value:function(){var e=this;return new Promise(function(t){if(0===e.queue.get.length)t();else{var n=e._getParames("get"),r=e.getUrl+"?"+e.config.dataKey+"="+n,o=new window.Image;o.onload=function(){t(n)},o.src=r}})}},{key:"postRequest",value:function(){var e=this;return new Promise(function(t){if(0===e.queue.post.length)t();else{var n=e._getParames("post"),r=new XMLHttpRequest;r.onreadystatechange=function(){4==r.readyState&&200==r.status&&t(n)},r.open("POST",e.postUrl,!0),r.setRequestHeader("Content-Type","application/json");var o={};o[e.config.dataKey]=n,r.send(JSON.stringify(o))}})}},{key:"_getParames",value:function(e){var t=this.queue[e],n=this.config.mergeReport,r=n?t:[t.shift()];return n&&(this.queue[e]=[]),r.map(function(e){return a.a.serializeObj(e)}).join("|")}}]),t}(u.a);t.default=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e),this.handlers={}}return o(e,[{key:"on",value:function(e,t){return this.handlers[e]=this.handlers[e]||[],this.handlers[e].push(t),this.handlers[e]}},{key:"off",value:function(e){this.handlers[e]&&delete this.handlers[e]}},{key:"trigger",value:function(e,t){var n=this,r=t||[],o=this.handlers[e];return!o||o.every(function(e){return!1!==e.apply(n,r)})}}]),e}();t.a=i},function(e,t,n){"use strict";var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o={typeDecide:function(e,t){return Object.prototype.toString.call(e)==="[object "+t+"]"},serializeObj:function(e){var t="";return Object.keys(e).forEach(function(n){o.typeDecide(e[n],"Object")?t+=n+"="+o.stringify(e[n]):t+=n+"="+e[n]+"^"}),encodeURIComponent(t.substr(0,t.length-1))},stringify:function(e){if(window.JSON&&window.JSON.stringify)return JSON.stringify(e);var t="undefined"===typeof e?"undefined":r(e);if("object"!=t||null===e)return"string"==t&&(e='"'+e+'"'),String(e);var n,o,i=[],u=e&&e.constructor==Array,a=arguments.callee;for(n in e)e.hasOwnProperty(n)&&(o=e[n],t="undefined"===typeof o?"undefined":r(o),e.hasOwnProperty(n)&&("string"==t?o='"'+o+'"':"object"==t&&null!==o&&(o=a(o)),i.push((u?"":'"'+n+'":')+String(o))));return(u?"[":"{")+String(i)+(u?"]":"}")},assignObject:function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}};t.a=o}])});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

/*!
 * @version 0.2.1
 * @date 2018-03-06
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4).default


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Events=function(){function Events(){_classCallCheck(this,Events);this.handlers={};}_createClass(Events,[{key:"on",value:function on(event,handler){this.handlers[event]=this.handlers[event]||[];this.handlers[event].push(handler);return this.handlers[event];}},{key:"off",value:function off(event){if(this.handlers[event]){delete this.handlers[event];}}},{key:"trigger",value:function trigger(event,args){var _this=this;var arg=args||[];var funcs=this.handlers[event];if(funcs){return funcs.every(function(f){var ret=f.apply(_this,arg);return ret===false?false:true;});}return true;}}]);return Events;}();;/* harmony default export */ __webpack_exports__["a"] = (Events);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_collect_animation_fps__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_collect_scroll_fps__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "collectAnimationFps", function() { return __WEBPACK_IMPORTED_MODULE_0__core_collect_animation_fps__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "collectScrollFps", function() { return __WEBPACK_IMPORTED_MODULE_1__core_collect_scroll_fps__["a"]; });


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return collectAnimationFps; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_collect_fps__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_collect_fps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_collect_fps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(1);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var doc=document;var collectAnimationFps=function(_Events){_inherits(collectAnimationFps,_Events);function collectAnimationFps(options){_classCallCheck(this,collectAnimationFps);var _this=_possibleConstructorReturn(this,(collectAnimationFps.__proto__||Object.getPrototypeOf(collectAnimationFps)).call(this));_this.config={duration:options.duration||2000};_this.fps=0;_this.animations=[];_this._endCollection=null;_this._eventFunc=_this._collect.bind(_this);return _this;}_createClass(collectAnimationFps,[{key:'start',value:function start(){var _this2=this;this._endCollection=__WEBPACK_IMPORTED_MODULE_0_collect_fps___default()();doc.addEventListener('animationstart',this._eventFunc);setTimeout(function(){_this2.stop(function(data){_this2.trigger('end',[data]);});},this.config.duration);}},{key:'stop',value:function stop(cb){doc.removeEventListener('animationstart',this._eventFunc);this.fps=this._endCollection();cb&&cb({fps:this.fps,animations:this.animations});}},{key:'_collect',value:function _collect(event){if(!this._isRepeat(event)){this.animations.push({name:event.animationName});}}},{key:'_isRepeat',value:function _isRepeat(animation){var animations=this.animations;for(var i=0,len=animations.length;i<len;i++){if(animation.animationName===animations[i].name){return true;}}return false;}}]);return collectAnimationFps;}(__WEBPACK_IMPORTED_MODULE_1__events__["a" /* default */]);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports=function(r){function e(n){if(t[n])return t[n].exports;var i=t[n]={exports:{},id:n,loaded:!1};return r[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var t={};return e.m=r,e.c=t,e.p="",e(0)}([function(r,e,t){"use strict";function n(r){return r&&r.__esModule?r:{default:r}}function i(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;if(!r.requestAnimationFrame)throw new Error("requestAnimationFrame is not available");var e=[],t=function(){return e.push([!document.hidden,Date.now()])};document.addEventListener("visibilitychange",t);var n=!0,i=[],u=function r(){n&&(i.push(Date.now()),window.requestAnimationFrame(r))};return window.requestAnimationFrame(u),function(){return n=!1,document.removeEventListener("visibilitychange",t),(0,o.default)(i,e)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var u=t(1),o=n(u)},function(r,e){"use strict";function t(r){if(Array.isArray(r)){for(var e=0,t=Array(r.length);e<r.length;e++)t[e]=r[e];return t}return Array.from(r)}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function r(r,e){var t=[],n=!0,i=!1,u=void 0;try{for(var o,a=r[Symbol.iterator]();!(n=(o=a.next()).done)&&(t.push(o.value),!e||t.length!==e);n=!0);}catch(r){i=!0,u=r}finally{try{!n&&a.return&&a.return()}finally{if(i)throw u}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return r(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.default=function(r,e){var t=r.length;if(t<2)return 0;var n=r[r.length-1]-r[0],u=n-i(e),o=u/(t-1),a=1e3/o;return a};var i=e.getTotalHiddenTime=function(r){return r.reduce(u,[]).filter(o).map(a).reduce(c,0)},u=function(r,e){var i=n(e,2),u=i[0],o=i[1];if(u&&0===r.length)return r;var a=r[r.length-1],c=r.slice(0,-1);return u?[].concat(t(c),[[a[0],o]]):[].concat(t(r),[[o]])},o=function(r){var e=n(r,2),t=(e[0],e[1]);return null!=t},a=function(r){var e=n(r,2),t=e[0],i=e[1];return i-t},c=function(r,e){return r+e}}]);
//# sourceMappingURL=index.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return collectScrollFps; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_collect_fps__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_collect_fps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_collect_fps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(1);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var win=window,doc=document;var collectScrollFps=function(_Events){_inherits(collectScrollFps,_Events);function collectScrollFps(options){_classCallCheck(this,collectScrollFps);var _this=_possibleConstructorReturn(this,(collectScrollFps.__proto__||Object.getPrototypeOf(collectScrollFps)).call(this));_this.config={// 定义快速滑动的阈值
// 2代表一秒滑动两个屏幕的距离
threshold:options.threshold||2};_this.fps=0;_this._eventFunc=_this._addScrollEvent.bind(_this);_this._timer=null;_this._scrollStart=false;return _this;}_createClass(collectScrollFps,[{key:'start',value:function start(){var _this2=this;doc.addEventListener('scroll',this._eventFunc);var lastTime=void 0;var endCollection=void 0;var scrollTop=this._getScrollTo();var screenHeight=win.screen.height;this.on('startScroll',function(){lastTime=win.performance.now();endCollection=__WEBPACK_IMPORTED_MODULE_0_collect_fps___default()();});this.on('endScroll',function(){var now=win.performance.now();var curScrollTop=_this2._getScrollTo();var distance=curScrollTop-scrollTop;var speed=distance/screenHeight/((now-lastTime)/1000);lastTime=now;scrollTop=curScrollTop;_this2.fps=endCollection();// 滚动超过两屏，且超过阈值才触发
if(Math.abs(distance)>=screenHeight*2&&Math.abs(speed)>=_this2.config.threshold){_this2.trigger('end',[{fps:_this2.fps,speed:speed}]);}});}},{key:'stop',value:function stop(){doc.removeEventListener('scroll',this._eventFunc);}},{key:'_addScrollEvent',value:function _addScrollEvent(){var _this3=this;if(!this._scrollStart){this.trigger('startScroll');this._scrollStart=true;}clearTimeout(this._timer);this._timer=setTimeout(function(){_this3.trigger('endScroll');_this3._scrollStart=false;},100);}},{key:'_getScrollTo',value:function _getScrollTo(){return win.pageYOffset||doc.documentElement.scrollTop||doc.body.scrollTop||0;}}]);return collectScrollFps;}(__WEBPACK_IMPORTED_MODULE_1__events__["a" /* default */]);

/***/ })
/******/ ]);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.GER = factory());
}(this, (function () {

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index_min = createCommonjsModule(function (module, exports) {
/*!
 * @version 0.1.0
 * @date 2018-01-10
 */
!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"===typeof exports?exports["fe-report"]=t():e["fe-report"]=t();}("undefined"!==typeof self?self:commonjsGlobal,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r});},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),a=n(2),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),i={dataKey:"",mergeReport:!0,delay:1e3,url:"",getPath:"",postPath:"",random:1};return n.config=a.a.assignObject(i,e),n.queue={get:[],post:[]},n.getUrl=n.config.url+n.config.getPath,n.postUrl=n.config.url+n.config.postPath,n}return i(t,e),s(t,[{key:"reportByGet",value:function(e){this.sendData("get",e);}},{key:"reportByPost",value:function(e){this.sendData("post",e);}},{key:"sendData",value:function(e,t){this.catchData(e,t)&&this.delayReport();}},{key:"delayReport",value:function(e){var t=this;if(this.trigger("beforeReport")){var n=this.config.mergeReport?this.config.delay:0;setTimeout(function(){t.trigger("beforeSend")&&t.report(e);},n);}}},{key:"catchData",value:function(e,t){return!(Math.random()>=this.config.random)&&(this.queue[e].push(t),this.queue[e])}},{key:"report",value:function(e){var t=this;Promise.all([this.getRequest(),this.postRequest()]).then(function(n){t.trigger("afterReport"),e&&e.call(t,n);});}},{key:"getRequest",value:function(){var e=this;return new Promise(function(t){if(0===e.queue.get.length)t();else{var n=e._getParames("get"),r=e.getUrl+"?"+e.config.dataKey+"="+n,o=new window.Image;o.onload=function(){t(n);},o.src=r;}})}},{key:"postRequest",value:function(){var e=this;return new Promise(function(t){if(0===e.queue.post.length)t();else{var n=e._getParames("post"),r=new XMLHttpRequest;r.onreadystatechange=function(){4==r.readyState&&200==r.status&&t(n);},r.open("POST",e.postUrl,!0),r.setRequestHeader("Content-Type","application/json");var o={};o[e.config.dataKey]=n,r.send(JSON.stringify(o));}})}},{key:"_getParames",value:function(e){var t=this.queue[e],n=this.config.mergeReport,r=n?t:[t.shift()];return n&&(this.queue[e]=[]),r.map(function(e){return a.a.serializeObj(e)}).join("|")}}]),t}(u.a);t.default=f;},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e),this.handlers={};}return o(e,[{key:"on",value:function(e,t){return this.handlers[e]=this.handlers[e]||[],this.handlers[e].push(t),this.handlers[e]}},{key:"off",value:function(e){this.handlers[e]&&delete this.handlers[e];}},{key:"trigger",value:function(e,t){var n=this,r=t||[],o=this.handlers[e];return!o||o.every(function(e){return!1!==e.apply(n,r)})}}]),e}();t.a=i;},function(e,t,n){"use strict";var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o={typeDecide:function(e,t){return Object.prototype.toString.call(e)==="[object "+t+"]"},serializeObj:function(e){var t="";return Object.keys(e).forEach(function(n){o.typeDecide(e[n],"Object")?t+=n+"="+o.stringify(e[n]):t+=n+"="+e[n]+"^";}),encodeURIComponent(t.substr(0,t.length-1))},stringify:function(e){if(window.JSON&&window.JSON.stringify)return JSON.stringify(e);var t="undefined"===typeof e?"undefined":r(e);if("object"!=t||null===e)return"string"==t&&(e='"'+e+'"'),String(e);var n,o,i=[],u=e&&e.constructor==Array,a=arguments.callee;for(n in e)e.hasOwnProperty(n)&&(o=e[n],t="undefined"===typeof o?"undefined":r(o),e.hasOwnProperty(n)&&("string"==t?o='"'+o+'"':"object"==t&&null!==o&&(o=a(o)),i.push((u?"":'"'+n+'":')+String(o))));return(u?"[":"{")+String(i)+(u?"]":"}")},assignObject:function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}};t.a=o;}])});
});

var Report = unwrapExports(index_min);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * @author suman
 * @fileoverview report
 * @date 2017/02/15
 */

var utils = {
  typeDecide: function typeDecide(o, type) {
    return Object.prototype.toString.call(o) === "[object " + type + "]";
  },
  isFunction: function isFunction(f) {
    return utils.typeDecide(f, 'Function');
  },
  isString: function isString(f) {
    return utils.typeDecide(f, 'String');
  },
  serializeObj: function serializeObj(obj) {
    var parames = '';
    Object.keys(obj).forEach(function (name) {
      if (utils.typeDecide(obj[name], 'Object')) {
        parames += name + '=' + utils.stringify(obj[name]);
      } else {
        parames += name + '=' + obj[name] + '^';
      }
    });
    console.log(parames);
    return encodeURIComponent(parames.substr(0, parames.length - 1));
  },
  stringify: function stringify(obj) {
    if (window.JSON && window.JSON.stringify) {
      return JSON.stringify(obj);
    }
    var t = typeof obj === "undefined" ? "undefined" : _typeof(obj);
    if (t != "object" || obj === null) {
      // simple data type
      if (t == "string") obj = '"' + obj + '"';
      return String(obj);
    } else {
      // recurse array or object
      var n,
          v,
          json = [],
          arr = obj && obj.constructor == Array;

      // fix.
      var self = arguments.callee;

      for (n in obj) {
        if (obj.hasOwnProperty(n)) {

          v = obj[n];
          t = typeof v === "undefined" ? "undefined" : _typeof(v);
          if (obj.hasOwnProperty(n)) {
            if (t == "string") v = '"' + v + '"';else if (t == "object" && v !== null)
              // v = jQuery.stringify(v);
              v = self(v);
            json.push((arr ? "" : '"' + n + '":') + String(v));
          }
        }
      }
      return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
  },
  parse: function parse(str) {
    return window.JSON && window.JSON.parse ? JSON.parse(str) : new Function('return ' + str)();
  },
  getServerPort: function getServerPort() {
    return window.location.port === '' ? window.location.protocol === 'http:' ? '80' : '443' : window.location.port;
  },
  getUserAgent: function getUserAgent() {
    return window.navigator.userAgent;
  },
  getPlatType: function getPlatType() {
    try {
      document.createEvent("TouchEvent");
      return 'Mobile';
    } catch (e) {
      return 'PC';
    }
  },
  flashVer: function flashVer() {
    var f = "-";
    var n = navigator;
    var ii = void 0;
    if (n.plugins && n.plugins.length) {
      for (ii = 0; ii < n.plugins.length; ii++) {
        if (n.plugins[ii].name.indexOf('Shockwave Flash') !== -1) {
          f = n.plugins[ii].description.split('Shockwave Flash ')[1];
          break;
        }
      }
    } else if (window.ActiveXObject) {
      for (ii = 10; ii >= 2; ii--) {
        try {
          var fl = new Function("return new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');")();
          if (fl) {
            f = ii + '.0';
            break;
          }
        } catch (e) {}
      }
    }
    return f;
  },
  // 从字符串 src 中查找 k+sp 和  e 之间的字符串，如果 k==e 且 k 只有一个，或者 e 不存在，从 k+sp 截取到字符串结束
  // abcd=1&b=1&c=3;
  // abdc=1;b=1;a=3;
  stringSplice: function stringSplice(src, k, e, sp) {
    if (src === "") {
      return "";
    }
    sp = sp === "" ? "=" : sp;
    k += sp;
    var ps = src.indexOf(k);
    if (ps < 0) {
      return "";
    }
    ps += k.length;
    var pe = pe < ps ? src.length : src.indexOf(e, ps);
    return src.substring(ps, pe);
  },
  getReferer: function getReferer() {
    var ref = document.referrer.toLowerCase();
    var re = /^[^\?&#]*.swf([\?#])?/;
    // 如果页面 Referer 为空，从 URL 中获取
    if (ref === "" || ref.match(re)) {
      ref = utils.stringSplice(window.location.href, "ref", "&", "");
      if (ref !== "") {
        return encodeURIComponent(ref);
      }
    }
    return encodeURIComponent(ref);
  },
  getSystemParams: function getSystemParams(config) {
    var scr = window.screen;
    var isHybrid = config.isHybrid;
    var hybridInfo = config.hybridInfo;
    var systemparams = {
      userAgent: utils.getUserAgent(),
      currentUrl: window.location.href,
      timestamp: +new Date() + Math.random(),
      projectType: utils.getPlatType(),
      flashVer: utils.flashVer(),
      title: document.title,
      screenSize: scr.width + "x" + scr.height,
      referer: document.referer ? document.referer : '',
      host: window.location.protocol + '//' + window.location.hostname
    };
    if (isHybrid && !hybridInfo.host) {
      hybridInfo.host = 'hybrid UNKNOW host';
      this.assignObject(systemparams, hybridInfo);
    }
    return systemparams;
  },
  toArray: function toArray$$1(arr) {
    return Array.prototype.slice.call(arr);
  },
  getCookie: function getCookie(key) {
    var cookieList = document.cookie.split('; ');
    var str = '';
    for (var i = 0; i < cookieList.length; i++) {
      var item = cookieList[i].split('=');
      if (item[0] == key) {
        str = item[1];
        break;
      }
    }
    return str;
  },
  addCookie: function addCookie(name, value, days) {
    var times = new Date();
    times.setDate(times.getDate() + (days || 365));
    document.cookie = name + "=" + value + "; expires=" + times.toGMTString();
    return utils.getCookie(name);
  },
  noop: function noop() {},
  clearCookie: function clearCookie(name) {
    utils.addCookie(name, '', -1);
    return utils.getCookie(name);
  },
  assignObject: function assignObject(obj1, obj2) {
    for (var name in obj2) {
      if (obj2.hasOwnProperty(name)) {
        obj1[name] = obj2[name];
      }
    }
    return obj1;
  },
  getErrorInfo: function getErrorInfo(ex) {
    if (typeof ex.stack === 'undefined' || !ex.stack) {
      return {

        'msg': ex.name + ':' + ex.message,
        'level': 4
      };
    } else {
      var chrome = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
          gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
          winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,


      // Used to additionally parse URL/line/column from eval frames
      geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
          chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/,
          lines = ex.stack.split('\n'),
          stack = [],
          submatch,
          parts,
          element,
          reference = /^(.*) is undefined$/.exec(ex.message);
      if (parts = chrome.exec(lines[1])) {
        var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
        var isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
        if (isEval && (submatch = chromeEval.exec(parts[2]))) {
          // throw out eval line/column and use top-most line/column number
          parts[2] = submatch[1]; // url
          parts[3] = submatch[2]; // line
          parts[4] = submatch[3]; // column
        }
        element = {
          'url': !isNative ? parts[2] : null,
          'line': parts[3] ? +parts[3] : null,
          'column': parts[4] ? +parts[4] : null
        };
      } else if (parts = winjs.exec(lines[1])) {
        element = {
          'url': parts[2],
          'line': +parts[3],
          'column': parts[4] ? +parts[4] : null
        };
      } else if (parts = gecko.exec(lines[1])) {
        var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
        if (isEval && (submatch = geckoEval.exec(parts[3]))) {
          // throw out eval line/column and use top-most line number
          parts[3] = submatch[1];
          parts[4] = submatch[2];
          parts[5] = null; // no column when eval
        } else if (i === 0 && !parts[5] && typeof ex.columnNumber !== 'undefined') {
          // FireFox uses this awesome columnNumber property for its top frame
          // Also note, Firefox's column number is 0-based and everything else expects 1-based,
          // so adding 1
          // NOTE: this hack doesn't work if top-most frame is eval
          stack[0].column = ex.columnNumber + 1;
        }
        element = {
          'url': parts[3],
          'line': parts[4] ? +parts[4] : null,
          'column': parts[5] ? +parts[5] : null
        };
      }

      return {
        'msg': ex.name + ':' + ex.message,
        'rowNum': element.line,
        'colNum': element.column,
        'targetUrl': element.url,
        'level': 4
      };
    }
  }
};

/**
 * @author  zdongh2016
 * @fileoverview config
 * @date 2017/02/16
 */

var config = {
    isHybrid: false,
    hybridInfo: {
        host: 'template id' //必选，标明是什么模板
        //其他你想传的参数，最后都会merge到SystemParams上
    },
    proxyAll: false,
    mergeReport: true, // mergeReport 是否合并上报， false 关闭， true 启动（默认）
    delay: 1000, // 当 mergeReport 为 true 可用，延迟多少毫秒，合并缓冲区中的上报（默认）
    dataKey: 'err_msg', //上报数据的属性名，用于服务器获取数据
    url: '', // 指定错误上报地址
    getPath: '/read.gif', // get请求路径
    postPath: '/post/jserr', // post请求路径
    except: [/^Script error\.?/, /^Javascript error: Script error\.? on line 0/], // 忽略某个错误
    random: 1, // 抽样上报，1~0 之间数值，1为100%上报（默认 1）
    repeat: 5, // 重复上报次数(对于同一个错误超过多少次不上报)
    errorLSSign: 'mx-error', // error错误数自增 0
    maxErrorCookieNo: 20, // error错误数自增 最大的错
    validTime: 7
};

var Config$1 = function Config(supperclass) {
    return function (_supperclass) {
        inherits(_class, _supperclass);

        function _class(options) {
            classCallCheck(this, _class);

            var assignConfig = utils.assignObject(config, options);

            var _this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, assignConfig));

            _this.config = assignConfig;
            return _this;
        }

        createClass(_class, [{
            key: 'get',
            value: function get$$1(name) {
                return this.config[name];
            }
        }, {
            key: 'set',
            value: function set$$1(name, value) {
                this.config[name] = value;
                return this.config[name];
            }
        }]);
        return _class;
    }(supperclass);
};

/**
 * @author suman
 * @fileoverview localStorage
 * @date 2017/02/16
 */
var hasLocal = !!window.localStorage;

function InertLocalFunc(funcA, funcB) {
  return hasLocal ? funcA : funcB;
}

function callByArgs(func, args, global) {
  return func.apply(global, args);
}

var storage = {
  //设置cookie内json的key名
  getKey: function getKey(errorObj) {
    var isValid = function isValid(name) {
      return errorObj[name];
    };
    return ['msg', 'colNum', 'rowNum'].filter(isValid).map(isValid).join('@');
  },
  //检查是否有效
  deleteExpiresItem: function deleteExpiresItem(data) {
    var oData = data ? utils.parse(data) : {};

    var date = +new Date();
    for (var key in oData) {
      if (oData[key].expiresTime <= date) {
        delete oData[key];
      }
    }
    return oData;
  },
  //设置失效时间
  getEpires: function getEpires(validTime) {
    return +new Date() + 1000 * 60 * 60 * 24 * validTime;
  },
  limitError: function limitError(source, number) {
    var keys = Object.keys(source);
    if (keys.length >= number) {
      delete source[keys[0]];
    }
    return source;
  },
  //获取cookie/localStorage内容体
  setInfo: function setInfo(key, errorObj, validTime, max) {
    var source = storage.getItem(key);
    if (errorObj) {
      var name = storage.getKey(errorObj);
      source = this.limitError(source, max);
      source[name] = {
        expiresTime: storage.getEpires(validTime),
        value: errorObj.msg
      };
    }
    return utils.stringify(source);
  },
  //设置cookie/localStorage
  setItem: InertLocalFunc(function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    try {
      localStorage.setItem(args[0], callByArgs(storage.setInfo, args, storage));
    } catch (e) {}
  }, function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    utils.addCookie(args[0], callByArgs(storage.setInfo, args, storage));
  }),
  //获取cookie/localStorage
  getItem: InertLocalFunc(function (key) {
    return storage.deleteExpiresItem(localStorage.getItem(key));
  }, function (key) {
    return storage.deleteExpiresItem(utils.getCookie(key));
  }),
  //清除cookie/localStorage
  clear: InertLocalFunc(function (key) {
    return key ? localStorage.removeItem(key) : localStorage.clear();
  }, function (key) {
    return key ? utils.clearCookie(key) : document.cookie.split('; ').forEach(utils.clearCookie);
  })
};

var Localstroage$1 = function Localstroage(supperclass) {
  return function (_supperclass) {
    inherits(_class, _supperclass);

    function _class(options) {
      classCallCheck(this, _class);

      var _this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options));

      _this.setItem();
      return _this;
    }
    //得到元素值 获取元素值 若不存在则返回''


    createClass(_class, [{
      key: 'getItem',
      value: function getItem(key) {
        return storage.getItem(key);
      }
      // 设置一条localstorage或cookie

    }, {
      key: 'setItem',
      value: function setItem(errorObj) {
        var _config = this.config;
        storage.setItem(this.config.errorLSSign, errorObj, _config.validTime, _config.maxErrorCookieNo);
        return utils.stringify(errorObj);
      }

      //清除ls/cookie 不传参数全部清空  传参之清当前ls/cookie

    }, {
      key: 'clear',
      value: function clear(key) {
        storage.clear(key);
      }
    }]);
    return _class;
  }(supperclass);
};

/**
 * @author suman
 * @fileoverview report
 * @date 2017/02/15
 */

var Report$1 = function Report(supperclass) {
    return function (_supperclass) {
        inherits(_class, _supperclass);

        function _class(options) {
            classCallCheck(this, _class);

            var _this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options));

            _this.repeatList = {};
            ['log', 'debug', 'info', 'warn', 'error'].forEach(function (type, index) {
                _this[type] = function (msg) {
                    return _this.handleMsg(msg, type, index);
                };
            });
            // 发从之前存储数据
            _this.on('beforeSend', function () {
                _this.queue.get.map(function (obj) {
                    _this.setItem(obj);
                });
                _this.queue.post.map(function (obj) {
                    _this.setItem(obj);
                });
            });
            return _this;
        }

        createClass(_class, [{
            key: 'repeat',
            value: function repeat(error) {
                var rowNum = error.rowNum || '';
                var colNum = error.colNum || '';
                var repeatName = error.msg + rowNum + colNum;
                this.repeatList[repeatName] = this.repeatList[repeatName] ? this.repeatList[repeatName] + 1 : 1;
                return this.repeatList[repeatName] > this.config.repeat;
            }
            // 发送

        }, {
            key: 'send',
            value: function send(cb) {
                this.delayReport(cb);
            }
        }, {
            key: 'except',
            value: function except(error) {
                var oExcept = this.config.except;
                var result = false;
                var v = null;
                if (utils.typeDecide(oExcept, "Array")) {
                    for (var i = 0, len = oExcept.length; i < len; i++) {
                        v = oExcept[i];
                        if (utils.typeDecide(v, "RegExp") && v.test(error.msg) || utils.typeDecide(v, "Function") && v(error, error.msg)) {
                            result = true;
                            break;
                        }
                    }
                }
                return result;
            }
            // push错误到pool

        }, {
            key: 'catchError',
            value: function catchError(error, type) {
                type = type || 'get';
                this.catchData(type, error);
                return this.queue[type];
            }
            // 手动上报 

        }, {
            key: 'handleMsg',
            value: function handleMsg(msg, type, level) {
                if (!msg) {
                    return false;
                }
                if (utils.typeDecide(msg, 'Object') && !msg.msg) {
                    return false;
                }

                if (utils.typeDecide(msg, 'Error')) {
                    msg = {
                        msg: msg.message,
                        ext: {
                            stack: msg.stack
                        }
                    };
                }

                var errorMsg = utils.typeDecide(msg, 'Object') ? msg : {
                    msg: msg,
                    level: level
                };
                errorMsg = utils.assignObject(utils.getSystemParams(this.config), errorMsg);

                if (!this.repeat(errorMsg) && !this.except(errorMsg)) {
                    this.reportByGet(errorMsg);
                }
                return errorMsg;
            }
        }]);
        return _class;
    }(supperclass);
};

/**
 * @author  zdongh2016
 * @fileoverview  Peep
 * @date 2017/02/16
 */

var proxy = function proxy(supperclass) {
    return function (_supperclass) {
        inherits(_class, _supperclass);

        function _class(options) {
            classCallCheck(this, _class);

            var _this2 = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options));

            _this2.consoleList = {};

            _this2.timeoutkey = null;
            _this2.proxy();
            /*window.onload = () => {
                this.proxy();
            };*/
            return _this2;
        }

        createClass(_class, [{
            key: 'proxy',
            value: function proxy() {
                var _config = this.config;
                if (_config.proxyAll) {
                    this.proxyJquery().proxyModules().proxyTimer().proxyConsole();
                } else {
                    _config.proxyJquery && this.proxyJquery();
                    _config.proxyModules && this.proxyModules();
                    _config.proxyTimer && this.proxyTimer();
                    _config.proxyConsole && this.proxyConsole();
                }
            }
        }, {
            key: 'proxyConsole',
            value: function proxyConsole() {
                var _this3 = this;

                ['log', 'debug', 'info', 'warn', 'error'].forEach(function (type, index) {
                    var _console = window.console[type];
                    window.console[type] = function () {
                        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                            params[_key] = arguments[_key];
                        }

                        _this3.reportConsole(_console, type, index, utils.toArray(params));
                    };
                });
                return this;
            }
            // 劫持原生js

        }, {
            key: 'proxyTimer',
            value: function proxyTimer() {
                window.setTimeout = this.catTimeout(setTimeout);
                window.setInterval = this.catTimeout(setInterval);
                return this;
            }
            // 劫持jquery

        }, {
            key: 'proxyJquery',
            value: function proxyJquery($) {
                var _this4 = this;

                var _$ = $ || window.$;

                if (!_$ || !_$.event) {
                    return this;
                }

                var _add = void 0,
                    _remove = void 0;
                if (_$.zepto) {
                    _add = _$.fn.on, _remove = _$.fn.off;

                    _$.fn.on = this.makeArgsTry(_add);

                    _$.fn.off = function () {
                        var args = [];
                        utils.toArray(arguments).forEach(function (v) {
                            utils.isFunction(v) && v.tryWrap && (v = v.tryWrap);
                            args.push(v);
                        });
                        return _remove.apply(this, args);
                    };
                } else if (_$.fn.jquery) {
                    _add = _$.event.add, _remove = _$.event.remove;

                    _$.event.add = this.makeArgsTry(_add);
                    _$.event.remove = function () {
                        for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                            params[_key2] = arguments[_key2];
                        }

                        var args = [];

                        utils.toArray(params).forEach(function (v) {
                            utils.typeDecide(v, 'Function') && v.tryWrap && (v = v.tryWrap);
                            args.push(v);
                        });
                        return _remove.apply(_this4, args);
                    };
                }

                var _ajax = _$.ajax;

                if (_ajax) {
                    _$.ajax = function (url, setting) {
                        if (!setting) {
                            setting = url;
                            url = undefined;
                        }
                        _this4.makeObjTry(setting);
                        if (url) return _ajax.call(_$, url, setting);
                        return _ajax.call(_$, setting);
                    };
                }
                return this;
            }
        }, {
            key: 'reportConsole',
            value: function reportConsole(func, type, level, args) {
                var _this5 = this;

                this.on('beforeReport', function () {
                    //启用console，强制merge
                    _this5.config.mergeReport = true;
                });
                var msg = '';
                args.forEach(function (v) {
                    if (utils.typeDecide(v, 'string')) {
                        msg += v;
                    } else if (utils.typeDecide(v, 'array')) {
                        msg += '[' + v.join(',') + ']';
                    } else {
                        msg += utils.stringify(v);
                    }
                });
                var typeList = this.consoleList[type];
                typeList = typeList || [];
                typeList.push(utils.assignObject(utils.getSystemParams(this.config), {
                    msg: msg,
                    level: level,
                    rowNum: '',
                    colNum: '',
                    targetUrl: ''
                }));
                if (typeList.length > 10) {
                    this.errorQueue = this.errorQueue.concat(typeList);
                    this.send(true, function () {
                        typeList = [];
                    });
                }
                return func.apply(this, args);
            }
            // 劫持seajs

        }, {
            key: 'proxyModules',
            value: function proxyModules() {
                var _require = window.require,
                    _define = window.define;

                if (_define && _define.amd && _require) {
                    window.require = this.catArgs(_require);
                    utils.assignObject(window.require, _require);

                    window.define = this.catArgs(_define);
                    utils.assignObject(window.define, _define);
                }
                if (window.seajs && _define) {
                    var _this = this;
                    window.define = function () {
                        var arg,
                            args = [];
                        for (var i = 0, l = arguments.length; i < l; i++) {
                            arg = arguments[i];
                            if (utils.isFunction(arg)) {
                                arg = _this.cat(arg);
                                //seajs should use toString parse dependencies , so rewrite it
                                arg.toString = function (orgArg) {
                                    return function () {
                                        return orgArg.toString();
                                    };
                                }(arguments[i]);
                            }
                            args.push(arg);
                        }
                        return _define.apply(this, args);
                    };
                    window.seajs.use = this.catArgs(window.seajs.use);

                    utils.assignObject(window.define, _define);
                }
                return this;
            }
            // 劫持自定义方法

        }, {
            key: 'proxyCustomFn',
            value: function proxyCustomFn(func) {
                return this.cat(func);
            }
        }, {
            key: 'proxyCustomObj',
            value: function proxyCustomObj(obj) {
                return this.makeObjTry(obj);
            }
        }, {
            key: 'cat',
            value: function cat(func, args) {
                var _this6 = this;

                return function () {
                    for (var _len3 = arguments.length, param = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        param[_key3] = arguments[_key3];
                    }

                    try {
                        args = args || utils.toArray(param);
                        return func.apply(_this6, args);
                    } catch (error) {
                        var err = utils.getErrorInfo(error);
                        _this6.trigger('tryError', [err]);
                        _this6.error(err);
                        if (!_this6.timeoutkey) {
                            var orgOnerror = window.onerror;
                            window.onerror = utils.noop;
                            _this6.timeoutkey = setTimeout(function () {
                                window.onerror = orgOnerror;
                                _this6.timeoutkey = null;
                            }, 50);
                        }
                        throw error;
                    }
                };
            }
        }, {
            key: 'catArgs',
            value: function catArgs(func) {
                var _this7 = this;

                return function () {
                    for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                        params[_key4] = arguments[_key4];
                    }

                    var args = [];
                    utils.toArray(params).forEach(function (v) {
                        utils.isFunction(v) && (v = _this7.cat(v));
                        args.push(v);
                    });
                    return func.apply(window, args);
                };
            }
        }, {
            key: 'catTimeout',
            value: function catTimeout(func) {
                var _this8 = this;

                return function () {
                    for (var _len5 = arguments.length, params = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                        params[_key5] = arguments[_key5];
                    }

                    var timeArgs = utils.toArray(params);
                    var cb = timeArgs[0];
                    var timeout = timeArgs[1];
                    if (utils.isString(cb)) {
                        try {
                            cb = new Function(cb);
                        } catch (err) {
                            throw err;
                        }
                    }
                    // for setTimeout(function, delay, param1, ...)
                    var args = timeArgs.splice(2);

                    cb = _this8.cat(cb, args.length && args);

                    return func(cb, timeout);
                };
            }
        }, {
            key: 'makeArgsTry',
            value: function makeArgsTry(func, self) {
                var _this = this;
                return function () {
                    //this指向 故：不能使用箭头函数   
                    var tmp,
                        args = [];
                    utils.toArray(arguments).forEach(function (v) {
                        utils.isFunction(v) && (tmp = _this.cat(v)) && (v.tryWrap = tmp) && (v = tmp);
                        args.push(v);
                    });
                    return func.apply(self || this, args);
                };
            }
        }, {
            key: 'makeObjTry',
            value: function makeObjTry(obj) {
                var key = void 0;
                var value = void 0;
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        value = obj[key];
                        if (utils.isFunction(value)) {
                            obj[key] = this.cat(value);
                        }
                    }
                }
                return obj;
            }
        }]);
        return _class;
    }(supperclass);
};

/**
 * @author  zdongh2016
 * @fileoverview GER
 * @date 2017/02/15
 */
//import 'babel-polyfill';
// import events from './events';
// utils.fixedObjDefined();

var GER = function (_localStorage) {
  inherits(GER, _localStorage);

  function GER(options) {
    classCallCheck(this, GER);

    var _this = possibleConstructorReturn(this, (GER.__proto__ || Object.getPrototypeOf(GER)).call(this, options));

    _this._storeClcikedDom = function (ele) {
      var target = ele.target ? ele.target : ele.srcElement;
      var info = {
        time: new Date().getTime()
      };
      if (target) {
        // 只保存存在的属性
        target.tagName && (info.tagName = target.tagName);
        target.id && (info.id = target.id);
        target.className && (info.className = target.className);
        target.name && (info.name = target.name);
        // 不存在id时，遍历父元素
        if (!target.id) {
          // 遍历三层父元素
          var i = 0,
              parent = target;
          while (i++ < 3 && parent.parentNode) {
            if (!parent.parentNode.outerHTML) break;
            parent = parent.parentNode;
            if (parent.id) break;
          }
          // 如果父元素中有id，则只保存id，保存规则为 父元素层级:id
          if (parent.id) {
            info.parentId = i + ':' + parent.id;
          } else {
            // 父元素没有id，则保存outerHTML
            var outerHTML = parent.outerHTML.replace(/>\s+</g, '><'); // 去除空白字符
            outerHTML && outerHTML.length > 200 && (outerHTML = outerHTML.slice(0, 200));
            info.outerHTML = outerHTML;
          }
        }
      }
      _this.breadcrumbs.push(info);
      _this.breadcrumbs.length > 10 && _this.breadcrumbs.shift();
    };

    _this.breadcrumbs = [];
    _this.rewriteError();
    _this.rewritePromiseError();
    _this.catchClickQueue();
    return _this;
  }

  createClass(GER, [{
    key: 'rewriteError',
    value: function rewriteError() {
      var _this2 = this,
          _arguments = arguments;

      var defaultOnerror = window.onerror || utils.noop;
      window.onerror = function (msg, url, line, col, error) {
        //有些浏览器没有col
        col = col || window.event && window.event.errorCharacter || 0;
        if (!_this2.trigger('error', utils.toArray(_arguments))) {
          return false;
        }
        var reportMsg = msg;
        if (error && error.stack) {
          reportMsg = _this2.handleErrorStack(error);
        } else {
          reportMsg = _this2._fixMsgByCaller(reportMsg, _arguments.callee.caller); // jshint ignore:line
        }
        if (utils.typeDecide(reportMsg, "Event")) {
          reportMsg += reportMsg.type ? "--" + reportMsg.type + "--" + (reportMsg.target ? reportMsg.target.tagName + "::" + reportMsg.target.src : "") : "";
        }
        if (reportMsg) {
          _this2.error({
            msg: reportMsg,
            rowNum: line,
            colNum: col,
            targetUrl: url,
            level: 4,
            breadcrumbs: JSON.stringify(_this2.breadcrumbs)
          });
        }
        defaultOnerror.call(null, msg, url, line, col, error);
      };
    }
  }, {
    key: 'rewritePromiseError',
    value: function rewritePromiseError() {
      var _this3 = this,
          _arguments2 = arguments;

      var defaultUnhandledRejection = window.onunhandledrejection || utils.noop;
      window.onunhandledrejection = function (error) {
        if (!_this3.trigger('error', utils.toArray(_arguments2))) {
          return false;
        }

        var msg = error.reason && error.reason.message || '';
        var stackObj = {};
        if (error.reason && error.reason.stack) {
          msg = _this3.handleErrorStack(error.reason);
          stackObj = _this3._parseErrorStack(error.reason.stack);
        } else {
          msg = _this3._fixMsgByCaller(msg, _arguments2.callee.caller); // jshint ignore:line
        }
        if (msg) {
          _this3.error({
            msg: msg,
            rowNum: stackObj.line || 0,
            colNum: stackObj.col || 0,
            targetUrl: stackObj.targetUrl || '',
            level: 4,
            breadcrumbs: JSON.stringify(_this3.breadcrumbs)
          });
        }
        defaultUnhandledRejection.call(null, error);
      };
    }
    //不存在stack的话，取调用栈信息

  }, {
    key: '_fixMsgByCaller',
    value: function _fixMsgByCaller(msg, caller) {
      var ext = [];
      var f = caller,
          c = 3;
      //这里只拿三层堆栈信息
      while (f && c-- > 0) {
        ext.push(f.toString());
        if (f === f.caller) {
          break; //如果有环
        }
        f = f.caller;
      }
      if (ext.length > 0) {
        msg += '@' + ext.join(',');
      }
      return msg;
    }
    // 从报错信息中获取行号、列号、url

  }, {
    key: '_parseErrorStack',
    value: function _parseErrorStack(stack) {
      var stackObj = {};
      var stackArr = stack.split('at');
      // 只取第一个堆栈信息，获取包含url、line、col的部分，如果有括号，去除最后的括号
      var info = stackArr[1].match(/http.*/)[0].replace(/\)$/, '');
      // 以冒号拆分
      var errorInfoArr = info.split(':');
      var len = errorInfoArr.length;
      // 行号、列号在最后位置
      stackObj.col = errorInfoArr[len - 1];
      stackObj.line = errorInfoArr[len - 2];
      // 删除最后两个（行号、列号）
      errorInfoArr.splice(len - 2, 2);
      stackObj.targetUrl = errorInfoArr.join(':');
      return stackObj;
    }
    // 处理onerror返回的error.stack

  }, {
    key: 'handleErrorStack',
    value: function handleErrorStack(error) {
      var stackMsg = error.stack;
      var errorMsg = error.toString();
      if (errorMsg) {
        if (stackMsg.indexOf(errorMsg) === -1) {
          stackMsg += '@' + errorMsg;
        }
      } else {
        stackMsg = '';
      }
      return stackMsg;
    }
  }, {
    key: 'catchClickQueue',
    value: function catchClickQueue() {
      if (window.addEventListener) {
        if ('ontouchstart' in document.documentElement) {
          window.addEventListener('touchstart', this._storeClcikedDom, !0);
        } else {
          window.addEventListener('click', this._storeClcikedDom, !0);
        }
      } else {
        document.attachEvent("onclick", this._storeClcikedDom);
      }
    }
  }]);
  return GER;
}(Localstroage$1(Report$1(proxy(Config$1(Report)))));

/**
 * @author xiaojue
 * @fileoverview mutil class inherit
 */

return GER;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 数据请求接口, get
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {String} options.url 请求路径
   * @param {String} options.cache 是否缓存数据
   * @param {Object} options.method 请求方法，GET | POST，默认为 GET
   * @param {Object} options.data 传递的数据
   * @param {Object} options.referer POST 请求需要跨域请求用
   * @param {Number} options.timeout 超时时间
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   * @return {Promise<Object>}
   *
   * @example
   * SNC.fetch({
   *   url: 'rank/list',
   *   method: 'GET',
   *   data: {
   *     page: 1,
   *     pullDirection: 'down'
   *   },
   *   success(response) {}
   * })
   *
   * SNC.fetch({
   *   url: 'http://cmnt.sina.cn/aj/v2/vote',
   *   method:"POST", // POST, GET
   *   referer: "http://sina.cn", //跨域域名，默认为 sina.cn
   *   data: {
   *     channel: "sh",
   *     newsid: "comos-fztkpin5110540",
   *     mid: "5AE17227-3D9E9361-1640FB8B9-9B6-9C1"
   *   }
   * })
   */ctx.fetch=function(options){var lock=true;var timer=0;return new Promise(function(resolve,reject){// 超时设置，默认 10 秒
timer=setTimeout(function(){lock=false;__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].bridgeFixCallback({name:'fetch',options:options,response:{errCode:408,errDescription:'请求超时',data:{// http code 408 代表请求超时
statusCode:408}},resolve:resolve,reject:reject});console.error('[SNC_CALL] Fetch timeout');},options.timeout||10000);var reqParam=getReqParam(options);ctx.bridge.callHandler('hb.core.fetch',reqParam,function(response,cb){clearTimeout(timer);if(!lock)return;__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].bridgeFixCallback({name:'fetch',options:options,param:reqParam,response:response,resolve:resolve,reject:reject});console.log('[SNC_CALL] Response fetch',response);});__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].invokeLogger('hb.core.fetch',reqParam);});};function appendParam(){var url=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var param=arguments[1];if(!url)return'';if(!param)return url;// APP 数据接口直接使用 & 拼接参数
if(!/^http[s]?:\/\//.test(url))return url+'&'+param;url=url.replace(/[?&]$/,'');return /\?/.test(url)?url+'&'+param:url+'?'+param;}function getReqParam(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};if((''+options.method).toUpperCase()==='POST'){return{url:options.url||'',referer:'http://newsapp.sina.cn',method:'POST',needAuth:!!options.needAuth,data:options.data||{}};}// 语法糖：GET 方法将 options.data 拼接到 url 上
var urlParam=options.data?__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].serializeData(options.data):'';var param={url:encodeURI(appendParam(options.url,urlParam)),cache:!!options.cache,method:'GET'};// 针对 ajax 请求，添加 needAuth 标识是否携带 token
if(param.url.indexOf('http')>-1){param.needAuth=!!options.needAuth;}return param;}});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 设置页面 title
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {String} options.title 标题内容
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   *
   * @example
   * SNC.setNavigationBarTitle({
   *   title: 'new title'
   * })
   */ctx.setNavigationBarTitle=ctx.definedMethod('hb.bee.setNavigationBarTitle',{title:''});});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 设置导航栏展示状态 {@link http://wiki.intra.sina.com.cn/display/SinaMobile/plugin+manifest+v0.0.6|wiki}
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {Number} options.type
   * 0: 无导航栏，
   * 1: 有导航栏，背景白色，左、右按钮红色，标题黑色
   * 2: 有导航栏，背景透明，左、右按钮及标题为白色
   * 3: 有导航栏，滚动渐变（滚动时背景、按钮、标题颜色由 type [2] 过渡到状态 type [1]
   * 4: 有导航栏，背景透明，左、右按钮红色，标题黑色
   * 5: 无导航栏，仅显示红返回按钮
   * 6: 无导航栏，仅显示白色返回按钮
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   *
   * @example
   * SNC.setNavigationBarType({
   *   type: 2
   * })
   */ctx.setNavigationBarType=ctx.definedMethod('hb.bee.setNavigationBarType',{type:1});});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 打开 APP 分享组件
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {String} options.title 分享标题
   * @param {String} options.url 分享链接
   * @param {String} options.introduction 分享内容
   * @param {String} options.pic 分享图片
   * @param {String} options.target 分享平台，目前支持 'weixin_moments','weibo'，未指定分享平台时将会展示分享弹层
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   *
   * @example
   * SNC.openShare({
   *   title: '分享标题',
   *   url: 'https://sina.cn',
   *   pic: 'https://sina.cn/share.png',
   *   introduction: '分享内容...',
   * })
   *
   * // 分享成功结果，请监听 onShareSuccess
   * SNC.onShareSuccess({
   *   success() {
   *     console.log('share success')
   *   }
   * })
   */ctx.openShare=ctx.definedMethod('hb.bee.openShare',{title:'',url:'',introduction:'',pic:''});});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   * @return {Promise<Object>}
   *
   * @example
   * SNC.disableSlidingClose()
   */ctx.disableSlidingClose=ctx.definedMethod('hb.core.disableSlidingClose');});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const_navitageActionType__ = __webpack_require__(5);
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 图片预览（等同于 {@link #urlnavigatetoactionpreview_image|URLNavigateTo/action.PREVIEW_IMAGE}）
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {Number} options.current 指定打开第几个图片，从 0 计数，默认为 0
   * @param {Array<String>} options.urls 图片数组
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   *
   * @example
   * SNC.previewImage({
   *   current: 0,
   *   urls: [
   *     'https://k.sinaimg.cn/n/fashion/24_img/upload/de4bf6e2/460/w630h630/20180327/RWjm-fysqfnh5366415.jpg/w640slw.jpg',
   *     'https://k.sinaimg.cn/n/fashion/24_img/upload/de4bf6e2/460/w630h630/20180327/s5nA-fysqfnh5366463.jpg/w640slw.jpg',
   *     'https://k.sinaimg.cn/n/fashion/24_img/upload/de4bf6e2/160/w1344h2016/20180327/frkH-fysqfnh5366490.jpg/w640slw.jpg'
   *   ]
   * })
   */ctx.previewImage=ctx.definedMethod('hb.core.URLNavigateTo',{actionType:__WEBPACK_IMPORTED_MODULE_0__const_navitageActionType__["PREVIEW_IMAGE"],apiVersion:'2.0'},function(data){var _data$current=data.current,current=_data$current===undefined?0:_data$current,_data$urls=data.urls,urls=_data$urls===undefined?[]:_data$urls;return{ext:{previewImage:urls,index:current}};});});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 启动下拉加载更多
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {Object} options.theme 刷洗动画主题，默认 default
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   * @return {Promise<Object>}
   *
   * @example
   * SNC.enablePullDownRefresh()
   */ctx.enablePullDownRefresh=function(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};// 添加flag保证回调只会调用一次
var flag=true;var timer=0;return new Promise(function(resolve,reject){// 由于未知原因，不保证一次开启成功，、
// 循环执行开启操作
timer=setInterval(function(){ctx.bridge.callHandler('hb.bee.enablePullDownRefresh',{theme:options.theme||'default'},function(response){clearInterval(timer);if(flag){console.log('[SNC_CALL] response enablePullDownRefresh');__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].bridgeFixCallback({options:options,response:response,resolve:resolve,reject:reject,name:'enablePullDownRefresh'});flag=false;}});__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].invokeLogger('hb.bee.enablePullDownRefresh',{theme:options.theme||'default'});},800);});};});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 停止下拉刷新动画
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {String} options.msg 提示信息
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   *
   * @example
   * SNC.stopPullDownRefresh({
   *   msg: '更新n条数据',
   *   success(response) {}
   * })
   */ctx.stopPullDownRefresh=ctx.definedMethod('hb.bee.stopPullDownRefresh',{msg:''});});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * first Ajax 重试
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {String} options.type  type 指定为 firstAjax 时，仅重新触发 onFirstAjax 事件，type 为空或为 ’page‘ 时刷新整个页面
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   *
   * @example
   * // 刷新页面
   * SNC.pageReload()
   *
   * // firstAjax 重试
   * SNC.pageReload({
   *   type: 'firstAjax'
   * })
   *
   * // 重新执行回调
   * SNC.onFirstAjax({
   *   success(data) {
   *     console.log(data)
   *   }
   * })
   */ctx.pageReload=ctx.definedMethod('hb.core.pageReload',function(data){if(data.type==='firstAjax'){// 重置 first ajax 超时状态
ctx._setupFirstAjaxTimer();}});});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 展示全屏错误提示页面
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {String} options.errorType 页面类型
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   *
   * @example
   * SNC.pageError({
   *   success(response) {}
   * })
   */ctx.pageError=ctx.definedMethod('hb.bee.pageError',{errorType:''});});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 登录
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {String} options.mode 登录模式 'normal' 弹窗登录（默认）， 'silent’ 静默登录
   * @param {String} options.logInfo 登录统计信息
   * @param {String} options.logInfo.openFrom 页面打开来源
   * @param {String} options.logInfo.wc_info 详细信息
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   * @return {Promise<Object>}
   *
   * @example
   * SNC.login({
   *   success(data) {
   *     // data.uid
   *     // data.nickName
   *     console.log(data)
   *   }
   * })
   */ctx.login=ctx.definedMethod('hb.core.login');});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 震动，iOS time 枚举值 <0 短震, 1 长震>
   * Android 取 time 为毫秒数
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {Number} options.time 震动时长
   * @param {Number} options.type
   * @param {Number} options.intensity 震动强弱
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   * @return {Promise<Object>}
   *
   * @example
   * SNC.shake({
   *   time: 200,
   *   type: 0,
   *   intensity: 0,
   *   success(response) {}
   * })
   */ctx.shake=ctx.definedMethod('hb.core.shake',{intensity:0},function(data){// iOS 默认为短震，Android 默认为 200ms
// intensity：<0 微弱短震, 1 中度短震, 2 重度短震>
var _data$time=data.time,time=_data$time===undefined?200:_data$time,_data$type=data.type,type=_data$type===undefined?0:_data$type;data.time=__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isAndroid?''+time:type;// 去除业务定制参数
delete data.type;});});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 获取用户信息
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   * @return {Promise<Object>}
   *
   * @example
   * SNC.getUserInfo({
   *   success(data) {
   *     // data.uid  用户 id，未登录时为空字符串
   *     // data.nickName  昵称，未登录时为空字符串
   *     console.log(data)
   *   }
   * })
   */ctx.getUserInfo=ctx.definedMethod('hb.core.getUserInfo');});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 会员积分
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {String} options.metric  积分类型
   * @param {String} options.contentId 事件唯一 id
   * @param {String} options.callBackId  由消息通道下发，从弹窗页面的 message.callBackId 参数获取
   * 首次打开客户端 （newinstall_open）
   * 阅读正文: article_count
   * 查看图集 （pic_count）
   * 观看视频次数  （video_count）
   * 关注球队（subscribe_wordcup_team） //目前关注应该不走积分上报接口 ，请业务同学在开发的时候确认并注意
   * 关注球星（subscribe_wordcup_player） //目前关注应该不走积分上报接口 ，请业务同学在开发的时候确认并注意
   * 发送圈子(send_circle)
   * 转发圈子（forward_circle）
   * 将赛事添加到系统日历  （calendar_wordcup）
   * 猜冠军、4强、8强队伍  （guess_wordcup）
   * 赛事竞猜   （不需要做前端实时弹窗）
   * 玩小游戏  （h5game ）
   * 去xx主页发帖打call        (calendar_docall)
   * 观看视频时长 （video_time）
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   * @return {Promise<Object>}
   *
   * @example
   * SNC.memberShipPoint({
   *   metric: 'newinstall_open',
   *   success(data) {}
   * })
   */ctx.memberShipPoint=ctx.definedMethod('hb.bee.memberShipPoint');});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 打开授权设置
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {String} options.type 授权类型，push 推送
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   * @return {Promise<Object>}
   *
   * @example
   * SNC.openPermission({
   *   type: 'push'
   * })
   */ctx.openPermission=ctx.definedMethod('hb.core.openPermission');});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 获取权限信息
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   * @return {Promise<Object>}
   *
   * @example
   * SNC.getPermissionInfo({
   *   type: 'push',
   *   success(data) {
   *     // state: 0 禁止，1 允许，2 未设置
   *     console.log(data.state)
   *   }
   * })
   */ctx.getPermissionInfo=ctx.definedMethod('hb.core.getPermissionInfo');});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 获取 APP 共享数据存储内容
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {String} options.key 要获取数据的 key
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   * @return {Promise<Object>}
   *
   * @example
   * SNC.getGlobalStorage({
   *   key: 'test',
   *   success(response) {}
   * })
   */ctx.getGlobalStorage=ctx.definedMethod('hb.core.getGlobalStorage');});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 设置 APP 共享存数数据，请设置简单的键值对 {@link http://wiki.intra.sina.com.cn/pages/viewpage.action?pageId=169413859|wiki}
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {String} options.key
   * @param {String} options.value
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   *
   * @example
   * SNC.setGlobalStorage({
   *   key: 'test',
   *   value: '1'
   * })
   */ctx.setGlobalStorage=ctx.definedMethod('hb.core.setGlobalStorage',{key:'',value:''},function(data){// 强转字符串
if(typeof data.value!=='undefined'){data.value+='';}});});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * toast 浮层
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {String} options.title
   * @param {Number} options.type icon类型，默认为0。
   *  type 0: 无，
   *  type 1: 成功
   *  type 2: disLikeTip，
   *  type 3: 失败，
   *  type 4: 警告
   *  type 5: custom，同 type 0，
   *  type 6: 加载态
   *  type 7: 左滑手势提示
   *  type 8: 顶部提示
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   *
   * @example
   * SNC.showToast({
   *   title: '测试title',
   *   type: 1,
   *   success(response) {}
   * })
   */ctx.showToast=ctx.definedMethod('hb.core.showToast',{title:'',type:'0'},function(data){// iOS 仅支持字符串
if(typeof data.type!=='undefined'){data.type+='';}});});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 获取网络类型
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   * @return {Promise<Object>}
   *
   * @example
   * SNC.getNetworkType({
   *   success(data) {
   *     // data.networkType: <wifi|4g|3g|none>
   *     console.log(data)
   *   }
   * })
   */ctx.getNetworkType=ctx.definedMethod('hb.core.getNetworkType');});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function(ctx){/**
   * 获取系统信息
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   * @return {Promise<Object>}
   *
   * @example
   * SNC.getSystemInfo({
   *   success(data) {
   *     // data.version app 版本
   *     // data.system 手机系统版本
   *     // data.platform 系统平台 iOS: 苹果，Android: 安卓
   *     // data.language 系统语言
   *     // data.pixelRatio 像素比
   *     // data.modal 机型
   *     console.log(data)
   *   }
   * })
   */ctx.getSystemInfo=ctx.definedMethod('hb.core.getSystemInfo');});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/utils/index.js + 1 modules
var utils = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/const/navitageActionType.js
var navitageActionType = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/libs/raf-polyfill.js
var raf_polyfill = __webpack_require__(47);
var raf_polyfill_default = /*#__PURE__*/__webpack_require__.n(raf_polyfill);

// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/libs/debounce.js
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked, or until the next browser frame is drawn. The debounced function
 * comes with a `cancel` method to cancel delayed `func` invocations and a
 * `flush` method to immediately invoke them. Provide `options` to indicate
 * whether `func` should be invoked on the leading and/or trailing edge of the
 * `wait` timeout. The `func` is invoked with the last arguments provided to the
 * debounced function. Subsequent calls to the debounced function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * If `wait` is omitted in an environment with `requestAnimationFrame`, `func`
 * invocation will be deferred until the next frame is drawn (typically about
 * 16ms).
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `debounce` and `throttle`.
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0]
 *  The number of milliseconds to delay; if omitted, `requestAnimationFrame` is
 *  used (if available).
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', debounce(calculateLayout, 150))
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }))
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * const debounced = debounce(batchLog, 250, { 'maxWait': 1000 })
 * const source = new EventSource('/stream')
 * jQuery(source).on('message', debounced)
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel)
 *
 * // Check for pending invocations.
 * const status = debounced.pending() ? "Pending..." : "Ready"
 */function debounce(func,wait,options){var lastArgs=void 0,lastThis=void 0,maxWait=void 0,result=void 0,timerId=void 0,lastCallTime=void 0;var lastInvokeTime=0;var leading=false;var maxing=false;var trailing=true;// Bypass `requestAnimationFrame` by explicitly setting `wait=0`.
var useRAF=!wait&&wait!==0&&typeof window.requestAnimationFrame==='function';if(typeof func!='function'){throw new TypeError('Expected a function');}wait=+wait||0;if(utils["a" /* default */].isObject(options)){leading=!!options.leading;maxing='maxWait'in options;maxWait=maxing?Math.max(+options.maxWait||0,wait):maxWait;trailing='trailing'in options?!!options.trailing:trailing;}function invokeFunc(time){var args=lastArgs;var thisArg=lastThis;lastArgs=lastThis=undefined;lastInvokeTime=time;result=func.apply(thisArg,args);return result;}function startTimer(pendingFunc,wait){if(useRAF){return window.requestAnimationFrame(pendingFunc);}return setTimeout(pendingFunc,wait);}function cancelTimer(id){if(useRAF){return window.cancelAnimationFrame(id);}clearTimeout(id);}function leadingEdge(time){// Reset any `maxWait` timer.
lastInvokeTime=time;// Start the timer for the trailing edge.
timerId=startTimer(timerExpired,wait);// Invoke the leading edge.
return leading?invokeFunc(time):result;}function remainingWait(time){var timeSinceLastCall=time-lastCallTime;var timeSinceLastInvoke=time-lastInvokeTime;var timeWaiting=wait-timeSinceLastCall;return maxing?Math.min(timeWaiting,maxWait-timeSinceLastInvoke):timeWaiting;}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime;var timeSinceLastInvoke=time-lastInvokeTime;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return lastCallTime===undefined||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait;}function timerExpired(){var time=Date.now();if(shouldInvoke(time)){return trailingEdge(time);}// Restart the timer.
timerId=startTimer(timerExpired,remainingWait(time));}function trailingEdge(time){timerId=undefined;// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
if(trailing&&lastArgs){return invokeFunc(time);}lastArgs=lastThis=undefined;return result;}function cancel(){if(timerId!==undefined){cancelTimer(timerId);}lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined;}function flush(){return timerId===undefined?result:trailingEdge(Date.now());}function pending(){return timerId!==undefined;}function debounced(){var time=Date.now();var isInvoking=shouldInvoke(time);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}lastArgs=args;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined){return leadingEdge(lastCallTime);}if(maxing){// Handle invocations in a tight loop.
timerId=startTimer(timerExpired,wait);return invokeFunc(lastCallTime);}}if(timerId===undefined){timerId=startTimer(timerExpired,wait);}return result;}debounced.cancel=cancel;debounced.flush=flush;debounced.pending=pending;return debounced;}/* harmony default export */ var libs_debounce = (debounce);
// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/libs/throttle.js
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds (or once per browser frame). The throttled function
 * comes with a `cancel` method to cancel delayed `func` invocations and a
 * `flush` method to immediately invoke them. Provide `options` to indicate
 * whether `func` should be invoked on the leading and/or trailing edge of the
 * `wait` timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * If `wait` is omitted in an environment with `requestAnimationFrame`, `func`
 * invocation will be deferred until the next frame is drawn (typically about
 * 16ms).
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `throttle` and `debounce`.
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0]
 *  The number of milliseconds to throttle invocations to; if omitted,
 *  `requestAnimationFrame` is used (if available).
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', throttle(updatePosition, 100))
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * const throttled = throttle(renewToken, 300000, { 'trailing': false })
 * jQuery(element).on('click', throttled)
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel)
 */function throttle(func,wait,options){var leading=true;var trailing=true;if(typeof func!='function'){throw new TypeError('Expected a function');}if(utils["a" /* default */].isObject(options)){leading='leading'in options?!!options.leading:leading;trailing='trailing'in options?!!options.trailing:trailing;}return libs_debounce(func,wait,{leading:leading,maxWait:wait,trailing:trailing});}/* harmony default export */ var libs_throttle = (throttle);
// CONCATENATED MODULE: ./node_modules/@mfelibs/client-jsbridge/src/sdk/appApis/URLNavigateTo.js
/* harmony default export */ var URLNavigateTo = __webpack_exports__["default"] = (function(ctx){// 添加 throttle，防止快速点击时打开多个 webview
var WAIT_TIME=600;/**
   * 通用页面跳转协议，具体用法及传参请参照 {@link http://wiki.intra.sina.com.cn/pages/viewpage.action?pageId=163810732|wiki}
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {String} options.id - 通用业务 id
   * @param {String} options.url - 网页地址
   * @param {Number} options.actionType - 跳转类型码（详见 {@link http://wiki.intra.sina.com.cn/pages/viewpage.action?pageId=163810732#URLNavigateTov20-actionType|wiki·actionType}）
   * @param {String} options.action - 跳转类型名称名称（为 actionType 的语义化别名, 详见 {@link URLNavigateTo/action}）
   * @param {String} [options.route] - 页面二级路由
   * @param {Object} [options.ext] - 业务拓展字段
   * @param {String} [options.autoClose] 关闭后跳转（弹窗用）
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   *
   * @example
   * // 跳转正文
   * SNC.URLNavigateTo({
   *   id: 'fxszmaa1849792-comos-news-cms',
   *   action: 'article'
   * })
   *
   * // 打开网页
   * SNC.URLNavigateTo({
   *   url: 'https://sina.cn',
   *   action: 'web'
   * })
   *
   * // 通过 actionType 码跳转
   * // 当 actionType 与 action 同时存在时，以 actionType 优先
   * SNC.URLNavigateTo({
   *   id: 'fxszmaa1849792-comos-news-cms',
   *   actionType: 2
   * })
   */ctx.URLNavigateTo=libs_throttle(function(options){var data=utils["a" /* default */].filterParams(options);// 优先判断 actionType
if(data.actionType!==undefined){// 新版协议标识
data.apiVersion=data.apiVersion||'2.0';}else if(data.action!==undefined){var actionName=getActionName(data.action);data.actionType=getActionType(actionName)||0;data.apiVersion=data.apiVersion||'2.0';}if(utils["a" /* default */].isAndroid&&data.autoClose){ctx.invoke('hb.bee.closeWindow');}// 为了对底层传参更加纯粹，去除 sdk 专用的 action 字段
delete data.action;return ctx.invoke('hb.core.URLNavigateTo',data,options);},WAIT_TIME,// 只允许调用一次
{trailing:false});function getActionName(action){var upperName=String(action).toUpperCase();// 使用 import * 导入 ACTION_TYPES 时，对象属性的 getter 被重写
// 因此不能使用 hasOwnProperty，这里使用 in 判断是否包含某个模块
var actionName=upperName in navitageActionType?upperName:'';if(actionName===''){console.warn('[SNC_URLNavigateTo] action <'+action+'> is not support');}return actionName;}function getActionType(actionName){return navitageActionType[actionName];}});

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// requestAnimationFrame
;(function(){var lastTime=0;var vendors=['ms','moz','webkit','o'];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame'];}if(!window.requestAnimationFrame)window.requestAnimationFrame=function(callback,element){var currTime=Date.now();var timeToCall=Math.max(0,16-(currTime-lastTime));lastTime=currTime+timeToCall;return window.setTimeout(function(){callback(currTime+timeToCall);},timeToCall);};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(id){clearTimeout(id);};})();

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);