<template>
  <div class="about">
    <h1>Worker Demo</h1>
    <button @click="calc">Calculate</button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Worker from 'worker-loader!../worker/regression.worker'
export default Vue.extend({
  name: 'Demo',
  data () {
    return {
      worker: new Worker()
    }
  },
  methods: {
    calc () {
      console.log(this.worker)
      this.worker.onmessage = (event: any) => { console.log('from worker', event) }
      console.log(this.worker.postMessage({ a: 1 }))
    }
  }
})
</script>
