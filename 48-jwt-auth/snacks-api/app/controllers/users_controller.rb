class UsersController < ApplicationController

  def show
    user_id = params[:id]
    if user_id_from_token == user_id.to_i
      user = User.find(user_id)
      render json: user, include: :snacks
    else
      render json: { go_away: true }, status: :unauthorized
    end
  end

  def create
    user = User.create(user_params)
    if user.valid?
      render json: { ok: true }
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end 
  end

  private

  def user_params
    params.permit(:username, :password)
  end

end
