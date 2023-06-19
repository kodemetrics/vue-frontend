<template>
    <div id="wrapper">
      <div class="nav">
           <div class="container">
             <ul class="main-menu">
                <li><router-link to="/"> Home</router-link></li>
                <li><router-link to="/about"> About</router-link> </li>
             </ul>
           </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'App'
}

</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
