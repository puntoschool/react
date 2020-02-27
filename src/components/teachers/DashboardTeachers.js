import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";

const DashboardTeachers = () => {

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

                        <main className="dash-teachers col-md-10 col-sm-9">
                            <div className="justify-content-center">

                                <div className="d-flex col-9 ml-4 space-between">
                                        <div className="d-block">
                                            <h3 className="dash-teachers__title">Nombre</h3>
                                            <p className="dash-teachers__info">Alejandro Suárez M.</p>
                                        </div>
                                        <div className="d-block">
                                            <h3 className="dash-teachers__title">Grado escolar</h3>
                                            <p className="dash-teachers__info">3-A</p>
                                        </div>
                                        <div className="d-block">
                                            <h3 className="dash-teachers__title">Profesor(a) o Tutor</h3>
                                            <p className="dash-teachers__info">Sara Molina</p>
                                        </div>
                                    
                                </div>
                            
                                <div className="dash-teachers__search-nav">
                                    <div className="d-flex justify-content-between col-11 ml-4 position-relative">
                                        <button className="btn-yellow-gradient dash-teachers__btn">Lista</button>  

                                        <div className="d-flex">
                                            <input 
                                                type='search'
                                                className="dash-teachers__input"
                                            />
                                            <span className="dash-teachers__filter-icon"><i class="fas fa-filter fa-fw"></i></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-9 ml-4 mr-4 dash-teachers__list">

                                        <div className="dash-teachers__list-date col-1">
                                            <p className="centrar">9 Ene</p>
                                        </div>

                                        <div className="col-3">
                                            <h4 className="dash-teachers__list-details--title">Junta inicio de año</h4>
                                            <p className="m-0"><i class="far fa-clock fa-fw"></i> 9 Enero 2020 9:00 hrs.</p>
                                            <p className="m-0"><i class="fas fa-map-marker-alt fa-fw black-icon"></i> Salon 2</p>
                                            <p className="m-0">Profe. Julio Martinez</p>
                                        </div>
                                        <div className="col-7 dash-teachers__list-link">
                                            <i class="fas fa-link fa-fw yellow-color"></i>
                                            <span><a href="#" className="mr-4 yellow-color">COMPARTIR</a>http://www.youtube.com</span>
                                        </div>
                                        <div className="col-1 dash-teachers__list-arrow-icon"><i class="fas fa-chevron-right fa-fw"></i></div>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-9 ml-4 mr-4 dash-teachers__list">

                                        <div className="dash-teachers__list-date col-1">
                                            <p className="centrar">10 Ene</p>
                                        </div>

                                        <div className="col-3">
                                            <h4 className="dash-teachers__list-details--title">Junta Primavera</h4>
                                            <p className="m-0"><i class="far fa-clock fa-fw"></i> 10 Enero 2020 12:00 hrs.</p>
                                            <p className="m-0"><i class="fas fa-map-marker-alt fa-fw black-icon"></i> Salon 2</p>
                                            <p className="m-0">Profe. Julio Martinez</p>
                                        </div>
                                        <div className="col-7 dash-teachers__list-link">
                                            <i class="fas fa-link fa-fw yellow-color"></i>
                                            <span><a href="#" className="mr-4 yellow-color">COMPARTIR</a>http://www.youtube.com</span>
                                        </div>
                                        <div className="col-1 dash-teachers__list-arrow-icon"><i class="fas fa-chevron-right fa-fw"></i></div>
                                    </div>

                                </div>
                            </div>

                        </main>
                    </div>
                </div>
            </section>
            <Footer />
            </Fragment>
  );
};

export default DashboardTeachers;
