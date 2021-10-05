<template>
  <div class="body">
    <div class="container mt-6">
        <h2 class="text-light"><strong>Nueva Vacante</strong></h2>
        <p>Llena el formulario y publica tu vacante</p>

      <div action="" class="form-control">
        <h4>INFORMACIÓN GENERAL</h4>
        <br />

        <form class="item">
          <div class="form-group">
            <label for="jobTitleVacancy">TÍTULO</label>
            <input
              type="titulo"
              class="form-control"
              id=""
              aria-describedby="jobTitleHelp"
              placeholder="Ej: React Developer"
            />
          </div>

          <div>
            <label for="companyName">EMPRESA</label>
            <input
              type="company"
              class="form-control"
              id=""
              aria-describedby="companyHelp"
              placeholder="Empresa"
            />
          </div>
          <div>
            <label for="companyId">NIT</label>
            <input
              type="companyId"
              class="form-control"
              id=""
              aria-describedby="idHelp"
              placeholder="NIT"
            />
          </div>
          <div>
            <label for="companyLocation">UBICACIÓN</label>
            <input
              type="location"
              class="form-control"
              id=""
              aria-describedby="locationHelp"
              placeholder="Ej: México o Remoto"
            />
          </div>
          <div>
            <label for="salaryUSD">SALARIO(USD)</label>
            <input
              type="salary"
              class="form-control"
              id=""
              aria-describedby="salaryHelp"
              placeholder="Ej: $500 USD"
            />
          </div>
          <div>
            <label for="employmentContract">CONTRATO</label>
            <select name="select" class="form-control">
              <option value="value1">Value 1</option>
              <option value="value2" selected>Value 2</option>
              <option value="value3">Value 3</option>
            </select>
          </div>
          <br />

          <div>
            <label for="jobDescritption"><h4>DESCRIPCIÓN DEL PUESTO</h4></label>

            <div class="form-group purple-border">
              <textarea class="form-control" rows="3"></textarea>
            </div>
          </div>
          <br />
          <h4>CONOCIMIENTOS</h4>
          <div class="container">
            <div class="row align-items-start">
              <div class="btn-toolbar boton">
                <button input type="button" class="btn btn-light">HTML</button>
                <button input type="button" class="btn btn-light">CSS</button>
                <button input type="button" class="btn btn-light">
                  JSCRIPT
                </button>
              </div>

              <div class="btn-toolbar boton">
                <button input type="button" class="btn btn-light">PHP</button>
                <button input type="button" class="btn btn-light">SQL</button>
                <button input type="button" class="btn btn-light">NODE</button>
              </div>

              <div class="btn-toolbar boton">
                <button input type="button" class="btn btn-light">VUEJS</button>
                <button input type="button" class="btn btn-light">REDUX</button>
                <button input type="button" class="btn btn-light">
                  ANGULAR
                </button>
              </div>

              <div class="btn-toolbar boton">
                <button input type="button" class="btn btn-light">MVC</button>
                <button input type="button" class="btn btn-light">
                  PYTHON
                </button>
                <button input type="button" class="btn btn-light">ORM</button>
              </div>

              <div class="btn-toolbar boton">
                <button input type="button" class="btn btn-light">SASS</button>
                <button input type="button" class="btn btn-light">
                  JQUERY
                </button>
                <button input type="button" class="btn btn-light">
                  FLEXBOX
                </button>
              </div>

              <div class="btn-toolbar boton">
                <button input type="button" class="btn btn-light">
                  CSSGRID
                </button>
                <button input type="button" class="btn btn-light">
                  LARAVEL
                </button>
                <button input type="button" class="btn btn-light">JAVA</button>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div class="submit">
            <button type="submit" class="btn btn-primary enviar">
              PUBLICAR
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-1 {
  color: white !important;
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
.mt-6 {
  margin-top: 5 rem;
}
.wrapper {
  display: grid;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

div.boton {
  justify-content: space-evenly;
  padding: 5px 0;
}

button {
  width: 100px;
  height: 38px;
  margin-top: 3px;
}

.enviar {
  color: #fff;
  background: #006837;
  box-shadow: none;
}
</style>
