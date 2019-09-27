class CreateFights < ActiveRecord::Migration[5.2]
  def change
    create_table :fights do |t|

      t.integer :hero_id
      t.integer :villain_id

      t.string :location
      t.timestamps
      # created_at and updated_at
    end
  end
end
