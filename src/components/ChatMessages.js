import React, { Fragment } from 'react';

const ChatMessages = ({message}) => {

    return ( 
        <Fragment>
            <h5><i class="far fa-user-circle"></i><span>{message.sender}</span></h5>
            <p>{message.message}</p>
        </Fragment>
     );
}
 
export default ChatMessages;