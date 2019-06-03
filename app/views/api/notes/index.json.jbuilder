@notes.each do |note|
    json.set! note.id do
        json.extract! note, :id, :title, :body, :updated_at
        json.tag_ids
    end
end