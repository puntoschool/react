import React, { useState } from 'react';

const PollingTeachers = ({filterTeacherMeeting, meetings}) =>{

  const [pollingInfo, setPollingInfo] = useState({});

  const handleChange = e => {
    setPollingInfo({
      ...pollingInfo,
      [e.target.name]: e.target.value
    });
  };

  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(pollingInfo)

    if(
      pollingInfo === {} 
      // pollingInfo.pollingQuestion.trim() === '' ||
      // pollingInfo.posibleAnswers1.trim() === ''
    ){
      setError(true);
      setErrorType("Todos los campos son obligatorios");
      console.log('error')
      return;
    // } else if(pollingInfo.posibleAnswers2.trim() === ''){
    //   setError(true);
    //   setErrorType("Debe de haber al menos dos opciones para votar");
    //   return;
    } else setError(false);

    // filterTeacherMeeting.pollingInfo = pollingInfo

  }

  return(
    <div>
      <h5 className='yellow-color bold'>Votación</h5>
      <form
        onSubmit={handleSubmit}
      >
        <div className="form-group col-12">
          <label for="pollingQuestion">Pregunta o Tema a votación</label>
          <input type="text" className="form-control" id="pollingQuestion" name="pollingQuestion" value={pollingInfo.pollingQuestion} placeholder="Ingrese la pregunta o tema a someter a votación" onChange={handleChange}/>
        </div>

        <div className="row ml-1">
          <div className="form-group col-6">
            <label>Opciones de respuesta</label>
            <input type="text" className="form-control mb-4" name="posibleAnswers1" value={pollingInfo.posibleAnswer1} placeholder='opción 1' onChange={handleChange}/>
            <input type="text" className="form-control mb-4" name="posibleAnswers2" value={pollingInfo.posibleAnswer2} placeholder='opción 2' onChange={handleChange}/>
            <input type="text" className="form-control" name="posibleAnswers3" value={pollingInfo.posibleAnswer3} placeholder='opción 3' onChange={handleChange}/>
          </div>
    
          <button type="submit" className="btn-border-yellow col-6 btn-poll" onSubmit={handleSubmit}>Crear sistema de votación</button>
        </div>
      </form>
    </div>
  )
}

export default PollingTeachers;
