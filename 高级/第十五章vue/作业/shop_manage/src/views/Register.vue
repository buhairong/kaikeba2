<template>
    <div>
        <Header />
        <div class="register">
            <el-form
                    :model="regForm"
                    :rules="rules"
                    label-width="100px"
                    ref="regForm"
            >
                <el-form-item label="用户名" prop="username">
                    <el-input placeholder="请输入用户名" v-model="regForm.username"/>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="regForm.password" />
                </el-form-item>
                <el-form-item label="确认密码" prop="repassword">
                    <el-input type="password" placeholder="请再次输入密码" v-model="regForm.repassword" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="reg">登录</el-button>
                    <el-button type="primary" @click="$router.go(-1)">返回首页</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'

    export default {
        data() {
            let validatePass2 = (rule, value, callback) => {
                if (value !== this.regForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            }
            return {
                regForm: {
                    username: '',
                    password: '',
                    repassword: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    repassword: [
                        { required: true, message: '请再次输入密码', trigger: 'blur' },
                        { validator: validatePass2, trigger: 'blur' }
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
            reg() {
                this.$refs.regForm.validate(valid => {
                    if(valid) {
                        const {username, password} = this.regForm
                        this.axios({
                            method: 'post',
                            url: '/api/reg',
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
