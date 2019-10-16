class CreateCustomers < ActiveRecord::Migration[6.0]
  def change
    create_table :customers do |t|
      t.string :name
      t.integer :rating
      t.string :review
      t.belongs_to :restaurant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
