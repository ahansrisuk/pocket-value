import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAnime from 'vue-animejs';

// App Pages & Vuex Store
import App from './App.vue';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import { store } from './store/store';

// CSS
import './assets/tailwind.css';

Vue.use(VueRouter);
Vue.use(VueAnime);


Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/inventory', component: Inventory },
  // { path: '/about', component: About },

]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
