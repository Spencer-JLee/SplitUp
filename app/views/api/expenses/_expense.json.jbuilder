json.extract! expense, :id, :owner_id, :amount, :description, :split_option
json.allExpenseMembers expense.users.pluck(:user_id)
json.balances Hash[expense.expense_members.map{ |expense_member| [expense_member.user_id, expense_member.balance]}]
json.comments expense.comments
