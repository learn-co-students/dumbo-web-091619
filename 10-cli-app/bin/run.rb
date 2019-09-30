require_relative '../config/environment'

interface = Interface.new
loggedInUser = interface.welcome()

while loggedInUser.nil?
  loggedInUser = interface.welcome()
end

interface.user = loggedInUser
interface.user.main_menu

binding.pry
puts "hello world"
