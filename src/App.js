import React, { Fragment , useState} from 'react';
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

  const [acounts, setAcounts] = useState([{}])

  const newUserAcount = (acount) =>{
    setAcounts([
      ...acounts, 
      acount
    ])
  }
  // const {logout} = props

  const [user, setUser]=useState(null)

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

      {!user && <Login onLogin={(values) => setUser(values)} />}
      {/* {user && <Show user={user} logout ={()=> setUser(null)} />} */}

    </Fragment>
  );
}

export default App;
