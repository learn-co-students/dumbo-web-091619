# delete existing restaurants in case we need to modify the seed data and re-run rails db:seed
Restaurant.destroy_all
Customer.destroy_all

# we're pulling in sample data read from a file with JSON data
# you could also make an API call here to get data to seed (like the Yelp API, just note you'd also need an API key to get this to work: https://api.yelp.com/v3/businesses/search?term=restaurant&location=Dumbo, NYC&limit=30)
json_file = File.read(File.join(Rails.root, 'db', 'restaurants.json'))

# reading the file will return a string, we need to parse it into a Ruby hash
restaurant_hash = JSON.parse(json_file)

# now we can iterate over the array of businesses in the hash to create restaurants
restaurant_hash["businesses"].each do |restaurant|
  Restaurant.create(
    name: restaurant["name"], 
    address: restaurant["location"]["display_address"].join("\n"), 
    rating: restaurant["rating"].to_i
  )
end

30.times do
  Customer.create(name: Faker::Name.name)
end

# CustomerReview.create(restaurant_id: 1)

# or if that seems too tricky, use Faker!
# 30.times do
#   Restaurant.create(
#     name: Faker::Restaurant.name, 
#     address: Faker::Address.full_address, 
#     rating: rand(1..5)
#   )
# end