import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  const NavBarIn = () => {
    return (

      <div className="nav-container">
        <nav className="nav-bar-out flex-center">
          <div className="navbar-container-out">
            <div className="navbar-left">
              <Link to="/" className="logo">Animr</Link>
              <Link className="you-dropdown-link unselectable" to={`/users/${currentUser.id}`}>You</Link>
            </div>
            <div className="navbar-right-out">
              <button className="logout-link" onClick={logout}>Log Out</button>
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

    return currentUser ? NavBarIn() : NavBarOut();
}

export default NavBar;
