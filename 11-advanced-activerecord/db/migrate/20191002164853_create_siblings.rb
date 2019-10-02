class CreateSiblings < ActiveRecord::Migration[5.2]
  def change

    create_table :siblings do |t|
      t.integer :old_id
      t.integer :young_id
    end

  end

end
