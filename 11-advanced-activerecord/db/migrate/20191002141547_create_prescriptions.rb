class CreatePrescriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :prescriptions do |t|

      t.integer :doctor_id
      t.integer :patient_id
      t.string :medicine

      t.timestamps
    end
  end
end
