class CreateSubjects < ActiveRecord::Migration[6.0]
  def change
    create_table :subjects do |t|
      t.belongs_to :teacher, null: false, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
