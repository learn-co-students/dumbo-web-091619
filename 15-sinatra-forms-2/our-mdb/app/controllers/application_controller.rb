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
    # model
    @movies = Movie.all
    # render/redirect
    erb :index
  end

  get '/movies/new' do
    # render
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

    # erb :show
    redirect to "/movies/#{@movie.id}"
  end

  get '/movies/:id/edit' do
    @movie = Movie.find(params[:id])
    erb :edit
  end

  put '/movies/:id' do
    # model
    movie = Movie.find(params[:id])
    movie.update(params[:movie])

    # render/redirect
    redirect to "/movies/#{movie.id}"
  end

  delete '/movies/:id' do
    movie = Movie.find(params[:id])
    movie.destroy
    redirect to "/movies"
  end

end