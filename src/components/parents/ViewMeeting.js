import React, { Fragment, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuParents from "./MenuParents";
import Polling from "./Polling"
import Chat from '../Chat'

const ViewMeeting = ({setLoginParent, login, setLogin, filterParentMeeting, setFilterParentMeeting, meetings, chat, setChat, setCollapse, collapse, filterTeacherMeeting}) => {

    const info = filterParentMeeting

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
                filterParentMeeting={filterParentMeeting}
                setFilterParentMeeting={setFilterParentMeeting}
                chat={chat}
                meetings={meetings}
                setCollapse={setCollapse}
              />
              <main className={!collapse ? 'dash-main col-md-9 col-sm-8 dashboard-meetings': 'dash-main col-12 dashboard-meetings'}>
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
                                        <p><i className="far fa-clock"></i> {getD+1} de {getM}, {info.startTime} hrs.</p>
                                        <p><i className="fas fa-users"></i> {info.grade} {info.group}</p>
                                        <p><i className="fas fa-chalkboard-teacher"></i> {info.userName}</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 text-right mt-2">
                                    <button download className="btn-border-blue btn-sm align-items-center">
                                        <i className="fas fa-download"></i> Descargar Minuta
                                    </button>
                                </div>
                            </div>
                        </article>
                        <div className="col-sm-3 meeting-chat">
                            <h5 className="blue-color bold">Preguntas</h5>
                            <Chat
                                login={login}
                                meetings={meetings}
                                filterParentMeeting={filterParentMeeting}
                                setFilterParentMeeting={setFilterParentMeeting}
                                chat={chat}
                                setChat={setChat}
                                filterTeacherMeeting={filterTeacherMeeting}
                            />
                        </div>    
                        <div className="col-md-6 col-sm-9 col-12 view-poll">
                            <Polling
                                filterParentMeeting={filterParentMeeting}
                                setFilterParentMeeting={setFilterParentMeeting}
                                meetings={meetings}
                                login={login}
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

export default ViewMeeting;
