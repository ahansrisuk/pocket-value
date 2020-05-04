<template>
  <section class="border-custom">
    <PageHeader title="Available Now" />
    <Item
      v-for="item in currentlyAvailableItems"
      :key="item.id"
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
  name: 'AvailableNow',
  components: { Item, PageHeader },
  computed: {
    currentlyAvailableItems() {
      const date = new Date();
      return this.$store.getters.getAvailableItems(date.getMonth());
    },
  },
};
</script>
