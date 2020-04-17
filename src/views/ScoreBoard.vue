<template>
   <div class="LobbyPage d-flex flex-column align-items-center justify-content-center">
      <h1>RESULT</h1>
      <audio autoplay loop hidden>
      <source src="../assets/kahoot-remix.mp3">
                If you're reading this, audio isn't supported.
      </audio>
      <h3>{{ timer }}</h3>
      <div class="board bg-light p-2 d-flex flex-wrap align-items-start justify-content-center" style="overflow: scroll;">
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
    },
    computed: {
        players () {
            return this.$store.state.player
        },
    },
    components: {
        PlayerCard
    }
}
</script>

<style>

</style>