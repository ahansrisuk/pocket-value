<template>
    <div id="app" class="flex flex-col">
        <div class="flex-grow">
            <Header />
            <hr class="border-t-2 border-main mt-2">
            <div class="flex items-center">
                <SearchBar class="mt-8 mb-4 flex-grow"/>
                <router-link to="/inventory" v-show="onHomePage">
                    <Backpack />
                </router-link>
                <router-link to="/" v-show="!onHomePage" class="ml-2">
                    Back
                </router-link>
            </div>
            <section class="flex mb-2 justify-between flex-wrap">

                <HemisphereButton />

                <NavButton 
                    name="Available Now" 
                    destination="/available-now"	
                    >
                    <img src="./assets/calendar.svg" alt="calendar" height="24px" width="24px" />
                </NavButton>
                <NavButton 
                    name="Outgoing Critters" 
                    destination="/outgoing-critters"	
                    >
                    <img src="./assets/pink.svg" alt="pink circle" height="24px" width="24px" class="p-1" />
                </NavButton>
                <NavButton 
                    name="Incoming Critters" 
                    destination="/incoming-critters"	
                    >
                    <img src="./assets/blue.svg" alt="blue circle" height="24px" width="24px" class="p-1" />
                </NavButton>
            </section>
            <router-view></router-view>
        </div>
        <!-- <footer>
            © 2020, Allen Hansrisuk
        </footer> -->
    </div>
</template>

<script>

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Backpack from './components/Backpack';
import NavButton from './components/NavButton';
import HemisphereButton from './components/HemisphereButton';

export default {
    name: 'App',
    components: {
        Header,
        SearchBar,
        Backpack,
        NavButton,
        HemisphereButton
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
    padding-bottom: 15px;
    height: 100vh;
    max-width: 800px;
    margin: auto;
  }

</style>
