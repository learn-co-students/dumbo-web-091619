class ChangeDefaultImageForRestaurant < ActiveRecord::Migration[6.0]
  def change
    change_column_default :restaurants, :image_url, 'https://cdn.pixabay.com/photo/2015/03/26/10/28/restaurant-691397_1280.jpg'
  end
end
