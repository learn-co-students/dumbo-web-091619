class Teacher < ApplicationRecord
  has_many :subjects
  has_many :assignments, through: :subjects

  def professor_name
    "Dr. #{self.name}"
  end

end
