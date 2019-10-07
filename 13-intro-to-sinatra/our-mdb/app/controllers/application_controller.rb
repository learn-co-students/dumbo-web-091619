require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  # TODO: create a route to render a homepage

  # TODO: show all the movies

  # TODO: show one single movie

end
