---
title: vue mixins form 使用
---

## 使用场景

基于混入来统一表单的样式，提供了常见的类型基于配置即可渲染页面，无需写 html

## 使用示例

<layout-code-box title="基础使用" description="最简单的使用方式">
  <demo-form-wrap1 />
  <highlight-code slot="codeText" lang="vue">
<<< @/src/.vuepress/components/demo/form/wrap1.vue
  </highlight-code>
</layout-code-box>

## API

<layout-table title="Attributes" :columns="columns" :dataSource="records" />

<layout-table title="data" :columns="columns" :dataSource="eventsRecords" />

<script>
export default {
  data() {
    return {
      columns: ['参数', '说明', '类型', '可选值', '默认值'],
      records: [
        {
          0: 'dividerTypeOne',
          1: '标题',
          2: '--',
          3: '--',
          4: '--'
        },
          {
          0: 'formscope',
          1: '自定义插槽',
          2: '--',
          3: '--',
          4: '--'
        },   {
          0: 'upLoad',
          1: '上传',
          2: '--',
          3: '--',
          4: '--'
        },   {
          0: 'autoComplete',
          1: '	自动完成',
          2: '--',
          3: '--',
          4: '--'
        },   {
          0: 'input',
          1: '输入框',
          2: '--',
          3: '--',
          4: '--'
        },   {
          0: 'textarea',
          1: '	文本框',
          2: '--',
          3: '--',
          4: '--'
        },   {
          0: '日期',
          1: '标题',
          2: '--',
          3: '--',
          4: '--'
        },   {
          0: 'datetimepicker',
          1: '日期',
          2: '--',
          3: '--',
          4: '--'
        },   {
          0: 'weektimepicker',
          1: '	周',
          2: '--',
          3: '--',
          4: '--'
        },   {
          0: 'link',
          1: 'a标签 link 回调函数输出值',
          2: '--',
          3: '--',
          4: '--'
        },   {
          0: 'select',
          1: '	级联',
          2: '--',
          3: '--',
          4: '--'
        },   {
          0: 'selectgroup',
          1: '带tip提示的下拉',
          2: '--',
          3: '--',
          4: '--'
        },   {
          0: 'radio',
          1: '单选框',
          2: '--',
          3: '--',
          4: '--'
        },   {
          0: 'inputNumber',
          1: '数字框',
          2: '--',
          3: '--',
          4: '--'
        },   {
          0: 'treeSelect',
          1: '	树',
          2: '--',
          3: '--',
          4: '--'
        },   {
          0: 'switch',
          1: '	开关',
          2: '--',
          3: '--',
          4: '--'
        },   {
          0: 'cascader',
          1: '	级联',
          2: '--',
          3: '--',
          4: '--'
        },
      ],
      eventsRecords: [
        {
          0: 'hideBottom',
          1: '	是否隐藏底部按钮',
          2: 'false 显示 true 隐藏 默认显示',
          3: '--',
          4: '--', 
        }, {
          0: 'bottomBtns',
          1: '	底部按钮渲染',
          2: "[{ name: '返回', method: 'page_back', type: 'normal' },{ name: '确定', method: 'getVals', type: 'primary' },]",
          3: '--',
          4: '--', 
        }, {
          0: 'layout',
          1: '	form 布局',
          2: '	默认是horizontal 支持vertical和horizontal 行内暂时有bug',
          3: '--',
          4: '--', 
        }, {
          0: 'labelCol',
          1: '	label 和wrap 占比',
          2: '',
          3: '--',
          4: '--', 
        }, {
          0: 'formName',
          1: '	表单的ref 属性',
          2: '可用通过refs 属性来操作',
          3: '--',
          4: '--', 
        }, {
          0: 'items',
          1: '	表单的配置数组',
          2: '',
          3: '--',
          4: '--', 
        },
      ]
    }
  }
}
</script>
