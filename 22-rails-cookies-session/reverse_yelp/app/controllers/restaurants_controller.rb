class RestaurantsController < ApplicationController
  before_action :set_restaurant, only: [:show, :edit, :update, :destroy]

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
    # set_restaurant
    decrease_page_views

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
    # set_restaurant

    # render :edit
  end

  # patch /restaurants/:id
  # set_restaurant
  def update
    # model
    # set_restaurant
    @restaurant.update(restaurant_params)

    # render/redirect
    redirect_to @restaurant
  end

  # delete /restaurants/:id
  def destroy
    # set_restaurant
    @restaurant.destroy

    # render/redirect
    redirect_to restaurants_path
  end

  private

  def set_restaurant
    @restaurant = Restaurant.find(params[:id])
  end

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :rating, :image_url)
  end

end
