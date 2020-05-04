<template>
    <div class="border-custom">
        <div class="flex justify-between items-center bg-navy p-2">
            <h2 class="text-light">My Pocket</h2>
            <button class="text-xs text-light" @click="clearInventory">Clear</button>
        </div>
        <div class="flex justify-around m-2" v-if="inventory.length > 0">
            <div class="rounded-full bg-mustard px-4 py-2" v-if="inventory">
                <span>{{ totalValue }} bells</span>
            </div>
        </div>
        <div class="flex justify-center m-4" v-else>
            Empty! Items will show here when they are added.
        </div>
        <Item v-for="(item, index) in inventory" :key="index" :item="item" :removeItemButton="true" />
    </div>
</template>

<script>
import Item from '../components/Item';

export default {
    name: 'Inventory',
    components: { Item },
    computed: {
        inventory () {
            let inv = this.$store.state.inventory;
            return inv.sort((a, b) => (a.value < b.value) ? 1 : -1); 
        },
        totalValue () {
            return this.$store.getters.getTotalValue;
        }
    },
    methods: {
        clearInventory () {
            this.$store.commit('clearInventory');
        },
    }
}
</script>