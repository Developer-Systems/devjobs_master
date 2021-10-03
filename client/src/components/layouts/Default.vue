<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top ">
    <div class="container-fluid d-flex align-items-center justify-content-lg-between">
      <h1 class="logo me-auto me-lg-0 ">
        <a href="index.html"
          ><img src="../../assets/images/logo/logo_header_blanco.png" alt="" class="img-fluid"
        /></a>
      </h1>
      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->
      <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-5 ms-auto ">
        <input
          type="search"
          class="form-control form-control-dark"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
      <div class="icon  " id="bell">
        <img src="https://i.imgur.com/AC7dgLA.png" alt="" />
      </div>
      <div class="notifications" id="box">
        <h2>Notificaciones <span>1</span></h2>
        <div class="notifications-item">
          <div class="text">
            <h4>Bievenido!</h4>
            <p>Bienvenido! - Gracias por ser parte del mundo DevJobs.</p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- End Header -->
</template>
<script>
import $ from "jquery";
export default {
  mounted() {
    this.notificaciones();
  },
  methods: {
    notificaciones() {
      $(document).ready(function() {
        var down = false;

        $("#bell").click(function(e) {
          var color = $(this).text();
          if (down) {
            $("#box").css("height", "0px");
            $("#box").css("opacity", "0");
            down = false;
          } else {
            $("#box").css("height", "auto");
            $("#box").css("opacity", "1");
            down = true;
          }
        });
      });
      // const bell = document.getElementById("bell");
      // const box = document.getElementById("box");
      // let down = false;
      // bell.addEventListener("click", () => {
      //   let color = this.down.text();
      //   if (this.down) {
      //     box.setAttribute("style", "height: 0px; opacity:0");
      //     this.down = false;
      //   } else {
      //     box.setAttribute("style", "height: auto; opacity:1");
      //     this.down = true;
      //   }
      // });
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Mukta");
/* Notifications Form */
.notifications {
  width: 300px;
  height: 0px;
  opacity: 0;
  position: absolute;
  top: 75px;
  right: 75px;
  border-radius: 5px 0px 5px 5px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.icon {
  cursor: pointer;
  margin-right: 50px;
  line-height: 60px;
}

.icon span {
  background: #f00;
  padding: 7px;
  border-radius: 50%;
  color: #fff;
  vertical-align: top;
  margin-left: -25px;
}

.icon img {
  display: inline-block;
  width: 26px;
  margin-top: 4px;
}

.icon:hover {
  opacity: 0.7;
}
.notifications h2 {
  font-size: 14px;
  padding: 10px;
  border-bottom: 1px solid #eee;
  color: #999;
}

.notifications h2 span {
  color: #f00;
}

.notifications-item {
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 6px 9px;
  margin-bottom: 0px;
  cursor: pointer;
}

.notifications-item:hover {
  background-color: #eee;
}

.notifications-item img {
  display: block;
  width: 50px;
  height: 50px;
  margin-right: 9px;
  border-radius: 50%;
  margin-top: 2px;
}

.notifications-item .text h4 {
  color: #777;
  font-size: 16px;
  margin-top: 3px;
}

.notifications-item .text p {
  color: #aaa;
  font-size: 12px;
}
/* End Notification Form */
</style>
