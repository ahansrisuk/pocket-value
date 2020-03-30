<template>
  <div id="app">
    <Header />
    <hr class="border-t-2 border-main mt-2">
    <SearchBar class="my-8"/>
    <ItemTypeCard 
      :title="hello"
      class="mb-4" 
    />
    <ItemTypeCard 
      :title="hello"
      class="mb-4"
    />
  </div>
</template>

<script>

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ItemTypeCard from './components/ItemTypeCard';

export default {
  name: 'App',
  components: {
    Header,
    SearchBar,
    ItemTypeCard
  }
}
</script>

<style>
  #app {
    padding: 30px;
  }

</style>
