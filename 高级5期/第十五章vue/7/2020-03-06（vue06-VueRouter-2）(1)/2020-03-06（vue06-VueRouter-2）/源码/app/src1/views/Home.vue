<template>
    <div>
        <ul>
            <li v-for="item of items" :key="item.id">
                <router-link :to="{name: 'Item', params: {itemId: item.id}}">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                items: []
            }
        },
        created() {
            this.axios({
                url: '/api/items'
            }).then(res => {
                this.items = res.data;
            });
        }
    }
</script>