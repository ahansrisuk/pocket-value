<template>
    <div class="fixed h-full w-full top-0 right-0 flex">
        <div class="fixed h-full w-full bg-black opacity-50"></div>
        <div class="bg-background p-20 m-auto z-10 border">
            {{ item.name }}
            <button class="ml-4 mr-1 bg-mustard px-2 rounded-lg" @click="addItemToInventory(item)">+</button>
            <button class="ml-4 mr-1 bg-mustard px-2 rounded-lg" @click="$emit('close-modal')">
                <img src="../assets/close.svg" alt="close" />
            </button>        
        </div>
      
    </div>
</template>

<script>
export default {
    name: 'ItemModal',
    props: ['item'],
    methods: {
        addItemToInventory (item) {
            this.$store.commit('addItemToInventory', item)
        },
    }

}
</script>
