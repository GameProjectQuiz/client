<template>
  <div class="LobbyPage d-flex flex-column align-items-center justify-content-center">
      <h1>LOBBY</h1>
      <h3>{{ timer }}</h3>
      <div class="board bg-light p-2 d-flex flex-wrap align-items-start justify-content-center" style="overflow: scroll;">
          <PlayerCard v-for="player in players" :key="player.id" :name="player.name" :status="player.status" :id="player.id"></PlayerCard>
      </div>
  </div>
</template>

<script>
import PlayerCard from '../components/PlayerCard'
import socket from '../config/socket'
import { mapMutations } from 'vuex'
export default {
<<<<<<< HEAD
<<<<<<< HEAD
  name: 'LobbyPage',
=======
  name: 'LobbyPage',
  data () {
    return {
      users: []
    }
  },
  methods: {
    ...mapMutations(['DECREMENT_STARTTIMER'])
  },
>>>>>>> 318b94a9433e79aac07a7e1d289fe22eadc56336
  components: {
    PlayerCard
  },
  computed: {
    players () {
      return this.$store.state.player
<<<<<<< HEAD
=======
    name: 'LobbyPage',
    data () {
      return{
        users: []
        }
    },
    components: {
        PlayerCard
    },
    computed: {
        players() {
            return this.$store.state.player
        }
    },
    created() {
        socket.on('user-connect', data => {
            this.users = data
        })
>>>>>>> a69d9d080d2dfd6efc45166b25feeac2c5b4592b
    }
  },
  created () {
=======
    },
    timer() {
      return this.$store.state.startTimer 
    }
  },
  created () {
    socket.on('startGame', () => {
      this.$router.push('/game')
    })
    socket.on('startTimer', (time) => {
      this.DECREMENT_STARTTIMER(time)
    })
>>>>>>> 318b94a9433e79aac07a7e1d289fe22eadc56336
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
