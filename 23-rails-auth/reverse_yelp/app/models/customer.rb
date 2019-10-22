class Customer < ApplicationRecord
  has_many :customer_reviews, dependent: :destroy
  has_many :restaurants, through: :customer_reviews

  def average_rating
    customer_reviews.average(:rating).to_f.round(2)
  end

  def latest_review
    latest_customer_review = customer_reviews.order(created_at: :desc).first
    if latest_customer_review
      latest_customer_review.review
    else
      "No reviews yet for this customer"
    end
  end
  
end
