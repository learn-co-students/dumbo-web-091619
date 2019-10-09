class BakedGoodsController < ApplicationController

  # GET: /baked_goods/new
  get "/baked_goods/new" do
    @bakers = Baker.all
    erb :"/baked_goods/new.html"
  end

  # POST: /baked_goods
  post "/baked_goods" do
    BakedGood.create(params)
    redirect "/bakers"
  end

end

