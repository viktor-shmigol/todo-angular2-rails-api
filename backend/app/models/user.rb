# frozen_string_literal: true
class User < ActiveRecord::Base
  has_secure_password

  has_many :tasks, dependent: :delete_all

  validates :password, :password_confirmation, presence: true, confirmation: true, length: { minimum: 8 }, on: :create
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }, uniqueness: true

  def authenticate!
    update_attribute(:token, Digest::SHA1.hexdigest([Time.now, id, rand].join)[0..16])
    token
  end
end
