class Interface
  attr_reader :prompt
  attr_accessor :user

  def initialize
    @prompt = TTY::Prompt.new
  end

  def welcome
    puts "Hello, welcome to the hero application."

    @prompt.select("Are you a returning user or a new user?") do |menu|
      menu.choice "Returning User", -> { User.handle_returning_user }
      menu.choice "New User", -> { User.handle_new_user }
    end
    # answer = @prompt.select(
    #   "Are you a returning user or a new user?",
    #   [
    #     {"Returning User" => 1},
    #     {"New User" => 2}
    #   ]
    # )

    # if answer == 1
    #   User.handle_returning_user
    # elsif answer == 2
    #   User.handle_new_user
    # end
  end


  # def main_menu
  #   puts "Welcome, #{self.user.name}!"
  #   @prompt.select("What would you like to do today?") do |menu|
  #     menu.choice "See Teams", -> { self.user.display_teams }
  #     menu.choice "Log Out", -> { puts "Smell you later" }
  #   end
  # end

end
