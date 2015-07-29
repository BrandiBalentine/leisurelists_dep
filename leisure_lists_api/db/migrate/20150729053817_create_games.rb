class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title
      t.string :system
      t.date :release_date
      t.string :image

      t.timestamps null: false
    end
  end
end
