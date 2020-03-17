import React, { useState, Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuTeachers from "./MenuTeachers";
import Meeting from '../teachers/Meeting'

const DashboardTeachers = ({setLoginTeacher, login, setLogin, meetings, setFilterInput}) => {

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
        <section className="dashboard">
          <div className="container-fluid">
            <div className="row">
              <MenuTeachers />
              <main className="dash-main dash-teachers col-md-10 col-sm-9">
                <div className="row">
                  <div className="col-sm-9">
                    <h1 className="dash-new-meeting__title">Juntas agendadas</h1>
                    {/* <h3 className="dash-teachers__title">Profesor(a)</h3>
                                  <p className="dash-teachers__info">Sara Molina<p>*/}
                  </div>
                  <div className="col-sm-3 dash-teachers__search-nav mb-3">
                    <input 
                      type='search' 
                      className="dash-teachers__input" 
                      placeholder='Buscar por título de junta'
                      name='filterInput'
                      onChange={handleChange}
                    />
                    <span className="dash-teachers__filter-icon">
                      <i class="fas fa-filter fa-fw"></i>
                    </span>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-sm-9 col-12 scroll-sm">
                    { 
                      meetings.length > 0 
                      ?
                        meetings.map(meeting => (
                          <Meeting
                          key={meeting.id}
                          meeting={meeting}
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
