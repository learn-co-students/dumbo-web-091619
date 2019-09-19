require 'pry'
require_relative "./lib/tweet"
require_relative "./lib/user"

coffee_dad = User.new("coffee_dad", "just a dad who likes his coffee")
bodega_cats = User.new("bodega_cats", "i like cats")

cd1 = Tweet.new(coffee_dad , "this is coffee# dad's tweet")
cat1 = Tweet.new(bodega_cats, "meow meow")
cd2 = Tweet.new(coffee_dad, "Death is inevitable.")


binding.pry
0
