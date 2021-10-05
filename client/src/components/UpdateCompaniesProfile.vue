<template>
<div class="body">
  <div class="container-fluid d-flex justify-content-around text-white mt-6 mb-5  ">
    <div class="row">
      <div class="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
          <img
            class="rounded-circle mt-5
                    border border-white border-4"
            width="150px"
            src="https://cdn-icons-png.flaticon.com/512/4205/4205813.png"
          /><span class="mt-3 font-weight-bold">Empresa</span
          ><span class="text-white-50">Empresa@mail.com</span>
        </div>
      </div>
      <div class="col-md-5 border-right">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-right">Editar Perfil</h4>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <label class="labels">Nombre Empresa</label
              ><input
                type="text"
                class="form-control"
                placeholder="Nombre Empresa"
                value=""
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <label class="labels">Dirección </label
              ><input
                type="text"
                class="form-control"
                placeholder="Direccíon"
                value=""
              />
            </div>

            <div class="col-md-12">
              <label class="labels">Telefono</label
              ><input
                type="text"
                class="form-control"
                placeholder="Telefono"
                value=""
              />
            </div>

            <div class="col-md-12">
              <label class="labels">Email </label
              ><input
                type="text"
                class="form-control"
                placeholder="@email.com"
                value=""
              />
            </div>

            <div class="form-group">
              <label class="labels"> Descripción de la Empresa </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Descripción"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <label class="labels">País</label
              ><input
                type="text"
                class="form-control"
                placeholder="País"
                value=""
              />
            </div>
            <div class="col-md-6">
              <label class="labels"> Ciudad </label
              ><input
                type="text"
                class="form-control"
                value=""
                placeholder="Ciudad"
              />
            </div>
          </div>
          <div class="mt-5 text-center">
            <button class="btn btn-primary profile-button" type="button">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "UpdateCompaniesProfile",
  components: {},
};
</script>

<style>
.body {
  background: #1a1a1a;
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
