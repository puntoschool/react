import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuParents from "./MenuParents";
import MeetingVideo from '../teachers/MeetingVideo'

const MeetingList = ({setLoginParent, login, setLogin, meetings}) => {


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
                <section className="video-list">
                  <h2>Historial de juntas</h2>
                  {meetings.length > 0 
                      ?
                    meetings.map(meetingVideo =>(
                      <MeetingVideo 
                        key={meetingVideo.id}
                        meetingVideo={meetingVideo}
                      />
                    ))
                    : <b>No hay juntas programadas</b>
                  }
                </section>
              </main>s
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </Fragment>
  );
};

export default MeetingList;
