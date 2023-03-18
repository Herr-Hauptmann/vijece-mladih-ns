<script setup>
let novost = {
    title: "OPĆINA PO MJERI MLADIH!",
    image: "opcina.jpg",
}
</script>

<template>

<div class="container">
    <div class="row">
        <div class="col-12 col-md-3">

        </div>
        <div class="col-12 col-md-9">
            <h2 class="title">{{novost.title}}</h2>
            <img :src="require('../../../assets/img/novosti/'+novost.image)" alt="slika vijesti" class="slika">
            <p>U okviru Programa projekata za mlade, Općina Novo Sarajevo je za 2023. godine izdvojila finansijska sredstva za podršku rada našeg Vijeća. Potpisivanje ugovora upriličeno je 04.03.2023. godine u svečanoj sali Međunarodnog centra za djecu i mlade Grbavica.</p>
            <p>
                "Moramo učiniti s naše strane sve da zadržimo mlade ljude ovdje i da im obezbijedimo uslove kako bi oni u punom kapacitetu doprinijeli radu i ove Općine, ali i generalno šire društvene zajednice. Ova sredstva su za prvu pomoć i nadam se da će se u budućnosti povećati, kako se vi budete razvijali kao Udruženje, ali i kroz projekte koje budete ponudili", kazao je načelnik Tanović. 
            </p>
            <p>
                Predsjednica Vijeća mladih Općine Novo Sarajevo, Amila Čengić zahvalila se načelniku Tanoviću na podršci mladima. "Nama ova podrška zaista mnogo znači kako bi Vijeće mladih Općine Novo Sarajevo nastavilo dalje sa aktivnostima. Uz ovakvu službu kakvu ova Općina ima ja vjerujem da ćemo ove godine raditi sjajne stvari. Vjerujem da zajedno možemo graditi Općinu po mjeri mladih ljudi". 
            </p>
            <p>
                Ovo je još jedan pokazatelj da je Općina Novo Sarajevo tu za mlade, a mi se izuzetno radujemo i nestrpljivo iščekujemo aktivnosti koje nas čekaju u narednom periodu!
            </p>
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

.slika{
    width:50%;
    padding-bottom: 40px;
}
</style>