import React, { Fragment } from "react";
import Footer from './Footer';

import { Link } from "react-router-dom";


const UserSelecter = () => {
  return (
    <Fragment>
      <section className="user-selecter">
        <div className="user-selecter-flex">
          <div className="col-12 mt-3 text-center">
            <img src="./assets/img/logo-punto-school.png" className="img-fluid" alt="Logotipo" />
            <h1 className="user-selecter__title">Crear Cuenta</h1>
          </div>
          <div className="user-selecter__btns">
            <Link to="/TeacherLogin"><button className="btn-yellow-gradient">Soy Maestro</button></Link>
            <Link to="/ParentsLogin"><button className="btn-blue-gradient">Soy Padre de Familia</button></Link>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default UserSelecter;
