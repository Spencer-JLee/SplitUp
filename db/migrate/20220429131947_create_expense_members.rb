class CreateExpenseMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :expense_members do |t|
      t.integer :user_id, null: false
      t.integer :expense_id, null: false
      t.float :balance, null: false
      t.timestamps
    end
    add_index :expense_members, :user_id
    add_index :expense_members, :expense_id
  end
end
