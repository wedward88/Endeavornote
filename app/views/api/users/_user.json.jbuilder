json.extract! user, :email, :id, :default_notebook_id
json.notebook_ids user.notebooks.pluck(:id)