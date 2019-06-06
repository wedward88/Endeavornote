class RemoveNullContraintUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :default_notebook_id, :integer, null: true
  end
end
