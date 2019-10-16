class CreateCustomerReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :customer_reviews do |t|
      t.string :review
      t.integer :rating
      t.belongs_to :restaurant, null: false, foreign_key: true
      t.references :customer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
