import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const MenuTeachers = ({setLoginTeacher, setLoginParent, login, setLogin}) => {
  
  const {fullName, userType} = login

  const handleLogout = () =>{

    if(userType === 'parent'){
      setLoginParent(false)
      setLogin({})
    }else if(userType === 'teacher'){
      setLoginTeacher(false)
      setLogin({})
    }
  }

  return (
    <Fragment>
      <aside className="dash-menu col-md-2 col-sm-3">
        <nav className="navbar navbar-expand-sm">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="dash-nav d-flex d-sm-none justify-content-between mb-5">
              <li className="text-left ml-0">
                <i className="fas fa-user mr-1"></i>
                <h5>{fullName}
                  <span className="d-block">{userType}</span>
                </h5>
              </li>
              <li>
                <Link to={"/DashboardTeachers"}><i className="fas fa-home"></i></Link>
              </li>
              <li>
                <Link to=""><i onClick={handleLogout} className="fas fa-sign-out-alt"></i></Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink activeClassName="is-selected"  className="nav-link" to={'/DashboardTeachers'} >
                  <i className="fas fa-calendar-alt fa-fw"></i>
                  <span>Calendario de Juntas</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="is-selected"  to={'/meetingHistory'} className="nav-link">
                  <i className="fas fa-folder-open fa-fw"></i>
                  <span>Historial de Juntas</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="is-selected" to={"/NewMeeting"} className="nav-link">
                  <i className="far fa-calendar-check fa-fw"></i>
                  <span>Agendar Nueva Junta</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </Fragment>
  );
};

export default MenuTeachers;
