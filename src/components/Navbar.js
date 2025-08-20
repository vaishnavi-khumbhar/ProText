import React from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import logo from '../logo1.jpg'; 
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} shadow-sm`}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="logo" style={{ width: "100px", height: "32px", marginRight: "8px" }} />
          <span style={{ fontWeight: "bold" }}>ProText</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>

          {/* Dark Mode Switch */}
          <div className="form-check form-switch d-flex align-items-center">
            <input 
              className="form-check-input me-2" 
              onClick={props.toggleMode} 
              type="checkbox" 
              id="darkModeSwitch"
            />
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="darkModeSwitch">
              {props.mode === 'light' ? ' Dark Mode' : ' Light Mode'}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
};

Navbar.defaultProps = {
  title: 'TextUtils',
  aboutText: 'About'
};
