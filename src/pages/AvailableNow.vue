<template>
    <section>
        <Item v-for="item in currentlyAvailableItems" :key="item.id"
            :item="item"
            :addItemButton="true"
        />
    </section>
</template>

<script>

import Item from '../components/Item'

export default {
    name:'AvailableNow',
    components: { Item },
    computed: {
        currentlyAvailableItems() {

        }
    },
    methods: {

    }
}
</script>