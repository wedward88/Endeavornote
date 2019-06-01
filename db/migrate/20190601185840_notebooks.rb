class Notebooks < ActiveRecord::Migration[5.2]
  def change
    create_table :notebooks do |t|
      t.string :name, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :notebooks, :name, unique: true
    add_index :notebooks, :user_id
  end
end
