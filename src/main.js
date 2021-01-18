import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'
import Icon from 'vue-awesome/components/Icon'
import './assets/css/index.css'


Vue.config.productionTip = false

Vue.component('v-icon', Icon)

Vue.use(VueCompositionAPI)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
