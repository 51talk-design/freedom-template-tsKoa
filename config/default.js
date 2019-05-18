/**
 * 源码编译目录
 */
module.exports.compiledDir = "build";

/**
 * 服务端口
 */
module.exports.serverPort = 9696;

// 用户会话相关配置
module.exports.sessionConfig = {
  keys: ['8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92'], // keys 暂设置为ts+koa字符串sha256值
  key: 'ts+koa',
  maxAge: 60 * 60 * 24 * 1000,
  signed: true
}

/**
 * 中间件列表
 * @type {string[]}
 */
module.exports.middlewares = [
  "CustomErrorHandlerMiddleware"
];