<template>
  <div>
    <Landing :title="title" :description="description" />
    <Organizations />
    <News />
    <ContactForm />
  </div>
</template>

<script>
import Landing from "../components/homepage/Landing.vue"
import Organizations from "../components/homepage/Organizations.vue"
import ContactForm from "../components/homepage/ContactForm.vue"
import Footer from "../components/Footer.vue"
import News from "../components/homepage/News.vue"

export default {
  components: {Landing, Organizations, ContactForm, Footer, News},
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
