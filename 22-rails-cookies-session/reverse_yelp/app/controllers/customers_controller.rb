class CustomersController < ApplicationController

  def index
    @customers = Customer.all
  end

  def new
    @customer = Customer.new
  end

  def create
    customer = Customer.create(customer_params)
    if customer.valid?
      redirect_to customer
    else
      flash[:errors] = customer.errors.full_messages
      redirect_to new_customer_path
    end
  end

  def show
    # if session["page_views_remaining"] == nil
    #   session["page_views_remaining"] = 5
    # end
    decrease_page_views
    @page_views_remaining = session["page_views_remaining"]
    @customer = Customer.find(params[:id])
  end

  private

  def customer_params
    params.require(:customer).permit(:name, :avatar)
  end

end
