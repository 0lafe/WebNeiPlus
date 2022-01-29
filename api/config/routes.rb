Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "homes#index"

  namespace :api do
    resources :recipes, only: [:index, :show]
    resources :items, only: [:show]
    resources :recipe_types, only: [:show]
  end

  get "*path", to: "homes#index"

end
