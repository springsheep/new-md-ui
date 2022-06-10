<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-06-10 09:30:42
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-06-10 10:38:37
-->

## 介绍

基于 ant-design-vue 封装的一套组件库，主要是增强了部分组件的功能，例如 Upload、DatePicker 等，同时新增了文件预览、自动提示组件等。

## 安装

```bash
# npm
npm i antdv-h-ui

# yarn
yarn add antdv-h-ui
```

组件库依赖于 ant-design-vue 1.x 版本，如果没有安装：

```bash
# npm
npm i ant-design-vue@^1.7.8

# yarn
yarn add ant-design-vue@^1.7.8
```

## 全局引用

```js
import HUI from 'antdv-h-ui'

Vue.use(HUI)

// 全局设置 pageSize 和 textFill
Vue.use(HUI, {
  // 全局设置分页条数，这样就不用每个使用 table 组件的地方都自定义 pageSize 字段了
  pageSize: 20,
  // 全局设置空占位符，给 h-text-fill 组件使用的，也可以在 Vue 组件内通过 $textFill 访问
  textFill: '-',
})
```

## 使用

```vue
<h-upload v-model="files" />
```

## 代码和文档

[组件库 GitHub 地址](https://github.com/springsheep/h3c-ui.git)

组件库已集成到[中后台前端脚手架]()，欢迎使用~
