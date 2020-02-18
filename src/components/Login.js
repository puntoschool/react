import React, { Fragment } from 'react';
import '../sass/main.scss'

const Login = () => {
    return ( 
    <Fragment>
        <section class="login">
            <div class="container">
            <div class="row justify-content-start">
                <div class="col-lg-3 col-md-4 col-sm-6 col-7 mt-3vh">
                <img src="assets/img/logo-punto-school.png" class="img-fluid" alt="Logotipo" />
                </div>
                <div class="col-sm-9 col-9"></div>
            </div>
            </div>

            <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-7 col-lg-8 col-md-8 col-sm-9 col-12 mt-3">
                <h1 class="title">Juntas de Padres</h1>
                <h2 class="subtitle">livestreaming</h2>
                </div>
            </div>
            <div class="row justify-content-md-end justify-content-center mt-1vh">
                <div class="col-lg-5 col-md-6 col-sm-8 col-11">
                    <form action="">
                        <div class="login-form">
                            <input type="email" placeholder="Correo Electrónico"/>
                            <input type="password" placeholder="Contraseña"/>
                            <button class="btn-pink-gradient">Autenticar</button>
                            <div class="contraseña">
                                <a href="#">¿Olvidaste tu contraseña?</a>
                            </div>
                        </div>
                </form>
                </div>
                <div class="offset-md-2 col-sm-12 col-12 col-md-2 align-self-sm-end align-self-md-center">
                <div class="create-account">
                    <i class="fas fa-plus-circle"></i>
                    <h5>Registra a <br/> tu escuela</h5>
                </div>
                </div>
            </div>
            </div>
        </section>
    </Fragment> );
}
 
export default Login;