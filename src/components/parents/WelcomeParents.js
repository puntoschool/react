import React, { Fragment } from "react";
import MenuParents from "./MenuParents";

const WelcomeParents = () => {
  return (
    <Fragment>
      <MenuParents />
      <main className="dash-main col-md-10 col-sm-9 dash-welcome">
        <section className="row justify-content-center">
          <div className="col-md-8 col-sm-9 col-10 mb-sm-5">
            <h1 className="title-welcome">¡HOLA!</h1>
            <p className="subtitle-welcome">
              Bienvenido al administrador escolar
            </p>
            <form className="form-group">
              <label for="enterID">Ingresa el ID de tu junta</label>
              <input type="text" className="form-control" id="enterID" placeholder="Número de ID otorgado por el maestro" />
            </form>
          </div>

          <div className="col-md-11 mt-2">
            <img src="./assets/img/ninos_optimizados.jpg" className="img-fluid" />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default WelcomeParents;
