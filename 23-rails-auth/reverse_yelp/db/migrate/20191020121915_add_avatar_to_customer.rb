class AddAvatarToCustomer < ActiveRecord::Migration[6.0]
  def change
    add_column :customers, :avatar, :string
  end
end
