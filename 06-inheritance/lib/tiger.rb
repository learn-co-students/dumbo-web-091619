# Tiger:
#   - eat_cereal
#   - eat
#   - sleep
#   - poop
#   - attack
#   - roar
class Tiger < Mammal

  attr_reader :cereal
  def initialize(name, fav_cereal)
    super(name)
    @cereal = fav_cereal
  end

  def eat_cereal
    "They're grreeeeeatt!"
  end

  def attack
    "I am attacking"
  end

  def roar
    "Roar"
  end

end
