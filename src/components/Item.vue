<template>
  <div>
    <div class="flex w-full items-center justify-between border-main border-t">
      <button
        class="flex w-5/6 items-center focus:outline-none hover:underline justify-between"
        @click="showModal = true"
      >
        <div class="flex items-center flex-grow">
          <img :src="item.image_path" height="50px" width="50px" alt="fish" />
          <p class="text-sm ml-4 text-left">{{ item.name }}</p>
          <img
            v-if="item.incoming"
            src="../assets/blue.svg"
            class="ml-1"
            height="10px"
            width="10px"
          />
          <img
            v-if="item.outgoing"
            src="../assets/pink.svg"
            class="ml-1"
            height="10px"
            width="10px"
          />
          <img
            v-if="item.new"
            src="../assets/green.svg"
            class="ml-1"
            height="10px"
            width="10px"
          />
        </div>
        <p class="text-sm">{{ item.value }}</p>
      </button>

      <div class="flex items-center relative">
        <button
          class="ml-4 mr-1 bg-mustard px-2 rounded-lg absolute right-0"
          @click="addItemToInventory($event, item)"
          v-if="addItemButton"
        >
          <span id="plus">+</span>
          <!-- <span class="text-xs"> Added to pocket!</span> -->
        </button>
        <button
          @click="removeItemFromInventory(index)"
          v-if="removeItemButton"
          class="mr-2 ml-4"
        >
          <img src="../assets/close.svg" height="12" width="12" />
        </button>
      </div>
    </div>
    <ItemModal v-if="showModal" @close-modal="showModal = false" :item="item" />
  </div>
</template>

<script>
import ItemModal from './ItemModal';
import anime from 'animejs';

export default {
  name: 'Item',
  components: { ItemModal },
  props: ['item', 'addItemButton', 'removeItemButton'],
  data: function () {
    return {
      showModal: false,
      alerting: false,
    };
  },
  methods: {
    addItemToInventory(event, item) {
      this.$store.commit('addItemToInventory', item);
      anime
        .timeline({
          easing: 'easeInOutSine',
          duration: 150,
        })
        .add({
          targets: event.currentTarget,
          width: 160,
        })
        .add({
          targets: event.currentTarget.querySelector('#alert'),
          opacity: [0, 1],
        })
        .add({
          targets: event.currentTarget.querySelector('#alert'),
          display: 'block',
          opacity: [0, 1],
        });
    },
    removeItemFromInventory(itemIndex) {
      this.$store.commit('removeItemFromInventory', itemIndex);
    },
  },
};
</script>
