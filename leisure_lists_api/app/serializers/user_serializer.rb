class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :created_at, :updated_at

  has_many :user_sessions, :ratings
end
