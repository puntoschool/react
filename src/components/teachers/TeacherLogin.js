import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Footer from '../Footer'
import { Redirect } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

const TeacherLogin = ({newUserAccount, setLogin, setLoginTeacher, loginTeacher, setLoginParent, accounts, setFilterTeacherMeeting}) => {

  // Defino el objeto de cuenta
  const [account, setAccount] = useState({
    fullName:'', 
    userName:'', 
    password:'', 
    userType:'Maestro',
    confirm:''
  })

  // Creo el estado en caso de existir algun error
  const [error, setError] = useState(false)
  const[errorType,setErrorType]= useState('')

  // Actualizo el estado de cuenta con la informacion ingresada en el formulario
  const handleChange = e =>{
    setAccount({
        ...account,
        [e.target.name] : e.target.value
    })
  }

  const duplicated = accounts.find(element => element.userName === account.userName );
  
  // Creo la funcion cuando el usuario hace click en el boton de registrarse
  const handleSubmit = (e) =>{
    e.preventDefault()

   // Valido informacion capturada
   if (fullName.trim() === '' || userName.trim() === '' || password.trim() === '' || confirm.trim() === ''){
       setError(true)
       setErrorType('Todos los campos son obligatorios')
       return
   } else if(password !== confirm){
      setError(true)
      setErrorType('Los passwords debe de ser iguales')
      return
    } else if(duplicated){
      setError(true)
      setErrorType(`La cuenta de email ${account.userName} ya esta registrada`)
      return 
   }else setError(false)

   // invoco la funcion de crear cuenta
   newUserAccount(account)

   // invoco la función para guardar la informacion del usuario que entro
   setLogin(account)

   //Limpio el formulario de información
   setAccount({
    fullName:'', 
    userName:'', 
    password:'', 
    userType:'Maestro',
    confirm:''
   })

   setLoginTeacher(true)
   setLoginParent(false)
   setFilterTeacherMeeting('')
  }

  // Creo una variable por cada propiedad del objeto account
  const {fullName, userName, password, confirm} = account

  return (
    <Fragment>
      <div className ="bg">
      <Link className="login-button" to="/">Iniciar sesión</Link>
        <div className="teachers-login">
        <img src="./assets/img/logo-punto-school.png" className="img-fluid-login" alt="Logotipo" />
          <h1>Registro de maestros</h1>
          <form 
            onSubmit={handleSubmit}
          >
            <div className="teachers-login__inputs">
              <input type="text" name="fullName" onChange = {handleChange} placeholder="Nombre completo" />
              <input type="email" name="userName" onChange = {handleChange} placeholder="Correo Electrónico" />
              <input type="password" name="password" onChange = {handleChange} placeholder="Contraseña" />
              <input type="password" name="confirm" onChange = {handleChange} placeholder="Confirma tu contraseña" />
              {error ? <SweetAlert danger title="Error" onConfirm={() => { return setError(false);}}> {errorType} </SweetAlert> : null}
              {loginTeacher ? <Redirect from="/TeacherLogin" to="/DashboardTeachers" />: null }
              <div className="teachers-login__btns">
                  <button className="btn-next-yellow" type='submit' onSubmit={handleSubmit}>Registrarse</button>
                  <Link className="btn-back-yellow" to="/UserSelecter">Regresar</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
      
    </Fragment>
  );
};

export default TeacherLogin;
