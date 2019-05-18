require("reflect-metadata");
const Koa = require("koa");
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const session = require('koa-session');
const path = require('path');
const conf = require("config");
const ContainerManager = require("typedi");
const UseServer = require("freedom-routing-controllers");

//端口设置
process.env.PORT = process.env.PORT || conf.serverPort;

//中间件配置
const middlewaresConfig = conf.middlewares;
//源码编译目录
const buildDir = conf.compiledDir;
//依赖注入的文件配置
const dependencyInjectConf = conf.dependencyInjectConf;
//获取文件加载器单例对象
const fileLoader = require(`../${buildDir}/utils/FileLoader.js`).FileLoader.getInstance();
//加载文件
fileLoader.load(buildDir, dependencyInjectConf);
const koaInstance = new Koa();
const middlewaresBasePath = `${process.cwd()}/${buildDir}/middlewares`;
let middlewares = [];
middlewaresConfig.map(function (item) {
  middlewares.push(`${middlewaresBasePath}/${item}.js`);
});

UseServer.useContainer(ContainerManager.Container);
const app = UseServer.useKoaServer(koaInstance, {
  controllers: [process.cwd() + `/${buildDir}/controllers/**/*.js`],
  middlewares: middlewares,
  classTransformer: true,
  // defaultErrorHandler: false
});
//视图注册
app.use(views(path.resolve(__dirname, '../web/views'), {
  map: {
    html: 'underscore'
  }
}));

// error handler
onerror(app);

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());

// session 配置
const sessionConfig = conf.sessionConfig;
app.keys = sessionConfig.keys;
app.use(session(sessionConfig, app));

//加载应用下的所有中间件
/* middlewaresConfig.map(function (item) {
  app.use(require(`../${buildDir}/middlewares/${item}`)());
}); */

//指定静态资源的访问目录
app.use(require('koa-static')(path.resolve(__dirname, "../web/public/static")));


module.exports = app;


