class Api::GamesController < ApplicationController
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

  def game_params
    params.require(:game).permit(:title, :system, :release_date, :image)
  end
end
