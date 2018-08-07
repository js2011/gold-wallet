export default function (ctx) {
   /**
   * 打电话
   *
   * @memberof sncClass
   * @function
   * @param {Object} options
   * @param {String} options.phoneNumber 电话号码
   * @param {successCallback} options.success
   * @param {errorCallback} options.error
   * @param {completeCallback} options.complete
   * @return {Promise<Object>}
   *
   * @example
   * SNC.tellphone({
   *   phoneNumber: '110',
   *   success(response) {}
   * })
   */
  ctx.tellphone = ctx.definedMethod('hb.core.tellphone')
}
