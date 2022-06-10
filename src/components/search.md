<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-06-10 10:40:21
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-06-10 10:43:36
-->

---

## title: Select 下拉列表

## 使用场景

常见的列表搜索 自定义搜索筛选栏组件封装 vue 后台管理系统，会有很多表格页面，表格上方会有一些搜索选项。表格直接使用 a-table 即可，而搜索栏区域每次写起来都很繁琐，且多人开发情况下每个人写的样式都不相同，布局样式无法统一。

## 使用示例

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

## API

<layout-table title="Attributes" :columns="columns" :dataSource="records" />

<layout-table title="Events" :columns="columns" :dataSource="eventsRecords" />

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

## 使用的类型

```js
formOptions: [
        {
          label: "用户名很长是是是", // label文字
          prop: "username", // 字段名
          type: "input", // 指定antd组件
          defaultValue: "阿黄", // 字段初始值
          placeholder: "请输入用户名", // antd组件属性
          rules: [{ required: true, message: "必填项", trigger: "blur" }], // antd组件属性
          events: {
            // antd组件方法
            input(val) {
              console.log(val);
            },
          },
        },
        {
          label: "年龄", // label文字
          prop: "age", // 字段名
          type: "number", // 指定antd组件
          defaultValue: 18, // 字段初始值
          placeholder: "请输入年龄", // antd组件属性
          rules: [{ required: true, message: "必填项", trigger: "blur" }], // antd组件属性
          events: {
            // antd组件方法
            input(val) {
              console.log(val);
            },
          },
        },
        {
          label: "性别", // label文字
          prop: "sex", // 字段名
          type: "select", // 指定antd组件
          defaultValue: "", // 字段初始值
          placeholder: "请选择性别", // antd组件属性
          options: [
            {
              label: "男",
              value: "1",
            },
            {
              label: "女",
              value: "2",
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
          label: "下拉框", // label文字
          prop: "address", // 字段名
          type: "select", // 指定antd组件
          defaultValue: "", // 字段初始值
          placeholder: "请选择性别", // antd组件属性
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
          label: "项目地址", // label文字
          prop: "project", // 字段名
          type: "cascader", // 指定antd组件
          defaultValue: [], // 字段初始值
          placeholder: "请选择性别", // antd组件属性
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
          label: "到货日期", // label文字
          prop: "arrialDate", // 字段名
          type: "range-picker", // 指定antd组件
          defaultValue: [], // 字段初始值
          placeholder: "请选择", // antd组件属性
          events: {
            // antd组件方法
            change(val) {
              console.log(val);
            },
          },
        },
        {
          label: "发货日期", // label文字
          prop: "delieverDate", // 字段名
          type: "date-picker", // 指定antd组件
          defaultValue: '', // 字段初始值
          placeholder: "请选择", // antd组件属性
          events: {
            // antd组件方法
            change(val) {
              console.log(val);
            },
          },
        },
      ],
```
