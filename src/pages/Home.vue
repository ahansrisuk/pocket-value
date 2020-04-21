<template>
	<div>
		<ItemTypeCard class="mb-4" type="Fish"/>
		<ItemTypeCard class="mb-4" type="Bugs"/>
	</div>
</template>

<script>

import ItemTypeCard from '../components/ItemTypeCard';

export default {
  name: 'App',
  components: {
    ItemTypeCard,
  },
  created() {
    this.$store.dispatch('loadItems');
  }
}
</script>
