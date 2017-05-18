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
    subscriptions () {
      return {
        count: Observable.interval(1000)
          .filter((value) => value % 2 == 0)
      }
    }
  }
</script>

<style>

</style>
