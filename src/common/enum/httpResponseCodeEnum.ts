
/**
 * 接口返回给客户端的error code的枚举
 * @class
 */
export class HttpResponseCodeEnum {

  /**
   * 获取数据成功
   * @return {number}
   */
  static get Ok(): number {
    return 200;
  }

  /**
   * 请求参数有错误
   * @return {number}
   */
  static get Invalid(): number {
    return 400;
  }

  /**
   * 用户请求的格式不正确
   * @return {number}
   */
  static get NotAcceptable(): number {
    return 406;
  }

  /**
   * 用户未授权
   * @return {number}
   */
  static get Unauthorized(): number {
    return 401;
  }

  /**
   * 参数校验失败
   * @return {number} 返回422状态码
   */
  static get Unprocesable(): number {
    return 422;
  }

  /**
   * 数据存在冲突
   * @return {number} 返回409状态码
   */
  static get Conflict(): number {
    return 409;
  }

  /**
   * 禁止用户访问
   * @return {number} 返回403状态码
   */
  static get Forbidden(): number {
    return 403;
  }

  /**
   * 请求的数据格式不正确
   * @return {number} 返回415状态码
   */
  static get UnsupportedMediaType(): number {
    return 415;
  }

  /**
   * 请求不存在
   * @return {number} 返回404状态码
   */
  static get NotFound(): number {
    return 404;
  }

  /**
   * 服务器内部错误
   * @return {number} 返回500状态码
   */
  static get InternalServerError(): number {
    return 500;
  }
}