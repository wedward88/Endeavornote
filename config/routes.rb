Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :notebooks, only: [:create, :destroy, :show, :index, :update]
    resources :notes, only: [:create, :destroy, :show, :index, :update]
    resources :tags, only: [:create, :destroy, :show, :index, :update]
    resources :taggings, only: [:index]
    resource :sessions, only: [:create, :destroy]

    get 'sessions', to: 'sessions#check_email'
  end
end
