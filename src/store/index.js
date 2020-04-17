/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import socket from '../config/socket'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: [],
    currentPlayer: {},
    startTimer: 10,
    currentQuest: {},
    currentScore: [],
    isAnswer:false,
    gameOn: true,
    finished: false
  },
  mutations: {
    CHANGE_STATUS (state, payload) {
      state.player.forEach(el => {
        if (el.id === payload.id) {
          el.status = payload.status
        }
      })
      socket.emit('changeStatus', state.player)
    },
    SET_STARTTIMER (state) {
      state.startTimer = 0
    },
    CHANGE_CURRENTPLAYER (state, payload) {
      state.currentPlayer = payload
    },
    CHANGE_PLAYER (state, payload) {
      state.player = []
      state.player = payload
      state.startTimer = 10
    },
    DECREMENT_STARTTIMER (state, payload) {
      state.startTimer = payload
    },
    CHANGE_QUESTION (state, payload) {
      state.currentQuest = payload
      state.isAnswer = false
    },
    CHANGE_ISANSWER (state,payload) {
      state.isAnswer = payload
    },
    CHANGE_GAMEON (state, payload) {
      state.gameOn = payload
    },
    CHANGE_FINISHED (state, payload) {
      state.finished = payload
    },
    CLEAR_ALL (state) {
    state.player = []
    state.currentPlayer = {}
    state.startTimer = 10
    state.currentQuest = {}
    state.currentScore = []
    state.isAnswer =false
    state.gameOn = true
    state.finished = false
    }
  },
  actions: {
  },
  modules: {
  }
})
