import React from 'react';


const Error = ({message}) => {
    return ( 
        <p style={{color:'white', display:'block', marginBottom:'2rem', fontSize:'3rem'}}>{message}</p>
     );
}
 
export default Error;