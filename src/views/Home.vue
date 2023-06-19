<template>
    <the-nav-bar></the-nav-bar>
    <div>
        I am home
    </div>
    <todo-item :colors="colors"></todo-item>
    <the-footer></the-footer>
       
</template>


<script setup>

import TheNavBar from '@/components/NavBar.vue'
import TheFooter from '@/components/Footer.vue'
import TodoItem from '@/components/TodoItem.vue';

  const colors = [
        { name: 'David', genre:'Hip-hop'},
        { name: 'Burna Boy', genre: 'Afrobeat' },
        { name: 'AKA', genre: 'Hip-Hop' },
        { name: 'Sarkodie', genre: 'Hip-Hop' },
    ];


// export default{
//     name:"the-home",
//     components:{
//         TheNavBar,
//         TheFooter
//     }
// }

</script>