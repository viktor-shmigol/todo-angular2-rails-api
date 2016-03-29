# frozen_string_literal: true
require 'rails_helper'

RSpec.describe TasksController, type: :controller do
  let!(:user) { create(:user) }
  let!(:task) { create(:task, user: user) }
  let(:task_atributes) { attributes_for(:task) }
  let(:task_invalid_atributes) { attributes_for(:task, name: '') }

  before(:each) do
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)
  end

  context '#index' do
    it do
      get :index
      expect(response).to be_success
    end
  end

  context '#create' do
    it 'create task' do
      expect { post :create, task: task_atributes }.to change(Task, :count).by(1)
    end

    it 'not create task' do
      expect { post :create, task: task_invalid_atributes }.to_not change(Task, :count)
    end
  end

  context '#update' do
    it 'update task' do
      put :update, id: task.id, task: { name: 'test' }
      expect(json['name']).to eq 'test'
    end
  end

  context '#destroy' do
    it do
      expect { delete :destroy, id: task.id }.to change(Task, :count).by(-1)
    end
  end
end
