<template>
  <div class="demo-table-wrap">
    <div class="h-table-actions">
      <a-button type="primary" @click="$refs.table.refresh()">
        请求数据
      </a-button>
    </div>

    <h-table
      ref="table"
      :columns="columns"
      :loadData="queryTables"
      :autoLoad="false"
    >
      <!-- 状态 -->
      <template #status="text">
        <a-badge v-if="text === 1" status="success" text="正常" />
        <a-badge v-else status="error" text="异常" />
      </template>

      <!-- 操作 -->
      <template #action>
        <a>增加</a>
        <a-divider type="vertical" />
        <a>删除</a>
      </template>
    </h-table>
  </div>
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
      status: i % 2 === 0 ? 1 : 2,
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
        {
          title: "状态",
          dataIndex: "status",
          scopedSlots: { customRender: "status" },
          width: 200,
        },
        {
          title: "操作",
          dataIndex: "action",
          scopedSlots: { customRender: "action" },
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

<style lang="less" scoped>
// 列表操作按钮
.h-table-actions {
  margin: 16px 0;
}
</style>
