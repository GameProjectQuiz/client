import Vue from 'vue'
import Vuex from 'vuex'

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
