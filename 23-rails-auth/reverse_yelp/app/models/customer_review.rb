class CustomerReview < ApplicationRecord
  belongs_to :restaurant
  belongs_to :customer

  # rating, check for nils?
  # rating, between 1 and 5
  validates :rating, presence: true, inclusion: { in: 1..5, message: "must be between 1 and 5" }

  # review length, max characters
  validates :review, presence: true, length: { maximum: 500 }

  def restaurant_name
    self.restaurant.name
  end
end
