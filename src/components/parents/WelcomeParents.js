import React, { Fragment } from "react";
import MenuParents from "./MenuParents";

const WelcomeParents = () => {
  return (
    <Fragment>
      <MenuParents />
      <main className="dash-main col-md-10 col-sm-9 dash-welcome">
        <div className="row justify-content-end">
          <div className="offset-md-2 col-md-8 col-sm-9 col-10 mb-sm-5">
            <h1 className="title-welcome">¡HOLA!</h1>
            <p className="subtitle-welcome">
              Bienvenido al administrador escolar
            </p>
          </div>
        </div>
        <section className="row justify-content-center">
          <div className="col-md-8 col-sm-10 tab-kids">
            <a href="meetingDetail.html">
              <div className="meeting-appointment">
                <div className="meeting-info">
                  <div className="meeting-date">9 Ene</div>
                  <div className="meeting-text">
                    <h3>Junta de Inicio de cursos</h3>
                    <p>
                      <i className="far fa-clock"></i>9 de Enero, 9:00 hrs.
                    </p>
                    <p>
                      <i className="fas fa-map-marker-alt"></i>Salón 2{" "}
                    </p>
                  </div>
                </div>
                <div className="meeting-arrow">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-11 mt-2">
            <img
              src="./assets/img/ninos_optimizados.jpg"
              className="img-fluid"
            />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default WelcomeParents;
