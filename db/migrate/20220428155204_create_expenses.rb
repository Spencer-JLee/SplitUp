class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|
      t.integer :owner_id, null: false
      t.float :amount, null: false
      t.text :description, null: false
      t.string :split_option, null: false
      t.timestamps
    end
    add_index :expenses, :owner_id
  end
end
