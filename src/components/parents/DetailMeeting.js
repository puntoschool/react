import React, { Fragment, useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuParents from "./MenuParents";

const DetailMeeting = () => {
  
  return (
    <Fragment>
      <div className="admin parents">
        <Header />
        <section className="dashboard mt-80">
          <div className="container-fluid">
            <div className="row">
              <MenuParents />
              <main className="dash-main col-md-10 col-sm-9 dashboard-meetings">
                    <div className="row mb-4">
                        <div className="col-md-4 col-6">
                            <h3 className="dash-teachers__title mt-0">Grado escolar:</h3>
                            <h5 className="meeting-info">5to B</h5>
                        </div>
                        <div className="col-md-4 col-6">
                            <h3 className="dash-teachers__title mt-0">Profesor:</h3>
                            <h5 className="meeting-info">Sara Molina</h5>
                        </div>
                    </div>
                    <section className="row video-detail">
                        <article className="col-sm-9 video-meeting">
                            <h2 className="meeting-title">Junta de Inicio de cursos</h2>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item"
                                    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-6">
                                    <div className="meeting-text my-3">
                                        <p><i className="far fa-clock"></i>9 de Febrero, 9:00 hrs.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 text-right">
                                    <a href="#" download className="btn-border-blue btn-sm align-items-center mb-3">
                                        <i className="fas fa-download"></i> Descargar Minuta
                                    </a>
                                </div>
                            </div>
                        </article>
                        <div className="col-sm-3 meeting-chat">
                            <h5 className="blue-color bold">Preguntas</h5>
                            <div className="meeting-comments">
                                <div className="comment">
                                    <h5>Alberto Rivas</h5>
                                    <p>¿Cuándo inicia el curso?</p>
                                </div>
                            </div>
                            <form action="" className="meeting-input">
                                <input type="text" placeholder="Escribe aquí tu pregunta" />
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

export default DetailMeeting;
