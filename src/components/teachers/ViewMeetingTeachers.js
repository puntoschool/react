import React, { Fragment, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuTeachers from "./MenuTeachers";
import PollingTeachers from './PollingTeachers'
import Chat from '../Chat'
import LoadFile from "../LoadFile";


const ViewMeetingTeachers = ({setLoginTeacher, login, setLogin, meetings, filterTeacherMeeting, setFilterTeacherMeeting, chat, setChat, collapse, setCollapse, filterParentMeeting}) => {

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

    const [file, setFile] = useState('')

  
    if(file){
        filterTeacherMeeting.file = file.customFile
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
                                        <p><i className="far fa-clock"></i>{getD+1} de {getM}, {info.startTime} hrs.</p>
                                    </div>
                                    <div className="meeting-text my-3">
                                        <p><i className="fas fa-users"></i>{info.grade} {info.group}</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 text-right mt-2">
                                 
                                  {!filterTeacherMeeting.file ? <LoadFile
                                    setFile={setFile}
                                    file={file}
                                    filterTeacherMeeting={filterTeacherMeeting}
                                 />: <p>Minuta cargada:<b>{filterTeacherMeeting.file}</b> </p>}
                                 
                                </div>
                            </div>
                        </article>
                        <div className="col-sm-3 meeting-chat">
                            <h5 className="yellow-color bold">Preguntas</h5>
                            <Chat
                                login={login}
                                meetings={meetings}
                                filterTeacherMeeting={filterTeacherMeeting}
                                setFilterTeacherMeeting={setFilterTeacherMeeting}
                                chat={chat}
                                setChat={setChat}
                                filterParentMeeting={filterParentMeeting}
                            />
                        </div>
                        <div className="col-md-6 col-sm-9 col-12 meeting-poll">
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
