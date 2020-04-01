<template>
    <div>
        <div class="flex w-full items-center justify-between border-main border-t">
            <div class="flex items-center">
                <img :src="item.image_path" height="50px" width="50px" alt="fish"/>
                <p class="text-sm ml-4">{{ item.name }}</p>
            </div>
            <div class="flex items-center">
                <p class="text-sm">{{ item.value }}</p>
                <button class="ml-4 mr-1 bg-mustard px-2 rounded-lg" @click="addItemToInventory(item)">+</button>        
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Item',
    props: ['item'],
    methods: {
        addItemToInventory (item) {
            this.$store.commit('addItemToInventory', item)
        }
    }
}
</script>