class Sibling < ActiveRecord::Base
  belongs_to :older_sib, class_name: "Patient", foreign_key: "old_id"
  belongs_to :younger_sib, class_name: "Patient", foreign_key: "young_id"
end
