export default function (ctx) {
  /**
  * 启用下拉刷新
  *
  * @memberof sncClass
  * @function
  * @param {Object} options
  * @param {String} options.theme 主题，暂时不用
  * @param {successCallback} options.success
  * @param {errorCallback} options.error
  * @param {completeCallback} options.complete
  * @return {Promise<Object>}
  *
  * @example
  * SNC.enablePullDownRefresh({
  *   theme: '',
  *   success(response) {}
  * })
  */
 ctx.enablePullDownRefresh = ctx.definedMethod('hb.core.enablePullDownRefresh')
}
