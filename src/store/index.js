import Vue from 'vue'
import Vuex from 'vuex'
import socket from '../config/socket'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: [],
    currentPlayer: {}
  },
  mutations: {
    CHANGE_STATUS(state, payload) {
      state.player.forEach(el => {
        if (el.id == payload.id) {
          el.status = payload.status
        }
      })
      socket.emit('changeStatus', state.player)
    },
    CHANGE_CURRENTPLAYER (state, payload) {
      state.currentPlayer = payload
    },
    CHANGE_PLAYER (state, payload) {
      state.player = []
      state.player = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
