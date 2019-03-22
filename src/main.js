import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
});
