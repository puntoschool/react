import React, { Fragment, useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuTeachers from "./MenuTeachers";

// set localstorage
/*
function App() {
  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    const accounts = window.localStorage.getItem('accounts');

    if (accounts) {
      setAccounts(JSON.parse(accounts))
    }
  })

  const handleAdd = () => {
    const _accounts = [ ...accounts, 'Hola nueva cuenta' ]
    localStorage.setItem('accounts', JSON.stringify(_accounts))
    setAccounts(_accounts)
  }

  const handleClear = () => {
    const _accounts = [ ...accounts, 'Hola nueva cuenta' ]
    localStorage.setItem('accounts', JSON.stringify(_accounts))
    setAccounts(_accounts)
  }

  return (
    <div className="App">
      <button onClick={handleAdd}>Añadir</button>
      <button onClick={handleClear}>Borrar</button>
      <h1>Cuentas</h1>
      { accounts.map(a => <div>Cuenta! {a}</div>)}
    </div>
  )

}
*/

const NewMeeting = () => {
  const [bookedMeting, setBookedMeeting] = useState([])

  useEffect(() => {
    const bookedMeting = window.localStorage.getItem('bookedMeting');

    if (bookedMeting) {
      setBookedMeeting(JSON.parse(bookedMeting))
    }
  })

  const handleAdd = () => {
    const bookedMeting = [ ...bookedMeting, 'Hola nueva cuenta' ]
    localStorage.setItem('bookedMeting', JSON.stringify(bookedMeting))
    setBookedMeeting(bookedMeting)
  }

  return (
    <Fragment>
    <div className="teachers">
    <Header />
    <section className="dashboard mt-80">
        <div className="container-fluid">
            <div className="row">  
            < MenuTeachers/>
            <main className="dash-new-meeting col-md-10 col-sm-9">
        <div className="justify-content-center">
          <h1 className="dash-new-meeting__title">Agendar Junta</h1>

          <form className="row justify-content-center">
            <div className="col-sm-8 col-11">
              <div className="d-flex mb-5">
                <label className="labels" for="title">
                  Titulo:{" "}
                </label>
                <input
                  type="text"
                  className="line"
                  id="title"
                  placeholder="Ingrese el tema de la junta"
                />
              </div>

              <div className="row mb-5">

                <div className="col-6 d-flex align-items-center">
                  <label className="labels d-flex align-items-center" for="grade">
                  <i class="fas fa-user-graduate ml-2 pr-1"></i> Grado 
                  </label>
                  <select id="grade">
                    <option selected>Selecciona...</option>
                    <option value="1">1ro</option>
                    <option value="2">2do</option>
                    <option value="3">3ro</option>
                    <option value="1">4to</option>
                    <option value="2">5to</option>
                    <option value="3">6to</option>
                  </select>
                </div>

                <div className="col-6 d-flex align-items-center">
                  <label className="labels d-flex align-items-center" for="group mr-2">
                  <i class="fas fa-users ml-2 pr-1"></i> Grupo
                  </label>
                  <select id="group">
                    <option selected>Selecciona...</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                    <option value="3">D</option>
                    <option value="3">E</option>
                    <option value="3">F</option>
                  </select>
                </div>
              </div>

              <div className="row mb-5">
                <label className="labels col-sm-3 col-5" for="date">
                  Fecha:
                </label>
                <input type="date" className="line col-sm-9 col-7" id="date" />
              </div>

              <div className="row mb-5">
                <label className="labels col-sm-3 col-5" for="time">
                  Hora de Inicio:
                </label>
                <input type="time" className="line col-sm-9 col-7" id="time" />
              </div>

              <div className="row mb-5">
                <label className="labels col-sm-3 col-5" for="date">
                  Hora de Fin:
                </label>
                <input type="time" className="line col-sm-9 col-7" id="time" />
              </div>

              <div className="row d-flex mb-1">
                <label className="labels col-sm-3 col-5" for="link">
                  Link de junta:
                </label>
                <input type="url" className="line col-sm-7 col-5" id="link" />
                <button className="btn labels text-yellow col-2" for="link">
                  Ver ID
                </button>
              </div>
              <div className="text-right mb-5">
                <a className="labeles light-grey" href="#">¿Cómo crear un link?</a>
              </div>
              <div className="text-center mb-3">
                <button type="submit" onClick={handleAdd} className="btn-border-yellow">
                  Crear
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
            </div>
        </div>
    </section>
    <Footer />
    </div>
    </Fragment>
  );
};

export default NewMeeting;
