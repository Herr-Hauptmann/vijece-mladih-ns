<template>
    <nav class="navbar navbar bg-light navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{name: 'home'}"><img src="../assets/img/logo.png" alt="Vijeće mladih Općine Novo Sarajevo" class="logo"></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{name: 'home'}" active-class="active">Naslovna</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link " aria-current="page" :to="{name: 'news'}">Vijesti</router-link>
          </li> -->
          <!-- <li class="nav-item">
            <router-link class="nav-link " aria-current="page" :to="{name: 'documents'}">Dokumenti</router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link " aria-current="page" :to="{name: 'contact'}" active-class="active">Kontaktiraj nas</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link " aria-current="page" :to="{name: 'login'}" active-class="active">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
  const logo = "";
</script>

<style scoped>
.logo{
  height: 50px;
  width: auto;
  margin-left: 20px;
}
.router-link-active .router-link-exact-active{
  text-decoration: underline !important;
  font-weight: bold !important;
}
</style>