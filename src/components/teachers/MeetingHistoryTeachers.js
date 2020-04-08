import React, { Fragment, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuTeachers from "./MenuTeachers";
import MeetingVideoTeachers from './MeetingVideoTeachers'

import { Redirect } from "react-router-dom";

const MeetingHistoryTeachers = ({setLoginTeacher, login, setLogin, meetings, filterTeacherMeeting, setFilterTeacherMeeting}) => {

  const filteredTeachersMeetings = meetings.filter( meeting => meeting.user.includes(login.userName))

  // Creo el state para las juntas filtradas
  const [filterInput, setFilterInput] = useState('')

  // funcion para obtener las juntas filtradas
  const filteredMeetings = filteredTeachersMeetings.filter( meeting => meeting.title.toLowerCase().includes(filterInput.toLowerCase()))

  const handleChange = e => {
    setFilterInput (e.target.name= e.target.value)
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
              />
              <main className="dash-main col-md-10 col-sm-9 dashboard-meetings">
                <div className="row">
                  <div className="col-sm-8">
                    <h1 className="dash-new-meeting__title">Historial de juntas</h1>
                  </div>
                  <div className="col-sm-4 dash-teachers__search-nav mb-3">
                    <input 
                      type='search' 
                      className="dash-teachers__input" 
                      placeholder='Buscar por título de junta'
                      name='filterInput'
                      onChange={handleChange}
                    />
                    <span className="dash-teachers__filter-icon">
                      <i className="fas fa-filter fa-fw"></i>
                    </span>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-sm-11 col-12 scroll-sm">
                    <div className="video-list">
                      {filteredTeachersMeetings.length > 0 
                          ?
                          filteredMeetings.map(meetingVideoTeachers =>(
                          <MeetingVideoTeachers
                            key={meetingVideoTeachers.id}
                            meetingVideoTeachers={meetingVideoTeachers}
                            setFilterTeacherMeeting={setFilterTeacherMeeting}
                          />
                        ))
                        : <b>No hay juntas programadas</b>
                      }

                      {filterTeacherMeeting ? <Redirect from="/MeetingList" to="/ViewMeetingTeachers" />: null }
                    </div>
                  </div>
                </div>
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
