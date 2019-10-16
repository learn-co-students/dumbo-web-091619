class CustomersController < ApplicationController

  def new
    @customer = Customer.new
  end

  def create
    customer = Customer.create(customer_params)
    # redirect to the restaurant show page
    redirect_to restaurant_path(customer.restaurant)
  end

  def show
    @customer = Customer.find(params[:id])
  end

  private

  def customer_params
    params.require(:customer).permit(:name)
  end

end
