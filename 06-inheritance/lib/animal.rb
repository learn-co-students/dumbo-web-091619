class Animal

  attr_reader :name
  def initialize(name)
    @name = name
  end

  def eat
    "Nom nom nom"
  end

  def sleep
    "I am sleeping! 💤"
  end

  def poop
    "💩"
  end

end
