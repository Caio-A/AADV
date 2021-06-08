import Vue from 'vue'
import HeroIcon from 'vue-heroicons'
import { archive, arrowDown, book, home, user } from 'vue-heroicons/src/icons'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Alunos from './components/Alunos.vue'
import Tela from './components/Tela.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false
HeroIcon.add([archive, arrowDown, user, home, book, ])
Vue.use(HeroIcon)

const routes = [
  { path: '/', component: Home },
  { path: '/tela', component: Tela},
  { path: '/alunos', component: Alunos}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
