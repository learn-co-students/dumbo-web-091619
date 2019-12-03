class SnacksController < ApplicationController

  def index
    if token_is_valid
      snacks = Snack.all
      render json: snacks
    else
      render json: { go_away: true }, status: :unauthorized
    end
  end

end
