require_relative "../config/environment"

class Clown

  attr_accessor :name, :age, :fears, :skill

  def initialize(name, age, fears, skill)
    @name, @age, @fears, @skill = name, age, fears, skill
  end

end

krusty = Clown.new("Krusty", 2, "Children", "Juggling Chainsaws")

binding.pry
0
