import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const DashboardParents = () => {
  return (
    <Router>
        <div className="col-md-8 col-sm-10 tab-kids">
          <ul className="nav nav-tabs justify-content-center" id="tabKidsNames" role="tablist">
              <li className="nav-item">
                  <Link className="nav-link active" id="kid1-tab"  data-toggle="tab" to="#kid1" role="tab" aria-controls="kid1" aria-selected="true">Adrian Rivas</Link>
              </li>
          </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="kid1" role="tabpanel" aria-labelledby="kid1-tab">
                    <div className="inner-tab">
                        <h5>Grado escolar: 5B <span className="mr-1">Profesor(a): Sara Molina</span> </h5>
                        <Link to="/Meeting1">
                            <div className="meeting-appointment">
                                <div className="meeting-info">
                                    <div className="meeting-date">
                                        9 Ene
                                    </div>
                                    <div className="meeting-text">
                                        <h3>Junta de Inicio de cursos</h3>
                                        <p><i className="far fa-clock"></i>9 de Enero, 9:00 hrs.</p>
                                        <p><i className="fas fa-map-marker-alt"></i>Salón 2 </p>
                                    </div>
                                </div>
                                <div className="meeting-arrow">
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        </Link>
                        <Link to="/Meeting2">
                            <div className="meeting-appointment">
                                <div className="meeting-info">
                                    <div className="meeting-date">
                                        9 Ene
                                    </div>
                                    <div className="meeting-text">
                                        <h3>Junta de Primavera</h3>
                                        <p><i className="far fa-clock"></i>9 de Enero, 9:00 hrs.</p>
                                        <p><i className="fas fa-map-marker-alt"></i>Salón 2 </p>
                                    </div>
                                </div>
                                <div className="meeting-arrow">
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        </Link>
                        <Link to="/Meeting3">
                            <div className="meeting-appointment">
                                <div className="meeting-info">
                                    <div className="meeting-date">
                                        9 Ene
                                    </div>
                                    <div className="meeting-text">
                                        <h3>Junta de Fin de cursos</h3>
                                        <p><i className="far fa-clock"></i>9 de Enero, 9:00 hrs.</p>
                                        <p><i className="fas fa-map-marker-alt"></i>Salón 3 </p>
                                    </div>
                                </div>
                                <div className="meeting-arrow">
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Switch>
          <Route path="/Meeting1">
            {/* <About /> */}
          </Route>
          <Route path="/Meeting2">
            {/* <Users /> */}
          </Route>
          <Route path="/Meeting3">
            {/* <Home /> */}
          </Route>
        </Switch>
        </div>
        <div className="col-md-11 mt-2">
            <img src="../assets/img/ninos_optimizados.jpg" className="img-fluid"/>
        </div>
    </Router>
  );
};

export default DashboardParents;
