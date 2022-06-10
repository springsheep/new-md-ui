<!--
 * @Author: your name
 * @Date: 2021-06-01 17:59:55
 * @LastEditTime: 2022-05-31 14:30:35
 * @LastEditors: 张鹏
 * @Description: In User Settings Edit
 * @FilePath: /qrcm/src/components/FormPage/index.vue
-->
<template>
  <div class="formPage" :style="{ padding }">
    <slot name="formTop" />
    <a-form-model
      :layout="layout || 'vertical'"
      :model="searchData"
      :rules="rules"
      :ref="formName"
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
    >
      <a-row :gutter="24">
        <a-col v-for="(item, index) in items" :key="index" :sm="24" :xl="item.span || 12">
          <a-divider orientation="left" v-if="item.type === 'divider' && !item.ifHidden">
            {{ item.title }}
          </a-divider>
          <template v-else-if="item.type === 'scope' && !item.ifHidden">
            <Scope :cscope="item.scope" :searchData="searchData" :item="item" />
          </template>
          <!-- 审批记录 -->
          <Divider
            v-if="item.type === 'dividerTypeOne' && !item.ifHidden"
            type="1"
            :title="item.title"
            :top="0"
            :bottom="10"
          >
          </Divider>
          <a-form-model-item
            :label="item.title"
            :labelCol="item.labelCol"
            :key="index"
            :prop="item.key"
            v-if="
              item.type != 'dividerTypeOne' &&
              item.type !== 'divider' &&
              item.type !== 'scope' &&
              !item.ifHidden
            "
          >
            <template v-if="item.type === 'formscope'">
              <Scope :cscope="item.scope" :searchData="searchData" :item="item" />
            </template>
            <!-- 文件上传 -->
            <!-- <upLoadCom
              v-if="item.type === 'upLoad'"
              :disabled="item.isDisabled"
              :fileListArr.sync="searchData[item.key]"
              :limit="item.limit || 1"
            /> -->
            <!--
           'text', 'picture', 'picture-card'
              drag:true false 预览拖动
             -->
            <h-upload
              :list-type="item.listType"
              :drag="item.drag"
              :data="item.data"
              :limit="item.limit"
              :fileChange="item.fileChange"
              :disabled="item.isDisabled"
              :multiple="item.multiple"
              v-model="searchData[item.key]"
              v-if="item.type === 'upLoad'"
              :showDownload="item.showDownload"
              :action="item.action"
              :headers="item.headers"
              :accept="item.accept"
            >
              <span slot="tips" v-if="item.showUploadTips"> {{ item.tip }} </span></h-upload
            >

            <a-auto-complete
              :defaultOpen="true"
              v-if="item.type === 'autoComplete'"
              v-model="searchData[item.key]"
              :data-source="item.dataSource"
              style="width: 200px"
              :placeholder="item.placeholder"
              v-bind="item.bindProps"
              v-on="item.bindEvents"
            />

            <a-input-group compact v-if="item.type === 'inputgroup'">
              <a-input
                v-model="searchData[item.key]"
                :placeholder="item.placeholder"
                :disabled="item.isDisabled"
                v-bind="item.bindProps"
                v-on="item.bindEvents"
              />
              <a-icon
                :type="item.icon || 'exclamation-circle'"
                style="width: 10%; margin-left: 10px"
                @click="item.clickMe"
              />
            </a-input-group>
            <a-input
              v-model="searchData[item.key]"
              :placeholder="item.placeholder"
              v-if="item.type === 'input'"
              :disabled="item.isDisabled"
              v-bind="item.bindProps"
              v-on="item.bindEvents"
            />
            <a-textarea
              show-word-limt
              v-bind="item.bindProps"
              v-on="item.bindEvents"
              v-model="searchData[item.key]"
              :placeholder="item.placeholder"
              :maxLength="item.maxLength || 200"
              v-if="item.type === 'textarea'"
              :disabled="item.isDisabled"
              :auto-size="{ minRows: 3, maxRows: 5 }"
            />
            <a-range-picker
              v-bind="item.bindProps"
              v-on="item.bindEvents"
              v-model="searchData[item.key]"
              :format="item.format || 'YYYY-MM-DD'"
              :valueFormat="item.valueFormat || 'YYYY-MM-DD'"
              v-if="item.type === 'rangetimepicker'"
              :disabled="item.isDisabled"
            />
            <a-date-picker
              v-bind="item.bindProps"
              v-on="item.bindEvents"
              v-model="searchData[item.key]"
              :format="item.format || 'YYYY-MM-DD'"
              :valueFormat="item.valueFormat || 'YYYY-MM-DD'"
              :defaultValue="item.defaultValue || ''"
              v-if="item.type === 'datetimepicker'"
              :disabled="item.isDisabled"
              @change="item.onchange"
            />
            <a-month-picker
              v-bind="item.bindProps"
              v-on="item.bindEvents"
              v-model="searchData[item.key]"
              v-if="item.type === 'monthtimepicker'"
              :disabled="item.isDisabled"
            />
            <a-week-picker
              v-bind="item.bindProps"
              v-on="item.bindEvents"
              v-model="searchData[item.key]"
              v-if="item.type === 'weektimepicker'"
              :disabled="item.isDisabled"
            />
            <a-button
              v-bind="item.bindProps"
              v-on="item.bindEvents"
              type="link"
              v-if="item.type === 'link'"
              @click="item.onClick(searchData[item.key])"
            >
              {{ searchData[item.key] }}
            </a-button>
            <a-select
              allowClear
              :mode="item.mode"
              v-bind="item.bindProps"
              v-on="item.bindEvents"
              :filter-option="filterOption"
              :show-search="item.showsearch || false"
              v-model="searchData[item.key]"
              :placeholder="item.placeholder"
              v-if="item.type === 'select'"
              :disabled="item.isDisabled"
            >
              <a-select-option
                v-for="(ite, idx) in item.sels"
                :key="idx + ''"
                :value="ite[item.listvalue]"
              >
                {{ ite[item.listkey]
                }}{{ ite[item.listkeyTwo] ? '(' + ite[item.listkeyTwo] + ')' : '' }}
              </a-select-option>
            </a-select>
            <a-input-group v-if="item.type === 'selectgroup'">
              <a-select
                style="width: 85%"
                v-bind="item.bindProps"
                v-on="item.bindEvents"
                @change="item.onchange"
                :filter-option="filterOption"
                :show-search="item.showsearch || false"
                v-model="searchData[item.key]"
                :placeholder="item.placeholder"
                :disabled="item.isDisabled"
                :defaultValue="searchData[item.key] || ''"
              >
                <a-select-option
                  v-for="(ite, idx) in item.sels"
                  :key="idx + ''"
                  :value="ite[item.listvalue]"
                  >{{ ite[item.listkey]
                  }}{{
                    ite[item.listkeyTwo] ? '(' + ite[item.listkeyTwo] + ')' : ''
                  }}</a-select-option
                >
              </a-select>
              <a-tooltip v-if="item.tooltip">
                <template slot="title">{{ item.tooltipText }} </template>
                <a-icon type="exclamation-circle" style="width: 10%; margin-left: 10px" />
              </a-tooltip>
            </a-input-group>
            <!-- solid outline -->
            <a-radio-group
              @change="item.onchange"
              :default-value="item.defaultValue"
              :button-style="item.buttonStyle || 'solid'"
              v-if="item.type === 'radio'"
              v-model="searchData[item.key]"
              :disabled="item.isDisabled"
              v-bind="item.bindProps"
              v-on="item.bindEvents"
            >
              <a-radio-button v-for="(ite, idx) in item.sels" :key="idx" :value="ite.value">
                {{ ite.label }}
              </a-radio-button>
            </a-radio-group>
            <a-input-number
              :default-value="item.defaultValue"
              v-if="item.type === 'inputNumber'"
              id="inputNumber"
              v-model="searchData[item.key]"
              :min="item.min || 0"
              :max="item.max || 100"
              :disabled="item.isDisabled"
              v-bind="item.bindProps"
              v-on="item.bindEvents"
            />
            <a-tree-select
              :treeCheckable="item.treeCheckable || false"
              :default-value="item.defaultValue"
              :showCheckedStrategy="item.showCheckedStrategy"
              :show-search="item.showsearch || false"
              v-if="item.type == 'treeSelect'"
              v-model="searchData[item.key]"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              :tree-data="item.treeData"
              :placeholder="item.placeholder"
              :disabled="item.isDisabled"
              v-bind="item.bindProps"
              v-on="item.bindEvents"
            >
            </a-tree-select>
            <a-switch
              v-if="item.type == 'switch'"
              v-model="searchData[item.key]"
              :checkedChildren="item.checkedChildren"
              :unCheckedChildren="item.unCheckedChildren"
              :disabled="item.isDisabled"
              v-bind="item.bindProps"
              v-on="item.bindEvents"
            />
            <a-cascader
              :default-value="item.defaultValue"
              :placeholder="item.placeholder"
              v-model="searchData[item.key]"
              v-if="item.type == 'cascader'"
              :show-search="item.showsearch || { filter }"
              :options="item.options"
              change-on-select
              v-bind="item.bindProps"
              v-on="item.bindEvents"
              :disabled="item.isDisabled"
              :fieldNames="item.fieldNames || {}"
            />
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-form-model-item class="submit" v-if="!hideBottom">
        <a-space>
          <a-button
            :type="item.type"
            @click="turnPage(item.method)"
            v-for="(item, index) in this.bottomBtns"
            :key="index"
          >
            {{ item.name }}
          </a-button>
        </a-space>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import Divider from '../ProDivider';
// import upLoadCom from '../UpLoad/index'
import debounce from 'lodash/debounce';
const Scope = {
  props: {
    cscope: {
      type: Function,
      default: () => {},
    },
    searchData: {
      type: Object,
      default: {},
    },
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  render() {
    return (
      <div class="custon-scpoe">
        {this.cscope(this.searchData, this.item, this.searchData[this.item.key])}
      </div>
    );
  },
};
export default {
  components: { Scope, Divider },
  props: {
    initData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  mame: 'Formpage',
  data() {
    return {
      hideBottom: false,
      bottomBtns: [
        { name: '返回', method: 'page_back', type: 'normal' },
        { name: '确定', method: 'getVals', type: 'primary' },
      ],
      padding: '0 10px',
      layout: 'horizontal', // 支持vertical和horizontal 行内暂时有bug
      labelCol: {},
      wrapperCol: {},
      formName: 'form', // 表单的ref属性名
      searchData: {}, // 数据
      items: [], // 定义表单项列表
      rules: {}, // 表单校验规则
    };
  },
  created() {
    this.genRules();
  },
  watch: {
    initData: {
      handler(e) {
        this.searchData = { ...this.searchData, ...JSON.parse(JSON.stringify(e)) };
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    //重置表单
    resetForm() {
      this.$refs[this.formName].resetFields();
      console.log(this.searchData);
    },
    turnPage(methodName) {
      this[methodName]();
    },
    // 级联牧户查询
    filter(inputValue, path) {
      return path.some(
        (option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
      );
    },
    // 下拉选择器的级联
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
    //组装数据
    genRules() {
      if (this.items.length == 0) {
        this.rules = {};
      }
      this.items.map((i) => {
        // // 兼容下拉远程搜索回显默认值的问题
        // if (i.type == 'searchUser' && (i.defaultValue || this.searchData[i.key])) {
        //   this.fetchUser(i.defaultValue || this.searchData[i.key]);
        // }
        // 如果没有值则赋值给他 赋值默认值
        if (i.defaultValue && !this.searchData[i.key]) {
          this.$set(this.searchData, i.key, i.defaultValue);
        }
        if (i.validate) {
          this.rules = Object.assign(this.rules, { [i.key]: i.validate });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.formPage {
  .submit {
    width: 100%;
    text-align: center;
  }
  /deep/ .ant-input-group-compact {
    display: flex;
    align-items: center;
    height: 40px;
  }
  .ant-form-horizontal {
    // .form_left,
    // .form_right {
    //   flex: 1;
    // }
    // /deep/.ant-form-item-control {
    //   line-height: normal;
    // }
    /deep/ .ant-form-item {
      padding-bottom: 0;
    }
    /deep/ .ant-form-item-label {
      min-width: 80px;
    }
    /deep/ .ant-form-item {
      display: flex;
      margin-right: 0;
    }
    /deep/ .ant-form-item-control-wrapper {
      flex: 1;
    }

    // /deep/.ant-row {
    //   margin-bottom: 15px;
    //   // padding-right: 20px;
    // }
  }
  /deep/ .ant-input-number {
    width: 100%;
  }
  /deep/ .ant-calendar-picker {
    width: 100%;
  }
}
</style>
