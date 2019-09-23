# Frog:
#   - jump
#   - sing
#   - eat
#   - sleep
#   - poop
#   - ribbit
class Frog < Animal
  # extend Flyable

  # include Flyable
  prepend Flyable

  def ribbit
    "Ribbit"
  end

  def jump
    "I am jumping"
  end

  def sing
    "I am singing"
  end

end
