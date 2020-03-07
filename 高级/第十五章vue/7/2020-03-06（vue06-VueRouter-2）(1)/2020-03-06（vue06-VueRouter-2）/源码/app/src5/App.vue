<template>
    <div id="app">
        <h1>开课吧</h1>

<!--        <a href="#/">Home</a>-->
<!--        <span> | </span>-->
<!--        <a href="#/about">About</a>-->

        <router-link :to="{name: 'Home'}">Home</router-link>
        <span> | </span>
        <router-link :to="{name: 'About'}">About</router-link>
        <span> | </span>
        <router-link :to="{name: 'UserProfile'}">User</router-link>

        <hr />
        <!--路由组件的视图容器，满足当前路由规则的组件，将实现在 router-view 的位置-->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    /*.router-link-exact-active {*/
    /*    background: red;*/
    /*    color: white;*/
    /*}*/
</style>
