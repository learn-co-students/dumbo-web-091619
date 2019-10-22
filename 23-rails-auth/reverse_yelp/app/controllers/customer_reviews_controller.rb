class CustomerReviewsController < ApplicationController

  def new
    @customer_review = CustomerReview.new
    @customers = Customer.all
    @restaurants = Restaurant.all
  end

  def create
    merged_params = customer_review_params.merge(restaurant_id: @current_restaurant.id)
    customer_review = CustomerReview.create(merged_params)
    
    if customer_review.valid?
      # redirect to the customer show page
      redirect_to customer_review.customer
    else
      flash[:errors] = customer_review.errors.full_messages
      redirect_to new_customer_review_path
    end
  end

  private

  def customer_review_params
    params.require(:customer_review).permit(:rating, :review, :customer_id, :restaurant_id)
  end

end
