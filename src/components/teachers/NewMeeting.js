import React, { Fragment, useState, useEffect } from "react";
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
      <MenuTeachers />

      <main className="dash-new-meeting col-md-10 col-sm-9">
        <div className="justify-content-center">
          <h1 className="dash-new-meeting__title">Agendar Junta</h1>

          <form className="">
            <div className="col-6">
              <div className="d-flex">
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

              <div className="row">

                <div className="col-6 d-flex align-items-center">
                  <label className="labels d-flex align-items-center" for="grade">
                  <i class="fas fa-user-graduate ml-2"></i> Grado 
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
                  <i class="fas fa-users ml-2"></i> Grupo
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

              <div className="d-flex">
                <label className="labels" style={{lineHeight:'1'}} for="duration">
                  Duración estimada:
                </label>
                <input type="text" className="line" id="duration" />
              </div>

              <div className="mb-3">
                <label className="labels" for="date">
                  Hora de Inicio:
                </label>
                <input type="date" className="mr-4" id="date" />
                <input type="time" className="" id="time" />
              </div>

              <div className="mb-3">
                <label className="labels" for="date">
                  Hora de Fin:
                </label>
                <input type="date" className="mr-4" id="date" />
                <input type="time" className="" id="time" />
              </div>
            </div>

              <div className="d-flex">
                <label className="labels" for="link">
                  Link de junta:
                </label>
                <input type="url" className="line" id="link" />
              <label className="labels text-pink" for="link">
                Ver ID
              </label>
              <a className="labels" href="#" style={{lineHeight:'1'}}>¿Cómo crear un link?</a>
              </div>

            <div className="text-center">
            <button type="submit" onClick={handleAdd} className="btn-pink-gradient">
              Crear
            </button>
            </div>
          </form>
        </div>
      </main>
    </Fragment>
  );
};

export default NewMeeting;
