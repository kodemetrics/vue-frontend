<!-- -->
<template>
    <div>
        <the-nav-bar></the-nav-bar>
          <p>I am Dashboard</p>
        <the-footer></the-footer>
        
    </div>

</template>

<script>

import TheNavBar from "./NavBar";
import TheFooter from "./Footer";
 
export default {
    name:"the-dashboard",
    methods:{},
    components: {
        TheNavBar,
        TheFooter,
    },
    created(){},
    mounted:{},
    watch:{},
    computed:{},
    data(){
        return{
            firstname:"",
            lastname: "",
        }
    },
}
</script>