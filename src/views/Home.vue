<template>
  <div class="container" v-if="gameOn">
    <form>
      <div class="form-group">
        <p>{{ users }}</p>
        <label for="username">Username</label>
        <input v-model="username" type="text" class="form-control" id="username" required autofocus>
      </div>
      <div @click.prevent="login"><router-link to="/lobby" tag="button" class="btn btn-primary">Enter Game</router-link></div>
      <!-- <button type="submit" >Enter Game</button> -->
    </form>
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
      localStorage.setItem('username', this.username)
      const data = {
        id: `${this.username}-${new Date().toISOString()}`,
        name: this.username,
        status: 'Waiting',
        jawaban: []
      }
      this.CHANGE_CURRENTPLAYER(data)
      socket.emit('user-connect', data)

      // mau lempar ke halaman apa?
      // this.$router.push('/kemana')
    }
  },
  created () {
    socket.emit('gameOn')
    socket.on('gameOn', (data) => {
      console.log(data)
      this.gameOn = data
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
