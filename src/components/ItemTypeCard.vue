<template>
    <div class="border px-2 max-h-1/2 overflow-auto">
        <div class="flex justify-between items-center">
            <div class="flex items-center">
                <img v-if="items[0].image_path" :src="previewImage" height="50px" width="50px" alt="fish"/>
                <h2 class="ml-4">{{ type }}</h2>
            </div>
            <DownArrow @click="showItems"/>
        </div>
        <div 
            v-for="item in items" 
            :key="item.id"
            class="flex w-full items-center justify-between">
            <div class="flex items-center">
                <img :src="item.image_path" height="50px" width="50px" alt="fish"/>
                <p>{{ item.name }}</p>
            </div>
            <p>{{ item.value }}</p>
        </div>
    </div>
</template>

<script>

import DownArrow from '../assets/down-arrow'

export default {
    name: 'ItemTypeCard',
    components: {
        DownArrow
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
            show: false
        }
    },
    methods: {
        showItems () {
            this.show = !this.show;
        }
    }
}
</script>