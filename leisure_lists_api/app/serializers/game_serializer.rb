class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :system, :release_date, :created_at, :updated_at, :image, :rating
end
