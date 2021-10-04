<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top ">
    <nav class="d-flex justify-content-between navbar navbar-expand-lg navbar order-last order-lg-0">
        <h1 class="logo me-lg-0 ">
          <a href="index.html"
            ><img
              src="../../assets/images/logo/logo_header_blanco.png"
              alt=""
              class="img-fluid"
          /></a>
        </h1>

        <ul>
          <li>
            <a class="nav-link scrollto active" href="#DevJobs"
              >Inicio DevJobs</a
            >
          </li>
          <li><a class="nav-link scrollto" href="#vacancy">Vacantes</a></li>
          <li><a class="nav-link scrollto" href="#alert">Alertas</a></li>
          <li>
            <a class="nav-link scrollto" href="#JobsList">Lista de trabajos</a>
          </li>
          <li><a class="nav-link scrollto" href="#Contacto">Contacto</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
        <form
          class="d-flex me-lg-5 ms-auto"
        >
          <input
            type="search"
            id="form"
            class="form-control form-control-dark"
            placeholder="Search..."
            label="Search"
          />
          <button type="button" class="btn btn-outline-success">search</button>
        </form>
        <div class="d-flex">
          <a
            class="get-started-btn scrollto m-1 center ap-1 "
            >Iniciar sesión</a
          >
          <a
            class="get-started-btn scrollto m-1 center ap-1 "
            >Registrarse</a
          >
        </div>
    </nav>
  </header>
  <!-- End Header -->
</template>
<script></script>
<style>
.ap-1{
  padding: 10px !important;
}
.navbar {
  color: black;
}
</style>
