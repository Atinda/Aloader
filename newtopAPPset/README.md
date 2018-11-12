# newtop-app

> use mint-ui project

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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

工程项目主体文件目录结构如下：

src
    -assets                         // 存放基础样式或图片
        -imges                      // 存放图片
    -axios                          // 所有请求API存放文件
    -common                         // 公共组件
        -headerTab.vue              // 头部title和返回及分享
    -components                     // 各个页面的视图文件
        -homepage                   // 首页文件
            -homepage.vue           // 首页视图组件
        -information                // 消息文件
            -information.vue        // 消息视图组件
        -mailist                    // 通讯录文件
            -mailist                // 通讯录视图组件
        -user                       // 个人中心文件
            -user                   // 个人信息视图组件
        -home.vue                   // 主页组件
        -login.vue                  // 登陆页面组件
    -router                         // 路由文件
        -index.js                   // 路由的配置及跳转
    -App.vue                        // 整个工程项目的视图挂载组件
    -main.js                        // vue实例的创建挂载,及使用的router组件插件等等的主要入口文件
index.html                          // 原生HTML,也是vue实例挂载的真实DOM