import React, { Fragment } from 'react';

const ChatMessages = ({message}) => {

    return ( 
        <Fragment>
            <h5>{message.sender}</h5>
            <p>{message.message}<i className="fas fa-angle-double-right"></i></p>
        </Fragment>
     );
}
 
export default ChatMessages;