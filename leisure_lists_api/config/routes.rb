Rails.application.routes.draw do
  namespace :api do
    delete 'logout', to: 'user_sessions#logout'
    get 'authenticate', to: 'user_sessions#authenticate'
    post 'login', to: 'user_sessions#login'
    resources :games
    resources :users
    resources :ratings
  end
end
