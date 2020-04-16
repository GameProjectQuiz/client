<template>
  <div class="container">
    <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" :style="progress"></div>
    </div>
    <question />
  </div>
</template>

<script>
import question from '@/components/Question'
import { mapMutations } from 'vuex'
export default {
  name: 'GamePage',
  methods: {
    ...mapMutations(['SET_STARTTIMER'])
  },
  components: {
    question
  },
  computed: {
    progress () {
      return `width: ${this.$store.state.startTimer}%`
    }
  },
  created () {
    this.SET_STARTTIMER()
  }
}
</script>

<style>
#question {
    background-color: red;
}

#answers {
    background-color: blue;
}

#a {
    background-color: yellow;
}

#b {
    background-color: green;
}

#c {
    background-color: orange;
}

#d {
    background-color: aqua;
}
</style>
