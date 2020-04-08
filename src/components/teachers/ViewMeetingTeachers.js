import React, { Fragment, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuTeachers from "./MenuTeachers";
import PollingTeachers from './PollingTeachers'


const ViewMeetingTeachers = ({setLoginTeacher, login, setLogin, meetings, filterTeacherMeeting, setFilterTeacherMeeting}) => {

    const info = filterTeacherMeeting

    var getM = new Date(info.date).getMonth()

    var getD = new Date(info.date).getDate()

    var month = []
    month[0] = "Ene"
    month[1] = "Feb"
    month[2] = "Mar"
    month[3] = "Abril"
    month[4] = "Mayo"
    month[5] = "Jun"
    month[6] = "Jul"
    month[7] = "Ago"
    month[8] = "Sep"
    month[9] = "Oct"
    month[10] = "Nov"
    month[11] = "Dic"

    getM = month[getM]

    const link = info.link.replace('560','100%').replace('315','100%')

    const [pollingQ, setPollingQ] = useState('')
    const [pollingA, setPollingA] = useState([])

    const a=pollingA
    const q=pollingQ

    if(a && q){
        filterTeacherMeeting.pollingA = a
        filterTeacherMeeting.pollingQ = q
        localStorage.setItem("meetings", JSON.stringify(meetings))
    }    
        

  return (
    <Fragment>
      <div className="admin teachers">
        <Header 
            setLoginTeacher={setLoginTeacher}
            login={login}
            setLogin={setLogin}
        />
        <section className="dashboard mt-80">
          <div className="container-fluid">
            <div className="row">
              <MenuTeachers 
                setLoginTeacher={setLoginTeacher}
                login={login}
                setLogin={setLogin}
                setFilterTeacherMeeting={setFilterTeacherMeeting}
                filterTeacherMeeting={filterTeacherMeeting}
              />
              <main className="dash-main col-md-10 col-sm-9 dashboard-meetings">
                    <div className="row mb-4">
                        <div className="col-md-4 col-6">
                            <h3 className="dash-teachers__title mt-0">Grado escolar:</h3>
                            <h5 className="meeting-info">{info.grade} {info.group}</h5>
                        </div>
                        <div className="col-md-4 col-6">
                            <h3 className="dash-teachers__title mt-0">Profesor:</h3>
                            <h5 className="meeting-info">{info.userName}</h5>
                        </div>
                    </div>
                    <section className="row video-detail">
                        <article className="col-sm-9 video-meeting">
                            <h2 className="meeting-title">{info.title}</h2>
                            <div className="embed-responsive embed-responsive-16by9">
                               {
                                     require('html-react-parser')(link)
                               }
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-6">
                                    <div className="meeting-text my-3">
                                        <p><i className="far fa-clock"></i>{getD+1} de {getM}, {info.startTime} hrs.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 text-right mt-2">
                                    <button download className="btn-border-yellow btn-sm align-items-center">
                                        <i className="fas fa-download"></i> Cargar Minuta
                                    </button>
                                </div>
                            </div>
                        </article>
                        <div className="col-sm-3 meeting-chat">
                            <h5 className="yellow-color bold">Preguntas</h5>
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
                            <PollingTeachers 
                                meetings={meetings}
                                filterTeacherMeeting={filterTeacherMeeting}
                                setPollingQ={setPollingQ}
                                pollingQ={pollingQ}
                                pollingA={pollingA}
                                setPollingA={setPollingA}
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

export default ViewMeetingTeachers;
