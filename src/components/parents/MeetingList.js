import React, { Fragment, useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuParents from "./MenuParents";
import { Link } from "react-router-dom";

const MeetingList = ({setLoginParent, login, setLogin}) => {

  return (
    <Fragment>
      <div className="admin parents">
        <Header 
          setLoginParent={setLoginParent}
          login={login}
          setLogin={setLogin}
        />
        <section className="dashboard mt-80">
          <div className="container-fluid">
            <div className="row">
              <MenuParents />
              <main className="dash-main col-md-10 col-sm-9 dashboard-meetings">
                <section className="video-list">
                  <h2>Historial de juntas</h2>
                  <article className="video-meeting">
                    <div className="row align-items-center">
                      <div className="col-sm-3 col-12">
                      <Link to={'/DetailMeeting'} >
                          <img src="../assets/img/video-preview.png" alt="Video" className="img-fluid" />
                        </Link>
                      </div>
                      <div className="col-sm-6 col-12">
                        <Link to={'/DetailMeeting'} >
                          <div className="meeting-text">
                            <h3>Junta de Inicio de cursos <small>324 vistas</small></h3>
                            <p><i className="far fa-clock"></i>9 de Febrero, 9:00 hrs.</p>
                            <p><i className="fas fa-map-marker-alt"></i>Salón 2 </p>
                            <h6>Comentarios</h6>
                          </div>
                      </Link>
                      </div>
                      <div className="col-lg-2 col-md-3  col-12 text-right">
                        <Link className="btn-plain" to={'/DetailMeeting'} >Ver Junta <i
                          className="fas fa-chevron-right"></i></Link>
                      </div>
                    </div>
                  </article>
                  <article className="video-meeting">
                    <div className="row align-items-center">
                      <div className="col-sm-3 col-12">
                      <Link to={'/DetailMeeting'} >
                          <img src="../assets/img/video-preview.png" alt="Video" className="img-fluid" />
                        </Link>
                      </div>
                      <div className="col-sm-6 col-12">
                      <Link to={'/DetailMeeting'} >
                          <div className="meeting-text">
                            <h3>Junta de Inicio de cursos <small>324 vistas</small></h3>
                            <p><i className="far fa-clock"></i>9 de Febrero, 9:00 hrs.</p>
                            <p><i className="fas fa-graduation-cap"></i>3ro A </p>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-2 col-md-3  col-12 text-right">
                        <a href="#" download className="btn-border-blue btn-sm d-flex align-items-center mb-3">
                          <i className="fas fa-download"></i> Descargar Minuta
                        </a>
                        <Link className="btn-plain" to={'/DetailMeeting'} >Ver Junta <i
                          className="fas fa-chevron-right"></i></Link>
                      </div>
                    </div>
                  </article>
                  <article className="video-meeting">
                    <div className="row align-items-center">
                      <div className="col-sm-3 col-12">
                      <Link to={'/DetailMeeting'} >
                          <img src="../assets/img/video-preview.png" alt="Video" className="img-fluid" />
                        </Link>
                      </div>
                      <div className="col-sm-6 col-12">
                      <Link to={'/DetailMeeting'} >
                          <div className="meeting-text">
                            <h3>Junta de Inicio de cursos <small>324 vistas</small></h3>
                            <p><i className="far fa-clock"></i>9 de Febrero, 9:00 hrs.</p>
                            <p><i className="fas fa-graduaction-cap"></i>5to B </p>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-2 col-md-3  col-12 text-right">
                        <a href="#" download className="btn-border-blue btn-sm d-flex align-items-center mb-3">
                          <i className="fas fa-download"></i> Descargar Minuta
                        </a>
                        <Link className="btn-plain" to={'/DetailMeeting'} >Ver Junta <i
                          className="fas fa-chevron-right"></i></Link>
                      </div>
                    </div>
                  </article>
                </section>
              </main>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </Fragment>
  );
};

export default MeetingList;
