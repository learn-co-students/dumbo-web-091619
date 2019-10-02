class Doctor < ActiveRecord::Base
  has_many :appts, class_name: "Appointment", foreign_key: "doctor_id"

  has_many :patients_Ive_seen_through_appointments, through: :appts, source: :patient

  has_many :prescriptions
  has_many :patients, through: :prescriptions, source: :person
end
