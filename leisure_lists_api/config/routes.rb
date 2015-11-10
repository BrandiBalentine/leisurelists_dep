Rails.application.routes.draw do
  namespace :api do
    post 'login', to: 'user_sessions#login'
    resources :games
    resources :users do
    end
  end
end
