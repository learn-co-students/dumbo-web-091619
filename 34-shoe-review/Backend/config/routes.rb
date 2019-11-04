Rails.application.routes.draw do
  # resources :shoes, only: [:index, :show]

  resources :shoes, only: [:index, :show] do
    resources :reviews, only: [:create]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
