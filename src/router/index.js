import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import LobbyPage from '../views/LobbyPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: LobbyPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
