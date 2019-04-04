import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import App from './App.vue';

new Vue({
    render: h => h(App)
}).$mount("#app");
