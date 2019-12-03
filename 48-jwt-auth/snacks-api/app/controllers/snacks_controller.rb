class SnacksController < ApplicationController

  def index
    if client_has_valid_token?
      snacks = Snack.all
      render json: snacks
    else
      render json: { go_away: true }, status: :unauthorized
    end
  end

end
