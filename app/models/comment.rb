class Comment < ApplicationRecord
    validates :author_id, :expense_id, :body, presence: true

    belongs_to :expense,
        foreign_key: :expense_id,
        class_name: :Expense
    
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
end
