Rails.application.routes.draw do
  # get "/", to: "customers#index"
  root to: "customers#index"
  resources :customer_reviews, only: [:new, :create]
  resources :customers, only: [:show, :new, :create, :index]
  resources :restaurants

  post "/sessions/reset", to: "sessions#reset"
  get "/login", to: "sessions#new", as: "login"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
