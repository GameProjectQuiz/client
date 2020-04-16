<template>
  <div>
      <div class="row text-uppercase font-weight-bold" id="question">
          <h1>{{ questions[0].question }}</h1>
      </div>
      <div class="row" id="answers">
          <div class="col">
              <div class="row" id="a">
                  <button class="btn btn-lg btn-primary btn-block text-uppercase font-weight-bold">{{ questions[0].choices[0].choice }}</button>
              </div>
              <div class="row" id="b">
                  <button class="btn btn-lg btn-success btn-block text-uppercase font-weight-bold">{{ questions[0].choices[1].choice }}</button>
              </div>
          </div>
          <div class="col">
              <div class="row" id="c">
                  <button class="btn btn-lg btn-danger btn-block text-uppercase font-weight-bold">{{ questions[0].choices[2].choice }}</button>
              </div>
              <div class="row" id="d">
                  <button @click="jawab('d')" class="btn btn-lg btn-warning btn-block text-uppercase font-weight-bold">{{ questions[0].choices[3].choice }}</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      questions: [
        {
          id: 1,
          question: 'Siapa buddy paling baek?',
          choices: [
            {
              id: 1,
              choice: 'Diaz'
            },
            {
              id: 2,
              choice: 'Fauzan'
            },
            {
              id: 3,
              choice: 'Robin'
            },
            {
              id: 2,
              choice: 'Jeje'
            }
          ],
          answer: 'Diaz'
        }
      ]
    }
  }
}
</script>

<style>

</style>
