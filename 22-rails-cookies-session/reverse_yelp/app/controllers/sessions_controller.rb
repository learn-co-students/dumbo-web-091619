class SessionsController < ApplicationController

  def reset
    session["page_views_remaining"] = 5
    # redirect_to customers_path
    redirect_back(fallback_location: customers_path)
  end

end