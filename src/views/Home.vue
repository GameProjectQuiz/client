<template>
  <div class="container align-items-center justify-content-center">
      <div class="row justify-content-center">
        <img src="../assets/yahoot.png">
      </div>
      <h3>- Game Paling Yahud -</h3>
      <div class="row justify-content-center">
        <form class="col-5 " @submit.prevent='login'>
          <div class="form-group">
            <p>{{ users }}</p>
            <label for="username">Username</label>
            <input v-model="username" type="text" class="form-control" id="username" required autofocus>
          </div>
          <button type="submit" class="btn btn-danger">Enter Game</button>
        </form>
      </div>
  </div>
</template>

<script>
import socket from '../config/socket'

export default {
  name: 'Home',
  data () {
    return {
      username: '',
      users: []
    }
  },
  methods: {
    login () {
      localStorage.setItem('username', this.username)
      const data = {
        name: this.username
      }
      socket.emit('user-connect', data)
      this.$router.push('/lobby')
    }
  }
}
</script>
