<template>
    <div class="fixed h-full w-full top-0 right-0 flex z-10">
        <div class="fixed h-full w-full bg-black opacity-50"></div>
        <div class="bg-background p-4 m-auto z-20 border-custom max-w-xs">
            <div class="flex justify-between items-center">
                <div class="flex">
                    <h2>{{ item.name }}</h2>
                    <img v-if="item.incoming" src="../assets/blue.svg" class="ml-1" height="14px" width="14px" />
                    <img v-if="item.outgoing" src="../assets/pink.svg" class="ml-1" height="14px" width="14px" />
                    <button class="ml-4 bg-mustard px-3 rounded-lg text-xl" @click="addItemToInventory(item)">+</button>
                </div>
                <button class="px-4" @click="$emit('close-modal')">
                    <img src="../assets/close.svg" alt="close">
                </button>
            </div>
            <hr class="border-t-2 border-main mt-2">
            <div class="flex items-center mt-2">
                <img :src="item.image_path" alt="item.name" height="64px" width="64px">
                <div class="flex-col flex-grow ml-4">
                    <div class="flex justify-between">
                        <div>
                            <p class="underline text-xs">Value</p>
                            <p>{{ item.value }} bells </p>
                        </div>
                        <div>
                            <p class="underline text-xs">Times Available</p>
                            <p>{{ item.time }}</p>
                        </div>
                    </div>
                    <div class="mt-2">
                        <div>
                            <p class="underline text-xs">Location</p>
                            <p>{{ item.location }}</p>
                        </div>
                    </div>
                    <div class="mt-2">
                        <IncomingBadge v-if="item.incoming"/>
                        <OutgoingBadge v-if="item.outgoing"/>
                        <NewBadge v-if="item.new"/>
                    </div>
                    
                </div>
            </div>
            <AvailableMonths v-if="hemisphere == 'North Hemisphere'" title="Northern Hemisphere" :available-months="item.northern_months" />
            <AvailableMonths v-if="hemisphere == 'South Hemisphere'" title="Southern Hemisphere" :available-months="item.southern_months" />
        </div>
      
    </div>
</template>

<script>
import AvailableMonths from './AvailableMonths';
import IncomingBadge from './IncomingBadge';
import NewBadge from './NewBadge';
import OutgoingBadge from './OutgoingBadge';

export default {
    name: 'ItemModal',
    components: { 
        AvailableMonths, 
        IncomingBadge,
        OutgoingBadge,
        NewBadge,
    },
    props: ['item'],
    computed: {
        hemisphere () {
            return this.$store.state.hemisphere;
        }
    },
    methods: {
        addItemToInventory (item) {
            this.$store.commit('addItemToInventory', item)
        },
    }

}
</script>
