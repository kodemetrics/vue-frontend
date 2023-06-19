
<template>
    <!-- <p>Header</p> -->
    <header>
        <router-link :to="{Dashboard}"> Dashboard </router-link>
    </header>
</template>

<script>
export default {
    name:"the-navbar",
    props:{
        classes:{
           type:String
        },
    }
}
</script>