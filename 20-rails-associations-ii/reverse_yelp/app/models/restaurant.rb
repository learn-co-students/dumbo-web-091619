class Restaurant < ApplicationRecord
  has_many :customer_reviews, dependent: :destroy
  has_many :customers, through: :customer_reviews
end
