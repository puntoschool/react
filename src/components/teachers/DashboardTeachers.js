import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuTeachers from "./MenuTeachers";

const DashboardTeachers = () => {

  return (
    <Fragment>
      <div className="admin teachers">
        <Header />
        <section className="dashboard">
          <div className="container-fluid">
            <div className="row">
              <MenuTeachers />
              <main className="dash-main dash-teachers col-md-10 col-sm-9">
                <div className="row">
                  <div className="col-sm-9">
                    <h1 className="dash-new-meeting__title">Juntas agendadas</h1>
                    {/* <h3 className="dash-teachers__title">Profesor(a)</h3>
                                  <p className="dash-teachers__info">Sara Molina<p>*/}
                  </div>
                  <div className="col-sm-3 dash-teachers__search-nav mb-3">
                    <input type='search' className="dash-teachers__input" />
                    <span className="dash-teachers__filter-icon">
                      <i class="fas fa-filter fa-fw"></i>
                    </span>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-sm-9 col-12">
                    <article class="meeting-appointment">
                      <div class="meeting-info">
                        <div class="meeting-date"> 9 Ene
                                    </div>
                        <div class="meeting-text">
                          <h3>Junta de Inicio de cursos</h3>
                          <p><i class="far fa-clock"></i>9 de Enero, 9:00 hrs.</p>
                          <p><i class="fas fa-user-graduate"></i>5to A </p>
                          <h5>ID: <span className="yellow-color"><strong>09876</strong></span></h5>
                        </div>
                      </div>
                      <div class="meeting-arrow">
                        <span className="start-meeting d-block d-sm-inline">Iniciar Junta</span> <i class="fas fa-chevron-right"></i>
                      </div>
                    </article>
                    <article class="meeting-appointment">
                      <div class="meeting-info">
                        <div class="meeting-date"> 9 Ene
                                    </div>
                        <div class="meeting-text">
                          <h3>Junta de Inicio de cursos</h3>
                          <p><i class="far fa-clock"></i>9 de Enero, 9:00 hrs.</p>
                          <p><i class="fas fa-user-graduate"></i>5to A </p>
                          <h5>ID: <span className="yellow-color"><strong>09876</strong></span></h5>
                        </div>
                      </div>
                      <div class="meeting-arrow">
                        <i class="fas fa-chevron-right"></i>
                      </div>
                    </article>
                    <article class="meeting-appointment">
                      <div class="meeting-info">
                        <div class="meeting-date"> 9 Ene
                                    </div>
                        <div class="meeting-text">
                          <h3>Junta de Inicio de cursos</h3>
                          <p><i class="far fa-clock"></i>9 de Enero, 9:00 hrs.</p>
                          <p><i class="fas fa-user-graduate"></i>5to A </p>
                          <h5>ID: <span className="yellow-color"><strong>09876</strong></span></h5>
                        </div>
                      </div>
                      <div class="meeting-arrow">
                        <i class="fas fa-chevron-right"></i>
                      </div>
                    </article>
                    <article class="meeting-appointment">
                      <div class="meeting-info">
                        <div class="meeting-date"> 9 Ene
                                    </div>
                        <div class="meeting-text">
                          <h3>Junta de Inicio de cursos</h3>
                          <p><i class="far fa-clock"></i>9 de Enero, 9:00 hrs.</p>
                          <p><i class="fas fa-user-graduate"></i>5to A </p>
                          <h5>ID: <span className="yellow-color"><strong>09876</strong></span></h5>
                        </div>
                      </div>
                      <div class="meeting-arrow">
                        <i class="fas fa-chevron-right"></i>
                      </div>
                    </article>

                  </div>
                </div>
              </main>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </Fragment>
  );
};

export default DashboardTeachers;
