/**
 * 页面及接口统计
 * */
export const accessCount = (url, username, { to, from, next }) => {
  if (!url) {
    console.error('请输入项目域名')
    return
  }
  if (!username) {
    console.error('未输入username参数')
    return
  }
  const data = {
    applicationId: 'data-board',
    account: username,
    functionId: '',
    modularId: to.fullPath,
    urlfrom: '',
    hisUrl: from.fullPath,
  }
  const Cookies = window.Cookies || Cookies
  Cookies.set('appeos', JSON.stringify(data), {
    expires: 7,
  })
  const maSrc = url ? url : '//eos-ts.h3c.com'
  let ma = document.createElement('script')
  ma.type = 'text/javascript'
  ma.async = true
  ma.src = maSrc + '/appstatistics/ma_get_react.js'
  let s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(ma, s)
}
