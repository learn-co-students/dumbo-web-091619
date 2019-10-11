Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # get "/movies", to: "movies#index", as: "movies"
  # get "/movies/:id", to: "movies#show", as: "movie"
  # get "/movies/new", to: "movies#new"

  resources :movies #, only: [:index, :show, :new]

  # get "/actors", to: "actors#index"
end
