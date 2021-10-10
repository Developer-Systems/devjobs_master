<template>
    <header id="header" class="fixed-top">
      <nav
      class="d-flex justify-content-between navbar navbar-expand-lg navbar order-last order-lg-0"
    >
        <h1 class="logo me-auto me-lg-0">
          <a href="/"
            ><img
              src="@/assets/img/logo_header_blanco.png"
              alt=""
              class="img-fluid w-10"
          /></a>
        </h1>
          <ul>
            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a class="nav-link scrollto" href="#about">About</a></li>
            <li><a class="nav-link scrollto" href="#services">Services</a></li>
            <li><a class="nav-link scrollto" href="#team">Team</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        <!-- .navbar -->
        <div>
    <router-link to="/autentication" exact-path  class="get-started-btn scrollto m-1 center ap-1">Iniciar sesión</router-link>
        <router-link to="/autentication" exact-path class="get-started-btn scrollto m-1 center ap-1">Registrarse</router-link>
        </div>
         </nav>
    </header>
</template>

<script>
export default {
    
}
</script>
<style>
.ap-1 {
  padding: 10px !important;
}
.navbar {
  color: black;
}
</style>