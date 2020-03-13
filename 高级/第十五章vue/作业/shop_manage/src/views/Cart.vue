<template>
    <div>
        <Header />

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
                                this.$router.push('/')
                            }
                        })
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
