<template>
<router-link :to="destination"> 
    <div class="flex items-center">
        <span class="text-xs mr-2">{{ name }}</span>
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