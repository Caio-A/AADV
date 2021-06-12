import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Alunos from '../components/Alunos.vue'
import Cadastro from '../components/Cadastro.vue'
import Relatorio from '../components/Relatorio.vue'
import Almoco from '../components/Almoco.vue'

Vue.use(VueRouter)


const routes = [
  { path: '/', component: Home },
  { path: '/cadastro', component: Cadastro},
  { path: '/alunos', component: Alunos},
  { path: '/relatorios', component: Relatorio},
  { path: '/almoco', component: Almoco},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
