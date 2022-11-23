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
