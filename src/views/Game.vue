<template>
  <div class="container">
    <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" :style="progress"></div>
    </div>
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
      this.$store.commit('CHANGE_ISANSWER', false)
      console.log(this.currentQuest)
    })
  }
}
</script>

<style>
#question {
    background-color: red;
}

#answers {
    background-color: blue;
}

#a {
    background-color: yellow;
}

#b {
    background-color: green;
}

#c {
    background-color: orange;
}

#d {
    background-color: aqua;
}
</style>
