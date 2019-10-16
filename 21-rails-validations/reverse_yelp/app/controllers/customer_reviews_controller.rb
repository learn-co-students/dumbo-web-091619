class CustomerReviewsController < ApplicationController

  def new
    @customer_review = CustomerReview.new
    @customers = Customer.all
    @restaurants = Restaurant.all
  end

  def create
    cr_params = params.require(:customer_review).permit(:rating, :review, :customer_id, :restaurant_id)
    customer_review = CustomerReview.create(cr_params)
    # render/redirect?
    # redirect_to "/restaurants/#{customer_review.restaurant.id}"
    # redirect_to restaurant_path(customer_review.restaurant)
    redirect_to customer_review.restaurant
  end

end
