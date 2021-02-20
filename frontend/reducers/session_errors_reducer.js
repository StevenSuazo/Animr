// import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS,} from '../actions/session_actions';

// const sessionErrorsReducer = (oldState = [], action) => {
//   Object.freeze(oldState);
//   const clear = [];
//   switch (action.type) {
//     case RECEIVE_CURRENT_USER:
//       return clear;
//     case RECEIVE_ERRORS:
//       return action.errors;
//     default:
//       return oldState;
//   }
// };

// export default sessionErrorsReducer;

import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors ? action.errors : [];
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
}

export default sessionErrorsReducer;