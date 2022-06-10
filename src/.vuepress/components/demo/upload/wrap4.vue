<template>
  <div style="width: 500px">
    <h-upload
      v-model="files"
      block
      action="http://run.mocky.io/v3/d80efc3d-b8c6-403c-acd3-9ed641d1d0e3"
    >
      <a-button type="primary" block>
        <a-icon type="upload" />上传文件
      </a-button>
    </h-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
    };
  },
};
</script>
