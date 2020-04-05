import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const MenuParents = ({setLoginTeacher, setLoginParent, login, setLogin, filterParentMeeting, setFilterParentMeeting}) => {

  const {fullName, userType} = login

  const handleLogout = () =>{

    if(userType === 'Padre de Familia'){
      setLoginParent(false)
      setLogin({})
    }else if(userType === 'Maestro'){
      setLoginTeacher(false)
      setLogin({})
    }
  }

  const handleFilterParents =() =>{
    if(filterParentMeeting){
      setFilterParentMeeting('')
    }
    return
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
                <h5>{fullName} 
                  <span className="d-block">{userType}</span>
                </h5>
              </li>
              <li>
                <Link to="/WelcomeParents"><i className="fas fa-home"></i></Link>
              </li>
              <li>
                <Link to="" ><i onClick={handleLogout} className="fas fa-sign-out-alt"></i></Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink activeClassName="is-selected" className="nav-link" to={'/WelcomeParents'} onClick={handleFilterParents}>
                  <i className="fas fa-home fa-fw"></i>
                  <span>Inicio</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="is-selected" className="nav-link" to={'/MeetingList'} onClick={handleFilterParents}>
                  <i className="fas fa-chalkboard-teacher fa-fw" ></i>
                  <span>Historial de juntas</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </Fragment>
  );
};

export default MenuParents;
