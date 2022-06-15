/*
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-06-10 09:30:42
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-06-15 17:14:41
 */
import VueHighlight from 'vue-highlight.js'
import Antd from 'ant-design-vue'

import css from 'highlight.js/lib/languages/css'
import javascript from 'highlight.js/lib/languages/javascript'
import vue from 'vue-highlight.js/lib/languages/vue'

import axios from 'axios'

import 'ant-design-vue/dist/antd.css'
import 'highlight.js/styles/vs.css'
import '@wytxer/style-utils/lib/common.less'

export default ({
  // VuePress 正在使用的 Vue 构造函数
  Vue,
  // 附加到根实例的一些选项
  options,
  // 当前应用的路由实例
  router,
  // 站点元数据
  siteData,
  // 当前渲染环境
  isServer
}) => {
  if (!isServer) {
    // 解决 a-upload 报错问题
    window.process = window.process || {}
    window.process.env = {}
  }

  Vue.mixin({
    mounted() {
      // 解决 ReferenceError: window is not defined 报错问题
      import('@wytxer/shepherd-vue').then(m => {
        Vue.use(m.default)
      })

      import('antdv-h-ui').then(m => {
        Vue.use(m.default)
      })
    }
  })

  Vue.use(VueHighlight, {
    languages: {
      css,
      javascript,
      vue
    }
  })

  Vue.use(Antd)

  Vue.prototype.$axios = axios
}
