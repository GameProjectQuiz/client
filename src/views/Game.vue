<template>
  <div class="container">
    <div class="progress mt-5 mb-4">
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
    }
  },
  created () {
    this.SET_STARTTIMER()
    socket.on('send-data', (data) => {
      this.CHANGE_QUESTION(data)
      console.log(this.currentQuest)
    })
  }
}
</script>

<style>

</style>
