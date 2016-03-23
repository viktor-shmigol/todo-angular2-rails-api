# frozen_string_literal: true
class TasksController < ApplicationController
  expose(:task)
  expose(:tasks)

  def index
    render json: tasks, status: :ok
  end

  def create
    return render json: task, status: :created if task.update(task_params)
    render json: { errors: task.errors.full_message }, status: 422
  end

  private

  def task_params
    params.require(:task).premit!
  end
end
