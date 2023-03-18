<template>
  <div>
    <Navbar/>
    <router-view />
    <Footer />
  </div>
</template>


<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default{
  name: 'VMNS',
  components: {Navbar, Footer},
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap');
  html,
  body {
    margin: 0px;
    height: 100%;
  }
  #app{
    height:100%
  }
</style>
