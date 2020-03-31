<template>
    <div class="relative">
        <Badge class="bg-mustard rounded-full px-2 inline absolute top-0 right-0"/>
        <img src="../assets/backpack.svg" alt="backpack">
    </div>
</template>

<script>

import Badge from './Badge';

export default {
    name: 'Backpack',
    components: {Badge},
}
</script>