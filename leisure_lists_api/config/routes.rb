Rails.application.routes.draw do
  namespace :api do
    post 'login', to: 'user_sessions#login'
    delete 'logout', to: 'user_sessions#logout'
    resources :games
    resources :users
    resources :ratings
  end
end
