import React, { Fragment , useState, useEffect} from 'react';
import Login from './components/Login';
import UserSelecter from './components/UserSelecter';
import DashboardTeachers from './components/teachers/DashboardTeachers';
import NewMeeting from './components/teachers/NewMeeting'
import "./sass/main.scss";
// import WelcomeParents from './components/parents/WelcomeParents';

// import * as data from '../src/components/recordAcounts.json';
import TeacherLogin from './components/teachers/TeacherLogin';
import ParentsLogin from './components/parents/ParentsLogin';
import DashboardParents from './components/parents/DashboardParents';
  
function App() {

  // Agregando cuentas al local Storage
  let recordsAcounts = JSON.parse(localStorage.getItem('acounts')) 
  if(!recordsAcounts){
    recordsAcounts=[]
  }

  // inicializando el arreglo de cuentas
  const [acounts , setAcounts] = useState(recordsAcounts)

  // UseEffect para actualizar algo en caso de que cambie algo

  useEffect( () =>{

    let recordsAcounts = JSON.parse(localStorage.getItem('acounts')) 
    
  if(recordsAcounts){
    localStorage.setItem('acounts', JSON.stringify(acounts))
  } else {
    localStorage.setItem('acounts', JSON.stringify([]))
  }
  },[])

  const newUserAcount = (acount) =>{
    setAcounts([
      ...acounts, 
      acount
    ])
  }

  const [user, setUser]=useState(null)

  const Show = () => user && user.userType === 'teacher' ? <DashboardTeachers/> : <DashboardParents/>

  return (
    <Fragment>

      {/* <TeacherLogin 
        newUserAcount={newUserAcount}
      /> */}
      
      {/* <ParentsLogin 
        newUserAcount={newUserAcount}
      /> */}

      {/* <UserSelecter
      /> */}
      
      {/* <DashboardParents
      /> */}

      {/* <DashboardTeachers
      /> */}

      {/* <NewMeeting
      /> */}

      {!user && <Login acounts={acounts} onLogin={(values) => setUser(values)} />}
      {user && <Show user={user} logout ={()=> setUser(null)} />}

    </Fragment>
  );
}

export default App;
