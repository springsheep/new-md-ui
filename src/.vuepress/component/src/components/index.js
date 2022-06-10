/*
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-20 09:02:10
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-24 17:02:11
 */
import HFormpage from './src/from/index'
import HSearchForm from './src/search'
import HTextFill from './src/text-fill'
import HSelect from './src/select'
import HTable from './src/table'
import HAutoTooltip from './src/auto-tooltip'
import HUpload from './src/upload'
import HViewer, { viewerBox } from './src/viewer'
import HYearPicker from './src/year-picker'
import HDraggable from 'vue-draggable-resizable'

const components = [
  HTextFill,
  HSelect,
  HTable,
  HAutoTooltip,
  HUpload,
  HViewer,
  HYearPicker,
  HSearchForm
]

const install = (Vue, options) => {
  const { pageSize = 10, textFill = '--' } = options || {}
  // 添加全局配置
  Vue.prototype.$HIT = {
    // 默认的分页条数
    pageSize,
    // 默认的空字符串占位符
    textFill
  }
  // 添加空字符占位
  Vue.prototype.$textFill = textFill

  Vue.component('h-draggable', HDraggable)
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  viewerBox(Vue)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  HTextFill,
  HSelect,
  HTable,
  HAutoTooltip,
  HUpload,
  HViewer,
  HYearPicker,
  HSearchForm,
  HFormpage
}

export default {
  version: '1.1.3',
  install
}
