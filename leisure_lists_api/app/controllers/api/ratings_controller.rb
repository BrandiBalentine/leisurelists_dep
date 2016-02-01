class Api::RatingsController < ApplicationController
  def create
    render json: Rating.create!(rating_params)
  end

  def show
    render json: Rating.find(params[:id])
  end

  def update
    rating = Rating.find(params[:id])
    rating.update!(rating_params)
    render json: rating
  end

  private

  def rating_params
    params.require(:rating).permit(:game_id, :user_id, :value)
  end

end
