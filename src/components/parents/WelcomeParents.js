import React, { Fragment, useState } from "react";
import MenuParents from "./MenuParents";
import Header from "../Header";
import Footer from "../Footer";
import { Redirect } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

const WelcomeParents = ({
  setLoginParent,
  login,
  setLogin,
  meetings,
  setFilterParentMeeting,
  filterParentMeeting,
  setCollapse,
  collapse
}) => {
  // Creo el state para filtrar la junta por id
  const [filterParentInput, setFilterParentInput] = useState("");

  const [error, setError] = useState(false);

  // const [userMeeting, setUserMeeting]= useState([])

  const handleChange = e => {
    setFilterParentInput((e.target.name = e.target.value));
  };

  const handleClick = () => {
    // validaciones
    if (filterParentInput.trim()) {
      const filter = meetings.filter(meeting =>
        meeting.id.toLowerCase().includes(filterParentInput.toLowerCase())
      );

      if (
        typeof filter != "undefined" &&
        filter != null &&
        filter.length != null &&
        filter.length > 0
      ) {
        const noRepeatUserParent = filter[0].usersParents.includes(
          login.userName
        );

        if (!noRepeatUserParent) {
          filter[0].usersParents.push(login.userName);
          localStorage.setItem("meetings", JSON.stringify(meetings));
        }

        const fil = filter[0]
        setFilterParentMeeting(fil)
        
      }else{
        setError(true);
        return;
      }
    } else {
      setError(true);
      return;
    }
  };

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
                setCollapse={setCollapse}
              />
              <main className={!collapse ? 'dash-main col-md-9 col-sm-8 dash-welcome': 'dash-main col-12 dash-welcome'}>
                <section className="row justify-content-center">
                  <div className="col-md-8 col-sm-9 col-10 mb-sm-5">
                    <h1 className="title-welcome">¡HOLA!</h1>
                    <p className="subtitle-welcome">
                      Bienvenido al administrador escolar
                    </p>
                    <div className="row justify-content-center" style={"height:100%"}>
                      <div className="col-md-7 col-sm-10 col-12">
                        <form className="form-group parents-login__inputs mt-5">
                          <label htmlFor="enterID"> Ingresa el ID de tu junta</label>
                          <input
                            type="text"
                            name="enterID"
                            id="enterID"
                            onChange={handleChange}
                            placeholder="Número de ID otorgado por el maestro"
                            className="mt-0"
                          />
                          <button
                            type="button"
                            className="btn-blue-gradient"
                            onClick={handleClick}
                          >
                            {" "}
                            Ir a la junta{" "}
                          </button>
                        </form>

                        {error ? (
                          <SweetAlert
                            danger
                            title="Error"
                            onConfirm={() => {
                              return setError(false);
                            }}
                          >
                            {"Link no válido, favor de verificarlo"}
                          </SweetAlert>
                        ) : null}
                         
                        {filterParentMeeting ? <Redirect from="/WelcomeParents" to="/ViewMeeting" />: null }
                      </div>

                        {filterParentMeeting ? (
                          <Redirect
                            from="/WelcomeParents"
                            to="/ViewMeeting"
                          />
                        ) : null}
                    </div>
                  </div>

                  <div className="col-md-11 mt-2 align-self-end">
                    <img
                      src="./assets/img/welcome-kids.png"
                      className="img-fluid"
                      alt="welcome_image"
                    />
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
