class AddImageToRestaurant < ActiveRecord::Migration[6.0]
  def change
    add_column :restaurants, :image_url, :string
  end
end
