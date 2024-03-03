import React from 'react'
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">{props.home}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>
            
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/ >
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='dark'?'Disable':'Enable'} Dark Mode</label>
            </div>
          </div>
        </div>
    </nav>
    </>
  )
}

// Define The types of Props
Navbar.propTypes = {
    title : PropTypes.string,
    about : PropTypes.string
};

// Set the default poprs in case if we did'nt pass the prop
Navbar.defaultProps = {
    title : 'Set The Title',
    about : 'About Text Here'
}
