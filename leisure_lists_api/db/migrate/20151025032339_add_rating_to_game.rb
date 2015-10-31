class AddRatingToGame < ActiveRecord::Migration
  def change
    add_column :games, :rating, :integer
  end
end
