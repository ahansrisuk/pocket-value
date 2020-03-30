<template>
    <div class="border">
        <div class="flex p-1">
            <SearchIcon/>
            <input type="text" class="bg-background focus:outline-none ml-3" v-model="searchInput">
        </div>
    </div>
</template>

<script>

import SearchIcon from '../assets/search';

export default {
    name: 'SearchBar',
    components: {
        SearchIcon
    },
    data: function () {
        return {
            searchInput: ''
        }
    }
}
</script>