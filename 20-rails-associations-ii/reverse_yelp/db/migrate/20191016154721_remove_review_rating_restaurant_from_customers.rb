class RemoveReviewRatingRestaurantFromCustomers < ActiveRecord::Migration[6.0]
  def change
    remove_column :customers, :review, :string
    remove_column :customers, :rating, :integer
    remove_column :customers, :restaurant_id, :integer
  end
end
