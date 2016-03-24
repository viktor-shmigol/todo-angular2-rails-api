# frozen_string_literal: true
Rails.application.routes.draw do
  scope 'api' do
    resources :users, only: :create
    resources :sessions, only: :create
    resources :tasks
  end
end
