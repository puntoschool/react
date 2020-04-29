import React from 'react';

const LoadFile = ({setFile, file, filterTeacherMeeting}) => {

    const handleChange = (e) => {
        setFile( {[e.target.name] : e.target.files[0].name})
      };

      
    return ( 
        <button className="btn-border-yellow btn-sm align-items-center" type="button">  
            <label className="mb-0" for="file"><i className="far fa-clock"></i> Cargar minuta</label>
            <input id="file" class="d-none" type="file" name="customFile" onChange={handleChange}/>
        </button>
     );
}
 
export default LoadFile;