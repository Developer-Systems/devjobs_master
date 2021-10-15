<template>
  <div class="body">
    <div class="container mt-6">
      <br />
      <h1 class="text-light text-center"><strong>Jobs Offers</strong></h1>
      <br />
      <div v-for="vacancy in vacancies" :key="vacancy._id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              <strong>{{vacancy.titulo}}</strong>
            </h5>
            <p class="card-text">
              {{vacancy.descripcion}}
            </p>
            <p class="card-text">
              <strong>Company</strong>: {{vacancy.empresa}}
            </p>
            <p class="card-text">
              <strong>Location</strong>: {{vacancy.ubicacion}}
            </p>
            <p class="card-text">
              <strong>Salary</strong>: {{vacancy.salario}}
            </p>
            <p class="card-text">
              <strong>Contract</strong>: {{vacancy.contrato}}
            </p>
            <a href="#" class="btn btn-dark">Apply</a>
          </div>
        </div>
        <br />
      </div>
    </div>
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

<style scoped>
.mt-6 {
  position: relative;
  top: 5% !important;
}
.body {
  font-family: 'Mukta', sans-serif;
  width: 100vw;
  height: 100vh;
  background-color: #100e17;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
h1 {
  text-align: center;
}
</style>
