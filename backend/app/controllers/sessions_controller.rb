# frozen_string_literal: true
class SessionsController < ApplicationController
  skip_before_action :authenticate_user!
  expose(:user) { User.find_by_email(params[:email]) }

  def create
    return render json: { token: user.authenticate! }, status: :ok if user && user.authenticate(params[:password])
    render json: { message: 'Invalid email or password.' }, status: 422
  end
end
