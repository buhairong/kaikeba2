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

        <span> | </span>
        <router-link :to="{name: 'Book'}">小说</router-link>

        <hr />
        <!--路由组件的视图容器，满足当前路由规则的组件，将实现在 router-view 的位置-->
        <transition name="fade">
            <router-view/>
        </transition>
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

    .fade-enter-active {
        transition: opacity 1.5s;
    }
    .fade-leave-active {
        transition: none;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
