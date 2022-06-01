import { combineReducers } from "redux";
import { usersReducer } from "./users_reducer";
import { expensesReducer } from "./expenses_reducer"
import { commentsReducer } from "./comments_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  expenses: expensesReducer,
  // comments: commentsReducer
});

export default entitiesReducer;