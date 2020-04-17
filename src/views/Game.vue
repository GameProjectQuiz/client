<template>
  <div class="container">
      <button class="btn btn-lg btn-block btn-secondary mt-2 font-weight-bold" >PLAYER: {{ players }}</button>
      <!-- <button class="btn btn-lg btn-block btn-dark pointer mt-2">SCORE: {{  }}</button> -->
    <div class="progress mt-2 mb-2">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" :style="progress"></div>
    </div>
      <audio autoplay loop hidden>
      <source src="../assets/theBest.mp3">
                If you're reading this, audio isn't supported.
      </audio>
    <question :quest="currentQuest" />
  </div>
</template>

<script>
import question from '@/components/Question'
import socket from '../config/socket'
import { mapMutations } from 'vuex'
export default {
  name: 'GamePage',
  methods: {
    ...mapMutations(['SET_STARTTIMER', 'CHANGE_QUESTION'])
  },
  components: {
    question
  },
  computed: {
    progress () {
      return `width: ${this.$store.state.startTimer}%`
    },
    currentQuest () {
      return this.$store.state.currentQuest
    },
    players () {
<<<<<<< Updated upstream
      return localStorage.username
      // return this.$store.state.player[0].name
=======
      return this.$store.state.currentPlayer.name
>>>>>>> Stashed changes
    }
  },
  created () {
    this.SET_STARTTIMER()
    socket.on('send-data', (data) => {
      this.CHANGE_QUESTION(data)
      this.$store.commit('CHANGE_ISANSWER', false)
      console.log(this.currentQuest)
    })
  }
}
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
