export default {
  state: {
    remember: false, // 是否记住密码
    account: '',
    password: ''
  },
  mutations: {
    setSigninData(state, { remember, account, password }) {
      state.remember = remember
      state.account = account
      state.password = password
    }
  }
}
