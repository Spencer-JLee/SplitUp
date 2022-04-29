import { combineReducers } from "redux";
import { usersReducer } from "./users_reducer";
import { expensesReducer } from "./expenses_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  expenses: expensesReducer
});

export default entitiesReducer;