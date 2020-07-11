export default {
  path: '/signin',
  name: 'signin',
  component: () => import('@/pages/signin'),
  meta: {
    root: false,
    title: '登录'
  }
}
