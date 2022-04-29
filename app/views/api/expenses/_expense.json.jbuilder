json.extract! expense, :id, :owner_id, :amount, :description, :split_option
json.allExpenseMembers expense.users.pluck(:user_id)
json.balances expense.expense_members.pluck(:balance)