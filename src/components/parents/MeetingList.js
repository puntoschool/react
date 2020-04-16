import React, { Fragment, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuParents from "./MenuParents";
import MeetingVideoParents from './MeetingVideoParents'

import { Redirect } from "react-router-dom";

const MeetingList = ({setLoginParent, login, setLogin, meetings, filterParentMeeting, setFilterParentMeeting, setCollapse,
  collapse}) => {

  const meetingsUserParent = meetings.filter( meeting => meeting.usersParents.includes(login.userName))

  // Creo el state para las juntas filtradas
  const [filterInput, setFilterInput] = useState('')

  // funcion para obtener las juntas filtradas
  const filteredMeetings = meetingsUserParent.filter( meeting => meeting.title.toLowerCase().includes(filterInput.toLowerCase()))

  const handleChange = e => {
    setFilterInput (e.target.name= e.target.value)
  }

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
                setCollapse={setCollapse}
              />
              <main className={!collapse ? 'dash-main col-md-9 col-sm-8 dashboard-meetings': 'dash-main col-12 dashboard-meetings'}>
                <div className="row">
                  <div className="col-sm-8">
                    <h1 className="dash-new-meeting__title">Historial de juntas</h1>
                  </div>
                  <div className="col-sm-4 dash-parents__search-nav mb-3">
                    <input 
                      type='search' 
                      className="dash-parents__input" 
                      placeholder='Buscar por título de junta'
                      name='filterInput'
                      onChange={handleChange}
                    />
                    <span className="dash-parents__filter-icon">
                      <i className="fas fa-filter fa-fw"></i>
                    </span>
                  </div>
                </div>

                <div className="video-list">
                  {meetingsUserParent.length > 0 
                      ?
                      filteredMeetings.map(meetingVideoParents =>(
                      <MeetingVideoParents 
                        key={meetingVideoParents.id}
                        meetingVideoParents={meetingVideoParents}
                        setFilterParentMeeting={setFilterParentMeeting}
                      />
                    ))
                    : <b>No hay juntas programadas</b>
                  }
      
                {filterParentMeeting ? <Redirect from="/MeetingList" to="/ViewMeeting" />: 
                null }
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

export default MeetingList;
