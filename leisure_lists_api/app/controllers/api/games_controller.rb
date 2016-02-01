class Api::GamesController < ApplicationController
  def create
    render json: Game.create!(game_params)
  end

  def destroy
    render json: Game.find(params[:id]).destroy!
  end

  def index
    render json: Game.all
  end

  def show
    render json: Game.find(params[:id])
  end

  def update
    game = Game.find(params[:id])
    game.update!(game_params)
    render json: game
  end

  private

  def game_params
    params.require(:game).permit(:title, :system, :release_date, :image, :rating)
  end
end
