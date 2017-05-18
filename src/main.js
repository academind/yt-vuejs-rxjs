import Vue from 'vue'
import VueRx from 'vue-rx'
import { Observable } from 'rxjs/Observable'
import App from './App.vue'

Vue.use(VueRx, {
  Observable
})

new Vue({
  el: '#app',
  render: h => h(App)
})
