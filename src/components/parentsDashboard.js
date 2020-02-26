import React, { Fragment } from "react";

const parentsDashboard = () => {
  return (
    <Fragment>
      <parentsDashboard class="parentsDashboard">
        <div class="col-md-8 col-sm-10 tab-kids">
          <ul class="nav nav-tabs justify-content-center" id="tabKidsNames" role="tablist">
              <li class="nav-item">
                  <a class="nav-link active" id="kid1-tab"  data-toggle="tab" href="#kid1" role="tab" aria-controls="kid1" aria-selected="true">Adrian Rivas</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" id="kid2-tab" data-toggle="tab" href="#kid2" role="tab" aria-controls="kid2" aria-selected="false">Paulina Rivas</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" id="kid3-tab" data-toggle="tab" href="#kid3" role="tab" aria-controls="kid3" aria-selected="false">Julian Rivas</a>
              </li>
          </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="kid1" role="tabpanel" aria-labelledby="kid1-tab">
                    <div class="inner-tab">
                        <h5>Grado escolar: 5B <span class="mr-1">Profesor(a): Sara Molina</span> </h5>
                        <a href="meetingDetail.html">
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
                        </a>
                        <a href="meetingDetail.html">
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
                        </a>
                        <a href="meetingDetail.html">
                            <div class="meeting-appointment">
                                <div class="meeting-info">
                                    <div class="meeting-date">
                                        9 Ene
                                    </div>
                                    <div class="meeting-text">
                                        <h3>Junta de Fin de cursos</h3>
                                        <p><i class="far fa-clock"></i>9 de Enero, 9:00 hrs.</p>
                                        <p><i class="fas fa-map-marker-alt"></i>Salón 2 </p>
                                    </div>
                                </div>
                                <div class="meeting-arrow">
                                    <i class="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="tab-pane fade" id="kid2" role="tabpanel" aria-labelledby="kid2-tab">
                    <div class="inner-tab">
                        <h5>Grado escolar: 5B <span class="mr-1">Profesor(a): Sara Molina</span> </h5>
                        <a href="meetingDetail.html">
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
                        </a>
                        <a href="meetingDetail.html">
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
                        </a>
                    </div>
                </div>
                <div class="tab-pane fade" id="kid3" role="tabpanel" aria-labelledby="kid3-tab">
                    <div class="inner-tab">
                        <h5>Grado escolar: 5B <span class="mr-1">Profesor(a): Sara Molina</span> </h5>
                        <a href="meetingDetail.html">
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
                        </a>
                        <a href="meetingDetail.html">
                            <div class="meeting-appointment">
                                <div class="meeting-info">
                                    <div class="meeting-date">
                                        9 Ene
                                    </div>
                                    <div class="meeting-text">
                                        <h3>Junta de Fin de cursos</h3>
                                        <p><i class="far fa-clock"></i>9 de Enero, 9:00 hrs.</p>
                                        <p><i class="fas fa-map-marker-alt"></i>Salón 2 </p>
                                    </div>
                                </div>
                                <div class="meeting-arrow">
                                    <i class="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        </a>
                    </div>    
                </div>
            </div>
        </div>
        <div class="col-md-11 mt-2">
            <img src="../assets/img/ninos_optimizados.jpg" class="img-fluid"/>
        </div>
      </parentsDashboard>
    </Fragment>
  );
};

export default parentsDashboard;
