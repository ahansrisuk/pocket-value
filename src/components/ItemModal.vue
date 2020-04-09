<template>
    <div class="fixed h-full w-full top-0 right-0 flex">
        <div class="fixed h-full w-full bg-black opacity-50"></div>
        <div class="bg-background p-4 m-auto z-10 border" style="max-width: 400px">
            <div class="flex justify-between items-center">
                <div class="flex">
                    <h2>{{ item.name }}</h2>
                    <button class="ml-4 bg-mustard px-3 rounded-lg text-xl" @click="addItemToInventory(item)">+</button>
                </div>
                <button class="px-4" @click="$emit('close-modal')">
                    <img src="../assets/close.svg" alt="close">
                </button>
            </div>
            <hr class="border-t-2 border-main mt-2">
            <div class="flex items-center mt-2">
                <img :src="item.image_path" alt="item.name" height="90px" width="90px">
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
                </div>
            </div>
            <AvailableMonths title="Northern Hemisphere" :available-months="item.northern_months" />
            <AvailableMonths title="Southern Hemisphere" :available-months="item.southern_months" />
        </div>
      
    </div>
</template>

<script>
import AvailableMonths from './AvailableMonths';

export default {
    name: 'ItemModal',
    components: { AvailableMonths },
    props: ['item'],
    methods: {
        addItemToInventory (item) {
            this.$store.commit('addItemToInventory', item)
        },
    }

}
</script>
