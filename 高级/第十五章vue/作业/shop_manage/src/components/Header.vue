<template>
    <div class="header">        
        <div class="userinfo">
            <div class="btnGroup">
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
export default {
  name: 'Header',
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
</style>
