json.extract! user, :email, :id, :default_notebook
json.notebook_ids user.notebooks.pluck(:id)