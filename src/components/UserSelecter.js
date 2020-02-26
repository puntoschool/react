import React, { Fragment , useState} from "react";
import Footer from './Footer';

const validate = (username, password) =>{
  return !!(username && password)
}

const UserSelecter = (props) => {
  
  const[username, setUsername] = useState('')
  const[password, setPassword]=useState('')
  const[error,setError]= useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(validate (username, password)){
      setError(false)
      props.onLogin({username, password})
    } else{
      setError(true)
    }
  }

  return (
    <Fragment>
      <section className="user-selecter">
        <div className="user-selecter-flex">
          <div className="col-12 mt-3 text-center">
            <img src="./assets/img/logo-punto-school.png" className="img-fluid" alt="Logotipo" />
            <h1 className="user-selecter__title">Crear Cuenta</h1>
          </div>
          <div className="user-selecter__btns">
            <button className="btn-yellow-gradient">Soy Maestro</button>
            <button className="btn-blue-gradient">Soy Padre de Familia</button>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default UserSelecter;
