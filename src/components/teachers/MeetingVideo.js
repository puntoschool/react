import React from 'react';
import { Link } from "react-router-dom";


const MeetingVideo = ({meetingVideo}) => {

    var getM = new Date(meetingVideo.date).getMonth()

    var getD = new Date(meetingVideo.date).getDate()

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
   
    const link = meetingVideo.link.replace('560','100%').replace('315','100%')

    return ( 

        <article className="video-meeting">
            <div className="row align-items-center">
                <div className="col-sm-3 col-12 cont-video">
                <Link to={'/DetailMeeting'} >
                    {   
                        require('html-react-parser')(link)
                    }
                </Link>
                </div>
                <div className="col-sm-6 col-12">
                <Link to={`/DetailMeeting/:${meetingVideo.id}`} >
                    <div className="meeting-text">
                    <h3>{meetingVideo.title}</h3>
                    <p><i className="far fa-clock"></i>{getD+1} de {getM}, {meetingVideo.startTime} hrs.</p>
                    <p><i className="fas fa-map-marker-alt"></i>{meetingVideo.grade}{meetingVideo.group} </p>
                    </div>
                </Link>
                </div>
                <div className="col-lg-2 col-md-3  col-12 text-right">
                <Link className="btn-plain" to={`/DetailMeeting/:${meetingVideo.id}`} >
                    Ver Junta 
                    <i className="fas fa-chevron-right"></i>
                </Link>
                </div>
            </div>
        </article>
     );
}
 
export default MeetingVideo;