require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  # TODO: create a route to render a homepage
  get '/' do
    erb :home
  end

  # TODO: show all the movies
  get '/movies' do
    @movies = Movie.all
    erb :index
  end

  # TODO: show one single movie
  get '/movies/:id' do
    # model
    @movie = Movie.find(params[:id])
    # erb 
    erb :show
  end

end

# if "/movies"
#   do this
#   elsif "/movies/:id"
#     do this
#     elsif "/movies/whatever"
#       do this
