import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicio from '../views/Inicio.vue'
import Cursos from '../views/Cursos.vue'
import Comunidades from '../views/Comunidades.vue'
import MiCuenta from '../views/MiCuenta.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Inicio'
  },
  {
    path: '/Inicio',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/Cursos',
    name: 'cursos',
    component: Cursos
  },
  {
    path: '/Comunidades',
    name: 'comunidades',
    component: Comunidades
  },
  {
    path: '/Mi-cuenta',
    name: 'mi-cuenta',
    component: MiCuenta
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
