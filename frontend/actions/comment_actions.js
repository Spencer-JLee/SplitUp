import * as CommentAPIUtil from "../util/comments_api_util";
import { fetchExpense } from "../util/expense_api_util";
import { RECEIVE_EXPENSE } from "./expense_actions";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const REMOVE_COMMENT = "REMOVE_COMMENT"

// const receiveComment = (comment) => {
//     return {
//         type: RECEIVE_COMMENT,
//         comment
//     }
// }

// const removeComment = (commentId)=> {
//     return {
//         type: REMOVE_COMMENT,
//         commentId
//     }
// }

const receiveExpense = (expense) => {
    return {
        type: RECEIVE_EXPENSE,
        expense
    }
}

export const createComment = (comment) => dispatch => CommentAPIUtil.createComment(comment)
.then(comment => fetchExpense(comment.expense_id)).then(expense => dispatch(receiveExpense(expense)))

export const deleteComment = (commentId) => dispatch => CommentAPIUtil.deleteComment(commentId)
.then(comment => fetchExpense(comment.expense_id)).then(expense => dispatch(receiveExpense(expense)))