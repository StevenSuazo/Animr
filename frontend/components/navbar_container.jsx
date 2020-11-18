import React from 'react';
import NavBarIn from './navbar_in';
import NavBarOut from './navbar_out';

const Navbar = props => {
  const { currentUser, logout, history } = props;

  const handleLogout = () => {
    logout();
  };

  return currentUser ? <NavBarIn id={currentUser.id} handleLogout={handleLogout} /> : <NavBarOut />
};


export default Navbar;

