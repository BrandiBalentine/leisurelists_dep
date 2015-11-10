class User < ActiveRecord::Base
  has_many :user_sessions
  has_secure_password
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
end
