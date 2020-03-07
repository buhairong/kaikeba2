<template>
    <div id="app">
        <nav>
            <router-link :to="{name: 'Component1'}">Component1</router-link>
            <span> | </span>
            <router-link :to="{name: 'Component2'}">Component2</router-link>
            <span> | </span>
            <router-link :to="{name: 'Component3'}">Component3</router-link>
            <span> | </span>
            <router-link :to="{name: 'Component4'}">Component4</router-link>
        </nav>

        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    body {
        margin: 0;
    }
    nav {
        width: 100%;
        height: 50px;
        line-height: 50px;
        position: fixed;
        background: #333333;
    }
    nav a {
        color: white;
    }
</style>
