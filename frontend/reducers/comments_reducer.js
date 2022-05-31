import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";

export const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_COMMENT:
            return Object.assign({}, state, {[action.comment.id]: action.comment})
        case REMOVE_COMMENT:
            const nextState = Object.assign({}, state)
            delete nextState[action.commentId]
            return nextState
        default:
            return state;
    }
}