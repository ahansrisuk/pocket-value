import Vue from 'vue'
// for IE, required for Vuex
import 'es6-promise/auto';
import Vuex from 'vuex'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const url = 'https://api.pocket-value.com/items/';

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
        inventory: []
    },
    getters: {
        getItemsByType: (state) => (type) => {
            return state.items.filter( item => item.type.name == type);
        },
        getTotalValue: (state) => {
            return state.inventory.reduce((total, currentItem) =>  {
                return total + currentItem.value
            }, 0)
        }
    },
    mutations: {
        loadItems (state, items) {
            state.items = items;
        },
        addItemToInventory (state, item) {
            state.inventory.push(item);
        },
        clearInventory (state) {
            state.inventory = [];
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