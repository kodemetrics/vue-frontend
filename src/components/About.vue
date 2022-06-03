<template>
  <div class="container">
    <h1>About</h1>
  </div>
</template>


<script>
  export default {
    name: 'HelloWorld',
    data () {
       return {
         employee :[],
       }
    },
    created(){
       this.getEmployee();
    },
    methods:{
        getEmployee(){

        },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
