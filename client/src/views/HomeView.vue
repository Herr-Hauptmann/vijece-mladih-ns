<template>
  <div>
    <Landing :title="title" :description="description" />
  </div>
</template>

<script>
import Landing from "../components/homepage/Landing.vue"
export default {
  components: {Landing},
  data(){
    return{
      title: "Vijeće mladih Općine Novo Sarajevo",
      description: "Krovno udruženje mladih sa područja Općine Novo Sarajevo osnovano s ciljem da predstavlja i zastupa interese mladih i omladinskih udruženja sa područja ove Općine."
  }
}
}
</script>

<style>

</style>
