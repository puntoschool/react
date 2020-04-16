import React, { Fragment } from 'react';

const ChatMessages = ({message}) => {

    return ( 
        <Fragment>
            <h5><i class="far fa-user"></i> {message.sender}</h5>
            <p>{message.message}</p>
        </Fragment>
     );
}
 
export default ChatMessages;