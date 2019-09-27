class AddAgeToHeros < ActiveRecord::Migration[5.2]
  def change
    add_column :heros, :age, :integer
  end
end
