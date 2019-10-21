# delete existing restaurants in case we need to modify the seed data and re-run rails db:seed
puts "Deleting existing data..."
Restaurant.destroy_all
Customer.destroy_all

puts "Fetching Yelp data..."
### OPTION 1: Seed from JSON file
json_file = File.read(File.join(Rails.root, 'db', 'restaurants.json'))
restaurant_hash = JSON.parse(json_file)

### OPTION 2: Seed from API requests, see: app/adapters/yelp/adapter.rb
# yelp_client = Yelp::Adapter.new
# restaurant_hash = yelp_client.search("Restaurants", "Dumbo NYC")

# create restaurants
puts "Seeding restaurants..."
restaurant_hash["businesses"].each do |restaurant|
  Restaurant.create(
    name: restaurant["name"], 
    address: restaurant["location"]["display_address"].join("\n"), 
    rating: restaurant["rating"].to_i,
    image_url: restaurant["image_url"]
  )
end

# create customers
puts "Seeding customers..."
30.times do
  Customer.create(
    name: Faker::Name.name,
    avatar: Faker::Avatar.image(size: "200x200")
  )
end

# create customer reviews
puts "Seeding customer reviews..."
Customer.all.each do |customer|
  rand(1..3).times do
    CustomerReview.create(
      customer: customer, 
      restaurant: Restaurant.order('RANDOM()').first, 
      rating: rand(1..5), 
      review: Faker::Hipster.paragraph
    )
  end
end

puts "Done!"