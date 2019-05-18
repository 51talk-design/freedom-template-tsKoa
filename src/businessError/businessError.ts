const format = require("string-format");

/**
 * 业务异常封装
 * @class
 * @extends {Error}
 */
export class BusinessError extends Error {
  errorCode: number;
  message: string;

  /**
   * 构造器，初始化相关信息
   * @constructor
   * @param {number} errorCode 错误码
   * @param {string} message 错误信息
   */
  constructor(errorCode, message) {
    super();
    this.errorCode = errorCode;
    this.message = message;
  }

  /**
   * 获取错误信息，用于controller的基本校验的参数返回
   * @param key 错误信息对应的key
   * @param fields 字段名称，可选参数
   * @return {string} 返回获取到的错误信息
   */
  static getErrorMessage(key: string, ...fields): string {
    return format(...[ErrorMessage[key]].concat(...fields));
  }

  /**
   * 获取错误信息，用于controller的基本校验的参数返回
   * @param key 错误信息对应的key
   * @return {string} 返回获取到的错误信息
   */
  static getErrorMsg(key: string): string {
    return ErrorMessage[key];
  }
}

let ErrorMessage = {
  "NotNull": "传递的参数不正确,{0}值不能为空！",
  "InvalidPattern": "传递的参数不正确,{0}值格式不正确！",
  "MustInteger": "传递的参数不正确,{0}值必须为整数！",
  "MustLargeThen": "传递的参数不正确,{0}值必须大于等于{1}",
  "MustLessThen": "传递的参数不正确,{0}值必须小于等于{1}",
  "NotAcceptable": "数据格式不正确！"
};