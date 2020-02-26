import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const TeacherLogin = () => {
  return (
    <Router>
      <TeacherLogin className="TeacherLogin">
      <div class="page-wrapper bg-img-1 p-t-275 p-b-100">
        <div class="wrapper wrapper--w690">
            <div class="card card-1">
                <div class="card-heading">
                    <h2 class="title">Form Wizard</h2>
                </div>
                <div class="card-body">
                    <form class="wizard-container" method="POST" action="#" id="js-wizard-form">
                        <h1>REGISTRO DE MAESTROS</h1><br/><br/>
                        <div class="tab-content">
                            <div class="tab-pane active" id="tab1">
                                <div class="input-group">
                                    <label class="label"></label>
                                    <input class="input--style-1" type="text" name="fullname" placeholder="Nombre completo" />
                                </div>
                                <div class="input-group">
                                    <label class="label"></label>
                                    <input class="input--style-1" type="email" name="email" placeholder="Correo Electrónico" />
                                </div>
                                <div class="input-group">
                                    <label class="label"></label>
                                    <input class="input--style-1" type="text" name="password" placeholder="Contraseña" />
                                </div>
                                <div class="btn-next-con">
                                        <Link class="btn-back" to="/UserSelector">Regresar</Link>
                                        <Link class="btn-next" to="/WelcomeParents">Registrare</Link>
                                    </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Switch>
          <Route path="/UserSelector">
            <About />
          </Route>
          <Route path="/WelcomeParents">
            <Users />
          </Route>
        </Switch>
    </div>
        </TeacherLogin>
    </Router>
  );
};

export default TeacherLogin;


