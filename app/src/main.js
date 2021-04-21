import Vue from 'vue'
import App from './App.vue'
import HeroIcon from 'vue-heroicons'
import { archive, arrowDown, book, home, user } from 'vue-heroicons/src/icons'

Vue.config.productionTip = false
HeroIcon.add([archive, arrowDown, user, home, book, ])
Vue.use(HeroIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
