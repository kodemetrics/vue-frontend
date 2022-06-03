<template>
  <div class="container">
  
     <div class="row">
       <div class="col-md-12">
          <form class="login-wrapper" action="" method="post">
            <div class="form-group">
                  <label for="">Username</label>
                  <input type="text" name="username" class="form-control">
            </div>

            <div class="form-group">
                  <label for="">Password</label>
                  <input type="password" name="password" class="form-control">
            </div>

             <div class="form-group">
                  <input type="submit" value="Login" class="btn btn-primary">
            </div>
        </form>
       </div>
     </div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
