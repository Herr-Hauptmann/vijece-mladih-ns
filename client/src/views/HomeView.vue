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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, doloribus?"
  }
}
}
</script>

<style scoped>

</style>
