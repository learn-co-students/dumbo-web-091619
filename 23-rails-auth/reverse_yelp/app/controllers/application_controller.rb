class ApplicationController < ActionController::Base
  before_action :set_page_view
  before_action :set_current_restaurant

  before_action :authorized

  private

  def authorized
    if @current_restaurant == nil
      redirect_to login_path
    end
  end

  def set_current_restaurant
    @current_restaurant = Restaurant.find_by(id: session[:restaurant_id])
  end

  def set_page_view
    if session["page_views_remaining"] == nil
      session["page_views_remaining"] = 5
    end
  end

  def decrease_page_views
    session["page_views_remaining"] = session["page_views_remaining"] - 1
  end
end
