<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-06-07 15:38:22
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-06-07 15:54:44
-->
<template>
  <h-searchForm
    :formOptions="formOptions"
    @onSearch="onSearch"
    @onReset="onReset"
  >
  </h-searchForm>
</template>

<script>
export default {
  data() {
    return {
      formOptions: [
        {
          label: "文本框", // label文字
          prop: "username", // 字段名
          type: "input", // 指定antd组件
          defaultValue: "阿黄", // 字段初始值
          placeholder: "请输入用户名", // antd组件属性
          events: {
            // antd组件方法
            input(val) {
              console.log(val);
            },
          },
        },
        {
          label: "数字框", // label文字
          prop: "age", // 字段名
          type: "number", // 指定antd组件
          defaultValue: 18, // 字段初始值
          placeholder: "请输入年龄", // antd组件属性
          events: {
            // antd组件方法
            input(val) {
              console.log(val);
            },
          },
        },
        {
          label: "下拉框", // label文字
          prop: "sex", // 字段名
          type: "select", // 指定antd组件
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
          label: "远程下拉", // label文字
          prop: "address", // 字段名
          type: "select", // 指定antd组件
          // defaultValue: '', // 字段初始值
          placeholder: "请选择性别", // antd组件属性
          options: [],
          url: "http://rap2api.taobao.org/app/mock/270426/city",
          methods: "get",
          dicParamsList: [
            {
              key: "token",
            },
            {
              key: "bussinessId",
              value: "324",
            },
          ],
          filedName: {
            label: "name",
            value: "id",
          },
          propsHttpRes: "data",
          events: {
            // antd组件方法
            change(val) {
              console.log(val);
            },
          },
        },
        {
          label: "远程级联", // label文字
          prop: "project", // 字段名
          type: "cascader", // 指定antd组件
          defaultValue: [], // 字段初始值
          placeholder: "请选择性别", // antd组件属性
          options: [],
          url: "http://rap2api.taobao.org/app/mock/270426/getCascaderList",
          methods: "get",
          dicParamsList: [
            {
              key: "token",
            },
            {
              key: "bussinessId",
              value: "324",
            },
          ],
          filedName: {
            label: "name",
            value: "id",
          },
          propsHttpRes: "data",
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
          defaultValue: "", // 字段初始值
          placeholder: "请选择", // antd组件属性
          events: {
            // antd组件方法
            change(val) {
              console.log(val);
            },
          },
        },
      ],
    };
  },
  methods: {
    onSearch() {},
    onReset() {},
  },
};
</script>

<style></style>
