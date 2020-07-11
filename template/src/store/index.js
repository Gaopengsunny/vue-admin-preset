import Vue from 'vue'
import Vuex from 'vuex'
import persistedstate from 'vuex-persistedstate'

import signinState from './modules/signinState'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { signinState },
  plugins: [persistedstate()]
})
