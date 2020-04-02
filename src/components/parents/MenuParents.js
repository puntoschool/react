import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const MenuParents = ({setLoginTeacher, setLoginParent, login, setLogin}) => {

  const {fullName, userType} = login

  const handleLogout = () =>{

    if(userType === 'parent'){
      setLoginParent(false)
      setLogin({})
    }else if(userType === 'teacher'){
      setLoginTeacher(false)
      setLogin({})
    }
  }

  return (
    <Fragment>
      <aside className="dash-menu col-md-2 col-sm-3">
        <nav className="navbar navbar-expand-sm">
          <button className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="dash-nav d-flex d-sm-none justify-content-between mb-5">
              <li className="text-left ml-0">
                <i className="fas fa-user mr-1"></i>
                <h5>
                  {fullName} <span className="d-block">{userType}</span>
                </h5>
              </li>
              <li>
              <Link to="/WelcomeParents"><i className="fas fa-home"></i></Link>
              </li>
              <li>
              <Link to="/" ><i onClick={handleLogout} className="fas fa-sign-out-alt"></i></Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item active">
              <Link className="nav-link" to="/WelcomeParents">
                <i className="fas fa-home fa-fw"></i>
                <span>Inicio</span>
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/MeetingList" >
              <i className="fas fa-chalkboard-teacher fa-fw"></i>
                  <span>Historial de juntas</span>
              </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </Fragment>
  );
};

export default MenuParents;
