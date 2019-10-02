class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|

      t.integer :doctor_id
      t.integer :patient_id
      t.string :date

      t.timestamps
    end
  end
end
