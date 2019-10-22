class RestaurantsController < ApplicationController
  before_action :set_restaurant, only: [:show, :edit, :update, :destroy]
  before_action :authorize_restaurant, only: [:edit, :update, :destroy]
  skip_before_action :authorized, only: [:new, :create]

  # get /restaurants
  def index
    @restaurants = Restaurant.all
    # render :index
  end

  # get /restaurants/:id
  # set_restaurant
  def show
    # render :show
  end

  # get /restaurants/new
  def new
    @restaurant = Restaurant.new
    # render :new
  end

  # post /restaurants
  def create
    restaurant = Restaurant.create(restaurant_params)
    if restaurant.valid?
      session[:restaurant_id] = restaurant.id
      redirect_to restaurant
    else
      flash[:errors] = restaurant.errors.full_messages
      redirect_to new_restaurant_path
    end
  end

  # get /restaurants/:id/edit
  # set_restaurant
  def edit
    # authorize_restaurant
    render :edit
  end

  # patch /restaurants/:id
  # set_restaurant
  def update
    # authorize_restaurant
    @restaurant.update(restaurant_params)

    redirect_to @restaurant
  end

  # delete /restaurants/:id
  def destroy
    # authorize_restaurant
    @restaurant.destroy

    redirect_to restaurants_path
  end

  private

  def authorize_restaurant
    if @restaurant != @current_restaurant
      redirect_to restaurants_path
    end

  end

  def set_restaurant
    @restaurant = Restaurant.find(params[:id])
  end

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :rating, :image_url, :username, :password)
  end

end
