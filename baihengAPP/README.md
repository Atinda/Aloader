# baiheng

> 百亨APP

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

# 项目结构
```javascript
src
    -api                            // 所有请求API存放文件
    -assets                         // 存放基础样式或图片
        -imges                      // 存放图片
    -common                         // 公共组件
    -components                     // 各个页面的视图文件
    -router                         // 路由文件
        -index.js                   // 路由的配置及跳转
    -store                          // 项目的状态管理vuex
    -App.vue                        // 整个工程项目的视图挂载点
    -main.js                        // vue实例的创建挂载,及使用的router组件等插件的主要入口文件
index.html                          // 原生HTML,也是vue实例挂载的真实DOM
```
