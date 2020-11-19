import React from 'react';
import { connect } from 'react-redux';
import { logout } from "../actions/session_actions";
// import { withRouter } from 'react-router-dom';
import NavBar from './navbar';

// const Navbar = props => {
//   const { currentUser, logout, history } = props;

//   const handleLogout = () => {
//     logout();
//     history.push("/");
//   };

//   return currentUser ? <NavBarIn id={currentUser.id} handleLogout={handleLogout} /> : <NavBarOut />
// };

const mstp = ({ session, entities: { users } }) => {
  return ({
    currentUser: users[session.id],
    // history: ownProps.history
  });
};

const mdtp = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  });
};

export default connect(mstp, mdtp)(NavBar);

