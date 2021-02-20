import { RECEIVE_PHOTO_ERRORS, RECEIVE_PHOTO } from './../actions/photos_actions';

const photoErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PHOTO_ERRORS:
            return action.errors ? action.errors : [];
        case RECEIVE_PHOTO:
            return [];
        default:
            return state;
    }
}

export default photoErrorsReducer;