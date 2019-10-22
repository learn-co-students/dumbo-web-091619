Rails.application.routes.draw do
  # get "/", to: "customers#index"
  root to: "customers#index"
  resources :customer_reviews, only: [:new, :create]
  resources :customers, only: [:show, :new, :create, :index]
  resources :restaurants

  post "/sessions/reset", to: "sessions#reset"
end
