<template>
    <div>
        <ul>
            <li v-for="i of 100" :key="i">
                Component4 - {{i}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Component4'
    }
</script>