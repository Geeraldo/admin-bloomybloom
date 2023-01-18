<template>
<div class="login-page">
  <div class="login-box">
  <div class="login-logo">
    <a href="#"><b>E-Commerce Bunga Bouquet dan Kerajinan Tangan</b></a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <form @submit.prevent="submitLogin">
        <div class="input-group mb-3">
          <input type="email" class="form-control" placeholder="Email" v-model="userData.email">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Password" v-model="userData.password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8"></div>
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
</div>
</template>

<script>
export default {
    title:'Login',
    data(){
        return{
            userData:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        submitLogin(){
            this.$store
            .dispatch('login', this.userData)
            .then(({data})=>{
                console.log('login')
                localStorage.setItem('access_token', data.access_token)
                this.$router.push('/')
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>