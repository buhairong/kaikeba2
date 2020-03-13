<template>
    <div class="header">        
        <div class="userinfo">
            <div class="username" v-if="username">
                <router-link to="/cart">
                    <el-link type="primary">我的购物车</el-link>
                </router-link>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="btnGroup" v-else>
                <router-link to="/login">
                    <el-button type="primary">登录</el-button>
                </router-link>
                <router-link to="/register">
                    <el-button type="danger">注册</el-button>
                </router-link>
            </div>
        </div>
        <div class="title">商品管理系统</div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'Header',
    computed: {
        ...mapState(['username'])
    },
    methods: {
        logout() {
            this.$store.commit('setUsername', '')
            localStorage.removeItem('token')
            this.$router.push('/')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        width: 100%;
        height: 60px;
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
        overflow: hidden;
    }
    .userinfo {
        float: right;
    }
    .title {
        margin-right: 200px;
    }
    .el-button {
        margin-right: 20px;
    }
    .username {
        padding-right: 30px;
        cursor: default;
    }
</style>
