import React, { Fragment } from "react";
import Footer from './Footer';
import Header from './Header';
import App from '../App';
import Login from './Login';
import WelcomeParents from './parents/WelcomeParents';

const Dashboard = ({user, logout}) => {

  return (
    <Fragment>
      <Header user={user} />
      <section className="dashboard">
        <div className="container-fluid">
            <div className="row">
                <WelcomeParents />
            </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Dashboard;
