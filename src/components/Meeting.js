import React, { Fragment } from 'react';

const Meeting = ({meeting}) => {

    return ( 
            <article class="meeting-appointment">
                <div class="meeting-info">
                <div class="meeting-date"> {meeting.date}</div>
                <div class="meeting-text">
                    <h3>{meeting.title}</h3>
                    <p><i class="far fa-clock"></i>{meeting.date}, {meeting.startTime} hrs.</p>
                    <p><i class="fas fa-user-graduate"></i>{meeting.grade}{meeting.group}</p>
                    <h5>ID: <span className="yellow-color"><strong>{meeting.id}</strong></span></h5>
                </div>
                </div>
                <div class="meeting-arrow">
                <span className="start-meeting d-block d-sm-inline">Iniciar Junta</span> <i class="fas fa-chevron-right"></i>
                </div>
            </article>
        )
}
 
export default Meeting;