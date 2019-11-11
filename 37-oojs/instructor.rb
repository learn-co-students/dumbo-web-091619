require 'pry'

class Instructor

  attr_reader :name, :full_name

  # constructor
  def initialize(name, full_name)
    @name = name
    @full_name = full_name
  end

  def introduce
    "Hello, I'm #{ self.name }!"
  end

end

eric = Instructor.new("Eric", "Eric Kim")












binding.pry
