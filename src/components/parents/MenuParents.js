import React, { Fragment } from "react";

const MenuParents = () => {
  return (
    <Fragment>
      <aside className="dash-menu col-md-2 col-sm-3">
        <nav className="navbar navbar-expand-sm">
          <button className="navbar-toggler"
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
                  José Martínez Fernández <span className="d-block">Dirección</span>
                </h5>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-home"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-sign-out-alt"></i>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-calendar-alt fa-fw"></i>
                  <span>Calendario de juntas</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-chalkboard-teacher fa-fw"></i>
                  <span>Historial de juntas</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </Fragment>
  );
};

export default MenuParents;
