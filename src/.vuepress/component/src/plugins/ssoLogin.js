/**
 * SSO登录机制：
 * 1. 如果没有token。携带参数currentUrl访问登录接口获取SSO地址并跳转;
 * 2. 登录后返回原地址，然后将获取的responseTicket再次访问登录接口;
 * 3. 获取token存到本地;
 * */

/**
 * 登录接口设置头部
 * headers: {
 *   'Auth-Type': 'SSO',
 * }.
 * @params loginFunc: 登录函数
 * @params { to, from, next }: route对象
 * 首次请求字段： { ssoRequestUrl: url },
 * 获取token请求字段: { responseTicket }.
 * */
export const ssoLogin = (store, { to, from, next }) => {
  // fetch sso response ticket
  const responseTicket = to.query.ResponseTicket
  // get origin url
  const originUrl = `${window.location.origin}${to.path}`
  if (!responseTicket) {
    store.dispatch('Login', { currentUrl: originUrl }).then(url => {
      window.location.href = url
    })
  } else {
    store.dispatch('Login', { responseTicket }).then(() => {
      // set the replace: true so the navigation will not leave a history record
      next({ path: originUrl, replace: true })
    })
  }
}
