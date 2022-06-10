/*
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-05-31 10:51:28
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-05-31 13:10:26
 */

export default {
  data() {
    return {
      current: {},
      // 查询参数
      queryFilters: {},
    }
  },
  methods: {
    freash(e) {
      this.current = {}
      if (!e) {
        this.$refs.table.refresh(true)
      }
    },
    /**
     * @description: 搜索组件查询
     * @param {*} e
     * @return {*}
     * @author: 张鹏
     */
    onSearch(e) {
      console.log('获取到的搜索条件', e)
      this.queryFilters = e
      this.$refs.table.refresh(true)
    },
    /**
     * @description: 搜索组件重置
     * @param {*} e
     * @return {*}
     * @author: 张鹏
     */
    onReset(e) {
      console.log('重置到的搜索条件', e)
      this.$refs.table.refresh(true)
    },
  },
}
