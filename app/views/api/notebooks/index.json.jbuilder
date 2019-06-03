@notebooks.each do |notebook|
    json.set! notebook.id do
        json.extract! notebook, :id, :name, :user_id, :updated_at, :note_ids
        
    end
end
