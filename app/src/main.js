import Vue from 'vue'
import App from './App.vue'
import HeroIcon from 'vue-heroicons'
import { archive, arrowDown, book, home, user } from 'vue-heroicons/src/icons'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
HeroIcon.add([archive, arrowDown, user, home, book, ])
Vue.use(HeroIcon)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
