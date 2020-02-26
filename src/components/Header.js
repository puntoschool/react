import React, { Fragment } from "react";
import Login from "./Login";
import App from "../App";

const Header = (props) => {


  const { user, logout } = props
  
  return (
    <Fragment>
      <header className="dash-header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-2 col-sm-3 col-8">
              <img
                src="./assets/img/logo-punto-school.png"
                alt="logo Punto School"
                className="img-fluid logo"
              />
            </div>
            <div className="col-md-10 col-sm-9 col-4">
              <ul className="dash-nav d-none d-sm-flex">
                <li className="">
                  <h5>
                    {user.username}

                    <span className="d-block">Padre de Familia</span>
                  </h5>
                  <i className="fas fa-user"></i>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-home"></i>
                  </a>{" "}
                </li>
                <li>
                  <a href="#" onClick={logout}>
                    <i className="fas fa-sign-out-alt"></i>
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
