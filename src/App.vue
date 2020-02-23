<template>
    <div id="app">
<!--        <img alt="Vue logo" src="./assets/logo.png">-->
<!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <Search></Search>

<!--        <router-view></router-view>-->
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import Search from './views/Search'
    export default {
        name: 'App',
        components: {
            Search
            // HelloWorld
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
        height: 100%;
    }


</style>
