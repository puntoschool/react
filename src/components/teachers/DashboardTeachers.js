import React, { Fragment, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuTeachers from "./MenuTeachers";
import Meeting from '../teachers/Meeting'

const DashboardTeachers = ({setLoginTeacher, login, setLogin, meetings, setMeetings}) => {

  const handleChange = e => {
    setFilterInput (e.target.name= e.target.value)
  }

  const handleDeleteMeeting = (meetingId) => {
     meetings = meetings.filter( meeting => meeting.id !== meetingId)
     setMeetings(meetings)
  }

  
  const filteredTeachersMeetings = meetings.filter( meeting => meeting.user.toLowerCase().includes(login.userName.toLowerCase()))

  // Creo el state para las juntas filtradas
  const [filterInput, setFilterInput] = useState('')

  // funcion para obtener las juntas filtradas
  const filteredMeetings = filteredTeachersMeetings.filter( meeting => meeting.title.toLowerCase().includes(filterInput.toLowerCase()))

  return (
    <Fragment>
      <div className="admin teachers">
        <Header 
          setLoginTeacher={setLoginTeacher}
          login={login}
          setLogin={setLogin}
        />
        <section className="dashboard">
          <div className="container-fluid">
            <div className="row">
              <MenuTeachers 
                setLoginTeacher={setLoginTeacher}
                login={login}
                setLogin={setLogin}
              />
              <main className="dash-main dash-teachers col-md-10 col-sm-9">
                <div className="row">
                  <div className="col-sm-8">
                    <h1 className="dash-new-meeting__title">Juntas agendadas</h1>
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
                    { 
                      filteredTeachersMeetings.length > 0 
                      ?
                      filteredMeetings.map(meeting => (
                          <Meeting
                          key={meeting.id}
                          meeting={meeting}
                          handleDeleteMeeting={handleDeleteMeeting}
                          /> 
                        ))
                      : <b>No hay juntas programadas</b>
                    }                                   
                  </div>
                </div>
              </main>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </Fragment>
  )
}

export default DashboardTeachers
