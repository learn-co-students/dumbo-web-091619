require 'pry'
require_relative "./lib/tweet"
require_relative "./lib/user"
require_relative "./lib/like"

coffee_dad = User.new("coffee_dad", "just a dad who likes his coffee")
bodega_cats = User.new("bodega_cats", "i like cats")
ye = User.new("ye", "I'm Kanye")

cd1 = Tweet.new(coffee_dad , "this is coffee# dad's tweet")
cat1 = Tweet.new(bodega_cats, "meow meow")
cd2 = Tweet.new(coffee_dad, "Death is inevitable.")
cat2 = bodega_cats.post_tweet("catty fatty")
cat3 = Tweet.new(bodega_cats, "This is a bodega")

Like.new(bodega_cats, cat3)
Like.new(bodega_cats, cd2)
Like.new(coffee_dad, cat3)








binding.pry
0
