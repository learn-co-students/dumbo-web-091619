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
    @customer = Customer.find(params[:id])
  end

  private

  def customer_params
    params.require(:customer).permit(:name, :avatar)
  end

end
