import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MenuTeachers from "./MenuTeachers";

const DashboardTeachers = () => {

    return (
            <Fragment>
            <div className="teachers">
            <Header />
            <section className="dashboard mt-80">
                <div className="container-fluid">
                    <div className="row">  
                    < MenuTeachers/>

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
            </div>
            </Fragment>
  );
};

export default DashboardTeachers;
