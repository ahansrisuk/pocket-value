<template>
    <div v-show="itemsCount">
        <span class="text-sm">
            {{ itemsCount }}
        </span>
    </div>
</template>

<script>

import anime from 'animejs';
export default {
    name: 'Backpack',
    data: function () {
        return {
            badgeAnimation: ''
        }
    },
    computed: {
        itemsCount () {
            return this.$store.state.inventory.length;
        }
    },
    methods: {
        handleChange () {
            this.badgeAnimation.restart();
        }
    },
    watch: {
        itemsCount () {
            this.handleChange()
        }
    },
    mounted () {
        const targets = this.$el;

        this.badgeAnimation = 
            anime({
                targets,
                duration: 700,
                scale: [0, 1],
                autoplay: false
            })
    }
}
</script>