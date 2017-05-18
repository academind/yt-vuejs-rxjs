<template>
  <div id="app">
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
  import { Observable } from 'rxjs/Observable'
  import 'rxjs/add/observable/interval'
  import 'rxjs/add/operator/filter'

  export default {
    name: 'app',
    data () {
      return {
        count: 0
      }
    },
    created () {
      const obs = Observable.interval(1000)
      obs
        .filter((value) => value % 2 == 0)
        .subscribe(
        (value) => this.count = value
      )
    }
  }
</script>

<style>

</style>
