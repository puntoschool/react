import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MenuParents from "./MenuParents";

const WelcomeParents = () => {
  return (
    <Fragment>
      <MenuParents />
      <main className="dash-main col-md-10 col-sm-9 dash-welcome">
        <div className="row justify-content-end">
          <div className="offset-md-2 col-md-8 col-sm-9 col-10 mb-sm-5">
            <h1 className="title-welcome">¡HOLA!</h1>
            <p className="subtitle-welcome">Bienvenido al administrador escolar</p>
          </div>
        </div>
        <section className="row justify-content-center">
          <div className="col-md-8 col-sm-10 tab-kids">
            <ul
              className="nav nav-tabs justify-content-center"
              id="tabKidsNames"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="kid1-tab"
                  data-toggle="tab"
                  href="#kid1"
                  role="tab"
                  aria-controls="kid1"
                  aria-selected="true"
                >
                  Adrian Rivas
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="kid2-tab"
                  data-toggle="tab"
                  href="#kid2"
                  role="tab"
                  aria-controls="kid2"
                  aria-selected="false"
                >
                  Paulina Rivas
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="kid3-tab"
                  data-toggle="tab"
                  href="#kid3"
                  role="tab"
                  aria-controls="kid3"
                  aria-selected="false"
                >
                  Julian Rivas
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="kid1"
                role="tabpanel"
                aria-labelledby="kid1-tab"
              >
                <div className="inner-tab">
                  <h5>
                    Grado escolar: 5B{" "}
                    <span className="mr-1">Profesor(a): Sara Molina</span>{" "}
                  </h5>
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
                  <a href="meetingDetail.html">
                    <div className="meeting-appointment">
                      <div className="meeting-info">
                        <div className="meeting-date">9 Ene</div>
                        <div className="meeting-text">
                          <h3>Junta de Primavera</h3>
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
                  <a href="meetingDetail.html">
                    <div className="meeting-appointment">
                      <div className="meeting-info">
                        <div className="meeting-date">9 Ene</div>
                        <div className="meeting-text">
                          <h3>Junta de Fin de cursos</h3>
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
              </div>
              <div
                className="tab-pane fade"
                id="kid2"
                role="tabpanel"
                aria-labelledby="kid2-tab"
              >
                <div className="inner-tab">
                  <h5>
                    Grado escolar: 5B{" "}
                    <span className="mr-1">Profesor(a): Sara Molina</span>{" "}
                  </h5>
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
                  <a href="meetingDetail.html">
                    <div className="meeting-appointment">
                      <div className="meeting-info">
                        <div className="meeting-date">9 Ene</div>
                        <div className="meeting-text">
                          <h3>Junta de Primavera</h3>
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
              </div>
              <div
                className="tab-pane fade"
                id="kid3"
                role="tabpanel"
                aria-labelledby="kid3-tab"
              >
                <div className="inner-tab">
                  <h5>
                    Grado escolar: 5B{" "}
                    <span className="mr-1">Profesor(a): Sara Molina</span>{" "}
                  </h5>
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
                  <a href="meetingDetail.html">
                    <div className="meeting-appointment">
                      <div className="meeting-info">
                        <div className="meeting-date">9 Ene</div>
                        <div className="meeting-text">
                          <h3>Junta de Fin de cursos</h3>
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
              </div>
            </div>
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
