<template>
    <div class="border px-2">
        <div class="flex justify-between items-center">
            <div class="flex items-center">
                <img v-if="items[0].image_path" :src="previewImage" height="50px" width="50px" alt="fish"/>
                <h2 class="ml-4">{{ type }}</h2>
            </div>
            <button @click="open = !open">
                <Arrow />
            </button>
        </div>
        <div v-show="open" class="overflow-auto" style="max-height: 400px">
                <Item :item="item" v-for="item in items" :key="item.id"/>
        </div>
    </div>
</template>

<script>

import Arrow from './arrow';
import Item from './Item';

export default {
    name: 'ItemTypeCard',
    components: {
        Arrow,
        Item
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
            open: false,
        }
    },
}
</script>