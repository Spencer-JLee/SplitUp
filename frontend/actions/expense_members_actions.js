import * as ExpenseMemberApiUtil from "../util/expense_member_api_util";
import { fetchExpense } from "../util/expense_api_util";

export const RECEIVE_EXPENSE = "RECEIVE_EXPENSE"

const receiveExpense = expense => {
    return ({
        type: RECEIVE_EXPENSE,
        expense
    })
}

export const createExpenseMember = (expenseMember) => dispatch => 
ExpenseMemberApiUtil.createExpenseMember(expenseMember)
.then(expenseMember => fetchExpense(expenseMember.expense_id))
.then(expense => dispatch(receiveExpense(expense)))

export const updateExpenseMember = (expenseMember) => dispatch => 
ExpenseMemberApiUtil.updateExpenseMember(expenseMember)
.then(expenseMember => fetchExpense(expenseMember.expense_id))
.then(expense => dispatch(receiveExpense(expense)))

export const deleteExpenseMember = (expenseMember) => dispatch =>
ExpenseMemberApiUtil.deleteExpenseMember(expenseMember)
.then(expenseMember => fetchExpense(expenseMember.expense_id))
.then(expense => dispatch(receiveExpense(expense)))