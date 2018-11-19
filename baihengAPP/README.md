百亨APP
=======

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
项目依赖库
---------

* [vuex](https://vuex.vuejs.org)            项目的状态管理库
* [VUX](https://vux.li)                     一个基于vue的移动端ui库
* [vue-router](https://router.vuejs.org)    使用官方推荐的路由
* [less](http://lesscss.org/)               预编译语言

项目结构
--------

```
.
├── build                              // webpack配置文件
├── config                             // 项目打包路径
├── src                                // 源码目录
│   ├── api                            // 所有请求API的存放文件
│   │   └── imges                      // 存放图片
│   ├── common                         // 公共组件
│   ├── components                     // 各个页面的视图文件
│   ├── router                         // 路由文件
│   │   └── index.js                   // 路由的配置及跳转
│   ├── store                          // 项目的状态管理vuex
│   ├── App.vue                        // 整个工程项目的视图挂载点
│   ├── main.js                        // vue实例的创建挂载,及使用的router组件等插件的主要入口文件
└── index.html                         // 入口html文件
.

```