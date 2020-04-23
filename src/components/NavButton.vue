<template>
<router-link :to="destination"> 
    <div class="border rounded flex px-2 py-1 items-center mb-2 justify-between w-custom-1 md:w-custom-2">
        <span class="text-xs">{{ name }}</span>
        <slot></slot>
    </div>
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