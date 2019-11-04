class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.belongs_to :shoe, foreign_key: true
      t.string :content

      t.timestamps
    end
  end
end
