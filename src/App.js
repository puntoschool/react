import React, { Fragment , useState, useEffect} from 'react';
import Login from './components/Login';
import UserSelecter from './components/UserSelecter';
import TeacherLogin from './components/teachers/TeacherLogin';
import ParentsLogin from './components/parents/ParentsLogin';
import WelcomeParents from './components/parents/WelcomeParents';
import "./sass/main.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
  
function App() {
  
  // Inicializando variable con las cuentas de local Storage
  let recordsAccounts = JSON.parse(localStorage.getItem('acounts')) 
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

    },[]
  )

  // Creo la función para guardar la cuenta creada en el arreglo de cuentas
  const newUserAccount = (account) =>{
    setAccounts([
      ...accounts, 
      account
    ])
  }


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login
            accounts={accounts}
          />
        </Route>
        <Route exact path="/UserSelecter">
          <UserSelecter/>
        </Route>
        <Route exact path="/TeacherLogin">
          <TeacherLogin/>
        </Route>
        <Route exact path="/ParentsLogin">
          <ParentsLogin/>
        </Route>
        <Route exact path="/WelcomeParents">
          <WelcomeParents/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
