export const createExpenseMember = (expenseMember) => {
    return $.ajax({
        url: '/api/expense_members',
        method: 'POST',
        data: { expenseMember }
    })
}

export const updateExpenseMember = (expenseMember) => {
    return $.ajax({
        url: `/api/expense_members/${expenseMember.id}`,
        method: 'PATCH',
        data: { expenseMember }
    })
}

export const deleteExpenseMember = (expenseMemberId) => {
    return $.ajax({
        url: `/api/expense_members/${expenseMemberId}`,
        method: 'DELETE'
    })
}