<template>
    <div>
        <div class="flex w-full items-center justify-between border-main border-t">
            <button class="flex items-center flex-grow outline-none hover:underline" @click="showModal = true">
                <img :src="item.image_path" height="50px" width="50px" alt="fish"/>
                <p class="text-sm ml-4">{{ item.name }}</p>
            </button>
            <div class="flex items-center">
                <p class="text-sm">{{ item.value }}</p>
                <button 
                    class="ml-4 mr-1 bg-mustard px-2 rounded-lg" 
                    @click="addItemToInventory(item)"
                    v-if="addItemButton"
                    >
                        +
                </button>
                <button 
                    @click="removeItemFromInventory(index)" 
                    v-if="removeItemButton"
                    class="mr-2 ml-4"
                    >
                    <img src="../assets/close.svg" height="12" width="12">
                </button>
            </div>
        </div>
        <ItemModal 
            v-if="showModal" 
            @close-modal="showModal = false"
            :item="item" 
        />
    </div>
</template>

<script>

import ItemModal from './ItemModal';

export default {
    name: 'Item',
    components: { ItemModal },
    props: ['item', 'addItemButton', 'removeItemButton'],
    data: function () {
        return {
            showModal: false,
        }
    },
    methods: {
        addItemToInventory (item) {
            this.$store.commit('addItemToInventory', item)
        },
        removeItemFromInventory (itemIndex) {
            this.$store.commit('removeItemFromInventory', itemIndex);
        }
    }
}
</script>