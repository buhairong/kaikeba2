<template>
    <div>
        <h3>用户中心</h3>
        <ul class="left">
            <router-link exact tag="li" :to="{name: 'UserProfile'}">基本信息</router-link>
            <router-link tag="li" :to="{name: 'UserCart'}">我的购物车</router-link>
        </ul>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped>
    .left {
        float: left;
        width: 200px;
    }
    .left li {
        line-height: 30px;
        cursor: pointer;
    }
</style>