class ChangeDefaultNotebookId < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :default_notebook
    add_column :users, :default_notebook_id, :integer, null: false
  end
end
