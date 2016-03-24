class UsersController < ApplicationController
  skip_before_action :authenticate_user!, only: :create
  expose(:user)

  def create
    return render json: { token: user.authenticate! }, status: :created if user.update(user_params)
    render json: { status: :error, errors: user.errors.messages }, status: 422
  end

  private

  def user_params
    params.require(:user).permit(:email, :token, :password, :password_confirmation)
  end
end
