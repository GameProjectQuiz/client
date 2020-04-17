<template>
  <div class="container">
    <div class="row justify-content-center mt-5 mb-5">
      <!-- <iframe src="../assets/kahoot-ori.mp3" type="audio/mp3" allow="autoplay" id="audio" style="display:none"></iframe> -->
      <audio autoplay loop hidden>
      <source src="../assets/kahoot-ori.mp3">
                If you're reading this, audio isn't supported.
      </audio>
      <img src="../assets/yahoot.png">
    </div>
    <div class="row justify-content-center" v-if="!getGameOn">
      <form class="col-4">
        <div class="form-group">
          <input v-model="username" type="text" class="form-control" id="username" placeholder="Creative Username" required autofocus>
        </div>
        <div @click.prevent="login"><router-link to="/lobby" tag="button" class="btn btn-danger">Enter Game</router-link></div>
        <!-- <button type="submit" >Enter Game</button> -->
      </form>
    </div>
    <div v-if="getGameOn">
      <h2>SORRY GAME IS ALREADY STARTED, PLEASE WAIT.....</h2>
    </div>
  </div>
</template>

<script>
import socket from '../config/socket'
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      username: '',
      users: []
    }
  },
  methods: {
    ...mapMutations(['CHANGE_CURRENTPLAYER', 'CHANGE_PLAYER', 'CHANGE_GAMEON']),
    login () {
      localStorage.setItem('username', this.username)
      const data = {
        id: `${this.username}-${new Date().toISOString()}`,
        name: this.username,
        status: 'Waiting',
        score: 0
      }
      this.CHANGE_CURRENTPLAYER(data)
      socket.emit('user-connect', data)
    }
  },
  computed: {
    getGameOn() {
      return this.$store.state.gameOn
    }
  },
  created () {
    socket.emit('gameOn')
    socket.on('gameOn', (data) => {
      this.CHANGE_GAMEON(data)
    })
    socket.on('user-connect', data => {
      this.users = data
    })
    socket.on('stateNewPlayer', (data) => {
      this.CHANGE_PLAYER(data)
    })
  }
}
</script>

<style scoped>
::placeholder {
  font-weight: 400;
}

input {
  text-align: center;
  font-weight: 900;
}
</style>
