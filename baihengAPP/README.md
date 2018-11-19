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

* [vue](https://cn.vuejs.org)              项目前端使用的主要框架
* [vuex](https://vuex.vuejs.org)            项目的状态管理库
* [VUX](https://vux.li)                     一个基于vue的移动端ui库
* [vue-router](https://router.vuejs.org)    使用官方推荐的路由
* [less](http://lesscss.org)                预编译语言

项目结构
--------

```
├── build                              // webpack配置文件
├── config                             // 项目打包路径
├── src                                // 源码目录
│   ├── api                            // 所有请求API的存放文件
│   ├── assets                         // 公共资源
│   │   └── imges                      // 图片
│   ├── common                         // 公共组件
│   ├── components                     // 各个页面的视图文件
│   ├── router                         // 路由
│   │   └── index.js                   // 路由的配置
│   ├── store                          // 项目的状态管理vuex
│   ├── App.vue                        // 整个工程项目的页面入口文件
│   └── main.js                        // 程序入口文件，加载各种公共组件
├── index.html                         // 入口html文件
```