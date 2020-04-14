import React, { Fragment, useState} from "react";
import Footer from './Footer';
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

const Login = ({accounts, setLogin, setLoginParent, setLoginTeacher, setFilterParentMeeting, setFilterTeacherMeeting}) => {
  
  // Inicializo el state de usuario
  const[user, setUser] = useState({
    userName:'',
    password:''
  })

  // Extraigo cada propiedad del objeto como variables
  const {userName, password} = user

  // Declaro la funcion para tomar los datos capturados en el formulario
  const handleChange = (e) =>{
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  // Declaro States para manejar los errores 
  const[error,setError]= useState(false)
  const[errorType,setErrorType]= useState('')

  // Creo funcion de validacion de usuario y password
  let validation = accounts.find(user => {
      return user.userName === userName && user.password === password
  })

  const handleSubmit = (e) =>{
    e.preventDefault()

    // Validando que todos los campos tienen info
    if (userName.trim() === '' || password.trim() === ''){
      setError(true)
      setErrorType('Todos los campos son obligatorios')
      return
    } else {
      setError(false)
    }

    // Validando que la info ingresada corresponda a un usuario y password registrado
    if(validation){
      setError(false)
      // Evaluar el tipo de usuario para poder direccionarlo a su dashboard correspondiente
      if (validation.userType === 'Maestro'){
        setLoginTeacher(true)
      } else if(validation.userType === 'Padre de Familia'){
        setLoginParent(true)
      }

    } else{
      setError(true)
      setErrorType('Usuario / Password incorrectos')
      setLoginParent(false)
      setLoginTeacher(false)
    }

    setLogin(validation)

    setFilterParentMeeting('')
    setFilterTeacherMeeting('')

  }

  return (
    <Fragment>
      <section className="login">
        <div className= 'login__center'>
          <div className="container mb-md-5">
            <div className="row justify-content-start">
              <div className="col-lg-4 col-md-5 col-6 mt-3vh">
                <img src="./assets/img/logo-punto-school.png" className="img-fluid" alt="Logotipo" />
              </div>
              <div className="col-lg-8 col-md-7 col-6"></div>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-9 col-12 mt-3">
                <h1 className="title">Juntas de Padres</h1>
                <h2 className="subtitle">livestreaming</h2>
              </div>
            </div>
            <div className="row justify-content-md-end justify-content-center mt-1vh">
              <div className="col-lg-5 col-md-6 col-sm-8 col-10">
                <form 
                  onSubmit={handleSubmit}
                >  
                  <div className="login-form">
                    <input type="email" name='userName' value={userName} onChange={handleChange} placeholder="Correo Electrónico" />
                    <input type="password" name='password' value={password} onChange={handleChange} placeholder="Contraseña" />
                    {error ? (
                          <SweetAlert
                            danger
                            title="Error"
                            onConfirm={() => {
                              return setError(false);
                            }}
                          >
                            {" "}
                            {errorType}
                          </SweetAlert>
                        ) : null}
                    <input className="btn-login" type='submit' value='ingresar'/>
                  </div>
                </form>
              </div>
              <div className="offset-md-2 col-sm-12 col-12 col-md-2 align-self-sm-end align-self-md-center">
                <Link to={"/UserSelecter"}>
                  <div className="create-account">
                    <i className="fas fa-plus-circle"></i>
                    <h5> Crea <br /> tu cuenta </h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      <Footer />
    </Fragment>
  );
};

export default Login;
