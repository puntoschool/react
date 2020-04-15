import React, { Fragment, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuTeachers from "./MenuTeachers";
import Meeting from '../teachers/Meeting'
import { Redirect } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

const DashboardTeachers = ({setLoginTeacher, login, setLogin, meetings, setMeetings, filterTeacherMeeting, setFilterTeacherMeeting, setChat, setCollapse, collapse}) => {

  const handleChange = e => {
    setFilterInput (e.target.name= e.target.value)
  }

  const handleDeleteMeeting = (meetingId) => {
     meetings = meetings.filter( meeting => meeting.id !== meetingId)
     setMeetings(meetings)
  }

  
  const filteredTeachersMeetings = meetings.filter( meeting => meeting.user.includes(login.userName))

  // Creo el state para las juntas filtradas
  const [filterInput, setFilterInput] = useState('')

  // funcion para obtener las juntas filtradas
  const filteredMeetings = filteredTeachersMeetings.filter( meeting => meeting.title.toLowerCase().includes(filterInput.toLowerCase()))

  // Modal
  const [isOpenVideo, setIsOpenVideo] = useState(false);

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
                setCollapse={setCollapse}
              />
              <main className={!collapse ? 'dash-main dash-teachers col-md-9 col-sm-8': 'dash-main dash-teachers col-12'}>
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
                          setFilterTeacherMeeting={setFilterTeacherMeeting}
                          filterTeacherMeeting={filterTeacherMeeting}
                          setChat={setChat}
                          /> 
                        ))
                      : <b>No hay juntas programadas</b>
                    }                                   
                    {filterTeacherMeeting ? <Redirect from="/MeetingList" to="/ViewMeetingTeachers" />: null }
                    <div className="text-right mt-5">
                    <button type="button" className="btn btn-yellow"
                          onClick={() => setIsOpenVideo(true)}>
                          ¿Cómo crear un link?
                        </button>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </section>
        <Footer />
      </div>
      <Modal show={isOpenVideo} onHide={() => setIsOpenVideo(false)} className="modal fade modal-video">
        <Modal.Body>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5ij9nNr93Mo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-transparent color-white" onClick={() => setIsOpenVideo(false)}>Regresar <i className="fas fa-arrow-right"></i></button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default DashboardTeachers
