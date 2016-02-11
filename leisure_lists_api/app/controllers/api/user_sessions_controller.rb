class Api::UserSessionsController < ApplicationController

  skip_before_action :authenticated?, only: [:login, :authenticate_session]

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

  def logout
    if user_session = UserSession.find_by(session_id: params[:session_id])
      user_session.destroy!
      return render nothing: true
    else
      return render text: "User Session Not Found", status: :unauthorized
    end
  end

  def authenticate_session
    if user_session = UserSession.find_by(session_id: params[:session_id])
      return render json: user_session
    else
      return render text: "User Session Not Found", status: :unauthorized
    end
  end

  def user_session_params
    params.permit(:email, :password)
  end
end
