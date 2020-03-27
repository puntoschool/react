import React, { Fragment, useState } from "react";
import MenuParents from "./MenuParents";
import Header from "../Header";
import Footer from "../Footer";
import { Redirect } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

const WelcomeParents = ({setLoginParent, login, setLogin, meetings, setFilterParentMeeting, filterParentMeeting, addMeetingId}) => {
  
  // Creo el state para filtrar la junta por id
  const [filterParentInput, setFilterParentInput] = useState('')

  const [error, setError] = useState(false);

  // const [userId, setUserId]= useState({
  //   user:'',
  //   id:''
  // })

  const handleChange = (e) => {
     setFilterParentInput(e.target.name=e.target.value)
  }

  const handleClick = () =>{
   
    // validaciones
    if(filterParentInput.trim()){
      
      const filter = meetings.filter( meeting => meeting.id.toLowerCase().includes(filterParentInput.toLowerCase()))

      if(typeof filter != "undefined" && filter != null && filter.length != null
      && filter.length > 0){
        setFilterParentMeeting(filter)
      }else{
        setError(true);
        return;
      }
      

      // if(filterParentMeeting.length === 0){
      //   setError(true);
      //   return;
      // }else{
        // const meetingInfo = filterParentMeeting[0]
        // const {id} = meetingInfo

        // setUserId({user:login.userName, id:id})
        
        // addMeetingId(userId)

        // setUserId({user:'', id:''})
      // }

    } else {
      setError(true);
      return;
    }

    
    

  }

  return (
    <Fragment>
      <div className="admin parents">
        <Header 
          setLoginParent={setLoginParent}
          login={login}
          setLogin={setLogin}
        />
          <section className="dashboard mt-80">
            <div className="container-fluid">
              <div className="row">  
                <MenuParents 
                  setLoginParent={setLoginParent}
                  login={login}
                  setLogin={setLogin}
                />
                <main className="dash-main col-md-10 col-sm-9 dash-welcome">
                  <section className="row justify-content-center">
                    <div className="col-md-8 col-sm-9 col-10 mb-sm-5">
                      <h1 className="title-welcome">¡HOLA!</h1>
                      <p className="subtitle-welcome">
                        Bienvenido al administrador escolar
                      </p>
                      <form className="form-group parents-login__inputs mt-5">
                        <label htmlFor="enterID">Ingresa el ID de tu junta</label>
                        <input type="text" name="enterID" id="enterID" onChange={handleChange} placeholder="Número de ID otorgado por el maestro" className="mt-0"/>
                   
                          <button
                            type='button'
                            className="btn-blue-gradient"
                            onClick={handleClick}
                          >
                            Ir a la junta
                          </button>
                        
                      </form>

                      {error ? (
                          <SweetAlert
                            danger
                            title="Error"
                            onConfirm={() => {
                              return setError(false);
                            }}
                          >
                            {"Link no valido, favor de verificarlo"}
                          </SweetAlert>
                        ) : null}
                         
                        {filterParentMeeting ? <Redirect from="/WelcomeParents" to="/DetailMeeting" />: null }
                    </div>

                    <div className="col-md-11 mt-2">
                      <img src="./assets/img/welcome-kids.png" className="img-fluid"
                      alt="welcome_image" />
                    </div>
                  </section>
                </main>
              </div>
            </div>
          </section>
          <Footer />
        </div>
    </Fragment>
  );
};

export default WelcomeParents;
