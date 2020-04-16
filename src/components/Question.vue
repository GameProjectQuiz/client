<template>
  <div>
      <div class="row text-uppercase font-weight-bold" id="question">
          <h1>{{ quest.question }}</h1>
      </div>
      <div class="row" id="answers" >
          <div class="col">
              <div class="row" :id="quest.choices[0].id">
                  <button @click.prevent="answer(quest.choices[0].choice)" class="btn btn-lg btn-primary btn-block text-uppercase font-weight-bold">{{ quest.choices[0].choice }}</button>
              </div>
              <div class="row" :id="quest.choices[1].id">
                  <button @click.prevent="answer(quest.choices[1].choice)" class="btn btn-lg btn-success btn-block text-uppercase font-weight-bold">{{ quest.choices[1].choice }}</button>
              </div>
          </div>
          <div class="col">
              <div class="row" :id="quest.choices[2].id">
                  <button @click.prevent="answer(quest.choices[2].choice)" class="btn btn-lg btn-danger btn-block text-uppercase font-weight-bold">{{ quest.choices[2].choice }}</button>
              </div>
              <div class="row" :id="quest.choices[3].id">
                  <button @click.prevent="answer(quest.choices[3].choice)" class="btn btn-lg btn-warning btn-block text-uppercase font-weight-bold">{{ quest.choices[3].choice }}</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import socket from '../config/socket'
export default {
  props: ['quest'],
  methods: {
    answer(choice) {
      socket.emit('answer', {
        ...this.currentPlayer,
        questId: this.quest.id,
        choice,
        time: this.getTime

      })
    }
  },
  computed: {
    currentPlayer() {
      return this.$store.state.currentPlayer
    },
    getTime() {
      return this.$store.state.startTimer
    }
  },
  data () {
    return {
    }
  },
  created() {
    console.log(this.quest)
    console.log(this.currentPlayer)
  }
}
</script>

<style>

</style>
