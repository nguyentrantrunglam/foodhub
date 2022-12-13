import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView
  },

]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
