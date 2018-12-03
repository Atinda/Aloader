百亨APP
=======


## Build Setup

``` bash
# 安装依赖包
npm install

# 重新加载运行项目
npm run dev

# 打包项目
npm run build

# 查看分析报告
npm run build --report
```
项目依赖库
---------

* [vue](https://cn.vuejs.org)                           项目前端使用的主要框架技术栈
* [vuex](https://vuex.vuejs.org)                        项目的状态管理库
* [VUX](https://vux.li)                                 使用基于vue的移动端ui库
* [vue-router](https://router.vuejs.org)                使用官方推荐的路由
* [less](http://lesscss.org)                            预编译语言
* [font-awesome](http://fontawesome.dashgame.com)       项目使用的主要图标库


项目结构
--------

```
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径文件
├── src                                         // 源码目录
│   ├── api                                     // 所有请求API的存放文件
│   │   ├── index.js                            // API配置
│   ├── assets                                  // 资源文件
│   │   ├── images                              // 图片文件
│   │   │   ├── homepage                        // 主页
│   │   │   │   └── pReporting                  // 生产报工
│   │   │   ├── information                     // 消息视图
│   │   │   ├── logo                            // logo标识
│   │   │   └── user                            // 个人中心
│   │   ├── scripts                             // script文件
│   │   └── styles                              // style文件
│   ├── common                                  // 公共组件文件
│   ├── components                              // 页面的视图文件
│   │   ├── homepage                            // 首页视图文件
│   │   │   ├── children                        // 子视图文件
│   │   │   │   ├── mManagement.vue             // 机台管理视图
│   │   │   │   ├── myTask.vue                  // 我的任务视图
│   │   │   │   ├── oManagement.vue             // 订单管理视图
│   │   │   │   ├── pFeeding.vue                // 生产投料视图
│   │   │   │   ├── pManagement.vue             // 生产管理视图
│   │   │   │   ├── pPlan.vue                   // 生产计划视图
│   │   │   │   ├── pReporting.vue              // 生产报工视图
│   │   │   │   ├── pSchedule.vue               // 生产进度视图
│   │   │   │   └── qManagement.vue             // 品质管理视图
│   │   │   └── homepage.vue                    // 首页视图
│   │   ├── information                         // 消息视图文件
│   │   │   ├── children                        // 子视图文件
│   │   │   │   └── vchat.vue                   // 生产进度视图
│   │   │   └── information.vue                 // 消息视图
│   │   ├── mailist                             // 联系人视图文件
│   │   │   └── mailist.vue                     // 联系人视图
│   │   ├── user                                // 个人中心视图文件
│   │   │   ├── children                        // 子视图文件
│   │   │   │   ├── contact.vue                 // 联系方式视图
│   │   │   │   ├── myQRcode.vue                // 我的二维码视图
│   │   │   │   ├── newtop.vue                  // 关于新杰视图
│   │   │   │   ├── password.vue                // 修改密码视图
│   │   │   │   ├── setUp.vue                   // 设置视图
│   │   │   │   └── userInfo.vue                // 个人信息视图
│   │   │   └── user.vue                        // 个人中心视图
│   │   ├── home.vue                            // 主页视图
│   │   └── login.vue                           // 登陆视图
│   ├── router                                  // 路由文件(页面跳转)
│   │   ├── home.js                             // 主页路由
│   │   ├── homepage.js                         // 首页路由
│   │   ├── index.js                            // 总路由的配置
│   │   ├── information.js                      // 消息路由
│   │   ├── login.js                            // 登录路由
│   │   ├── mailist.js                          // 联系人路由
│   │   └── user.js                             // 个人中心路由
│   ├── store                                   // 项目的状态管理vuex文件
│   │   ├── modules                             // 子项状态文件
│   │   │   ├── home.js                         // 主页状态
│   │   │   ├── homepage.js                     // 首页状态
│   │   │   ├── information.js                  // 消息状态
│   │   │   ├── login.js                        // 登录状态
│   │   │   ├── mailist.js                      // 通讯状态
│   │   │   └── user.js                         // 个人状态
│   │   ├── actions.js                          // 提交状态修改(异步)
│   │   ├── getters.js                          // 派生状态
│   │   ├── index.js                            // 状态配置
│   │   ├── mutations.js                        // 提交状态修改(同步)
│   │   └── state.js                            // 存储状态
│   ├── App.vue                                 // 整个工程项目的页面入口视图
│   └── main.js                                 // 程序入口js，加载各种公共组件
├── index.html                                  // 入口html

```
项目功能需求图
-------------
![Image text](https://github.com/ATwins-8/newtop/blob/master/baihengAPP/src/assets/images/designChart/%E7%99%BE%E4%BA%A8APP%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84%E9%9C%80%E6%B1%82%E5%9B%BE2.png)
      

项目编码规范
-----------
```
    >命名语义化<
    
├──命名
│   ├── 文件             // 以驼峰命名
│   ├── 页面视图         // 以驼峰命名
│   ├── 函数             // 以驼峰命名
│   ├── css
│   │   ├── class        // 以驼峰+中划线- calssName-childreName 子元素开头包含一个父元素的类名
│   │   └── id           // 以驼峰+下划线——  idName_childreName 子元素开头包含一个父元素的id
├──

```