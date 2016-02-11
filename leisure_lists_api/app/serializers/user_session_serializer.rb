class UserSessionSerializer < ActiveModel::Serializer
  attributes :id, :session_id, :user_id
end
