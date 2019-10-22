class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:new, :create, :destroy]

  def reset
    session["page_views_remaining"] = 5
    
    redirect_back fallback_location: customers_path
  end

  def new
    # render :new
  end

  def create
    resto = Restaurant.find_by(username: params[:session][:username])
    if resto && resto.authenticate(params[:session][:password])
      session[:restaurant_id] = resto.id
      redirect_to restaurants_path
    else
      flash[:errors] = ["Nah, that's not right."]
      redirect_to login_path
    end
  end

  def destroy
    session.delete(:restaurant_id)
    redirect_to login_path
  end

end