Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:create, :destroy, :update, :show, :index]
    resources :users, only: [:create, :show, :index]
    resources :albums, only: [:index, :show, :create, :destroy]
    resources :comments, only: [:index, :show, :create, :destroy]
    resources :tags, only: [:index, :show, :create, :destroy]
  end

  root to:'static_pages#root'
end
