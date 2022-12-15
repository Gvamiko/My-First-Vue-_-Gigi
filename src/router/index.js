import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView'
import RegistrationView from '../views/RegistrationView'
import FilterView from '../views/FilterView.vue'
import TraningsView from '../views/TraningsView.vue'
import TraningRegistrationView from '../views/TraningRegistrationView.vue'
import TraningRegistrationDoneView from '../views/TraningRegistrationDoneView.vue'
import ManagementView from '../views/ManagementView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/main',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/filter',
    name: 'FilterView',
    component: FilterView
  },
  {
    path: '/registration',
    name: 'RegistrationView',
    component: RegistrationView
  },
  {
    path: '/tranings',
    name: 'TraningsView',
    component: TraningsView
  },
  {
    path: '/TraningRegistration',
    name: 'TraningRegistrationView',
    component: TraningRegistrationView
  },
  {
    path: '/TraningRegistrationDone',
    name: 'TraningRegistrationDoneView',
    component: TraningRegistrationDoneView
  },
  { 
    path: '/Management',
    name: 'ManagementView',
    component: ManagementView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
