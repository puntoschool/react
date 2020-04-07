import React, { useRef, useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert'
import { Link } from "react-router-dom";

const Meeting = ({meeting, handleDeleteMeeting, setFilterTeacherMeeting}) => {

    var getM = new Date(meeting.date).getMonth()

    var getD = new Date(meeting.date).getDate()

    var month = []
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

    const [sweetA, setSweetA] = useState(false)

    const handleCancel = ()=>{ setSweetA(false)}

    const handleClick = () =>{ setSweetA(true)}

    const handleChange = () =>{}

    const handleClickStart = () => {
        setFilterTeacherMeeting(meeting)
    }
   
    return ( 
        <article className="meeting-appointment">
            <div className="meeting-info">
                <div className="meeting-date"> {getD+1}  {getM}</div>
                <div className="meeting-text">
                    <h3>{meeting.title}</h3>
                    <p><i className="far fa-clock"></i>{getM}  {getD+1}, {meeting.startTime} hrs.</p>
                    <p><i className="fas fa-user-graduate"></i>{meeting.grade}{meeting.group}</p>
                    <div className="d-flex align-items-center">
                        <h5 className="mb-0">ID:</h5> 
                        <input className="id-input mb-0" ref={idToCopy}value={meeting.id} onChange={handleChange}/>
                        <button className="icon-button" onClick={copyToClipboard} ><i className="far fa-copy"></i></button>
                        <p className="copy-success">{copySuccess}</p>
                    </div>
                </div>
            </div>
            
            <div className="meeting-arrow">
                <Link to={`/ViewMeetingTeachers`} onClick={handleClickStart} >
                    <span className="start-meeting d-block d-sm-inline text-left text-sm-right">
                        Iniciar Junta <i className="fas fa-chevron-right"></i>
                    </span>
                </Link>
                <div className="meeting-actions">
                    <button onClick={handleClick}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                    { sweetA ? <SweetAlert showCancel confirmBtnText="Sí, deseo eliminarla" confirmBtnBsStyle="danger" title="¿Esta seguro" onCancel={handleCancel} onConfirm={() =>{handleDeleteMeeting(meeting.id)}} focusCancelBtn>
                        que desea borrar la junta seleccionada?
                    </SweetAlert> : null }
                </div>
            </div>
        </article>
        
        )
}
export default Meeting;