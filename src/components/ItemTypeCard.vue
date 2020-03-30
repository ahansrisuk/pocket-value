<template>
    <div class="p-2 flex justify-between items-center border">
        <div class="flex items-center">
            <img src="../assets/carp.png" height="50px" width="50px" alt="fish"/>
            <h2 class="ml-4">Fish</h2>
        </div>
        <DownArrow />
    </div>
</template>

<script>

import DownArrow from '../assets/down-arrow'
export default {
    name: 'ItemTypeCard',
    components: {
        DownArrow
    }
}
</script>