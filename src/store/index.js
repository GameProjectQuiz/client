/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: [
      {
        id: 1,
        name: 'robin',
        status: 'Waiting'
    },
      {
        id: 2,
        name: 'fauzan',
        status: 'Ready'
      },
      {
        id: 3,
        name: 'diaz',
        status: 'Ready'
      },
      {
        id: 4,
        name: 'jeje',
        status: 'Waiting'
      },
      {
        id: 5,
        name: 'jeje',
        status: 'Waiting'
      }
    ]
  },
  mutations: {
    CHANGE_STATUS(state, payload) {
      state.player.forEach(el => {
        if (el.id == payload.id) {
          el.status = payload.status
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
