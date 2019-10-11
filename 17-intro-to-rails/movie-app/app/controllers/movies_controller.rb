class MoviesController < ApplicationController

  # get "/movies" do
  #   # model
  #   @movies = Movie.all
  #   # render/redirect
  #   erb :"movies/index"
  # end

  # get "/movies"
  def index
    # model
    @movies = Movie.all
    # render/redirect
    # render :index
  end

  # get "/movies/:id"
  def show
    # model
    @movie = Movie.find(params[:id])
    @thumb_rating = "👍" * @movie.rating
    # render 
    # render :show
  end

  def new
    byebug
  end


end
