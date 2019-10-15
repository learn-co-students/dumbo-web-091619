class Restaurant < ApplicationRecord
  has_many :customers, dependent: :destroy
end
