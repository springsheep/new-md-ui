<template><div><!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-06-10 10:40:21
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-06-10 10:43:36
-->
<hr>
<h2 id="title-select-下拉列表" tabindex="-1"><a class="header-anchor" href="#title-select-下拉列表" aria-hidden="true">#</a> title: Select 下拉列表</h2>
<h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2>
<p>常见的列表搜索 自定义搜索筛选栏组件封装 vue 后台管理系统，会有很多表格页面，表格上方会有一些搜索选项。表格直接使用 a-table 即可，而搜索栏区域每次写起来都很繁琐，且多人开发情况下每个人写的样式都不相同，布局样式无法统一。</p>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h2>
<layout-code-box title="基础使用" description="最简单的使用方式">
  <demo-search-wrap1 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/search/wrap1.vue
  </highlight-code>
</layout-code-box>
<layout-code-box title="结合 FormModel 使用" description="支持在 FormModel 中使用，支持表单校验。">
  <demo-search-wrap2 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/search/wrap2.vue
  </highlight-code>
</layout-code-box>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<layout-table title="Attributes" :columns="columns" :dataSource="records" />
<layout-table title="Events" :columns="columns" :dataSource="eventsRecords" />
<h2 id="使用的类型" tabindex="-1"><a class="header-anchor" href="#使用的类型" aria-hidden="true">#</a> 使用的类型</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>formOptions: [
        {
          label: &quot;用户名很长是是是&quot;, // label文字
          prop: &quot;username&quot;, // 字段名
          type: &quot;input&quot;, // 指定antd组件
          defaultValue: &quot;阿黄&quot;, // 字段初始值
          placeholder: &quot;请输入用户名&quot;, // antd组件属性
          rules: [{ required: true, message: &quot;必填项&quot;, trigger: &quot;blur&quot; }], // antd组件属性
          events: {
            // antd组件方法
            input(val) {
              console.log(val);
            },
          },
        },
        {
          label: &quot;年龄&quot;, // label文字
          prop: &quot;age&quot;, // 字段名
          type: &quot;number&quot;, // 指定antd组件
          defaultValue: 18, // 字段初始值
          placeholder: &quot;请输入年龄&quot;, // antd组件属性
          rules: [{ required: true, message: &quot;必填项&quot;, trigger: &quot;blur&quot; }], // antd组件属性
          events: {
            // antd组件方法
            input(val) {
              console.log(val);
            },
          },
        },
        {
          label: &quot;性别&quot;, // label文字
          prop: &quot;sex&quot;, // 字段名
          type: &quot;select&quot;, // 指定antd组件
          defaultValue: &quot;&quot;, // 字段初始值
          placeholder: &quot;请选择性别&quot;, // antd组件属性
          options: [
            {
              label: &quot;男&quot;,
              value: &quot;1&quot;,
            },
            {
              label: &quot;女&quot;,
              value: &quot;2&quot;,
            },
          ],
          events: {
            // antd组件方法
            change(val) {
              console.log(val);
            },
          },
        },
        {
          label: &quot;下拉框&quot;, // label文字
          prop: &quot;address&quot;, // 字段名
          type: &quot;select&quot;, // 指定antd组件
          defaultValue: &quot;&quot;, // 字段初始值
          placeholder: &quot;请选择性别&quot;, // antd组件属性
          options: [],
          url: 'http://rap2api.taobao.org/app/mock/270426/city',
          methods: 'get',
          dicParamsList: [
            {
              key: 'token'
            },
            {
              key: 'bussinessId',
              value: '324'
            }
          ],
          filedName: {
            label: 'name',
            value: 'id'
          },
          propsHttpRes: 'data',
          events: {
            // antd组件方法
            change(val) {
              console.log(val);
            },
          },
        },
        {
          label: &quot;项目地址&quot;, // label文字
          prop: &quot;project&quot;, // 字段名
          type: &quot;cascader&quot;, // 指定antd组件
          defaultValue: [], // 字段初始值
          placeholder: &quot;请选择性别&quot;, // antd组件属性
          options: [],
          url: 'http://rap2api.taobao.org/app/mock/270426/getCascaderList',
          methods: 'get',
          dicParamsList: [
            {
              key: 'token'
            },
            {
              key: 'bussinessId',
              value: '324'
            }
          ],
          filedName: {
            label: 'name',
            value: 'id'
          },
          propsHttpRes: 'data',
          events: {
            // antd组件方法
            change(val) {
              console.log(val);
            },
          },
        },
        {
          label: &quot;到货日期&quot;, // label文字
          prop: &quot;arrialDate&quot;, // 字段名
          type: &quot;range-picker&quot;, // 指定antd组件
          defaultValue: [], // 字段初始值
          placeholder: &quot;请选择&quot;, // antd组件属性
          events: {
            // antd组件方法
            change(val) {
              console.log(val);
            },
          },
        },
        {
          label: &quot;发货日期&quot;, // label文字
          prop: &quot;delieverDate&quot;, // 字段名
          type: &quot;date-picker&quot;, // 指定antd组件
          defaultValue: '', // 字段初始值
          placeholder: &quot;请选择&quot;, // antd组件属性
          events: {
            // antd组件方法
            change(val) {
              console.log(val);
            },
          },
        },
      ],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

<script>
export default {
  data() {
    return {
      columns: ['参数', '说明', '类型', '可选值', '默认值'],
      records: [
        {
          0: 'formOptions',
          1: '配置条件',
          2: 'Object',
          3: '--',
          4: '--'
        },
        {
          0: 'needParams',
          1: '请求所需要的参数',
          2: ' Object',
          3: '--',
          4: '{}'
        },
      ],
      eventsRecords: [
        {
          0: 'onSearch',
          1: '点击搜索按钮',
          2: 'Function',
          3: '(e) => {}',
          4: '', 
        },
         {
          0: 'onReset',
          1: '点击重置按钮',
          2: 'Function',
          3: '(e) => {}',
          4: '', 
        }
      ]
    }
  }
}
</script>
