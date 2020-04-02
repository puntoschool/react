import React, { Component } from 'react';

const PollingTeachers = () =>{

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return(
    <div>
      <h5 className='yellow-color bold'>Votación</h5>
      <form
        onSubmit={handleSubmit}
      >
        <div className="form-group col-12">
          <label for="pollingQuestion">Pregunta o Tema a votación</label>
          <input type="text" className="form-control" id="pollingQuestion" placeholder="Ingrese la pregunta o tema a someter a votación"/>
        </div>

        <div className="row ml-1">
          <div className="form-group col-6">
            <label>Opciones de respuesta</label>
            <input type="text" className="form-control mb-4" id="posibleAnswers1" placeholder='opción 1'/>
            <input type="text" className="form-control mb-4" id="posibleAnswers2" placeholder='opción 2'/>
            <input type="text" className="form-control" id="posibleAnswers3" placeholder='opción 3'/>
          </div>
    
          <button type="submit" className="btn-border-yellow col-6 btn-poll" onSubmit={handleSubmit}>Crear sistema de votación</button>
        </div>
      </form>
    </div>
  )
}

export default PollingTeachers;
