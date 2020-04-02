<template>
    <div class="border">
        <div class="flex justify-between items-center bg-navy p-2">
            <h2 class="text-light">My Pocket</h2>
            <button class="text-xs text-light" @click="clearInventory">Clear</button>
        </div>
        <div class="flex justify-around m-2" v-if="inventory.length > 0">
            <div class="rounded-full bg-mustard px-4 py-2" v-if="inventory">
                <span>{{ totalValue }} bells</span>
            </div>
        </div>
        <div 
            v-for="(item,index) in inventory" 
            :key="index"
            class="flex w-full items-center justify-between border-main border-t p-2">
            <div class="flex items-center">
                <img :src="item.image_path" height="50px" width="50px" alt="fish"/>
                <p class="text-sm ml-4">{{ item.name }}</p>
            </div>
            <div class="flex items-center">
                <p class="text-sm">{{ item.value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Inventory',
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
        }
    }
}
</script>