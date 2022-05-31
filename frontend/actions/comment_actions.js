import * as CommentAPIUtil from "../util/comments_api_util";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const REMOVE_COMMENT = "REMOVE_COMMENT"

const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

const removeComment = (commentId)=> {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
}

export const createComment = (comment) => dispatch => CommentAPIUtil.createComment(comment)
.then(comment => dispatch(receiveComment(comment)))

export const deleteComment = (commentId) => dispatch => CommentAPIUtil.deleteComment(commentId)
.then(() => dispatch(removeComment(commentId)))