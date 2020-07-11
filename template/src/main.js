import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'reset.css'
import viewDesignUi from '@/plugins/viewDesignUi'
import 'view-design/dist/styles/iview.css'

Vue.use(viewDesignUi)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
