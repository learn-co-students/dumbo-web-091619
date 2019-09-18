require 'pry'

clown_joke = "Why don't sharks eat clowns? They taste funny."
clown_names = [ "Bluster", "Flaky", "Raspy", "Floppy", "Krusty", "Baby" ]

class Clown
  attr_reader :hair, :fear # 2
  attr_writer :age # 1
  attr_accessor :name, :skill # 4
  # Initialize Method (New)

  def initialize(name, age, skill, fear)
    # self is the instance being created
    @name = name
    @age = age
    @skill = skill
    @fear = fear
    @hair = "Red"
    # self.cure()
  end

  def cure
    @fear = "Nothing"
  end

  def dance
    # self refers to the instance calling the method
    # @name => instance variable
    # self.name() => instance method whose job is to return the instance variable
    # name() => see above
    self.cure()
    "#{self.name()} is dancing!"
  end
  # Writing/Setting some information

  # def name=(name)
  #   @name = name
  # end

  # Reading/Getting some information

  # def name
  #   @name
  # end


end

clown1 = Clown.new("Bluster", 40, "juggling", "red noses")
clown2 = Clown.new("Flaky", 32, "pie throwing", "children")
clown3 = Clown.new("Raspy", 24, "haunting your dreams","other clowns")
clown4 = Clown.new("Floppy", 76, "falling down","stairs")
clown5 = Clown.new("Krusty", 39, "giving a creepy smile","parties")
clown6 = Clown.new("Baby", 19, "eating a lot of food","birds")

clowns = [ clown1, clown2, clown3, clown4, clown5, clown6 ]

















binding.pry
0
