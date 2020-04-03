import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap'

const MenuTeachers = ({ setLoginTeacher, setLoginParent, login, setLogin }) => {

  const { fullName, userType } = login

  const handleLogout = () => {

    if (userType === 'parent') {
      setLoginParent(false)
      setLogin({})
    } else if (userType === 'teacher') {
      setLoginTeacher(false)
      setLogin({})
    }
  }

  // Close nav when select a link
  const [expanded, setExpanded] = useState(false);

  return (
    <Fragment>
      <aside className="dash-menu col-md-2 col-sm-3">
        <Navbar className="navbar" expand="lg">
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
                <Link to=""><i onClick={handleLogout} className="fas fa-sign-out-alt"></i></Link>
              </li>
            </ul>
            <Nav className="navbar-nav" activeKey="/DashboardTeachers" as="ul">
              <Nav.Item as="li">
                <NavLink className="nav-link" activeClassName="active" onClick={() => setExpanded(false)} to={"/DashboardTeachers"}>
                  <i className="fas fa-calendar-alt fa-fw"></i>
                  <span>Calendario de Juntas</span>
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink className="nav-link" activeClassName="active" onClick={() => setExpanded(false)} eventKey="link-2" to="/meetingHistoryTeachers">
                  <i className="fas fa-folder-open fa-fw"></i>
                  <span>Historial de Juntas</span>
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink className="nav-link" activeClassName="active" onClick={() => setExpanded(false)} eventKey="link-3" to="/NewMeeting">
                  <i className="far fa-calendar-check fa-fw"></i>
                  <span>Agendar Nueva Junta</span>
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </aside>
    </Fragment>
  );
};

export default MenuTeachers;
