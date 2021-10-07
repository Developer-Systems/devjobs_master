<template>
  <div class = 'body'>
    
    <div class="login-reg-panel">
      <div class="login-info-box">
        <h2>Tienes una cuenta?</h2>
        <p>Gracias por formar parte de la familia DevJobs!</p>
        <label id="label-register" for="log-reg-show">Iniciar sesión</label>
        <input
          type="radio"
          name="active-log-panel"
          id="log-reg-show"
          checked="checked"
        />
      </div>

      <div class="register-info-box">
        <h2>No tienes una cuenta?</h2>
        <p>Qué esperas para pertenecer a nuestra red de trabajo!</p>
        <label id="label-login" for="log-login-show">Registrate</label>
        <input type="radio" name="active-log-panel" id="log-login-show" />
      </div>

      <div class="white-panel">
        <div class="login-show">
          <h2>Inicio de sesión</h2>
          <input type="text" placeholder="Correo" />
          <input type="password" placeholder="Contraseña" />
          <input type="button" value="Ingresar" />
          <a href="">Olvidaste tu contraseña?</a>
        </div>
        <div class="register-show">
          <h2>Formulario de registro</h2>
          <input type="text" placeholder="Correo" />
          <input type="password" placeholder="Contraseña" />
          <input type="password" placeholder="Confirmar Contraseña" />
          <input type="button" value="Registrarse" />
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
      $(".login-info-box").fadeOut();
      $(".login-show").addClass("show-log-panel");
    });

    $('.login-reg-panel input[type="radio"]').on("change", function() {
      if ($("#log-login-show").is(":checked")) {
        $(".register-info-box").fadeOut();
        $(".login-info-box").fadeIn();

        $(".white-panel").addClass("right-log");
        $(".register-show").addClass("show-log-panel");
        $(".login-show").removeClass("show-log-panel");
      } else if ($("#log-reg-show").is(":checked")) {
        $(".register-info-box").fadeIn();
        $(".login-info-box").fadeOut();

        $(".white-panel").removeClass("right-log");

        $(".login-show").addClass("show-log-panel");
        $(".register-show").removeClass("show-log-panel");
      }
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Mukta");
html{
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
}
a {
  text-decoration: none !important;
  color: #100e17;
}
.login-reg-panel {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  width: 70%;
  right: 0;
  left: 0;
  margin: auto;
  height: 400px;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );
}
.white-panel {
  background-color: rgba(255, 255, 255, 1);
  height: 500px;
  position: absolute;
  top: -50px;
  width: 50%;
  right: calc(50% - 50px);
  transition: 0.3s ease-in-out;
  z-index: 0;
  box-shadow: 0 0 15px 9px #00000096;
}
.login-reg-panel input[type="radio"] {
  position: relative;
  display: none;
}
.login-reg-panel {
  color: white;
}
.login-reg-panel #label-login,
.login-reg-panel #label-register {
  border: 1px solid #9e9e9e;
  padding: 5px 5px;
  width: 150px;
  display: block;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
}
.login-info-box {
  width: 30%;
  padding: 0 50px;
  top: 20%;
  left: 0;
  position: absolute;
  text-align: left;
}
.register-info-box {
  width: 30%;
  padding: 0 50px;
  top: 20%;
  right: 0;
  position: absolute;
  text-align: left;
}
.right-log {
  right: 50px !important;
}

.login-show,
.register-show {
  z-index: 1;
  display: none;
  opacity: 0;
  transition: 0.3s ease-in-out;
  color: #100e17;
  text-align: left;
  padding: 50px;
}
.show-log-panel {
  display: block;
  opacity: 0.9;
}
.login-show input[type="text"],
.login-show input[type="password"] {
  width: 100%;
  display: block;
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #b5b5b5;
  outline: none;
}
.login-show input[type="button"] {
  max-width: 150px;
  width: 100%;
  background: #100e17;
  color: #f9f9f9;
  border: none;
  padding: 10px;
  text-transform: uppercase;
  border-radius: 2px;
  float: right;
  cursor: pointer;
}
.login-show a {
  display: inline-block;
  padding: 10px 0;
}

.register-show input[type="text"],
.register-show input[type="password"] {
  width: 100%;
  display: block;
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #b5b5b5;
  outline: none;
}
.register-show input[type="button"] {
  max-width: 150px;
  width: 100%;
  background: #100e17;
  color: #f9f9f9;
  border: none;
  padding: 10px;
  text-transform: uppercase;
  border-radius: 2px;
  float: right;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: rgba(37, 117, 252, 1);
}

.fs-4{
  font-size: 5rem !important;
  font-weight: 500;
}
.fs-4:hover{
  list-style: none;
}
</style>
