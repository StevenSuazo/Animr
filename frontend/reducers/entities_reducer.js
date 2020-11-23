import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import photosReducer from "./photos_reducers";

const entitiesReducer = combineReducers({
  users: usersReducer,
  photos: photosReducer
});

export default entitiesReducer;