import React from 'react';

const Meeting = ({meeting, handleDeleteMeeting}) => {

    var getM = new Date(meeting.date).getMonth()

    var getD = new Date(meeting.date).getDay()

    var month = new Array()
    month[0] = "Ene"
    month[1] = "Feb"
    month[2] = "Mar"
    month[3] = "Abril"
    month[4] = "Mayo"
    month[5] = "Jun"
    month[6] = "Jul"
    month[7] = "Ago"
    month[8] = "Sep"
    month[9] = "Oct"
    month[10] = "Nov"
    month[11] = "Dic"

    getM = month[getM]
    
    return ( 
        <article class="meeting-appointment">
            <div class="meeting-info">
                <div class="meeting-date"> {getD}  {getM}</div>
                <div class="meeting-text">
                    <h3>{meeting.title}</h3>
                    <p><i class="far fa-clock"></i>{getM}  {getD}, {meeting.startTime} hrs.</p>
                    <p><i class="fas fa-user-graduate"></i>{meeting.grade}{meeting.group}</p>
                    <h5>ID: <span className="yellow-color"><strong>{meeting.id}</strong></span></h5>
                </div>
            </div>
            
            <div class="meeting-arrow">
                <button onClick={() =>{handleDeleteMeeting(meeting.id)}} className="start-meeting d-block d-sm-inline">Eliminar Junta</button> <i class="fas fa-chevron-right"></i>
                <span className="start-meeting d-block d-sm-inline">Editar Junta</span> <i class="fas fa-chevron-right"></i>
                <span className="start-meeting d-block d-sm-inline">Iniciar Junta</span> <i class="fas fa-chevron-right"></i>
            </div>
        </article>
        )
}
 
export default Meeting;