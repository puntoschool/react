import React from 'react';


const MeetingVideoParents = ({meetingVideoParents, setFilterParentMeeting}) => {

    var getM = new Date(meetingVideoParents.date).getMonth()

    var getD = new Date(meetingVideoParents.date).getDate()

    var month = []
    month[0] = "Enero"
    month[1] = "Febrero"
    month[2] = "Marzo"
    month[3] = "Abril"
    month[4] = "Mayo"
    month[5] = "Junio"
    month[6] = "Julio"
    month[7] = "Agosto"
    month[8] = "Septiembre"
    month[9] = "Octubre"
    month[10] = "Noviembre"
    month[11] = "Diciembre"

    getM = month[getM]
   
    const link = meetingVideoParents.link.replace('560','100%').replace('315','100%')

    const handleClick = () => {
        setFilterParentMeeting(meetingVideoParents)
    }

    return ( 

        <article className="video-meeting">
            <div className="row align-items-center">
                <div className="col-sm-3 col-12 cont-video">
                    {   
                        require('html-react-parser')(link)
                    }
                </div>
                <div className="col-sm-6 col-12">
                    <div className="meeting-text">
                    <h3>{meetingVideoParents.title}</h3>
                    <p><i className="far fa-clock"></i>{getD+1} de {getM}, {meetingVideoParents.startTime} hrs.</p>
                    <p><i className="fas fa-map-marker-alt"></i>{meetingVideoParents.grade}{meetingVideoParents.group} </p>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3  col-12 text-right">
                    <a href="#!" download className="btn-border-blue btn-sm mb-3 d-block">
                        <i className="fas fa-download"></i> Descargar Minuta
                    </a>
                
                    <a href="#!" className="btn-plain" onClick={handleClick} >
                        Ver Junta 
                        <i className="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </article>
     );
}
 
export default MeetingVideoParents;