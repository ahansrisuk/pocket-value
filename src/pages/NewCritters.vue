<template>
    <section class="border-custom">
        <PageHeader title="New Critters this Month" />
        <Item v-for="item in newCritters" :key="item.id"
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
    name:'NewCritters',
    components: { Item, PageHeader },
    computed: {
        newCritters() {
            return this.$store.getters.getNewItems;
        }
    },
}
</script>