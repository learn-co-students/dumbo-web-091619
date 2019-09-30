class Interface
  attr_accessor :user, :prompt

  def initialize
    @prompt = TTY::Prompt.new
  end

end
