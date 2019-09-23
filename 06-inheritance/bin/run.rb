require 'pry'

require_relative "../lib/flyable"
require_relative "../lib/animal"
require_relative "../lib/mammal"

require_relative "../lib/panda"
require_relative "../lib/tiger"
require_relative "../lib/sloth"
require_relative "../lib/frog"

po = Panda.new("Po")
tony = Tiger.new("Tony", "Frosted Flakes")
slothy = Sloth.new("Slothy")
kermit = Frog.new("Kermit")

binding.pry
puts "done!"
