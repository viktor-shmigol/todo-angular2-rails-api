# frozen_string_literal: true
require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  let!(:user) { create(:user) }
  let(:user_atributes) { attributes_for(:user) }
  let(:user_invalid_atributes) { attributes_for(:user, email: '') }

  context '#create' do
    it 'create user' do
      expect { post :create, user: user_atributes, format: :json }.to change(User, :count).by(1)
      expect(json['token']).to_not be_nil
    end

    it 'not create user' do
      expect { post :create, user: user_invalid_atributes, format: :json }.to_not change(User, :count)
      expect(json['errors']).to_not be_nil
    end
  end
end
