class ChangeNotebooksUnique < ActiveRecord::Migration[5.2]
  def change
    remove_index :notebooks, :name
    add_index :notebooks, :name
  end
end
