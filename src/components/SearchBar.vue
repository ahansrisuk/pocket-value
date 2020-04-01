<template>
    <div class="relative">
        <div class="border">
            <div class="flex p-1">
                <img src="../assets/search.svg" alt="search" />
                <input 
                    type="text" 
                    class="bg-background focus:outline-none ml-3 w-full"
                    v-model="searchInput" 
                >
            </div>
        </div>
        <div class="overflow-auto absolute bg-background mt-2 border w-3/4" style="max-height: 400px" v-show="itemSuggestions.length > 0">
            <div 
                v-for="item in itemSuggestions" 
                :key="item.id"
                class="flex w-full items-center justify-between border-main border-t">
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
    </div>
</template>

<script>

export default {
    name: 'SearchBar',
    data: function () {
        return {
            searchInput: ''
        }
    },
    computed: {
        itemSuggestions() {
            return this.$store.state.items.filter( (item) => {
                return item.name.toLowerCase().includes(this.searchInput.toLowerCase()) && this.searchInput;
            } )
        },
    },
    methods: {
        addItemToInventory (item) {
            this.$store.commit('addItemToInventory', item)
        }
    }
}
</script>