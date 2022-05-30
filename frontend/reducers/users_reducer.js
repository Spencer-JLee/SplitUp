import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USERS, RECEIVE_USER } from "../actions/user_actions"
import { RECEIVE_FRIEND, REMOVE_FRIEND } from "../actions/friend_actions";

export const usersReducer = (state ={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_USER:
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { [action.user.id]: action.user });
    case RECEIVE_FRIEND:
    case REMOVE_FRIEND:
      const nextState = Object.assign({}, state)
      delete nextState[action.currentUser.id]
      nextState[action.currentUser.id] = action.currentUser
      return nextState
    default:
      return state;
  }
}