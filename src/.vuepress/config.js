/*
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-06-10 09:30:42
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-06-15 17:21:24
 */
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '../../', dir)
}

module.exports = {
  title: 'H3c 开发文档',
  description: '前端基础建设文档库，包含中后台前端脚手架、组件库等。',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  dest: './dist',
  port: 9901,
  theme: 'antdocs',
  themeConfig: {
    logo: '/logo.png',
    // 顶部导航栏配置
    nav: [
      { text: '主页', link: '/' },
      { text: '开发规范', link: '/guide/sql' },
      { text: '开发手册', link: '/guide/front' },
      { text: '脚手架使用帮助', link: '/guide/cli' },
      { text: '组件库', link: '/components/quick-start' },
      { text: 'mixins', link: '/mixins/form' },
      { text: '前端脚手架', link: '/docs/my-cli' },
    ],
    // 侧边栏设置
    sidebar: {
      '/mixins/': [
        {
          title: 'form表单快速开发',
          path: 'form'
        },
        {
          title: 'list快速开发',
          path: 'list'
        }
      ],
      '/guide/': [
        {
          title: '数据库设计规范和指导',
          path: 'sql'
        },
        {
          title: '代码管理规范和指导',
          path: 'code'
        }
      ],
      '/guide/': [
        {
          title: '前端开发手册',
          path: 'front'
        },
        {
          title: '后端开发手册',
          path: 'java'
        }
      ],
      '/guide/': [
        {
          title: '后端工程选配',
          path: 'cli'
        }
      ],
      '/components/': [
        // 新增组件文档时需要在这新增一个路由对象
        {
          title: '快速起步',
          path: 'quick-start'
        },
        {
          title: 'Table 表格',
          path: 'table'
        },
        {
          title: 'Search 搜索',
          path: 'search'
        },
        {
          title: 'Upload 上传',
          path: 'upload'
        },
        {
          title: 'Select 下拉列表',
          path: 'select'
        },
        {
          title: 'YearPicker 年份选择器',
          path: 'year-picker'
        },
        {
          title: 'Viewer 文件预览',
          path: 'viewer'
        },
        {
          title: 'TextFill 自动填充',
          path: 'text-fill'
        },
        {
          title: 'AutoTooltip 自动提示',
          path: 'auto-tooltip'
        }
      ],
      '/docs/': [
        {
          title: 'CLI',
          path: 'my-cli'
        },

        {
          title: 'vscode插件',
          path: 'tv2m-template'
        },

      ]
    },
    // 将同时提取 markdown 中的 h2、h3 显示在侧边栏上
    sidebarDepth: 4,
    // 上次更新
    lastUpdated: '最后更新时间'
  },
  markdown: {},
  plugins: [
    // 回到顶部插件
    '@vuepress/back-to-top',
    // 图片放大组件
    // https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html
    // ['@vuepress/medium-zoom', { selector: 'img' }]
    // 最后更新时间
    // ['@vuepress/last-updated', {
    //   transformer: (timestamp, lang) => {
    //     moment.locale(lang)
    //     return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
    //   }
    // }]
  ],
  chainWebpack: (config, isServer) => {
    config.resolve.alias
      .set('@', resolve('src'))
  }
}
