<template>
    <div>
        <ul>
            <li v-for="i of 100" :key="i">
                Component3 - {{i}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Component3'
    }
</script>