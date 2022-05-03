class Expense < ApplicationRecord
    validates :owner_id, :amount, :description, :split_option, presence: true

    has_many :expense_members,
        class_name: :ExpenseMember,
        foreign_key: :expense_id,
        dependent: :destroy

    has_many :users,
        through: :expense_members,
        source: :user
end
