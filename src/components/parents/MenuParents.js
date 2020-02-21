import React, { Fragment } from "react";

const MenuParents = () => {
  return (
    <Fragment>
      <aside class="dash-menu col-md-2 col-sm-3">
        <nav class="navbar navbar-expand-sm">
          <button class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="dash-nav d-flex d-sm-none justify-content-between mb-5">
              <li class="text-left ml-0">
                <i class="fas fa-user mr-1"></i>
                <h5>
                  José Martínez Fernández <span class="d-block">Dirección</span>
                </h5>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-home"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-sign-out-alt"></i>
                </a>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fas fa-calendar-alt fa-fw"></i>
                  <span>Calendario de juntas</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fas fa-chalkboard-teacher fa-fw"></i>
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
