import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Alunos from '../components/Alunos.vue'
import Tela from '../components/Tela.vue'

Vue.use(VueRouter)


const routes = [
  { path: '/', component: Home },
  { path: '/tela', component: Tela},
  { path: '/alunos', component: Alunos}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
