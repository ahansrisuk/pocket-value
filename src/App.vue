<template>
    <div id="app" class="flex flex-col">
        <div class="flex-grow">
            <Header />
            <hr class="border-t-2 border-main mt-2">
            <div class="flex items-center">
                <SearchBar class="mt-8 mb-4 flex-grow z-10"/>
                <router-link to="/inventory">
                    <Backpack />
                </router-link>
            </div>
            <section class="flex mb-2 justify-between flex-wrap">

                <HemisphereButton  class="z-0"/>

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
            
            <div class="mb-2" v-if="!onHomePage">
                <router-link to="/" class="flex">
                    <img src="./assets/back-arrow.svg" alt="back arrow" height="20px" width="20px" />
                    <span class="ml-2">Back</span>
                </router-link>
            </div>
            <router-view></router-view>
        </div>
        <Footer />
    </div>
</template>

<script>

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Backpack from './components/Backpack';
import NavButton from './components/NavButton';
import HemisphereButton from './components/HemisphereButton';
import Footer from './components/Footer';

export default {
    name: 'App',
    components: {
        Header,
        SearchBar,
        Backpack,
        NavButton,
        HemisphereButton,
        Footer
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
    max-width: 800px;
    margin: auto;
  }

</style>
