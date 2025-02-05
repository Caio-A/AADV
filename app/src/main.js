import Vue from 'vue'
import HeroIcon from 'vue-heroicons'
import { archive, arrowDown, book, home, user } from 'vue-heroicons/src/icons'
import vuetify from './plugins/vuetify'
import router from './router/index.js'
import App from './App.vue'


Vue.config.productionTip = false
HeroIcon.add([archive, arrowDown, user, home, book, ])
Vue.use(HeroIcon)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
