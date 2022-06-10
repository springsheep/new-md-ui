/*
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-05-31 08:47:58
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-31 13:37:47
 */
import HFormpage from './components/ProForm/index'
import HSearchForm from './components/ProSearch'
import HTextFill from './components/ProTextFill'
import HSelect from './components/ProSelect'
import HTable from './components/ProTable'
import HAutoTooltip from './components/ProAutoTooltip'
import HUpload from './components/ProUpload'
import HViewer, { viewerBox } from './components/viewer'
import HYearPicker from './components/year-picker'
import HDraggable from 'vue-draggable-resizable'

export { ssoLogin } from './plugins/ssoLogin'
export { accessCount } from './plugins/statistics'

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
  version: '0.0.1',
  install
}
