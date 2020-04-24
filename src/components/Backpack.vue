<template>
    <div class="relative">
        <ItemCountBadge class="bg-mustard rounded-full px-2 inline absolute top-0 right-0"/>
        <img src="../assets/backpack.svg" alt="backpack">
    </div>
</template>

<script>

import ItemCountBadge from './ItemCountBadge';

export default {
    name: 'Backpack',
    components: {ItemCountBadge},
}
</script>