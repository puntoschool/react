import React, { Fragment } from 'react';
import Login from './components/Login';
import DashboardTeachers from './components/teachers/DashboardTeachers'
import "./sass/main.scss";


function App() {
  return (
    <Fragment>
      {/* <Login /> */}
      <DashboardTeachers />
    </Fragment>
  );
}

export default App;
