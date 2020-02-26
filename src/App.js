import React, { Fragment , useState} from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import "./sass/main.scss";
import WelcomeParents from './components/parents/WelcomeParents';


function App(props) {

  const {logout} = props

  const [user, setUser]=useState(null)

  return (
    <Fragment>

      {!user && <Login onLogin={(values) => setUser(values)} />}
      {user && <Dashboard user={user} logout ={()=> setUser(null)} />}

    </Fragment>
  );
}


export default App;
