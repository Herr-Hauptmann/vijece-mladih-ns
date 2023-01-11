<template>
  <div>
    <Landing :title="title" :description="description" />
    <Organizations />
  </div>
</template>

<script>
import Landing from "../components/homepage/Landing.vue"
import Organizations from "../components/homepage/Organizations.vue"
export default {
  components: {Landing, Organizations},
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
