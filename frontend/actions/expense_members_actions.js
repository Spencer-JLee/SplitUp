import * as ExpenseMemberApiUtil from "../util/expense_member_api_util";

export const RECEIVE_EXPENSE = "RECEIVE_EXPENSE"

const receiveExpense = expense => {
    return ({
        type: RECEIVE_EXPENSE,
        expense
    })
}

export const createExpenseMember = (expenseMember) => dispatch => 
ExpenseMemberApiUtil.createExpenseMember(expenseMember).then(expense => dispatch(receiveExpense(expense)))

export const updateExpenseMember = (expenseMember) => dispatch => 
ExpenseMemberApiUtil.updateExpenseMember(expenseMember).then(expense => dispatch(receiveExpense(expense)))