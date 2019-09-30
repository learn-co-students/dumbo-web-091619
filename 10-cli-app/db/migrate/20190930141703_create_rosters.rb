class CreateRosters < ActiveRecord::Migration[5.2]
  def change
    create_table :rosters do |t|
      t.integer :team_id
      t.integer :hero_id
    end
  end
end
