<template>
  <div id="app">
    <Header />
    <hr class="border-t-2 border-main mt-2">
    <div class="flex items-center">
      <SearchBar class="my-8 flex-grow"/>
      <Backpack />
    </div>
    <ItemTypeCard 
      class="mb-4"
      type="Fish"
    />
    <!-- <ItemTypeCard 
      class="mb-4"
      type="Bug"
    /> -->
  </div>
</template>

<script>

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ItemTypeCard from './components/ItemTypeCard';
import Backpack from './components/Backpack';

export default {
  name: 'App',
  components: {
    Header,
    SearchBar,
    ItemTypeCard,
    Backpack
  },
  created() {
    this.$store.dispatch('loadItems');
  }
}
</script>

<style>
  #app {
    padding: 30px;
    height: 100vh;
  }

</style>
