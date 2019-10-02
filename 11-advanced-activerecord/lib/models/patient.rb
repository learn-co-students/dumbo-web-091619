class Patient < ActiveRecord::Base

  has_many :relationships_where_I_am_older, class_name: "Sibling", foreign_key: "old_id"
  # => sibling instances

  has_many :younger_siblings, through: :relationships_where_I_am_older, source: :younger_sib

  has_many :relationships_where_I_am_younger, class_name: "Sibling", foreign_key: "young_id"
  # => sibling instances

  has_many :older_siblings, through: :relationships_where_I_am_younger, source: :older_sib









  has_many :appointments
  has_many :doctors, through: :appointments

  has_many :prescriptions
  # has_many :doctors, through: :prescriptions
  has_many :pharmacists, through: :prescriptions, source: :doctor

end
