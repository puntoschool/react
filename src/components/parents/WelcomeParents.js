import React, { Fragment } from "react";
import MenuParents from "./MenuParents";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const WelcomeParents = ({setLoginParent, login, setLogin}) => {

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
                <main className="dash-main col-md-10 col-sm-9 dash-welcome">
                  <section className="row justify-content-center">
                    <div className="col-md-8 col-sm-9 col-10 mb-sm-5">
                      <h1 className="title-welcome">¡HOLA!</h1>
                      <p className="subtitle-welcome">
                        Bienvenido al administrador escolar
                      </p>
                      <form className="form-group parents-login__inputs mt-5">
                        <label htmlFor="enterID">Ingresa el ID de tu junta</label>
                        <input type="text" name="enterID" id="enterID" placeholder="Número de ID otorgado por el maestro" className="mt-0"/>
                        <Link to="/DetailMeeting" className="btn-blue-gradient">Ir a la junta</Link>
                      </form>
                    </div>

                    <div className="col-md-11 mt-2">
                      <img src="./assets/img/welcome-kids.png" className="img-fluid"
                      alt="welcome_image" />
                    </div>
                  </section>
                </main>
              </div>
            </div>
          </section>
          <Footer />
        </div>
    </Fragment>
  );
};

export default WelcomeParents;
