<template>
    <header id="header" class="fixed-top">
      <div
        class="container d-flex align-items-center justify-content-lg-between"
      >
        <h1 class="logo me-auto me-lg-0">
          <a href="/"
            ><img
              src="@/assets/img/logo_header_blanco.png"
              alt=""
              class="img-fluid w-10"
          /></a>
        </h1>
        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a class="nav-link scrollto" href="#about">About</a></li>
            <li><a class="nav-link scrollto" href="#services">Services</a></li>
            <li><a class="nav-link scrollto" href="#team">Team</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->
        <div>
          <a href="/signin" class="get-started-btn scrollto">Sign In</a>
          <a href="/signup" class="get-started-btn scrollto">Sign Up</a>
        </div>
      </div>
    </header>
</template>

<script>
export default {
    
}
</script>
