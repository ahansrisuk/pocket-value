import Vue from 'vue'
// for IE, required for Vuex
import 'es6-promise/auto';
import Vuex from 'vuex'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const url = 'http://167.99.234.44/api/items/';

export const store = new Vuex.Store({
    state: {
        items: [{
            id: '',
            name: '',
            type_id: '',
            value: '',
            image_path: '',
            type: {
                id: '',
                name: '',
            }
        }],
        totalValue: 0,
        inventory: []
    },
    getters: {
        getItemsByType: (state) => (type) => {
            return state.items.filter( item => item.type.name == type);
        },
    },
    mutations: {
        loadItems (state, items) {
            state.items = items;
        },
        addValue (state, value) {
            state.totalValue += value;
        },
        clearValue (state) {
            state.totalValue = 0;
        },
        addItemToInventory (state, item) {
            state.inventory.push(item);
        }
    },
    actions: {
        loadItems({ commit }) {
          Vue.axios.get(url).then((response) => {
            commit('loadItems', response.data);
          }).catch(error => {
            throw new Error(`API ${error}`);
          });
        }
      },
});