import React, { Fragment } from "react";
import Footer from './Footer';
import Header from './Header';
import WelcomeParents from './parents/WelcomeParents';

const WelcomeParents = () => {
  return (
    <Fragment>
      <Header />
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

export default WelcomeParents;
