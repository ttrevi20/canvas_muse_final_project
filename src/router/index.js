import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Saved from '@/views/Saved.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/saved', name: 'Saved', component: Saved },
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
