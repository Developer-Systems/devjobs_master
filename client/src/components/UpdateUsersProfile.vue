<template>
  <div class="body ">
    <div class="container rounded mt-5 mb-5 text-white">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <img
              class="rounded-circle border borde-white border-3 mt-5"
              width="150px"
              src="https://cdn.icon-icons.com/icons2/2630/PNG/512/avatar_man_beard_brown_hair_boy_people_icon_159121.png"
            /><span class="mt-3 font-weight-bold">John Armando Casas</span
            ><span class="text-white-50">DevJobs@mail.com</span><span> </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Editar Perfil</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">Nombres</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Nombres"
                  value=""
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Apellidos</label
                ><input
                  type="text"
                  class="form-control"
                  value=""
                  placeholder="Apellidos"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Ciudad de recidencia</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Ciudad de recidencia"
                  value=""
                />
              </div>

              <div class="col-md-12">
                <label class="labels">Dirección </label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Dirección "
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
                <label class="labels">Email</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder=" email"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Educación</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="educación"
                  value=""
                />
              </div>

              <div class="form-group">
                <label class="labels"> Sobre Mi </label>
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
                <label class="labels">Pais</label
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
                  placeholder="ciudad"
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
        <div class="col-md-4">
          <div class="p-3 py-5">
            <div
              class="
                d-flex
                justify-content-between
                align-items-center
                experience
              "
            >
              <span>Edit.</span
              ><span class="border px-3 p-1 add-experience"
                ><i class="fa fa-plus"></i>&nbsp;Experiencia</span
              >
            </div>
            <br />
            <div class="col-md-12">
              <label class="labels">Experiencia</label
              ><input
                type="text"
                class="form-control"
                placeholder="experience"
                value=""
              />
            </div>
            <br />
            <div class="col-md-12">
              <label class="labels">Detalles adicionales</label
              ><input
                type="text"
                class="form-control"
                placeholder="Detalles adicionales"
                value=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdateUsersProfile",
  components: {},
};
</script>

<style>
.body {
  background: #1a1a1a;
  overflow: auto;
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
