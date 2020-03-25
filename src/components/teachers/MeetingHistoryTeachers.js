import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import MenuTeachers from "./MenuTeachers";

const MeetingHistoryTeachers = ({setLoginParent, login, setLogin, meetings}) => {

  return (
    <Fragment>
      <div className="admin teachers">
        <Header 
          setLoginParent={setLoginParent}
          login={login}
          setLogin={setLogin}
        />
        <section className="dashboard mt-80">
          <div className="container-fluid">
            <div className="row">
              <MenuTeachers />
              <main className="dash-main col-md-10 col-sm-9 dashboard-meetings">
                <section className="video-list">
                  <h2>Historial de juntas</h2>
                  <article className="video-meeting">
                    <div className="row align-items-center">
                      <div className="col-sm-3 col-12">
                      <Link to={'/DetailMeetingTeachers'} >
                          <img src="../assets/img/video-preview.png" alt="Video" className="img-fluid" />
                        </Link>
                      </div>
                      <div className="col-sm-6 col-12">
                        <Link to={'/DetailMeetingTeachers'} >
                          <div className="meeting-text">
                            <h3>Junta de Inicio de cursos 
                              {/* <small>324 vistas</small> */}
                            </h3>
                            <p><i className="far fa-clock"></i>9 de Febrero, 9:00 hrs.</p>
                            <p><i className="fas fa-graduation-cap"></i>3ro A </p>
                          </div>
                      </Link>
                      </div>
                      <div className="col-md-3 col-12 text-right">
                        <Link className="btn-plain" to={'/DetailMeetingTeachers'} >Ver Junta <i
                          className="fas fa-chevron-right"></i></Link>
                      </div>
                    </div>
                  </article>
                  <article className="video-meeting">
                    <div className="row align-items-center">
                      <div className="col-sm-3 col-12">
                      <Link to={'/DetailMeetingTeachers'} >
                          <img src="../assets/img/video-preview.png" alt="Video" className="img-fluid" />
                        </Link>
                      </div>
                      <div className="col-sm-6 col-12">
                      <Link to={'/DetailMeetingTeachers'} >
                          <div className="meeting-text">
                            <h3>Junta de Inicio de cursos</h3>
                            <p><i className="far fa-clock"></i>9 de Febrero, 9:00 hrs.</p>
                            <p><i className="fas fa-graduation-cap"></i>3ro A </p>
                          </div>
                        </Link>
                      </div>
                      <div className="col-md-3 col-12 text-right">
                      <a href="#!" download className="btn-border-yellow btn-sm mb-3 d-block">
                          <i className="fas fa-download"></i> Descargar Minuta
                        </a>
                        <Link className="btn-plain" to={'/DetailMeetingTeachers'} >Ver Junta <i
                          className="fas fa-chevron-right"></i></Link>
                      </div>
                    </div>
                  </article>
                  <article className="video-meeting">
                    <div className="row align-items-center">
                      <div className="col-sm-3 col-12">
                      <Link to={'/DetailMeetingTeachers'} >
                          <img src="../assets/img/video-preview.png" alt="Video" className="img-fluid" />
                        </Link>
                      </div>
                      <div className="col-sm-6 col-12">
                      <Link to={'/DetailMeetingTeachers'} >
                          <div className="meeting-text">
                            <h3>Junta de Inicio de cursos</h3>
                            <p><i className="far fa-clock"></i>9 de Febrero, 9:00 hrs.</p>
                            <p><i className="fas fa-graduation-cap"></i>5to B </p>
                          </div>
                        </Link>
                      </div>
                      <div className="col-md-3 col-12 text-right">
                        <a href="#!" download className="btn-border-yellow btn-sm mb-3 d-block">
                          <i className="fas fa-download"></i> Descargar Minuta
                        </a>
                        <Link className="btn-plain" to={'/DetailMeetingTeachers'} >Ver Junta <i
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

export default MeetingHistoryTeachers;
