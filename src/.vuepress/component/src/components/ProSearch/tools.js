/*
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-04-20 09:26:31
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-04-20 09:26:32
 */
/**
 * 创建唯一的字符串
 * @return {string} ojgdvbvaua40
 */
function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}

export default {
  createUniqueString,
}
