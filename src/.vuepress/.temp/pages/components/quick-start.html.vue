<template><div><!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-06-10 09:30:42
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-06-10 10:38:37
-->
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>基于 ant-design-vue 封装的一套组件库，主要是增强了部分组件的功能，例如 Upload、DatePicker 等，同时新增了文件预览、自动提示组件等。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code># npm
npm i antdv-h-ui

# yarn
yarn add antdv-h-ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件库依赖于 ant-design-vue 1.x 版本，如果没有安装：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code># npm
npm i ant-design-vue@^1.7.8

# yarn
yarn add ant-design-vue@^1.7.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局引用" tabindex="-1"><a class="header-anchor" href="#全局引用" aria-hidden="true">#</a> 全局引用</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>import HUI from 'antdv-h-ui'

Vue.use(HUI)

// 全局设置 pageSize 和 textFill
Vue.use(HUI, {
  // 全局设置分页条数，这样就不用每个使用 table 组件的地方都自定义 pageSize 字段了
  pageSize: 20,
  // 全局设置空占位符，给 h-text-fill 组件使用的，也可以在 Vue 组件内通过 $textFill 访问
  textFill: '-',
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>&lt;h-upload v-model=&quot;files&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="代码和文档" tabindex="-1"><a class="header-anchor" href="#代码和文档" aria-hidden="true">#</a> 代码和文档</h2>
<p><a href="https://github.com/springsheep/h3c-ui.git" target="_blank" rel="noopener noreferrer">组件库 GitHub 地址</a></p>
<p>组件库已集成到<a href="">中后台前端脚手架</a>，欢迎使用~</p>
</div></template>
