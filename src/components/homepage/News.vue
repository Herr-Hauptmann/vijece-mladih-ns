<script setup>
var novosti = [
    {
        title: "OPĆINA PO MJERI MLADIH!",
        description: "U okviru Programa projekata za mlade, Općina Novo Sarajevo je za 2023. godine izdvojila finansijska...",
        image: "opcina.jpg",
        link: "/vijesti/opcina-po-mjeri-mladih",
    },
]

</script>

<template>
    <div class="container">
        <div class="my-4">
            <h2 class="text-center title">Novosti</h2>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-3" v-for="novost in novosti" >
                <div class="card" style="width: 18rem;">
                    <img :src="require('../../assets/img/novosti/'+novost.image)" class="card-img-top" alt="Naslovna slika novosti">
                    <div class="card-body">
                      <h5 class="card-title">{{novost.title}}</h5>
                      <p class="card-text">{{novost.description}}</p>
                      <a :href="novost.link" class="btn btn-primary">Pročitaj više</a>
                    </div>
                  </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title{
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: black;
}
</style>