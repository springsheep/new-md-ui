<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-18 17:40:15
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-06-08 10:22:59
-->
<template>
  <div>
    <h1
      v-if="type === '1'"
      class="divder-left"
      :style="{ 'margin-bottom': bottom + 'px', 'margin-top': top + 'px' }"
    >
      {{ title }}
      <div class="right">
        <slot name="right"></slot>
      </div>
    </h1>
    <h1
      v-else
      class="divder-left-v2"
      :style="{ 'margin-bottom': bottom + 'px', 'margin-top': top + 'px' }"
    >
      <slot name="left" class="left">
        <a-icon type="plus-square" />
      </slot>
      <div class="middle">
        {{ title }}
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </h1>
  </div>
</template>

<script>
export default {
  name: "Divider",
  props: {
    type: {
      default: "1",
      type: String,
    },
    title: {
      default: "标题",
      type: String,
    },
    bottom: {
      default: 20,
      type: Number,
    },
    top: {
      default: 20,
      type: Number,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~ant-design-vue/es/style/themes/default.less";
.divder-left {
  height: 32px;
  background: #fff;
  width: 100%;
  border-left: 5px solid @primary-color;
  padding-left: 10px;
  line-height: 32px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
}
.divder-left-v2 {
  .right {
    max-width: 300px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  img {
    height: auto;
    width: 25px;
    display: inline-block;
    margin-right: 14px;
  }
  .anticon {
    margin-right: 14px;
    color: @primary-color;
    width: 28px;
    font-size: 28px;
  }
  .middle {
    flex: 1;
    line-height: 58px;
    height: 58px;
  }
  height: 58px;
  background: @primary-1;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 58px;
  font-size: 22px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
</style>
