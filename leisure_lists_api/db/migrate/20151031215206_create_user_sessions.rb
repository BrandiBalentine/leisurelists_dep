class CreateUserSessions < ActiveRecord::Migration
  def change
    create_table :user_sessions do |t|
      t.string :session_id
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
