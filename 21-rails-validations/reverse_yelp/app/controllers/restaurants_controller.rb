class RestaurantsController < ApplicationController

  # get /restaurants
  def index
    # model
    @restaurants = Restaurant.all

    # render/redirect
    # render :index
  end

  # get /restaurants/:id
  def show
    # model
    @restaurant = Restaurant.find(params[:id])

    # render/redirect
    # render :show
  end

  # get /restaurants/new
  def new
    # model
    @restaurant = Restaurant.new

    # render/redirect
    # render :new
  end

  # post /restaurants
  def create
    # model
    restaurant = Restaurant.create(restaurant_params)

    # render/redirect
    # redirect_to "/restaurants/#{restaurant.id}"
    # redirect_to restaurant_path(restaurant)
    redirect_to restaurant
  end

  # get /restaurants/:id/edit
  def edit
    # model
    @restaurant = Restaurant.find(params[:id])

    # render :edit
  end

  # patch /restaurants/:id
  def update
    # model
    @restaurant = Restaurant.find(params[:id])
    @restaurant.update(restaurant_params)

    # render/redirect
    redirect_to @restaurant
  end

  # delete /restaurants/:id
  def destroy
    resto = Restaurant.find(params[:id])
    resto.destroy

    # render/redirect
    redirect_to restaurants_path
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :rating)
  end

end
