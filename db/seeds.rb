# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Expense.destroy_all
ExpenseMember.destroy_all

User.create(username: "Demo User", email: "demo_user@gmail.com", password: "password")
User.create(username: "John Cigale", email: "jcigale@appacademy.io", password: "expirednuts")
User.create(username: "Kin Ka Tse", email: "ktse@appacademy.io", password: "bubbletea")
User.create(username: "Jim Nardi", email: "jnardi@appacademy.io", password: "gilfoyle")
User.create(username: "Kyle Ginzburg", email: "kginzburg@appacademy.io", password: "opcomputer")
User.create(username: "Amin Babar", email: "ababar@appacademy.io", password: "olympicswinner")

Expense.create(owner_id: 6, amount: 36.00, description: "Lunch", split_option: "equally")
Expense.create(owner_id: 4, amount: 10.00, description: "Coffee", split_option: "equally")
Expense.create(owner_id: 1, amount: 24.00, description: "Churros", split_option: "equally")

ExpenseMember.create(user_id: 6, expense_id: 1, balance: 12.00)
ExpenseMember.create(user_id: 5, expense_id: 1, balance: 12.00)
ExpenseMember.create(user_id: 4, expense_id: 1, balance: 12.00)
ExpenseMember.create(user_id: 4, expense_id: 2, balance: 5.00)
ExpenseMember.create(user_id: 1, expense_id: 2, balance: 5.00)
ExpenseMember.create(user_id: 1, expense_id: 3, balance: 6.00)
ExpenseMember.create(user_id: 2, expense_id: 3, balance: 6.00)
ExpenseMember.create(user_id: 3, expense_id: 3, balance: 6.00)
ExpenseMember.create(user_id: 6, expense_id: 3, balance: 6.00)