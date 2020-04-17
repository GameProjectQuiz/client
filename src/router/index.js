import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import LobbyPage from '../views/LobbyPage.vue'
import ScoreBoard from '../views/ScoreBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // beforeEnter: checkToken,
    component: Home
  },
  {
    path: '/game',
    name: 'Game',
    beforeEnter: guard,
    component: Game
  },
  {
    path: '/lobby',
    name: 'Lobby',
    beforeEnter: guard,
    component: LobbyPage
  },
  {
    path: '/result',
    name: 'Result',
    beforeEnter: guard,
    component: ScoreBoard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function guard (to, from, next) {
  if (localStorage.username) {
    next()
  } else {
    next('/')
  }
}

// function checkToken (to, from, next) {
//   if (localStorage.username) {
//     next('/lobby')
//   } else {
//     next()
//   }
// }

export default router
