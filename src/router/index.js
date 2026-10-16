import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Programacao',
    component: () => import('../views/ProgramacaoPag.vue')
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: () => import('../views/ProjetosPag.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
