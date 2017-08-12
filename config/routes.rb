Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :top, only: %w(index)
  resources :terms, only: %w(index new create)
  root to: 'top#index'
end
