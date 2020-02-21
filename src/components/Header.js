import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <header class="dash-header">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-2 col-sm-3 col-8">
              <img
                src="./assets/img/logo-punto-school.png"
                alt="logo Punto School"
                class="img-fluid logo"
              />
            </div>
            <div class="col-md-10 col-sm-9 col-4">
              <ul class="dash-nav d-none d-sm-flex">
                <li class="">
                  <h5>
                    José Martínez Fernández{" "}
                    <span class="d-block">Dirección</span>
                  </h5>
                  <i class="fas fa-user"></i>
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-home"></i>
                  </a>{" "}
                </li>
                <li>
                  <a href="#">
                    <i class="fas fa-sign-out-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
