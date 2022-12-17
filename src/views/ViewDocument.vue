<template>
  <div class="container-fluid mx-0 px-0 bx-0">
  <iframe src="https://docs.google.com/gview?url=https://vmons.ba/docs/vodic.pdf&embedded=true" class="pdfDocument" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documentLink: "https://vmons.ba/docs/vodic.pdf",
    };
  },
};
</script>

<style scoped>
  .pdfDocument{
    width: 100%;
    height: 91vh;
  }
</style>