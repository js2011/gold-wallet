import parseApiResponse from './parseApiResponse';

const UA = window.navigator.userAgent;
const toString = Object.prototype.toString;
const isAndroid = UA.indexOf('Android') > -1 || UA.indexOf('Adr') > -1;
const isiOS = /iphone|ipod|ipad/gi.test(UA) && !isAndroid;
const isSinaApp = UA.indexOf('sinanews') > -1;
const isHybrid = UA.indexOf('hybrid') > -1;
const verStr = UA.match(/sinanews__[\w.-]+__/i);

const noop = () => {};
let iframeNode = null;
let _uuid = 0;

function generateUUID() {
  return _uuid++;
}

/**
 * @name utils
 * @private
 */
export default {
  /**
   * @memberof utils
   */
  isAndroid: isAndroid,

  isHybrid: isHybrid,
  /**
   * @memberof utils
   */
  isiOS: isiOS,
  /**
   * @memberof utils
   */
  isSinaApp: isSinaApp,
  appVersion: verStr ? verStr[0].split('__')[1] : '',
  /**
   * @memberof utils
   */
  generateUUID: generateUUID,
  /**
   * @memberof utils
   */
  sliceString(number) {
    var str = '0';
    if (number == 0 || number == null || typeof number == 'undefined') {
      return str;
    }
    str = number.toString().replace(/\.(.*?)$/g, '');
    if (str.length < 6) {
      return str;
    }
    str = str.slice(7, str.length);
    return str;
  },
  getAppVersion() {},

  /**
   * @memberof utils
   */
  bridgeFixCallback({
    options = {},
    param = {},
    response,
    resolve = noop,
    reject = noop,
    errorReport = noop,
    postHook,
    name
  }) {
    response = this.strToObject(response);
    // errDescription 别名
    response.errMsg = response.errDescription;

    // 网络接口包含 statusCode 接口，单独处理
    if (name === 'fetch') {
      if (response.errCode === undefined) {
        // 兼容不同情况 by zhaopeng
        options.success && options.success(response)
        resolve(response)
      } else if (response.errCode == '0' && response.data.statusCode == 200) {
        options.success &&
          options.success(response.data.data, {
            statusCode: +response.data.statusCode,
            timestamp: response.timestamp,
            data: response.data.data
          });
        resolve(response.data.data);

        //   if (param.cache) {
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
      } else {
        const errMsg = this.getAPIErrorMsg(response, name);
        // @TODO 错误上报
        options.error && options.error(errMsg, response);
        reject(errMsg, response);
        errorReport({ msg: errMsg });
      }
    } else {
      // 通用接口
      if (response.errCode == '0' || response.errCode === undefined) {
        // 兼容不同情况 by zhaopeng
        this.isFunction(postHook) && postHook(response);
        options.success && options.success(response.data, options);
        resolve(response.data);
      } else {
        const errMsg = this.getAPIErrorMsg(response, name);
        // @TODO 错误上报
        options.error && options.error(errMsg, response);
        reject(errMsg, response);
      }
    }

    options.complete && options.complete(response);
  },
  /**
   * @memberof utils
   */
  isFunction(v) {
    return toString.call(v) === '[object Function]';
  },
  /**
   * @memberof utils
   */
  isObject(obj) {
    return toString.call(obj) === '[object Object]';
  },
  /**
   * @memberof utils
   */
  createIframeRquest(url) {
    if (!iframeNode) {
      iframeNode = document.createElement('iframe');
      iframeNode.style.display = 'none';
      document.documentElement.appendChild(iframeNode);
    }

    //不删除iframe，留作复用
    iframeNode.src = url;
  },

  /**
   * @memberof utils
   */
  camelCaseByDot(name) {
    const arr = name.split('.');
    const upperFirstChar = str =>
      str.replace(/^[a-z]{1}/, match => match.toUpperCase());
    return arr.reduce((camel, cur) => camel + upperFirstChar(cur));
  },
  /**
   * 对象属性过滤器生成函数
   * @memberof utils
   * @param  {Array}  props  目标属性集
   * @param  {Boolean | Function} isDrop 对目标属性过滤模式
   * Boolean|自定义断言函数，默认为去除模式
   * @return {Function}        过滤器
   */
  filterObjProps(props, isDrop = true) {
    const exclude = key => props.indexOf(key) < 0;
    const include = key => !exclude(key);
    const filter = this.isFunction(isDrop)
      ? isDrop
      : isDrop
        ? exclude
        : include;

    return obj => {
      // ES5 Object.keys 参数必须为对象
      if (!this.isObject(obj)) return {};

      const assign = (data, key) => ((data[key] = obj[key]), data);

      return Object.keys(obj)
        .filter(filter)
        .reduce(assign, {});
    };
  },
  /**
   * @memberof utils
   */
  filterParams(data) {
    return this.filterObjProps(['success', 'fail', 'complete'])(data);
  },
  /**
   * @memberof utils
   */
  serializeData(data) {
    // ES5 Object.keys 参数必须为对象
    if (!this.isObject(data)) return '';

    return Object.keys(data)
      .map(key => `${key}=${data[key]}`)
      .join('&');
  },
  /**
   * android下处理特殊转义，android下必须转2次
   * @memberof utils
   */
  strToObject: parseApiResponse,

  getAPIErrorMsg(resObj, api = 'API') {
    const isNetworkApi = ['fetch'].indexOf(api) > -1;
    const errPrefix = `Invalid ${api} response`;
    let errMsg = '';

    // firstAjax 特殊处理
    // {
    //   response: {data, statusCode}
    //   state: 'remote' | 'cache' | 'timeout' | 'error'
    // }
    if (api === 'firstAjax') {
      resObj.response.errMsg = resObj.state;
      console.error(`[SNC_HANDLER] ${errPrefix}`, resObj.response);
      return resObj.state;
    }

    if (!this.isObject(resObj) || resObj['errCode'] === undefined) {
      errMsg = `need errCode`;
    } else if (isNetworkApi && resObj.data.statusCode === undefined) {
      errMsg = `need statusCode`;
    } else {
      errMsg = resObj['errDescription'];
    }

    console.error(`[SNC_HANDLER] ${errPrefix}: ${errMsg}`, resObj);

    return errMsg;
  },

  invokeLogger(api, data = {}) {
    try {
      console.log(`[SNC_CALL] Invoking ${api}`, data);
    } catch (e) {
      // 某些安卓机型的 console.log 不支持多参数
      console.log(`[SNC_CALL] Invoking ${api}: ${JSON.stringify(data)}`);
    }
  },

  // 忽略 undefined 属性
  // 在 JSON.stringify 过程中也会忽略 undefined
  mergeProp(...objs) {
    return objs.reduce((targetObj, currObj) => {
      // 过滤掉非对象参数，ES5 中 Object.keys 参数必须为对象
      if (!this.isObject(currObj)) currObj = {};

      Object.keys(currObj).forEach(p => {
        if (currObj[p] !== undefined) targetObj[p] = currObj[p];
      });

      return targetObj;
    }, {});
  }
};
