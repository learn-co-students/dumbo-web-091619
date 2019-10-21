class ApplicationController < ActionController::Base
  before_action :set_page_view

  private

  def set_page_view
    if session["page_views_remaining"] == nil
      session["page_views_remaining"] = 5
    end
  end

  def decrease_page_views
    session["page_views_remaining"] = session["page_views_remaining"] - 1
  end
end
