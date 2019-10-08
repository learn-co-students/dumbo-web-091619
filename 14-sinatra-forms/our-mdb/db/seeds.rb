Movie.destroy_all

post = ["", " II", " III", " IV", " Part 2", ": The Sequel", " 2: Electric Boogaloo"]

30.times do
  title = Faker::Book.title + post.shuffle.first
  Movie.create(title: title, runtime: rand(65..180), how_much_ian_likes_it: rand(1..5))
end