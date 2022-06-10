<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-06-10 10:32:21
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-06-10 10:32:21
-->

## **1. 开发环境搭建**

### **1.1 准备**

- VSCode
- Git
- Sourcetree
- Node.js
- yarn
- eslint

### **1.2 安装 VSCode**

请在 [VisualStudioCode 官网](https://code.visualstudio.com/) 下载最新版本的 VSCode，或者请在 [JenBrains 官网](https://www.jetbrains.com/webstorm/) 下载安装 WebStorm

### **1.3 安装 Git**

1. 请在 [Git 官网](https://git-scm.com/download/) 下载相应版本的 Git。
2. 本地执行安装文件，安装 Git 环境。
3. 打开 Windows 命令行终端，执行如下命令，有相应的版本提示则表示 Git 安装成功
   $ git --version

- _对于**Windows**，安装**Git**以后，你可以在任意目录右键，选择**Git Bash Here**。_
- _打开的**MINGW**命令窗口可以执行兼容**linux**系统的命令。_

4. 配置本地 git:

# 请将下面命令按实际情况进行执行

git config --global user.name "Your Name"

git config --global user.email "Your Email"

### **1.4 安装 Sourcetree**

1. 请在 [Sourcetree 官网](https://www.sourcetreeapp.com/)下载相应版本的 Sourcetree。
2. 工具使用方式详见《代码管理规范》
3.

### **1.5 安装 node.js**

1. 请在在 [node.js 官网](https://nodejs.org/en/download/)下载用于 Windows 平台的安装包。
2. 本地执行安装文件，安装 node.js 环境。
3. 在 Windows 命令行终端，执行如下命令，有相应版本提示则表示 node.js 安装成功。
   $ node -v

# v12.22.10

$ npm -v

# 6.14.16

### **1.6 安装 yarn**

npm 是 node.js 的包管理工具（package manager），node.js 安装中包含 npm 的安装，故使用 npm 来安装 yarn

$ npm install yarn -g

在 Windows 命令行终端，执行如下命令，有相应版本提示则表示 yarn 安装成功。

$ yarn -v

# 1.22.4

### **1.7 安装 eslint**

在项目中采用 eslint 语法检查工具，所以您需要全局安装 eslint

$ npm install eslint -g

# eslint -v

或者使用 yarn

$ yarn global add eslint

# eslint -v

## **2 npm 私有源配置**

在项目中，npm 包是从仓库中下载，所以您需要配置 npm 源地址，默认地址是 https://registry.npm.taobao.org/

> npm config set registry 私有源地址

推荐使用[nrm](https://www.jianshu.com/p/5ec39caa01cd)来管理源地址。将私有域地址设置为: [http://nexus.eos.h3c.com/repository/npm-group/](http://nexus.eos.h3c.com/repository/npm-group/)

## **3 创建项目**

详见《在线脚手架-前端工程选配》

## 4 工程项目结构说明

````plain
```markdown
── project-name
   ├── .husky                       Git 提交规范文件
   ├── deploy                       部署nginx相关设置
   ├── public                       项目公共目录
   │   ├── favicon.ico                  Favourite 图标
   │   └── index.html                   页面入口 HTML 模板
   ├── src                          项目源码目录
   │   ├── api                          把所有请求数据的接口，按照模块在单独的JS文件中
   │   │   ├── home.js                      首页接口
   │   │   ├── detail.js                    详情页接口，等等
   │   │   ···
   │   ├── assets                       静态资源目录，公共的静态资源，图片，字体等
   │   │   ├── icons                        字体资源
   │   │   ├── images                       图片资源
   │   │   ···
   │   ├── components                   公共组件目录
   │   │   ├── confirm                      弹框组件
   │   │   │   └── index.vue
   │   │   ├── scroll                       局部内容滚动组件
   │   │   │   └── index.vue
   │   │   ···
   |   ├── config                       项目全局配置信息
   |   |   ├── defaultSetting.js            ant design vue 项目默认配置项
   |   |   ├── router.config.js             项目路由配置信息
   |   |—— core                         全局指令，插件，缓存等
   |   |   ├── directives                   自定义指令文件目录
   |   |       ├── action.js                    Action 权限指令
   |   |   ├── bootstrap.js                 执行项目启动时必须要用到的配置信息及缓存
   |   |   ├── icons.js                     统一管理的自定义图标加载表
   |   |   ├── lay_use.js                   Ant Design Vue 组件懒加载，以及定义的全局组件注册
   |   |   ├── use.js                       Vue插件注册入口文件
   |   ├── data                         常量，全局数据
   |   │   ├── address.js                   省市区全量数据
   |   ├── layouts                      布局组件目录
   |   │   ├── BasicLayout.less             基础布局样式文件
   |   │   ├── BasicLayout.vue              基础布局组件
   |   │   ├── BlankLayout.vue              备选的自定义布局组件，空文件
   |   │   ├── index.js                     布局组件整体module输出文件
   |   │   ├── PageView.vue                 全局封装的page-header-wrapper组件，包含面包屑等元素
   |   │   ├── RouteView.vue                全局封装的路由跳转组件，可进行页面缓存及multitab（multitab是项目中自定义的顶部导航组件）的设置
   |   │   ├── UserLayout.vue               用户登录页面的布局组件
   |   │   ...
   │   ├── locales                      国际化语言配置
   |   │   ├── lang                         语言文件列表
   |   │       ├── en-US.js                     英文
   |   │       ├── zh-CN.js                     中文
   |   │   ├── index.js                     整体module输出文件
   │   │   ···
   │   ├── mixins                       公共的mixin混合文件
   │   │   ├── BreadMixin.js                面包屑混入，通过约定路由参数breadcrumbName自定义面包屑末尾名称
   │   │   ├── TableMixin.js                表格页面混入，定义通用的增删改查等操作，与FormMixin.js共同使用快速建立页面模板，与FormMixin.js文件存在一定程度的耦合
   │   │   ├── FormMixin.js                 表单面混入，定义通用的表单操作
   │   │   ···
   │   ├── mock                         mock文件目录，通过环境变量process.env.VUE_APP_PREVIEW开启
   │   │   ···
   │   ├── router                       路由配置目录
   │   │   ├── generator-routers.js         通过用户角色和权限动态添加，删除菜单及路由信息
   │   │   ···
   │   ├── store                        数据中心
   │   │   ├── modules                      store模块目录
   │   │   │   └── app.js                       app全局配置数据
   │   │   │   └── user.js                      用户数据
   │   │   │   ...
   │   │   ├── app-mixin.js                 app全局配置数据混入，主要是geely-design的布局信息
   │   │   ├── device-mixin.js              设备信息数据混入
   │   │   ├── i18n-mixin.js                国际化信息数据混入
   │   │   ├── mutation-types.js            定义 Mutations 的类型
   │   │   ├── getters.js                   获取数据的方法定义
   │   │   └── index.js                     数据中心入口文件
   │   │   ...
   │   ├── style                        全局样式目录
   │   │   ├── global.less                  公共样式信息
   │   │   ···
   │   ├── utils                        通用脚本文件
   │   │   ├── axios                        axios文件封装
   │   │   ···
   │   ├── views                        页面目录，所有业务逻辑的页面都应该放这里
   │   │   ├── home                         应用首页
   │   │   │   └── index.vue
   │   │   ···
   │   ├── main.js                      入口js文件
   │   ├── App.vue                      根组件
   │   └── permission.js                权限判断及路由拦截器
   ├── .browserslistrc               浏览器相关设置
   ├── .editorconfig                 编辑器相关设置
   ├── .env.development              Vue 开发环境的配置
   ├── .env.production               Vue 生成环境的配置
   ├── .eslintignore                 Eslint 配置忽略文件
   ├── .eslintrc.js                  Eslint 配置文件
   ├── .gitignore                    Git 忽略文件
   ├── .prettierignore               prettier 忽略文件
   ├── .prettierrc                   prettier 配置文件
   ├── Dockerfile                    Docker 配置文件
   ├── Jenkinsfile                   Jenkins 配置文件
   ├── LICENSE                       LICENSE
   ├── README.md                     README.md
   ├── babel.config.js               Babel 配置文件
   ├── commitlint.config.js          Git 提交commit钩子类型设置
   ├── jsconfig.json                 JS 功能配置文件
   ├── package.json                  包依赖文件
   └── vue.config.js                 vue/cli 项目脚手架配置
````

```

## 5 上线EOS

### 4.1 流水线构建

### 4.2 服务部署

### 5.3 接口文档

### 5.4 服务治理

### 5.5 监控告警


```
