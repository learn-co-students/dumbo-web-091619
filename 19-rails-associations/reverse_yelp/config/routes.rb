Rails.application.routes.draw do
  resources :customers, only: [:show, :new, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # get "/restaurants", to: "restaurants#index"
  # get "/restaurants/new", to: "restaurants#new"
  # get "/restaurants/:id", to: "restaurants#show"

  resources :restaurants #, only: [:index, :show, :new, :create, :edit, :update]
end
