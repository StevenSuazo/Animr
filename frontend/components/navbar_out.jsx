import React from 'react';
import { Link } from 'react-router-dom';

const NavBarOut = props => {
  return (
    <div className= "nav-container">
      <nav className="nav-bar-out flex-center">
        <div className="navbar-container-out">
          <div className="navbar-left">
            <Link to="/" className="logo">Animr</Link>
          </div>
          <div className="navbar-right-out">
            <Link to='/login' className="login-link">Log In</Link>
            <Link to='/signup' className="signup-link">Sign Up</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBarOut;