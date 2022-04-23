import { combineReducers } from "redux";
import { usersReducer } from "./users_reducer";
// import { benchesReducer } from "./benches";

const entitiesReducer = combineReducers({
  users: usersReducer,
//   benches: benchesReducer
});

export default entitiesReducer;