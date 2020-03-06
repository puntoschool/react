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
              <main class="dash-main col-md-10 col-sm-9 dashboard-meetings">
                    <div class="row justify-content-end">
                        <div class="col-md-10 col-sm-9 col-10 mb-sm-5">
                            <h3 class="meeting-kid">Adrian Rivas</h3>
                            <h5 class="meeting-info">Grado escolar: 5B <span>Profesor: Sara Molina</span></h5>
                        </div>
                        <div class="col-md-2 col-sm-3 col-2">
                            <div class="btn-title">
                                <div class="btn-guide">
                                    <a href="#">
                                        <i class="fas fa-book"></i>
                                        <p>Guía de uso</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="row video-detail">
                        <article class="col-sm-9 video-meeting">
                            <h2 class="meeting-title">Junta de Inicio de cursos</h2>
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item"
                                    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="meeting-text my-3">
                                        <p><i class="far fa-clock"></i>9 de Febrero, 9:00 hrs.</p>
                                        <p><i class="fas fa-map-marker-alt"></i>Salón 2 </p>
                                        <h6>Comentarios</h6>
                                        <p>La junta trata como tema principal todos los eventos del año y nuevas
                                            estrategías de trabajo.</p>
                                    </div>
                                    <a href="#" class="btn-border-pink btn-sm align-items-center mb-3"><i
                                            class="fas fa-download"></i> Descargar Minuta</a>
                                </div>
                                <div class="col-sm-6 text-right">
                                    <div class="poll-collapse">
                                        <button type="button" data-toggle="collapse"
                                            data-target="#collapsePoll" aria-expanded="true"
                                            aria-controls="collapsePoll">
                                            Encuestas
                                        </button>
                                        <div class="collapse show" id="collapsePoll">
                                            <div class="inner-poll">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                                labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <div class="col-sm-3 meeting-chat">
                            <div class="meeting-comments">
                                <div class="comment">
                                    <h5>Alberto Rivas</h5>
                                    <p>¿Cuándo inicia el curso?</p>
                                </div>
                            </div>
                            <form action="" class="meeting-input">
                                <input type="text">
                                <button><i class="far fa-paper-plane"></i></button>
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
