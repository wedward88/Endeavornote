@notebooks.each do |notebook|
    json.set! notebook.id do
        json.extract! notebook, :id, :name, :user_id, :updated_at
        json.note_ids Note.where(notebook_id: notebook.id).pluck(:id)
    end
end