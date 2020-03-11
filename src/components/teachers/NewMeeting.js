import React, { Fragment, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuTeachers from "./MenuTeachers";
import Error from '../Error'
import uuid from 'uuid/v4'

const NewMeeting = ({newMeeting, setLoginTeacher, login, setLogin}) => {

  const [meeting, setMeeting] = useState({
    title: "",
    grade: "",
    group: "",
    date: "",
    startTime: "",
    endTime: "",
    link: ""
  });

  const handleChange = e => {
    setMeeting({
      ...meeting,
      [e.target.name]: e.target.value
    });
  };

  const [ error, setError ] = useState(false)
  const [ errorType, setErrorType ] = useState('')

  const handleSubmit = e => {
    e.preventDefault();

    // Valido informacion capturada
    if (
      meeting.title.trim()      === "" ||
      meeting.grade.trim()      === "" ||
      meeting.group.trim()      === "" ||
      meeting.startTime.trim()  === "" ||
      meeting.link.trim()       === "" ||
      meeting.endTime.trim()    === "" ||
      meeting.date.trim()       === ""
    ) {
      setError(true);
      setErrorType("Todos los campos son obligatorios");
      return;
    } else setError(false);
    
     // Asignarle un id a la junta 
     meeting.id = uuid() // instale el paquete uuid para generar ids por cada cita npm install uuid

    newMeeting(meeting)

    //Limpio el formulario de información
   setMeeting ({
    title: "",
    grade: "",
    group: "",
    date: "",
    startTime: "",
    endTime: "",
    link: ""
   })
  };
  
  return (
    <Fragment>
      <div className="admin teachers">
        <Header 
          setLoginTeacher={setLoginTeacher}
          login={login}
          setLogin={setLogin}
        />
        <section className="dashboard mt-80">
          <div className="container-fluid">
            <div className="row">
              <MenuTeachers />
              <main className="dash-new-meeting col-md-10 col-sm-9">
                <div className="justify-content-center">
                  <h1 className="dash-new-meeting__title">Agendar Junta</h1>

                  <form className="row justify-content-center"onSubmit={handleSubmit}>
                    <div className="col-sm-8 col-11">
                      <div className="d-flex mb-5">
                        <label className="labels" for="title">
                          Titulo:
                        </label>
                        <input
                          type="text"
                          className="line"
                          id="title"
                          placeholder="Ingrese el tema de la junta"
                          name="title"
                          onChange={handleChange}
                          value = {meeting.title}
                        />
                      </div>

                      <div className="row mb-5">
                        <div className="col-6 d-flex align-items-center">
                          <label
                            className="labels d-flex align-items-center"
                            for="grade"
                          >
                            <i class="fas fa-user-graduate ml-2 pr-1"></i> Grado
                          </label>
                          <select
                            id="grade"
                            name="grade"
                            onChange={handleChange}
                            value={meeting.grade}
                          >
                            <option selected>Selecciona...</option>
                            <option value="1ro">1ro</option>
                            <option value="2do">2do</option>
                            <option value="3ro">3ro</option>
                            <option value="4to">4to</option>
                            <option value="5to">5to</option>
                            <option value="6to">6to</option>
                          </select>
                        </div>

                        <div className="col-6 d-flex align-items-center">
                          <label
                            className="labels d-flex align-items-center"
                            for="group mr-2"
                          >
                            <i class="fas fa-users ml-2 pr-1"></i> Grupo
                          </label>
                          <select
                            id="group"
                            name="group"
                            onChange={handleChange}
                            value={meeting.group}
                          >
                            <option selected>Selecciona...</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                          </select>
                        </div>
                      </div>

                      <div className="row mb-5">
                        <label className="labels col-sm-3 col-5" for="date">
                          Fecha:
                        </label>
                        <input
                          type="date"
                          className="line col-sm-9 col-7"
                          id="date"
                          name="date"
                          onChange={handleChange}
                          value = {meeting.date}
                        />
                      </div>

                      <div className="row mb-5">
                        <label
                          className="labels col-sm-3 col-5"
                          for="startTime"
                        >
                          Hora de Inicio:
                        </label>
                        <input
                          type="time"
                          className="line col-sm-9 col-7"
                          id="startTime"
                          name="startTime"
                          onChange={handleChange}
                          value = {meeting.startTime}
                        />
                      </div>

                      <div className="row mb-5">
                        <label className="labels col-sm-3 col-5" for="endTime">
                          Hora de Fin:
                        </label>
                        <input
                          type="time"
                          className="line col-sm-9 col-7"
                          id="endTime"
                          name="endTime"
                          onChange={handleChange}
                          value = {meeting.endTime}
                        />
                      </div>

                      <div className="row d-flex mb-1">
                        <label className="labels col-sm-3 col-5" for="link">
                          Link de junta:
                        </label>
                        <input
                          type="url"
                          className="line col-sm-7 col-5"
                          id="link"
                          name="link"
                          onChange={handleChange}
                          value={meeting.link}
                        />
                        <button
                          type="button"
                          className="btn labels text-yellow col-2"
                          for="link"
                        >
                          Ver ID
                        </button>
                      </div>
                      <div className="text-right mb-5">
                        <a className="labeles light-grey" href="#">
                          ¿Cómo crear un link?
                        </a>
                      </div>
                      <div className="text-center mb-3">
                      {error ? <Error className='error-red' message={errorType}/> : null}
                        <button
                          type="submit"
                          className="btn-border-yellow"
                          onSubmit={handleSubmit}
                        >Crear
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
