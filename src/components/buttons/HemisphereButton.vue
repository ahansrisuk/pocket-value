<template>
  <button @click="changeHemisphere" class="mb-2 focus:outline-none w-40">
    <div
      class="border-2 border-main rounded-full flex py-1 px-3 items-center justify-between"
    >
      <transition @enter="enter" @leave="leave" :css="false" mode="out-in">
        <span class="text-xs" v-if="northHemisphere" key="north"
          >North Hemisphere</span
        >
        <span class="text-xs" v-else key="south">South Hemisphere</span>
      </transition>
      <img
        src="../../assets/location-icon.svg"
        alt="pin"
        height="24px"
        width="24px"
        class="ml-2"
      />
    </div>
  </button>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'HemisphereButton',
  computed: {
    northHemisphere() {
      return this.$store.state.hemisphere == 'North Hemisphere';
    },
  },
  methods: {
    changeHemisphere() {
      let value;

      if (this.$store.state.hemisphere == 'North Hemisphere') {
        value = 'South Hemisphere';
      } else {
        value = 'North Hemisphere';
      }

      this.$store.commit('changeHemisphere', value);
    },
    enter(el, done) {
      anime({
        targets: el,
        translateY: [-10, 0],
        opacity: [0, 1],
        duration: 150,
        complete: done,
      });
    },
    leave(el, done) {
      anime({
        targets: el,
        translateY: [0, 10],
        opacity: [1, 0],
        duration: 150,
        complete: done,
      });
    },
  },
};
</script>

<style></style>
