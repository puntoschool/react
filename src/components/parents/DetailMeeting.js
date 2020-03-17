import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuParents from "./MenuParents";
import Poll from './Poll'
import MeetingVideo from "../teachers/MeetingVideo";

const DetailMeeting = ({setLoginParent, login, setLogin}) => {

    //var getM = new Date(meeting.date).getMonth()

    //var getD = new Date(meeting.date).getDay()

    //var month = new Array()
    // month[0] = "Enero"
    // month[1] = "Febrero"
    // month[2] = "Marzo"
    // month[3] = "Abril"
    // month[4] = "Mayo"
    // month[5] = "Junio"
    // month[6] = "Julio"
    // month[7] = "Agosto"
    // month[8] = "Septiembre"
    // month[9] = "Octubre"
    // month[10] = "Noviembre"
    // month[11] = "Diciembre"

    //getM = month[getM]

    //const link = meeting.link.replace('560','100%').replace('315','100%')

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
              <MenuParents 
                setLoginParent={setLoginParent}
                login={login}
                setLogin={setLogin}
              />
              <main className="dash-main col-md-10 col-sm-9 dashboard-meetings">
                    <div className="row mb-4">
                        <div className="col-md-4 col-6">
                            <h3 className="dash-teachers__title mt-0">Grado escolar:</h3>
                            <h5 className="meeting-info">5to C</h5>
                        </div>
                        <div className="col-md-4 col-6">
                            <h3 className="dash-teachers__title mt-0">Profesor:</h3>
                            <h5 className="meeting-info">Sara Molina</h5>
                        </div>
                    </div>
                    <section className="row video-detail">
                        <article className="col-sm-9 video-meeting">
                            <h2 className="meeting-title">Junta inicio de ciclo</h2>
                            <div className="embed-responsive embed-responsive-16by9">
                               {
                                     //require('html-react-parser')(link)
                               }
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-6">
                                    <div className="meeting-text my-3">
                                        <p><i className="far fa-clock"></i>9 de Feb, 10:00 hrs.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 text-right mt-2">
                                    <a href="#" download className="btn-border-blue btn-sm align-items-center">
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
                        <div className="col-9">
                            <Poll
                            />
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
