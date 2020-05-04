<template>
<router-link :to="destination" class="text-white rounded-full mb-2 w-24 h-6 flex items-center justify-around"> 
    <span class="text-xs">{{ name }}</span>
</router-link>
</template>

<script>
export default {
    name: 'NavButton',
    props: [
        'name',
        'image',
        'destination'
    ]
}
</script>

<style>

</style>