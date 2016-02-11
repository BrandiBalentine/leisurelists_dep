class Api::UsersController < ApplicationController
  def create
    user = User.create(email: user_params[:email],
                       password: user_params[:password],
                       first_name: user_params[:first_name],
                       last_name: user_params[:last_name])
    user.user_sessions.create(session_id: SecureRandom.hex(36))
    return render json: user
  end

  def show
    user = User.find(params[:id])
    if user
      return render json: user
    else
      return render text: "Access Denied", status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
