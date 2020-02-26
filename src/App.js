import React, { Fragment , useState} from 'react';
import Login from './components/Login';
import UserSelecter from './components/UserSelecter';
import DashboardTeachers from './components/teachers/DashboardTeachers';
import NewMeeting from './components/teachers/NewMeeting'
import "./sass/main.scss";
import WelcomeParents from './components/parents/WelcomeParents';

const Show = (props) =>{

  const {user, logout} = props

  return(
      <div>
        <h1>Hola {user.username}</h1>
        <button onClick={logout}>Logout</button>
      </div>
  )
  
}


function App() {

  const [user, setUser]=useState(null)

  return (
    <Fragment>

      {!user && <Login onLogin={(values) => setUser(values)} />}
      {user && <Show user={user} logout ={()=> setUser(null)} />}

      {/* <Login /> */}
      {/* <DashboardTeachers /> */}
      {/* <NewMeeting /> */}
    </Fragment>
  );
}

export default App;
