class ReviewsController < ApplicationController

  def create
    @shoe = Shoe.find_by(id: params[:shoe_id])
    if @shoe
      @review = Review.create(content: review_params[:content], shoe: @shoe)
      render json: @review, status: 201
    else
      render json: {error: "Shoe not found"}, status: 404
    end
  end

  private

  def review_params
    params.require(:review).permit(:content)
  end

end
