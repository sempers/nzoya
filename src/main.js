import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import ZoyaNav from './components/ZoyaNav.vue'
import ZoyaArticle from './components/ZoyaArticle.vue'
import ZoyaFooter from './components/ZoyaFooter.vue'
import ZoyaFlyform from './components/ZoyaFlyform.vue'

import App from './App.vue'

new Vue({
  el: '#app',
  components: [ZoyaNav, ZoyaArticle, ZoyaFooter, ZoyaFlyform],
  render: h => h(App)
});
