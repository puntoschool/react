import React, { Fragment , useState} from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import "./sass/main.scss";
import WelcomeParents from './components/parents/WelcomeParents';


function App(props) {

<<<<<<< HEAD
  return(


      <div>
        <h1>Hola {user.username}</h1>
        <button onClick={logout}>Logout</button>
      </div>
  )
  
}


function App() {
=======
  const {logout} = props
>>>>>>> d46a255b1f7da2816cd28395001135f20a90b1d9

  const [user, setUser]=useState(null)

  return (
    <Fragment>

      {!user && <Login onLogin={(values) => setUser(values)} />}
      {user && <Dashboard user={user} logout ={()=> setUser(null)} />}

      {/* <Login /> */}
      {/* <DashboardTeachers /> */}
      {/* <NewMeeting /> */}
    </Fragment>
  );
}

export default App;
