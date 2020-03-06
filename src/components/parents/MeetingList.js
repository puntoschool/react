import React, { Fragment, useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuParents from "./MenuParents";

const MeetingList = () => {
  
  return (
    <Fragment>
      <div className="teachers">
        <Header />
        <section className="dashboard mt-80">
          <div className="container-fluid">
            <div className="row">
              <MenuParents />
              <main className="dash-main col-md-10 col-sm-9 dashboard-meetings">
                    <div className="row justify-content-end">
                        <div className="col-md-10 col-sm-9 col-10 mb-sm-5">
                            <h3 className="meeting-kid">Adrian Rivas</h3>
                            <h5 className="meeting-info">Grado escolar: 5B <span>Profesor: Sara Molina</span></h5>
                        </div>
                        <div className="col-md-2 col-sm-3 col-2">
                            <div className="btn-title">
                                <div className="btn-guide">
                                    <a href="#">
                                        <i className="fas fa-book"></i>
                                        <p>Guía de uso</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="row video-detail">
                        <article className="col-sm-9 video-meeting">
                            <h2 className="meeting-title">Junta de Inicio de cursos</h2>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item"
                                    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="meeting-text my-3">
                                        <p><i className="far fa-clock"></i>9 de Febrero, 9:00 hrs.</p>
                                        <p><i className="fas fa-map-marker-alt"></i>Salón 2 </p>
                                        <h6>Comentarios</h6>
                                        <p>La junta trata como tema principal todos los eventos del año y nuevas
                                            estrategías de trabajo.</p>
                                    </div>
                                    <a href="#" className="btn-border-pink btn-sm align-items-center mb-3"><i
                                            className="fas fa-download"></i> Descargar Minuta</a>
                                </div>
                                <div className="col-sm-6 text-right">
                                    <div className="poll-collapse">
                                        <button type="button" data-toggle="collapse"
                                            data-target="#collapsePoll" aria-expanded="true"
                                            aria-controls="collapsePoll">
                                            Encuestas
                                        </button>
                                        <div className="collapse show" id="collapsePoll">
                                            <div className="inner-poll">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                                labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <div className="col-sm-3 meeting-chat">
                            <div className="meeting-comments">
                                <div className="comment">
                                    <h5>Alberto Rivas</h5>
                                    <p>¿Cuándo inicia el curso?</p>
                                </div>
                            </div>
                            <form action="" className="meeting-input">
                                <input type="text" />
                                <button><i className="far fa-paper-plane"></i></button>
                            </form>
                        </div>
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
