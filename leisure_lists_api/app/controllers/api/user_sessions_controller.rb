class Api::UserSessionsController < ApplicationController

  skip_before_action :logged_in?, on: :create

  def login
    unless user = User.find_by(email: user_session_params[:email])
      return render text: "User Not Found", status: :unauthorized
    end
    if user.authenticate(user_session_params[:password])
      user.user_sessions.create(session_id: SecureRandom.hex(36))
      return render json: user
    else
      return render text: "Access Denied", status: :unauthorized
    end
  end

  def user_session_params
    params.permit(:email, :password)
  end
end
