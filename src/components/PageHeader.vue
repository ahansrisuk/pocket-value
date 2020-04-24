<template>
<div class="flex justify-between items-center bg-navy p-2 mb-2">
    <h2 class="text-light">{{ title }}</h2>
</div>
</template>

<script>
export default {
    name:'PageHeader',
    props: ['title']
}
</script>