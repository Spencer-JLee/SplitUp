# json.extract! comment, :id, :author_id, :expense_id, :body
json.partial! 'api/expenses/expense', expense: @expense