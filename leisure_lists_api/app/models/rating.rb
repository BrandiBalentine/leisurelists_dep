class Rating < ActiveRecord::Base
  belongs_to :game
  belongs_to :user
  validates :game_id, presence: true,
                      uniqueness: { scope: :user_id,
                                    message: "only one rating per game, per user" }
  validates :user_id, presence: true
  validates :value, numericality: { only_integer: true },
                    inclusion: 1..5
end
