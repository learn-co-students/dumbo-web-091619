class BakersController < ApplicationController

  # GET: /bakers
  get "/bakers" do
    @bakers = Baker.all
    erb :"/bakers/index.html"
  end

  # GET: /bakers/new
  get "/bakers/new" do
    erb :"/bakers/new.html"
  end

  # POST: /bakers
  post "/bakers" do
    redirect "/bakers"
  end

  # GET: /bakers/5
  get "/bakers/:id" do
    @baker = Baker.find(params[:id])
    erb :"/bakers/show.html"
  end

  # GET: /bakers/5/edit
  get "/bakers/:id/edit" do
    erb :"/bakers/edit.html"
  end

  # PATCH: /bakers/5
  patch "/bakers/:id" do
    redirect "/bakers/:id"
  end

  # DELETE: /bakers/5/delete
  delete "/bakers/:id/delete" do
    redirect "/bakers"
  end
end
