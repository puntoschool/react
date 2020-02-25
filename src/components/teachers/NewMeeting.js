import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";

const NewMeeting = () => {

    return (
            <Fragment>
            <Header />
            <section className="dashboard mt-80">
                <div className="container-fluid">
                    <div className="row">  
                        <aside className="dash-menu col-md-2 col-sm-3">
                            <nav className="navbar navbar-expand-sm">
                                <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarTogglerDemo01"
                                aria-controls="navbarTogglerDemo01"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                >
                                <i className="fas fa-bars"></i>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                    <ul className="dash-nav d-flex d-sm-none justify-content-between mb-5">
                                        <li className="text-left ml-0">
                                            <i className="fas fa-user mr-1"></i>
                                            <h5>José Martínez Fernández{" "}
                                                <span className="d-block">Dirección</span>
                                            </h5>
                                        </li>
                                        <li>
                                            <a href="dashboardSchool.html">
                                                <i className="fas fa-home"></i>
                                            </a>{" "}
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-sign-out-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="levels.html">
                                                <i className="fas fa-calendar-alt fa-fw"></i>
                                                <span>Calendario de Juntas</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="verMaestros.html">
                                                <i className="fas fa-folder-open fa-fw"></i>
                                                <span>Historial de Juntas</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="verCicloEscolar.html">
                                                <i className="far fa-calendar-check fa-fw"></i>
                                                <span>Agendar Nueva Junta</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </aside>

                        <main className="dash-new-meeting col-md-10 col-sm-9">
                            <div className="justify-content-center">

                                <h1 className="dash-new-meeting__title">Agendar Junta</h1>
                            
                                <form className="">
                                    <div className="col-6">
                                        <div className="d-flex">
                                            <label className="labels" for="title">Titulo: </label>
                                            <input type="text" className="line" id="title" placeholder="Ingrese el tema de la junta"/>
                                        </div>
                                        <div className="d-flex">
                                            <label className="labels" for="teacher">Profesor(a): </label>
                                            <input type="text" className="line" id="teacher" placeholder="Ingrese el nombre del profesor(a)"/>
                                        </div>
                                        
                                        <div className="d-flex">
                                            <div className="">
                                                <label className="labels" for="group">Grupo<i class="fas fa-users"></i></label>
                                                <select id="group">
                                                    <option selected>Choose...</option>
                                                    <option value="1">A</option>
                                                    <option value="2">B</option>
                                                    <option value="3">C</option>
                                                </select>
                                            </div>

                                            <div className="">
                                                <label className="labels" for="grade">Grado <i class="fas fa-user-graduate"></i></label>
                                                <select id="grade">
                                                    <option selected>Choose...</option>
                                                    <option value="1">1ero</option>
                                                    <option value="2">2do</option>
                                                    <option value="3">3ero</option>
                                                    <option value="1">4to</option>
                                                    <option value="2">5to</option>
                                                    <option value="3">6to</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="">
                                            <label className="labels" for="duration">Duración<i class="fas fa-users"></i></label>
                                            <select id="duration">
                                                <option selected>Choose...</option>
                                                <option value="1">15 min.</option>
                                                <option value="2">30 min.</option>
                                                <option value="3">45 min.</option>
                                                <option value="2">60 min.</option>
                                                <option value="3">1 hr. 15 min.</option>
                                            </select>
                                        </div>

                                        <div className="">
                                            <label className="labels" for="date">Hora de Inicio:</label>
                                            <input type="date" className="mr-4" id="date"/>
                                            <input type="time" className="" id="time"/>
                                        </div>

                                        <div className="">
                                            <label className="labels" for="date">Hora de Fin:</label>
                                            <input type="date" className="mr-4" id="date"/>
                                            <input type="time" className="" id="time"/>
                                        </div>

                                        <button 
                                            type="button"
                                            className=""
                                        >
                                            Ubicación
                                        </button>
                                    </div>

                                    <div className="d-flex col-6">
                                        <div className="d-flex col-6">
                                            <label className="labels d-inline-block  " for="link">Link de junta:</label>
                                            <input type="url" className="line" id="link"/>
                                        </div>
                                        <label className="labels" for="link">Compartir</label>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className=""
                                    >
                                        Crear
                                    </button>

                                </form>

                            </div>

                        </main>
                    </div>
                </div>
            </section>
            <Footer />
            </Fragment>
  );
};

export default NewMeeting;
