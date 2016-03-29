# frozen_string_literal: true
require 'rails_helper'

RSpec.describe SessionsController, type: :controller do
  let(:user) { create(:user) }

  context '#create' do
    it 'create sessions' do
      post :create, email: user.email, password: user.password, format: :json
      expect(response).to be_success
      expect(json['token']).to_not be_nil
    end

    it 'not create session' do
      post :create, email: '', format: :json
      expect(json['errors']).to be_nil
    end
  end
end
