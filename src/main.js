import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import '../node_modules/bulma/css/bulma.css'
import './style/loading-btn/loading.css'
import './style/loading-btn/loading-btn.css'
import '@fortawesome/fontawesome-free/css/all.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
