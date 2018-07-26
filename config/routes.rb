Rails.application.routes.draw do
  Rails.application.routes.draw do
    namespace :api do
      resources :users do
        resources :posts
      end
      resources :disciplines do
        resources :posts
        resources :packages
      end
      resources :packages do
        resources :disciplines
      end

    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
