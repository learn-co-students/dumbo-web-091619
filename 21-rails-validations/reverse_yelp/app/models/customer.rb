class Customer < ApplicationRecord
  has_many :customer_reviews, dependent: :destroy
  has_many :restaurants, through: :customer_reviews

  # customer name unique
end
