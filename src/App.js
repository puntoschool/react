import React, { Fragment , useState, useEffect, Component} from 'react';
import Login from './components/Login';
import UserSelecter from './components/UserSelecter';
import TeacherLogin from './components/teachers/TeacherLogin';
import ParentsLogin from './components/parents/ParentsLogin';
import WelcomeParents from './components/parents/WelcomeParents';
import DetailMeeting from './components/parents/DetailMeeting';
import MeetingList from './components/parents/MeetingList';
import DashboardTeachers from './components/teachers/DashboardTeachers';
import NewMeeting from './components/teachers/NewMeeting';
import "./sass/main.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
  
function App() {

  // Inicializando variable con las cuentas de local Storage
  let recordsAccounts = JSON.parse(localStorage.getItem('accounts')) 
  if(!recordsAccounts){
    recordsAccounts=[]
  }
  
  // inicializando el State con el arreglo de cuentas de local storage
 const [accounts , setAccounts] = useState(recordsAccounts)

  // UseEffect para actualizar algo en caso de que cambie algo
  useEffect( () =>{

    let recordsAccounts = JSON.parse(localStorage.getItem('accounts')) 
    
  if(recordsAccounts){
    localStorage.setItem('accounts', JSON.stringify(accounts))
  } else {
    localStorage.setItem('accounts', JSON.stringify([]))
  }
  },[accounts])
  
  // Creo la función para guardar la cuenta creada en el arreglo de cuentas
  const newUserAccount = (account) =>{
    setAccounts([
      ...accounts, 
      account
    ])
  }

  // Inicializo el estados de login
  const [login, setLogin] = useState({})
  const [loginTeacher, setLoginTeacher] = useState(false)
  const [loginParent, setLoginParent] = useState(false)

  /////////////////////////////////////////7 Meetings/////////////////////////////////////////////////7

    // Inicializando variable con las juntas de local Storage
    let recordedMeeting = JSON.parse(localStorage.getItem("meetings"))
    if (!recordedMeeting) {
      recordedMeeting = []
    }
  
    // inicializando el State con el arreglo de las juntas de local storage
    const [meetings, setMeetings] = useState(recordedMeeting)
  
    // UseEffect para actualizar algo en caso de que cambie algo
    useEffect(() => {
      let recordedMeeting = JSON.parse(localStorage.getItem("meetings"))
  
      if (recordedMeeting) {
        localStorage.setItem("meetings", JSON.stringify(meetings))
      } else {
        localStorage.setItem("meetings", JSON.stringify([]))
      }
    }, [meetings])
  
    // Creo la función para guardar las juntas creada en el arreglo de juntas
    const newMeeting = (meeting) => {
      setMeetings([...meetings, meeting])
    }

  return (
    <Router>
      <Switch>
        <Route exact path="/" render= { () => (
          loginTeacher 
          ? <Redirect from="/" to="/DashboardTeachers" />
          : loginParent
          ? <Redirect from="/" to="/WelcomeParents" />
          : <Login setLogin = {setLogin} setLoginTeacher={setLoginTeacher} setLoginParent={setLoginParent} accounts={accounts}/> 
        )}/>

        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/UserSelecter">
          <UserSelecter/>
        </Route>
        <Route exact path="/TeacherLogin">
          <TeacherLogin
            newUserAccount={newUserAccount}
            setLogin= {setLogin}
            loginTeacher={loginTeacher}
            setLoginTeacher={setLoginTeacher}
            setLoginParent={setLoginParent}
            accounts={accounts}
          />
        </Route>
        <Route exact path="/ParentsLogin">
          <ParentsLogin
            newUserAccount={newUserAccount}
            loginParent={loginParent}
            setLoginTeacher={setLoginTeacher}
            setLoginParent={setLoginParent}
            accounts={accounts}
          />
        </Route>
        <Route exact path="/WelcomeParents">
          <WelcomeParents
            setLoginParent={setLoginParent}
            login={login}
            setLogin={setLogin}
          />
        </Route>
        <Route exact path="/DashboardTeachers">
          <DashboardTeachers
            setLoginTeacher={setLoginTeacher}
            login={login}
            setLogin={setLogin}
            meetings={meetings}
          />
        </Route>
        <Route exact path="/NewMeeting"> 
          <NewMeeting
            setLoginTeacher={setLoginTeacher}
            login={login}
            setLogin={setLogin}
            newMeeting={newMeeting}
          />
        </Route>
        <Route exact path="/DetailMeeting">
          <DetailMeeting
            setLoginParent={setLoginParent}
            login={login}
            setLogin={setLogin}
          />
        </Route>
        <Route exact path="/MeetingList">
          <MeetingList
            setLoginParent={setLoginParent}
            login={login}
            setLogin={setLogin}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
