Rails.application.routes.draw do
  root to: "customers#index"
  resources :customer_reviews, only: [:new, :create]
  resources :customers, only: [:show, :new, :create, :index]
  resources :restaurants
end
