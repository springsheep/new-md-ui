<!--
 * @Author: your name
 * @Date: 2021-06-02 17:16:34
 * @LastEditTime: 2022-06-10 11:43:57
 * @LastEditors: 张鹏
 * @Description: In User Settings Edit
 * @FilePath: /qrcm/src/views/OpenIssueList/components/questionBaseInfo.vue
-->

<script>
import HFormpage from "../../../component/src/components/ProForm";
export default {
  mixins: [HFormpage],
  data() {
    return {
      layout: "horizontal",
      formName: "form",
      headInfo: {},
      items: [
        {
          type: "dividerTypeOne",
          title: "我是标题",
          span: 24,
        },
        {
          isDisabled: true,
          type: "input",
          title: "输入框",
          placeholder: "请输入",
          key: "jobName",
          span: 8,
        },
        {
          span: 8,
          type: "selectgroup",
          title: "tip提示",
          tooltip: true,
          tooltipText:
            "  若累计在岗年限，则按照轮岗规则延续在岗时间；若不累计，则按照轮岗规则重新开始计算在岗时间；",
          placeholder: "请选择",
          key: "keepWorkAgeFlag",
          sels: [
            {
              key: "是",
              value: 1,
            },
            {
              key: "否",
              value: 2,
            },
          ],
          listkey: "key",
          listvalue: "value",
          showsearch: true,
        },

        {
          isDisabled: true,
          type: "select",
          title: "下拉框",
          placeholder: "请选择",
          key: "postId",
          sels: [],
          listkey: "postName",
          listvalue: "postId",
          showsearch: true,
          span: 8,
        },

        {
          type: "cascader",
          title: "级联选择",
          placeholder: "级联选择",
          key: "deptNameArray",
          options: [
            {
              value: "zhejiang",
              label: "Zhejiang",
              children: [
                {
                  value: "hangzhou",
                  label: "Hangzhou",
                  children: [
                    {
                      value: "xihu",
                      label: "West Lake",
                    },
                  ],
                },
              ],
            },
            {
              value: "jiangsu",
              label: "Jiangsu",
              children: [
                {
                  value: "nanjing",
                  label: "Nanjing",
                  children: [
                    {
                      value: "zhonghuamen",
                      label: "Zhong Hua Men",
                    },
                  ],
                },
              ],
            },
          ],
          span: 8,
          bindEvents: {
            change: (value) => {},
          },
          fieldNames: { label: "label", value: "label", children: "children" },
        },
        {
          bindEvents: {
            select: (e) => {
              this.postIdSelect(e);
            },
            change: (e) => {
              if (e) {
                this.a = e;
              }
            },
            search: (e) => {
              this.items[5].bindEvents.change(e);
            },
            blur: () => {
              this.$set(this.searchData, "postName", this.a);
            },
          },
          type: "select",
          title: "能选能下拉",
          placeholder: "请选择岗位名称",
          key: "postName",
          sels: [
            {
              key: "key",
              value: "value",
            },
          ],
          listkey: "key",
          listvalue: "value",
          showsearch: true,
          span: 8,
        },
        {
          type: "input",
          title: "任命文号",
          span: 8,
          placeholder: "请输入任命文号",
          key: "appointNo",
          validate: {
            required: true,
            message: "请输入任命文号",
            trigger: "change",
          },
        },
        {
          isDisabled: true,
          type: "formscope",
          title: "自定义render",
          span: 8,
          scope: this.renderKeyPerson,
        },
        {
          type: "radio",
          title: "实虚职",
          span: 8,
          defaultValue: 2,
          placeholder: "请选择实虚职",
          key: "realVirtualJob",
          sels: [
            { label: "实职", value: 1 },
            { label: "虚职", value: 2 },
          ],
        },
        {
          data: (file) => {
            return {};
          },
          type: "upLoad",
          title: "上传附件",
          key: "fileInfoList",
          defaultValue: [],
          showDownload: true,
          span: 24,
          directory: true,
          multiple: false,
        },
        {
          data: (file) => {
            return {};
          },
          listType: "picture-card",
          type: "upLoad",
          title: "上传附件",
          key: "fileInfoList",
          defaultValue: [],
          showDownload: true,
          span: 24,
          directory: true,
          multiple: false,
          showUploadTips: true,
          tip: "仅能上传一个文件",
        },
        {
          span: 8,
          type: "datetimepicker",
          title: "任命开始日期",
          placeholder: "请选择任命开始日期",
          key: "startDate",
          format: "YYYY-MM-DD",
          valueFormat: "YYYY-MM-DD",
          onchange: this.changeTime,
          validate: {
            required: true,
            message: "请选择任命开始日期",
            trigger: "change",
          },
        },
        {
          span: 8,
          type: "datetimepicker",
          title: "任职开始日期",
          placeholder: "请选择任职开始日期",
          key: "postBeginDate",
          format: "YYYY-MM-DD",
          valueFormat: "YYYY-MM-DD",
          onchange: this.changeTime,
          validate: {
            required: true,
            message: "请选择任职开始日期",
            trigger: "change",
          },
        },
        {
          type: "select",
          title: "最高层级",
          placeholder: "请选择最高层级",
          key: "approvalLevel",
          sels: [],
          listkey: "nameZh",
          listvalue: "value",
          showsearch: true,
          span: 8,
        },
        {
          type: "textarea",
          title: "文本框",
          placeholder: "请输入",
          key: "jobName",
          span: 16,
        },
      ],
      bottomBtns: [
        { name: "重置", method: "resetForm", type: "normal" },
        { name: "确定", method: "getVals", type: "primary" },
      ],
    };
  },
  created() {
    // 如果不是一个组建的话直接给seachdata赋值就可
    // 如果是一个组件 也传参数initdata传进来就好
    this.searchData = { keepWorkAgeFlag: 1 };
  },
  methods: {
    getVals() {
      this.$refs.form.validate((err) => {
        if (err) {
          console.log("校验完毕获取参数", this.searchData);
        }
      });
    },
    renderKeyPerson(data, item, info) {
      return <div>12222223</div>;
    },
  },
};
</script>
