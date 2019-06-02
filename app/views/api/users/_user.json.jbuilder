json.extract! user, :email, :id 
json.notebook_ids user.notebooks.pluck(:id)