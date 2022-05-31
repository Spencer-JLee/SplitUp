import { SessionReducer } from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import { commentsReducer } from "./comments_reducer";
import { combineReducers } from "redux";
// import uiReducer from "./ui";

export const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: SessionReducer,
  errors: errorsReducer,
  comments: commentsReducer
//   filters: uiReducer
});