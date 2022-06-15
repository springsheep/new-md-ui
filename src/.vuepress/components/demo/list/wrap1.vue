<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-20 09:06:16
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-06-15 17:23:13
-->
<template>
  <div class="list">
    <h-searchForm
      :formOptions="formOptions"
      @onSearch="onSearch"
      @onReset="onReset"
    >
      <template #btnItems>
        <a-space>
          <a-button type="primary" class="btn-export" size="default"
            >导出</a-button
          >
        </a-space>
      </template>
    </h-searchForm>
    <div class="list-table">
      <h-table
        :rowSelection="options.rowSelection"
        :alert="options.alert"
        ref="table"
        :columns="columns"
        :loadData="queryTables"
        size="middle"
      >
        <template #tableButton>
          <a-button type="primary" size="default">表格按钮插槽</a-button>
          <a-button size="default">删除</a-button>
        </template>
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
  </div>
</template>

<script>
import table from "antdv-h-ui/src/mixins/table";
console.log(table);
const queryTables = () => {
  return new Promise((resolve) => {
    const list = [];
    for (let i = 1; i < 18; i += 1) {
      list.push({
        key: i,
        id: i,
        name: "用户" + i,
        mobile: "17600000000",
        roleName: "管理员",
        status: i % 2 === 0 ? 1 : 2,
      });
    }
    resolve({ list });
  });
};

export default {
  mixins: [table],
  data() {
    return {
      options: {
        alert: {
          show: true,
          clear: () => {
            this.selectedRowKeys = [];
            this.selectedRows = [];
          },
        },
        rowSelection: {
          selectedRowKeys: this.selectedRowKeys,
          onChange: (selectedRowKeys, selectedRows) => {
            this.selectedRowKeys = selectedRowKeys;
            this.selectedRows = selectedRows;
          },
        },
      },
      selectedRowKeys: [],
      selectedRows: [],
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
          customRender: (text) => text,
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
.list {
  &-table {
    padding: 20px;
    background: #fff;
  }
}
</style>
