import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS,} from '../actions/session_actions';

const sessionErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const clear = [];
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return clear;
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;