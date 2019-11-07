class ToysController < ApplicationController

  def index
    @toys = Toy.order(likes: :desc)
    render json: @toys
  end

  def create
    @toy = Toy.create(new_toy_params)
    if @toy.valid?
      render json: @toy, status: 201
    else
      render json: {errors: @toy.errors.full_messages}, status: 401
    end
  end

  def update
    @toy = Toy.find(params[:id])
    @toy.update(edit_toy_params)
    render json: @toy
  end

  def destroy
    @toy = Toy.find(params[:id])
    @toy.destroy
    render json: @toy
  end

  private

  def edit_toy_params
    params.permit(:likes)
  end

  def new_toy_params
    params.permit(:name, :image, :likes)
  end


end
