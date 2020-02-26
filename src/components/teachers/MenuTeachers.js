import React, { Fragment } from "react";

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
                <h5>
                  José Martínez Fernández{" "}
                  <span className="d-block">Dirección</span>
                </h5>
              </li>
              <li>
                <a href="dashboardSchool.html">
                  <i className="fas fa-home"></i>
                </a>{" "}
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-sign-out-alt"></i>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="levels.html">
                  <i className="fas fa-calendar-alt fa-fw"></i>
                  <span>Calendario de Juntas</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="verMaestros.html">
                  <i className="fas fa-folder-open fa-fw"></i>
                  <span>Historial de Juntas</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="verCicloEscolar.html">
                  <i className="far fa-calendar-check fa-fw"></i>
                  <span>Agendar Nueva Junta</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </Fragment>
  );
};

export default MenuTeachers;
