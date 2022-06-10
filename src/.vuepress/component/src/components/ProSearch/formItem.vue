<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-20 09:26:16
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-24 13:46:01
-->
<template>
  <div class="form-item">
    <a-input v-if="isInput" v-model="currentVal" v-bind="bindProps" v-on="bindEvents" allowClear />
    <a-input-number v-if="isInputNumber" v-model="currentVal" v-bind="bindProps" v-on="bindEvents" allowClear />
    <a-select v-if="isSelect" v-model="currentVal" v-bind="bindProps" v-on="bindEvents" allowClear>
      <a-select-option
        v-for="item in itemOptions.options"
        :key="item.value"
        :value="item[itemOptions.valueName || 'value']"
        >{{ item[itemOptions.labelName || 'label'] }}</a-select-option
      >
    </a-select>
    <!-- datetimerange/daterange -->
    <a-range-picker
      v-if="isDatePickerDateRange"
      v-model="currentVal"
      v-bind="bindProps"
      v-on="bindEvents"
      allowClear
      :placeholder="['开始日期', '结束日期']"
      separator="至"
      :default-time="['00:00:00', '23:59:59']"
      valueFormat="YYYY-MM-DD"
    />

    <!-- monthrange -->
    <a-date-picker
      v-if="isDatePickerMonthRange"
      v-model="currentVal"
      v-bind="bindProps"
      v-on="bindEvents"
      type="monthrange"
      allowClear
      :placeholder="['开始日期', '结束日期']"
      range-separator="至"
      valueFormat="YYYY-MM"
    ></a-date-picker>

    <!-- others -->
    <a-date-picker
      v-if="isDatePickerOthers"
      v-model="currentVal"
      v-bind="bindProps"
      v-on="bindEvents"
      allowClear
      placeholder="请选择日期"
      valueFormat="YYYY-MM-DD"
    ></a-date-picker>

    <a-cascader
      v-if="isCascader"
      v-model="currentVal"
      v-bind="bindProps"
      v-on="bindEvents"
      change-on-select
      :options="itemOptions.options"
      allowClear
    ></a-cascader>
    <a-auto-complete
      v-if="isComplete"
      :defaultOpen="true"
      v-model="currentVal"
      style="width: 200px"
      v-bind="bindProps"
      v-on="bindEvents"
      option-label-prop="value"
    >
      <template slot="dataSource">
        <a-select-option v-for="(item, index) in itemOptions.dataSource" :key="index + ''" :value="item.workerName">
          <span className="global-search-item-count">{{ item.workerName }}/{{ item.workerId }} </span>
        </a-select-option>
      </template>
    </a-auto-complete>
    <a-select
      allowClear
      v-model="currentVal"
      v-if="searchUser"
      show-search
      v-bind="bindProps"
      v-on="bindEvents"
      style="width: 100%"
      :filter-option="true"
      :not-found-content="fetching ? undefined : null"
      @search="fetchUser"
    >
      <a-spin v-if="fetching" slot="notFoundContent" size="small" />
      <a-select-option v-for="d in data" :key="d.workerId" :value="d.workerId">
        {{ d.workerName }}/
        <span style="color: red">{{ d.workerId }}</span>
      </a-select-option>
    </a-select>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import axios from 'axios'
export default {
  inheritAttrs: false,
  data() {
    this.lastFetchId = 0
    this.fetchUser = debounce(this.fetchUser, 500)
    return {
      data: [],
      fetching: false,
    }
  },
  props: {
    value: {},
    itemOptions: {
      type: Object,
      default() {
        return {}
      },
    },
    needParams: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    // 双向绑定数据值
    currentVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
    // 绑定属性
    bindProps() {
      let obj = { ...this.itemOptions }

      if (obj.type === 'select') {
        delete obj.options
      }
      // 移除冗余属性
      delete obj.label
      delete obj.prop
      delete obj.type
      delete obj.defaultValue
      delete obj.rules
      delete obj.events
      return obj
    },
    // 绑定方法
    bindEvents() {
      return this.itemOptions.events || {}
    },
    // 获取请求参数
    requestParams() {
      let params = { ...this.needParams }
      let results = {}
      if (Array.isArray(this.itemOptions.dicParamsList)) {
        this.itemOptions.dicParamsList.forEach(item => {
          if (item.value) {
            results[item.key] = item.value
          } else {
            results[item.key] = params[item.key]
          }
        })
      }
      return results
    },
    // searchUser
    searchUser() {
      return this.itemOptions.type === 'searchUser'
    },

    // a-auto-complete
    isComplete() {
      return this.itemOptions.type === 'autocomplete'
    },
    // a-input
    isInput() {
      return this.itemOptions.type === 'input'
    },
    // a-input-number
    isInputNumber() {
      return this.itemOptions.type === 'number'
    },
    // a-select
    isSelect() {
      return this.itemOptions.type === 'select'
    },
    // a-date-picker (type: datetimerange/daterange)
    isDatePickerDateRange() {
      return this.itemOptions.type === 'range-picker'
    },
    // a-date-picker (type: monthrange)
    isDatePickerMonthRange() {
      return this.itemOptions.type === 'month-range'
    },
    //  a-date-picker (type: other)
    isDatePickerOthers() {
      return this.itemOptions.type === 'date-picker'
    },
    // a-cascader
    isCascader() {
      return this.itemOptions.type === 'cascader'
    },
  },

  created() {
    // select 动态添加options
    if (this.itemOptions.url) {
      axios({
        url: this.itemOptions.url,
        params: this.requestParams,
      }).then(res => {
        this.itemOptions.options = res.data && res.data[this.itemOptions.propsHttpRes]
      })
    }
  },

  methods: {
    async fetchUser(value) {
      if (!value) return
      this.lastFetchId += 1
      this.data = []
      this.fetching = true
      let res = await this.$api.ptAllWorkerworker(value)
      this.data = res.data
      this.fetching = false
    },
  },

  components: {},
}
</script>

<style lang="less" scoped></style>
