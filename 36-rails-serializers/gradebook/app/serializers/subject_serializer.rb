class SubjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :teacher_id
  has_many :assignments
  
end
