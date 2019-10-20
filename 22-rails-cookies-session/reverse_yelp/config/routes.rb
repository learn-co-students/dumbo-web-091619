Rails.application.routes.draw do
  root to: "restaurants#index"
  resources :customer_reviews, only: [:new, :create]
  resources :customers, only: [:show, :new, :create, :index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # get "/restaurants", to: "restaurants#index"
  # get "/restaurants/new", to: "restaurants#new"
  # get "/restaurants/:id", to: "restaurants#show"

  resources :restaurants #, only: [:index, :show, :new, :create, :edit, :update]
end
