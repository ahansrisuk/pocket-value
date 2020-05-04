<template>
    <section class="border-custom">
        <PageHeader title="Incoming Critters Next Month" />
        <Item v-for="item in incomingCritters" :key="item.id"
            :item="item"
            :addItemButton="true"
            class="px-2"
        />
    </section>
</template>

<script>

import Item from '../components/Item';
import PageHeader from '../components/PageHeader';

export default {
    name:'AvailableNow',
    components: { Item, PageHeader },
    computed: {
        incomingCritters() {
            return this.$store.getters.getIncomingItems;
        }
    },
}
</script>