class CreateVillains < ActiveRecord::Migration[5.2]
  def change

    create_table :villains do |t|

      t.integer :age
      t.string :name
      t.string :power

    end

  end
end
