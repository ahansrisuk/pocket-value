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
                <button v-show="searchInput" @click="clearInput" class="px-2">
                    <img src="../assets/close.svg" alt="close" class="text-main"  />
                </button>
            </div>
        </div>
        <div class="overflow-auto absolute bg-background mt-2 border w-full" style="max-height: 400px" 
            v-show="itemSuggestions.length > 0"
            >
            <Item :item="item" v-for="item in itemSuggestions" :key="item.id" />
        </div>
    </div>
</template>

<script>

import Item from './Item';

export default {
    name: 'SearchBar',
    components: {
        Item
    },
    data: function () {
        return {
            searchInput: '',
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
        clearInput () {
            this.searchInput = '';
        }
    },
}
</script>