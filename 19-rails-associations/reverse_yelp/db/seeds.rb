Restaurant.destroy_all

30.times do
  Restaurant.create(name: Faker::Restaurant.name, address: Faker::Address.full_address, rating: rand(1..5))
end