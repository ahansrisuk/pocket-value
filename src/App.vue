<template>
	<div id="app">
		<Header />
		<hr class="border-t-2 border-main mt-2">
		<div class="flex items-center">
			<SearchBar class="my-8 flex-grow"/>
			<router-link to="/inventory" v-show="onHomePage">
				<Backpack />
			</router-link>
            <router-link to="/" v-show="!onHomePage" class="ml-2">
                Back
            </router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Backpack from './components/Backpack';

export default {
    name: 'App',
    components: {
        Header,
        SearchBar,
        Backpack
    },
    computed: {
        onHomePage () {
            return this.$route.path == '/';
        }
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
