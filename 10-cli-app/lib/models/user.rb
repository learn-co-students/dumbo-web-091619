class User < ActiveRecord::Base
  has_many :teams
  @@prompt = TTY::Prompt.new
  # has_many :heros, through: :teams

  def self.handle_new_user
    puts "What is your name?"
    name = gets.chomp
    puts "What is your username?"
    username = gets.chomp
    User.create(name: name, username: username)
  end

  def self.handle_returning_user
    puts "Welcome back! What is your username?"
    username = gets.chomp
    # puts "What is your password?"
    # passwordVar = @@prompt.mask("What is your password?")
    User.find_by(username: username)
  end

  def main_menu
    self.reload
    system "clear"
    puts "Welcome, #{self.name}!"
    @@prompt.select("What would you like to do today?") do |menu|
      menu.choice "See Teams", -> { self.display_teams }
      menu.choice "Log Out", -> { `open https://www.google.com/` }
    end
  end

  def display_teams
    myTeams = self.teams.map { |team| {team.name => team.id} }
    if myTeams.size == 0
      myTeams = ["You don't have any teams to display."]
    end
    @@prompt.select("Choose a team to see more information", myTeams)
    self.main_menu
  end












end
