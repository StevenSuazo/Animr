Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :photos, only: [:create, :destroy, :update, :show, :index]
    resources :users
    resource :session, only: [:create, :destroy]

  end

  root to:'static_pages#root'
end
