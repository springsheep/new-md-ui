export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/logo.png\",\"actionText\":\"快速开始\",\"actionLink\":\"/guide/introduction\",\"features\":[{\"title\":\"极速开发\",\"details\":\"效率提升看得见\"},{\"title\":\"开箱即用\",\"details\":\"零配置使用，无需关注实现细节\"},{\"title\":\"轻松上手\",\"details\":\"完整的文档和使用使用示例\"}],\"footer\":\"Copyright © 2022 present h3c\"},\"excerpt\":\"\",\"headers\":[]}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
