class AddColumnUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :default_notebook, :string, null: false
  end
end
