import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SavedPrompts from '../views/SavedPrompts.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/saved',
    name: 'Saved',
    component: SavedPrompts,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
