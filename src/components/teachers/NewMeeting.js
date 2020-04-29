import React, { Fragment, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuTeachers from "./MenuTeachers";
import uuid from "uuid/v4";
import SweetAlert from "react-bootstrap-sweetalert";
import Modal from "react-bootstrap/Modal";

const NewMeeting = ({ newMeeting, setLoginTeacher, login, setLogin, isToggled, setIsToggled, collapse, setCollapse}) => {
  const [meeting, setMeeting] = useState({
    title: "",
    grade: "",
    group: "",
    date: "",
    startTime: "",
    endTime: "",
    link: "",
    usersParents:[],
    pollingA:[],
    pollingQ:'',
    userParentsVote:[],
    chat:[],
    file:''
  });

  const handleChange = e => {
    setMeeting({
      ...meeting,
      [e.target.name]: e.target.value
    });
  };

  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [confirm, setConfirm] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    // Valido informacion capturada
    if (
      meeting.title.trim() === "" ||
      meeting.grade.trim() === "" ||
      meeting.group.trim() === "" ||
      meeting.startTime.trim() === "" ||
      meeting.link.trim() === "" ||
      meeting.endTime.trim() === "" ||
      meeting.date.trim() === ""
    ) {
      setError(true);
      setErrorType("Todos los campos son obligatorios");
      return;
    } else if (!meeting.link.includes("<iframe")) {
      setError(true);
      setErrorType("Favor de ingresar un link valido");
      return;
    } else setError(false);
    setConfirm(true);

    // Asignarle un id a la junta
    meeting.id = uuid(); // instale el paquete uuid para generar ids por cada cita npm install uuid

    meeting.user = login.userName
    meeting.userName = login.fullName
    
    newMeeting(meeting);

    //Limpio el formulario de información
    setMeeting({
      title: "",
      grade: "",
      group: "",
      date: "",
      startTime: "",
      endTime: "",
      link: ""
    });
  };
  // Modal
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
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
              <MenuTeachers
                setLoginTeacher={setLoginTeacher}
                login={login}
                setLogin={setLogin}
                setCollapse={setCollapse}
              />
              <main className={!collapse ? 'dash-new-meeting col-md-9 col-sm-8': 'dash-new-meeting col-12'}>
                <div className="justify-content-center">
                  <h1 className="dash-new-meeting__title">Agendar Junta</h1>

                  <form
                    className="row justify-content-center mt-5 mt-sm-0"
                    onSubmit={handleSubmit}
                  >
                    <div className="col-sm-8 col-11">
                      <div className="d-flex mb-5">
                        <label className="labels" htmlFor="title">
                          Titulo:
                        </label>
                        <input
                          type="text"
                          className="line"
                          id="title"
                          placeholder="Ingrese el tema de la junta"
                          name="title"
                          onChange={handleChange}
                          value={meeting.title}
                        />
                      </div>

                      <div className="row mb-5">
                        <div className="col-sm-6 col-12 d-flex align-items-center mb-5 mb-sm-0">
                          <label
                            className="labels d-flex align-items-center"
                            htmlFor="grade"
                          >
                            <i className="fas fa-user-graduate ml-2 pr-1"></i>{" "}
                            Grado
                          </label>
                          <select
                            id="grade"
                            name="grade"
                            onChange={handleChange}
                            value={meeting.grade}
                          >
                            <option selected >Selecciona...</option>
                            <option value="1ro">1ro</option>
                            <option value="2do">2do</option>
                            <option value="3ro">3ro</option>
                            <option value="4to">4to</option>
                            <option value="5to">5to</option>
                            <option value="6to">6to</option>
                          </select>
                        </div>

                        <div className="col-sm-6 col-12 d-flex align-items-center">
                          <label
                            className="labels d-flex align-items-center"
                            htmlFor="group mr-2"
                          >
                            <i className="fas fa-users ml-2 pr-1"></i> Grupo
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
                        <label className="labels col-sm-3 col-5" htmlFor="date">
                          Fecha:
                        </label>
                        <input
                          type="date"
                          className="line col-sm-9 col-7"
                          id="date"
                          name="date"
                          onChange={handleChange}
                          value={meeting.date}
                        />
                      </div>

                      <div className="row mb-5">
                        <label
                          className="labels col-sm-3 col-5"
                          htmlFor="startTime"
                        >
                          Hora de Inicio:
                        </label>
                        <input
                          type="time"
                          className="line col-sm-9 col-7"
                          id="startTime"
                          name="startTime"
                          onChange={handleChange}
                          value={meeting.startTime}
                        />
                      </div>

                      <div className="row mb-5">
                        <label className="labels col-sm-3 col-5" htmlFor="endTime">
                          Hora de Fin:
                        </label>
                        <input
                          type="time"
                          className="line col-sm-9 col-7"
                          id="endTime"
                          name="endTime"
                          onChange={handleChange}
                          value={meeting.endTime}
                        />
                      </div>

                      <div className="row d-flex mb-1">
                        <label className="labels col-sm-3 col-5" htmlFor="link">
                          Link de junta:
                        </label>
                        <input
                          type="text"
                          className="line col-sm-6 col-5"
                          id="link"
                          name="link"
                          onChange={handleChange}
                          value={meeting.link}
                        />
                        <button
                          type="button"
                          className="btn labels text-yellow col-sm-3 col-12 text-right text-sm-center mb-5 mb-sm-0"
                          htmlFor="link"
                          // Modal link
                          onClick={showModal} 
                        >
                          ¿Cómo crear un link?
                        </button>
                      </div>
                      <div className="text-center mb-3">
                        {error ? (
                          <SweetAlert
                            danger
                            title="Error"
                            onConfirm={() => {
                              return setError(false);
                            }}
                          >
                            {errorType}
                          </SweetAlert>
                        ) : null}
                        {confirm ? (
                          <SweetAlert
                            success
                            title="Junta agendada"
                            onConfirm={() => {
                              return setConfirm(false);
                            }}
                          >
                            La junta ha sido registrada correctamente
                          </SweetAlert>
                        ) : null}

                        <button
                          type="submit"
                          className="btn-border-yellow"
                          onSubmit={handleSubmit}
                        >
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
      {/* Modal */}
      <Modal show={isOpen} onHide={hideModal} className="modal fade modal-video">
        <Modal.Body>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TtaMoSUifeI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-transparent color-white" onClick={hideModal}>Regresar <i className="fas fa-arrow-right"></i></button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default NewMeeting;
