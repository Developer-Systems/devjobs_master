
<template>
  <div class="body">

    <div class="container rounded mt-5 mb-5">
      <div class="row">
        <div class="rounded col-12 bg-white p-3 mb-3">
          <div class="d-flex flex-column align-items-center">
            <img
              class="photo"
              src="https://thumbs.dreamstime.com/b/retrato-masculino-del-icono-del-perfil-del-hombre-de-negocios-plano-47075253.jpg"
              alt="foto de perfil"
            />
            <p class="fw-bold h4 mt-3">John Doe</p>
            <p class="text-muted">Full Stack Developer</p>
            <p class="text-muted mb-3">Pereira, Colombia</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="row">
            <div class="rounded col-12 bg-white px-3 mb-3 pb-2">
              <div
                class="
                  d-flex
                  align-items-center
                  justify-content-between
                  border-bottom
                "
              >
                <p class="py-2">Full Name</p>
                <p class="py-2 text-muted">Kenneth valdez</p>
              </div>
              <div
                class="
                  d-flex
                  align-items-center
                  justify-content-between
                  border-bottom
                "
              >
                <p class="py-2">Email</p>
                <p class="py-2 text-muted">fip@jukmuh.al</p>
              </div>
              <div
                class="
                  d-flex
                  align-items-center
                  justify-content-between
                  border-bottom
                "
              >
                <p class="py-2">Phone</p>
                <p class="py-2 text-muted">(239) 816-9029</p>
              </div>
              <div
                class="
                  d-flex
                  align-items-center
                  justify-content-between
                  border-bottom
                "
              >
                <p class="py-2">Educación</p>
                <p class="py-2 text-muted">Profecional</p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <p class="py-2">Address</p>
                <p class="py-2 text-muted">Soma,San Francisco,CA</p>
              </div>
            </div>
            <div class="rounded col-12 bg-white p-0 px- pb-2 mb-3">
              <div
                class="d-flex justify-content-between border-bottom py-2 px-3"
              >
                <p><span class="fas fa-globe me-2"></span>Website</p>
                <a href="#">https://bootdey.com</a>
              </div>
              <div
                class="d-flex justify-content-between border-bottom py-2 px-3"
              >
                <p><span class="fab fa-github-alt me-2"></span>Github</p>
                <a href="">bootdey</a>
              </div>

              <div
                class="d-flex justify-content-between border-bottom py-2 px-3"
              >
                <p><span class="fab fa-instagram me-2"></span>Instagram</p>
                <a href="">bootdey</a>
              </div>
              <div class="d-flex justify-content-between py-2 px-3">
                <p><span class="fab fa-facebook-f me-2"></span>facebook</p>
                <a href="">bootdey</a>
              </div>
            </div>
            <div class="rounded col-12 bg-white px-3 pb-3 mb-3">
              <h6 class="d-flex align-items-center ms-2 fw-bold pt-3">
                Habilidades
              </h6>
              <div class="row">
                <div class="row justify-content-around col-md">
                  <div class="col-3 m-2 bton text-center rounded-3">HTML</div>
                  <div class="col-3 m-2 bton text-center rounded-3">CSS</div>
                  <div class="col-3 m-2 bton text-center rounded-3">
                    JSCRIPT
                  </div>
                </div>

                <div class="row justify-content-around">
                  <div class="col-3 m-2 bton text-center rounded-3">PHP</div>
                  <div class="col-3 m-2 bton text-center rounded-3">SQL</div>
                  <div class="col-3 m-2 bton text-center rounded-3">NODE</div>
                </div>

                <div class="row justify-content-around">
                  <div class="col-3 m-2 bton text-center rounded-3">VUEJS</div>
                  <div class="col-3 m-2 bton text-center rounded-3">REDUX</div>
                  <div class="col-3 m-2 bton text-center rounded-3">
                    ANGULAR
                  </div>
                </div>

                <div class="row justify-content-around">
                  <div class="col-3 m-2 bton text-center rounded-3">MVC</div>
                  <div class="col-3 m-2 bton text-center rounded-3">PYTHON</div>
                  <div class="col-3 m-2 bton text-center rounded-3">ORM</div>
                </div>

                <div class="row justify-content-around">
                  <div class="col-3 m-2 bton text-center rounded-3">SASS</div>
                  <div class="col-3 m-2 bton text-center rounded-3">JQUERY</div>
                  <div class="col-3 m-2 bton text-center rounded-3">
                    FLEXBOX
                  </div>
                </div>

                <div class="row justify-content-around">
                  <div class="col-3 m-2 bton text-center rounded-3">
                    CSSGRID
                  </div>
                  <div class="col-3 m-2 bton text-center rounded-3">
                    LARAVEL
                  </div>
                  <div class="col-3 m-2 bton text-center rounded-3">JAVA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-8 ps-md-4">
          <div class="row">
            <div class="rounded col-12 bg-white px-3 pb-2">
              <h6 class="d-flex align-items-center mb-3 fw-bold py-3">
               Vacantes Aplicadas
              </h6>
              <small>Web Design</small>
              <div class="progress mb-3" style="height: 5px">
                <div
                  class="progress-bar bg-primary"
                  role="progressbar"
                  style="width: 60%"
                  aria-valuenow="72"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>




<script>
export default {
  name: 'Profiles',
  components: {
  }
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-size: 14px
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

.breadcrumb {
    background-color: #c5cee4
}

.breadcrumb a {
    text-decoration: none
}

p {
    margin: 0
}

.d-flex a {
    text-decoration: none;
    color: #686868
}

img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: solid;
    object-fit: cover
}

.fab.fa-twitter {
    color: #8ab7f1
}

.fab.fa-instagram {
    color: #E1306C
}

.fab.fa-facebook-f {
    color: #5999ec
}

.bton{
    background: #22b5732f ;
    color: #1a1a1a;
    padding: 3px;
    
}

</style>
