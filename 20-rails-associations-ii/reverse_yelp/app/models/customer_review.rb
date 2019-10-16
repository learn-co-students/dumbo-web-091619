class CustomerReview < ApplicationRecord
  belongs_to :restaurant
  belongs_to :customer

  def restaurant_name
    self.restaurant.name
  end
end
