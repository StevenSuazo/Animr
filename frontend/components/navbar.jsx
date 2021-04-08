import React from 'react';
import { Link } from 'react-router-dom';
import { FaCloudUploadAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const NavBar = ({ currentUser, logout }) => {
  const NavBarIn = () => {
    return (

      <div className="nav-container">
        <nav className="nav-bar-out flex-center">
          <div className="navbar-container-out">
            <div className="navbar-left">
              <img src={window.logo} className="icon-logo-nav" />
              <Link to="/" className="logo">Animr</Link>
              <div className="dropdown">
                <div className="you-drop">You</div>
                <div className="dropdown-content">
                  <Link to={`/users/${currentUser.id}`}>Photostream</Link>
                  <Link to={`/users/${currentUser.id}/albums`}>Album</Link>
                </div>
              </div>
              <Link className="nav-explore" to={`/`}>Explore</Link>
            </div>
            <div className="navbar-right-out">
              <Link to="/upload">
                <i className="fa-cloud-upload-alt"><FaCloudUploadAlt size="40px" /></i>
              </Link>
              <Link to="/upload" className="logout-link" onClick={logout}>Log Out</Link>
              <a href='https://github.com/stevensuazo'>
                <i className="social-links-linked"> <FaLinkedin size="25px" /> </i>
              </a>
              <a href={`https://www.linkedin.com/in/steven-suazo-b71394143/`}>
                <i className="social-links-git"> <FaGithub size="25px" /> </i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    )
  }

  const NavBarOut = () => {
    return (
      <div className="nav-container">
        <nav className="nav-bar-out flex-center">
          <div className="navbar-container-out">
            <div className="navbar-left">
              <img src={window.logo} className="icon-logo-nav" />
              <Link to="/" className="logo">Animr</Link>
            </div>
            <div className="navbar-right-out">
              <Link to='/login' className="login-link">Log In</Link>
              <Link to='/signup' className="signup-link">Sign Up</Link>
              <a href='https://github.com/stevensuazo'>
                <i className="social-links-linked"> <FaLinkedin size="25px" /> </i>
              </a>
              <a href={`https://www.linkedin.com/in/steven-suazo-b71394143/`}>
                <i className="social-links-git"> <FaGithub size="25px" /> </i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }

    return currentUser ? NavBarIn() : NavBarOut();
}

export default NavBar;
