<template>
  <div class="container">
      <question />
  </div>
</template>

<script>
import question from '@/components/Question'

export default {
  name: 'GamePage',
  components: {
    question
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
