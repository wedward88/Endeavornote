# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(email: 'testuser@gmail.com', password: 'testpassword')

book1 = Notebook.create!(name: 'People whose toes I hope become stubbed today.', user_id: user1.id)
book2 = Notebook.create!(name: 'People whose toes I hope DO NOT become stubbed today.', user_id: user1.id)
book3 = Notebook.create!(name: 'My favorite recipes', user_id: user1.id)
book4 = Notebook.create!(name: 'NY Football Giants Playbook', user_id: user1.id)
book5 = Notebook.create!(name: 'Legends of the Hidden Temple', user_id: user1.id)
book6 = Notebook.create!(name: 'My deepest darkest secrets', user_id: user1.id)
book7 = Notebook.create!(name: 'Everything Larry Bird', user_id: user1.id)
book8 = Notebook.create!(name: 'The Diaries of Sigourney Weaver', user_id: user1.id)

user1.default_notebook = book1.id

note1 = Note.create!(title: 'Just kidding', body: "I wouldn't wish that on my worst enemy", notebook_id: book1.id)
note2 = Note.create!(title: 'HAHAHAHAH', body: "Ok maybe on certain people.", notebook_id: book1.id)
note3 = Note.create!(title: 'Lasagna', body: "I have no idea how to make lasagna...ummm...puncture holes in the top and then throw that b**** in the microwave?", notebook_id: book3.id)
note4 = Note.create!(title: "Shepherd's Pie", body: "My momma has this recipe, I'll have to get it from here so that I can add it to my seed file....", notebook_id: book3.id)
note5 = Note.create!(title: "Wack Arnold's", body: "Psych! You don't need a recipe for this. Man, Calvin got a job!", notebook_id: book3.id)
note6 = Note.create!(title: "Give the ball to Saquon Barkley", body: "That's literally the entire play. You don't need to do anything else.", notebook_id: book4.id)
note7 = Note.create!(title: "Give the ball to Saquon Barkley", body: "That's literally the entire play. You don't need to do anything else.", notebook_id: book4.id)
note8 = Note.create!(title: "Give the ball to Saquon Barkley", body: "That's literally the entire play. You don't need to do anything else.", notebook_id: book4.id)
note9 = Note.create!(title: "Give the ball to Saquon Barkley", body: "That's literally the entire play. You don't need to do anything else.", notebook_id: book4.id)
note10 = Note.create!(title: "Give the ball to Saquon Barkley", body: "That's literally the entire play. You don't need to do anything else.", notebook_id: book4.id)
note11 = Note.create!(title: "Give the ball to Saquon Barkley", body: "That's literally the entire play. You don't need to do anything else.", notebook_id: book4.id)
note12 = Note.create!(title: "Give the ball to Saquon Barkley", body: "That's literally the entire play. You don't need to do anything else.", notebook_id: book4.id)
note13 = Note.create!(title: "Give the ball to Saquon Barkley", body: "That's literally the entire play. You don't need to do anything else.", notebook_id: book4.id)


