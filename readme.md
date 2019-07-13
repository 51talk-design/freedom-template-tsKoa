### 项目工程模板介绍

此工程模板基于Typescript、koa2搭建，使得开发web应用变得几乎跟java类似，强类型的使用使得我们能更方便的维护应用业务逻辑，编译阶段即可发现潜在的由于类型使用不正确而导致的应用错误

此项目工程模板使用的是**routing-controllers**，在此感谢该框架的作者，详情请查看[routing-controllers](https://github.com/typestack/routing-controllers)

### 特点

- 引入Typescript，开发使用强类型，开发上更直观，业务逻辑呈现更清晰，维护更好
- 引入依赖注入，开发完全面向接口，功能模块之间耦合更低
- 按照后端开发习惯，划分Controller、Service、Web等，更接近后端开发模式，完全面向对象
- 使用TJ大神的koa2这个nodejs的开发框架

### 如何使用

切换镜像地址

```
cnpm config set registry=https://registry.npm.taobao.org
```

安装依赖

```
cnpm install
```

开发调试

```
npm run dev
```

部署启动

```
npm start
```

项目重启

```
npm run restart
```

### 备注

实际创建项目的时候，如果需要修改工程名称，请修改**package.json**的name，以及把**package.json**的启动命令中的**freedom-template-tskoa**修改为实际的项目名称
