<template>
    <svg 
        width="22" 
        height="14"
        viewBox="0 0 22 14" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        @click="handleClick">
        <path d="M2.585 0.207504L11 8.60417L19.415 0.207504L22 2.7925L11 13.7925L0 2.7925L2.585 0.207504Z" fill="#726A5F"/>
    </svg>
</template>

<script>
import anime from 'animejs';

export default {
    name: 'Arrow',
    data: function () {
        return {
            openAnimation: '',
            closeAnimation: '',
            open: false
        }
    },
    methods: {
        handleClick () {
            if (!this.open) {
                this.openAnimation.play();
            } else {
                this.closeAnimation.play();
            }

            this.open = !this.open;
        }
    },
    mounted() {
        const targets = this.$el;
        this.closeAnimation = 
            anime({
                targets,
                rotateX: [180, 0],
                easing: 'easeInOutSine',
                duration: 200,
                autoplay: false,
            })
        this.openAnimation = 
            anime({
                targets,
                rotateX: [0, 180],
                easing: 'easeInOutSine',
                duration: 200,
                autoplay: false,
            })
    }
}

</script>