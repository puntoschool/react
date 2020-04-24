import React, { useState } from 'react';
import SweetAlert from "react-bootstrap-sweetalert";

const PollingTeachers = ({setPollingQ, setPollingA, pollingQ, pollingA, filterTeacherMeeting}) =>{

  const [pollingInfo, setPollingInfo] = useState({
    pollQ:'',
    option1:'',
    option2:'',
    option3:''
  });

  const {pollQ, option1, option2, option3} = pollingInfo

  const handleChange = e => {
    setPollingInfo({
      ...pollingInfo,
      [e.target.name]: e.target.value
    });
  };

  const [activePoll, setActivePoll] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");

  const handlePollingA = () =>{
    if(!option3){
      setPollingA([{option:option1,votes:0},{option:option2,votes:0}])
    } else if(option3){
      setPollingA([{option:option1,votes:0},{option:option2,votes:0},{option:option3,votes:0}])
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(filterTeacherMeeting.pollingQ){
      setActivePoll(true)
      setErrorType("El sistema de votación ha sido activado");
      return;
    }

    if(
      pollQ.trim() === '' ||
      option1.trim() === ''
    ){
      setError(true);
      setErrorType("Todos los campos son obligatorios");
      return;
    } else if(option2.trim() === ''){
      setError(true);
      setErrorType("Debe de haber al menos dos opciones para votar");
      return;
    } else setError(false);
    
    handlePollingA()
    setPollingQ(pollQ)
    setConfirm(true)
  }

  return(
    <div>
      <h5 className='yellow-color bold'>Votación</h5>
      <form
        onSubmit={handleSubmit}
      >
        <div className="form-group col-12">
          <label htmlFor="pollingQuestion">Pregunta o Tema a votación</label>
          {!filterTeacherMeeting.pollingQ ? <input type="text" className="form-control" name="pollQ" value={pollQ} placeholder="Ingrese la pregunta o tema a someter a votación" onChange={handleChange}/>:<p><b>{filterTeacherMeeting.pollingQ}</b></p>}
        </div>

        <div className="row ml-1 mt-4">
          <div className="form-group col-md-8 col-sm-10 col-12">
            <label>Opciones de respuesta</label>
            {!filterTeacherMeeting.pollingQ ? <input type="text" className="form-control mb-4" name="option1" value={option1} placeholder='opción 1' onChange={handleChange}/>: <p><b>{filterTeacherMeeting.pollingA[0].option} </b> -- 
            {filterTeacherMeeting.pollingA[0].votes} voto(s)</p>}

            {!filterTeacherMeeting.pollingQ ? <input type="text" className="form-control mb-4" name="option2" value={option2} placeholder='opción 2' onChange={handleChange}/>: <p><b>{filterTeacherMeeting.pollingA[1].option}</b> --
            {filterTeacherMeeting.pollingA[1].votes} voto(s)</p>}

            {!filterTeacherMeeting.pollingQ ? <input type="text" className="form-control" name="option3" value={option3} placeholder='opción 3' onChange={handleChange}/>: null} 
            
            {filterTeacherMeeting.pollingQ && filterTeacherMeeting.pollingA[2] ? <p><b>{filterTeacherMeeting.pollingA[2].option}</b> -- {filterTeacherMeeting.pollingA[2].votes} voto(s)</p>: null}
          </div>
          <div className="col-12">
            {!filterTeacherMeeting.pollingQ ? <button type="submit" className="btn-border-yellow mt-4 mx-1" onSubmit={handleSubmit}>Crear sistema de votación</button>: null}
          </div>

          {activePoll ? (
            <SweetAlert
              danger
              title="Error"
              onConfirm={() => {
                return setActivePoll(false);
              }}
            >
              {errorType}
            </SweetAlert>
          ) : null}

          {error ? (
            <SweetAlert
              danger
              title="Error"
              onConfirm={() => {
                return setError(false);
              }}
            >
              {errorType}
            </SweetAlert>
          ) : null}

          {confirm ? (
            <SweetAlert
              success
              title="Encuesta creada correctamente"
              onConfirm={() => {
                return setConfirm(false);
              }}
            >
            </SweetAlert>
          ) : null}

        </div>
      </form>
    </div>
  )
}

export default PollingTeachers;
