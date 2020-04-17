<template>
   <div class="LobbyPage d-flex flex-column align-items-center justify-content-center">
      <h1>RESULT</h1>
      <button @click.prevent="clearing" class="btn btn-lg btn-danger font-weight-bold">PLAY AGAIN</button>
      <audio autoplay loop hidden>
      <source src="../assets/kahoot-ori.mp3">
                If you're reading this, audio isn't supported.
      </audio>
      <h3>{{ timer }}</h3>
      <div class="board bg-light p-2 d-flex flex-wrap align-items-start justify-content-center mb-4" style="overflow: scroll;">
          <PlayerCard v-for="(player, index) in players" :key="player.id" :name="player.name" :status="player.status" :id="player.id" finished=true :score="player.score" :rank="index"></PlayerCard>
      </div>
  </div>
</template>

<script>
import PlayerCard from '../components/PlayerCard'
import socket from '../config/socket'
import { mapMutations } from 'vuex'
export default {
  name: 'ScoreBoard',
  methods: {
    ...mapMutations(['CLEAR_ALL']),
    clearing () {
      socket.emit('clear-all-client')
      // localStorage.removeItem('username')
    }
  },
  computed: {
    players () {
      return this.$store.state.player
    }
  },
  components: {
    PlayerCard
  },
  created () {
    socket.emit('gameOn')
    socket.on('gameOn', (data) => {
      if (data) {
        this.$router.push('/')
      }
    })
    if (!this.$store.state.currentPlayer) {
      this.$router.push('/')
    }
    socket.on('clear-all-client', () => {
      this.CLEAR_ALL()
      this.$router.push('/')
    })
  }
}
</script>

<style>

</style>
