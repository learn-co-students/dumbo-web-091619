class AddUsernamePasswordToRestaurants < ActiveRecord::Migration[6.0]
  def change
    add_column :restaurants, :username, :string
    add_column :restaurants, :password_digest, :string
  end
end
