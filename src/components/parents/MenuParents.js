import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap'

const MenuParents = ({setLoginTeacher, setLoginParent, login, setLogin, filterParentMeeting, setFilterParentMeeting, chat, meetings, setCollapse}) => {

  const {fullName, userType} = login

  const handleLogout = () =>{
    if(userType === 'Padre de Familia'){
      setLoginParent(false)
      setLogin({})
      setFilterParentMeeting({
        chat:chat
      })
      localStorage.setItem("meetings", JSON.stringify(meetings))
      setFilterParentMeeting('')
    }else if(userType === 'Maestro'){
      setLoginTeacher(false)
      setLogin({})
    }
  }

  // Close nav when select a link
  const [expanded, setExpanded] = useState(false);
  
  const handleFilterParents =() =>{
    if(filterParentMeeting){
      setFilterParentMeeting({
        chat:[...chat]
      })
      localStorage.setItem("meetings", JSON.stringify(meetings))
      setFilterParentMeeting('')
    }
    return
  }

      // show-hide menu
  const [isToggled, setToggled] = useState('dash-menu col-md-2 col-sm-3');
  
  const toggleTrueFalse = () => {
    if (isToggled === 'd-none') {
      setToggled('dash-menu col-md-2 col-sm-3') 
      setCollapse(false)
    } else {
      setToggled('d-none')
      setCollapse(true)
    }
  }

  return (
    <Fragment>
      <aside className={isToggled}>
      <Navbar className="navbar" expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="dash-nav d-flex d-sm-none justify-content-between mb-5">
              <li className="text-left ml-0">
                <i className="fas fa-user mr-1"></i>
                <h5>{fullName} 
                  <span className="d-block">{userType}</span>
                </h5>
              </li>
              <li>
                <Link to="" ><i onClick={handleLogout} className="fas fa-sign-out-alt"></i></Link>
              </li>
            </ul>
            <Nav className="navbar-nav" activeKey="/WelcomeParents" as="ul">
              <Nav.Item as="li">
                <NavLink className="nav-link" activeClassName="active" onClick={() => setExpanded(false)} to={"/WelcomeParents"} onClick={handleFilterParents}>
                <i className="fas fa-home fa-fw"></i>
                <span>Inicio</span>
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink className="nav-link" activeClassName="active" onClick={() => setExpanded(false)} eventKey="link-2" to="/MeetingList" onClick={handleFilterParents}>
                  <i className="fas fa-chalkboard-teacher fa-fw"></i>
                  <span>Historial de juntas</span>
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </aside>
      <div className="col-sm-1">
      <button
        onClick={toggleTrueFalse}
        className="toggle-sidebar"
      ><i className="fas fa-chevron-right"></i> 
      </button>
      </div>
    </Fragment>
  );
};

export default MenuParents;
