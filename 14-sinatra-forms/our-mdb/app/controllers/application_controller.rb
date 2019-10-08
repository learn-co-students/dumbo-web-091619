require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get '/' do
    erb :home
  end

  get '/movies' do
    @movies = Movie.all
    erb :index
  end

  # get '/movies/1' do
  #   @movie = Movie.find(1)
  #   erb :show
  # end

  # get '/movies/2' do
  #   @movie = Movie.find(2)
  #   erb :show
  # end

  get '/movies/new' do
    erb :new
  end

  get '/movies/:id' do
    # model
    @movie = Movie.find(params[:id])
    @thumb_rating = "👍" * @movie.how_much_ian_likes_it
    # erb 
    erb :show
  end

  post "/movies" do
    @movie = Movie.create(params)
    # @movie = Movie.create(title: params[:title], runtime: params[:runtime], how_much_ian_likes_it: params[:rating])
    # @thumb_rating = "👍" * @movie.how_much_ian_likes_it

    # erb :show
    redirect to "/movies/#{@movie.id}"
  end

end

# if "/movies"
#   do this
#   elsif "/movies/:id"
#     do this
#     elsif "/movies/whatever"
#       do this
