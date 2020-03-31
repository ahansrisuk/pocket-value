import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';
import VueAnime from 'vue-animejs';

import './assets/tailwind.css';

Vue.use(VueAnime);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
