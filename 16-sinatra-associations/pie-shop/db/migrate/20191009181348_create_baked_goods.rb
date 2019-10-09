class CreateBakedGoods < ActiveRecord::Migration
  def change
    create_table :baked_goods do |t|
      t.string :name
      t.integer :price
      t.integer :baker_id

      t.timestamps null: false
    end
  end
end
