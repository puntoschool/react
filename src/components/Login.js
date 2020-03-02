import React, { Fragment, useState, useEffect} from "react";
import Footer from './Footer';
import Error from './Error'
import { Link } from "react-router-dom";

const Login = ({accounts, setLogin, setLoginParent, setLoginTeacher}) => {
  
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
      setLogin(true)
      console.log('Login correcto')

      // Evaluar el tipo de usuario para poder direccionarlo a su dashboard correspondiente
      if (validation.userType === 'teacher'){
        console.log('soy maestro')
        setLoginTeacher(true)
      } else if(validation.userType === 'parent'){
        console.log('soy padre de familia')
        setLoginParent(true)
      }

    } else{
      setError(true)
      setErrorType('Usuario / Password incorrectos')
      setLogin(false)
    }
    
  }

  return (
    <Fragment>
      <section className="login">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-3 col-md-4 col-sm-6 col-7 mt-3vh">
              <img src="./assets/img/logo-punto-school.png" className="img-fluid" alt="Logotipo" />
            </div>
            <div className="col-sm-9 col-9"></div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-8 col-sm-9 col-12 mt-3">
              <h1 className="title">Juntas de Padres</h1>
              <h2 className="subtitle">livestreaming</h2>
            </div>
          </div>
          <div className="row justify-content-md-end justify-content-center mt-1vh">
            <div className="col-lg-5 col-md-6 col-sm-8 col-11">
              <form 
                onSubmit={handleSubmit}
              >  
                <div className="login-form">
                  <input type="email" name='userName' value={userName} onChange={handleChange} placeholder="Correo Electrónico" />
                  <input type="password" name='password' value={password} onChange={handleChange} placeholder="Contraseña" />
                  {error ? <Error style={{color:'white', display:'block', marginBottom:'2rem', fontSize:'3rem'}} message={errorType}/> : null}
                  <input className="btn-border-white" type='submit' value='ingresar'/>
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
      </section>
      <Footer />
    </Fragment>
  );
};

export default Login;
