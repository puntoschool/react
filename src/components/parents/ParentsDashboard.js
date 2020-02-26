import React, { Router } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const parentsDashboard = () => {
  return (
    <Router>
      <parentsDashboard class="parentsDashboard">
        <div class="col-md-8 col-sm-10 tab-kids">
          <ul class="nav nav-tabs justify-content-center" id="tabKidsNames" role="tablist">
              <li class="nav-item">
                  <Link class="nav-link active" id="kid1-tab"  data-toggle="tab" to="#kid1" role="tab" aria-controls="kid1" aria-selected="true">Adrian Rivas</Link>
              </li>
          </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="kid1" role="tabpanel" aria-labelledby="kid1-tab">
                    <div class="inner-tab">
                        <h5>Grado escolar: 5B <span class="mr-1">Profesor(a): Sara Molina</span> </h5>
                        <Link to="/Meeting1">
                            <div class="meeting-appointment">
                                <div class="meeting-info">
                                    <div class="meeting-date">
                                        9 Ene
                                    </div>
                                    <div class="meeting-text">
                                        <h3>Junta de Inicio de cursos</h3>
                                        <p><i class="far fa-clock"></i>9 de Enero, 9:00 hrs.</p>
                                        <p><i class="fas fa-map-marker-alt"></i>Salón 2 </p>
                                    </div>
                                </div>
                                <div class="meeting-arrow">
                                    <i class="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        </Link>
                        <Link to="/Meeting2">
                            <div class="meeting-appointment">
                                <div class="meeting-info">
                                    <div class="meeting-date">
                                        9 Ene
                                    </div>
                                    <div class="meeting-text">
                                        <h3>Junta de Primavera</h3>
                                        <p><i class="far fa-clock"></i>9 de Enero, 9:00 hrs.</p>
                                        <p><i class="fas fa-map-marker-alt"></i>Salón 2 </p>
                                    </div>
                                </div>
                                <div class="meeting-arrow">
                                    <i class="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        </Link>
                        <Link to="/Meeting3">
                            <div class="meeting-appointment">
                                <div class="meeting-info">
                                    <div class="meeting-date">
                                        9 Ene
                                    </div>
                                    <div class="meeting-text">
                                        <h3>Junta de Fin de cursos</h3>
                                        <p><i class="far fa-clock"></i>9 de Enero, 9:00 hrs.</p>
                                        <p><i class="fas fa-map-marker-alt"></i>Salón 3 </p>
                                    </div>
                                </div>
                                <div class="meeting-arrow">
                                    <i class="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Switch>
          <Route path="/Meeting1">
            <About />
          </Route>
          <Route path="/Meeting2">
            <Users />
          </Route>
          <Route path="/Meeting3">
            <Home />
          </Route>
        </Switch>
        </div>
        <div class="col-md-11 mt-2">
            <img src="../assets/img/ninos_optimizados.jpg" class="img-fluid"/>
        </div>
      </parentsDashboard>
    </Router>
  );
};

export default parentsDashboard;
