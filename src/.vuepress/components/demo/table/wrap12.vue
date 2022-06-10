<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-06-07 15:06:05
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-06-07 15:33:02
-->
<template>
  <h-table :columns="columns" :loadData="queryTables" :stripe="false" />
</template>

<script>
const queryTables = () => {
  const rows = [];
  for (let i = 1; i < 18; i += 1) {
    rows.push({
      key: i,
      id: i,
      name: "用户" + i,
      mobile: "17600000000",
      roleName: "管理员",
    });
  }
  return { rows };
};

export default {
  data() {
    return {
      // 查询参数
      queryFilters: {},
      // 表头
      columns: [
        {
          title: "姓名",
          dataIndex: "name",
          width: 200,
        },
        {
          title: "手机号",
          dataIndex: "mobile",
          width: 200,
        },
        {
          title: "角色名称",
          dataIndex: "roleName",
          width: 200,
        },
      ],
    };
  },
  methods: {
    queryTables,
  },
};
</script>
