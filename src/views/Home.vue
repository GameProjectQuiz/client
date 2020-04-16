<template>
  <div class="container">
    <form @submit.prevent='login'>
      <div class="form-group">
        <p>{{ users }}</p>
        <label for="username">Username</label>
        <input v-model="username" type="text" class="form-control" id="username" required autofocus>
      </div>
      <button type="submit" class="btn btn-primary">Enter Game</button>
    </form>
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
      // mau lempar ke halaman apa?
      // this.$router.push('/kemana')
    }
  },
  created () {
    socket.on('user-connect', data => {
      this.users = data
    })
  }
}
</script>
