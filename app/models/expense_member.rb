class ExpenseMember < ApplicationRecord
    validates :user_id, :expense_id, :balance, presence: true

    belongs_to :expense,
        class_name: :Expense,
        foreign_key: :expense_id

    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id
end
