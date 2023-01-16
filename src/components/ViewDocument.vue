<template>
  <div class="container-fluid mx-0 px-0 bx-0">
  <iframe :src="documentLink" class="pdfDocument" frameborder="0"></iframe>
  </div>
</template>

<script setup>
defineProps({
    documentLink: String,
})
</script>

<style scoped>
  .pdfDocument{
    width: 100%;
    height: 91vh;
  }
</style>