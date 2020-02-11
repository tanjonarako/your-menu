import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import Vuelidate from 'vuelidate'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import router from '@/router'
import App from '@/views/App'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  Vuelidate,
  render: h => h(App)
}).$mount('#app')
