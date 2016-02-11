class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  before_action :authenticated?

  def authenticated?
    if user_session
      return true
    else
      return render text: "User Session Not Found", status: :unauthorized
    end
  end

  def user_session
    authenticate_or_request_with_http_token do |token, options|
      return UserSession.find_by(session_id: token)
    end
  end
end
