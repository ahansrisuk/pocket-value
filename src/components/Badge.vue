<template>
    <div v-show="itemsCount">
        <span class="text-sm">
            {{ itemsCount }}
        </span>
    </div>
</template>

<script>
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
            this.$anime({
                targets,
                duration: 500,
                scale: [0, 1],
                autoplay: false
            })
    }
}
</script>