<template>
<div>
    <section class="flex mb-4 justify-between flex-wrap">
		<div class="border rounded flex px-2 py-1 items-center mb-2 justify-between w-custom-1 md:w-custom-2">
			<span class="text-xs">North Hemisphere</span>
			<img src="../assets/location-icon.svg" alt="world" height="24px" width="24px"/>
		</div>
		<div class="border rounded flex px-2 py-1 items-center mb-2 justify-between w-custom-1 md:w-custom-2">
			<span class="text-xs">Available Now</span>
			<img src="../assets/calendar.svg" alt="world" height="24px" width="24px" />
		</div>
		<div class="border rounded flex px-2 py-1 items-center mb-2 justify-between w-custom-1 md:w-custom-2">
			<span class="text-xs">Outgoing Critters</span>
			<img src="../assets/calendar.svg" alt="world" height="24px" width="24px" />
		</div>
		<div class="border rounded flex px-2 py-1 items-center mb-2 justify-between w-custom-1 md:w-custom-2">
			<span class="text-xs">Incoming Critters</span>
			<img src="../assets/calendar.svg" alt="world" height="24px" width="24px" />
		</div>
    </section>
    <section>
		<ItemTypeCard class="mb-4" type="Fish"/>
		<ItemTypeCard class="mb-4" type="Bugs"/>
    </section>
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
