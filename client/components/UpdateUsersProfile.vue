<template>
  <div class="body">
    <div class="container mt-6 mb-5 text-white">
      <div class="d-flex flex-column align-items-center text-center p-3 py-5">
        <img
          alt="Foto Perfil Usuario"
          class="rounded-circle border borde-white border-3 mt-5"
          width="150px"
          src="https://thumbs.dreamstime.com/b/retrato-masculino-del-icono-del-perfil-del-hombre-de-negocios-plano-47075253.jpg"
        /><span class="mt-3 font-weight-bold">John Armando Casas</span
        ><span class="text-white-50">DevJobs@mail.com</span><span> </span>
      </div>
      <div class="p-3 py-3">
        <div class="d-flex justify-content-center">
          <h4 class="text-center"><strong>Edit Profile</strong></h4>
        </div>
        <div class="row mt-2">
          <div class="col-md-12">
            <label class="labels">Name</label
            ><input
              type="text"
              class="form-control"
              placeholder="Full Name"
              value=""
            />
          </div>
          <div class="col-md-12">
            <label class="labels">Adress </label
            ><input
              type="text"
              class="form-control"
              placeholder="Full Adress"
              value=""
            />
          </div>

          <div class="col-md-12">
            <label class="labels">Telephone</label
            ><input
              type="text"
              class="form-control"
              placeholder="Telephone"
              value=""
            />
          </div>

          <div class="col-md-12">
            <label class="labels">Email</label
            ><input
              type="text"
              class="form-control"
              placeholder=" Email"
              value=""
            />
          </div>
          <div class="col-md-6">
            <label class="labels">Country</label
            ><input
              type="text"
              class="form-control"
              placeholder="Country"
              value=""
            />
          </div>
          <div class="col-md-6">
            <label class="labels"> City </label
            ><input
              type="text"
              class="form-control"
              value=""
              placeholder="City"
            />
          </div>
          <div class="col-md-12 ">
            <label class="labels">Interests</label>
            <textarea
            type="text"
              class="form-control"
              id="interests"
              rows="3"
              placeholder="Tell us more"
              value=""
            ></textarea>
          </div>
        </div>
        <div class="mt-5 text-center">
          <button class="get-started-btn profile-button" type="button">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
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
.form-control:focus {
  box-shadow: none;
  border-color: #22b573;
}

.profile-button {
  background: #006837;
  box-shadow: none;
  border: none;
}

.profile-button:hover {
  background: #22b573;
}

.profile-button:focus {
  background: #006837;
  box-shadow: none;
}

.profile-button:active {
  background: #006837;
  box-shadow: none;
}

.back:hover {
  color: #006837;
  cursor: pointer;
}

.labels {
  font-size: 11px;
}

.add-experience:hover {
  background: #22b573;
  color: #fff;
  cursor: pointer;
  border: solid 1px #006837;
}

div.experiencia {
  padding: 100px 15px 15px 15px;
}
</style>
