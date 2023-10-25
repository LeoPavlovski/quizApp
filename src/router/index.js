import Vue from 'vue'
import HomeComponent from '@/components/HomeComponent.vue'
import QuizComponent from "@/components/QuizComponent.vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'HomeComponent',
    component:HomeComponent
  },
  {
    path:'/home',
    name:'HomeComponent',
    component:HomeComponent
  },
  {
    path:'/quiz',
    name:'Quiz',
    component:QuizComponent
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
