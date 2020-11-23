Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:create, :destroy, :update, :show, :index]
    resources :users, only: [:create, :show, :index] do
      resources :photos, only: [:index]
    end

  end

  root to:'static_pages#root'
end
