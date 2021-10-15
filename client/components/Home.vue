<template>
  <div class="container-fluid p-0">
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center justify-content-center">
      <div class="container" data-aos="fade-up">
        <div
          class="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div class="col-xl-6 col-lg-8">
            <h1>DevJobs<span>.</span></h1>
            <h2>We are team of talented digital geeks</h2>
          </div>
        </div>
        <div
          class="row gy-4 mt-5 justify-content-center"
          data-aos="zoom-in"
          data-aos-delay="250"
        >
          <div class="col-xl-2 col-md-4">
            <div class="icon-box">
              <i class="ri-store-line"></i>
              <h3><a href="/signin">Create Vacancy</a></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero -->
    <main id="main">
      <!-- ======= About Section ======= -->
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div
              class="col-lg-6 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <img src="@/assets/img/about.jpg" class="img-fluid" alt="" />
            </div>
            <div
              class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <About />
            </div>
          </div>
        </div>
      </section>
      <!-- End About Section -->
      <!-- ======= Clients Section ======= -->
      <section id="clients" class="clients">
        <div class="container" data-aos="zoom-in">
          <div class="clients-slider swiper-container">
            <div class="swiper-wrapper align-items-center">
              <div class="swiper-slide">
                <img
                  src="@/assets/img/clients/client-1.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="@/assets/img/clients/client-2.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="@/assets/img/clients/client-3.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="@/assets/img/clients/client-4.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="@/assets/img/clients/client-5.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="@/assets/img/clients/client-6.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="@/assets/img/clients/client-7.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="@/assets/img/clients/client-8.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
      <!-- End Clients Section -->
      <!-- ======= Services Section ======= -->
      <section id="services" class="services">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Services</h2>
            <p>Check our Services</p>
          </div>
          <div class="container">
            <div class="row">
              <div
                class="col-xl-4 col-md-6 col-sm-12"
                v-for="vacancy in vacancies"
                :key="vacancy._id"
              >
                <div class="card w-100 h-100">
                  <div class="card-body">
                    <h5 class="card-title">
                      <strong>{{ vacancy.titulo }}</strong>
                    </h5>
                    <p class="card-text">
                      {{ vacancy.descripcion }}
                    </p>
                    <p class="card-text">
                      <strong>Company</strong>: {{ vacancy.empresa }}
                    </p>
                    <p class="card-text">
                      <strong>Location</strong>: {{ vacancy.ubicacion }}
                    </p>
                    <p class="card-text">
                      <strong>Salary</strong>: {{ vacancy.salario }}
                    </p>
                    <p class="card-text">
                      <strong>Contract</strong>: {{ vacancy.contrato }}
                    </p>
                    <a href="/signin" class="btn btn-dark position-absolute bottom-0 start-50 translate-middle-x">Apply</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Services Section -->
      <!-- ======= Team Section ======= -->
      <section id="team" class="team">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Team</h2>
            <p>Check our Team</p>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch">
              <div class="wrapper" data-aos="fade-up" data-aos-delay="400">
                <div class="card front-face">
                  <img src="@/assets/img/team/team-2.jpg" />
                </div>
                <div class="card back-face">
                  <img src="@/assets/img/team/team-2.jpg" />
                  <div class="info">
                    <div class="title">Viviana Castelblanco</div>
                    <p>
                      User interface designer and <br />front-end and back-end
                      developer
                    </p>
                  </div>
                  <ul class="social_lu">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch">
              <div class="wrapper" data-aos="fade-up" data-aos-delay="100">
                <div class="card front-face">
                  <img src="@/assets/img/team/team-1.jpg" />
                </div>
                <div class="card back-face">
                  <img src="@/assets/img/team/team-1.jpg" />
                  <div class="info">
                    <div class="title">John Andrade</div>
                    <p>
                      User interface designer and <br />front-end and back-end
                      developer
                    </p>
                  </div>
                  <ul class="social_lu">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch">
              <div class="wrapper" data-aos="fade-up" data-aos-delay="200">
                <div class="card front-face">
                  <img src="@/assets/img/team/team-3.jpg" />
                </div>
                <div class="card back-face">
                  <img src="@/assets/img/team/team-3.jpg" />
                  <div class="info">
                    <div class="title">Juan Felipe Tamayo</div>
                    <p>
                      User interface designer and <br />front-end and back-end
                      developer
                    </p>
                  </div>
                  <ul class="social_lu">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch">
              <div class="wrapper" data-aos="fade-up" data-aos-delay="300">
                <div class="card front-face">
                  <img src="@/assets/img/team/team-4.jpg" />
                </div>
                <div class="card back-face">
                  <img src="@/assets/img/team/team-4.jpg" />
                  <div class="info">
                    <div class="title">Óscar Santiago Pinilla</div>
                    <p>
                      User interface designer and <br />front-end and back-end
                      developer
                    </p>
                  </div>
                  <ul class="social_lu">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="
                col-lg-12 col-md-12 col-sm-12
                d-flex
                align-items-stretch
                justify-content-center
              "
            >
              <div class="wrapper" data-aos="fade-up" data-aos-delay="400">
                <div class="card front-face">
                  <img src="@/assets/img/team/KusKus.jpg" />
                </div>
                <div class="card back-face">
                  <img src="@/assets/img/team/KusKus.jpg" />
                  <div class="info">
                    <div class="title">Juan Pablo Aguirre</div>
                    <p>
                      User interface designer and <br />front-end and back-end
                      developer
                    </p>
                  </div>
                  <ul class="social_lu">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Team Section -->
    </main>
    <!-- End #main -->
    <!-- ======= Footer ======= -->
    <Footer />
    <!-- End Footer -->
    <Preloader />
    <Backtop />
  </div>
</template>
<script>
export default {
  data() {
    return {
      vacancies: [],
    }
  },
  mounted() {
    this.getVacancy()
  },
  methods: {
    async getVacancy() {
      try {
        await this.$axios.get('api/vancancy').then((response) => {
          this.vacancies = response.data
          console.log(this.vacancies)
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: error,
        })
      }
    },
  },
}
</script>
