# frozen_string_literal: true
class ApplicationController < ActionController::API
  before_action :authenticate_user!

  decent_configuration do
    strategy DecentExposure::StrongParametersStrategy
  end

  expose(:current_user) do
    token = request.headers['Authorization'].to_s.split(' ').last
    User.find_by_token(token) if token
  end

  private

  def authenticate_user!
    unauthorized! unless current_user
  end

  def unauthorized!
    head :unauthorized
  end
end
