class CreateTaggings < ActiveRecord::Migration[5.2]
  def change

    create_table :tags do |t|
      t.string :name, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    create_table :taggings do |t|
      t.integer :note_id, null: false
      t.integer :tag_id, null: false

      t.timestamps
    end
  end

end
