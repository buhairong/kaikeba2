<template>
    <div>
        <Header />
        <el-form
            :model="loginForm"
            :rules="rules"
            label-width="100px"
            ref="loginForm"
        >
            <el-form-item label="用户名" prop="username">
                <el-input placeholder="请输入用户名" v-model="loginForm.username"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="loginForm.password" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
                <el-button type="primary" @click="$router.go(-1)">返回首页</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'

    export default {
        data() {
          return {
              loginForm: {
                  username: '',
                  password: '',
              },
              rules: {
                  username: [
                      { required: true, message: '请输入用户名', trigger: 'blur' }
                  ],
                  password: [
                      { required: true, message: '请输入密码', trigger: 'blur' }
                  ]
              }
          }
        },
        components: {
            Header
        },
        mounted() {

        },
        methods: {
            login() {
                this.$refs.loginForm.validate(valid => {
                    if(valid) {
                        const {username, password} = this.loginForm
                        this.axios({
                            method: 'post',
                            url: '/api/login',
                            data: {
                                username,
                                password
                            }
                        }).then(res => {
                            const data = res.data
                            if(data.code) {
                                this.$message.error(data.msg)
                            } else {
                                localStorage.setItem('token', data.token)
                                this.$store.commit('setUsername', username)
                                this.getCartTotal(username)
                                this.$router.push('/')
                            }
                        })
                    }
                })
            },
            getCartTotal(username) {
                this.axios({
                    method: 'get',
                    url: '/api/getUserCartNum',
                    params: {
                        username
                    }
                }).then(res => {
                    if(!res.data.code) {
                        this.$store.commit('initCartTotal', res.data.total)
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .el-form {
        margin: 20px auto 0;
        width: 500px;
    }
</style>
