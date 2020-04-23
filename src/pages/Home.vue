<template>
<div>
    <section class="flex mb-2 justify-between flex-wrap">
		<div class="border rounded flex px-2 py-1 items-center mb-2 justify-between w-custom-1 md:w-custom-2">
			<span class="text-xs">North Hemisphere</span>
			<img src="../assets/location-icon.svg" alt="pin" height="24px" width="24px"/>
		</div>

		<NavButton 
			name="Available Now" 
			destination="/available-now"	
			>
			<img src="../assets/calendar.svg" alt="calendar" height="24px" width="24px" />
		</NavButton>
		<NavButton 
			name="Outgoing Critters" 
			destination="/outgoing-critters"	
			>
			<img src="../assets/pink.svg" alt="pink circle" height="24px" width="24px" class="p-1" />
		</NavButton>
		<NavButton 
			name="Incoming Critters" 
			destination="/incoming-critters"	
			>
			<img src="../assets/blue.svg" alt="blue circle" height="24px" width="24px" class="p-1" />
		</NavButton>
    </section>
    <section>
		<ItemTypeCard class="mb-4" type="Fish"/>
		<ItemTypeCard class="mb-4" type="Bugs"/>
    </section>
</div>
</template>

<script>

import ItemTypeCard from '../components/ItemTypeCard';
import NavButton from '../components/NavButton';

export default {
  name: 'App',
  components: {
	ItemTypeCard,
	NavButton
  },
  created() {
    this.$store.dispatch('loadItems');
  }
}
</script>
