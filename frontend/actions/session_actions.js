import * as SessionAPIUtil from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER
    }
}

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
  });

export const login = (user) => dispatch => SessionAPIUtil.login(user)
.then(user => dispatch(receiveCurrentUser(user)))

export const signup = (user) => dispatch => SessionAPIUtil.signup(user)
.then(user => dispatch(receiveCurrentUser(user)))

export const logout = () => dispatch => SessionAPIUtil.logout()
.then(() => dispatch(logoutCurrentUser()))