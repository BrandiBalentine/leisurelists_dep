class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  # before_action :logged_in?

  def current_user
    return unless params[:session_id]
    session = UserSession.find_by(session_id: params[:session_id])
    return session.user if session
  end

  def logged_in?
    unless current_user.present?
      return render text: "Access Denied", status: :unauthorized
    end
  end
end
