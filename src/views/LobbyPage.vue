<template>
  <div class="LobbyPage d-flex flex-column align-items-center justify-content-center">
      <h1>LOBBY</h1>
      <audio autoplay loop hidden>
      <source src="../assets/kahoot-remix.mp3">
                If you're reading this, audio isn't supported.
      </audio>
      <h3 @click.prevent="on">{{ timer }}</h3>
      <div class="board bg-light p-2 d-flex flex-wrap align-items-start justify-content-center mb-4" style="overflow: scroll;">
          <PlayerCard v-for="player in players" :key="player.id" :name="player.name" :status="player.status" :id="player.id"></PlayerCard>
      </div>
  </div>
</template>

<script>
import PlayerCard from '../components/PlayerCard'
import socket from '../config/socket'
import { mapMutations } from 'vuex'
export default {
  name: 'LobbyPage',
  data () {
    return {
      users: []
    }
  },
  methods: {
    ...mapMutations(['DECREMENT_STARTTIMER', 'CHANGE_ISANSWER'])
  },
  components: {
    PlayerCard
  },
  computed: {
    players () {
      return this.$store.state.player
    },
    timer () {
      return this.$store.state.startTimer
    }
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
    socket.on('startGame', () => {
      this.$router.push('/game')
      this.CHANGE_ISANSWER(false)
    })
    socket.on('startTimer', (time) => {
      this.DECREMENT_STARTTIMER(time)
    })
    if (!localStorage.username) {
      this.$router.push('/')
    }
  }
}
</script>

<style>
@keyframes bgcolor {
    0% {
        background-color: #45a3e5
    }

    30% {
        background-color: #66bf39
    }

    60% {
        background-color: #eb670f
    }

    90% {
        background-color: #f35
    }

    100% {
        background-color: #864cbf
    }
}

.LobbyPage {
    width: 100vw;
    height: 100vh;
    -webkit-animation: bgcolor 20s infinite;
    animation: bgcolor 10s infinite;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
}
.board {
    width: 90%;
    height: 80%;
    border-radius: 10px;
    overflow: scroll;
}

h1 {
    font-size: 50px;
    font-weight: 500;
}
</style>
