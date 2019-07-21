@tags.each do |tag|
    json.set! tag.id do
        json.extract! tag, :name
    end
end