class CreateBakers < ActiveRecord::Migration
  def change
    create_table :bakers do |t|
      t.string :nickname
      t.integer :exp_level

      t.timestamps null: false
    end
  end
end
