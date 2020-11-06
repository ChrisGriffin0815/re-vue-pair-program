import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import Home from '../pages/Home.vue'
// @ts-ignore
import Profile from '../pages/Profile.vue'
import { Auth0Provider } from '@bcwdev/auth0provider-client'
// @ts-ignore
import Rover from '../pages/MarsRoverPage.vue'
// @ts-ignore
import Pokemon from '../pages/PokemonPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: Auth0Provider.authGuard
  },
  {
    path: '/rover',
    name: 'RoverPage',
    component: Rover
  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    component: Pokemon,
    beforeEnter: Auth0Provider.authGuard
  }

]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
