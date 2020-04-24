import Vue from 'vue';
import VueRouter from 'vue-router';

// App Pages & Vuex Store
import App from './App.vue';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import AvailableNow from './pages/AvailableNow';
import { store } from './store/store';

// CSS
import './assets/tailwind.css';

Vue.use(VueRouter);


Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/inventory', component: Inventory },
  { path: '/available-now', component: AvailableNow }
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
