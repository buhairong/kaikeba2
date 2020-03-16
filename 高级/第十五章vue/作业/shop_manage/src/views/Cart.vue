<template>
    <div>
        <Header />
        <el-table :data="userCart">
            <el-table-column
                    prop="goodName"
                    label="商品名称">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="价格">
                <template slot-scope="scope">
                    <span>{{ scope.row.price | RMB }}</span>
                </template>
            </el-table-column>
            <el-table-column label="数量">
                <template slot-scope="scope">
                    <el-button :disabled="scope.row.number >= 0" @click="addCart(scope.$index, scope.row)">-</el-button>
                    {{scope.row.number}}
                    <el-button @click="addCart(scope.$index, scope.row)">+</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import {mapState} from 'vuex'
    import RMB from '../filters/RMB'

    export default {
        data() {
          return {
              userCart: []
          }
        },
        components: {
            Header
        },
        computed: {
            ...mapState(['username'])
        },
        filters: {
            RMB
        },
        created() {
            this.getUserCart()
        },
        methods: {
            getUserCart() {
                this.axios({
                    method: 'get',
                    url: '/api/getUserCart',
                    params: {
                        username: this.username
                    }
                }).then(res => {
                    if(res.data.code) {
                        this.$message.error(res.data.msg)
                    }else {
                        this.userCart = res.data.userCart
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .el-table {
        padding: 30px;
    }

</style>
