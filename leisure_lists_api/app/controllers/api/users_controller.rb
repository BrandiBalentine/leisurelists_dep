class Api::UsersController < ApplicationController

  skip_before_action :logged_in?, on: :create

  def create
    user = User.create(email: user_params[:email],
                       password: user_params[:password],
                       first_name: user_params[:first_name],
                       last_name: user_params[:last_name])
    user.user_sessions.create(session_id: SecureRandom.hex(36))
    return render json: user
  end

  def show
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
