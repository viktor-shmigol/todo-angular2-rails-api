# frozen_string_literal: true
class User < ActiveRecord::Base
  has_secure_password

  has_many :tasks, dependent: :delete_all

  validates :password, :password_confirmation, presence: true, confirmation: true, length: { minimum: 8 }, on: :create
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }, uniqueness: true

  def authenticate!
    payload = { data: id }
    token = JWT.encode payload, Rails.application.secrets['secret_key_base'], 'HS256'
    update_attribute(:token, token)
    token
  end
end
