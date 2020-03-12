import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Footer from '../Footer'
import Error from '../Error'
import { Redirect } from "react-router-dom";

const ParentsLogin = ({newUserAccount, setLogin, setLoginParent, loginParent, setLoginTeacher, accounts}) => {

  // Defino el objeto de cuenta
  const [account, setAccount] = useState({
    fullName:'', 
    userName:'', 
    password:'', 
    userType:'parent', 
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
   if (fullName.trim() === '' || userName.trim() === '' || password.trim() === ''){
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
      } else setError(false)

   // invoco la funcion de crear cuenta
   newUserAccount(account)

  // invoco la función para guardar la informacion del usuario que entro
  setLogin(account)

   //Limpio el formulario de información
  setAccount({
     fullName:'', 
     userName:'', 
     password:'', 
     userType:'parent',
     confirm:''
    })

    setLoginParent(true)
    setLoginTeacher(false)
  }

  // Creo una variable por cada propiedad del objeto acount
  const {fullName, userName, password, confirm} = account

  return (
    <Fragment>
     
      <div className="parents-login">
        <h1>Registro de Padres de familia</h1>
        <form
          onSubmit={handleSubmit}
        >
          <div className="parents-login__inputs">
            <input type="text" name="fullName" onChange = {handleChange} placeholder="Nombre completo" />
            <input type="email" name="userName" onChange = {handleChange} placeholder="Correo Electrónico" />
            <input type="password" name="password" onChange = {handleChange} placeholder="Contraseña" />
            <input type="password" name="confirm" onChange = {handleChange} placeholder="Confirma tu contraseña" />
            {error ? <Error className='error-red' message={errorType}/> : null}
            {loginParent ? <Redirect from="/ParentsLogin" to="/WelcomeParents" />: null }
            <div className="parents-login__btns">
                <Link className="btn-back-blue" to="/UserSelecter">Regresar</Link>
                <button className="btn-next-yellow" type='submit' onSubmit={handleSubmit}>Registrare</button>
            </div>
          </div>
        </form>
        <Link to={'/'} >Iniciar sesión</Link>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default ParentsLogin;
