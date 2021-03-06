class Restaurant < ApplicationRecord
  has_many :customer_reviews, dependent: :destroy
  has_many :customers, through: :customer_reviews
  validate :rating_must_be_between_1_and_5
 
  def rating_must_be_between_1_and_5
    if self.rating.nil?
      errors.add(:rating, "can't be nil")
    elsif self.rating > 5 || self.rating < 1
      errors.add(:rating, "must be between 1 and 5")
    end
  end

  # validate name not nil, and combination of name + location is uniq
  validates :name, uniqueness: { scope: :address }
  validates :username, uniqueness: true
  has_secure_password

  # def password=(plaintext_password)
  #   self.password_digest = BCrypt::Password.create(plaintext_password)
  # end

  # def authenticate(plaintext_password)
  #   BCrypt::Password.new(self.password_digest) == plaintext_password
  # end

end
