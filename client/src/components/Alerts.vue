<template>
  <div class="body">
    <header class="p-3 bg-dark bg-transparent text-white">
      <div class="container-fluid">
        <div
          class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
        >
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              class="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlink:href="#bootstrap" />
            </svg>
            <span class="fs-4">DevJobs</span>
          </a>
          
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
      </div>
      
    </header>
    <!-- Notification Form -->
    <div class="container">
      <div class="row justify-content-center white">
        <div class="col-12 col-lg-10 col-xl-8 mx-auto">
          <h2 class="h3 mb-4 page-title">Alertas</h2>
          <div class="my-4">
            <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active text-black fw-bold"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  >Notificaciones</a
                >
              </li>
            </ul>
            <h5 class="mb-0 mt-5">Configuración de notificaciones</h5>
            <p>Seleccione las alertas que desea recibir.</p>
            <hr class="my-4 " />
            <strong class="mb-0">Seguridad</strong>
            <p>Control de alertas de seguridad</p>
            <div class="list-group mb-5 shadow">
              <div class="list-group-item">
                <div class="row align-items-center">
                  <div class="col">
                    <strong class="mb-0">Inicio de sesión inusual</strong>
                    <p class="text-muted mb-0">
                      Recibirá una notificación reportando el inicio de sesión
                      con su respectiva ubicación.
                    </p>
                  </div>
                  <div class="col-auto">
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="alert1"
                        checked=""
                      />
                      <span class="custom-control-label"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-group-item">
                <div class="row align-items-center">
                  <div class="col">
                    <strong class="mb-0"
                      >Cambio de información esencial no autorizado</strong
                    >
                    <p class="text-muted mb-0">
                      Recibirá alerta de cambio de contraseña o correo con un
                      mensaje de confirmación.
                    </p>
                  </div>
                  <div class="col-auto">
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="alert2"
                      />
                      <span class="custom-control-label"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-4" />
            <strong class="mb-0">Sistema</strong>
            <p>Por favor habilite las alertas del sistema que desea recibir.</p>
            <div class="list-group mb-5 shadow">
              <div class="list-group-item">
                <div class="row align-items-center">
                  <div class="col">
                    <strong class="mb-0"
                      >Notificarme sobre las últimas noticias, nuevas funciones
                      y actualizaciones</strong
                    >
                    <p class="text-muted mb-0">
                      Te mantendrás al tanto de todo el mundo DevJobs.
                    </p>
                  </div>
                  <div class="col-auto">
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="alert3"
                        checked=""
                      />
                      <span class="custom-control-label"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-group-item">
                <div class="row align-items-center">
                  <div class="col">
                    <strong class="mb-0"
                      >Notificarme sobre la aplicación a vacante</strong
                    >
                    <p class="text-muted mb-0">
                      Recibirás una notificación sobre la aplicación
                      satisfactoria a vacante.
                    </p>
                  </div>
                  <div class="col-auto">
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="alert4"
                        checked=""
                      />
                      <span class="custom-control-label"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-group-item">
                <div class="row align-items-center">
                  <div class="col">
                    <strong class="mb-0"
                      >Notificarme acerca de la aceptación de vacante.
                    </strong>
                    <p class="text-muted mb-0">
                      Recibirás un mensaje confirmando la aceptación de vacante,
                      junto con la información correspondiente.
                    </p>
                  </div>
                  <div class="col-auto">
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="alert5"
                      />
                      <span class="custom-control-label"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  mounted() {
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
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Mukta");
html {
  overflow-y: hidden !important;
}
.body {
  font-family: "Mukta", sans-serif;
  -ms-overflow-style: hidden !important;
  overflow-y: hidden !important;
  width: 100vw;
  height: 100vh;
  background-color: #100e17;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
a {
  text-decoration: none !important;
  color: #100e17;
  color: rgba(37, 117, 252, 1);
}
.fs-4 {
  font-size: 5rem !important;
  font-weight: 500;
}
.fs-4:hover {
  list-style: none;
}

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
/* Notification Form */
.nav-tabs {
  border-bottom: 1px white;
}
hr {
  opacity: 1 !important;
}
.mb-4 {
  color: white;
}
.my-4 {
  color: white;
}
.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
}

.list-group-item-action {
  width: 100%;
  color: white;
  text-align: inherit;
}
.list-group-item-action:hover,
.list-group-item-action:focus {
  z-index: 1;
  color: white;
  text-decoration: none;
  background-color: #f4f6f9;
}
.list-group-item-action:active {
  color: white;
  background-color: #eef0f3;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  background-color: #ffffff;
  border: 1px solid #eef0f3;
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled,
.list-group-item:disabled {
  color: white;
  pointer-events: none;
  background-color: #ffffff;
}
.list-group-item.active {
  z-index: 2;
  color: #ffffff;
  background-color: #1b68ff;
  border-color: #1b68ff;
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: -1px;
  border-top-width: 1px;
}

.list-group-horizontal {
  flex-direction: row;
}
.list-group-horizontal > .list-group-item:first-child {
  border-bottom-left-radius: 0.25rem;
  border-top-right-radius: 0;
}
.list-group-horizontal > .list-group-item:last-child {
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0;
}
.list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: 1px;
  border-left-width: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: -1px;
  border-left-width: 1px;
}

@media (min-width: 576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }
  .list-group-horizontal-sm > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}

@media (min-width: 768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }
  .list-group-horizontal-md > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}

@media (min-width: 992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }
  .list-group-horizontal-lg > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}

@media (min-width: 1200px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }
  .list-group-horizontal-xl > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}

.list-group-flush {
  border-radius: 0;
}
.list-group-flush > .list-group-item {
  border-width: 0 0 1px;
}
.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}

.list-group-item-primary {
  color: #0e3685;
  background-color: #bfd5ff;
}
.list-group-item-primary.list-group-item-action:hover,
.list-group-item-primary.list-group-item-action:focus {
  color: #0e3685;
  background-color: #a6c4ff;
}
.list-group-item-primary.list-group-item-action.active {
  color: #ffffff;
  background-color: #0e3685;
  border-color: #0e3685;
}

.list-group-item-secondary {
  color: #0a395d;
  background-color: #bdd6ea;
}
.list-group-item-secondary.list-group-item-action:hover,
.list-group-item-secondary.list-group-item-action:focus {
  color: #0a395d;
  background-color: #aacae4;
}
.list-group-item-secondary.list-group-item-action.active {
  color: #ffffff;
  background-color: #0a395d;
  border-color: #0a395d;
}

.list-group-item-success {
  color: #107259;
  background-color: #c0f5e8;
}
.list-group-item-success.list-group-item-action:hover,
.list-group-item-success.list-group-item-action:focus {
  color: #107259;
  background-color: #aaf2e0;
}
.list-group-item-success.list-group-item-action.active {
  color: #ffffff;
  background-color: #107259;
  border-color: #107259;
}

.list-group-item-info {
  color: #005d83;
  background-color: #b8eafe;
}
.list-group-item-info.list-group-item-action:hover,
.list-group-item-info.list-group-item-action:focus {
  color: #005d83;
  background-color: #9fe3fe;
}
.list-group-item-info.list-group-item-action.active {
  color: #ffffff;
  background-color: #005d83;
  border-color: #005d83;
}

.list-group-item-warning {
  color: #855701;
  background-color: #ffe7b8;
}
.list-group-item-warning.list-group-item-action:hover,
.list-group-item-warning.list-group-item-action:focus {
  color: #855701;
  background-color: #ffde9f;
}
.list-group-item-warning.list-group-item-action.active {
  color: #ffffff;
  background-color: #855701;
  border-color: #855701;
}

.list-group-item-danger {
  color: #721c24;
  background-color: #f5c6cb;
}
.list-group-item-danger.list-group-item-action:hover,
.list-group-item-danger.list-group-item-action:focus {
  color: #721c24;
  background-color: #f1b0b7;
}
.list-group-item-danger.list-group-item-action.active {
  color: #ffffff;
  background-color: #721c24;
  border-color: #721c24;
}

.list-group-item-light {
  color: white;
  background-color: white;
}
.list-group-item-light.list-group-item-action:hover,
.list-group-item-light.list-group-item-action:focus {
  color: white;
  background-color: white;
}
.list-group-item-light.list-group-item-action.active {
  color: #ffffff;
  background-color: white;
  border-color: white;
}

.list-group-item-dark {
  color: white;
  background-color: white;
}
.list-group-item-dark.list-group-item-action:hover,
.list-group-item-dark.list-group-item-action:focus {
  color: white;
  background-color: white;
}
.list-group-item-dark.list-group-item-action.active {
  color: white;
  background-color: white;
  border-color: white;
}
</style>
