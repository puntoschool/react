import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const MenuTeachers = () => {

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
                <h5> Nombre
                  <span className="d-block">Tipo de Usuario</span>
                </h5>
              </li>
              <li>
                <Link to="/">
                  <a href="#">
                    <i className="fas fa-sign-out-alt"></i>
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to={'/DashboardTeachers'} >
                  <i className="fas fa-calendar-alt fa-fw"></i>
                  <span>Calendario de Juntas</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/meetingHistory'} className="nav-link">
                  <i className="fas fa-folder-open fa-fw"></i>
                  <span>Historial de Juntas</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/NewMeeting"} className="nav-link">
                  <i className="far fa-calendar-check fa-fw"></i>
                  <span>Agendar Nueva Junta</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </Fragment>
  );
};

export default MenuTeachers;
