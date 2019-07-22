@taggings.each do |tagging|
    json.set! tagging.id do
        json.extract! tagging, :id, :note_id, :tag_id
    end
end