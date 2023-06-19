<template>

    <ul>
        <li v-for="(color,index) in colors" :key="index">
            {{ color.name }},  {{ color.genre }}
        </li>
    </ul>
    
</template>

<script>
    export default{
        props:['colors']
    }
</script>