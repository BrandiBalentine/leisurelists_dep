Rails.application.routes.draw do
  namespace :api do
    resources :games
  end
end
