<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vijeće mladih Novo Sarajevo</a>
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
            <router-link class="nav-link active" aria-current="page" :to="{name: 'home'}">Naslovna</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" :to="{name: 'news'}">Vijesti</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" :to="{name: 'organizations'}">Organizacije članice</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" :to="{name: 'documents'}">Dokumenti</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" :to="{name: 'contact'}">Kontaktiraj nas</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" :to="{name: 'login'}">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>