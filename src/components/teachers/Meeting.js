import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";

const Meeting = ({meeting}) => {

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

    const [copySuccess, setCopySuccess] = useState('');
    const idToCopy = useRef(null);

    const copyToClipboard = e => {
        idToCopy.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess(' ID copiado en el portapapeles ')
        setTimeout(() => {
            setCopySuccess('')
          }, 2000);
    };
   
    return ( 
        <article class="meeting-appointment">
            <div class="meeting-info">
                <div class="meeting-date"> {getD}  {getM}</div>
                <div class="meeting-text">
                    <h3>{meeting.title}</h3>
                    <p><i class="far fa-clock"></i>{getM}  {getD}, {meeting.startTime} hrs.</p>
                    <p><i class="fas fa-user-graduate"></i>{meeting.grade}{meeting.group}</p>
                    <div className="d-flex align-items-center">
                        <h5 className="mb-0">ID:</h5> 
                        <input className="id-input" value={meeting.id} ref={idToCopy}></input>
                        <button className="icon-button" onClick={copyToClipboard} ><i className="far fa-copy"></i></button>
                        <p className="copy-success">{copySuccess}</p>
                    </div>
                </div>
            </div>
            
            <div class="meeting-arrow">
                <span className="start-meeting d-block d-sm-inline">Iniciar Junta <i class="fas fa-chevron-right"></i></span>
                <div className="meeting-actions">
                    <Link to={'/'} >
                        <i className="fas fa-edit"></i>
                    </Link>
                    <Link to={'/'} >
                        <i className="fas fa-trash"></i>
                    </Link>
                </div>
            </div>
        </article>
        )
}
 
export default Meeting;