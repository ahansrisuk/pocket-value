<template>
    <div class="border">
        <div class="flex p-1">
            <img src="../assets/search.svg" alt="search" />
            <input type="text" class="bg-background focus:outline-none ml-3" v-model="searchInput">
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
    }
}
</script>