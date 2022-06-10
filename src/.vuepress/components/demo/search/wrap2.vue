<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-06-07 15:38:22
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-06-10 10:42:00
-->
<template>
  <h-searchForm
    :formOptions="formOptions"
    @onSearch="onSearch"
    @onReset="onReset"
  >
    <template #btnItems>
      <a-space>
        <a-button type="primary" class="btn-export" size="default"
          >自定义插槽1</a-button
        >
        <a-button class="btn-export" size="default">自定义插槽2</a-button>
      </a-space>
    </template>
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
