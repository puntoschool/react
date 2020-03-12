import React, { Fragment } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

const HeaderLogin = () => {
  
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
          </div>
        </div>
        <Link to={'/'} >Iniciar sesión</Link>
      </header>
    </Fragment>
  );
};

export default HeaderLogin;
