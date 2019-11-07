Rails.application.routes.draw do
  resources :toys
  # get '/toys', to: 'toys#index', as: "toys"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
