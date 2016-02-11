class RatingSerializer < ActiveModel::Serializer
  attributes :id, :game_id, :user_id, :value
end
