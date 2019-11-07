class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :professor_name, :upcased_name
  has_many :subjects

  def upcased_name
    teacher = self.object
    teacher.professor_name.upcase
  end

end
