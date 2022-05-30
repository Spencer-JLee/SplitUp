import * as FriendAPIUtil from "../util/friend_api_util";

export const RECEIVE_FRIEND = "RECEIVE_FRIEND"
export const REMOVE_FRIEND = "REMOVE_FRIEND"

const receiveFriend = (currentUser) => {
    return {
        type: RECEIVE_FRIEND,
        currentUser
    }
}

const removeFriend = (currentUser) => {
    return {
        type: REMOVE_FRIEND,
        currentUser
    }
}

export const createFriend = (friend) => dispatch => FriendAPIUtil.createFriend(friend)
.then(currentUser => dispatch(receiveFriend(currentUser)))

export const deleteFriend = (id) => dispatch => FriendAPIUtil.deleteFriend(id)
.then(currentUser => dispatch(removeFriend(currentUser)))