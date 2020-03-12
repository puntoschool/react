import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Footer from '../Footer'
import Error from '../Error'
import { Redirect } from "react-router-dom";

const TeacherLogin = ({newUserAccount, setLogin, setLoginTeacher, loginTeacher, setLoginParent, accounts}) => {

  // Defino el objeto de cuenta
  const [account, setAccount] = useState({
    fullName:'', 
    userName:'', 
    password:'', 
    userType:'teacher',
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
    userType:'teacher',
    confirm:''
   })

   setLoginTeacher(true)
   setLoginParent(false)
  }

  // Creo una variable por cada propiedad del objeto account
  const {fullName, userName, password, confirm} = account

  return (
    <Fragment>
      <div className="teachers-login">
        <h1>Registro de maestros</h1>
        <form 
          onSubmit={handleSubmit}
        >
          <div className="teachers-login__inputs">
            <input type="text" name="fullName" onChange = {handleChange} placeholder="Nombre completo" />
            <input type="email" name="userName" onChange = {handleChange} placeholder="Correo Electrónico" />
            <input type="password" name="password" onChange = {handleChange} placeholder="Contraseña" />
            <input type="password" name="confirm" onChange = {handleChange} placeholder="Confirma tu contraseña" />
            {error ? <Error className='error-red' message={errorType}/> : null}
            {loginTeacher ? <Redirect from="/TeacherLogin" to="/DashboardTeachers" />: null }
            <div className="teachers-login__btns">
                <Link className="btn-back-yellow" to="/UserSelecter">Regresar</Link>
                <button className="btn-next-yellow" type='submit' onSubmit={handleSubmit}>Registrarse</button>
            </div>
          </div>
        </form>
        <Link to={'/'} >Iniciar sesión</Link>
      </div>
      <Footer/>
      
    </Fragment>
  );
};

export default TeacherLogin;
