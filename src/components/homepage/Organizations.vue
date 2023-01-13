<template>
   <div class="container">
    <div class="my-4">
        <h2 class="text-center title">Organizacije članice Vijeća mladih Općine Novo Sarajevo</h2>
    </div>
    <div class="row justify-content-center">
      <div v-for="organizacija in organizacije" class="col-6 col-md-3 d-flex align-items-stretch px-4" >
          <a class="mb-3 pt-4 d-flex flex-column justify-content-around" target="_blank" :href="organizacija.link">
            <div class="row justify-content-center">
                <img class="img-fluid w-75" :src="require('../../assets/img/logotipovi/'+organizacija.logo)" :alt="organizacija.title">
            </div>  
              <div class="row justify-content-center pt-2">
                <h5 class="org text-center name">{{organizacija.title}}</h5>
            </div>
        </a>
        </div>
    </div>
   </div>
</template>

<script>
export default {
    data(){
        return{
            organizacije : [
                {
                    title: "Udruženje za razvoj i podršku mladih Plus Ultra",
                    logo: "plusultra.png",
                    link: "https://plusultra.ba"
                },
                {
                    title: "EESTEC LC Sarajevo",
                    subtitle: "EESTEC LC Sarajevo",
                    logo: "eesteclcsarajevo.png",
                    link: "https://eestec-sa.ba"
                },
                {
                    title: "Youth for peace",
                    logo: "yfp.png",
                    link: "https://www.youth-for-peace.ba/en/",
                },
                {
                    title: "Hrvački klub “Željezničar”",
                    logo: "hkzeljo.jpg",
                    link: "https://hrvanje.ba"
                },
                {
                    title:"Udruženje Judo klub \"OLIMP\"",
                    logo: "jkolimp.jpg",
                    link: "http://www.judoclubolimp.com"
                },
                {
                    title: "Karate klub “RESPECT”",
                    logo: "kkrespect.jpg",
                    link: "https://karateklubrespect.ba/index"
                },
                {
                    title: "Omladinska razvojna asocijacija",
                    logo: "ora.jpg",
                    link: "https://www.facebook.com/udruzenjeora"
                },
            ]
        }

    },
    methods:{
        slika(naziv){
            let url = "../../assets/img/logotipovi/"+naziv;
            return url;
        }
    }
}
</script>

<style scoped>
.poravnanje{
    text-align: justify;
    text-justify: inter-word;
}
a:visited, a:hover, a:active, a:link, a{
    text-decoration: none;
    color:#555;
}

.title{
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: black;
}
.name{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: black;
}
</style>