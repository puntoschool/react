import React, {Fragment, useState, useEffect} from 'react';
import ChatMessages from './ChatMessages'
import SweetAlert from "react-bootstrap-sweetalert";
import shortid from 'shortid'

const Chat = ({login, meetings, filterTeacherMeeting, filterParentMeeting, chat, setChat}) => {

    const [messageInfo, setMessageInfo] = useState({
        sender:'',
        userResponse:'',
        message:'',
        responseMessage:'',
        dateM: '',
        dateR:''
    })

    const [error, setError] = useState(false)
    const [errorType, setErrorType] = useState('')

    const newMessage = (e) =>{
        setMessageInfo({
            ...messageInfo,
            [e.target.name]:e.target.value,
            sender: login.fullName,
            dateM: new Date()
        })
    }


    const addNewMessage = () =>{
            setChat([
                ...chat,
                messageInfo
            ])
    }

    const chatParents = filterParentMeeting.chat

    const chatTeacher = filterTeacherMeeting.chat

    var chatComplete=[]
    if(chatParents !== undefined && chatTeacher !== undefined){
        chatComplete = [...chatParents, ...chatTeacher]
    } else if(chatParents === undefined && chatTeacher !== undefined){
        chatComplete = [...chatTeacher]
    } else if(chatParents !== undefined && chatTeacher === undefined){
        chatComplete = [...chatParents]
    } else chatComplete =[]
       
    console.log(chat)
    console.log(messageInfo)
    console.log(chatComplete)

    const handleSubmit = (e) =>{
        e.preventDefault()

        //Cargar informacion del usuario y su mensaje
            //Validacion de mensaje
            if(messageInfo.message.trim() === ''){
                setError(true)
                setErrorType('Favor de escribir un mensaje')    
                return
            } else setError(false)    

            messageInfo.id=shortid.generate()
        // agregarlo al tablera de mensaje
            addNewMessage()

            if(login.userType === 'Maestro'){
                filterTeacherMeeting.chat= [ ...chatComplete, messageInfo]
            } else if(login.userType === 'Padre de Familia'){
                filterParentMeeting.chat =  [...chatComplete, messageInfo]
            }

            localStorage.setItem("meetings", JSON.stringify(meetings))
        // // Limpiar input del mensaje
            setMessageInfo({
                id:'',
                sender:'',
                userResponse:'',
                message:'',
                responseMessage:'',
                dateM: '',
                dateR:''
            })
       
    }

    return (
        <Fragment>
            <div className="meeting-comments">
                <div className="comment">
                    {chatComplete.length >0 && chatComplete !== undefined ?
                    chatComplete.map( message =>(
                        <ChatMessages 
                            key={chatComplete.id}
                            message={message}
                        />
                    )): null}
                </div>
            </div>
            <form onSubmit={handleSubmit} className="meeting-input">
                <input type="text" name="message" value={messageInfo.message} onChange={newMessage} placeholder="Escribe aquí tu pregunta" />
                <button type="submit" onSubmit={()=>handleSubmit()}><i className="far fa-paper-plane"></i></button>
            </form>
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
        </Fragment>
      );
}
 
export default Chat;

