<template>
    <div 
        class="border px-2 max-h-1/2 overflow-auto">
        <div class="flex justify-between items-center">
            <div class="flex items-center">
                <img v-if="items[0].image_path" :src="previewImage" height="50px" width="50px" alt="fish"/>
                <h2 class="ml-4">{{ type }}</h2>
            </div>
            <div @click="showHideItems">
                <Arrow />
            </div>
        </div>
        <div v-if="show">
            <div 
                v-for="item in items" 
                :key="item.id"
                class="flex w-full items-center justify-between border-main border-t">
                <div class="flex items-center">
                    <img :src="item.image_path" height="50px" width="50px" alt="fish"/>
                    <p class="text-sm ml-4">{{ item.name }}</p>
                </div>
                <div class="flex items-center">
                    <p class="text-sm">{{ item.value }}</p>
                    <button class="ml-4 bg-mustard px-2 rounded-lg" @click="addItemToInventory(item)">+</button>        
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Arrow from './arrow'

export default {
    name: 'ItemTypeCard',
    components: {
        Arrow
    },
    props: ['type'],
    computed: {
        items () {
            return this.$store.getters.getItemsByType(this.type)
        },
        previewImage () {
            return this.items[0].image_path;
        },
    },
    data: function () {
        return {
            show: false,
        }
    },
    methods: {
        showHideItems () {
            this.show = !this.show;
        },
        addItemToInventory (item) {
            this.$store.commit('addItemToInventory', item)
        }
    }
}
</script>