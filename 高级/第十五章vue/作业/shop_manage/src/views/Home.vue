<template>
    <div>
        <Header />
        <div class="main">
            <el-select v-model="sort" placeholder="请选择排序方式">
                <el-option
                        v-for="item in sortArr"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-table :data="items">
                <el-table-column label="商品名称">
                    <template slot-scope="scope">
                        <span class="goodName" @click="showDetail(scope.$index, scope.row)">{{ scope.row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="vendor"
                        label="品牌">
                </el-table-column>
                <el-table-column
                        prop="price"
                        label="价格">
                    <template slot-scope="scope">
                        <span>{{ scope.row.price | RMB }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="添加到购物车">
                    <template slot-scope="scope">
                        <el-button @click="addCart(scope.$index, scope.row)">添加到购物车</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog
                :title="`商品详情-${activeItem.name}`"
                :visible.sync="dialogVisible"
        >
            <div>
                <p>ID：{{activeItem.id}}</p>
                <p>名称：{{activeItem.name}}</p>
                <p>品牌：{{activeItem.vendor}}</p>
                <p>价格：{{activeItem.price | RMB}}</p>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {

    name: 'Home',
    data() {
        return {
            items: [],
            activeItem: {},
            sort: '',
            sortArr: [
                {
                    value: '',
                    label: '默认排序'
                },
                {
                    value: 'asc',
                    label: '价格从低到高'
                },
                {
                    value: 'desc',
                    label: '价格从高到低'
                }
            ],
            dialogVisible: false
        }
    },
    components: {
        Header
    },
    filters: {
        RMB(val) {
            return '¥' + (val/100).toFixed(2)
        }
    },
    created() {
        this.getItems()
    },
    watch: {
        sort() {
            this.getItems()
        }
    },
    methods: {
        getItems() {
            this.axios({
                method: 'get',
                url: '/api/getItems',
                params: {
                    sort: this.sort
                }
            }).then(res => {
                this.items = res.data
            })
        },
        addCart(index, row) {
            console.log(index, row)
        },
        showDetail(index, row) {
            this.activeItem = row
            this.dialogVisible = true
        }
    }
}
</script>

<style scoped>
    .main {
        padding: 40px;
    }
    .goodName {
        cursor: default;
    }
</style>
