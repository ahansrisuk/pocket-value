<template>
  <div class="border-custom px-2 flex flex-col">
    <button
      @click="handleClick"
      class="w-full flex justify-between items-center focus:outline-none"
    >
      <div class="flex items-center">
        <img
          v-if="items[0].image_path"
          :src="previewImage"
          height="50px"
          width="50px"
          alt="fish"
        />
        <h2 class="ml-4">{{ type }}</h2>
      </div>
      <Arrow class="arrow" />
    </button>
    <div v-show="open" class="overflow-auto" style="max-height: 400px;">
      <Item
        :item="item"
        v-for="item in items"
        :key="item.id"
        :addItemButton="true"
      />
    </div>
  </div>
</template>

<script>
import Arrow from './arrow';
import Item from './Item';
import anime from 'animejs';

export default {
  name: 'ItemTypeCard',
  components: {
    Arrow,
    Item,
  },
  props: ['type'],
  computed: {
    items() {
      return this.$store.getters.getItemsByType(this.type);
    },
    previewImage() {
      return this.items[0].image_path;
    },
  },
  data: function () {
    return {
      open: false,
      openAnimation: '',
      closeAnimation: '',
    };
  },
  methods: {
    handleClick(e) {
      if (!this.open) {
        this.openArrow(e.currentTarget.querySelector('.arrow'));
      } else {
        this.closeArrow(e.currentTarget.querySelector('.arrow'));
      }
      this.open = !this.open;
    },
    openArrow(el, done) {
      anime({
        targets: el,
        rotateX: [0, 180],
        easing: 'easeInOutSine',
        duration: 200,
        complete: done,
      });
    },
    closeArrow(el, done) {
      anime({
        targets: el,
        rotateX: [180, 0],
        easing: 'easeInOutSine',
        duration: 200,
        complete: done,
      });
    },
  },
  mounted() {
    this.openAnimation = anime({
      targets: '.arrow',
      rotateX: [0, 180],
      easing: 'easeInOutSine',
      duration: 200,
      autoplay: false,
    });
  },
};
</script>
