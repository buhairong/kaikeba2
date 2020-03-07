<template>
    <div>
        <h2>商品列表</h2>

        <select :value="sort" @change="goto">
            <option value="desc">从高到低</option>
            <option value="asc">从低到高</option>
        </select>

        <ul class="item-list">
            <li class="head">
                <span>名称</span>
                <span>价格</span>
                <span>操作</span>
            </li>
            <li v-for="item of items" :key="item.id">
          <span>
            <router-link :to='{name: "Item", params:{itemId: item.id}}'>{{item.name}}</router-link>
          </span>
                <span>{{item.price|RMB}}</span>
                <span>
            <button>添加到购物车</button>
          </span>
            </li>
        </ul>
    </div>
</template>

<script>
    import RMB from "@/filters/RMB";

    /**
     * 如果路由变化使用是同一个组件的话，那么这个时候这个组件是不是销毁重新渲染的，而是会复用
     */

    export default {
        name: 'Home',
        data() {
            return {
                sort: 'desc',
                items: []
            }
        },
        filters: {
            RMB
        },
        created() {
            this.getItems();
        },

        // koa => next => 守卫！！！
        beforeRouteUpdate(to, from, next) {
            // console.log('beforeRouteUpdate');
            console.log(to, from);

            // 确认导航
            next();

            this.getItems();
        },

        methods: {
            getItems() {
                this.sort = this.$route.query.sort || this.sort;
                console.log(this.sort);
                this.axios({
                    url: '/api/items',
                    params: {
                        sort: this.sort
                    }
                }).then(res => {
                    this.items = res.data;
                });
            },
            goto({target: {value}}) {
                this.$router.push({name: 'Home', query: {sort: value}});
            }
        }
    }
</script>
<style>
    ul {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }

    .item-list li {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px dotted #333;
    }
    .item-list li.head {
        font-weight: bold;
    }
    .item-list li span {
        min-width: 200px;
    }
</style>