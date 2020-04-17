<template>
  <div class="container" v-if="gameOn">
    <div class="row justify-content-center mt-5 mb-5">
      <img src="../assets/yahoot.png">
    </div>
    <div class="row justify-content-center">
      <form class="col-4">
        <div class="form-group">
          <input v-model="username" type="text" class="form-control" id="username" placeholder="Creative Username" required autofocus>
        </div>
        <div @click.prevent="login"><button tag="button" class="btn btn-danger">Enter Game</button></div>
        <!-- <button type="submit" >Enter Game</button> -->
      </form>
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
      users: [],
      gameOn: false
    }
  },
  methods: {
    ...mapMutations(['CHANGE_CURRENTPLAYER', 'CHANGE_PLAYER']),
    login () {
      if(this.username && this.username != '') {
        localStorage.setItem('username', this.username)
        this.$router.push('/lobby')
        const data = {
          id: `${this.username}-${new Date().toISOString()}`,
          name: this.username,
          status: 'Waiting',
          score: 0
        }
        this.CHANGE_CURRENTPLAYER(data)
        socket.emit('user-connect', data)
        // mau lempar ke halaman apa?
        // this.$router.push('/lobby')
      }
    }
  },
  created () {
    socket.emit('gameOn')
    socket.on('gameOn', (data) => {
      this.gameOn = data
    })
    socket.on('user-connect', data => {
      this.users = data
    })
    socket.on('stateNewPlayer', (data) => {
      this.CHANGE_PLAYER(data)
    })
    localStorage.clear()
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
