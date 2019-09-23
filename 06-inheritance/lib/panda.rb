# Panda:
#   - eat
#   - sleep
#   - fall_down
#   - poop
#   - hide
#   - kung_fu
class Panda < Mammal

  def poop
    super * 5
  end

  def fall_down
    "Oh no, I fell."
  end

  def hide
    "Get away from me"
  end

  def kung_fu
    "I am Jack Black."
  end

end
