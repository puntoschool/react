import React from 'react';
import { Redirect } from "react-router-dom";

 // Creo componente intermedio para hacer la decisión de redireccionamiento
const ChoosePath = () => {

    if(login && loginTeacher){
        <Redirect from="/" to="/DashboardTeachers" />
      } else if(login && loginParent){
        <Redirect from="/" to="/WelcomeParents" />
      } else{
        <Login {setLogin} setLoginTeacher={setLoginTeacher} setLoginParent={setLoginParent} accounts={accounts}/> 
      }
    return ( );
}
 
export default ChoosePath;