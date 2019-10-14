class RestaurantsController < ApplicationController

  # get /restaurants
  def index
    # model
    @restaurants = Restaurant.all
    # render :index
  end

  # get /restaurants/:id
  def show
    # model
    @restaurant = Restaurant.find(params[:id])
    # render :show
  end

  # get /restaurants/new
  def new
    @restaurant = Restaurant.new
  end

  # post /restaurants
  def create
    restaurant = Restaurant.create(restaurant_params)
    redirect_to restaurant
  end

  # get /restaurants/:id/edit
  def edit
    @restaurant = Restaurant.find(params[:id])
    # render :edit
  end

  # patch /restaurants/:id
  def update
    @restaurant = Restaurant.find(params[:id])
    @restaurant.update(restaurant_params)
    # response/redirect
    redirect_to @restaurant
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :address)
  end

end
