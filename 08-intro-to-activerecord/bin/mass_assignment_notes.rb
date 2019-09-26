require_relative "../config/environment"

class Clown

  attr_accessor :name, :age, :fears, :skill

  def initialize(attribute_hash)
    attribute_hash.each do |attribute, value|
      self.send("#{attribute}=", value)
      # attribute_hash[attribute] = value
    end
  end

end

krusty = Clown.new({name: "Krusty", age: 2, skill: "Juggling Chainsaws"})
blanky = Clown.new({})
















binding.pry
0
