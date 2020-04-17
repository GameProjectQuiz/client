<template>
  <div class="card" style="width: 18.5rem;">
  <div class="headerCard d-flex justify-content-center align-items-center" :style="cardHeaderReady" v-if="!finished" >{{status}}</div>
  <div class="card-body">
    <h5 class="card-title">{{name}}</h5>
    <h5 class="card-title" v-if="finished">{{score}}</h5>
    <div class="d-flex justify-content-center align-items-center" v-if="getCurrentPlayer.id == id && !finished">
        <a href="#" id='hide' @click.prevent="ready" class="btn btn-primary form-control m-1" >Ready</a>
        <!-- <a href="#" @click.prevent="cancel" class="btn btn-info form-control m-1" >Cancel</a> -->
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'PlayerCard',
  props: ['name', 'status', 'id', 'finished', 'score'],
  data () {
    return {
      isHidden: false
    }
  },
  methods: {
    ...mapMutations(['CHANGE_STATUS']),
    ready () {
      document.getElementById('hide').style.display = 'none'
      this.CHANGE_STATUS({
        id: this.id,
        status: 'Ready'
      })
    },
    cancel () {
      this.CHANGE_STATUS({
        id: this.id,
        status: 'Waiting'
      })
    }
  },
  computed: {
    cardHeaderReady () {
      if (this.status === 'Ready') {
        return {
          width: '18.4rem',
          height: '50px',
          'background-color': 'green',
          color: 'white',
          'font-size': '24px',
          'font-weight': '900'
        }
      } else {
        return {
          width: '18.4rem',
          height: '50px',
          'background-color': 'grey',
          color: 'white',
          'font-size': '24px',
          'font-weight': '900'
        }
      }
    },
    getCurrentPlayer () {
      return this.$store.state.currentPlayer
    }
  }
}
</script>

<style>
</style>
