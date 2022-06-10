<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-20 09:25:22
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-24 13:35:58
-->
<template>
  <div class="search-form-box">
    <a-row :gutter="20">
      <a-form-model :model="formData" ref="formRef" layout="horizontal" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-col
          :xl="6"
          :md="8"
          :sm="12"
          :xs="24"
          v-for="(item, index) in formOptions"
          :key="index"
          :style="{ display: index < count ? 'block' : 'none' }"
        >
          <a-form-model-item :prop="item.prop" :label="item.label ? item.label + '：' : ''" :rules="item.rules">
            <formItem v-model="formData[item.prop]" :itemOptions="item" :needParams="needParams" />
          </a-form-model-item>
        </a-col>
        <a-col :xl="6" :md="8" :sm="24" style="float: right; margin-top: 3px" v-if="formOptions.length < 4">
          <a-row type="flex" justify="end">
            <a-space>
              <a-button v-if="btnItems.includes('search')" type="primary" class="btn-search" @click="onSearch"
                >搜索</a-button
              >
              <a-button v-if="btnItems.includes('reset')" type="default" class="btn-reset" @click="onReset"
                >重置</a-button
              >
              <a
                :style="{ marginLeft: '8px', fontSize: '12px' }"
                @click="toggle"
                class="Collapse"
                v-if="formOptions.length >= 4"
              >
                {{ expand ? '收起' : '展开' }}<a-icon :type="expand ? 'up' : 'down'" class="Collapse-icon" />
              </a>
            </a-space>
          </a-row>
        </a-col>
        <!-- 自定义插槽，可用于特殊表单块 -->
        <slot></slot>
      </a-form-model>
    </a-row>
    <a-row type="flex" justify="space-between" v-if="formOptions.length >= 4">
      <a-space>
        <div>
          <slot name="btnItems"> </slot>
        </div>
      </a-space>
      <a-space>
        <a-button v-if="btnItems.includes('search')" type="primary" class="btn-search" @click="onSearch">搜索</a-button>
        <a-button v-if="btnItems.includes('reset')" type="default" class="btn-reset" @click="onReset">重置</a-button>
        <a
          :style="{ marginLeft: '8px', fontSize: '12px' }"
          @click="toggle"
          class="Collapse"
          v-if="formOptions.length > 4"
        >
          {{ expand ? '收起' : '展开' }} <a-icon :type="expand ? 'up' : 'down'" class="Collapse-icon" />
        </a>
      </a-space>
    </a-row>
    <a-row type="flex" justify="start" v-else>
      <div class="btn-box">
        <slot name="btnItems"></slot>
      </div>
    </a-row>
  </div>
</template>

<script>
import formItem from './formItem'
import tools from './tools'

export default {
  name: 'HSearchForm',
  props: {
    /**
     * 表单配置
     * 示例：
     * [{
     *   label: '用户名', // label文字
     *   prop: 'username', // 字段名
     *   type: 'input', // 指定antd组件
     *   defaultValue: '阿黄', // 字段初始值
     *   placeholder: '请输入用户名', // antd组件属性
     *   rules: [{ required: true, message: '必填项', trigger: 'blur' }], // antd组件属性
     *   events: { // antd组件方法
     *     input (val) {
     *       console.log(val)
     *     },
     *     ...... // 可添加任意antd组件支持的方法
     *   }
     *   ...... // 可添加任意antd组件支持的属性
     * }]
     */
    formOptions: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    /**
     * 请求所需参数
     * 示例：
     * needParams: {
     *   // 参数名
     *   // 参数值
     *   token: "123"
     *  },
     */
    needParams: {
      type: Object,
      default() {
        return {}
      },
    },
    // 提交按钮项，多个用逗号分隔（search, export, reset）
    btnItems: {
      type: String,
      default() {
        return 'search,reset'
      },
    },
  },
  data() {
    return {
      expand: false,
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        md: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
        md: { span: 16 },
      },
      formData: {},
    }
  },

  computed: {
    // 生成新的key
    newKeys() {
      return this.formOptions.map(() => {
        return tools.createUniqueString()
      })
    },
    count() {
      return this.expand ? 11 : 4
    },
  },

  created() {
    this.addDefaultValue()
  },

  methods: {
    toggle() {
      this.expand = !this.expand
    },
    // 校验
    onValidate(callback) {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          console.log('提交成功')
          console.log(this.formData)
          callback()
        }
      })
    },
    // 搜索
    onSearch() {
      this.onValidate(() => {
        this.$emit('onSearch', this.formData)
      })
    },
    // 导出
    onExport() {
      this.onValidate(() => {
        this.$emit('onExport', this.formData)
      })
    },
    onReset() {
      this.$refs.formRef.resetFields()
      this.$emit('onReset', this.formData)
    },
    // 添加初始值
    addDefaultValue() {
      const obj = {}
      this.formOptions.forEach(v => {
        if (v.defaultValue !== undefined) {
          obj[v.prop] = v.defaultValue
        }
      })
      this.formData = obj
    },
  },

  components: { formItem },
}
</script>

<style lang="less" scoped>
.search-form-box {
  background: #fff;
  padding: 20px;
  /deep/.ant-input-number {
    width: 100%;
  }
  /deep/.ant-calendar-picker {
    width: 100%;
  }
}

.Collapse {
  display: flex;
  align-items: center;
  &-icon {
    margin-left: 5px;
  }
}
.search-form-box {
  margin-bottom: 20px;

  .btn-box {
    padding-top: 5px;
    display: flex;
  }

  .ant-input-number {
    width: 100%;
  }

  .ant-form-item {
    margin-bottom: 10px;
  }
}
</style>
