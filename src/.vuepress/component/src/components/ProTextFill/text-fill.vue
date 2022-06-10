<template>
  <span>{{ shoeText }}</span>
</template>

<script>
export default {
  name: 'HTextFill',
  props: {
    /**
     * 文本内容
     */
    text: {
      type: [String, Number],
      default: '',
    },
    /**
     * 文本为空时的占位符
     */
    hr: {
      type: String,
      default: '',
    },
  },
  computed: {
    shoeText() {
      return this.text || this.hr || (this.$HIT || {}).textFill || '--'
    },
  },
}
</script>
