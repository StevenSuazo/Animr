// import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

// const _nullUser = {
//   id: null
// };

// const sessionReducer = (oldState = _nullUser, action) => {
//   Object.freeze(oldState);
//   switch (action.type) {
//     case RECEIVE_CURRENT_USER:
//       return { id: action.currentUser.id };
//     case LOGOUT_CURRENT_USER:
//       return _nullUser;
//     default:
//       return oldState;
//   }
// };

// export default sessionReducer;

import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from './../actions/session_actions';

const _nullSession = {
  id: null
};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { id: action.user.id });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
}

export default sessionReducer;