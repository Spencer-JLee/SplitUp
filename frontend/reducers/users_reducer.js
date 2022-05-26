import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USERS, RECEIVE_USER } from "../actions/user_actions"
import { RECEIVE_FRIEND, REMOVE_FRIEND } from "../actions/friend_actions";

export const usersReducer = (state ={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USERS:
      return action.users
    case RECEIVE_USER:
      return Object.assign({}, { [action.user.id]: action.user})
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { [action.user.id]: action.user });
    case RECEIVE_FRIEND:
      return Object.assign({}, { [action.friend.id]: action.friend})
    case REMOVE_FRIEND:
      const nextState = Object.assign({}, state)
      delete nextState[action.id]
      return nextState
    default:
      return state;
  }
}