<template>
  <div>
    <Navbar/>
    <router-view />
  </div>
</template>


<script>
import Navbar from './components/Navbar.vue'

export default{
  name: 'VMNS',
  components: {Navbar},

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;700&display=swap');
  html,
  body {
    margin: 0px;
    height: 100%;
  }
  #app{
    height:100%
  }
</style>
