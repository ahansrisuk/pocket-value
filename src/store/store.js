import Vue from 'vue'
// for IE, required for Vuex
import 'es6-promise/auto';
import Vuex from 'vuex'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const url = 'https://api.pocket-value.com/items/';

const months = [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const date = new Date();
const month = date.getMonth();

export const store = new Vuex.Store({
    state: {
        items: [{
            id: '',
            name: '',
            type: '',
            value: '',
            image_path: '',
            northern_months: '',
            southern_months: '',
            outgoing: false,
            incoming: false,
            new: false,
        }],
        inventory: [],
        hemisphere: 'North Hemisphere'
    },
    getters: {
        getItemsByType: (state) => (type) => {
            return state.items.filter( item => item.type == type);
        },
        getTotalValue: (state) => {
            return state.inventory.reduce((total, currentItem) =>  {
                return total + currentItem.value
            }, 0)
        },
        getAvailableItems: (state) => (month) => {
            return state.items.filter( item => {
                return isAvailable(state, item, month)
            })
        },
        getOutgoingItems: (state) => {
            return state.items.filter( item => {
                return isOutgoing(state, item, month)
            })
        },
        getIncomingItems: (state) => {
            return state.items.filter( item => {
                return isIncoming(state, item, month)
            })
        },
        getNewItems: (state) => {
            return state.items.filter(item => {
                return isNew(state, item, month)
            })
        }
    },
    mutations: {
        // actions should be used to call mutations if async is needed
        loadItems (state, items) {
            state.items = items;
            state.items.forEach(item => {
                Vue.set(item, 'outgoing', false);
                Vue.set(item, 'incoming', false);
                Vue.set(item, 'new', false);
                isOutgoing(state, item, month);
                isIncoming(state, item, month);
                isNew(state, item, month);
            });
        },
        addItemToInventory (state, item) {
            state.inventory.push(item);
        },
        removeItemFromInventory (state, itemIndex) {
            state.inventory.splice(itemIndex, 1);
        },
        clearInventory (state) {
            state.inventory = [];
        },
        changeHemisphere (state, value) {
            state.hemisphere = value;
            state.items.forEach(item => {
                if (!isOutgoing(state, item, month) && !isIncoming(state, item, month) && !isNew(state, item, month)) {
                    item.incoming = false;
                    item.outgoing = false;
                    item.new = false;
                }
            });
        },
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

// helper methods

function isAvailable (state, item, month) {
    if (state.hemisphere == 'North Hemisphere') {
        return item.northern_months.includes(months[month])
    } else {
        return item.southern_months.includes(months[month])
    }
}

function isOutgoing (state, item, month) {
    if (isAvailable(state, item, month) && !isAvailable(state, item, month + 1)) {
        item.outgoing = true;
        item.incoming = false;
        item.new = false;
        return true;
    }
}

function isIncoming (state, item, month) {
    if (!isAvailable(state, item, month) && isAvailable(state, item, month + 1)) {
        item.outgoing = false;
        item.incoming = true;
        item.new = false;
        return true;
    }
}

function isNew (state, item, month) {
    if (!isAvailable(state, item, month - 1) && isAvailable(state, item, month)) {
        item.outgoing = false;
        item.incoming = false;
        item.new = true;
        return true;
    }
}