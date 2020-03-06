import React, { Fragment , useState, useEffect, Component} from 'react';
import Login from './components/Login';
import UserSelecter from './components/UserSelecter';
import TeacherLogin from './components/teachers/TeacherLogin';
import ParentsLogin from './components/parents/ParentsLogin';
import WelcomeParents from './components/parents/WelcomeParents';
import DashboardTeachers from './components/teachers/DashboardTeachers';
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
  const [login, setLogin] = useState(false)
  const [loginTeacher, setLoginTeacher] = useState(false)
  const [loginParent, setLoginParent] = useState(false)

  return (
    <Router>
      <Switch>
        <Route exact path="/" render= { () => (
          loginTeacher 
          ? <Redirect from="/" to="/DashboardTeachers" />
          : loginParent
          ? <Redirect from="/" to="/WelcomeParents" />
          : <Login setLogin={setLogin} setLoginTeacher={setLoginTeacher} setLoginParent={setLoginParent} accounts={accounts}/> 
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
          <WelcomeParents/>
        </Route>
        <Route exact path="/DashboardTeachers">
          <DashboardTeachers/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
